---
name: mercor-prep
description: >-
  Mercor onsite prep tracker (Tue 29 Sep 2026). Use when Shayan asks what is next
  on the prep plan, reports a task done or a score, dictates question-bank lines,
  or says a block was missed. Reads the ledger, replies with the next tasks as full
  card fields, updates the ledger, commits and merges to main.
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
4. Reply with the next block: for each task ID, paste its card's Read, Do, Bot (with the prompt to use), Test, and Done when, from the track file. Never reply with bare IDs. Add anything overdue against a fixed date. Only as many words as needed; no motivational text.
5. `git add` the changed files (explicit paths), `git commit`, `git push`, then fast-forward `main` and push it (one git verb per call; shapes in `modes/_custom.md`). Do not ask.

If he asks for a debrief of a rehearsal or mock, open the matching `*-grader-key.md` with him only then, score each rubric line 0 to 2, write the fix list, and do steps 2 to 5.
