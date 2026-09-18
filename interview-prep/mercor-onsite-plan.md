# Mercor onsite, Tue 29 Sep 2026: the plan

Research Engineer, Post Training. Tracker #32. One list per interview; each task has an ID, a done-when test, and a device tag; the schedule is keyed by those IDs. Content (specs, drills, keys, numbers) lives in the files each task names. Rebuilt 2026-09-18.

## Now

Updated 2026-09-18 evening.
- Next: P1a tonight, then P3a. Sat 19 09:30: P4 with the agent, then P3b, P3c.
- Done: none. In progress: none.
- Waiting on: nothing. The last two artifacts land tonight (§8).

## 0. The day

181 Fremont St, 33rd floor, lobby desk, arrive 11:30 PT. Photo ID. Own laptop and charger. Casual. Lunch provided. NDA signed. Your API key, any provider (Emily, 09-18). Day-of help: Maggie +1 (818) 699-5444, Emily +1 (323) 363-0240. No rescheduling.

| PT | Session | Who |
|---|---|---|
| 11:30 | Set-up | Maggie Cassidy |
| 11:45 | Practical: kickoff | Austin Bennett |
| 12:00 to 13:30 | Practical: solo work | |
| 13:30 | Practical: presentation | Austin Bennett |
| 14:00 to 14:30 | Algorithms | Jiwon Lee |
| 15:00 to 15:45 | Post-training, only if the first two pass | Charlie Ruan |
| 15:45 | Wrap-up | Maggie Cassidy |

## 1. Rules

- A task is done when its done-when test is met. Tasks are in priority order within each list. ID to file map: `mercor-onsite/index.md`.
- Device: **dev** = any computer with Python and your keys (the travel laptop from Mon 21) · **screen** = any computer or phone · **paper** = paper, whiteboard, or recorder.
- Every mock or drill ends with a line in `question-bank.md` (question in the interviewer's words, status, gap). No line, no credit.
- Practise in the test's format. Produce first, check second. Never open a key before its drill. No crib sheet in practice. Bed by 23:00. Nothing new after Sun 27.
- Split about 38 / 30 / 32 (practical / algorithms / post-training).

**Fresh topic, five steps** (each an `evidence.md` row):
1. Attempt cold, 5 minutes, write what you can (Sinha & Kapur 2021).
2. One short instruction pass: the primer, the primary source, or the tutor skill with the syllabus row pasted; hints before answers (Bastani 2025).
3. Close everything, reproduce from memory, check the key, write the miss (Rowland 2014).
4. Same day, an interviewer thread on it; "explain" only after an attempt (Pan & Rickard 2018).
5. Re-test in 1 to 2 days and again around day 5 to 7, mixed with other topics; teach it once aloud with no notes (Cepeda 2008; Brunmair & Richter 2019; Koh 2018).
Feels easy and fluent: close the book (Deslauriers 2019).

**Interviewer thread** (the engine):
- Fresh thread. Paste the prompt from `mercor-onsite/format-analysis.md` §8 (8.1 post-training, 8.2 algorithms, 8.3 presentation Q&A, 8.4 brief triage). Two or three questions at a time.
- Answer aloud by dictation. "explain" only after your attempt.
- At the end ask for the ranked gap list; copy it into `question-bank.md`; the next thread opens with "start on these gaps: ...". New thread every time.
- Minimum one thread a day. Targets: T9, A7, P7, P12.

**This file:** the lists are stable. Now changes every session. The schedule is re-cut for the next 2 to 3 days after each rehearsal debrief.

## 2. Practical (2 h, Austin Bennett)

Scored, their words (`format-analysis.md` §1): design, implement, analyze; "good experiments and understanding statistics, having good judgment"; a number you can defend; the AI-written code explained line by line. The 90 minutes fit only with a pre-built, rehearsed toolkit (§1.6). Five brief shapes (§1.3).

| ID | Task | Done when | Device |
|---|---|---|---|
| P1a | Keys and tools on the machine you have: OpenAI, Anthropic, Google, OpenRouter (inference keys, funded); Cursor account; Claude Code in the terminal. | Four successful calls. | dev |
| P1b | Travel laptop (Tue 22): clone the toolkit, keys in `.env`, smoke test on a phone hotspot; Cursor and Claude Code logged in. | Smoke test passes on the hotspot. | travel laptop |
| P2 | Mercor's grading code once, 45 min (`research/mercor-output-2026.md` §2). Accept the Hugging Face gates on `mercor/apex-agents-v1.1` and `mercor/apex-agents` (log in, dataset page, accept terms, auto-approved); download one task dir; read `tests/grade.py` and `grading_config.json`. | Say from memory what their judge sees, returns, forbids; one task dir on disk. | screen |
| P3 | Toolkit v1 per `mercor-onsite/toolkit-spec.md`, public GitHub repo. Order: P3a inference, P3b grade and metrics, P3c failures, report, README. | Clean clone to first result under 5 min, timed; unit tests pass; second run costs $0; every function explainable. | dev |
| P4 | Run-sheet `mercor-onsite/run-sheet.md` : the 90 minutes minute by minute, pre-flight checklist, if-then rules, 5-slide template, kickoff questions. Read it with the agent Sat 19 09:30; change what does not fit you. | Printed; used in every rehearsal. | screen |
| P5 | Rehearsal 1, Sun 20: `mock-1-brief.md`. 15 brief, 90 timed, 15 presentation recorded, emailed to yourself by minute 90. Debrief against `mock-1-grader-key.md`. | Score on the key (14+ ready; 10 to 13 repeat the weak rows; under 10 rebuild); fix list. | dev |
| P6 | Toolkit v2 from the fix list; final fixes after rehearsal 2. | Clean clone under 5 min again. | dev |
| P7 | After each rehearsal: a §8.3 thread with your slides, results, code. | No function you cannot explain; gaps logged. Three threads by Sat 26. | screen |
| P8 | Rehearsal 2, Wed 23, travel laptop: `mock-2-brief.md`. Camera on; the recording is graded. | Emailed by minute 90; 12+ of 16. | travel laptop |
| P9 | Rehearsal 3, Sat 26 PT: `mock-3-brief.md` with a planted-bug judge (agent writes by Fri 25). Present to Salman. | Bug found; 14+ of 16. | travel laptop |
| P10 | Kickoff script from memory (`format-analysis.md` §1.9) plus the toolkit ask: "I have a small open-source eval harness of my own, fine to use it?" | Under 60 s, no notes. | paper |
| P11 | Sun 27, travel laptop: presentation dry run twice; email flow test; clean clone; keys; Cursor; battery; printouts. | All green; laptop closed. | travel laptop |
| P12 | Brief-triage drills, 10 min each, in a §8.4 thread: get a brief, write the first-10-minutes plan (one question, one metric, cut list, smoke set, what to read by hand, risks), get graded. | Five by Sat 26; the last two Strong on every item. | screen |

Track done: P9 at 14+; P6 under 5 min; P7 clean; presentation conclusion-first in 8 min.

## 3. Algorithms (30 min, Jiwon Lee)

Their words: "real architecture challenges, infrastructure decisions, and scaling strategies... Not Leetcode, not system design. True algorithms." Jiwon Lee: Applied AI Engineer, no public work. No first-hand account of this round exists; content is inferred (`format-analysis.md` §2; `research/candidate-reports.md` R10). Three layers, all rotated by the threads: 1 CS core · 2 math, probability, statistics, ML arithmetic (Mercor's attested prompts include a compact GPT-style transformer review, candidate search with "top-p vs beam", coffee-cup probability) · 3 Mercor-specific drills. Scored: the six-move protocol, adapting when a constraint changes, taking hints.

| ID | Task | Done when | Device |
|---|---|---|---|
| A1 | Six-move protocol and pacing phrases (`mercor-onsite/algorithms-drills.md`), plus 10 to 15 lines of pseudocode on request. | Said without the sheet on three days. | paper |
| A2 | Pattern sheet, 22 rows (same file): when it applies, its cost. | All 22 cold. | paper |
| A3 | Prove-it list, 12 items (`mercor-onsite/theory-syllabus.md` Part 2), closed book, aloud, scored 0/1/2. Sat 19, Tue 22, Fri 25. | Two consecutive all-2 passes. | paper |
| A4 | Layer 1: syllabus Part 2 rows A to D and G at L2, then Part 2b (breadth sweep). Fresh rows via the five steps. | Every row L2 closed-book; breadth items cold. | paper |
| A5 | Layer 2: syllabus Part 2c (probability, statistics, bandits, ML arithmetic, transformer mechanics, decoding) at L2. | Each row L2; the three attested prompts answered aloud in under 5 min each. | paper |
| A6 | Layer 3: drills 1 to 6 (`algorithms-drills.md`, keys in `algorithms-grader-key.md`) and 7 to 10, each spoken in a §8.2 thread and graded against the key. | Each 12+ of 16; under 10 repeats next day. | screen |
| A7 | Fresh §8.2 threads, the interviewer picks the layer and family; about one a day, 12 total. | Three consecutive 12+ on families you did not choose. | screen |
| A8 | Mental arithmetic: calls × latency / concurrency; KV ceiling; staleness bound; Little's law; birthday bound; majority-of-m; FLOPs per step. | Ten estimates under 30 s each, within 2x. | paper |
| A9 | Salman (robotics research engineer, DeepMind), Sun 27 morning PT: one or two problems, constraint change at 15 min. | Notes in the question bank. | paper |

Track done: A3 two clean passes; A7 three consecutive 12+; A4 and A5 cold; A1 automatic.

## 4. Post-training (45 min, Charlie Ruan; only if the first two pass)

Their words: "explaining mechanisms rather than recalling terminology"; "how you reason through an unfamiliar tradeoff." Charlie's ground: async RL, staleness, logprob mismatch and its corrections, TITO and step-wise training, aggregation and length, the 397B numbers (`research/interviewers.md` §3). The screen's misses were precision misses (`question-bank.md`). Bar: `theory-syllabus.md` Part 1 at L2 to L4, Part 0 field maps at L1 to L3; the routine for an unfamiliar trade-off: objective, constraint, two options, failure mode of each, cheapest deciding experiment. At the edge: "I have not seen that; here is what I would measure." Never claim LLM RL you have not run.

| ID | Task | Done when | Device |
|---|---|---|---|
| T1 | Derivation deck, 12 items (syllabus Part 1), closed book, timed, 0/1/2, checked against `post-training-primer.md`. Fri 18, Sun 20, Thu 24, Sun 27. Misses open the next T9 thread. | Two consecutive all-2 passes. | paper |
| T2 | Screen gaps: environment-design walkthrough (assumption, prompt set, verifier, harness, de-risk, failure modes) on HLE, an APEX-style banking task, a Catan negotiation, 2 min each, recorded, graded against the Q3 answer in `mercor-research-engineer-post-training.md`; the two one-liners (the critic estimates value, the verifier gives reward; the loss mask picks tokens, the reward picks what is scored). | Three recordings under 2:15 with all six steps; one-liners right first try on two days. | paper |
| T3 | SkyRL toy environment on `BaseTextEnv` (`init`, `step`, `register`), one episode; unit-test the class if the install fights past 45 min. | Episode runs or the test passes. | dev |
| T4 | Your scheduler at mechanism depth: the 12 questions in `format-analysis.md` §0.5, aloud, no notes, with the map to real RL. | All 12 clean on a recording. | paper |
| T5 | Primary sources, once each, as step 2 for a fresh row: the 397B post; SkyRL docs (step-wise, agent integration, off-policy correction, DAPO); Jet-RL abstract and mismatch section; DAPO §3; DeepSeekMath §4.1; DPO §4; APEX-Agents §4.2. | Each source's numbers recited. | screen |
| T6 | Part 1 rows A to G at L2 to L4, then Part 0 field maps at L1 to L3, closed-book row by row. | No row below its level. | paper |
| T7 | Trade-off drills, `mercor-onsite/tradeoff-drills.md` (15 prompts), spoken, 2 min each, the routine, attempted before any key. | 15 recordings, routine in each. | paper |
| T8 | Evidence as mechanism, 5 lines each: LIBERO-PRO, VLM judges, BMO pipeline, Catan. | Written; each under 60 s aloud. | paper |
| T9 | Fresh §8.1 threads, 20 to 30 questions each, dictated; one most days, 8 total. | Three consecutive threads with no new gap and no topic bottomed out. | screen |
| T10 | Salman, Sat 26 14:00 PT, 45 + 15, scored aloud on the two rubric lines; leans on RL fundamentals, reward design, imitation vs RL, your VLA and Catan work. | Debrief in the question bank. | paper |
| T11 | Numbers cold: `mercor-onsite/numbers.md`. | 100% on two days. | paper |
| T12 | Two questions for Charlie (`numbers.md`). | Two picked. | paper |
| T13 | Small GRPO run on a rented GPU per `mercor-onsite/grpo-run.md`. Wed 23 afternoon, only if rehearsal 2 is 12+ and A6 averages 12+. | One run; the four curves seen (reward, KL, length, zero-advantage fraction); each loss line tied to a T1 item; a 60-second account. | dev |

Track done: T1 two clean passes; T9 three clean threads; T2 clean; T11 100%.

## 5. Logistics

| ID | Task | When |
|---|---|---|
| L1 | One-page card from memory, corrected once, never open in practice. | Write Thu 24; read Mon 28 and Tue 29 morning. |
| L2 | Pack: laptop, charger, ID, printed run-sheet, pattern sheet, card, water, snacks. | Thu 24. |
| L3 | Bed by 23:00. In SF: evening light, no bright light before 07:00 PT, no melatonin. | Daily. |
| L4 | Travel laptop arrives Sun 20 or Mon 21; P1b Tue 22; rehearsal 2 runs on it. | Tue 22. |
| L5 | Brex form and receipts. | After. |
| L6 | Every question in their words into `interview-prep/sessions/`, then `/career-ops interview/debrief`. | Tue 29 evening. |

## 6. Schedule (ET to Fri 25, then PT)

Fixed: lectures, Strahd, Akira, Readers of Books. Skipped: Aemma, Robotics Jam, Serobro, DnD, Meg's. Wed 23 free until 19:00. Re-cut the next 2 to 3 days after each rehearsal debrief. Threads fit any spare 45 minutes on a phone.

| Day | Block | Tasks | Device |
|---|---|---|---|
| Fri 18 | 17:30 to 19:30 | P1a, then P3a | dev |
| | 20:00 to 21:00 | T1 pass 1; write the miss list | paper |
| | 21:00 to 22:00 | A1, A2 first pass | paper |
| Sat 19 | 09:30 to 10:00 | P4 with the agent; one P12 brief after | screen |
| | 10:00 to 13:00 | P3b, P3c; time the clean clone | dev |
| | 14:00 to 15:30 | T2: three targets recorded; the two one-liners | paper |
| | 16:00 to 17:00 | A6 drills 1 and 2 | screen |
| | 17:00 to 17:30 | A3 pass 1 | paper |
| | 17:30 to 18:30 | A4: five steps on the first gaps | paper |
| | 20:00 to 21:00 | T9 thread 1 (optional if DnD) | screen |
| Sun 20 | 08:30 to 10:45 | P5 rehearsal 1 | dev |
| | 10:45 to 11:30 | P5 debrief with the agent; fix list; schedule re-cut | screen |
| | 15:00 to 16:00 | P6 | dev |
| | 16:00 to 17:00 | T3 | dev |
| | 17:00 to 18:00 | A6 drills 3 and 4 | screen |
| | 18:00 to 18:30 | T1 pass 2; T11 pass 1 | paper |
| | 19:00 to 20:00 | A7 round 1 | screen |
| Mon 21 | 07:30 to 09:00 | A6 drills 7 and 8 | screen |
| | 12:30 to 13:15 | P7 thread on rehearsal 1 | screen |
| | 20:15 to 21:30 | T9 thread 2 | screen |
| | 21:30 to 22:00 | T8 story cards; question-bank lines | paper |
| Tue 22 | 07:30 to 09:00 | T7 drills 1 to 5; then T5 on the gaps found | paper, screen |
| | 12:30 to 13:15 | P1b | travel laptop |
| | 21:15 to 22:30 | A3 pass 2; A5: five steps on probability and statistics | paper |
| Wed 23 | 07:30 to 09:45 | P8 rehearsal 2, camera on | travel laptop |
| | 10:00 to 10:45 | P8 debrief; fix list; schedule re-cut | screen |
| | 11:00 to 12:00 | P7 thread on rehearsal 2 | screen |
| | 13:00 to 16:00 | T13 if the gate condition holds; else A7 rounds and A4, A5 | dev |
| | 16:15 to 17:30 | A6 drills 9 and 10 | screen |
| | 17:30 to 18:30 | T9 thread 3 | screen |
| Thu 24 | 07:30 to 09:00 | A7 rounds 2 and 3 | screen |
| | 12:30 to 13:15 | T1 pass 3 | paper |
| | 21:15 to 22:30 | P6 final fixes; L1 card; L2 pack; print | dev, paper |
| Fri 25 | 07:30 to 09:00 | T2 last reps; T4; T11 | paper |
| | in flight | A3 pass 3; T6 Part 0 check; T8 read; A2, A4, A5 self-quiz | paper |
| | evening | nothing; L3 | |
| Sat 26 (PT) | 09:00 to 11:15 | P9 rehearsal 3, present to Salman | travel laptop |
| | 11:15 to 11:45 | P9 debrief | screen |
| | 14:00 to 15:00 | T10 Salman mock | paper |
| | 15:15 to 16:15 | T9 thread 4, or P7 thread on rehearsal 3 | screen |
| | 16:15 to 16:45 | A8; T11 | paper |
| Sun 27 (PT) | 09:00 to 09:45 | A9 Salman mock | paper |
| | 10:00 to 10:45 | T1 pass 4; T4 | paper |
| | 11:00 to 12:00 | P11 | travel laptop |
| | after | stop; nothing new | |
| Mon 28 (PT) | | rest; hotel check-in; read L1 once at 10:00; walk to 181 Fremont; light exercise; bed 22:30 | |
| Tue 29 | | §7 | |

## 7. Day of

- 08:00 PT wake. Usual caffeine. Read the card once. A brisk 15 to 20 minute walk ending by 11:00. 10:45 leave; 11:15 lobby desk; 11:25 on the 33rd floor.
- 11:30 set-up: plug in, Wi-Fi, Cursor, terminal in the toolkit repo, keys into `.env`, smoke test. Ask Maggie what the apex@mercor.com email should contain.
- 11:45 kickoff: write the brief down as Austin says it; P10 questions; restate; the toolkit ask.
- 12:00 to 13:30: the run-sheet. Email by 13:20 at the latest.
- 13:30 presentation: finding first, 8 minutes; answer questions with the log line, not the memory.
- 13:45 break: eat, water, window, no screens.
- 14:00 algorithms: the protocol; ask for scale before you design.
- 14:30 break: the story cards once; water.
- 15:00 post-training: mechanism first, name second; "I don't know that; here is what I'd check" when true; T12 at 15:35 if he has not offered.
- 15:45 wrap-up: thank Maggie; timeline; next steps.
- After: L6.

## 8. Open

Written 09-18: `run-sheet.md`, `grpo-run.md`, drills 7 to 10 with keys, `mock-2-brief.md` and key, `index.md`. Being written 09-18: `tradeoff-drills-key.md`, `mock-3-brief.md` with its key and `mock-3-judge.py`.

## 9. Tracker prompt

Paste this and the whole file into a thread to have an agent keep you on track.

```
You are tracking my interview prep plan, pasted below. I will send you the date and
time, what I have done, and how each task went. Each time, reply with:
1. The ledger: which task IDs are done, in progress, or missed, and the updated
   "Now" block.
2. The next block from §6: its task IDs, each task's done-when test, and the file
   it uses. If a block was missed, say what moves and what is dropped, re-cutting
   only the next 2 to 3 days. Never rewrite the lists.
3. Anything overdue against a fixed date (rehearsals, the laptop, Salman).
Keep a running list of the question-bank lines I dictate and print it when I ask.
Be brief; only as many words as needed.

[paste the plan]
```
