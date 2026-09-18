# Mercor onsite, Tue 29 Sep 2026: master task lists and a suggested schedule

Research Engineer, Post Training. Tracker #32. Rebuilt 2026-09-18, 11 days out, on Shayan's structure: one master task list per interview, each task with a done-when test and a device tag, plus a suggested schedule that is re-cut as things go. Every fact comes from the files named in each section; the only additions since 09-17 are Shayan's 09-18 answers and the breadth he asked for. The 09-16 plan is in git at 022b3dd.

## Now (updated 2026-09-18 evening; this block and the status lines are what change day to day)

- Next: P1a tonight, then P3a. Sat 19: P4 with me at 09:30, then build the toolkit (P3b, P3c).
- Waiting on: your "go" for the artifacts in §8.
- Status: P none done · A none done · T none done · L3 in force.

## 0. The day

181 Fremont St, 33rd floor, lobby desk, arrive 11:30 PT. Government photo ID. Own laptop plus charger. Casual. Lunch provided. NDA signed 09-15. Emily's reply (start date, references, travel) was sent 09-17; on 09-18 she confirmed an API key from any provider is fine, so it is your key and your choice of provider. Day-of help: Maggie +1 (818) 699-5444, Emily +1 (323) 363-0240. No rescheduling.

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
- Device tags: **dev** = any computer with Python and your API keys (the travel laptop from Sun 20 or Mon 21; until then, the machine you have; the toolkit lives in git, so it moves) · **screen** = any computer or phone (interviewer threads, reading, downloads) · **paper** = paper, a whiteboard, or a voice recorder only. Only P1b, P8 onward and P11 use the travel laptop itself.
- Repetition tasks (decks, numbers) carry their own dates. Everything else is in priority order within its list; go in order unless a device constraint says otherwise.
- Split: 40 / 25 / 35 was accepted 09-17; on 09-18 algorithms went broad, so the schedule runs closer to 38 / 30 / 32 with the Wed 23 GPU afternoon (T13) as the swing block.
- Every mock or drill ends with a line in `question-bank.md`: the question in the interviewer's words, status, gap. No debrief, no credit (`mercor-onsite/evidence.md`, Roulin 2023).
- Method rules stand (`evidence.md`): practise in the test's format; produce first, check second; no crib sheet in practice; bed by 23:00; nothing new after Sun 27.

**Learning a fresh topic** (much of §3 and §4 is fresh; your 09-18 note; each step is an `evidence.md` row):
1. Attempt it cold for five minutes and write what you can, before reading anything (attempt-before-instruction beats instruction-first on transfer, g = 0.36, Sinha & Kapur 2021).
2. One short instruction pass: the primer section or the primary source, or the tutor skill with the syllabus row pasted and "teach me", hints before answers (a guarded tutor kept exam performance equal to control; unguarded LLM answers lowered it 17%, Bastani et al. 2025).
3. Close everything and reproduce it from memory; check against the key; write the miss (testing beats restudy, g = 0.50 Rowland 2014, g = 0.61 Adesope 2017).
4. Same day, an interviewer thread on it, escalated until you fail; type "explain" only after an attempt (retrieval with elaborated feedback transfers to new formats, d = 0.40, Pan & Rickard 2018).
5. Re-test in one to two days and again around day five to seven, mixed with other topics, and teach it once aloud to a recorder with no notes (Cepeda 2008; interleaving g = 0.42, Brunmair & Richter 2019; teaching aloud without notes matches retrieval practice, Koh 2018).
If a session feels easy and fluent, that is the cue to close the book, not a sign it worked (Deslauriers 2019).

**Running an interviewer thread** (the engine; your 09-18 note: spam it, it learns, sharpens and masters):
- Fresh thread, no memory. Paste the prompt from `format-analysis.md` §8: 8.1 post-training, 8.2 algorithms, 8.3 presentation Q&A, 8.4 brief triage. Two or three questions at a time.
- Answer aloud by dictation, never typed; the real thing is spoken. Get graded. "explain" only after your attempt.
- At the end ask for the ranked gap list; copy the gaps into `question-bank.md`; the next thread's prompt opens with "start on these gaps: ...". Then a new thread, so the question distribution does not narrow.
- Alternate tracks day to day. Minimum one thread a day, on a phone if that is what is at hand; targets are in T9, A7, P7, P12.

**How this file evolves:** the lists are stable. The "Now" block and the status lines change every session. The schedule (§6) is re-cut for the next two or three days after each rehearsal debrief and otherwise left alone. Nothing gets rewritten wholesale.

## 2. Practical: LLM Evaluation and Analysis (2 h, Austin Bennett), about 17 h of prep

What is scored, their words and verified sources (`mercor-onsite/format-analysis.md` §1.4): design, implement, analyze; "set up good experiments and understanding statistics, having good judgment"; "you don't ship a number you can't defend"; a judge validated against hand labels (Austin's own work); and, reported from a Blind SWE onsite, the AI-written code reviewed line by line. What loses it (§1.7): 30 minutes on setup; outputs nobody read; a number without an interval; narrating the process instead of the finding; code you cannot explain; missing the email. Five brief shapes are possible (§1.3 a to e: prompts plus references or rubrics; pre-generated outputs to judge; two models to compare; a dataset with something wrong in it; trajectories). The toolkit handles all five; the loop is the skill.

Why the toolkit is not optional (§1.6, the 90 minutes honestly): setup 5 with a template or 15 without; reading the data 10; writing the inference and grading loop 10 with a ready toolkit or 30 from scratch; running it, minutes to tens of minutes; a second pass if the grader is an LLM; reading 20 to 30 failures by hand 15 to 20; slides 10. From scratch that is over 100 minutes, and what gets cut is the part that is scored: reading failures, the finding, the caveats. The clock only fits if the pipeline code is already written and rehearsed, so that on the day you spend minutes adapting it and the rest of the time looking at data.

Status: none done (09-18).

| ID | Task | Done when | Device |
|---|---|---|---|
| P1a | Keys and tools, tonight, on the machine you have: OpenAI, Anthropic, Google, OpenRouter keys funded (an inference key, not the subscription; Emily: any provider is fine); Cursor account; Claude Code in the terminal. | Four successful calls. | dev |
| P1b | Travel laptop, Tue 22 lunch (it arrives Sun 20 or Mon 21): clone the toolkit, paste keys into `.env`, run the smoke test on a phone hotspot, not home Wi-Fi; Cursor logged in; Claude Code works. Rehearsal 2 then runs on it. | Smoke test passes on the hotspot. | travel laptop |
| P2 | Read Mercor's grading code once, 45 min: apex-evals `grading_prompt.txt` and grading code; the Archipelago judge prompt and scattergun guard; the APEX-Accounting judge rules (sees prompt, criterion, final output only). Facts and verbatim prompts: `research/mercor-output-2026.md` §2. Then the gated datasets: `mercor/apex-agents-v1.1` and `mercor/apex-agents` are "gated" on Hugging Face, which means you log in, open the dataset page, click to accept the terms (approval is automatic), and only then does `hf download` work. Do it once, download one task dir, read `tests/grade.py` and `grading_config.json`. | You can say from memory what their judge sees, returns, and forbids; one real task dir is on your disk. | screen |
| P3 | Toolkit v1, its own public GitHub repo (decided 09-18), generic: no Mercor data, no Mercor prompts verbatim, no PII. `run_inference.py`: async OpenAI-compatible client, concurrency limit, timeout, retries with backoff, disk cache keyed by model + prompt + params + sample index, append-only `raw.jsonl`, latency and error per call, cost and time estimate before the run. `grade.py`: exact match with normalization and numeric tolerance; per-criterion judge in Mercor's shape (criterion + response in, `{"result": 0 or 1, "reason": ...}` out, every raw judge output saved); scattergun check (more than one committed final answer scores 0). `metrics.py`: Pass@1 with task-level bootstrap CI; unbiased Pass@k; Pass^k; mean criteria met; paired comparison of two models with bootstrap on the differences; judge vs labels: accuracy, precision and recall on Met, Cohen's kappa. `failures.py`: stratified failure sample to markdown; taxonomy counts; LLM classifier over failures with a hand-labelled slice and its accuracy. `report.md` template: headline, numbers with CIs, taxonomy with two examples, what is wrong with this eval, next steps, what was cut. README with exact commands. Build order: P3a inference, P3b grade + metrics, P3c failures + report + README. | Clean clone to first result under 5 minutes, timed. Unit tests pass on a toy set with known answers. A second run costs $0. Every function explainable. | dev |
| P4 | Run-sheet: `mercor-onsite/run-sheet.md`, agent writes Sat 19 09:30 with you: the 90-minute minute-by-minute (0 to 10 read twice, one question, one metric, cut list; 10 to 25 smoke set of 20, eyeball raw outputs, launch the full run; 25 to 60 read failures, taxonomy, count; 60 to 75 metrics, one table, one plot; 75 to 85 report, slides, email; behind at 60: cut analysis, never the presentation), the pre-flight checklist, if-then rules, the 5-slide template (finding first: finding, numbers with CIs, taxonomy with two examples, what is wrong with this eval, next steps and what was cut), the kickoff questions. | Printed; used in every rehearsal. | screen |
| P5 | Rehearsal 1, Sun 20: `mercor-onsite/mock-1-brief.md` (Terminal-Bench traces; brief and key exist). 15 min brief, 90 timed, 15 min presentation recorded, repo and results emailed to yourself before minute 90. Debrief against `mock-1-grader-key.md`; fix list. | Rubric score written (14 to 16 ready; 10 to 13 one more rehearsal on the weak rows; under 10 rebuild); fix list written. | dev |
| P6 | Toolkit v2: fixes from rehearsal 1; re-time the clean clone. Final fixes after rehearsal 2 (Thu 24). | Under 5 minutes again. | dev |
| P7 | Presentation Q&A thread after each rehearsal: paste slides, results, code into a fresh thread with the §8.3 prompt; get grilled; code walked function by function. | No function you cannot explain; gaps in the question bank. Three threads by Sat 26. | screen |
| P8 | Rehearsal 2, Wed 23, on the travel laptop: `mercor-onsite/mock-2-brief.md` (APEX-v1-extended, 30 of the 37 CSV/text-only tasks; agent writes brief and key by Tue 22 evening). Camera on for the whole 90 minutes; stated consequence: the recording is graded line by line. | Emailed before the clock; 12 or more of 16. | travel laptop |
| P9 | Rehearsal 3, Sat 26 morning PT: `mercor-onsite/mock-3-brief.md` (apex-accounting dev set, a provided judge script with one planted bug; agent writes by Fri 25 morning). Present to Salman. | Bug found; 14 or more of 16. | travel laptop |
| P10 | Kickoff script from memory (`format-analysis.md` §1.9): deliverable format; which metric they report on this data; judge prompt given or mine; their endpoint or my key; rate limits; may I subsample; then restate the task in one sentence and get a nod. Plus the toolkit ask: "I have a small open-source eval harness of my own. Fine to use it?" | Said in under 60 seconds without notes. | paper |
| P11 | Day-before check, Sun 27, on the travel laptop: presentation dry run twice on rehearsal 3 (8 min each); email flow test to yourself; clean-clone test; keys; Cursor; battery; printed sheets. | All green; laptop closed. | travel laptop |
| P12 | Brief-triage drills, 10 minutes each, in a thread with the §8.4 prompt: the interviewer hands you a brief in one of the five shapes without saying which; you write the first-10-minutes plan (the one question, the one metric, the cut list, the smoke set, what you read by hand first, the risks) and get graded. Trains the design third of "design, implement, analyze" without a 90-minute run. One in any spare 15 minutes. | Five briefs by Sat 26, the last two graded Strong on every item. | screen |

Track done when: P9 at 14 or more; P6 under 5 minutes; P7 clean on rehearsal 3's code; presentation conclusion-first in 8 minutes.

## 3. Algorithms (30 min, Jiwon Lee), about 13 h of prep

What is known, their words: "Problem-solving on real architecture challenges, infrastructure decisions, and scaling strategies that mirror a challenge you may face at Mercor. Interactive, discussion-based. Not Leetcode, not system design. True algorithms." Jiwon Lee: Applied AI Engineer, not the research team; MIT CS and Econ; no papers, code, or posts found (`research/interviewers.md` §2, reported sources only). What is not known: no first-hand account of this round's content exists for any Mercor loop (`research/candidate-reports.md`). Third-party descriptions of Mercor's algorithms round, unverifiable (same file): "transform and process a dataset efficiently, then optimize it; expect follow-ups on time and space complexity and on why you picked a given data structure"; "distributed and AI-infrastructure scenarios: inter-service communication, fault tolerance, and data-storage trade-offs for serving or grading model outputs at scale"; off-beat prompts like "the slowest sorting algorithm and its complexity." What is scored, inferred and general (`format-analysis.md` §2.5): restate; ask for scale; brute force with its cost; name the bottleneck; two approaches, one chosen with a reason; complexity and edge cases; what breaks at 10x; what you do when the constraint changes; empirical verification; taking hints well. Highest-variance session of the three, half the gate.

Your 09-18 question, is it just CS algorithms: no. Mercor's own attested prompts (`research/candidate-reports.md` R10) include a compact GPT-style transformer review (tensor shapes through causal attention, the shifted next-token loss, KV-cache parity), a candidate-search design with an unreliable comparator, memorization, and "top-p vs beam", a probability question about coffee cups with ties, a referral DAG with expected value, and sorting bounds. So the round is prepared in three layers, and the interviewer threads rotate across all three:

- Layer 1, CS core: the toolbox (A4).
- Layer 2, math, probability, statistics, and ML algorithms (A5).
- Layer 3, Mercor-specific: the families inferred from what Mercor computes (`format-analysis.md` §2.4: matching and ranking, scheduling and throughput, dedup and contamination, statistics under a budget, graphs and DAGs, fundamentals with a twist) plus the two reported ones (dataset transform-and-optimize; infra scenario with an algorithmic core). These are the drills (A6).

Fresh rows go through the learning protocol in §1 first, then straight into threads.

Status: none done (09-18).

| ID | Task | Done when | Device |
|---|---|---|---|
| A1 | The six-move protocol and the pacing phrases (`mercor-onsite/algorithms-drills.md`) from memory, plus 10 to 15 lines of pseudocode for the chosen approach when asked. | Said without the sheet on three separate days. | paper |
| A2 | Pattern sheet, 22 rows (same file): when it applies and its cost. | All 22 cold. | paper |
| A3 | Prove-it list, 12 items (`mercor-onsite/theory-syllabus.md` Part 2): closed book, aloud, on paper or whiteboard, scored 0/1/2. Passes Sat 19, Tue 22, Fri 25 (in flight). | Two consecutive all-2 passes. | paper |
| A4 | Layer 1, CS core, at L2 (derive the bound, prove the greedy choice, know the constants): syllabus Part 2 rows A (sorting bounds, selection, binary search on the answer, amortized analysis, recurrences, hashing and sketches, sampling, MinHash and LSH), B (traversal and DAGs, shortest paths, components, flows and matching, centrality), C (stable matching, assignment, online matching, ranking under noise), D (greedy proofs, load balancing, bin packing, queueing, rate limiting), G (knapsack and DP over DAGs, numerics). Then the breadth sweep, general CS as insurance, each to L1 to L2 (shape it solves, cost, one pitfall): DP patterns (knapsack variants, longest increasing subsequence, edit distance, interval DP, DP over subsets by name); strings (rolling hash, KMP by name, tries); range structures (Fenwick tree, segment tree); two pointers and sliding window; heaps and k-way merge; external sort and map-reduce style aggregation for data larger than memory; grid BFS and shortest path; minimum spanning tree (Kruskal, Prim); backtracking with pruning; bit tricks; infra basics (consistent hashing, replication and idempotency, queues and backpressure, at-least-once vs exactly-once). Read only to fill a gap a pass found. | Every syllabus row at L2 closed-book; every breadth item cold. | paper |
| A5 | Layer 2, math, probability, statistics, ML, at L2. Probability (Part 2 F): symmetry and linearity of expectation, ties, the birthday bound, Bayes on a noisy comparator; general additions: conditional probability, variance of an estimator, the central limit theorem, Markov chains (Part 2 G: cycles turn a DAG expectation into a chain), Hoeffding and Chernoff by name. Statistics (Part 1 G, Part 2 E): the unbiased Pass@k estimator derived, task-level bootstrap, paired comparison, Cohen's and Fleiss kappa, Welford, Hoeffding's n, the peeking problem and sequential tests, how many tasks to detect a 3-point difference. Bandits (Part 2 C): UCB regret, Thompson sampling, when a bandit beats an A/B test. ML arithmetic (Part 1 E): about 2N FLOPs per token for inference and 6N for training, about 16 bytes per parameter in mixed-precision training, KV bytes per token = 2 × layers × kv_heads × head_dim × bytes, the KV concurrency ceiling. ML core, general, anchored by Mercor's attested prompts: tensor shapes through causal multi-head attention, the shifted next-token loss, KV-cache parity (the compact GPT review); attention cost O(n²) and linear-time alternatives by name; decoding (greedy, temperature, top-p, beam, speculative by name; the candidate-search prompt's "top-p vs beam"); continuous batching and quantization by name; SGD, Adam, learning-rate schedules in one sentence each; bias-variance and cross-validation; k-means and PCA by name; logistic regression as the sigmoid in your take-home; importance sampling; log-sum-exp. | Each item at L2 closed-book; the three attested prompts (compact GPT review, candidate search, coffee cups) answered aloud in under 5 minutes each. | paper |
| A6 | Layer 3, the drills: 1 to 6 exist (`algorithms-drills.md`, keys in `algorithms-grader-key.md`); 7 to 10 with keys the agent writes by Sun 20 evening (project-to-contractor matching with capacities; ranking under a noisy comparator with a call budget; referral DAG reachability and flow centrality with expected value; task-DAG orchestration with retries, worker loss, lineage, tenant fairness). Spoken to an LLM interviewer with the §8.2 prompt (one problem per 30 min, a constraint change at halfway, "what breaks at 10x", "how would you verify it"), graded against the key. | Each 12 or more of 16; anything under 10 repeats next day. | screen |
| A7 | Fresh-thread rounds: the §8.2 prompt in a new thread each time; the interviewer picks the layer and the family and rotates; target 12 rounds over the window, about one a day; a question-bank line after each. | Three consecutive rounds at 12 or more on families you did not choose. | screen |
| A8 | Mental arithmetic drill: calls × latency / concurrency in hours; KV-cache concurrency ceiling; staleness bound; Little's law; birthday bound; majority-of-m error; FLOPs for a training step. | Ten estimates, each under 30 seconds, within 2x of exact. | paper |
| A9 | Human mock with Salman (robotics research engineer, DeepMind), Sun 27 morning PT: one problem, Salman interrupts and changes a constraint at 15 min; a second problem if time allows. | Notes in the question bank. | paper |

Track done when: A3 two clean passes; A7 three consecutive 12 or more across layers; A4 and A5 cold; A1 automatic.

## 4. Post-training (45 min, Charlie Ruan; only if the first two pass), about 15 h of prep

What is scored, their words: "explaining mechanisms rather than recalling terminology"; "how you reason through an unfamiliar tradeoff." Charlie's world, verified (`research/interviewers.md` §3): fully async RL and staleness; train/inference logprob mismatch and its corrections; token accounting in multi-turn agents (re-tokenization drift, TITO, step-wise training); loss aggregation and length on 2k to 128k-token trajectories; the 397B run's numbers; data over algorithm. The screen's three misses were precision misses under questioning (critic "gives the reward"; loss mask blended with the reward; environment design stayed abstract). The bar (`theory-syllabus.md`): L2 to L4 on every Part 1 row; the Part 0 field maps (RL, post-training, agent evaluation) at L1 to L3 so nothing outside the priorities surprises you; and one fixed routine for an unfamiliar trade-off: objective, constraint, two options, failure mode of each, the cheapest experiment that decides it. At the edge: "I have not seen that; here is what I would measure." Never claim LLM RL you have not run: "VLAs yes, LLMs no, plus one small GRPO run," then reason.

Fresh rows (most of Part 1 B, D, E and the field maps) go through the learning protocol in §1 first; T1 and T9 are the practice.

Status: none done (09-18).

| ID | Task | Done when | Device |
|---|---|---|---|
| T1 | Derivation deck, 12 items (`theory-syllabus.md` Part 1): closed book, timed, scored 0/1/2, checked against `post-training-primer.md`. Passes Fri 18, Sun 20, Thu 24, Sun 27. Misses become the first questions of the next T9 thread. | Two consecutive all-2 passes. | paper |
| T2 | The screen gaps: environment-design walkthrough (assumption → prompt set → verifier → harness → de-risk → failure modes) on three targets (HLE, an APEX-style banking task, a Catan negotiation), 2 min each, recorded, graded against the Q3 model answer in `mercor-research-engineer-post-training.md`; and the two one-liners: "the critic estimates value; the verifier or reward model gives reward; GRPO replaces the critic with the group mean" and "the loss mask decides which tokens get gradient; the reward decides what gets scored." | Three recordings under 2:15 with all six steps; one-liners right first try on two days. | paper |
| T3 | SkyRL toy environment against `BaseTextEnv` (`init(prompt)`, `step(action)` returning observations, reward, done, metadata; `register`); run one episode. If the install fights past 45 min, unit-test the class without the trainer. | Episode runs, or the class passes its test. | dev |
| T4 | Your own scheduler at mechanism depth: the 12 questions in `format-analysis.md` §0.5, aloud, no notes, plus the map to real RL (flat-group rule = dynamic sampling; census = difficulty filtering; staleness of pass-rate estimates; product over skills; poison = corrupted reward). Own numbers: clean banks +0.031, 16 of 16; poisoned banks +0.041, 12 of 16, three banks lose 5 to 12 points. | All 12 clean on a recording. | paper |
| T5 | Primary sources, once each, whole, as the instruction pass for a row the deck found fresh: the 397B post; the SkyRL docs Charlie wrote (step-wise training, agent integration, off-policy correction, DAPO); Jet-RL abstract and mismatch section; DAPO §3; DeepSeekMath §4.1; DPO §4; APEX-Agents §4.2. | Each source's L4 numbers recited from memory. | screen |
| T6 | Part 1 rows A to G at L2 to L4, then the Part 0 field maps at L1 to L3: closed-book check row by row; fresh rows through the learning protocol; misses feed T9. | No row below its level on the last check. | paper |
| T7 | Trade-off drills: `mercor-onsite/tradeoff-drills.md` (agent writes by Sat 19 evening) with strong-answer keys: the ten Mercor-shaped ones (sync vs fully async; value model or not for 100-turn tasks; token_mean vs prompt_mean; keep or drop all-fail prompts; hard zero vs soft penalty for overlong; more rollouts per prompt vs more prompts; LLM judge vs programmatic verifier; SFT on a stronger model's trajectories vs RL on your own; where a 2x compute budget goes; grading a task whose artifact is a document) plus five from outside the priorities (DPO vs online RL for a preference set; PRM vs ORM for a 40-step task; LoRA vs full fine-tune under a memory cap; offline logged trajectories vs on-policy rollouts; training compute vs test-time compute at a fixed budget). Spoken, 2 min each, the routine, attempted before the key is read. | 15 recordings, routine present in each. | paper |
| T8 | Evidence told as mechanism, 5 lines each on paper: LIBERO-PRO (recipe-induced; LoRA and frozen priors rejected; effect bounded); VLM judges; BMO eval pipeline; Catan (hidden-state leak, view object, what you would train on and how, the TITO caveat). | Written; each said in under 60 seconds. | paper |
| T9 | Fresh-thread mock loop: the §8.1 prompt with the escalation and coverage rules, 20 to 30 questions per thread, answers dictated aloud, debrief, question-bank lines, then a new thread. Target eight threads over the window, one most days. | Three consecutive threads with no new gap and no topic where the interviewer reached the bottom of you first. | screen |
| T10 | Human mock with Salman, Sat 26 14:00 PT, 45 + 15, Salman scoring aloud on the two rubric lines. Salman's ground is robotics RL and evaluation, so this mock leans on RL fundamentals, credit assignment, reward design, imitation vs RL, and your own VLA and Catan evidence; the LLM-specific rows (TITO, async corrections, aggregation) are covered by T9 and T5. No Toronto mock is planned (your 09-18 note: only if critical). | Debrief in the question bank. | paper |
| T11 | Numbers cold (§7): cover and recite. | 100% on two days. | paper |
| T12 | Questions for Charlie, pick two: how often the logprob check catches something now that the vLLM bug is fixed; what the 480 held-out tasks show that the 1,928 training tasks do not; whether step-wise training or TITO is the default for new harnesses and why; what he would run next if compute were free. | Two picked. | paper |
| T13 | The small GRPO run, on a rented GPU (your 09-18 call). Why: `format-analysis.md` §3.7 calls it the single highest-leverage move for this session, because after it "what does the critic do" and "why prompt_mean" are things you have seen in a log, not read. `mercor-onsite/grpo-run.md`, agent writes by Tue 22: provider and instance; the Unsloth GRPO notebook to run (the Unsloth README lists Qwen2.5-3B GSM8K, Llama-3.2-1B DAPO, Gemma-3-1B GSM8K, verified 09-17; that any of them runs unmodified on a rented box is not verified, so the first 15 minutes are a smoke test and the abort rule is written in); the four curves to watch (reward, KL, completion length, fraction of zero-advantage groups); the trainer code to read afterwards (advantage computation, loss aggregation, clipping, KL) mapped to T1 items; what to say about it in the room, as what it is: one small run, not industry post-training. Scheduled Wed 23 afternoon, only if rehearsal 2 scored 12 or more and the A6 drills average 12 or more; otherwise the afternoon goes to algorithms and the run moves to Thu 24 evening or is dropped. | One run with the four curves; each loss line related to a T1 item; a 60-second account of what you saw. | dev |

Track done when: T1 two clean passes; T9 three clean threads; T2 clean; T11 at 100%.

## 5. Logistics

| ID | Task | When |
|---|---|---|
| L1 | One-page card: retrieval cues written from memory, corrected once against the sources, never open during practice. | Write Thu 24; read once Mon 28 and once Tue 29 morning. |
| L2 | Pack: laptop, charger, ID, printed run-sheet, pattern sheet, card, water, snacks. | Thu 24. |
| L3 | Sleep and light: bed by 23:00; retrieval sessions before bed; in SF, evening light, no bright light before 07:00 PT, bed by 23:00 PT; no melatonin. | Every day. |
| L4 | Courses: lectures are attended as fixed blocks; nothing else about the courses is in this plan (your 09-18 note). | |
| L5 | Wed 23: evening busy; the rest of the day is free, so it carries rehearsal 2, the GPU run, and two algorithm blocks. | Wed 23. |
| L6 | Brex reimbursement form and receipts. | After the visit. |
| L7 | After the onsite: every question in their words into `interview-prep/sessions/`, then `/career-ops interview/debrief`. | Tue 29 evening. |
| L8 | Travel laptop arrives Sun 20 or Mon 21. Build and rehearse on the machine you have until then; the toolkit is a git repo and the clean-clone test (P3, P6) is what makes the move safe. P1b Tue 22 lunch; rehearsal 2 (Wed 23) is the first full run on it. | Tue 22. |

## 6. Suggested schedule (ET through Fri 25, then PT)

Fixed per your 09-16 rule: lectures, Strahd, Akira, Readers of Books. Skipped: Aemma, Robotics Jam, Serobro, DnD, Meg's. Calendar re-read 09-18. Weekdays keep the 09-16 assumption (before work, lunch, after the lecture) except Wed 23, which is free until 19:00. About 45 hours. Re-cut for the next two or three days after each rehearsal debrief; days further out are a sketch. Threads (T9, A7, P12) also fit any spare 45 minutes on a phone; the table shows the minimum.

| Day | Block | Tasks | Device |
|---|---|---|---|
| Fri 18 | 17:30 to 19:30 | P1a, then P3a | dev |
| | 20:00 to 21:00 | T1 pass 1; write the miss list | paper |
| | 21:00 to 22:00 | A1, A2 first pass | paper |
| Sat 19 | 09:30 to 10:00 | P4 with me; one P12 brief after | screen |
| | 10:00 to 13:00 | P3b, P3c; time the clean clone | dev |
| | 14:00 to 15:30 | T2: three targets recorded; the two one-liners | paper |
| | 16:00 to 17:00 | A6 drills 1 and 2 | screen |
| | 17:00 to 17:30 | A3 pass 1 | paper |
| | 17:30 to 18:30 | A4: learning protocol on the first gaps | paper |
| | 20:00 to 21:00 | T9 thread 1 (optional if DnD) | screen |
| Sun 20 | 08:30 to 10:45 | P5 rehearsal 1 | dev |
| | 10:45 to 11:30 | P5 debrief with me; fix list; schedule re-cut | screen |
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
| | 12:30 to 13:15 | P1b on the travel laptop | travel laptop |
| | 21:15 to 22:30 | A3 pass 2; A5: learning protocol on probability and statistics | paper |
| Wed 23 | 07:30 to 09:45 | P8 rehearsal 2, camera on, travel laptop | travel laptop |
| | 10:00 to 10:45 | P8 debrief; fix list; schedule re-cut | screen |
| | 11:00 to 12:00 | P7 thread on rehearsal 2 | screen |
| | 13:00 to 16:00 | T13 GPU run if the gate condition holds; else A7 rounds and A4, A5 | dev |
| | 16:15 to 17:30 | A6 drills 9 and 10 | screen |
| | 17:30 to 18:30 | T9 thread 3 | screen |
| Thu 24 | 07:30 to 09:00 | A7 rounds 2 and 3 | screen |
| | 12:30 to 13:15 | T1 pass 3 | paper |
| | 21:15 to 22:30 | P6 final fixes; L1 card; L2 pack; print | dev, paper |
| Fri 25 | 07:30 to 09:00 | T2 last reps; T4; T11 | paper |
| | in flight | A3 pass 3; T6 Part 0 check; T8 read; A2, A4, A5 self-quiz | paper |
| | evening | nothing; L3 light rules | |
| Sat 26 (PT) | 09:00 to 11:15 | P9 rehearsal 3, present to Salman | travel laptop |
| | 11:15 to 11:45 | P9 debrief | screen |
| | 14:00 to 15:00 | T10 Salman mock, scored aloud | paper |
| | 15:15 to 16:15 | T9 thread 4, or P7 thread on rehearsal 3 | screen |
| | 16:15 to 16:45 | A8; T11 | paper |
| Sun 27 (PT) | 09:00 to 09:45 | A9 Salman mock, one or two problems | paper |
| | 10:00 to 10:45 | T1 pass 4; T4 | paper |
| | 11:00 to 12:00 | P11 | travel laptop |
| | after | stop; nothing new | |
| Mon 28 (PT) | | rest; hotel check-in; read L1 once at 10:00; walk to 181 Fremont; light exercise; bed 22:30 | |
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

## 8. Open

Decided 09-18 and folded in: toolkit public; courses out; no Toronto mock; travel laptop Sun 20 or Mon 21; Salman Sat 26 and Sun 27; Wed 23 free until the evening; GPU rented.

Artifacts the agent writes, in order, on your "go": `run-sheet.md` (Sat 19 09:30, with you), `tradeoff-drills.md` (Sat 19), drills 7 to 10 with keys (Sun 20), `grpo-run.md` (Tue 22), `mock-2-brief.md` and key (Tue 22), `mock-3-brief.md` with the planted-bug judge (Fri 25). The four interviewer prompts (§8.1 to §8.4) are in `format-analysis.md` now.

## Sources

Emily Arevalo thread `1a0a3ff4ea1e29f9` (09-15, reply 09-17, her 09-18 answer); Google Calendar read 09-18; Shayan's 09-18 answers in chat; `mercor-onsite/format-analysis.md`; `mercor-onsite/theory-syllabus.md`; `mercor-onsite/evidence.md`; `mercor-onsite/research/{interviewers,mercor-output-2026,candidate-reports}.md`; `mercor-onsite/mock-1-*.md`; `mercor-onsite/algorithms-*.md`; `post-train/`; `mercor-research-engineer-post-training.md` (Round 1 debrief); `question-bank.md`; `data/agent-inbox.md` (session 12 handoff).
