# Index: task IDs and files (Mercor onsite prep)

IDs come from `interview-prep/mercor-onsite-plan.md`. P = practical (Austin Bennett), A = algorithms (Jiwon Lee), T = post-training (Charlie Ruan), L = logistics. The number is priority order within the list; a letter suffix is a sub-step. The schedule (plan §6) is written in these IDs. Every ID has a card (Read, Do, Drive home, Master, Bot, Test, Done when) in its track file: `practical-track.md` for P, `algorithms-track.md` for A, `post-training-track.md` for T; L tasks are in plan §5. The card names the content files listed below. Status lives in `ledger.md`. "Key" files are opened only at the debrief.

## Task ID to file

| ID | What | File |
|---|---|---|
| P1a | Keys and tools on the machine you have | none |
| P1b | Travel laptop set up, hotspot smoke test | the toolkit repo |
| P2 | Read Mercor's grading code; accept the Hugging Face gates | `research/mercor-output-2026.md` §2 |
| P3 | Build the toolkit (P3a inference, P3b grade and metrics, P3c failures, report, README) | `toolkit-spec.md` |
| P4 | Run-sheet for the 90 minutes | `run-sheet.md` |
| P5 | Rehearsal 1 | `mock-1-brief.md`; key `mock-1-grader-key.md` |
| P6 | Toolkit fixes after rehearsals | `toolkit-spec.md` (acceptance test) |
| P7 | Presentation Q&A thread after each rehearsal | `format-analysis.md` §8.3 |
| P8 | Rehearsal 2 | `mock-2-brief.md`; key `mock-2-grader-key.md` |
| P9 | Rehearsal 3, with a planted-bug judge | `mock-3-brief.md`; key `mock-3-grader-key.md`; `mock-3-judge.py` |
| P10 | Kickoff script from memory | `format-analysis.md` §1.9; `run-sheet.md` |
| P11 | Day-before check | `run-sheet.md` (before the clock) |
| P12 | Brief-triage drills, 10 minutes each | `format-analysis.md` §8.4 |
| A1 | Six-move protocol, pacing phrases | `algorithms-drills.md` (top) |
| A2 | Pattern sheet | `algorithms-drills.md` |
| A3 | Prove-it list, 12 items | `theory-syllabus.md` Part 2, end |
| A4 | Layer 1, CS core | `theory-syllabus.md` Part 2 A to D, G, and 2b |
| A5 | Layer 2, math, probability, statistics, ML | `theory-syllabus.md` Part 2c |
| A6 | Drills 1 to 10, spoken | `algorithms-drills.md`; key `algorithms-grader-key.md` |
| A7 | Fresh algorithm threads | `format-analysis.md` §8.2 |
| A8 | Mental arithmetic | formulas in `theory-syllabus.md` Part 1 E and Part 2 D |
| A9 | Salman algorithms mock, Sun 27 | any drill from `algorithms-drills.md` |
| T1 | Derivation deck, 12 items | `theory-syllabus.md` Part 1, end; check against `post-training-primer.md` |
| T2 | Screen gaps: environment design, the two one-liners | `../mercor-research-engineer-post-training.md` Round 1 debrief Q2 to Q4; `../question-bank.md` |
| T3 | SkyRL toy environment | interface in the debrief Q4 above; tutorial at docs.skyrl.ai |
| T4 | Your scheduler at mechanism depth | `format-analysis.md` §0.5; code in `../../post-train/` |
| T5 | Primary sources, once each | list in `theory-syllabus.md` Part 3 item 4; links in `research/interviewers.md` §3 |
| T6 | Syllabus rows at level | `theory-syllabus.md` Part 1, then Part 0 |
| T7 | Trade-off drills, spoken | `tradeoff-drills.md`; key `tradeoff-drills-key.md` |
| T8 | Evidence as mechanism, 5 lines each | `../mercor-call-card.md` §4; `../../cv.md` |
| T9 | Fresh post-training threads | `format-analysis.md` §8.1 |
| T10 | Salman post-training mock, Sat 26 | questions from `format-analysis.md` §8.1; log in `../question-bank.md` |
| T11 | Numbers cold | `numbers.md` |
| T12 | Two questions for Charlie | `numbers.md` |
| T13 | Small GRPO run on a rented GPU | `grpo-run.md` |
| L1 to L6 | Card, pack, sleep, laptop, Brex, debrief | plan §5 only |

## File to purpose

| File | What it is | Used by |
|---|---|---|
| `../mercor-onsite-plan.md` | The plan: rules, the Tutor and Examiner prompts, lists, schedule, day of, tracking rules | everything |
| `practical-track.md`, `algorithms-track.md`, `post-training-track.md` | The cards, one per task ID: exactly what to read, do, drive home, master, which thread, the test, done-when | every task |
| `ledger.md` | The running record: next block, fixed dates, status per ID, counters, log, pending question-bank lines | every session |
| `index.md` | This map | every session |
| `format-analysis.md` | What each session is, what is scored, the take-home digest (§0.5), the four interviewer prompts (§8) | P7, P10, P12, A7, T4, T9, T10 |
| `theory-syllabus.md` | The depth bar: field maps (Part 0), post-training rows and derivation deck (Part 1), algorithms rows, breadth, math and ML layer, prove-it list (Part 2), method (Part 3) | A3, A4, A5, T1, T5, T6 |
| `evidence.md` | Why the method is what it is, with sources | plan §1 |
| `toolkit-spec.md` | What the eval toolkit must contain and its acceptance test | P3, P6 |
| `run-sheet.md` | The printed 90-minute sheet, checklist, if-then rules, slides | P4, P10, P11 |
| `numbers.md` | Numbers to recite; questions for Charlie | T11, T12 |
| `tradeoff-drills.md`, `tradeoff-drills-key.md` | 15 trade-off prompts and their keys | T7 |
| `algorithms-drills.md`, `algorithms-grader-key.md` | Protocol, pattern sheet, drills 1 to 10 and keys | A1, A2, A6, A9 |
| `mock-1-brief.md`, `mock-1-grader-key.md` | Rehearsal 1 (Terminal-Bench traces) | P5 |
| `mock-2-brief.md`, `mock-2-grader-key.md` | Rehearsal 2 (APEX-v1-extended) | P8 |
| `mock-3-brief.md`, `mock-3-grader-key.md`, `mock-3-judge.py` | Rehearsal 3 (APEX-Accounting, planted bug) | P9 |
| `grpo-run.md` | The rented-GPU afternoon, step by step | T13 |
| `research/interviewers.md`, `research/mercor-output-2026.md`, `research/candidate-reports.md` | The raw research on the three interviewers, Mercor's public work, and other candidates' reports | P2, T5, background |
| `../post-training-primer.md` | Every training method at three levels; the answer key for T1 | T1, T6 |
| `../mercor-research-engineer-post-training.md` | Screen prep and the Round 1 debrief (the model answers for T2) | T2, T3 |
| `../question-bank.md` | Every real question asked so far, with status; every mock adds lines | all mocks |
| `../mercor-call-card.md` | The screen call card; §4 has the depth lines behind the story cards | T8 |
