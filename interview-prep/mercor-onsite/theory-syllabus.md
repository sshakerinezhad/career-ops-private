# Theory depth for the algorithms and post-training rounds: the bar, the syllabus, the drills

Written 2026-09-17 on Shayan's directive: "for algorithms and post-training I go deep enough into the theory. I have to be so good at it I should be interviewing them." This file defines what that means so the plan cannot water it down. The plan schedules it; this file is the content.

## The bar, in one sentence

For every topic below you can, without notes: state the mechanism in plain words, write the equation and derive the step that matters, say what breaks and when, name the experiment that would show it, and quote the number or regime from the primary source. Anything short of all five on a topic is a gap, and the mock loop keeps hitting it until it is not.

Levels used below: **L1** explain in words · **L2** write and derive from memory · **L3** failure mode and the experiment that exposes it · **L4** the number or regime from a primary source. "Interviewing them" means L2 to L4 on every row. Rows marked (verify) carry a citation I did not re-open today; the next agent verifies the identifier before it goes into a drill key.

## Part 0. Scope: three fields, not one guess (Shayan, 09-17)

"Don't pigeonhole us into one guess of what the topics will be. We must be an expert, ultimately, in agent evaluations, post-training, and RL." That is the boundary. Parts 1 and 2 below are the Mercor-shaped **priorities inside** that boundary, drawn from their emails, their posts, Charlie's own work, and the take-home. They are where to expect emphasis. They are not the syllabus. An interviewer who steps outside them must still find an expert. The plan schedules the priorities first and the rest of each field second, and the mock loop is told to roam the whole field, not just the priorities.

Plus one area that is not a field: the **CS core** under their infrastructure (Part 2), because the algorithms round exists and is half the gate.

The three field maps. Same levels (L1 to L4) apply. Rows already covered in Parts 1 and 2 are named once here and not repeated.

### Field 1. Reinforcement learning

- **MDP foundations.** States, actions, rewards, discounting; Bellman expectation and optimality equations; value iteration and policy iteration; contraction argument for convergence; the policy gradient theorem in its state-distribution form (why the on-policy state distribution appears and why that makes off-policy hard).
- **Value methods.** Q-learning vs SARSA (off- vs on-policy targets); function approximation and the deadly triad (bootstrapping + off-policy + approximation); DQN's two fixes (replay, target network) in one sentence each.
- **Policy methods beyond PPO.** Natural gradient and TRPO (KL-constrained step, Fisher metric) as the ancestor of the PPO clip; max-entropy RL (SAC) and why entropy bonuses exist; deterministic policy gradients only by name.
- **Exploration.** ε-greedy, UCB, Thompson, entropy bonuses, intrinsic rewards; entropy collapse in LLM RL as the same problem; DAPO's clip-higher as an exploration fix.
- **Credit assignment.** Eligibility traces and λ; GAE as the LLM-era form; sparse terminal rewards over long horizons and what they cost in samples; potential-based shaping (Part 1 C).
- **Partial observability.** POMDPs, belief states, why an agent's context window is its belief state, why context management changes the MDP.
- **Imitation and offline RL.** Behaviour cloning as SFT; compounding error and DAgger's argument (O(T²) → O(T)); GAIL by name; offline RL and conservatism (CQL, IQL by name), why learning from logged trajectories is different from on-policy RL. This is your Catan pipeline and your VLA work; know it as theory too.
- **Reward learning.** Reward models from preferences (Bradley-Terry), inverse RL by name, preference-based RL, reward-model overoptimization scaling (Gao et al. 2022: proxy reward keeps rising while gold reward peaks and falls).
- **Multi-agent.** Self-play, non-stationarity, opponent pools and why you freeze copies, Nash and fictitious play by name, negotiation as a multi-agent RL problem (your Catan environment; Mercor's fellowship names negotiation explicitly).
- **Model-based RL and search.** Dyna, MPC, MCTS by name; test-time search vs training-time RL as two ways to spend compute.
- **Robotics RL,** your own ground: VLA fine-tuning, flow-matching policies, sim-to-real, RLinf. Be able to relate it to LLM RL in both directions.

### Field 2. Post-training

- **The whole pipeline.** Pretraining → continued or mid-training → SFT/instruction tuning → preference optimization → RL with verifiable rewards and reasoning RL → agentic RL → safety post-training → evaluation-driven iteration. Know what each stage takes as input, produces, and typically breaks.
- **Preference optimization family.** RLHF with PPO; DPO and its relatives (IPO, KTO, ORPO, SimPO by name and one-line difference); online and iterative DPO; RLAIF and constitutional AI by name; what each assumes about data.
- **Reasoning RL.** The R1-Zero recipe (RL from base with rule rewards), cold-start SFT then RL, distillation of reasoning traces into smaller models; the "does RL expand or sharpen" debate (pass@k comparisons of base vs RL-trained models; Yue et al. 2025, verify) and what it implies for data choice.
- **Reward models and judges.** Bradley-Terry training, ensembles, process reward models, generative verifiers, LLM-as-judge; overoptimization; length bias; sycophancy; where a rubric reward sits between a checker and a reward model.
- **Data.** Synthetic data generation, self-instruct, rejection sampling, filtering and dedup, decontamination, mixture weighting, curriculum, difficulty estimation; data scaling behaviour (Mercor's near-linear trendline); when to buy data vs generate it.
- **Known phenomena.** Length bias; diversity loss and mode collapse; entropy collapse; forgetting and regressions on general benchmarks (why HLE/GPQA are checked after every Mercor run); KL vs reward trade-off; reward hacking (Part 1 C); train/inference mismatch (Part 1 E).
- **Parameter-efficient and full fine-tuning.** LoRA, when it is enough and when it is not (your LIBERO-PRO evidence); mixed-precision training; FP8 and its failure on long rollouts.
- **Infrastructure landscape.** Trainers (SkyRL, verl, OpenRLHF, TRL, NeMo-RL, slime by name) and what distinguishes them; inference engines (vLLM, SGLang); weight sync; async designs; sandboxes for tool use (Modal, Harbor); what a step costs in wall-clock and where.
- **Test-time compute.** Longer reasoning, best-of-n, self-consistency, search; cost-adjusted comparisons (Mercor's Simpson's paradox on token budget).
- **Evaluation of post-training.** Held-out benchmarks, seeds and variance, contamination, generalization to different harnesses (Mercor's Archipelago → OpenCode transfer).

### Field 3. Agent evaluation

- **Benchmark design.** Task specification and verifiability ("a single correct and well-specified answer exists"); expert authoring and audits; rubric design (self-contained, one fact per criterion, outcome-based, tolerances); difficulty calibration and saturation; diversity and coverage; held-out splits at the world level; versioning; contamination resistance (novel documents, web search off); what a small sample can and cannot support.
- **Environments.** Worlds, apps, tools, seeds; sandboxing and determinism; reproducibility; MCP tools; the three parts (software, tasks, verifiers); why environments are the product.
- **Grading.** Programmatic verifiers; state-diff and artifact grading vs narration; unit-test grading (fail-to-pass, pass-to-pass); LLM judges: prompt design, temperature, calibration against human labels, position and verbosity bias, self-preference and why the judge should not see the trajectory, auxiliary judges for artifact selection, ensembles; partial credit and weighting; universal penalties and negative criteria; hedging and scattergunning; judge validation protocol (labelled slice, held-out, precision/recall on Met, κ).
- **Metrics.** Pass@1, Pass@k, Pass^k, mean criteria met, Mean Criteria@k; cost-adjusted and budget-constrained scoring; latency, tokens, steps; task-level bootstrap; paired comparisons; power (how many tasks to detect a 3-point difference); variance across runs; leaderboard statistics and their conflicts with papers.
- **Failure analysis.** Taxonomies (Mercor's L1/L2 for accounting; APEX-SWE's four; outcome classes pass/timeout/zero/partial); trace mining at scale with an LLM classifier validated on hand labels; tool-use vs reasoning failures; harness vs model errors (non-model error rate); timeouts and step limits as accounting problems.
- **Harness engineering.** Loop agents, tool-output truncation, context management, nudges, retries and timeouts, concurrency, cost caps; how harness choices move scores by points (Mercor +6; Terminal-Bench original vs extended gaps); result integrity contracts (scored / inconclusive / infrastructure_error).
- **The benchmark landscape and how each grades.** SWE-bench Verified, Terminal-Bench, τ-bench (Victor Barres, on Mercor's team), GDPval, HLE, GPQA, BrowseComp, WebArena and OSWorld, GAIA, BFCL, the APEX family. For each: what it measures, how it grades, its known weaknesses.
- **Evals as training signal.** Evals as PRD, evals as reward, the hill-climbing risk, train/eval separation, "you want your graders to disagree some amount" (Foody), and what production failures feed back into an eval suite.

**Coverage rule for the plan:** every mock thread draws at least one question from outside Parts 1 and 2, from these maps. The "nothing surprises me" test in Part 3 is judged against these maps, not against the priorities.

---

## Part 1. Post-training

### A. Policy gradient foundations

| Topic | What you must be able to do | Source |
|---|---|---|
| REINFORCE | Derive ∇J = E[∇log π(y\|x)(r − b)] via the log-derivative trick. Prove the baseline is unbiased: E[∇log π · b] = b·∇Σπ = 0. Say why it reduces variance and what the optimal baseline is. | Williams 1992; Sutton & Barto ch. 13 |
| Sequence vs token credit | log π(y\|x) = Σ_t log π(y_t\|x, y_<t), so an outcome reward gives every token the same advantage. Per-token advantages need a value function or process rewards. Say what that implies for 100-turn agent trajectories. | primer §5 |
| Importance sampling and PPO | ρ_t = π_θ/π_old. Why the unclipped surrogate is unbounded. L = E[min(ρA, clip(ρ, 1−ε, 1+ε)A)]. Why the clip is a trust-region approximation. KL penalty vs KL in the loss. The k3 estimator: (r − 1) − log r, unbiased and non-negative. | Schulman 2017; Schulman's KL note |
| Actor-critic and GAE | δ_t = r_t + γV(s_{t+1}) − V(s_t); A_t = Σ_l (γλ)^l δ_{t+l}. Bias-variance in λ. Why the critic is a second model the size of the policy, and why value-at-a-token is hard for long text. This is the "critic estimates value, it does not give reward" correction from the screen. | Schulman 2016 GAE |

### B. The GRPO family

| Topic | What you must be able to do | Source |
|---|---|---|
| GRPO | A_i = (r_i − mean)/std over G samples. Why the group mean estimates what the critic estimated. Why std normalization equalizes easy and hard prompts, and what it does when std is near zero. Loss with per-sample 1/\|o_i\|, clipped ratio, KL to reference in the loss with the k3 estimator. G is the price of no critic. | DeepSeekMath 2402.03300 §4.1 |
| Expected signal from a group | For k ~ Binomial(G, p): E[k(G−k)]/G² = ((G−1)/G)·p(1−p). For G = 8, (7/8)p(1−p). Derive it (E[k²] = Gp(1−p) + G²p²). This is the whole take-home and the whole reason dynamic sampling exists. | your take-home README |
| RLOO / leave-one-out baseline | Baseline for sample i is the mean of the other G−1 rewards, which makes it unbiased. Compare with GRPO's mean-including-self and std normalization. | Ahmadian et al. 2024 "Back to Basics" (verify ID) |
| DAPO's four | Clip-higher: with a symmetric ε a token at p = 0.01 can only rise to 0.012 in one step while p = 0.9 is barely constrained, so exploration dies; ε_low 0.2, ε_high 0.28. Dynamic sampling: drop groups with all-equal rewards, keep sampling until the batch is full; compute traded for signal. Token-level loss. Overlong soft penalty. AIME 50 on Qwen2.5-32B base. | DAPO 2503.14476 §3 |
| Dr. GRPO | The 1/\|o_i\| length term and the std term both bias updates (longer wrong answers get less penalty per token; low-variance prompts get amplified). Removing both is "GRPO done right." Contrast with DAPO's token-level loss. | Liu et al. 2025 "Understanding R1-Zero-Like Training" (verify ID, likely 2503.20783) |
| Loss aggregation | Write token_mean and prompt_mean as formulas; derive the effective per-token weight in each (1/Σ\|o_i\| vs 1/(G\|o_i\|)); show a 128k trajectory carries 64× the weight of a 2k one under token_mean. Mercor: prompt_mean +3.9 on 2k to 128k agent trajectories; DAPO the opposite on math. Same formula, different regime. | Mercor 397B post; primer §10 |
| GSPO | Sequence-level importance ratio, length-normalized (geometric mean of token ratios), clipped per sequence; why it is more stable for MoE and long sequences; why SkyRL's sequence-level TIS narrows in step-wise training. | Zheng et al. 2025 "Group Sequence Policy Optimization" (verify ID, likely 2507.18071); SkyRL step-wise docs |
| DPO | Derive it: KL-regularized objective → π*(y\|x) ∝ π_ref(y\|x)·exp(r/β) → r = β log(π*/π_ref) + β log Z → substitute into Bradley-Terry, Z cancels. Three minutes on a whiteboard. Implicit reward. Limits: off-policy, likelihood displacement (both chosen and rejected drop). | Rafailov 2023 2305.18290 |
| Rejection sampling / expert iteration | Filter-then-SFT as crude policy improvement; where the gradient of the score went; diversity collapse. | STaR 2203.14465; Llama 2 §3.2.2 |

### C. Rewards, verifiers, and hacking

| Topic | What you must be able to do | Source |
|---|---|---|
| RLVR | Reward from a checker; the risk moves to the checker. Binary vs per-criterion rubric reward (mean of Met). What "Pass@1 = all criteria met" vs "mean reward = fraction met" changes about the gradient. | Tülu 3 2411.15124; Mercor eval-systems post |
| Judge calibration statistics | Precision and recall on Met, Cohen's κ, the FN/FP trade-off Mercor accepted (5.3% → 8.0% FN to catch hedging), why the judge must not see the trajectory (self-preference), held-out labelled slice. | APEX-Agents §4.2; APEX-Agents 1.1 post |
| Reward hacking taxonomy | Narration vs state (diff the artifact); single terminal score (dense per-criterion); judge drift (calibrate, track agreement); train/eval overlap (held-out worlds); scattergunning (score zero). Goodhart in one sentence. | primer §15; Mercor posts |
| Shaping | Potential-based shaping F = γΦ(s′) − Φ(s) is the only shaping that preserves the optimal policy; anything else (VP delta in Catan) is gameable. | Ng, Harada, Russell 1999 |
| Process vs outcome rewards | PRMs, Monte Carlo value from branched rollouts, why long horizons make outcome-only credit assignment noisy, and what that costs in samples. | primer §14; your Catan step 2 |

### D. Agentic and multi-turn RL

| Topic | What you must be able to do | Source |
|---|---|---|
| Loss masking | Every token the policy did not generate (tool returns, environment observations, injected user turns) is masked from the loss; all policy tokens including reasoning stay in. Loss mask decides gradient; reward decides scoring. Two knobs, never blended. | screen debrief Q4 |
| Re-tokenization drift and TITO | Re-tokenizing the conversation string changes token IDs, so training is silently off-policy. Fix: exchange raw token IDs and logprobs with the engine (`/completions`, TITO). Consequence: without TITO you cannot do rollout correction reliably, so you cannot do fully async with proper staleness correction. | SkyRL agent-integration docs; Mercor 397B post |
| Step-wise training | Decompose a T-turn trajectory into T samples using exact token IDs; compute advantages on last steps and broadcast; mathematically equivalent to trajectory-level GRPO; O(T²) tokens unless prefixes merge; context management (stripped thinking, summarization) breaks linear histories. | SkyRL step-wise docs (Charlie authored) |
| Environment design | The six-step walkthrough, two minutes, on three targets: assumption (verifiable → RLVR) → prompt set (same shape, difficulty-filtered so groups are not all-same) → verifier (extraction, exact match with tolerance, judge calibrated, hedging scores zero) → harness (rollout loop, tools, length budget, held-out split, contamination check) → de-risk (non-model errors to ~0, logprob check, overfit a handful) → failure modes. Plus the SkyRL `BaseTextEnv.step` interface. | prep file Round 1 debrief Q3; SkyRL new-env tutorial |
| Credit across turns | Turn-level vs token-level advantages; discounting in agent tasks; why the "wrap up" nudge is a harness lever, not an algorithm. | Mercor 397B post |

### E. Systems and infrastructure

| Topic | What you must be able to do | Source |
|---|---|---|
| Async RL | Generation decoupled from training; in-flight weight updates; partial rollouts paused and resumed. Staleness bound = (max_staleness_steps + 1) × mini_batch_size × n_samples_per_prompt (1,024 in their run). KV-cache concurrency ceiling = KV capacity in tokens / mean trajectory length. GPU split 12:4 and 12:8; concurrency 550 and 300. Stragglers and heavy tails. | Mercor 397B post; SkyRL fully-async docs |
| Train/inference mismatch | Sources: non-batch-invariant kernels, MoE routing differences, different parallelism, precision (FP8 rollouts collapse on long horizons), CPU offload + GDN + in-flight updates. Measure: mean \|log π_train − log π_infer\| below 0.03. Corrections and what each does: importance ratio against rollout logprobs; TIS token clip 2.0 and sequence clip 5.0; geometric sequence masking 0.99 to 1.01; icepop token masking 0.5 to 2.0; router replay for MoE; DPPO masks tokens by a binary TV-divergence approximation; GLM-5 loss truncates the ratio; the two within noise, DPPO pushed to more, shorter turns. | SkyRL off-policy-correction docs; Jet-RL 2601.14243; Mercor 397B post |
| Throughput arithmetic | ~2N FLOPs per token inference, ~6N per token training; why long-horizon agent RL is inference-bound; where wall-clock goes; what a 2× compute budget should buy. Memory: about 16 bytes per parameter for weights, gradients and Adam states in mixed precision; KV bytes per token = 2 × layers × kv_heads × head_dim × bytes. | Kaplan 2020; ZeRO 2019 |
| Parallelism and packing | TP/PP/EP/CP in one sentence each; `max_tokens_per_microbatch`; sequence packing with per-sequence attention masks; why context parallelism is needed above the micro-batch cap. | Mercor 397B post; SkyRL Megatron notes |
| LoRA vs full fine-tune | h = Wx + (α/r)BAx; parameter count r(d + k); memory saved; your LIBERO-PRO result (LoRA 15 to 21 vs FFT 42 at matched hyperparameters) said as a finding, not a verdict. Edward Hu invented LoRA and leads training at Mercor. | Hu 2021 2106.09685 |

### F. Data

| Topic | What you must be able to do | Source |
|---|---|---|
| Difficulty filtering and curriculum | Keep prompts with 0 < pass rate < 1; why estimates go stale as the policy improves (your take-home: +0.12 per epoch drift vs 0.095 RMSE); bandit view of prompt selection; what "38% never reachable" means for budget. | your take-home; DAPO |
| Data over algorithm | Harness fixes gave +6 mean-reward points before any RL; best knob +3.9; post-training as a whole 10 to 12; near-linear training trendline in the January post; generalization to held-out professional benchmarks with flat general benchmarks. | Mercor posts of 01-23, 04-30, 09-01 |
| Contamination and splits | Held-out worlds, not just held-out tasks; dev vs held-out gaps (Opus 4.8 61.8 dev vs 48.0 held-out on accounting); web search off; documents screened against public sources. | APEX papers |
| Poisoned or corrupted rewards | What a sign-flipped credit does to a policy that farms informative tasks; detection as predicted-vs-observed improvement per skill; the detector must pay for itself when the poison rate is zero. Your measured numbers: 12 of 16 wins, three banks lose 5 to 12 points. | your take-home; format-analysis §0.5 |

### G. Evaluation statistics (shared with the practical)

| Topic | What you must be able to do | Source |
|---|---|---|
| Pass@k | Unbiased estimator 1 − C(n−c, k)/C(n, k); derive it (probability a random k-subset of n contains no correct sample); needs n ≥ k; Pass^k as consistency; why repeats are aggregated into Pass@1, not best-of. | Chen et al. 2021 (Codex); Mercor methodology |
| Intervals | Task-level bootstrap (resample tasks, not runs); paired comparison on the same tasks and why it is the only claim that survives; clustered variance when runs share tasks; multiple comparisons. | APEX papers; mock-1 grader key |
| Agreement | Cohen's κ (two raters), Fleiss κ (three, 0.857 on accounting), raw agreement vs chance-corrected. | APEX-Accounting §3.4 |
| Sequential decisions | Peeking inflates false positives; Hoeffding n ≥ ln(2/δ)/(2ε²); pre-registered check times or a sequential test. | standard |

### The derivation deck (do from memory, timed, checked against the primer; repeat on days 1, 3, 7, 11)

1. REINFORCE gradient and baseline unbiasedness.
2. PPO clipped objective and why the clip bounds the update.
3. GAE from TD errors.
4. GRPO advantage, loss, and the k3 KL estimator.
5. E[k(G−k)]/G² = ((G−1)/G)p(1−p).
6. token_mean vs prompt_mean effective weights.
7. DPO from the KL-regularized objective to the Bradley-Terry loss.
8. Potential-based shaping preserves the optimal policy (sketch).
9. Pass@k unbiased estimator.
10. Staleness bound and KV concurrency ceiling, with their numbers.
11. LoRA update and parameter count.
12. Bloom filter false-positive rate and optimal k (algorithms deck, shared).

Score each 0/1/2 (wrong / right with a slip / clean). The deck is done when two consecutive passes are all 2s.

---

## Part 2. Algorithms

The round is "true algorithms" on infrastructure problems, 30 minutes, spoken. Depth here means you can derive the bound or prove the greedy choice on a whiteboard, know the constants, and estimate in your head. The families come from what Mercor computes (format-analysis §2.4).

### A. Complexity and fundamentals

| Topic | What you must be able to do |
|---|---|
| Sorting bounds | Decision-tree argument: n! leaves → Ω(n log n) comparisons. Counting sort O(n + k), radix sort, stability. Insertion sort O(n + inversions) on nearly sorted input; TimSort. "The slowest sort" question: bogosort expected O(n·n!), permutation sort O(n!·n). |
| Selection | Quickselect O(n) expected, median-of-medians O(n) worst; heap top-k O(n log k); tournament O(n + k log n). |
| Binary search on the answer | Monotone feasibility predicate; O(log range × cost of check); "smallest budget such that" problems. |
| Amortized analysis | Dynamic arrays; union-find with path compression and union by rank, near-constant α(n). |
| Recurrences | Master theorem cases; solve T(n) = 2T(n/2) + n and T(n) = T(n/2) + 1 cold. |
| Hashing and sketches | Expected chain length = load factor. Bloom filter FP ≈ (1 − e^{−kn/m})^k, optimal k = (m/n) ln 2, no false negatives. Count-min sketch: width e/ε, depth ln(1/δ), overestimate ≤ εN with probability 1 − δ. HyperLogLog error ≈ 1.04/√m. Misra-Gries: k − 1 counters catch every item with frequency above n/k. |
| Sampling | Reservoir sampling: keep item i with probability k/i; prove each item survives with probability k/n. Stratified sampling and when uniform fails. |
| Similarity | MinHash: P[h_min(A) = h_min(B)] = Jaccard(A, B). LSH banding: P(candidate pair) = 1 − (1 − s^r)^b, the S-curve, choosing r and b for a threshold. Embeddings + HNSW for paraphrase. |

### B. Graphs

| Topic | What you must be able to do |
|---|---|
| Traversal and DAGs | BFS/DFS; Kahn's topological sort O(V + E); longest path in a DAG (critical path) by DP over topological order; reachability and why transitive closure is O(V·E) or bitset-accelerated. |
| Shortest paths | Dijkstra with a heap O((V + E) log V) and why it fails with negative edges; Bellman-Ford O(VE). |
| Components | Union-find for clustering near-duplicates; Tarjan or Kosaraju for SCCs in one sentence. |
| Flows and matching | Max flow = min cut; Edmonds-Karp O(VE²); bipartite matching via Hopcroft-Karp O(E√V); assignment via Hungarian O(n³) or min-cost flow. |
| Centrality | PageRank as power iteration; degree, betweenness, and "flow centrality" on a referral DAG (the PracHub Mercor prompt): expected value over paths, memoized DP. |

### C. Matching and ranking (the marketplace family, Jiwon's team)

| Topic | What you must be able to do |
|---|---|
| Stable matching | Gale-Shapley O(n²); proposer-optimal; why it terminates; when stability is the wrong objective. |
| Assignment | Weighted bipartite matching via min-cost flow; greedy is not optimal; capacities (one expert, many tasks). |
| Online matching | Greedy is 1/2-competitive; RANKING is 1 − 1/e; secretary rule 1/e; why online arrival changes the algorithm. |
| Ranking under noise | Bradley-Terry / Elo as MLE of pairwise wins; tournament selection O(n log k) comparisons; majority-of-m repeats: with p = 0.1 per call, majority of 3 errs with probability 3p²(1−p) + p³ = 0.028, majority of 5 about 0.009; active pair selection where the posterior is uncertain; wall-clock = rounds × latency when calls are parallel. |
| Bandits | UCB regret O(√(KT log T)); Thompson sampling; when to use a bandit over an A/B test; the take-home as a bandit over prompts. |

### D. Scheduling and queueing

| Topic | What you must be able to do |
|---|---|
| Greedy proofs | SJF minimizes mean waiting time (exchange argument). Interval scheduling by earliest finish (exchange argument). EDF for deadlines. |
| Load balancing | List scheduling ≤ (2 − 1/m)·OPT; LPT ≤ (4/3 − 1/(3m))·OPT (Graham). |
| Bin packing | NP-hard; first-fit-decreasing ≤ 11/9·OPT + 6/9 (Dósa 2007, verify constant); token micro-batch packing is exactly this; over-capacity items need context parallelism. |
| Queueing | Little's law L = λW and how to use it to size concurrency. M/M/1: utilization ρ = λ/μ, mean time in system 1/(μ − λ), mean number ρ/(1 − ρ); why utilization near 1 explodes wait. Heavy-tailed service times: medians lie; timeouts on everything. |
| Rate limiting and backpressure | Token bucket; leaky bucket; retry with exponential backoff and jitter; why unbounded retries amplify an outage. |
| Staleness as a queue constraint | The SkyRL bound as a maximum queue depth; concurrency = min(KV ceiling, staleness ceiling). |

### E. Streaming statistics under a budget

| Topic | What you must be able to do |
|---|---|
| Online moments | Welford's algorithm for mean and variance in one pass, numerically stable. |
| Early stopping | Hoeffding bound for a fixed-n test; the peeking problem; sequential probability ratio test or alpha spending; simulate the false-stop rate. |
| Pass@k live | Per-task counters, unbiased estimator only when n_i ≥ k, task-level bootstrap on demand, paired running difference. |

### F. Probability with a twist

| Topic | What you must be able to do |
|---|---|
| Symmetry and linearity | The coffee-cups question (two shops, same quality distribution, four cups: probabilities of orderings by symmetry, ties handled explicitly). Expected value by linearity without enumerating. |
| Collisions | Birthday bound √(2m ln(1/(1−p))); hash collision rates for dedup. |
| Conditional reasoning | Bayes for "the comparator said A > B; how likely is A really better"; independence assumptions and when they fail (close pairs). |

### G. DP and greedy, and numerics that matter here

| Topic | What you must be able to do |
|---|---|
| Budget allocation | Knapsack DP for allocating rollouts across tasks with different value per cost; when greedy by value/cost ratio is fine (fractional) and when it is not (0/1). |
| DP over DAGs | Expected value through a referral network; memoization; cycles make it a Markov chain instead. |
| Numerics | log-sum-exp for stable softmax; Kahan or pairwise summation; why float accumulation order changes logprobs across kernels (the mismatch source, in one sentence). |

### The prove-it list (whiteboard, aloud, from memory; repeat on days 2, 5, 9)

1. Ω(n log n) for comparison sorting.
2. Reservoir sampling keeps each item with probability k/n.
3. SJF minimizes mean waiting time.
4. Earliest-finish-first is optimal for interval scheduling.
5. Bloom filter false-positive rate and optimal k.
6. MinHash collision probability equals Jaccard.
7. LSH banding S-curve.
8. LPT 4/3 bound (sketch) and list scheduling 2 − 1/m.
9. Little's law (sketch).
10. Majority-of-m error for an unreliable comparator.
11. Gale-Shapley terminates and is proposer-optimal (sketch).
12. Pass@k unbiased estimator.

Same scoring as the derivation deck. Done when two consecutive passes are all 2s.

---

## Part 3. How the depth gets built (for the plan)

1. **Derivation deck and prove-it list first, then the mock loop.** Closed book, timed, checked against the primer and this file. Misses become the first questions of the next mock thread.
2. **Fresh-thread mock loop with one added rule:** the interviewer must keep escalating on each topic until the candidate fails or the interviewer runs out of escalation, and must report the deepest question reached per topic. The target is the second outcome on every topic. Prompts are in `format-analysis.md` §8; add the escalation rule to each.
3. **Teach-back:** each mechanism explained aloud to a recorder without notes, then checked against the source. Explanations improve when produced, not read (`evidence.md`).
4. **Read the primary sources once each, whole:** Mercor's 397B post and the SkyRL docs Charlie wrote (step-wise, agent-integration, off-policy correction, dapo); Jet-RL's abstract and mismatch section; DAPO §3; DeepSeekMath §4.1; DPO §4; the APEX-Agents judge section. Reading is for filling a gap the deck found, not for its own sake.
5. **The small GRPO run** (optional, after the gate work is safe): the one thing that turns "read" into "seen" for section E.
6. **"Nothing surprises me" test:** three consecutive fresh threads on post-training and three on algorithms with no new gap and no topic where the interviewer reached the bottom of you before you reached the bottom of the topic.
