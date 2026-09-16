# Algorithms round: protocol, pattern sheet, six drills

For the 30-minute Jiwon Lee session: "real architecture challenges, infrastructure decisions, and scaling strategies that mirror a challenge you may face at Mercor. Interactive, discussion-based. Not Leetcode, not system design. True algorithms." Grader keys are in `algorithms-grader-key.md`; do not open a key before its drill.

## The protocol (aloud, every time, in this order)

1. Restate the problem in one sentence. Confirm it.
2. Ask for scale and constraints: sizes, latencies, memory, budget, and what is being optimized.
3. Brute force, and its cost.
4. Name the bottleneck. Propose two better approaches. Pick one and say why.
5. Complexity, correctness edge cases, what breaks at 10x.
6. How you would verify it empirically.

Pacing phrases that buy thinking time without silence: "Let me state the invariant first." "The thing that dominates here is..." "Before I optimize, the naive version is..."

## Pattern sheet (say, for each: when it applies, and its cost)

| Pattern | Applies when | Cost |
|---|---|---|
| Priority queue / heap | pick the best of many, repeatedly, with arrivals | O(log n) per op |
| Greedy scheduling: shortest-job-first, longest-processing-time-first (LPT) | minimize mean wait; balance load across workers | O(n log n); LPT is within 4/3 of optimal makespan |
| Bin packing: first-fit-decreasing | pack variable-size items into fixed capacity | O(n log n); at most 11/9 OPT + 1 bins |
| Topological sort / DAG scheduling | task dependencies, pipelines | O(V + E) |
| Reservoir sampling | uniform sample from a stream of unknown length | O(1) per item, O(k) memory |
| Stratified sampling | rare categories must be represented | O(n) |
| Exact hashing, then shingling + MinHash + LSH | near-duplicate detection at scale | O(n) expected with banding; tunable precision/recall |
| Embeddings + approximate nearest neighbour (HNSW) | semantic near-duplicates | O(log n) query, index build cost |
| Bloom filter | membership test, no false negatives, small memory | O(k) per op |
| Count-min sketch | frequency counts over a stream | O(1) per op, bounded overestimate |
| Consistent hashing | shard by key with minimal reshuffle on scale-out | O(log n) lookup |
| Token bucket | rate limiting with bursts | O(1) |
| Little's law: L = λW | queue length, arrival rate, and wait are tied; two fix the third | back-of-envelope |
| Binary search on the answer | "smallest budget such that..." monotone feasibility | O(log range × check) |
| Union-find | clustering by pairwise links | near O(1) amortised |
| Bandit allocation (Thompson sampling) | spend budget across arms with unknown payoffs | O(1) per pull |
| Unbiased Pass@k estimator | n samples, c correct: 1 − C(n−c, k) / C(n, k) | needs n ≥ k |
| Task-level bootstrap | CI on a mean over tasks | O(tasks × resamples) |
| Importance sampling / ratio truncation | reweight samples from a different distribution | variance grows with mismatch |
| Sorting bounds | comparison sort Ω(n log n); counting sort O(n + k) for small integer keys; stable sort on nearly-sorted data (insertion sort O(n + inversions), TimSort) | |
| Tournament / noisy comparisons | ranking with an unreliable or expensive comparator | O(n log k) comparisons; repeat near decision boundaries |
| Online mean and variance (Welford) | live statistics | O(1) per item |

## The six drills (30 minutes each, spoken, with an interviewer)

Give the persona this file's drill text only. The interviewer should interrupt, change a constraint at minute 15, and ask "what breaks at 10x" before the end.

**Drill 1: ranking under a slow, unreliable comparator.** You have 2,000 candidate model responses to one task. The only signal is a comparator that takes two responses and returns which is better. Each call takes 5 seconds and is wrong 10% of the time, independently. Find the top 10. Minimize wall-clock time and the number of calls. (Constraint change at minute 15: the comparator's error rate is 30% on close pairs and 2% on distant ones.)

**Drill 2: packing trajectories into token micro-batches.** RL trajectories are 2k to 128k tokens. The trainer's micro-batch holds 128k tokens. Minimize the number of micro-batches (padding waste), and keep each data-parallel rank's total tokens balanced. Some trajectories exceed 128k. (Change: the loss is prompt_mean, so each prompt's 8 trajectories should ideally land in the same optimizer step.)

**Drill 3: dynamic sampling under a rollout budget.** GRPO with 8 samples per prompt. Prompts where all 8 pass or all 8 fail give zero gradient. Per-prompt pass rates are unknown and drift as the policy improves. You can afford B rollouts per training step and need a batch of M prompts with mixed outcomes. Design the sampling. (Change: 40% of the prompt pool is all-fail for the current policy; the pool has 50,000 prompts.)

**Drill 4: near-duplicate tasks at scale.** One million expert-authored task prompts. Find near-duplicates (paraphrases, same numbers with different wording) so the benchmark is not inflated and train and test do not overlap. (Change: duplicates also hide in the attached files, not just the prompt text.)

**Drill 5: scheduling sandboxed rollouts with stragglers.** K inference engines serve rollouts whose durations are heavy-tailed (median 10 minutes, tail 3 hours). The trainer consumes mini-batches of size B. Rollouts generated more than S steps ago must not be trained on. Maximize throughput while respecting the staleness bound. (Change: the KV cache limits concurrent rollouts to C per engine, and a weight update arrives every step.)

**Drill 6: streaming Pass@k with confidence during a live run.** Results arrive in arbitrary order for 480 tasks × 8 samples each. Maintain a live Pass@1 and Pass@8 with confidence intervals as results arrive, and decide as early as possible whether the new checkpoint beats the old one. (Change: the evaluator wants to stop the run the moment the answer is clear, and worries about peeking.)
