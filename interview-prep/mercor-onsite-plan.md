# Mercor onsite, Tue 29 Sep 2026: the plan

Research Engineer, Post Training. Tracker #32. One list per interview plus logistics. Every task has an ID and a card that says exactly what to read, what to do, what to drive home, what to master, which thread to open, how mastery is tested, and when it is done: `mercor-onsite/practical-track.md`, `algorithms-track.md`, `post-training-track.md`. The schedule (§6) is keyed by ID. The ledger (`mercor-onsite/ledger.md`) is the running record. Rebuilt 2026-09-18.

## Now

Status, counters, and the next block live in `mercor-onsite/ledger.md`, updated by every session (§9). Open the ledger, read "Next block", open the card for each ID, do the card.

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

- A task is done when its card's done-when test is met. Lists are in priority order. ID to file map: `mercor-onsite/index.md`.
- Device: **dev** = any computer with Python and your keys (the travel laptop from Tue 22) · **screen** = any computer or phone · **paper** = paper, whiteboard, or recorder · **travel laptop** = that machine only.
- Every mock, drill, or thread ends with a line in `question-bank.md` (question in the interviewer's words, status, gap) and a ledger line. No line, no credit.
- Practise in the test's format: spoken, timed, no notes. Produce first, check second. Never open a key before its drill. Bed by 23:00. Nothing new after Sun 27.
- Split about 38 / 30 / 32 (practical / algorithms / post-training).

**Fresh topic, five steps** (each an `evidence.md` row). Every learning card assumes this loop.
1. Attempt cold, 5 minutes, in writing (Sinha & Kapur 2021).
2. One instruction pass: a Tutor thread with the syllabus row and your attempt pasted; hints before answers (Bastani 2025).
3. Close everything, reproduce from memory, check against the row, write the miss (Rowland 2014).
4. Same day, an Examiner or interviewer thread on it; "explain" only after an attempt (Pan & Rickard 2018).
5. Re-test in 1 to 2 days and again around day 5 to 7, mixed with other topics; teach it once aloud with no notes (Cepeda 2008; Brunmair & Richter 2019; Koh 2018).
Feels easy and fluent: close the book (Deslauriers 2019).

**The six threads.** Plain chat, fresh thread every time, answers dictated aloud. The gap list at the end goes into `question-bank.md` and the ledger; the next thread opens with "start on these gaps: ...". Minimum one thread a day.

| Thread | For | Prompt |
|---|---|---|
| Tutor | learning one row after a cold attempt | below |
| Examiner | testing mastery of a topic list, escalating to L4, scored | below |
| 8.1 | the post-training interview, 25 questions | `mercor-onsite/format-analysis.md` §8.1 |
| 8.2 | the algorithms interview, one problem, constraint change, 10x | §8.2 |
| 8.3 | the practical's presentation Q&A and code walk | §8.3 |
| 8.4 | the practical's kickoff, brief triage in 10 minutes | §8.4 |

Tutor prompt:

```
You are my tutor for one topic. I am preparing for a research engineer interview
that scores mechanisms, derivations, failure modes, and numbers from primary
sources, all spoken aloud without notes.

Topic, and what I must be able to do:
[paste the syllabus row, or the card's Master line]

My cold attempt, written before opening this thread:
[paste]

Rules:
1. Grade the attempt first: right, wrong, missing, in that order. Be exact.
2. Teach only what was missing, from the mechanism up: plain words, then the
   equation, then the derivation step that matters, then what breaks and when,
   then the number or regime and where it comes from. Say "verify" on any
   number you are not sure of. Never invent a citation.
3. Hints before answers: when I ask something, give a hint and make me try
   before you answer.
4. After each piece, ask one question that checks I can reproduce it, and wait.
5. End with three questions I should be able to answer tomorrow without notes.
Begin with the grading.
```

Examiner prompt:

```
You are a demanding examiner. Test my mastery of the topics below. I answer
aloud by dictation, no notes. Do not teach unless I type "explain".

Topics:
[paste the card's Master line]

Rules:
1. One topic at a time, two questions at a time, numbered. Start at the
   mechanism in plain words and escalate: the equation; the derivation step
   that matters; what breaks and when; the experiment that would show it; the
   number or regime from a primary source. Keep escalating until I fail or you
   run out.
2. Never accept a term as an answer; ask for the mechanism behind it. If I
   state a number, ask where it comes from.
3. Grade each answer Strong / Partial / Wrong in one line, with what was
   missing.
4. Cover every topic. Then a table: topic; deepest level reached (L1 words,
   L2 equation and derivation, L3 failure mode and experiment, L4 number and
   source); the exact question that stopped me.
5. Finish with the three weakest topics, ranked.
Begin.
```

**This file:** the lists and the cards are stable. The ledger changes every session. §6 is re-cut for the next 2 to 3 days after each rehearsal debrief.

## 2. Practical (2 h, Austin Bennett)

Scored (`format-analysis.md` §1.4): it runs; the statistics are right; the judgment is good; there is a finding; every line of AI-written code can be defended. Cards: `mercor-onsite/practical-track.md`.

| ID | Task | Device | When |
|---|---|---|---|
| P1a | Keys and tools on the machine you have | dev | Fri 18, 45 min |
| P1b | Travel laptop set-up, hotspot smoke test | travel laptop | Tue 22, 45 min |
| P2 | Mercor's grading code, once; the Hugging Face gates | screen | Sat 19, 45 min |
| P3 | Toolkit v1 per `toolkit-spec.md`: P3a inference, P3b grade and metrics, P3c failures, report, README | dev | Fri 18 to Sat 19, 6 h |
| P4 | The run-sheet, read with the agent, printed | screen | Sat 19, 30 min |
| P5 | Rehearsal 1 (`mock-1-brief.md`) | dev | Sun 20, 3 h |
| P6 | Toolkit v2 from each fix list | dev | after each rehearsal, 1 h |
| P7 | Presentation Q&A thread (8.3) after each rehearsal | screen | 45 min, three times |
| P8 | Rehearsal 2 (`mock-2-brief.md`), camera on | travel laptop | Wed 23, 3.5 h |
| P9 | Rehearsal 3 (`mock-3-brief.md`, planted-bug judge), Salman as Austin | travel laptop | Sat 26, 3 h |
| P10 | Kickoff script from memory, plus the toolkit ask | paper | 20 min on three days |
| P11 | Day-before check | travel laptop | Sun 27, 1 h |
| P12 | Brief-triage drills (8.4) | screen | 10 min each, five |

## 3. Algorithms (30 min, Jiwon Lee)

Three layers, all rotated by the threads: CS core · math, probability, statistics, ML arithmetic · Mercor-specific drills. Scored (§2.5): the six-move protocol, adapting when a constraint changes, taking hints, arithmetic in your head. Cards: `mercor-onsite/algorithms-track.md`.

| ID | Task | Device | When |
|---|---|---|---|
| A1 | The six-move protocol, pacing phrases, pseudocode on request | paper | Fri 18, then 5 min daily |
| A2 | The pattern sheet, 22 rows | paper | Fri 18, then 10 min daily |
| A3 | The prove-it list, 12 proofs | paper | Sat 19, Tue 22, Fri 25 |
| A4 | Layer 1, the CS core (syllabus Part 2 A to D, G; then 2b) | paper | 5 to 6 h across four days |
| A5 | Layer 2, math, probability, statistics, ML (Part 2c) | paper | 4 to 5 h, from Tue 22 |
| A6 | Drills 1 to 10, spoken in 8.2 threads, scored on the key | screen | two per sitting, five sittings |
| A7 | Fresh 8.2 threads, the interviewer picks | screen | 45 min, one most days |
| A8 | Mental arithmetic, ten estimates | paper | Sat 26, twice |
| A9 | Salman mock | paper | Sun 27 09:00 PT |

## 4. Post-training (45 min, Charlie Ruan; only if the first two pass)

Scored: mechanism over terminology; reasoning through an unfamiliar trade-off. Bar: syllabus Part 1 at L2 to L4, Part 0 at L1 to L3; the routine (objective, constraint, two options, failure mode of each, cheapest deciding experiment). Cards: `mercor-onsite/post-training-track.md`.

| ID | Task | Device | When |
|---|---|---|---|
| T1 | The derivation deck, 12 items | paper | Fri 18, Sun 20, Thu 24, Sun 27 |
| T2 | The screen's gaps: environment design ×3, the one-liners, GRPO in 90 s | paper | Sat 19, then reps |
| T3 | A SkyRL toy environment | dev | Sun 20, 1 h |
| T4 | Your scheduler at mechanism depth, the 12 questions | paper | Fri 25, Sun 27 |
| T5 | Primary sources, once each, as step 2 for a found gap | screen | as gaps appear |
| T6 | Syllabus rows at level, Part 1 then Part 0 | paper | six sittings |
| T7 | Trade-off drills, 15, spoken, then the key | paper | Tue 22 (1 to 5), Wed 23 (6 to 10), Fri 25 (11 to 15) |
| T8 | Your evidence as mechanism, four lines | paper | Mon 21, 45 min |
| T9 | Fresh 8.1 threads, 25 questions each | screen | one most days, 8 |
| T10 | Salman mock | paper | Sat 26 14:00 PT |
| T11 | The numbers, cold | paper | 10 min daily from Sun 20 |
| T12 | Two questions for Charlie | paper | 10 min |
| T13 | A small GRPO run on a rented GPU, gated | dev | Wed 23 13:00 to 16:00 |

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

Fixed: lectures, Strahd, Akira, Readers of Books. Skipped: Aemma, Robotics Jam, Serobro, DnD, Meg's. Wed 23 free until 19:00. Re-cut the next 2 to 3 days after each rehearsal debrief. Threads fit any spare 45 minutes on a phone. Not pinned to a slot but counted in the ledger: T6 sittings, T11 daily, P10 on three days, P12 briefs, extra A7 and T9 threads.

| Day | Block | Tasks | Device |
|---|---|---|---|
| Fri 18 | 21:50 to 22:40 | P1a. The 17:30 block was not started; P3a, A1, A2, T1 pass 1 moved to Sat 19 (re-cut 2026-09-18 21:50) | dev |
| Sat 19 | 09:30 to 10:00 | P4 with the agent | screen |
| | 10:00 to 12:00 | P3a | dev |
| | 12:00 to 12:45 | P2 | screen |
| | 13:30 to 16:00 | P3b | dev |
| | 16:00 to 17:30 | P3c; time the clean clone | dev |
| | 17:30 to 18:30 | A1, A2 first pass | paper |
| | 20:00 to 20:45 | T1 pass 1; write the miss list | paper |
| | 20:45 to 22:15 | T9 thread 1 | screen |
| | night | download the mock 1 data | dev |
| Sun 20 | 08:15 to 10:45 | P5 rehearsal 1 | dev |
| | 10:45 to 11:30 | P5 debrief with the agent; fix list; re-cut Sun to Tue, slotting A3 pass 1, A4 Part 2 A, A6 drills 3 and 4, A7 round 1, P12 brief 1 | screen |
| | 15:00 to 16:00 | P6 | dev |
| | 16:00 to 17:00 | T3 | dev |
| | 17:00 to 18:00 | A6 drills 1 and 2 | screen |
| | 18:00 to 18:30 | T1 pass 2; T11 pass 1 | paper |
| | 19:00 to 20:30 | T2: three targets recorded; the one-liners; GRPO 90 s | paper |
| Mon 21 | 07:30 to 09:00 | A6 drills 7 and 8 | screen |
| | 12:30 to 13:15 | P7 thread on rehearsal 1 | screen |
| | 20:15 to 21:30 | T9 thread 2 | screen |
| | 21:30 to 22:15 | T8; P10 day 1; question-bank lines | paper |
| Tue 22 | 07:30 to 09:00 | T7 drills 1 to 5; then T5 on the gaps found | paper, screen |
| | 12:30 to 13:15 | P1b | travel laptop |
| | 21:15 to 22:30 | A3 pass 2; A5: five steps on probability and statistics | paper |
| | night | download the mock 2 attachments | travel laptop |
| Wed 23 | 07:15 to 09:45 | P8 rehearsal 2, camera on | travel laptop |
| | 10:00 to 10:45 | P8 debrief; fix list; re-cut Wed to Fri | screen |
| | 11:00 to 12:00 | P7 thread on rehearsal 2 | screen |
| | 13:00 to 16:00 | T13 if the gate holds; else A7 rounds 2 and 3, A4, A5 | dev |
| | 16:15 to 17:30 | A6 drills 9 and 10 | screen |
| | 17:30 to 18:30 | T9 thread 3 | screen |
| | 18:30 to 19:00 | T7 drills 6 to 10 | paper |
| Thu 24 | 07:30 to 09:00 | A6 drills 5 and 6 | screen |
| | 12:30 to 13:15 | T1 pass 3 | paper |
| | 21:15 to 22:30 | P6 final fixes; L1 card; L2 pack; print; P10 day 2 | dev, paper |
| Fri 25 | 07:30 to 09:00 | T4 (record the 12); T2 last reps; T11 | paper |
| | in flight | A3 pass 3; T7 drills 11 to 15, written; T6 Part 0 check; T8 read; A2, A4, A5 self-quiz | paper |
| | evening | nothing; L3 | |
| Sat 26 (PT) | 08:45 to 11:15 | P9 rehearsal 3, present to Salman | travel laptop |
| | 11:15 to 11:45 | P9 debrief; re-cut Sat to Mon | screen |
| | 14:00 to 15:00 | T10 Salman mock | paper |
| | 15:15 to 16:15 | P7 thread on rehearsal 3, or A7 round | screen |
| | 16:15 to 16:45 | A8; T11 | paper |
| Sun 27 (PT) | 09:00 to 09:45 | A9 Salman mock | paper |
| | 10:00 to 10:45 | T1 pass 4; T4 again | paper |
| | 11:00 to 12:00 | P11; P10 day 3 | travel laptop |
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
- 14:30 break: the T8 lines once; water.
- 15:00 post-training: mechanism first, name second; "I don't know that; here is what I'd check" when true; T12 at 15:35 if he has not offered.
- 15:45 wrap-up: thank Maggie; timeline; next steps.
- After: L6.

## 8. Open

All artifacts exist as of 2026-09-18 night: run-sheet, toolkit spec, numbers, drills 1 to 10 with keys, trade-off drills with keys, mocks 1 to 3 with keys and the mock 3 judge, grpo-run, the three card files, the ledger, the index. Nothing is pending on an agent.

## 9. Tracking in this repo

The ledger `mercor-onsite/ledger.md` is the running thread. In any session in this repo, say what you did and how it scored, or ask what is next. The agent (house rule in `modes/_custom.md`, "Mercor onsite prep"):
1. reads the ledger and §6;
2. updates the ledger: status table, a dated log line, scores, question-bank lines (also appended to `question-bank.md`), the next block;
3. re-cuts only the next 2 to 3 days of §6 if a block was missed, and says what moved and what was dropped; fixed dates never move;
4. replies with the next block as full card fields (Read, Do, Test, Done when), never bare IDs;
5. commits, pushes, and merges to main.
Plain chat threads (Tutor, Examiner, 8.1 to 8.4) are for learning and testing; their gap lists come back here as ledger and question-bank lines.
