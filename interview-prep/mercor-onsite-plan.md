# Mercor onsite, Tue 29 Sep 2026: master task lists and a suggested schedule

Research Engineer, Post Training. Tracker #32. Rebuilt 2026-09-18, 11 days out, on Shayan's structure: one master task list per interview, each task with a done-when test and a device tag, plus a suggested schedule that can be rearranged without breaking the lists. Every fact comes from the files named in each section; nothing here is new research. Priority split 40% practical / 25% algorithms / 35% post-training (accepted 09-17). The 09-16 plan is in git at 022b3dd; its still-valid parts are folded in below.

## 0. The day

181 Fremont St, 33rd floor, lobby desk, arrive 11:30 PT. Government photo ID. Own laptop plus charger. Casual. Lunch provided. NDA signed 09-15. Emily's reply (start date, references, travel) was sent 09-17; on 09-18 she confirmed an API key from any provider is fine, so it is your key, your choice of provider. Day-of help: Maggie +1 (818) 699-5444, Emily +1 (323) 363-0240. No rescheduling.

| PT | Session | Who |
|---|---|---|
| 11:30 | Set-up | Maggie Cassidy |
| 11:45 | Practical: kickoff | Austin Bennett |
| 12:00 to 13:30 | Practical: 90 min solo work | |
| 13:30 | Practical: presentation | Austin Bennett |
| 14:00 to 14:30 | Algorithms | Jiwon Lee |
| 15:00 to 15:45 | Post-training, only "if the first two interviews are successful" | Charlie Ruan |
| 15:45 | Wrap-up | Maggie Cassidy |

## 1. How to use this file

- Three lists (§2 practical, §3 algorithms, §4 post-training) plus logistics (§5). Each task has an ID, a done-when test, and a device tag. A task is done only when its test is met.
- Device tags: **laptop** = needs the travel laptop with keys and the toolkit · **screen** = any computer or phone (LLM mock threads, reading, downloads) · **paper** = paper, whiteboard, or a voice recorder only.
- Repetition tasks (decks, numbers) carry their own dates. Everything else is in priority order within its list; go in order unless a device constraint says otherwise.
- §6 is a suggested schedule. Swap blocks freely. The lists are the contract; the schedule is not.
- Every mock or drill ends with a line in `question-bank.md`: the question in the interviewer's words, status, gap. No debrief, no credit (`mercor-onsite/evidence.md`, Roulin 2023).
- Method rules stand (`evidence.md`): practise in the test's format; produce first, check second; no crib sheet in practice; bed by 23:00; nothing new after Sun 27.

## 2. Practical: LLM Evaluation and Analysis (2 h, Austin Bennett), about 15 h of prep

What is scored, their words and verified sources (`mercor-onsite/format-analysis.md` §1.4): design, implement, analyze; "set up good experiments and understanding statistics, having good judgment"; "you don't ship a number you can't defend"; a judge validated against hand labels (Austin's own work); and, reported from a Blind SWE onsite, the AI-written code reviewed line by line. What loses it (§1.7): 30 minutes on setup; outputs nobody read; a number without an interval; narrating the process instead of the finding; code you cannot explain; missing the email. Five brief shapes are possible (§1.3 a to e: prompts plus references or rubrics; pre-generated outputs to judge; two models to compare; a dataset with something wrong in it; trajectories). The toolkit handles all five; the loop is the skill.

| ID | Task | Done when | Device |
|---|---|---|---|
| P1 | Keys and tools: OpenAI, Anthropic, Google, OpenRouter keys funded (an inference key, not the subscription); Cursor account; Claude Code in the terminal. Test from the travel laptop on a phone hotspot, not home Wi-Fi. | Four successful calls from the travel laptop on the hotspot. | laptop |
| P2 | Read Mercor's grading code once, 45 min: apex-evals `grading_prompt.txt` and grading code; the Archipelago judge prompt and scattergun guard; the APEX-Accounting judge rules (sees prompt, criterion, final output only). Accept the HF gates on `mercor/apex-agents-v1.1` and `mercor/apex-agents`; download one task dir and read `tests/grade.py` and `grading_config.json`. Facts and verbatim prompts: `research/mercor-output-2026.md` §2. | You can say from memory what their judge sees, returns, and forbids. | screen |
| P3 | Toolkit v1, a separate public GitHub repo (never this one). `run_inference.py`: async OpenAI-compatible client, concurrency limit, timeout, retries with backoff, disk cache keyed by model + prompt + params + sample index, append-only `raw.jsonl`, latency and error per call, cost and time estimate before the run. `grade.py`: exact match with normalization and numeric tolerance; per-criterion judge in Mercor's shape (criterion + response in, `{"result": 0 or 1, "reason": ...}` out, every raw judge output saved); scattergun check (more than one committed final answer scores 0). `metrics.py`: Pass@1 with task-level bootstrap CI; unbiased Pass@k; Pass^k; mean criteria met; paired comparison of two models with bootstrap on the differences; judge vs labels: accuracy, precision and recall on Met, Cohen's kappa. `failures.py`: stratified failure sample to markdown; taxonomy counts; LLM classifier over failures with a hand-labelled slice and its accuracy. `report.md` template: headline, numbers with CIs, taxonomy with two examples, what is wrong with this eval, next steps, what was cut. README with exact commands. Build order: P3a inference, P3b grade + metrics, P3c failures + report + README. | Clean clone to first result under 5 minutes, timed. Unit tests pass on a toy set with known answers. A second run costs $0. Every function explainable. | laptop |
| P4 | Run-sheet: `mercor-onsite/run-sheet.md`, agent writes Sat 19 09:30 with you: the 90-minute minute-by-minute (0 to 10 read twice, one question, one metric, cut list; 10 to 25 smoke set of 20, eyeball raw outputs, launch the full run; 25 to 60 read failures, taxonomy, count; 60 to 75 metrics, one table, one plot; 75 to 85 report, slides, email; behind at 60: cut analysis, never the presentation), the pre-flight checklist, if-then rules, the 5-slide template (finding first: finding, numbers with CIs, taxonomy with two examples, what is wrong with this eval, next steps and what was cut), the kickoff questions. | Printed; used in every rehearsal. | screen |
| P5 | Rehearsal 1: `mercor-onsite/mock-1-brief.md` (Terminal-Bench traces; brief and key exist). 15 min brief, 90 timed, 15 min presentation recorded, repo and results emailed to yourself before minute 90. Debrief against `mock-1-grader-key.md`; fix list. | Rubric score written (14 to 16 ready; 10 to 13 one more rehearsal on the weak rows; under 10 rebuild); fix list written. | laptop |
| P6 | Toolkit v2: fixes from rehearsal 1; re-time the clean clone. Final fixes after rehearsal 2 (Thu 24). | Under 5 minutes again. | laptop |
| P7 | Presentation Q&A thread after each rehearsal: paste slides, results, code into a fresh thread with the §8.3 prompt in `format-analysis.md`; get grilled; code walked function by function. | No function you cannot explain; gaps in the question bank. | screen |
| P8 | Rehearsal 2: `mercor-onsite/mock-2-brief.md` (APEX-v1-extended, 30 of the 37 CSV/text-only tasks; agent writes brief and key by Tue 22 evening). Camera on for the whole 90 minutes; stated consequence: the recording is graded line by line. | Emailed before the clock; 12 or more of 16. | laptop |
| P9 | Rehearsal 3: `mercor-onsite/mock-3-brief.md` (apex-accounting dev set, a provided judge script with one planted bug; agent writes by Fri 25 morning). Present to Salman. | Bug found; 14 or more of 16. | laptop |
| P10 | Kickoff script from memory (`format-analysis.md` §1.9): deliverable format; which metric they report on this data; judge prompt given or mine; their endpoint or my key; rate limits; may I subsample; then restate the task in one sentence and get a nod. Plus the toolkit ask: "I have a small open-source eval harness of my own. Fine to use it?" | Said in under 60 seconds without notes. | paper |
| P11 | Day-before check, Sun 27: presentation dry run twice on rehearsal 3 (8 min each); email flow test to yourself; clean-clone test; keys; Cursor; battery; printed sheets. | All green; laptop closed. | laptop |

Track done when: P9 at 14 or more; P6 under 5 minutes; P7 clean on rehearsal 3's code; presentation conclusion-first in 8 minutes.

## 3. Algorithms (30 min, Jiwon Lee), about 9 h of prep

What is known, their words: "Problem-solving on real architecture challenges, infrastructure decisions, and scaling strategies that mirror a challenge you may face at Mercor. Interactive, discussion-based. Not Leetcode, not system design. True algorithms." Jiwon Lee: Applied AI Engineer, not the research team; MIT CS and Econ; no papers, code, or posts found (`research/interviewers.md` §2, reported sources only). What is not known: no first-hand account of this round's content exists for any Mercor loop (`research/candidate-reports.md`). So the families are inferred from Mercor's attested prompts and from what Mercor computes (`format-analysis.md` §2.4): matching and ranking (contractor matching, candidate search with an unreliable comparator) · scheduling and throughput (rollouts, judge calls, packing) · dedup and contamination · statistics under a budget · graphs and DAGs (referral network, orchestration) · fundamentals with a twist (sorting bounds, probability with ties). What is scored, inferred and general (§2.5): restate; ask for scale; brute force with its cost; name the bottleneck; two approaches, one chosen with a reason; complexity and edge cases; what breaks at 10x; what you do when the constraint changes; empirical verification; taking hints well. Highest-variance session of the three, half the gate: drills, not reading.

| ID | Task | Done when | Device |
|---|---|---|---|
| A1 | The six-move protocol and the pacing phrases (`mercor-onsite/algorithms-drills.md`) from memory. | Said without the sheet on three separate days. | paper |
| A2 | Pattern sheet, 22 rows (same file): when it applies and its cost. | All 22 cold. | paper |
| A3 | Prove-it list, 12 items (`mercor-onsite/theory-syllabus.md` Part 2): closed book, aloud, on paper or whiteboard, scored 0/1/2. Passes Sat 19, Tue 22, Fri 25 (in flight). | Two consecutive all-2 passes. | paper |
| A4 | Theory Part 2 rows A to G at L2 (derive the bound, prove the greedy choice, know the constants, estimate in your head). Under-covered families first: C matching and ranking, B graphs, D scheduling and queueing, A hashing, sketches, similarity. Read only to fill a gap an A3 pass found. | Every row at L2 on a closed-book check. | paper |
| A5 | Drills 1 to 6 (exist), spoken to an LLM interviewer using the §8.2 prompt in `format-analysis.md` (one problem per 30 min, a constraint change at halfway, "what breaks at 10x", "how would you verify it"); graded against `algorithms-grader-key.md`. | Each 12 or more of 16; anything under 10 repeats next day. | screen |
| A6 | Drills 7 to 10 with keys (agent writes by Sun 20 evening, appended to the two drill files): project-to-contractor matching with capacities; ranking under a noisy comparator with a call budget; referral DAG reachability and flow centrality with expected value; task-DAG orchestration with retries, worker loss, lineage, tenant fairness. All four are attested Mercor prompt families. Then run them as A5. | Same as A5. | screen |
| A7 | Fresh-thread rounds: the §8.2 prompt in a new thread each time, family chosen by the interviewer and rotated, 6 to 10 rounds over the window; a question-bank line after each. | Three consecutive rounds at 12 or more on families you did not choose. | screen |
| A8 | Mental arithmetic drill: calls × latency / concurrency in hours; KV-cache concurrency ceiling; staleness bound; Little's law; birthday bound; majority-of-m error. | Ten estimates, each under 30 seconds, within 2x of exact. | paper |
| A9 | Human mock with Salman, Sat 26, one problem; he interrupts and changes a constraint at 15 min. Open: his expertise (§8). | Notes in the question bank. | paper |

Track done when: A3 two clean passes; A7 three consecutive 12 or more; A1 automatic.

## 4. Post-training (45 min, Charlie Ruan; only if the first two pass), about 13 h of prep

What is scored, their words: "explaining mechanisms rather than recalling terminology"; "how you reason through an unfamiliar tradeoff." Charlie's world, verified (`research/interviewers.md` §3): fully async RL and staleness; train/inference logprob mismatch and its corrections; token accounting in multi-turn agents (re-tokenization drift, TITO, step-wise training); loss aggregation and length on 2k to 128k-token trajectories; the 397B run's numbers; data over algorithm. The screen's three misses were precision misses under questioning (critic "gives the reward"; loss mask blended with the reward; environment design stayed abstract). The bar (`theory-syllabus.md`): L2 to L4 on every Part 1 row; the Part 0 field maps (RL, post-training, agent evaluation) at L1 to L3 so nothing outside the priorities surprises you; and one fixed routine for an unfamiliar trade-off: objective, constraint, two options, failure mode of each, the cheapest experiment that decides it. At the edge: "I have not seen that; here is what I would measure." Never claim LLM RL you have not run: "VLAs yes, LLMs no," then reason.

| ID | Task | Done when | Device |
|---|---|---|---|
| T1 | Derivation deck, 12 items (`theory-syllabus.md` Part 1): closed book, timed, scored 0/1/2, checked against `post-training-primer.md`. Passes Fri 18, Sun 20, Thu 24, Sun 27. Misses become the first questions of the next T9 thread. | Two consecutive all-2 passes. | paper |
| T2 | The screen gaps: environment-design walkthrough (assumption → prompt set → verifier → harness → de-risk → failure modes) on three targets (HLE, an APEX-style banking task, a Catan negotiation), 2 min each, recorded, graded against the Q3 model answer in `mercor-research-engineer-post-training.md`; and the two one-liners: "the critic estimates value; the verifier or reward model gives reward; GRPO replaces the critic with the group mean" and "the loss mask decides which tokens get gradient; the reward decides what gets scored." | Three recordings under 2:15 with all six steps; one-liners right first try on two days. | paper |
| T3 | SkyRL toy environment against `BaseTextEnv` (`init(prompt)`, `step(action)` returning observations, reward, done, metadata; `register`); run one episode. If the install fights past 45 min, unit-test the class without the trainer. | Episode runs, or the class passes its test. | laptop |
| T4 | Your own scheduler at mechanism depth: the 12 questions in `format-analysis.md` §0.5, aloud, no notes, plus the map to real RL (flat-group rule = dynamic sampling; census = difficulty filtering; staleness of pass-rate estimates; product over skills; poison = corrupted reward). Own numbers: clean banks +0.031, 16 of 16; poisoned banks +0.041, 12 of 16, three banks lose 5 to 12 points. | All 12 clean on a recording. | paper |
| T5 | Primary sources, once each, whole, only after a T1 pass has found the gap: the 397B post; the SkyRL docs Charlie wrote (step-wise training, agent integration, off-policy correction, DAPO); Jet-RL abstract and mismatch section; DAPO §3; DeepSeekMath §4.1; DPO §4; APEX-Agents §4.2. | Each source's L4 numbers recited from memory. | screen |
| T6 | Part 1 rows A to G at L2 to L4, then the Part 0 field maps at L1 to L3: closed-book check row by row; misses feed T9. | No row below its level on the last check. | paper |
| T7 | Trade-off drills: `mercor-onsite/tradeoff-drills.md` (agent writes by Sat 19 evening) with strong-answer keys: the ten Mercor-shaped ones (sync vs fully async; value model or not for 100-turn tasks; token_mean vs prompt_mean; keep or drop all-fail prompts; hard zero vs soft penalty for overlong; more rollouts per prompt vs more prompts; LLM judge vs programmatic verifier; SFT on a stronger model's trajectories vs RL on your own; where a 2x compute budget goes; grading a task whose artifact is a document) plus five from outside the priorities (DPO vs online RL for a preference set; PRM vs ORM for a 40-step task; LoRA vs full fine-tune under a memory cap; offline logged trajectories vs on-policy rollouts; training compute vs test-time compute at a fixed budget). Spoken, 2 min each, the routine, attempted before the key is read. | 15 recordings, routine present in each. | paper |
| T8 | Evidence told as mechanism, 5 lines each on paper: LIBERO-PRO (recipe-induced; LoRA and frozen priors rejected; effect bounded); VLM judges; BMO eval pipeline; Catan (hidden-state leak, view object, what you would train on and how, the TITO caveat). | Written; each said in under 60 seconds. | paper |
| T9 | Fresh-thread mock loop: the §8.1 prompt with the escalation and coverage rules (added to `format-analysis.md` §8 on 09-18), 20 to 30 questions per thread, answers dictated aloud, debrief, question-bank lines, then a new thread so the distribution does not narrow. | Three consecutive threads with no new gap and no topic where the interviewer reached the bottom of you first. | screen |
| T10 | Human mocks: Toronto friend (week of 21, 45 + 15) and Salman (Sat 26, 45 + 15), each scoring aloud on the two rubric lines. Open: who they are and what they know (§8). | Debriefs in the question bank. | paper |
| T11 | Numbers cold (§7): cover and recite. | 100% on two days. | paper |
| T12 | Questions for Charlie, pick two: how often the logprob check catches something now that the vLLM bug is fixed; what the 480 held-out tasks show that the 1,928 training tasks do not; whether step-wise training or TITO is the default for new harnesses and why; what he would run next if compute were free. | Two picked. | paper |
| T13 | Optional, only after §2 and §3 are safe: a small GRPO run (Unsloth GSM8K notebooks; Colab free-tier feasibility not verified; GPU access unanswered); watch reward, KL, completion length, fraction of zero-advantage groups; then read the trainer's advantage and loss-aggregation code. The one thing that turns "read it" into "seen it." | One run with the four curves; each loss line related to a T1 item. | laptop |

Track done when: T1 two clean passes; T9 three clean threads; T2 clean; T11 at 100%.

## 5. Logistics

| ID | Task | When |
|---|---|---|
| L1 | One-page card: retrieval cues written from memory, corrected once against the sources, never open during practice. | Write Thu 24; read once Mon 28 and once Tue 29 morning. |
| L2 | Pack: laptop, charger, ID, printed run-sheet, pattern sheet, card, water, snacks. | Thu 24. |
| L3 | Sleep and light: bed by 23:00; retrieval sessions before bed; in SF, evening light, no bright light before 07:00 PT, bed by 23:00 PT; no melatonin. | Every day. |
| L4 | Course markers you added 09-17: IL Week 3 Panel Qs (Tue 22 13:30); Positive Psych Mindfulness #1 (Thu 24 20:30); IL Assignment 1 (Mon 28 17:30 ET); IL Week 4 Panel Qs (Tue 29 13:30 ET = 10:30 PT, during the onsite, so done by Sun 27). What each needs: open (§8). | As dated. |
| L5 | Wed 23 evening: RL lecture (online, 19:00 to 21:00) or Strahd (19:00 to 22:00). Your call; it decides whether Wed has an evening block. | Decide by Mon 21. |
| L6 | Brex reimbursement form and receipts. | After the visit. |
| L7 | After the onsite: every question in their words into `interview-prep/sessions/`, then `/career-ops interview/debrief`. | Tue 29 evening. |

## 6. Suggested schedule (ET through Fri 25, then PT)

Fixed per your 09-16 rule: lectures, Strahd, Akira, Readers of Books. Skipped: Aemma, Robotics Jam, Serobro, DnD, Meg's. Calendar re-read 09-18, unchanged. About 40 hours. Rehearsal 1 moves from Sat 19 to Sun 20 morning because Fri 18's morning and lunch build blocks are gone; the toolkit is built Sat morning instead. T9 threads also fit any spare 45 minutes on a phone; the table shows the minimum.

| Day | Block | Tasks | Device |
|---|---|---|---|
| Fri 18 | 17:30 to 19:30 | P1 gaps, then P3a | laptop |
| | 20:00 to 21:00 | T1 pass 1; write the miss list | paper |
| | 21:00 to 22:00 | A1, A2 first pass | paper |
| Sat 19 | 09:30 to 10:00 | P4 with me | screen |
| | 10:00 to 13:00 | P3b, P3c; time the clean clone | laptop |
| | 14:00 to 15:30 | T2: three targets recorded; the two one-liners | paper |
| | 16:00 to 17:00 | A5 drills 1 and 2 | screen |
| | 17:00 to 17:30 | A3 pass 1 | paper |
| Sun 20 | 08:30 to 10:45 | P5 rehearsal 1 | laptop |
| | 10:45 to 11:30 | P5 debrief with me; fix list | screen |
| | 15:00 to 16:00 | P6 | laptop |
| | 16:00 to 17:30 | T3 | laptop |
| | 17:30 to 18:15 | T1 pass 2; T11 pass 1 | paper |
| Mon 21 | 07:30 to 09:00 | A6 drills 7 and 8 | screen |
| | 12:30 to 13:15 | P7 thread on rehearsal 1 | screen |
| | 20:15 to 21:30 | T10 Toronto friend, else T9 thread 1 | paper or screen |
| | 21:30 to 22:00 | question-bank lines; A8 | paper |
| Tue 22 | 07:30 to 09:00 | T7 drills 1 to 5; then T5 on the gaps found | paper, screen |
| | 12:30 to 13:15 | T8 story cards | paper |
| | 21:15 to 22:30 | A3 pass 2; T6 rows A to C | paper |
| Wed 23 | 07:30 to 09:45 | P8 rehearsal 2, camera on | laptop |
| | 12:30 to 13:15 | P8 debrief; fix list | screen |
| | evening | L5; if the evening is free, T9 thread 2 | screen |
| Thu 24 | 07:30 to 09:00 | A6 drills 9 and 10; one A7 round | screen |
| | 12:30 to 13:15 | T1 pass 3 | paper |
| | 21:15 to 22:30 | P6 final fixes; L1 card; L2 pack; print | laptop, paper |
| Fri 25 | 07:30 to 09:00 | T2 last reps; T4; T11 | paper |
| | in flight | A3 pass 3; T6 Part 0 check; T8 read; A2 self-quiz | paper |
| | evening | nothing; L3 light rules | |
| Sat 26 (PT) | 09:00 to 11:15 | P9 rehearsal 3, present to Salman | laptop |
| | 11:15 to 11:45 | P9 debrief | screen |
| | 14:00 to 15:00 | T10 Salman mock, scored aloud | paper |
| | 15:15 to 15:45 | A9 Salman, one problem | paper |
| | 16:00 to 17:00 | T9 thread 3, or P7 thread on rehearsal 3 | screen |
| Sun 27 (PT) | 09:00 to 10:00 | T1 pass 4; T4 | paper |
| | 10:00 to 10:45 | A1 aloud; A2 self-quiz; one drill | paper |
| | 11:00 to 12:00 | P11 | laptop |
| | 12:00 to 13:00 | L4: IL Week 4 Panel Qs | screen |
| | after | stop; nothing new | |
| Mon 28 (PT) | | rest; hotel check-in; read L1 once at 10:00; walk to 181 Fremont; light exercise; bed 22:30. IL Assignment 1 marker at 14:30 PT: your call | |
| Tue 29 | | §7 | |

## 7. Day of, and the numbers

- 08:00 PT wake. Usual caffeine, not more. Read the card once. A brisk 15 to 20 minute walk ending by 11:00. 10:45 leave the hotel; 11:15 lobby desk; 11:25 on the 33rd floor.
- 11:30 set-up: plug in, Wi-Fi, Cursor, terminal in the toolkit repo, keys into `.env`, smoke test. Ask Maggie what the apex@mercor.com email should contain (repo link, zip, slides).
- 11:45 kickoff: write the brief down as Austin says it; P10 questions; restate; the toolkit ask.
- 12:00 to 13:30: the run-sheet, minute by minute. Email by 13:20 at the latest.
- 13:30 presentation: finding first, 8 minutes; answer questions with the log line, not the memory.
- 13:45 break: eat, water, window, no screens.
- 14:00 algorithms: the protocol; ask for scale before you design; whiteboard if there is one.
- 14:30 break: the story cards once; water.
- 15:00 post-training: mechanism first, name second; "I don't know that; here is what I'd check" when true; T12 at 15:35 if he has not offered.
- 15:45 wrap-up: thank Maggie; timeline; next steps; anything else needed from you.
- After: L7.

| Cue | Number |
|---|---|
| 397B run | Pass@1 16.11 → 27.29 on 480 held-out APEX-Agents tasks; 1,928 training tasks |
| 35B harness fixes, zero training | mean reward 22.74 → 28.69 (not Pass@1; the 35B's Pass@1 went 13.96 → 22.71 after RL) |
| Post-training total lift | 10 to 12 points, both models |
| Best single knob | prompt_mean over token_mean, +3.9; nudge +3.0; OLF cost 1.5; DPPO vs GLM-5 loss within noise, DPPO more and shorter turns (21 → 32; 834 → 588 tokens per turn) |
| Health check | trainer vs inference logprob difference below 0.03 |
| Overfit subset | 32 tasks, non-zero reward variance, batch 32, 8 samples per prompt, synchronous |
| Concurrency | 550 (35B), 300 (397B); staleness bound (max_staleness_steps + 1) × mini_batch × n_samples = 1,024; GPU split 12:4 and 12:8 |
| Terminal-Bench 2.1, k = 3 | 397B 50.6 → 55.4; 35B 44.6 → 50.9; paired gains +4.9 and +6.4, both CIs exclude 0 |
| APEX-Agents 1.1 | 240 tasks, 80 per domain, 31 worlds; rubrics 1 to 11 criteria, mean 3.98; judge calibrated on 1,407 items, 354 held out; FN 5.3 → 8.0% to catch scattergunning; Fable 5.1 Pass@1 68.6 |
| APEX-Accounting | 160 held-out tasks; 13.7 criteria per task; judge 97.1% accuracy vs three-expert majority (Fleiss κ 0.857); Mean Criteria@3 |
| Take-home | 120 tasks, 5 skills, 5,760 rollouts, groups of 8; E[spread] = (7/8)p(1−p); clean +0.031, 16 of 16; poisoned +0.041, 12 of 16 |
| Your own | $200B+ AUM · hundreds of synthesized inputs · nearly 30,000 clients in 3 hours · 8th of BEHAVIOR-1K, 22 of 50 trained, 10,000+ demos · 60% masked → up to +48% · 3x chunking · 96 → 21 → 42 (LoRA 15 to 21; video prior 42 → 35; too conservative 26) · batch 64, LR 1e-5 |

## 8. Open, needs you

1. Toronto mock friend and Salman: who, what they know (RL, systems, evals), slots. Sizes T10 and A9.
2. The four course markers (L4): what each requires and how long.
3. Wed 23 evening: RL lecture or Strahd (L5).
4. P1 tonight: keys funded and tested from the travel laptop on a hotspot; Cursor account; HF gates accepted.
5. T13: GPU access (Colab Pro, Modal, RunPod, a friend's box) or drop it.
6. Rehearsal 1 on Sun 20 morning instead of Sat 19, toolkit built Sat morning: OK?
7. Toolkit public on GitHub plus the kickoff ask: decided yes on 09-17. Still yes?
8. Artifacts I write next, in order, once you say go: `run-sheet.md` (Sat 19 09:30, with you), `tradeoff-drills.md` (Sat 19), drills 7 to 10 (Sun 20), `mock-2-brief.md` and key (Tue 22), `mock-3-brief.md` with the planted-bug judge (Fri 25). The §8 prompt rules are already in.

## Sources

Emily Arevalo thread `1a0a3ff4ea1e29f9` (09-15, reply 09-17, her 09-18 answer); Google Calendar read 09-18; `mercor-onsite/format-analysis.md`; `mercor-onsite/theory-syllabus.md`; `mercor-onsite/evidence.md`; `mercor-onsite/research/{interviewers,mercor-output-2026,candidate-reports}.md`; `mercor-onsite/mock-1-*.md`; `mercor-onsite/algorithms-*.md`; `post-train/`; `mercor-research-engineer-post-training.md` (Round 1 debrief); `question-bank.md`; `data/agent-inbox.md` (session 12 handoff).
