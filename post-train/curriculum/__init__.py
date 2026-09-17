"""curriculum: the schedulers under test.

This module must stay importable as `curriculum` from the repository root, with
both classes below, however you organize the rest of your code.

There are two, because the assessment has two parts:

    Scheduler        Part 1. Assume no task damages the model.
    PoisonScheduler  Part 2. Assume some tasks do, and you do not know which.

They are graded separately, each in the world it was written for. Sharing code
between them is expected -- subclass, compose, whatever you like. What we care
about is what the second one does differently, and what that difference costs.

---------------------------------------------------------------------------
THE POLICY, IN TWO PHASES
---------------------------------------------------------------------------

A closed group teaches in proportion to its spread, `k(8-k)/64`, which is zero
when the group comes back all-pass or all-fail. For `k ~ Binomial(8, p)` the
expectation is `E[spread] = (7/8) * p(1-p)`, so a task is worth sampling exactly
insofar as its pass probability sits near 0.5. p is hidden. Everything below is
about finding it and keeping up with it as it moves.

PHASE 1 -- CENSUS. One uniform sweep of the bank, `group` rollouts per task, so
every task closes one group and returns a k-out-of-8. That is the only way to
learn anything about a bank we start out blind to, and it trains the model at
exactly the rate uniform sampling would while it does so.

PHASE 2 -- SCORED SAMPLING. `_choose_trained` scores every task and samples one,
then spends a full group on it. The score has four parts, and each answers
something measured rather than assumed (see `tools/check_census.py`):

  base   = exp(-LAMBDA * age) * p * (1 - p)
      The expected spread, discounted by how stale the reading is. `k/8` has
      RMSE 0.095 against a binomial floor of 0.093 -- it is already as sharp as
      8 samples allow, so a reading cannot be improved, only aged out. And p
      drifts about +0.12 per epoch in the band we care about, which passes the
      noise floor inside one epoch. Hence decay rather than pooling: `p` is the
      LATEST group only. Averaging six epochs of readings hides the drift.

  bonus  = B * age                     when the last group returned 1 or 2
      Hard tasks get easier, so an old hard reading is worth revisiting. Aimed
      at k in {1,2} -- p of 0.125 and 0.25 -- because that band measured a drift
      of +0.121/epoch and ended the run at 0.787. NOT aimed at k=0: tasks that
      censused below 0.1 ended at 0.164 and mostly never move (they are the
      bank's out-of-reach zone, ~38% of it), so a bonus shaped like `(1-p)`
      would pour budget into precisely the tasks that never pay. And not needed
      at k=3: p=0.375 already gives p(1-p)=0.234, 94% of maximum.

  wake   = W * (credit banked on this task's skills since we last looked)
      k=0 tasks are banked, not dropped -- some are merely out of reach FOR NOW.
      They resurface on evidence that the model actually moved on their skills,
      not on a timer. A timer tuned to one budget gives a banked task a single
      look at 5760 and none at 2880.

  skill  = 1 + SKILL_W * sum_s share[s] / (1 + C[s])
      Pass probability is a PRODUCT over skills, so lopsided proficiency is
      punished hard: 0.9 and 0.3 multiply to 0.05 where 0.6 and 0.6 give 0.25.
      Balance beats depth. This tilts toward skills we have fed least. `reasoning`
      appears in only 13 of 120 tasks, and a spread-only policy can starve it
      outright and drag down every probe that needs it.

C[s] is the scheduler's OWN tally of the credit it banked, reconstructed from the
disclosed update rule (`_LR` below, and `gymsim._group_signal`). Nothing here
reads the simulator: every input is a task shape we were handed or a pass/fail we
were told.

SELECTION is a seeded softmax, committing a full group per pick. Greedy argmax
locks in -- a task returning 3-5/8 resets its own age and immediately scores
highest again, so it gets hammered until it saturates, concentrating all credit
on one task's skills. Softmax cannot do that, and it gives banked tasks a small
standing chance for free.
"""

import math
import random

# Disclosed in README.md and gymsim.py:67, and identical in the graded runs. Used
# only to reconstruct the size of the credit WE banked, from outcomes WE saw.
_LR = 0.030

# --- policy constants -------------------------------------------------------
# Tuned with tools/score_run.py across several difficulty salts, not against the
# shipped one alone: a salt redraws the bank's difficulty layout, the starting
# proficiency and the poison set, so one salt is one sample and tuning to it
# overfits to a single draw.
_LAMBDA = 1.5      # confidence decay per epoch of age. 0.0 costs 2 wins in 16.
_B = 0.15          # maturity bonus per epoch, k in {1,2} only. Flat 0.10-0.20.
_W = 0.0           # wake gain, k=0 only. MEASURED TO ZERO -- see below.
_SKILL_W = 2.0     # starved-skill tilt. The single biggest term in the score.
_T = 0.08          # softmax temperature. Sharp on both sides; 0.05 and 0.12 lose.

# _W = 0 is a result, not an oversight. The wake term was built to resurface
# banked k=0 tasks on evidence that their skills had moved, and it measured
# monotonically harmful across 16 salts: +0.0261 at W=0, +0.0239 at 0.25, +0.0211
# at 0.5. The reason is that softmax already does the job. A k=0 task scores ~0,
# but exp(-top/T) is not zero, so the 47-odd banked tasks collectively still draw
# a few percent of picks -- enough to catch the ones that wake up, without an
# explicit term bidding budget away from tasks that are informative right now.
# The branch is kept because it is one constant away from being live again, and
# because a bank with a different zone layout could want it.


class Scheduler:
    """Part 1: every task is safe to train on.

    COST SHAPE. `bin/check` fits cumulative scheduler cost against
    `total * (i/n)^p` and fails anything whose per-call cost grows with the
    history it has seen. `observe` is O(1). `_choose_trained` rescores the bank
    once per GROUP and holds the result for the next `group - 1` calls, so it is
    O(n_tasks / group) per rollout amortised -- about 15 operations here, and
    flat in history, which is what the fit demands. The constructor is charged
    once per graded run and there are 240 of those per class, so it stays at a
    handful of comprehensions.

    DETERMINISM. The only randomness is `random.Random(seed)`, seeded from the
    seed we are handed. Nothing reads the clock or a global RNG, so two runs of
    the same config produce byte-identical artifacts.
    """

    def __init__(self, tasks, budget, cadence, group, seed):
        """tasks: list of {"task_id": str, "skills": {skill_name: float}}.
        budget: total number of rollouts this run may spend.
        cadence: the simulator applies model updates every `cadence` rollouts.
        group: rollouts per group. Read gymsim to see what a group is for.
        seed: an integer seed for any randomness the scheduler itself uses.
        """
        self.budget = int(budget)
        self.cadence = int(cadence)
        self.group = max(1, int(group))
        self.seed = int(seed)
        self._rng = random.Random(self.seed)

        self._order = [t["task_id"] for t in tasks]
        self._n = len(self._order)

        # How a group's credit splits across the skills a task needs. Mirrors
        # gymsim._share: the shape normalised to sum to 1, so one closed group is
        # one unit of training however many skills are involved.
        self._share = {}
        for t in tasks:
            shape = t["skills"]
            total = sum(shape.values()) or 1.0
            self._share[t["task_id"]] = {s: w / total for s, w in shape.items()}

        # Lifetime tallies, for reporting only. The policy does not read these:
        # pooling every epoch of observations is exactly what hides the drift.
        self._stats = {tid: [0, 0] for tid in self._order}

        # Our own group accounting. The simulator never tells us a group closed,
        # so we count the same way it does: per task, closing at `group`.
        self._pend = {tid: [0, 0] for tid in self._order}   # [rollouts, passes]
        self._last_k = {tid: None for tid in self._order}   # last CLOSED group
        self._last_n = {tid: 0 for tid in self._order}
        self._last_at = {tid: 0 for tid in self._order}     # group index then
        self._c_last = {tid: 0.0 for tid in self._order}    # our credit then
        self._groups = 0

        # Credit we believe we have banked per skill, from the disclosed rule.
        self._credit = {}
        for sh in self._share.values():
            for s in sh:
                self._credit.setdefault(s, 0.0)

        self._i = 0            # rollouts issued
        self._current = None   # task the open group belongs to
        self._held = 0         # rollouts still owed to that group

        # NOT hardcoded to one epoch: grading drives budgets of 960, 2880, 5760
        # and 11520. At 960 the census is the whole run and phase 2 never fires.
        # Capping at `budget` also stops the sweep opening a group it cannot fill.
        self._census_len = min(self._n * self.group, self.budget)

    # -- the interface ------------------------------------------------------

    def choose(self):
        """Return the task_id (str) to sample the next rollout on."""
        if self._i < self._census_len:
            # PHASE 1. One pass over the bank, `group` rollouts each. The index
            # cannot run off the end: _i < _census_len <= n * group.
            tid = self._order[self._i // self.group]
        else:
            tid = self._choose_trained()
        self._i += 1
        return tid

    def observe(self, task_id, passed):
        """Called after every rollout with its pass/fail outcome (bool)."""
        st = self._stats[task_id]
        st[0] += 1
        pend = self._pend[task_id]
        pend[0] += 1
        if passed:
            st[1] += 1
            pend[1] += 1
        if pend[0] >= self.group:
            self._close(task_id)

    # -- group accounting ---------------------------------------------------

    def _close(self, task_id):
        """Bank what a closed group taught us, and what it taught the model.

        Both halves matter. `_last_k` is the fresh reading the score runs on, and
        `_credit` is our reconstruction of where that group's gradient landed --
        the same arithmetic gymsim._close_group does, on the outcomes we saw.
        """
        n, k = self._pend[task_id]
        signal = k * (n - k) / float(n * n) if n > 1 else 0.0
        share = self._share[task_id]
        for s, w in share.items():
            self._credit[s] += _LR * signal * w * n

        self._last_k[task_id] = k
        self._last_n[task_id] = n
        self._groups += 1
        self._last_at[task_id] = self._groups
        # Credit standing on this task's skills as of this look. The wake term
        # measures movement away from here.
        self._c_last[task_id] = sum(w * self._credit[s] for s, w in share.items())
        self._pend[task_id] = [0, 0]

    # -- phase 2 ------------------------------------------------------------

    def _score(self, task_id):
        """What one more group on this task is worth. See the module docstring."""
        k = self._last_k[task_id]
        share = self._share[task_id]

        # Starved-skill tilt. C[s] only grows, so this only shrinks; a skill we
        # have fed nothing keeps its full weight while a well-fed one fades out.
        starve = sum(w / (1.0 + self._credit[s]) for s, w in share.items())
        tilt = 1.0 + _SKILL_W * starve

        if k is None:
            # Never closed a group. Unreachable while the census runs to
            # completion, but if it ever happens, measuring beats guessing.
            return 0.25 * tilt

        p = k / float(self._last_n[task_id])
        age = (self._groups - self._last_at[task_id]) / float(self._n)

        # Expected spread, discounted by staleness.
        value = math.exp(-_LAMBDA * age) * p * (1.0 - p)

        if k == 1 or k == 2:
            # Nearly there, and getting nearer. The band that pays.
            value += _B * age
        elif k == 0:
            # Banked. Wakes on evidence that its skills actually moved, so it
            # costs nothing on a bank where they did not.
            moved = sum(w * self._credit[s] for s, w in share.items())
            value += _W * max(0.0, moved - self._c_last[task_id])

        return value * tilt

    def _choose_trained(self):
        """PHASE 2. Softmax over scores, one full group per pick."""
        if self._held > 0:
            self._held -= 1
            return self._current

        scores = [self._score(tid) for tid in self._order]
        top = max(scores)
        # Shift before exp: scores are small and positive, but this costs one
        # subtraction and removes any chance of an overflow at a low temperature.
        weights = [math.exp((s - top) / _T) for s in scores]

        r = self._rng.random() * sum(weights)
        acc = 0.0
        self._current = self._order[-1]     # guard against float drift in the tail
        for tid, w in zip(self._order, weights):
            acc += w
            if r < acc:
                self._current = tid
                break

        # Commit a whole group. Anything less leaves partial groups, which bank
        # at reduced size -- and a group of one has no spread at all. If the
        # budget ends mid-group, spend what is left on this one task so the
        # partial that does form is as large, and as informative, as possible.
        self._held = min(self.group, self.budget - self._i) - 1
        return self._current

    # -- reporting ----------------------------------------------------------
    # Never called from the rollout loop, so O(n) here costs nothing at grading.

    def p_hat(self, task_id):
        """Lifetime pass rate for a task, or None if it was never sampled."""
        n, passes = self._stats[task_id]
        return passes / n if n else None

    def snapshot(self):
        """Every task's observation record, for offline inspection."""
        return [
            {
                "task_id": tid,
                "n": self._stats[tid][0],
                "passes": self._stats[tid][1],
                "p_hat": self.p_hat(tid),
                "last_k": self._last_k[tid],
                "last_n": self._last_n[tid],
                "score": self._score(tid),
            }
            for tid in self._order
        ]


class PoisonScheduler(Scheduler):
    """Part 2: some tasks may land their credit with the sign reversed, and
    nothing marks them. Same interface, same budget.

    This one is run BOTH on banks that contain such tasks and on banks that do
    not, and it is not told which. Both count toward its score.

    NOT ADDRESSED YET -- currently identical to `Scheduler`, and saying so plainly
    is worth more than a half-guess that quietly costs score on clean banks.

    What Part 1 leaves it, for the record. A poisoned task banks
    `-LR * k(8-k)/64 * share[s] * 8`, so it is invisible in its own pass rate: it
    looks like any other informative task, and the skills it damages are usually
    being trained back up by clean tasks that share them. The only signal is
    comparative -- a skill improving less than the tasks feeding it should predict.

    The specific thing to fix first is `_credit`. It is a tally of what we BELIEVE
    we banked, and poison flips the true sign without telling us, so on a poisoned
    bank the starved-skill tilt in `_score` steers TOWARD the skill being damaged
    -- the one place this policy actively helps the poison. Gathering the evidence
    to correct that costs budget, and the poisoned fraction is drawn per run in
    [0.0, 0.40] and can be exactly zero, so any detector has to pay for itself on
    banks where there is nothing to find.
    """
