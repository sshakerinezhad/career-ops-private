#!/usr/bin/env python3
"""
===========================================================================
ANALYSIS ONLY. READS HIDDEN SIMULATOR STATE. NEVER IMPORTED BY curriculum/.
===========================================================================

The missing feedback loop. `config/run.json` ships no `eval_bank`, so
`sim.eval_report()` returns zeros and no local run tells you whether the policy
is any good. The scheduler has five constants; without a score they are guesses.

This builds the probe set the grader builds -- `gymsim._bands_for(salt)` plus
`_BAND_SPREAD`, exactly as `gymsim._eval_scale` does -- scores the trained model
with `gymsim._pass_prob`, and reports `curriculum.Scheduler` against
`gymsim.BaselineScheduler` on the same bank, same seed.

WHY IT SWEEPS SALTS. A salt redraws the difficulty layout, the zone boundaries,
the starting proficiency and the poison set. The task SHAPES stay (they come from
tasks/train.jsonl) but everything about how hard those tasks are moves. So a new
salt is a genuinely different bank over the same shapes -- the closest local
stand-in for the redraw that happens at grading. One salt is one sample. Tuning
against the shipped salt alone overfits to a single draw, which is the exact
mistake the assessment is built to catch.

The probes are deliberately NOT the training shapes. README says the evaluation
set comes from an entirely separate distribution, so this includes three-skill
probes, which the training bank does not contain at all.

USAGE

    python tools/score_run.py                       # 6 salts, clean banks
    python tools/score_run.py --salts 12
    python tools/score_run.py --poison              # let salts draw poison
    python tools/score_run.py --set LAMBDA=0.5,B=0.2
    python tools/score_run.py --sweep B=0.05,0.1,0.2
"""

import argparse
import itertools
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import curriculum  # noqa: E402
import gymsim  # noqa: E402

SKILLS = ["planning", "coding", "reasoning", "tool_use", "math"]
BANDS = ["easy", "frontier", "hard"]


def build_probes():
    """A probe bank in the grader's format: task_id, skills (a shape), band.

    Separate distribution from training on purpose: every skill appears at every
    band, pairs are evenly covered rather than following the training bank's
    lopsided frequencies, and there are three-skill probes, which training has
    none of. Deterministic -- no RNG, so every run scores the same probes.
    """
    probes = []
    for band in BANDS:
        for s in SKILLS:
            probes.append({"task_id": "e1_%s_%s" % (s, band),
                           "skills": {s: 1.0}, "band": band})
        for a, b in itertools.combinations(SKILLS, 2):
            probes.append({"task_id": "e2_%s_%s_%s" % (a, b, band),
                           "skills": {a: 1.0, b: 0.5}, "band": band})
        for a, b, c in list(itertools.combinations(SKILLS, 3))[:5]:
            probes.append({"task_id": "e3_%s_%s_%s_%s" % (a, b, c, band),
                           "skills": {a: 1.0, b: 0.6, c: 0.35}, "band": band})
    return probes


def score(sim, salt, probes):
    """Mean pass probability over the probes, the way the grader scores."""
    rows = []
    for p in probes:
        sc = gymsim._eval_scale(salt, p)
        demands = {s: sc * w for s, w in p["skills"].items()}
        rows.append((demands, gymsim._pass_prob(sim._prof, demands, sim.slope)))
    return gymsim._assemble_report(rows, SKILLS)


def one_run(cfg, salt, seed, cls, probes):
    cfg = dict(cfg)
    cfg["difficulty_salt"] = salt
    cfg["seed"] = seed
    sim = gymsim.Simulator(cfg)                    # no out_dir: writes nothing
    tasks = gymsim.public_tasks(sim.tasks)
    sched = cls(tasks, sim.budget, sim.cadence, sim.group,
                int(cfg.get("scheduler_seed", 0)))
    for _ in range(sim.budget):
        tid = sched.choose()
        sched.observe(tid, sim.rollout(tid))
    sim.close()
    return score(sim, salt, probes), sim.group_stats


def evaluate(cfg, salts, probes):
    """Returns (mean delta, wins, rows) for the current constants."""
    rows = []
    for i, salt in enumerate(salts):
        seed = 1000 + i
        b_rep, b_st = one_run(cfg, salt, seed, gymsim.BaselineScheduler, probes)
        s_rep, s_st = one_run(cfg, salt, seed, curriculum.Scheduler, probes)
        rows.append({
            "salt": salt,
            "base": b_rep["mean"], "sched": s_rep["mean"],
            "delta": s_rep["mean"] - b_rep["mean"],
            "base_min": b_rep["min"], "sched_min": s_rep["min"],
            "base_info": b_st["groups_informative"],
            "sched_info": s_st["groups_informative"],
            "sched_partial": s_st["partial"],
        })
    wins = sum(1 for r in rows if r["delta"] > 0)
    mean_delta = sum(r["delta"] for r in rows) / len(rows)
    return mean_delta, wins, rows


def apply_consts(spec):
    """--set LAMBDA=0.5,B=0.2 -> patch the module constants in place."""
    if not spec:
        return
    for part in spec.split(","):
        name, _, val = part.partition("=")
        attr = "_" + name.strip().upper()
        if not hasattr(curriculum, attr):
            raise SystemExit("unknown constant: %s" % name)
        setattr(curriculum, attr, float(val))


def consts():
    return {n: getattr(curriculum, "_" + n)
            for n in ("LAMBDA", "B", "W", "SKILL_W", "T")}


def main():
    ap = argparse.ArgumentParser(description="Score the scheduler against the baseline.")
    ap.add_argument("--config", default=os.path.join("config", "run.json"))
    ap.add_argument("--salts", type=int, default=6)
    ap.add_argument("--budget", type=int, default=None)
    ap.add_argument("--poison", action="store_true",
                    help="let each salt draw its own poison rate (Part 2 world)")
    ap.add_argument("--set", dest="setc", default=None,
                    help="override constants, e.g. LAMBDA=0.5,B=0.2")
    ap.add_argument("--sweep", default=None,
                    help="sweep one constant, e.g. B=0.05,0.1,0.2")
    ap.add_argument("--prefix", default="sweep-salt",
                    help="salt name prefix. Tune on one prefix, confirm on "
                         "another: same code, entirely different banks.")
    args = ap.parse_args()

    cfg = gymsim.load_config(args.config)
    if args.budget:
        cfg["budget"] = int(args.budget)
    if not args.poison:
        # Part 1 assumes every task is safe. Leaving poison on would tune the
        # constants against damage this scheduler does not claim to handle.
        gymsim._POISON_RATE = 0.0

    apply_consts(args.setc)
    salts = ["%s-%02d" % (args.prefix, i) for i in range(args.salts)]
    probes = build_probes()

    print("budget %d   salts %d   probes %d   poison %s"
          % (cfg["budget"], len(salts), len(probes),
             "per-salt draw" if args.poison else "disabled"))

    if args.sweep:
        name, _, vals = args.sweep.partition("=")
        print()
        print("  %-10s %10s %8s" % (name.strip(), "mean delta", "wins"))
        best = None
        for v in vals.split(","):
            apply_consts("%s=%s" % (name, v))
            md, wins, _ = evaluate(cfg, salts, probes)
            print("  %-10s %+10.4f %6d/%d" % (v, md, wins, len(salts)))
            if best is None or md > best[1]:
                best = (v, md)
        print()
        print("  best %s=%s at %+.4f" % (name.strip(), best[0], best[1]))
        return 0

    print("constants " + "  ".join("%s=%g" % kv for kv in sorted(consts().items())))
    mean_delta, wins, rows = evaluate(cfg, salts, probes)

    print()
    print("  %-16s %8s %8s %9s %8s %8s" %
          ("salt", "baseline", "ours", "delta", "b.info", "s.info"))
    for r in rows:
        print("  %-16s %8.4f %8.4f %+9.4f %8d %8d"
              % (r["salt"], r["base"], r["sched"], r["delta"],
                 r["base_info"], r["sched_info"]))

    print()
    print("  mean delta      %+.4f" % mean_delta)
    print("  wins            %d / %d" % (wins, len(rows)))
    print("  mean min-skill  baseline %.4f   ours %.4f"
          % (sum(r["base_min"] for r in rows) / len(rows),
             sum(r["sched_min"] for r in rows) / len(rows)))
    partial = sum(r["sched_partial"] for r in rows)
    print("  partial rollouts %d  %s" % (partial, "OK" if partial == 0 else "LEAK"))
    return 0 if wins > len(rows) / 2 else 1


if __name__ == "__main__":
    raise SystemExit(main())
