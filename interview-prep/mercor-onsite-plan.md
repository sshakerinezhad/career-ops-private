# Mercor onsite, Tue 29 Sep 2026: the plan

Research Engineer, Post Training. Tracker #32. Written 2026-09-16, 13 days out. Every fact below was checked against a primary source on 09-16 (Emily Arevalo's email and invite, Kristen O'Donnell's email, the 09-09 screen debrief, Mercor's blog and papers, the SkyRL docs, the public Mercor datasets and repos, Business Insider). Anything not from a primary source is marked [inferred] or [reported], and I say where it came from. Companion files live in `interview-prep/mercor-onsite/`.

## 0. The day

181 Fremont St, 33rd floor, check in at the lobby desk. Arrive 11:30 PT. Government photo ID. Own laptop plus charger. Casual. Lunch provided. NDA signed 09-15. Day-of help: Maggie +1 (818) 699-5444, Emily +1 (323) 363-0240. No rescheduling.

| PT | ET | Session | Who |
|---|---|---|---|
| 11:30–11:45 | 14:30 | Set-up | Maggie Cassidy |
| 11:45–12:00 | 14:45 | Eval practical: kickoff | Austin Bennett |
| 12:00–13:30 | 15:00 | Eval practical: 90 min solo work | you |
| 13:30–13:45 | 16:30 | Eval practical: presentation | Austin Bennett |
| 13:45–14:00 | | break | |
| 14:00–14:30 | 17:00 | Algorithms | Jiwon Lee |
| 14:30–15:00 | | break | |
| 15:00–15:45 | 18:00 | Post-training interview | Charlie Ruan |
| 15:45–16:00 | | wrap-up | Maggie Cassidy |

**Gate rule, their words:** "If the first two interviews are successful, you'll continue on to the next." The practical and the algorithms round decide whether Charlie's round happens. Kristen also wrote "some candidates finish early depending on fit."

**Owed to Emily (her 09-15 email):** earliest start date and any deadlines; NDA status (signed 09-15); travel reimbursement (Brex form in her email; $1,500 cap: flight, one hotel night, ground, meals; keep receipts); three professional references with phone and email, at least one past direct supervisor, not contacted without your permission. Inputs in §7.

## 1. Who they are and what they care about

**The thesis.** Aksh Garg (08-21): the team "1) studying the limits of model capabilities, 2) defining frontier benchmarks to probe and improve them, and 3) post-training on our data to prove model lift"; "high quality environments are the biggest driver of model capabilities"; nine-figure compute; "own problems across the entire stack." Brendan Foody's 2025 line, still on the site: "evals are the new PRD." The JDs: "leading AI data company, building the layer between human expertise and frontier models"; profitable, Series C, $10B; in person five days.

**How they judge work.** Their eval-systems post (06-30): a verifier "returns a score in [0.0, 1.0] and an explanation"; "Verifiers can be gamed: if a verifier rewards a shortcut, the agent will learn the shortcut"; verifiers must be "calibrated against expert judgment." APEX-Agents 1.1 (09-08, Austin Bennett first author): tasks audited three times by domain experts so "a single correct and well-specified answer exists"; hedged multi-answers ("scattergunning") scored zero; the judge validated on 1,407 hand-labelled rubric items, 354 held out. The 397B post (09-01, Charlie Ruan first author): "Algorithm choices mattered less than the data"; drive the non-model error rate to ~0 before training; "if you cannot overfit a handful of tasks, an end-to-end run has no chance"; file-diff grading was much harder to overfit than final-response grading. Every metric they publish carries a task-level bootstrap CI over 10,000 resamples.

**How they hire.** Osvald Nitski, CPO, Business Insider 2026-07-27: "We care a lot about being able to set up good experiments and understanding statistics, having good judgment, and then systems design as well"; "not just, like, regurgitate what comes out of Claude"; one round exists "to find out if the person is familiar with AI tools." Litmus, their take-home vendor, says it grades "the decisions you made and why, how you used your tools, and how clearly you can explain your thinking." [reported, Blind, Aug 2026, page blocked from here] A SWE candidate wrote that in the AI-allowed onsite block the interviewer skipped architecture questions and reviewed the AI-written code line by line, and that the first block had to work end to end, "no stubbing."

**Their live research questions** (Mercor Research Fellowship posting, Ashby, verbatim): "Novel evaluation methodology: contamination resistance, rubric design, human-vs-model grading agreement, cost-adjusted scoring"; "New economic benchmarks — negotiation, management, and other capabilities that carry economic value but resist standard task formats." Your Catan negotiation environment sits inside their own stated interest. Say so once, when it fits.

**Their words:** world, task, prompt, rubric, criterion (binary, Met / Not met), verifier, judge, trajectory, trial, rollout, artifact, snapshot diff, golden response, Pass@1 / Pass@k / Pass^k, mean reward, Mean Criteria@k, task-level bootstrap, dev set vs held-out, harness, non-model error rate, TITO, staleness, logprob mismatch, prompt_mean, DPPO, scattergunning, off-the-shelf tasks.

**What it means for you, in every room:** look at the data before you say anything about it; put a number and an interval on every claim; say what the grader can and cannot see; name what you cut and why; when you used the LLM, say what you decided and what it decided.

## 2. The people

### Austin Bennett, eval practical

- **Verified:** Research Engineering team ("Research @ Mercor" on GitHub and Hugging Face; member of the mercor HF org). Stanford; finished a master's in summer 2026 [reported, LinkedIn snippet]. First-listed author of "Introducing APEX-Agents 1.1" (09-08), second author of APEX-Accounting (arXiv 2607.27189, July), co-author of the accounting launch post (07-31). Not on the January APEX-Agents paper: [inferred] joined mid-2026, and everything he has shipped is grading and analysis of APEX.
- **His work, the parts that matter here:** scattergun-aware judge (DeepSeek-v4-Flash-0731, temperature 0.1, prompt tuned with GEPA), calibrated on 1,407 hand-labelled rubric items from 337 trajectories, held-out 354, false-negative rate 5.3% to 8.0% accepted to catch hedging; "better accuracy than the human average for a panel of three"; trace mining across 26,302 trajectories (which models search, how often); Pass@1, Pass@4, Pass^4 with the gap between the last two read as inconsistency; accounting judge at 97.1% accuracy against a three-expert majority vote (Fleiss κ 0.857 among the experts); Mean Criteria@3; a Simpson's paradox on token budget (more budget raises scores, but within a budget the tasks where the model spends more tokens score lower); a failure taxonomy where "Reasoning failures dominate every profile" and "Not a single annotated failure involves tool use."
- **What he will care about in your 90 minutes** [inferred from the above]: (1) did you validate the grader, not just run it; (2) are your numbers paired, with intervals, and stated as what they are (Pass@1 vs mean reward); (3) did you read trajectories and count; (4) did you notice hedging, format handling, and grader artefacts; (5) is the pipeline actually working end to end and can you defend the code Cursor wrote.
- **Bring:** the BMO deterministic eval pipeline (hundreds of synthesized inputs, the bias finding); the VLM judges at Merlyn; the toolkit you rehearsed on Mercor's own public data (§5A).
- **Ask him:** how they chose the 354 held-out rubric items and whether GEPA-tuned prompts ever overfit the calibration set; what the FN/FP trade-off is set by (they accepted 5.3 to 8.0); how a task gets from expert-authored to "well-specified" (the three audits) and who signs off.

### Jiwon Lee, algorithms

- **Moderate confidence, no first-party artifact:** Applied AI Engineer at Mercor [reported: RocketReach and The Org snippets]; MIT CS + Econ 2021 to 2024 and MEng CS 2024 [reported: LinkedIn headline snippets]; Plaid NYC intern summer 2024 [Plaid blog photo caption, name match only]; then Fundamental Research Labs (the Shortcut spreadsheet agent) and Tzafon (compute and agent-swarm infra) [reported]. No papers, no GitHub, no posts found. Treat her as an applied engineer who builds agent infrastructure, not a theorist.
- **What the round is** [their words plus reports]: "real architecture challenges, infrastructure decisions, and scaling strategies that mirror a challenge you may face at Mercor. Interactive, discussion-based. Not Leetcode, not system design. True algorithms." Third-party descriptions of Mercor's algorithms round (techinterview.org, Jul 2026; Glassdoor snippets): "transform and process a dataset efficiently, then optimize it," follow-ups on "time and space complexity and on why you picked a given data structure," plus off-beat prompts like "the slowest sorting algorithm and its complexity." Mercor screen prompts on PracHub (verified page, attributed to Mercor): ranking under an "unreliable deterministic comparator" with "five-second comparison delays" and reducing calls and wall-clock; a referral-network DAG with reachability and flow centrality; permutation sort versus counting sort versus the comparison lower bound; a probability question with ties. Nobody online has described the 30-minute discussion round itself.
- **What she will care about** [inferred]: you turn a fuzzy infra problem into a precise question in under two minutes; you reason aloud in order (brute force, bottleneck, better approach, complexity, what breaks at 10x); you justify the data structure; you adjust when she changes a constraint.
- **Bring:** the BMO graph agent (30,000-client screen in 3 hours, previously days) as a real "process a dataset efficiently" story; the Catan engine rebuild (hidden-state leak found, native engine built) as a correctness story.
- **Ask her:** what her team ships day to day; where the applied-AI team hands off to the research-engineering team; what broke last time volume grew.

### Charlie Ruan, post-training

- **Verified:** first-year CS PhD at UC Berkeley Sky Computing Lab (Ion Stoica); CMU MS with Tianqi Chen; Cornell BS CS and Operations Research; WebLLM project lead, MLC-LLM and XGrammar core contributor; third-largest SkyRL committer (135 commits to Aug 2026); first author of the 397B post ("Work done at Mercor Research"); sole committer of the public recipe repo; author of the SkyRL docs on step-wise training and agent integration; second author of Jet-RL (arXiv 2601.14243: BF16 training with FP8 rollouts collapses under long-horizon rollouts because of train-inference mismatch); co-author of SkyRL-Agent (async dispatcher, 1.55x over naive async batching). He was the original name on your screen slot before James Moore replaced him.
- **What he will probe** [inferred, each tied to his own artifacts]:
  1. **Off-policy drift.** Where train-inference logprob mismatch comes from (non-batch-invariant kernels, MoE routing differences, different parallelisms, CPU offload plus GDN plus in-flight updates, FP8 rollouts), how you measure it (their threshold: below 0.03), and what each correction does: TIS (token clip 2.0, sequence clip 5.0), geometric sequence masking (0.99 to 1.01), icepop token masking (0.5 to 2.0), router replay R3 for MoE; DPPO masks tokens by a binary TV-divergence approximation, GLM-5 loss truncates the ratio; their ablation put the two within noise but DPPO pushed toward more, shorter turns (21 to 32 turns; 834 to 588 assistant tokens per turn).
  2. **Token accounting in multi-turn agents.** Re-tokenizing the conversation string changes token IDs, so training goes off-policy; TITO fixes it by using `/completions` with exact token IDs and logprobs; step-wise training decomposes a T-turn trajectory into T samples, computes advantages on last steps and broadcasts them (GRPO-equivalent), at O(T²) cost unless prefixes merge (`generator.merge_stepwise_output`); context management (stripped thinking, summarization) is why linear histories break.
  3. **Async systems trade-offs.** Fully async = in-flight weight updates plus partial rollouts; staleness bound (max_staleness_steps + 1) × mini_batch_size × n_samples_per_prompt = 1,024 trajectories in their run; the KV-cache ceiling on concurrency (they ran 550 for the 35B, 300 for the 397B); inference:training GPU split 12:4 and 12:8; stragglers; when in-flight updates are worth it.
  4. **Aggregation and length on 2k to 128k-token trajectories.** prompt_mean over token_mean (+3.9) because long rollouts dominate the gradient under token_mean; DAPO argued the opposite on math; overlong filtering cost 1.5 points and the length penalty was neutral-to-negative; the wrap-up nudge at 20% context left gave +3.0.
  5. **Discipline and data.** Overfit 32 tasks with non-zero reward variance first; harness fixes gave the 35B six points of mean reward before any training; file-diff grading resists overfitting; "algorithm choices mattered less than the data."
- **Bring:** LIBERO-PRO as an ablation story (recipe-induced brittleness, LoRA and frozen priors rejected, effect bounded); the Catan environment as a data-and-verifier story (hidden-state leak, view object, what you would train on, the TITO caveat that API models give text not tokens); the four screen gaps closed (§5C).
- **Ask him:** how often the logprob check catches something now that the vLLM bug is fixed; what the 480 held-out tasks show that the 1,928 training tasks do not; whether step-wise training or TITO is the default for new harnesses and why; what he would run next if compute were free.

### Maggie Cassidy, set-up and wrap-up

Recruiting Operations coordinator. Not technical. Warm, brief, ask about timeline and next steps at wrap-up. Tell her if anything on the day is off (laptop, room, time).

## 3. What each session tests, and what a win looks like

### A. LLM Evaluation and Analysis, 2 h, Austin Bennett

Their description: "design, implement, and analyze LLM evaluation pipelines. You'll set up a lightweight Python environment, perform inference against provided models and datasets, and summarize your insights in a short closing presentation." Results emailed to apex@mercor.com. Any library. Cursor or an LLM allowed. Bring your own API key.

- **Shape** [inferred, three independent signals agree]: apex@mercor.com is the APEX team's address; Austin's entire public output is APEX grading and analysis; a Mercor MLE screen prompt on PracHub reads "Design and implement a lightweight evaluation harness … Read a dataset of evaluation cases, where each case contains an `id`, a `prompt`, and optionally a `reference_answer` … Send each prompt to an … model … Record metadata such as model name, latency, failures, and retry attempts. Compute … exact match … pass rate, average latency, and error rate. Save both per-example results and an aggregate summary report. Expose configuration for model name, timeout, retries, temperature, and concurrency." Expect: prompts with references or rubric criteria, one or two named models over an API, a question of the form "how good is it, where does it fail, is the grading trustworthy, what would you change."
- **Graded on** [their words plus inference]: "set up good experiments and understanding statistics, having good judgment"; a pipeline that works end to end; metrics stated correctly with intervals; the grader validated; failures read and counted; a conclusion-first presentation; and you can explain every line of code, including Cursor's.
- **A win:** one headline they did not expect and can check (a third of "failures" are format handling in the grader; the two models tie on the verifiable subset; criterion type X has near-zero agreement with the reference labels; the model hedges on N% of items and the judge lets it through), a failure table with counts and two verbatim examples, a caveats slide, a next-steps slide, a clean repo plus results in their inbox before the clock.
- **Where you are:** you have done this for real (BMO, Merlyn), never in 90 minutes on a stranger's data with the clock running. Three timed rehearsals on Mercor's own public data fix that.
- **What loses it:** 30 minutes lost to setup; a pipeline that runs but nobody read the outputs; narrating what you did instead of what you found; a metric without an interval; a claim the logs contradict; code you cannot explain.

### B. Algorithms, 30 min, Jiwon Lee

- **Graded on** [inferred]: precise restatement, reasoning aloud to a correct and efficient answer, complexity and data-structure justification, behaviour when the constraint changes.
- **Likely shape** [inferred from their infra and the reported prompts]: a Mercor-shaped problem with an algorithmic core: ranking with an expensive or noisy comparator; scheduling or packing rollouts and judge calls under rate limits; dedup of near-identical tasks or trajectories; sampling and streaming statistics over millions of trajectories; DAG reasoning over task dependencies; a probability or complexity question with a twist.
- **A win:** the six-move protocol (§5B) every time; the bottleneck named inside two minutes; brute force, then the real answer, then complexity, then what breaks at 10x; a data structure you can defend.
- **Where you are:** unknown, no data. Highest variance of the three, so it gets drills, not reading.

### C. Post-training, 45 min, Charlie Ruan

- **Graded on (their words):** "explaining mechanisms rather than recalling terminology"; "how you reason through an unfamiliar trade-off."
- **Carried in from the 09-09 screen:** 🔴 environment design for an HLE-style target stayed abstract; 🟡 "the critic gives the reward" (it estimates value; the verifier or reward model gives the reward); 🟡 loss mask blended with the reward function; you told James you do not know the env APIs; numbers never said.
- **A win:** derive the mechanism on the whiteboard from REINFORCE up (baseline, group baseline, per-token ratio, clip, KL, why async breaks the ratio and how masking or truncation fixes it), tie each step to something in his post or docs, then take an unfamiliar trade-off with a fixed routine: objective, constraint, two options, failure mode of each, the cheapest experiment that decides it. Your evidence shows up as mechanism, not as résumé lines.
- **Where you are:** strongest on paper (primer and prep file exist and are correct, one number label fixed today). The gap is production under questioning. This track is retrieval and speaking, not reading.

## 4. The method

Seven rules. Each traces to a cited finding in `mercor-onsite/evidence.md` (meta-analyses and RCTs where they exist; sport-psychology extrapolations and small studies are labelled there).

1. **Practice in the exact format of the test.** The practical is rehearsed as a 90-minute timed block plus a 15-minute spoken presentation, three times, on Mercor's own public data. Algorithms are rehearsed as 30-minute spoken think-alouds with an interviewer. Post-training is rehearsed as spoken explanation to a person and a whiteboard, never as silent re-reading.
2. **Produce first, check second.** Re-reading the primer feels productive and does not last. You answer from memory, then check against the key. The tutor skill is built on exactly this (hidden key, one question per turn, hints before answers, mixed worksheet, re-teach the misses).
3. **Space it.** Each concept gets hit on roughly day 1, 3, 7, and 12. A miss gets a fresh item a few turns later.
4. **Mocks with a critical observer, spaced.** Three practical rehearsals, two post-training mocks with a person, two algorithms mocks with a person, six shorter algorithm drills with the LLM. Every mock ends with a written debrief in the question bank.
5. **Two rehearsals under real pressure.** Pressure exposure, not extra volume, is what stopped choking in the studies: practical rehearsal 2 (Wed 23) runs with the camera on and a stated consequence, and post-training mock 2 (Sat 26) has Salman scoring you against the two rubric lines out loud.
6. **No sheet to lean on.** Crib cards did not raise scores and bred dependency. The one-page card is a retrieval cue list you write from memory on Thu 24, correct once, and never practise with open. Read it once on Mon 28 and once on the morning.
7. **Sleep is a study variable.** Bed by 23:00 every night; retrieval sessions before bed; never trade sleep for prep. Nothing new after Sunday 27.

**How the LLM is used, and how it is not**

- **Tutor skill** (installed in your Claude): Track C knowledge. Attach `interview-prep/post-training-primer.md`, say "teach me this". "quiz me" skips teaching on what you already hold. "why" goes a layer deeper. It saves a progress card; open the next session with it so review is spaced.
- **`/career-ops interview/practice`**: spoken mocks when no human is free. Persona Charlie Ruan for post-training, Jiwon Lee for algorithms. Answer aloud with voice dictation. It grades and updates the question bank.
- **Cursor or Claude Code** in the practical rehearsals, exactly as on the day. Rule from the Blind report: you read every line it writes before you run it, and you can say why each function exists.
- **Never** "explain X to me" cold before you have tried to produce X. Unguarded answers raise practice scores and lower test scores (Bastani et al., PNAS 2025, in the tutor skill's evidence file). The LLM grades, hints, and poses; it does not write your explanations.
- **This session (me):** builds and grades the mock practicals, grades recorded presentations and drills against rubrics, keeps the question bank and this plan, drafts the Emily reply when you give the inputs.

## 5. Tracks

### Track A: the eval practical

**A1. Toolkit** (one repo, built Thu to Sat, rehearsed until it is muscle memory; also a work sample to link). Modelled on the PracHub spec above and Mercor's own `apex-evals` harness, which you should read once (public: `github.com/Mercor-Intelligence/apex-evals`, judge prompt in `apex-evals-v1-extended/prompt/grading_prompt.txt`, per-criterion result `{"result": 0|1, "reason": ...}`, default judge temperature 0.01, retries with backoff, failed criteria retried).
- `run_inference.py`: async OpenAI-compatible client (OpenAI, Anthropic, OpenRouter, Gemini via LiteLLM or raw), concurrency limit, timeout, retries with backoff, disk cache keyed by (model, prompt, params, sample index), append-only `raw.jsonl`, per-call latency and error recorded, cost and time estimate printed before the run.
- `grade.py`: exact match with normalization and numeric tolerance; a per-criterion rubric judge in Mercor's shape (criterion + response in, `{result, reason}` out, every raw judge output saved); a scattergun check (more than one committed final answer scores 0).
- `metrics.py`: Pass@1 as a mean with task-level bootstrap CI; unbiased Pass@k from n samples; Pass^k; mean criteria met; paired comparison of two models on the same items with a bootstrap on the differences; judge vs reference labels: accuracy, precision, recall on Met, Cohen's kappa.
- `failures.py`: stratified failure sample to markdown for reading; taxonomy file with counts (model error by type, grader error, harness or format error, ambiguous item); an LLM classifier over failures with a hand-labelled validation slice and its accuracy reported.
- `report.md` template: headline, numbers with CIs, taxonomy table with two examples, what is wrong with this eval, next steps, what was cut.
- README with exact commands. Clean clone to first result under 5 minutes, timed.
- Keys: OpenAI, Anthropic, OpenRouter, Google, funded, tested from the laptop you will bring, in a `.env` you can paste. Cursor account logged in.

**A2. The 90-minute run-sheet** (printed): 0–10 read the brief twice, write the one question you will answer and the one metric, write the cut list · 10–25 pipeline on a 20-item smoke set, eyeball raw outputs, launch the full run in the background · 25–60 read failures while it runs, build the taxonomy, count · 60–75 metrics, one table, one plot at most · 75–85 report and slides, email the repo link and results · 85–90 buffer. Behind at 60: cut analysis, never the presentation.

**A3. The presentation** (8 minutes talking, 7 for questions): 1 what I found (one sentence) · 2 numbers with CIs · 3 failure taxonomy with counts and two examples · 4 what is wrong with this eval (grader, data, my shortcuts) · 5 next steps and what I cut. Conclusion first, every time.

**A4. Rehearsals on Mercor's own public data** (briefs and grader keys in `mercor-onsite/`; do not open a grader key before its rehearsal):
- **Mock 1, Sat 19:** `mercor/ApexAgentsRecipe-TBench2_1-EvalTraces` (ungated; 4 sets × 267 trajectories, before and after RL, with scores, token stats, full messages). Did RL help and how sure are you; what changed; taxonomy of the trained 397B's failures with an LLM classifier validated on 20 hand labels; is the grading trustworthy (errored rollouts, null scores).
- **Mock 2, Wed 23:** `mercor/APEX-v1-extended` dev set (ungated; 100 tasks with rubric JSON). Run two models on 30 tasks, grade per criterion with the Mercor judge prompt, Mean Score with CIs, then validate the judge against 40 of your own labels and find the criterion types where it fails; check for scattergunning.
- **Mock 3, Sat 26:** `mercor/apex-accounting` dev set (ungated; 10 tasks, 8.9 binary criteria each, gold outputs, context files). Two judges, agreement, Mean Criteria@3, failure taxonomy against the paper's categories, plus one planted grader bug you have to find.
- Also: log in to Hugging Face and accept the gate on `mercor/apex-agents-v1.1` and `mercor/apex-agents` (auto-approval) so the real task format, `tests/grade.py` and `grading_config.json`, is on your disk to read.

### Track B: algorithms

**B1. The protocol, aloud, every time:** (1) restate in one sentence and confirm; (2) ask for scale and constraints, and what is being optimized; (3) brute force and its cost; (4) name the bottleneck, propose two better approaches, pick one and say why; (5) complexity, correctness edge cases, what breaks at 10x; (6) how you would verify it empirically.

**B2. Pattern sheet** (one page, `mercor-onsite/algorithms-drills.md`): priority queues and scheduling; first-fit-decreasing bin packing; topological sort over task DAGs; reservoir and stratified sampling; hashing, MinHash and LSH for near-duplicates; Bloom filters and count-min sketch; consistent hashing; token-bucket rate limiting; Little's law; binary search on the answer; union-find; bandit allocation; the unbiased Pass@k estimator; bootstrap; importance sampling; sorting lower bounds and when counting sort wins; tournament and noisy-comparison ranking.

**B3. Six drills** (30 min each, spoken, graded; problems in the same file, grader key separate): ranking under a slow unreliable comparator; packing 2k to 128k-token trajectories into fixed token micro-batches; dynamic sampling under a rollout budget; near-duplicate task detection at a million tasks; scheduling sandboxed rollouts with stragglers and a staleness bound; streaming Pass@k with confidence over a live run.

### Track C: post-training

**C1. Tutor sessions on the primer** (four): §5–8 (REINFORCE, PPO, DPO, GRPO) → §9–12 (DAPO, aggregation, async corrections, RLVR) → §13–15 plus the two screen slips (critic vs reward; loss mask vs reward) → systems (the 397B loop as a diagram: inference engines, trainer, weight sync, sandboxes, MCP tools, verifier in-sandbox; where time goes; what breaks; the three health checks; TITO and step-wise; the off-policy corrections list in §2).
**C2. The four screen gaps, closed:**
- Environment-design walkthrough, six steps, two minutes, three targets (HLE, an APEX-style banking task, a Catan negotiation): assumption → prompt set → verifier → harness → de-risk → failure modes. Model answer is in the prep file's Round 1 debrief, Q3.
- "The critic estimates value; the verifier gives reward; GRPO replaces the critic with the group mean." Say the advantage formula.
- "Loss mask decides which tokens get gradient; the reward decides what gets scored. Two knobs." One sentence each.
- SkyRL env interface, verified 09-16: `BaseTextEnv.init(prompt) -> (prompt, {})`, `step(action: str) -> BaseTextEnvStepOutput` with `observations`, `reward`, `done`, `metadata`; `register(id=..., entry_point=...)` inside the entrypoint. Write and run a toy env (Sun 20).
**C3. Ten trade-off drills** (spoken, two minutes each, with the routine): sync vs fully async; value model or not for 100-turn tasks; token_mean vs prompt_mean; keep or drop all-fail prompts; hard zero vs soft penalty for overlong; more rollouts per prompt vs more prompts; LLM judge vs programmatic verifier when both are possible; SFT on a stronger model's trajectories vs RL on your own; where a 2x compute budget goes (rollouts or training); grading a task whose artifact is a document.
**C4. Your evidence, told as mechanism:** LIBERO-PRO; VLM judges; BMO pipeline; Catan (hidden-state leak, view object, what you would train on and how, TITO caveat, and the fellowship's "negotiation" line).
**C5. Mocks:** Toronto friend (week of 21), Salman (Sat 26), practice mode between.
**C6. Numbers:** §9, cover and recite, until 100%.

## 6. Day by day

Fixed: lectures (Thu EI 18:00–21:00, Mon Positive Psych 17:00–20:00, Tue Imitation Learning 15:00–17:00 and Leadership 18:00–21:00, Wed RL 19:00–21:00 online), Strahd (Wed 19:00–22:00), Akira (Sun 20, 12:30, Revue), Readers of Books (Sun 20 at midnight ET; Sat 26 12:30 PT). Everything else on the calendar is treated as skipped (Aemma, Robotics Jam, Serobro, BMO soccer, DnD Sat 19, Walid). Work is remote and flexible: weekdays get a 90-minute block before work, a 30-minute lunch block, and one block after the lecture. Weekends get 5 to 6 hours. About 42 hours total. Bed by 23:00 every night.

**A/B/C** are the tracks in §5. "Done when" is the exit test; if it is not met, the block is not done.

### Wed 16, tonight before 19:00 · 1.5 h
| When | Do | Done when |
|---|---|---|
| +15 | Read this plan once. Answer §7 in chat, even partially. | Sent. |
| +30 | Write the Litmus take-home from memory into `interview-prep/mercor-litmus-takehome.md`: problem, data, what you built, three decisions, what you skipped, what was weak. | File exists. Only first-hand sample of their task style. |
| +30 | Keys and tools: OpenAI, Anthropic, OpenRouter, Google keys with credit; one test call each from the laptop you will bring; Cursor account logged in; `uv` or a clean venv works. | Four successful calls. |
| +5 | Message the Toronto mock friend (Mon 21 or Tue 22, 21:15 ET, 60 min) and Salman (Sat 26 morning and mid-afternoon PT). | Sent. |

### Thu 17 (EI 18:00–21:00) · 3.25 h
| When | Do | Done when |
|---|---|---|
| 07:30–09:00 | **C1 tutor session 1**: §5–8. "quiz me" on what you already hold. | Progress card saved; GRPO advantage and clipped objective written from memory. |
| 12:30–13:00 | **B2 pattern sheet**, first read; say when each applies and its cost. | 10 patterns cold. |
| 21:15–22:30 | **A1 build 1**: `run_inference.py` against a real key on 20 prompts. | 20 cached results; a second run costs $0 and returns instantly. |

### Fri 18 (skip Robotics Jam and soccer) · 5 h
| When | Do | Done when |
|---|---|---|
| 07:30–09:00 | **C1 tutor session 2**: §9–12; opens with the card's review. | You can say why prompt_mean beat token_mean for Mercor and name DAPO's four fixes. |
| 12:00–13:30 | **A1 build 2**: `grade.py` (exact match, per-criterion judge in Mercor's shape, scattergun check) and `metrics.py`. Read `apex-evals` grading code first, 15 min. | Unit tests pass on a toy set with known answers. |
| 17:30–19:30 | **A1 build 3**: `failures.py`, `report.md` template, README, clean-clone test. | Clean clone to first result under 5 minutes, timed. |
| 20:00–20:30 | **B3 drill 1** (practice mode, persona Jiwon Lee): the slow-comparator problem, aloud, timed. | Transcript and feedback in the question bank. |

### Sat 19 (skip Aemma; DnD optional) · 6 h
| When | Do | Done when |
|---|---|---|
| 09:30–10:00 | **A2 + A3**: run-sheet and 5-slide template with me. | Printed. |
| 10:00–12:15 | **PRACTICAL REHEARSAL 1**, mock 1 brief: 15 min brief, 90 timed, 15 presentation recorded. Cursor allowed. | Repo and results emailed to yourself before the clock; recording exists. |
| 12:15–13:00 | Debrief with me against the grader key: minutes lost where, toolkit fixes, run-sheet edits. | Fix list written. |
| 14:00–15:30 | **C2 environment-design walkthrough**: skeleton (20 min), then aloud 2 min each, recorded: HLE, APEX banking, Catan. Graded against the Q3 model answer. | Three clean recordings under 2:15. |
| 16:00–17:00 | **B3 drills 2 and 3** (trajectory packing; dynamic sampling). | Graded. |
| 17:00–17:30 | **C6 numbers**, cover and recite, pass 1. | Score written. |

### Sun 20 (Akira 12:30; Readers of Books midnight; skip Serobro) · 5.5 h
| When | Do | Done when |
|---|---|---|
| 08:30–10:00 | **C1 tutor session 3**: §13–15 and the two screen slips; review of sessions 1–2. | Both slips right first try. |
| 10:00–11:30 | **C2 SkyRL toy env** against `BaseTextEnv`; register; run one episode. If the install fights past 45 min, unit-test the class without the trainer. | Episode runs, or class passes its test. |
| 15:30–17:00 | **A1 fixes** from rehearsal 1; clean-clone test again. | Under 5 minutes again. |
| 17:00–18:00 | **C3 trade-off drills 1–5**, spoken, graded. | Five recordings; routine present in each. |
| 20:00–20:45 | **C worksheet 1** (tutor: "worksheet"). Re-teach the misses. | Score and shaky list on the card. |

### Mon 21 (Positive Psych 17:00–20:00; skip Robotics Jam, Aemma) · 3 h
| When | Do | Done when |
|---|---|---|
| 07:30–09:00 | **B3 drills 4 and 5** (near-dup detection; rollout scheduling) + protocol from memory. | Graded; protocol said without the sheet. |
| 12:30–13:00 | **C6 numbers pass 2** + 5 spaced items from worksheet 1's misses. | 5/5 or re-teach. |
| 20:15–21:15 | **MOCK 1, post-training**, Toronto friend (45 + 15), question bank plus C3 trade-offs. Fallback: practice mode, persona Charlie Ruan. | Debrief in the question bank. |

### Tue 22 (Imitation Learning 15:00–17:00; Leadership 18:00–21:00) · 3 h
| When | Do | Done when |
|---|---|---|
| 07:30–09:00 | **C1 tutor session 4**: systems (the loop diagram, TITO, step-wise, the corrections list, the three health checks). | You can draw the loop and place the logprob check, the non-model-error sweep, and the overfit run on it. |
| 12:30–13:15 | **C4 story cards**, 5 lines each: LIBERO-PRO, VLM judges, BMO pipeline, Catan. | Written. |
| 21:15–22:00 | **C3 trade-off drills 6–10.** | Graded. |

### Wed 23 (RL 19:00–21:00 and Strahd; evening gone) · 2.75 h
| When | Do | Done when |
|---|---|---|
| 07:30–09:45 | **PRACTICAL REHEARSAL 2**, mock 2 brief, full format, camera on for the whole 90 minutes, presentation recorded; stated consequence: the recording gets graded by me line by line. | Emailed before the clock; recording exists. |
| 12:30–13:00 | Debrief with me; fix list. | Written. |

### Thu 24 (EI 18:00–21:00; skip Aemma) · 3 h
| When | Do | Done when |
|---|---|---|
| 07:30–09:00 | **B3 drill 6** (streaming Pass@k) + a fresh 30-min mock, persona Jiwon Lee. | Graded. |
| 12:30–13:00 | **C worksheet 2** (short, spaced) + numbers pass 3. | Score written. |
| 21:15–22:15 | **A finalize**: fixes from rehearsal 2; write the one-page card from memory (mechanisms, numbers, story cues), then correct it once against the sources; print run-sheet, pattern sheet, card; pack list; charge everything. | Printed and packed. |

### Fri 25 (AC 743 at 13:05 ET; leave home 10:00) · 3.5 h
| When | Do | Done when |
|---|---|---|
| 07:30–09:00 | **C2 last reps**: env-design on the three targets aloud; the two one-liners; numbers. | Clean. |
| In flight | **C worksheet 3** on paper from the key; read the four story cards; B pattern self-quiz. Then rest. | Done or asleep. |
| Evening, Salman | Nothing. Get outside in the late afternoon light; no bright light before 07:00 PT the next two mornings; bed by 23:00 PT. | |

### Sat 26, SF (Readers of Books 12:30 PT) · 4.5 h
| When | Do | Done when |
|---|---|---|
| 09:00–11:15 | **PRACTICAL REHEARSAL 3**, mock 3 brief; present to Salman. | Emailed; Salman's three notes written. |
| 11:15–11:45 | Debrief. | Written. |
| 14:30–15:30 | **MOCK 2, post-training**, Salman as Charlie (45 + 15), Salman scoring each answer aloud on the two rubric lines: mechanism explained, trade-off reasoned. | Debrief in the question bank. |
| 16:00–16:30 | **Algorithms mock** with Salman, one problem. | Notes written. |

### Sun 27, SF · 3 h, then stop
| When | Do | Done when |
|---|---|---|
| 09:00–10:00 | **C**: env-design ×3, trade-offs ×4 aloud; numbers to 100%. | 100%. |
| 10:30–11:15 | **B**: protocol aloud, pattern self-quiz, one drill. | Clean. |
| 13:00–14:00 | **A**: presentation dry run twice on rehearsal 3 (8 min each); email flow test to yourself; clean-clone test; keys; Cursor; battery. | All green. Close the laptop. |

### Mon 28, SF (hotel near 181 Fremont) · 20 min
Check in. 10:00 read the one-page card once. Walk to 181 Fremont, find the lobby desk. Pack: laptop, charger, ID, printed sheets, water, snacks. Light exercise. No study. Bed by 22:30 PT.

### Tue 29 · §8

## 7. Decisions and inputs I need from you

1. The Litmus take-home, written down (§6, tonight). Also: does Emily's "provided models" mean their key or yours? If unclear, email Maggie a one-line question on Mon 21.
2. Who is the Toronto mock friend and what do they know (RL, systems, evals)? Same for Salman. It sizes what each mock covers.
3. Laptop: OS, Python setup you trust, whether you have used Cursor or Claude Code for an eval pipeline before.
4. Start date for Emily, and the three references (one past direct supervisor). I draft the reply once you decide.
5. Emily's attachment (`Mercor_Benefits_2026.pdf`, values, mission, FAQs): paste the values section into chat; I cannot download attachments through the mail tool.
6. Wednesday: does the RL lecture get recorded, or does Strahd win? Only changes whether Wed 23 evening is fully gone.
7. Hugging Face login: accept the gate on `mercor/apex-agents-v1.1` and `mercor/apex-agents` (auto-approval) and run `hf download mercor/apex-agents-v1.1 --repo-type dataset --local-dir apex11` so the real task format is on your disk.

## 8. Sep 29 run sheet

- **08:00 PT** wake. Breakfast. Usual caffeine, not more. Read the one-page card once (10 min). Nothing else. A brisk 15 to 20 minute walk that ends by 11:00.
- **10:45** leave the hotel. Arrive 11:15, lobby desk, 33rd floor by 11:25.
- **11:30 set-up (Maggie):** plug in, connect Wi-Fi, open Cursor, open the terminal in your toolkit repo, paste keys into `.env`, run the smoke test. Ask where the apex@mercor.com submission should include (repo link, zip, slides).
- **11:45 kickoff (Austin):** write the brief down as he says it. Ask three things: what question they most want answered; which metric they report on this data (Pass@1, mean criteria); whether the judge prompt is given or yours. Then confirm the deliverable format.
- **12:00–13:30:** the run-sheet, minute by minute. Email at 13:20 at the latest.
- **13:30 presentation:** conclusion first. 8 minutes. Then his questions: answer with the log line, not the memory.
- **13:45 break:** eat, water, walk to the window. No screens.
- **14:00 algorithms (Jiwon):** the protocol. Whiteboard if there is one. Ask for scale before you design.
- **14:30 break:** the story cards once. Water.
- **15:00 post-training (Charlie):** the twelve-forty-five anchors from the prep file. Mechanism first, name second. "I don't know that; here's what I'd check" when true. Ask your two questions at 15:35 if he has not offered.
- **15:45 wrap-up (Maggie):** thank her, ask timeline and next steps, ask whether anything else is needed from you.
- **After:** write every question in their words into `interview-prep/sessions/`, then run `/career-ops interview/debrief`.

## 9. Numbers to have cold

| Cue | Number |
|---|---|
| 397B run | Pass@1 16.11 → 27.29 on 480 held-out APEX-Agents tasks; 1,928 training tasks |
| 35B harness fixes, zero training | mean reward 22.74 → 28.69 (not Pass@1; the 35B's Pass@1 went 13.96 → 22.71 after RL) |
| Post-training total lift | 10 to 12 points, both models |
| Best single knob | prompt_mean over token_mean, +3.9; nudge +3.0; OLF cost 1.5; DPPO vs GLM-5 loss within noise |
| Health check | trainer vs inference logprob difference below 0.03 |
| Overfit subset | 32 tasks, non-zero reward variance, batch 32, 8 samples per prompt, synchronous |
| Concurrency | 550 (35B), 300 (397B); staleness bound 1,024 trajectories; GPU split 12:4 and 12:8 |
| Terminal-Bench 2.1, k=3 | 397B 50.6 → 55.4; 35B 44.6 → 50.9; paired gains +4.9 and +6.4 points, both CIs exclude 0 |
| APEX-Agents 1.1 | 240 tasks, 80 per domain, 31 worlds, rubrics 1 to 11 criteria (mean 3.98); judge calibrated on 1,407 items, 354 held out; FN 5.3 → 8.0% |
| APEX-Accounting | 160 held-out tasks; 13.7 criteria per task; judge 97.1% accuracy; Mean Criteria@3 |
| Your own | $200B+ AUM · hundreds of inputs · 30,000 clients in 3 hours · 8th of BEHAVIOR-1K, 22 of 50 trained, 10,000+ demos · 60% masked → up to +48% · 3x chunking · 96 → 21 → 42 (LoRA 15–21, video prior 42 → 35, too conservative 26) · batch 64, LR 1e-5 |

## Sources

Emily Arevalo email and invite 09-15; Kristen O'Donnell email 09-10; Aksh Garg email 08-21; `interview-prep/mercor-research-engineer-post-training.md` (Round 1 debrief); Mercor Ashby board API (JDs, fellowship posting); mercor.com posts of 06-30, 09-01, 09-08; arXiv 2607.27189; docs.skyrl.ai (new_env, step-wise-training, off_policy_correction, dapo); huggingface.co/mercor (dataset cards and files); github.com/Mercor-Intelligence (apex-evals, archipelago); Business Insider 2026-07-27 via AOL; PracHub (Mercor MLE screen prompt); techinterview.org Mercor guide (secondhand); Blind post of 2026-08-26 (page blocked; quoted via search index).
