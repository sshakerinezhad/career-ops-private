# Mercor onsite, Tue 29 Sep: what each interview is, and what "good" means

Written 2026-09-17, 12 days out, before rebuilding the plan. Purpose: understand the three formats well enough that nothing on the day is a surprise, then decide what to train. This file supersedes §3 of `mercor-onsite-plan.md`; the rest of that plan is rebuilt after we agree on this.

Every claim carries a tag:

- **[their words]**: verbatim from Mercor. Emily Arevalo's email of 09-15, Kristen O'Donnell's of 09-10, Aksh Garg's of 08-21. All three re-read today from Gmail.
- **[verified]**: checked today against a primary source (mercor.com posts, charlieruan.com, the Ashby job board JSON, PracHub, the AOL syndication of Business Insider).
- **[inferred]**: my inference; the basis is stated next to it.
- **[reported]**: third-party candidate reports (Blind, Glassdoor). Unverifiable. Low weight.
- **[general]**: how this interview format works at AI labs in general. Not Mercor-specific.
- **[judgment]**: my recommendation. Push back on these.

## 0. The structure that matters most

**[their words]** Arrive 11:30 PT. 11:45 kickoff with Austin Bennett. 12:00 to 13:30 solo work block. 13:30 to 13:45 presentation to Austin. 14:00 to 14:30 Algorithms with Jiwon Lee. 15:00 to 15:45 Post-Training with Charlie Ruan. 15:45 wrap-up with Maggie Cassidy.

**[their words]** "If the first two interviews are successful, you'll continue on to the next."

**[their words]** "Please assume you can use AI tools like Cursor or an LLM of your choice unless otherwise stated in the problem description." "Please have your API key ready before the onsite." "We're unable to provide specific examples or recommend prep materials for these interviews."

The gate is the single most important fact. Two sessions decide whether the third happens. **[inferred]** Each session is scored against a rubric and both must clear a bar. Nobody has said what the bar is, and Kristen's line "some candidates finish early depending on fit" says it is real.

**[verified, sibling JD "Research Engineer - Environments, Data and Post-Training", Ashby board today]** Under Nice To Have: "Real-world post-training team experience in industry (highest priority)." That is your friend's point in Mercor's own words. They are hiring people who have done it. The whole preparation is about becoming, in the room, someone who has.

---

## 0.5 The take-home, read in full today (`post-train/`)

**What it was [verified, `post-train/README.md`].** A 75-minute Litmus assessment titled "Post-train". A seeded, offline GRPO simulator: the model is five proficiency numbers; 120 tasks with visible skill shapes and hidden difficulty; a budget of 5,760 rollouts, six epochs of groups of 8. A closed group teaches in proportion to its spread, k(8−k)/64, which is zero when all pass or all fail. You write a scheduler: `choose()` returns the next task, `observe(task_id, passed)` reports the outcome. Score: mean pass rate on a hidden evaluation set drawn from a different distribution. Part 2: some tasks bank their credit with the sign flipped; nothing marks them; the poisoned fraction is drawn from [0, 0.4] and can be zero.

Their words: "There is more here than fits, on purpose — nobody finishes it, and you are not expected to. What we are watching is which ideas you get to and what you decide to skip." "A strong Part 1 and an honest note about Part 2 beats two rushed halves." "We read every submission." "What we are mainly interested in is the reasoning." Graded by re-running at budgets 960, 2,880, 5,760 and 11,520 (240 runs per class), plus a runtime-growth check, plus a recorded walkthrough.

**What you built [verified, `curriculum/__init__.py`, `notes.txt`, `interview-prep/mercor-call-card.md`].** Phase 1: a census, one group per task, exactly one epoch. Phase 2: score each task as exp(−1.5·age)·p̂(1−p̂) with p̂ from the latest closed group only; a bonus of 0.15·age when the last group returned 1 or 2 of 8; a tilt toward skills your own credit tally says are starved (the biggest term); seeded softmax at temperature 0.08; a full group per pick; leftover budget spent on one task so the final partial group is as large as possible. A wake term for 0-of-8 tasks was built, measured harmful across 16 banks, set to zero, and left in with the receipt. Two analysis tools that read the simulator's hidden state, sanctioned by the README: `tools/check_census.py` (estimator RMSE 0.095 against a binomial floor of 0.093; drift about +0.12 per epoch in the mid band, +0.03 for hard tasks; roughly 38% of the bank unreachable) and `tools/score_run.py` (rebuilds the grader's probe set from the shipped code, sweeps salts against the uniform baseline, sweeps constants). Poison: not built; a written threat model instead. Your call card records the split of authorship: census, p(1−p), banking hard tasks and staleness were yours; targeting k∈{1,2} and softmax came from Claude Code; a draft bonus on 0-of-8 was caught and retargeted.

**Numbers, re-measured by me today on this machine.** Python 3.11; `./bin/check` passes all five checks.

| World | Mean delta vs uniform baseline | Wins | Weakest skill, baseline → yours |
|---|---|---|---|
| Clean banks, 16 salts (Part 1) | +0.031 | 16 of 16 | 0.827 → 0.892 |
| Poisoned banks, 16 salts (Part 2, policy unchanged) | +0.041 | 12 of 16 | 0.686 → 0.714 |

The poisoned row is new information. On average the policy still wins, but three banks lose by 5 to 12 points (salts 03, 08, 09), and the losses land where poisoned tasks sit in the informative band, which is what your threat model predicted. Your call card's clean-bank figure (+0.029, 16 of 16) came from different salt names; the gap is sampling, not a bug. Say "about three points" and "16 of 16".

**What it tells us about how Mercor tests [inferred, high confidence: the README and the onsite email share one voice].** Fully disclosed mechanics, hidden data. More than fits, on purpose. Judgment about what to skip is scored explicitly. Reasoning is scored over the number. Honesty about what is not built is rewarded. Everything is re-run at several scales. Building tooling to measure against what you can see is expected, not cheating. A spoken walkthrough follows the artifact. The practical on the 29th is this format run live: a brief instead of a README, 90 minutes instead of 75, a presentation instead of a recording, Austin instead of a form.

**Implications per session.**

- **Practical.** The behaviours that advanced you are the ones to repeat: read the whole brief; find the structural lever (there: flat groups teach nothing); build the missing feedback loop (there: a stand-in evaluation set); tune on several draws, not one; decide what to skip and say so; ship an honest pass on what you did not build.
- **Algorithms.** The take-home is drill 3 in `algorithms-drills.md` almost exactly (dynamic sampling under a rollout budget). Mercor has already watched you do that one; expect a different family. The protocol is unchanged.
- **Post-training.** Charlie can open with your scheduler. You must explain it at mechanism depth without notes, and map each part to real RL: the flat-group rule is DAPO's dynamic sampling; the census is difficulty filtering (keep prompts whose pass rate is strictly between 0 and 1); staleness is why online pass-rate estimates rot as the policy improves; the product over skills is why one starved capability caps a compositional eval; poison is corrupted reward or data.

**Questions Charlie could ask about it, with the answer you need to own:**

1. Why p(1−p)? Derive the expected spread for k ~ Binomial(8, p). It is (7/8)·p(1−p).
2. Why the latest group only, not a running average? Drift of about +0.12 per epoch passes the estimator's RMSE of 0.095 inside one epoch; pooling hides the drift.
3. Why did the wake term lose? Softmax already gives banked tasks a few percent of picks; an explicit bid diverts budget from tasks that are informative now.
4. Why softmax over argmax? A 4-of-8 task resets its own age and wins argmax again, gets hammered until it saturates, and concentrates credit on one task's skills.
5. Why is the skill tilt the biggest term? Pass probability is a product over skills, so imbalance is punished; reasoning appears in 13 of 120 tasks and a spread-only policy starves it.
6. What does a poisoned task do to this policy? It banks credit with the sign flipped and looks normal in its own pass rate; you farm coin-flip tasks, so it hits you where you spend most; your tally trusts the flipped sign and steers toward the damaged skill.
7. What would you build for poison with 30 more minutes? Cap lifetime groups per task; quarantine a skill whose observed improvement lags what the tally predicts; the detector must pay for itself on clean banks because the fraction can be zero. Then the measured numbers above.
8. How would you detect it statistically? Per skill, compare predicted improvement from banked credit with observed change in pass rates on tasks needing that skill; run a sequential test on the residual.
9. What is this in real post-training? Curriculum and dynamic sampling under a rollout budget; online difficulty estimation; a bandit over prompts.
10. Where does the analogy break? Real pass rates are not a product of sigmoids, skills are not five scalars, the update rule is not known, rewards are noisy and gameable, and rollouts are not equally priced.
11. What would you change now? A Beta posterior per task with forgetting instead of a point estimate from one group; Thompson sampling instead of a temperature; a model-based estimate of each task's hidden scale from its k history and the known update rule; an explicit horizon so the last epoch exploits only.
12. How did you validate without a score? Rebuilt the grader's probe construction from the shipped code, swept salts, tuned on one salt prefix and confirmed on another.

**Discrepancy, resolved 09-17 (Shayan):** James did not walk the take-home on the screen; the 09-10 debrief (background, GRPO, HLE-style environment design, masking) is the record. The partial 09-09 file now carries a correction note. So Charlie would be the first Mercor interviewer to discuss the scheduler with you, if he does. **The recorded walkthrough questions** were generic, per Shayan: what did you do here, how did you approach the problem, how would this change things, how would you act differently. That is the presentation Q&A shape for the practical too.

---

## 1. LLM Evaluation and Analysis (2 h, Austin Bennett)

### 1.1 Their words

"Format: 2hr. 15-minute live kickoff followed by 1 hour and 30 minutes of asynchronous independent work and a short 15-minute presentation."

"Focus: Evaluates your ability to design, implement, and analyze LLM evaluation pipelines. You'll set up a lightweight Python environment, perform inference against provided models and datasets, and summarize your insights in a short closing presentation."

"Notes: Requires a Python environment. Results will be submitted via email to apex@mercor.com. You may use standard open-source libraries or frameworks of your choice. Please have your API key ready before the onsite."

### 1.2 What the format mechanically is

A work sample: a take-home compressed into a room. Three windows where you are observed and one where you are not.

1. **Kickoff, 15 min, live.** Austin gives the brief and the data. You ask questions. First impression forms here.
2. **Work block, 90 min, alone.** Nobody sees the process. Only the artifact survives.
3. **Presentation, 15 min, live.** **[inferred]** About 7 minutes talking, 8 of questions. "Short closing presentation" plus the Blind SWE report of a line-by-line code review in Mercor's AI-allowed block both point to questions eating a large share.
4. **The email to apex@mercor.com.** **[inferred]** Read afterwards, possibly by people who were not in the room. It has to stand alone.

The three verbs are the rubric: **design** (choose what to measure and how), **implement** (make it run end to end), **analyze** (say what the numbers mean). "Summarize your insights" names the deliverable. Insights. Not numbers, not a description of the pipeline.

**[verified, PracHub Mercor page today]** The closest public analog is Mercor's own MLE screen prompt "Build an Ollama Eval Harness" (Mar 2026): read a dataset of cases with an id, a prompt, and an optional reference answer; send each prompt to a model; record latency, failures, retries; compute exact match, pass rate, average latency, error rate; save per-example results and an aggregate report; expose config for model, timeout, retries, temperature, concurrency; be extensible to another backend. That is a screen prompt, not this session. But it is the same loop, with a 90-minute clock and "analyze" bolted on.

### 1.3 What the problem could be. Do not pigeonhole.

No first-hand account of this session exists (research pass 09-16; re-checked today). The brief could be any of:

- **(a)** Prompts plus references or rubrics, one or two named models: "how good is it, where does it fail." **[inferred, most likely]** "Perform inference against provided models and datasets" describes exactly this.
- **(b)** Pre-generated outputs plus rubrics: build a judge and validate it. **[inferred]** Judge calibration is Austin's entire public output.
- **(c)** Two models or two checkpoints: compare, and say whether the difference is real.
- **(d)** A dataset with something wrong in it (label noise, a grader bug, duplicates, contamination) that you are expected to notice.
- **(e)** Trajectories rather than single responses.

Every variant is the same loop: **load, look, call, grade, count, present.** The skill is the loop. Prepare the loop; do not prepare a variant. The previous plan leaned toward (a) with APEX-style rubrics. Likely, not certain. The toolkit must handle all five without redesign.

### 1.4 What is being scored

- **[verified, CPO Osvald Nitski, Business Insider 2026-07-27 via AOL]** "We care a lot about being able to set up good experiments and understanding statistics, having good judgment, and then systems design as well." "We'll do one round where we find out if the person is familiar with AI tools." "We want to make sure that people still have the ability to have good judgment and know what they're doing and not just, like, regurgitate what comes out of Claude."
- **[verified, "Research Scientist, APEX Benchmarks" JD, Ashby board today]** "Statistical rigor: You reason carefully about sampling, variance, contamination and grader reliability, and you don't ship a number you can't defend." "Measurement rigor: Set the standard for how we report results: confidence intervals, inter-rater agreement, human vs. model-as-judge calibration, held-out splits, and the failure analysis that explains why a model scored the way it did."
- **[verified, Austin's own work: "Introducing APEX-Agents 1.1", 2026-09-08, first author]** Judge hand-calibrated on 1,407 rubric items from 337 trajectories, 354 held out; accepted a false-negative rise from 5.3% to 8.0% to catch hedging; "scattergunning" (multiple answers where one is well-specified) scored as zero.
- **[reported, Blind, Mercor SWE onsite, Aug 2026]** The first block had to work end to end, "no stubbing." In the AI-allowed block the interviewer skipped design questions and reviewed the AI-written code line by line.

**[inferred]** So the rubric is roughly: it runs; the statistics are right; the judgment is good (what to measure, what to cut); there is a finding; you can defend every line.

### 1.5 What an expert does that a prepared novice does not

This is the "have done this before" test in the most literal sense. People who have run evals many times:

1. **Read ten raw rows by eye before writing code.** They know datasets lie: missing references, ambiguous prompts, duplicates, format quirks.
2. **Decide the one question and the one metric before coding.** They know the difference between Pass@1, mean criteria met, and pass rate, and pick the one the data supports.
3. **Smoke-test on 5 items, launch the full run in the background, analyze while it runs.** They know API calls fail, time out, and get rate-limited. Retries, timeouts, concurrency, and a disk cache are reflexes, not features.
4. **Treat the grader as a suspect.** They read outputs by hand, find where the grader is wrong, and count.
5. **Put an interval on every number and say what n is.** With 50 items the interval is about ±14 points; they say so before anyone asks.
6. **Present the finding first**, then evidence, then caveats, then next steps. Never "first I set up a venv."
7. **Know where the 90 minutes went and what they cut**, and say it unprompted.
8. **Own the code.** Cursor wrote it. They can say what every function is for and why it exists.

The prepared novice builds a generic harness, spends 40 minutes on plumbing, reports a number without an interval, and describes their process instead of their finding.

### 1.6 The time budget, honestly

**[judgment]** Setup: 5 min with a template, 15 without. Reading the data: 10. Inference loop: 10 with a ready toolkit, 30 from scratch. Running inference: minutes for a few hundred short prompts at concurrency 10 to 20; far longer if generations are long. Grading: a second inference pass if it is an LLM judge. Reading 20 to 30 failures by hand: 15 to 20. Slides: 10.

The arithmetic only closes if implementation is near zero. That is the whole case for a pre-built, rehearsed toolkit, and for subsampling early.

### 1.7 What loses it

**[inferred]** Thirty minutes lost to setup. A pipeline that runs but whose outputs nobody read. A number without an interval. A claim the logs contradict. Narrating what you did. Code you cannot explain. Missing the email deadline.

### 1.8 One decision only you can make

**[their words]** "You may use standard open-source libraries or frameworks of your choice." A personal eval toolkit that is public on your GitHub is a framework of your choice. **[judgment]** Make it public before the onsite. At kickoff say: "I have a small open-source eval harness of my own. Fine to use it?" If Austin says no, you still have the muscle memory. Decide.

### 1.9 Ask these at kickoff

What is the deliverable format (repo link, zip, slides)? Which metric do they report on this data? Is a judge prompt provided or expected? "Provided models": their endpoint or my key? Any rate limits? May I subsample? Then restate the task in one sentence and get a nod.

---

## 2. Algorithms (30 min, Jiwon Lee)

### 2.1 Their words

"Format: 30min. Live synchronous session with a Mercor engineer."

"Focus: Problem-solving on real architecture challenges, infrastructure decisions, and scaling strategies that mirror a challenge you may face at Mercor."

"Notes: Interactive, discussion-based. Not Leetcode, not system design. True algorithms."

### 2.2 What the format mechanically is

Read the three negations and one affirmation literally.

- **Not Leetcode.** You will not type a function against hidden tests.
- **Not system design.** No boxes and arrows, no "design Twitter."
- **True algorithms.** The computational core of an infrastructure problem: which algorithm, which data structure, what cost, what changes when the constraint changes.
- **Interactive, discussion-based.** You talk, she probes, she changes constraints. Whiteboard or pseudocode at most.

**[general]** A 30-minute discussion round is one problem with layers. The interviewer holds a problem with three or four escalations; each opens when you clear the last. The score is how far you get and how you reason on the way. Hints are part of the format: taking a hint well scores up, ignoring it scores down.

**[reported, Glassdoor, Aug to Sep 2026]** Mercor interviewers "frequently interrupt because the scope of the interview was too big for the short interview time slot." Expect pace pressure. Interruption is not a bad sign.

### 2.3 Who is asking

**[verified 09-16 from search-index snippets; no first-party artifact; not re-verifiable today]** Jiwon Lee: Applied AI Engineer at Mercor. MIT CS and Econ, MEng CS. Prior: Fundamental Research Labs, Tzafon. No papers, no code, no posts found. She is an applied engineer on the Applied AI team, not the research team. Expect product-and-infrastructure problems, not theory.

### 2.4 What "mirror a challenge you may face at Mercor" plausibly means

**[inferred from what Mercor computes; the products are verified in `research/mercor-output-2026.md`]** Six families:

1. **Matching and ranking.** Experts to tasks, candidates to jobs, models on a leaderboard, ranking under a noisy or expensive comparator. **[verified, PracHub today]** Mercor onsite prompts "Design a Project-to-Contractor Matching System" (SWE, Aug 2026) and "Design Candidate Search And LLM Evaluation Tasks" (MLE onsite, Apr 2026, with "an unreliable deterministic comparator").
2. **Scheduling and throughput.** Rollouts on sandboxes, judge calls under rate limits, stragglers, staleness bounds, packing by tokens.
3. **Dedup and contamination.** Near-duplicate tasks or trajectories at a million rows; train/test overlap.
4. **Statistics under a budget.** Pass@k estimators, bootstrap, stopping early without peeking, sampling.
5. **Graphs.** Task dependency DAGs, referral networks. **[verified, PracHub today]** "Implement a Referral Network" (MLE screen; DAG reachability, ranking metrics) and "Design Work Orchestration for Machine-Learning Data Pipelines" (MLE onsite).
6. **Fundamentals with a twist.** **[verified, PracHub today]** "Compare Sorting Algorithms and Brute-Force Permutation Sort" (SWE onsite, Aug 2026); "Reason About Coffee-Quality Comparison Probabilities" (Sep 2026: two shops, four cups, ties).

The existing six drills cover families 2, 3, 4 and half of 1. Families 1 (marketplace matching) and 5 (graphs) are under-covered, and given Jiwon's team they deserve equal weight. **This is the first pigeonhole to undo.**

### 2.5 What is being scored

**[inferred; no first-hand report of this round's content exists]** Precise restatement. Asking for scale before designing. A brute force with its cost. Naming the bottleneck. Two approaches, one chosen with a reason. Complexity and edge cases. What breaks at 10x. What you do when she changes a constraint. Whether you can estimate in your head: calls times latency over concurrency equals hours.

### 2.6 What an expert does

Speed to the right framing. Within two minutes they have restated the problem, asked the two constraint questions that matter, and named the bottleneck. They carry the toolbox in their fingers (heaps, hashing, sorting bounds, sampling, DAG algorithms, union-find, binary search on the answer, sketches, LSH, queueing arithmetic) and pick by constraint, not by habit. They quantify: "100k calls at 5 s each at concurrency 50 is about 3 hours, so rounds are the lever, not call count." When the constraint changes they adjust in one sentence. They think aloud in structure, not in silence. They say "I'd verify that empirically by..." without being asked.

### 2.7 What loses it

Silence. Designing before scale is known. A data structure you cannot justify. Ignoring a hint. Ten minutes on the brute force. Not noticing that the constraint change changed the answer.

### 2.8 Why this is the highest-variance session

You have never done one with a Mercor engineer. There is no first-hand data. It is half the gate. It gets live drills with an interrupting interviewer, not reading.

---

## 3. Post-Training (45 min, Charlie Ruan; only if the first two pass)

### 3.1 Their words

"Format: Forty-five-minute synchronous session with a Mercor interviewer."

"Focus: Post-training and RL fundamentals — algorithms, agentic RL, systems design, data, and infra tradeoffs. Emphasis on explaining mechanisms rather than recalling terminology."

"Notes: A 45-minute conversation, no coding, covering a few of these areas. Interviewers care how you reason through an unfamiliar tradeoff, not whether you know our vocabulary."

### 3.2 What the format mechanically is

Five areas named. "A few of these." Forty-five minutes. **[inferred]** Two or three topics at about 15 minutes each. **[general]** Each topic starts with a mechanism question ("what is X, why does it work") and escalates into a trade-off you have not seen. The two scored behaviours are stated in plain words: explain the mechanism; reason through an unfamiliar trade-off. They are telling you the rubric.

**[general]** A depth interview goes deep on each topic until you hit your limit. The score is where the limit is and what you do there. Three behaviours at the limit: bluff (fails), stall (fails), or reason: "I have not seen that. Here is the objective, the constraint, the two options, what breaks each, and the experiment that decides it." The third is what "unfamiliar tradeoff" is designed to elicit.

### 3.3 The best evidence of the style: your own 09-09 screen

**[verified, your recall in `sessions/mercor-research-engineer-post-training-screen-2026-09-09.md`]** James Moore asked, in order: background; "What is GRPO? How does it differ from other methods?"; "Imagine a model and a target, call it Humanity's Last Exam. How do you design an environment for it?"; "How would you go about masking certain parts of outputs for RL?" (multi-turn tool use). Mechanism, design, mechanism. Exactly the pattern above.

The three misses were all mechanism-precision misses: the critic "gives the reward" (it estimates value; the verifier or reward model gives reward); "masking" blended the loss mask with the reward function; environment design stayed abstract. Those are precisely what "explaining mechanisms rather than recalling terminology" is written to catch. The screen is the closest thing you have to a rehearsal of Charlie's round, and it says the gap is precision under questioning, not knowledge.

### 3.4 Who is asking

**[verified today, charlieruan.com and the 397B post]** Charlie Ruan: first-year CS PhD, UC Berkeley Sky Computing Lab, advised by Ion Stoica. MS CMU, BS Cornell CS and Operations Research. "Currently working on post-training and building SkyRL." WebLLM project lead, MLC-LLM core contributor. First author of "Training frontier knowledge work agents: a 397B RL training guide with SkyRL" (2026-09-01), footnote "Work done at Mercor Research." **[verified 09-16]** Third-largest SkyRL committer; author of the step-wise-training and agent-integration docs; second author of Jet-RL (FP8 rollouts collapse under train/inference mismatch on long horizons). He was the original name on your screen slot.

**[inferred]** His "unfamiliar trade-offs" will come from his own world, all of it in his own writing: sync vs fully-async training and staleness; train/inference logprob mismatch and the corrections (importance-ratio truncation, token and sequence masking, router replay for MoE); token accounting in multi-turn agents (re-tokenization drift, token-in-token-out, step-wise decomposition); loss aggregation and length on 2k to 128k-token trajectories; where compute goes (inference-to-training GPU split, concurrency ceilings from KV cache and staleness); value model or not on 100-turn tasks; data over algorithm.

### 3.5 What is being scored

**[their words]** Mechanism over terminology. Reasoning through an unfamiliar trade-off. **[verified, sibling JD]** "Design and run reward-shaping experiments and algorithmic improvements (e.g., GRPO, DAPO)"; "reason deeply about model behavior, experimental results, and data quality." **[inferred]** Plus correctness of the fundamentals from REINFORCE up (baseline, group baseline, per-token ratio, clip, KL; verifiable rewards; masking; credit assignment), and honesty at the edge.

### 3.6 What an expert does

Someone who has run post-training explains from the gradient up and ties every mechanism to the failure it prevents: "the group baseline replaces the critic; it breaks when all G rewards are equal, which is why dynamic sampling exists." They size things: rollouts per step, where wall-clock goes, what the KV cache does to concurrency. They know what breaks because they have seen it in a log: mismatch, staleness, reward hacking, length blow-up, zero-advantage groups. Handed a new trade-off, they run a fixed routine: objective, constraint, two options, failure mode of each, cheapest experiment that decides it. They say "I don't know that; here is what I would measure" without flinching.

The tell of someone who has only read: correct vocabulary, no equation, no failure mode, no number, and a definition where a mechanism was asked for.

### 3.7 The gap between "read it" and "done it", and the one thing that closes it

**[judgment]** The primer and prep file are correct on paper. The debrief showed the failures were in production under questioning. The single highest-leverage move for this session is to **run a small RL post-training loop yourself before the 29th**: a GRPO-style trainer on a small open model on a verifiable task, an hour or two on a rented GPU, watching reward, KL, completion length, and the fraction of zero-advantage groups, then reading the trainer's advantage and loss-aggregation code. After that, "what does the critic do" and "why prompt_mean" are things you have seen, and you own true first-person sentences. Cost: an evening plus a small GPU bill. The previous plan had reading and reciting; it never had you train anything. **This is the second pigeonhole to undo.**

### 3.8 What loses it

A definition instead of a mechanism. A bluff. Claiming LLM RL you have not run (say "VLAs yes, LLMs no," then reason). Vocabulary without the equation. Not knowing your own résumé lines at mechanism depth: VLM judges, the RLinf integration, the BMO RL environments.

---

## 4. Priority across the three

**[their words]** The first two gate the third. **[judgment]** The practical is the most preparable and the largest block. Algorithms is the highest variance. Post-training is your strongest on paper and the one the hiring decision for this specific role rests on once you are through the gate. So: the gate sessions must be solid; the post-training session must be excellent. Rough split of prep hours: 40% practical, 25% algorithms, 35% post-training. Accepted by Shayan 09-17.

---

## 5. What survives from the existing material, and what changes

**Keep as-is**

- The verbatim session descriptions, and the interviewer and company research (`research/interviewers.md`, `research/mercor-output-2026.md`, `research/candidate-reports.md`).
- The 09-09 screen debrief and `question-bank.md`: the only first-hand sample of their question style.
- `mock-1-brief.md` and its grader key: real Mercor data, real questions, precomputed answers. Still the best practical rehearsal available.
- The algorithms protocol, the pattern sheet, and the six drills (`algorithms-drills.md`, `algorithms-grader-key.md`).
- `post-training-primer.md`: correct. Use it as an answer key, not as reading.
- `evidence.md`: the method rules stand (practice in the test's format; produce first, check second; space it; mocks with a critical observer; two rehearsals under pressure; no crib sheet; sleep).
- `post-train/`: the take-home as submitted. Keep it untouched as the record. Its `tools/score_run.py` pattern (rebuild the missing feedback loop, sweep draws, compare to a baseline) is the template for the practical's toolkit.

**Change**

1. Algorithms: add matching/ranking and graph problems. The current six are all research-infra flavoured (§2.4).
2. Post-training: add "run a small GRPO loop yourself" and "read the trainer's advantage and loss code" before any more reading (§3.7).
3. Practical: decide the toolkit question (§1.8); add fresh-thread presentation Q&A mocks (§6).
4. Method: the fresh-thread mock loop (§6) becomes the main knowledge engine, replacing the tutor-skill sessions. It trains retrieval under questioning, which is exactly what the debrief showed you lacked.
5. The day-by-day schedule in `mercor-onsite-plan.md` §6: rebuilt after this discussion. Superseded, not wrong.
6. **Depth bar and scope (Shayan, 09-17):** expert in agent evaluation, post-training, and RL as fields, plus the CS core; Mercor-shaped topics are priorities, not the boundary. The bar, the field maps, the derivation deck and the prove-it list are in `theory-syllabus.md`. The mock loop roams the whole field and escalates until it runs out, not until you do.

---

## 6. The fresh-thread mock loop, per session

Your friend's method: open a fresh thread, tell it the format, have it play a harsh interviewer, take 2 to 3 questions at a time, answer, debrief, name the gaps, move on; 20 to 30 questions per thread; then a new thread so the question distribution does not narrow; repeat until nothing surprises you.

- **Post-training: exact fit.** Most of the loop goes here. Answer aloud by dictation, not typed. The real thing is spoken.
- **Algorithms: fits with one change.** One problem per round, 30 minutes, the interviewer interrupts and changes a constraint at the halfway point. Six to ten rounds across threads.
- **Practical: the 90-minute block cannot be mocked by questions.** It is rehearsed on real data with a timer (mock 1). The loop fits the two live windows: the kickoff questions, and the presentation Q&A. Paste your slides, results, and code into a fresh thread playing Austin and get grilled.

Paste-ready prompts are in §8. Every mock ends with a written line in `question-bank.md`: the question in the interviewer's words, your status, the gap. A mock without a debrief does not count (`evidence.md`, Roulin et al. 2023).

---

## 7. Questions only you can answer

1. **Answered 09-17.** Take-home in the repo (§0.5); walkthrough questions were generic; James did not walk it on the screen.
2. **GPU access** for a two-hour small GRPO run: Colab Pro, Modal, RunPod, a friend's box, or none?
3. **Toolkit:** public repo plus ask at kickoff (§1.8), or build from scratch on the day?
4. **Which AI coding tool** you will actually use in the room (Cursor or Claude Code), and whether you have used it to build an eval pipeline before.
5. **"Provided models":** email Maggie one line asking whether that means their endpoint or your key, or leave it for kickoff?

---

## 8. Paste-ready interviewer prompts

Each goes into a fresh thread. Replace the bracketed parts. Dictate your answers.

### 8.1 Post-training

```
You are a senior post-training research engineer at Mercor interviewing me for
"Research Engineer, Post Training". You are running the session Mercor describes as:
"Post-training and RL fundamentals: algorithms, agentic RL, systems design, data, and
infra tradeoffs. Emphasis on explaining mechanisms rather than recalling terminology.
A 45-minute conversation, no coding, covering a few of these areas. Interviewers care
how you reason through an unfamiliar tradeoff, not whether you know our vocabulary."

You are demanding and skeptical. You have run large-scale asynchronous RL on
long-horizon agent tasks (vLLM inference, Megatron training, in-flight weight
updates, rubric verifiers running in sandboxes, trajectories from 2k to 128k tokens)
and you probe anything imprecise.

Rules:
1. Ask 2 questions at a time, numbered. Open each topic with a mechanism question,
   then escalate into a trade-off I am unlikely to have seen.
2. Never accept a term or a definition as an answer. If I use a term, ask for the
   mechanism behind it. If I state a number, ask where it comes from.
3. Across the session cover: RL algorithms (REINFORCE, PPO, GRPO, DAPO, DPO);
   agentic and multi-turn RL (loss masking, credit assignment, tool use,
   environment and verifier design); systems (async training, staleness,
   train/inference mismatch, weight sync); data (task quality, verifiers,
   contamination, curriculum, filtering); infra trade-offs (compute split,
   concurrency, precision).
4. After each answer: grade it Strong / Partial / Wrong in one line, state precisely
   what was missing or wrong, then move on. Do not teach unless I type "explain".
5. After 25 questions, give a ranked list of my gaps, each with the exact question
   that exposed it.
6. Use my background below to probe claims: make me explain my own résumé lines at
   mechanism depth.

My background:
[paste cv.md]

Begin.
```

### 8.2 Algorithms

```
You are an applied AI engineer at Mercor running the "Algorithms" interview, which
Mercor describes as: "Problem-solving on real architecture challenges, infrastructure
decisions, and scaling strategies that mirror a challenge you may face at Mercor.
Interactive, discussion-based. Not Leetcode, not system design. True algorithms."

Mercor builds: an expert marketplace (matching millions of people to tasks and
jobs), RL environments and rubric-graded evals run at scale (thousands of sandboxed
rollouts, LLM judges under rate limits, leaderboards), and post-training pipelines
over trajectories from 2k to 128k tokens.

Rules:
1. One problem for the whole 30-minute session, framed as a real Mercor situation
   with an algorithmic core. Rotate across sessions: matching and ranking;
   scheduling and throughput; near-duplicate detection at scale; statistics under a
   budget; graphs and DAGs; fundamentals (sorting, probability) with a twist.
2. State the problem in three sentences. Give no scale or constraints until I ask.
3. Interrupt if I go more than four sentences without a decision. Ask "what does
   that cost?" whenever I propose something.
4. Halfway through, change one constraint and see whether my answer changes.
5. Before the end ask "what breaks at 10x?" and "how would you verify this
   empirically?"
6. At the end score 0 to 2 on each: restated and confirmed; asked for scale; brute
   force with its cost; bottleneck named; two approaches, one chosen with a reason;
   complexity and edge cases; 10x; empirical verification. Then say what the
   strongest answer would have been.

Begin.
```

### 8.3 Practical, presentation Q&A

```
You are a Mercor research engineer who works on APEX benchmark grading and LLM-judge
calibration. I have just finished a 90-minute LLM evaluation practical and I am
presenting for 15 minutes. My slides, results, and code are below.

Ask the questions a skeptical evaluator asks, two at a time: why this metric; what
is the interval and where does it come from; how do you know the grader is right;
show me two failures verbatim; what did you cut and why; what would you do with one
more day; what surprised you. Grade each answer Strong / Partial / Wrong with the
reason. Then walk through my code one function at a time and stop me whenever I
cannot say why it exists.

Slides: [paste]
Results: [paste]
Code: [paste]

Begin.
```

---

## Sources checked today

Gmail: Emily Arevalo 09-15 (thread `1a0a3ff4ea1e29f9`), Kristen O'Donnell 09-10 (`1a0898cae8ce4775`), Aksh Garg 08-21 (`1a0230e31cee4a73`), Litmus invite 08-21. Web: mercor.com "Introducing APEX-Agents 1.1" (09-08); mercor.com 397B SkyRL post (09-01); charlieruan.com; api.ashbyhq.com/posting-api/job-board/mercor (107 postings; "Research Scientist, APEX Benchmarks" and "Research Engineer - Environments, Data and Post-Training" quoted); prachub.com/companies/mercor (19 questions); aol.com syndication of Business Insider 2026-07-27. Repo: the 09-09 screen debrief, `question-bank.md`, the 09-16 research files.
