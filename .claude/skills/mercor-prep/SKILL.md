---
name: mercor-prep
description: >-
  Mercor onsite prep tracker (Tue 29 Sep 2026). Use when Shayan asks what is next
  on the prep plan, reports a task done or a score, dictates question-bank lines,
  or says a block was missed. Reads the ledger, replies with the ONE task to do
  now (plus what comes next in a line), updates the ledger, commits and merges
  to main.
user_invocable: true
user-invocable: true
argument-hint: "[what you did and how it scored, or nothing for 'what is next']"
---

# /mercor-prep

The plan is `interview-prep/mercor-onsite-plan.md`. The cards, one per task ID, are `interview-prep/mercor-onsite/practical-track.md`, `algorithms-track.md`, `post-training-track.md` (plan §5 for L tasks). The ledger is `interview-prep/mercor-onsite/ledger.md`. The house rule is in `modes/_custom.md` ("Mercor onsite prep").

Every time:

1. Read `ledger.md` (all of it) and plan §6. Read `date` from the shell; the ledger's clock is his, ET until Fri 25, PT after.
2. If he reported anything: update the ledger's status table (todo · doing · done · dropped), add a dated log line with what he did and the score, bump the counters, append any question-bank lines he dictated to both the ledger and `interview-prep/question-bank.md`.
3. If a block was missed: re-cut only the next 2 to 3 days of plan §6 and the ledger's "Next block"; say what moved and what was dropped. Fixed dates (rehearsals, laptop, Salman, flight, the onsite) never move. Never rewrite the lists or the cards.
4. Reply with ONE task, the one to do now. Low stress, piece by piece. The shape, and nothing outside it:
   - **Now.** ID and name · when and device · the card's Do and Done when, verbatim (and Read, if the card has one). If the task opens a thread, name it and say where the prompt lives (plan §1, or `format-analysis.md` §8.x); paste the prompt only if he asks.
   - **Then.** The next one or two tasks, one line each: ID, name, when. No card fields.
   - **Watch.** Only if there is one: a blocker for the now task, or something overdue or at risk against a fixed date. One line each. Omit the section when empty.
   - If a block was missed: one line on what moved, one on what was dropped. The full re-cut lives in the ledger and §6, not in the reply.
   Never the whole day or block, never more than one card, never bare IDs, no prompts unless asked, no motivational text. When he reports a task done, the reply is the same shape for the next one. He can always ask "what's after that" or "give me the prompt".
5. `git add` the changed files (explicit paths), `git commit`, `git push`, then fast-forward `main` and push it (one git verb per call; shapes in `modes/_custom.md`). Do not ask.

If he asks for a debrief of a rehearsal or mock, open the matching `*-grader-key.md` with him only then, score each rubric line 0 to 2, write the fix list, and do steps 2 to 5.
