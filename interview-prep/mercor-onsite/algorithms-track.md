# Algorithms track: the cards (A1 to A9)

The 30-minute session with Jiwon Lee. Their words: "real architecture challenges, infrastructure decisions, and scaling strategies that mirror a challenge you may face at Mercor. Interactive, discussion-based. Not Leetcode, not system design. True algorithms." One problem with three or four escalations; she interrupts, changes a constraint, gives hints. Scored (`format-analysis.md` §2.5): precise restatement; asking for scale before designing; a brute force with its cost; the bottleneck named; two approaches, one chosen with a reason; complexity and edge cases; what breaks at 10x; what you do when the constraint changes; arithmetic in your head. No first-hand account of this round exists, so the content is three layers, all rotated: **1** CS core · **2** math, probability, statistics, ML arithmetic (Mercor's attested prompts: a compact GPT-style transformer review, candidate search with "top-p vs beam", coffee-cup probability) · **3** Mercor-shaped drills. It is half the gate and the highest-variance session (§2.8).

How to read a card: **Read** is the only reading. **Do** is the whole task, in order. **Drive home** is what must be automatic afterwards. **Master** is the topic list the Examiner tests. **Bot** names the thread (Tutor and Examiner are in the plan §1; 8.2 is in `format-analysis.md` §8). **Test** and **Done when** are the pass bar. Then one ledger line.

Fresh rows go through the five steps (plan §1): attempt cold in writing, 5 minutes; Tutor thread with the row pasted; closed-book reproduce and write the miss; Examiner or 8.2 thread the same day; re-test in 1 to 2 days mixed with other rows.

---

### A1. The six-move protocol · paper · 30 min, then 5 min daily

**Read.** `algorithms-drills.md`, "The protocol" and the pacing phrases.
**Do.**
1. Write the six moves from memory; check: restate and confirm · scale and constraints · brute force with its cost · bottleneck, two approaches, pick one with a reason · complexity, edge cases, 10x · empirical verification.
2. Say them to a recorder with the three pacing phrases.
3. Take any drill and do moves 1 and 2 only, aloud, under 90 s.
4. On paper, 10 to 15 lines of pseudocode for one pattern (heap top-k, then union-find, then Kahn's) so "write it" never stalls you.
**Drive home.** Never design before scale is known. Brute force first, with its cost. Name the bottleneck before proposing. Two options, one reason. 10x. "I would verify that by..." unprompted.
**Done when.** Said without the sheet on three days; one pseudocode block each day.

### A2. The pattern sheet, 22 rows · paper · 45 min, then 10 min daily

**Read.** `algorithms-drills.md`, the pattern sheet.
**Master.** Heap · SJF and LPT · first-fit-decreasing · topological sort · reservoir sampling · stratified sampling · exact hash then MinHash + LSH · embeddings + HNSW · Bloom filter · count-min sketch · consistent hashing · token bucket · Little's law · binary search on the answer · union-find · Thompson sampling · unbiased Pass@k · task-level bootstrap · importance sampling and ratio truncation · sorting bounds · tournament and noisy comparisons · Welford. For each: when it applies, its cost, one pitfall.
**Do.** Cover the two right columns; say each row; mark misses; the five steps on the misses (Tutor with the row pasted). Shuffle the order every day.
**Bot.** Examiner with "Topics: the 22 pattern names above; for each demand when it applies, its cost, and a case where it is the wrong choice."
**Done when.** All 22 cold, no Wrong on the Examiner.

### A3. The prove-it list, 12 proofs · paper · 30 min per pass · Sat 19, Tue 22, Fri 25

**Read.** `theory-syllabus.md`, "The prove-it list", and the rows behind each item (Part 2 A, C, D, E; Part 1 G).
**Master.** 1 Ω(n log n) for comparison sorting (decision tree, n! leaves) · 2 reservoir sampling keeps each item with probability k/n · 3 SJF minimizes mean waiting time (exchange argument) · 4 earliest-finish-first is optimal for interval scheduling (exchange) · 5 Bloom filter FP ≈ (1 − e^{−kn/m})^k and k = (m/n) ln 2 · 6 MinHash collision probability = Jaccard · 7 LSH banding S-curve 1 − (1 − s^r)^b · 8 LPT 4/3 sketch and list scheduling 2 − 1/m · 9 Little's law sketch · 10 majority-of-m error for an unreliable comparator (m = 3 at p = 0.1: 0.028) · 11 Gale-Shapley terminates and is proposer-optimal (sketch) · 12 Pass@k unbiased estimator 1 − C(n−c, k)/C(n, k).
**Do.** Closed book, aloud, on paper, 2 to 3 minutes each; score 0/1/2; check each against its syllabus row; every miss gets a Tutor thread the same day with the row pasted; re-test in 1 to 2 days.
**Bot.** Examiner with "Topics: the 12 proofs; for each, the full argument, then one variant (change k, change the bound, change the objective) to check it is understood, not memorized."
**Done when.** Two consecutive all-2 passes.

### A4. Layer 1, the CS core · paper · 5 to 6 h across four days

**Read.** `theory-syllabus.md` Part 2, in this order: A (complexity, selection, binary search on the answer, amortized, recurrences, hashing and sketches, sampling, similarity) · D (greedy proofs, load balancing, bin packing, queueing, rate limiting, staleness as a queue) · B (traversal and DAGs, shortest paths, components, flows and matching, centrality) · C (stable matching, assignment, online matching, ranking under noise, bandits) · G (budget allocation, DP over DAGs, numerics). Then Part 2b, the breadth sweep, to L1 to L2 (DP patterns, strings, Fenwick and segment trees, two pointers and sliding window, heaps and k-way merge, external sort and map-reduce, grid BFS and MST, backtracking, bits, infra basics).
**Master.** Every row's "what you must be able to do" column at L2 (write and derive from memory); 2b items at "problem shape, cost, one pitfall".
**Do.** Row by row, the five steps. One family per sitting; two sittings a day at most. Write each miss as a question-bank line.
**Drive home.** The bound and its constant, cold: Ω(n log n) · quickselect O(n) expected · FFD ≤ 11/9 OPT + 1 · LPT ≤ 4/3 · list scheduling ≤ 2 − 1/m · Bloom (1 − e^{−kn/m})^k · count-min width e/ε, depth ln(1/δ) · HyperLogLog error 1.04/√m · Kahn O(V + E) · Dijkstra O((V + E) log V), fails on negative edges · Edmonds-Karp O(VE²) · Hopcroft-Karp O(E√V) · Hungarian O(n³) · Gale-Shapley O(n²) · online matching: greedy 1/2, RANKING 1 − 1/e · M/M/1: time in system 1/(μ − λ), number ρ/(1 − ρ) · union-find near O(1) amortized.
**Bot.** Tutor per row (paste the row). Examiner per family ("Topics: the rows of Part 2 D"), then one mixed Examiner over all families in shuffled order. 8.2 threads told "Layer 1 only" for the spoken form.
**Done when.** Every row L2 closed-book on the Examiner's table; 2b items cold.

### A5. Layer 2, math, probability, statistics, ML · paper · 4 to 5 h

**Read.** `theory-syllabus.md` Part 2c (all rows), Part 2 E and F, Part 1 E (throughput arithmetic) and G (evaluation statistics).
**Master.** Probability: symmetry and linearity of expectation, ties, birthday bound, Bayes on a noisy comparator, conditional probability, variance of an estimator, CLT, Markov chains, Hoeffding and Chernoff by name · Statistics: derive Pass@k; task-level bootstrap; paired comparison; Cohen's and Fleiss kappa; Welford; Hoeffding's n; peeking and sequential tests; how many tasks to detect a 3-point difference · Bandits: UCB regret O(√(KT log T)), Thompson, when a bandit beats an A/B test · ML arithmetic: 2N FLOPs per token inference, 6N training; 16 bytes per parameter in mixed-precision training; KV bytes per token = 2 × layers × kv_heads × head_dim × bytes; the KV concurrency ceiling · Transformer mechanics: tensor shapes through causal multi-head attention, the shifted next-token loss, KV-cache parity, attention O(n²) · Decoding: greedy, temperature, top-p, beam, speculative; when beam beats sampling · Serving: continuous batching, quantization by name · Optimization: SGD, Adam, schedules · Classic ML: bias-variance, cross-validation, k-means, PCA, logistic regression · Numerics: importance sampling, log-sum-exp.
**Do.** Row by row, the five steps (probability and statistics first, Tue 22; the rest across the week). Then the three attested prompts aloud, 5 minutes each, recorded: (1) a compact GPT-style transformer review, shapes from tokens through embeddings, causal attention, MLP, the shifted loss, KV-cache parity; (2) candidate search with an unreliable comparator, then "top-p vs beam"; (3) the coffee-cups question, two shops, four cups, ties handled explicitly.
**Drive home.** Symmetry and linearity before enumeration; ties named; Bayes on the comparator; paired beats unpaired; kappa with n; the four arithmetic formulas; when beam is wrong (open-ended generation) and right (short exact answers).
**Bot.** Tutor per row. Examiner with the Master list. One 8.2 thread told "Layer 2 only".
**Done when.** Each row L2 on the Examiner's table; the three attested prompts under 5 minutes each, recorded, no gap.

### A6. Drills 1 to 10, spoken · screen · 45 min each including the debrief

**Read.** Nothing before. After: the drill's entry in `algorithms-grader-key.md`.
**Bot.** Fresh thread, `format-analysis.md` §8.2 with rule 1 replaced by "Use this problem: [paste the drill text only from `algorithms-drills.md`]". Rules 2 to 7 stay: no scale until asked, interrupts, constraint change halfway, 10x, verification, escalation.
**Do.** Dictate. Then open the key; score 0 to 2 on the eight items (restated; asked for scale; brute force with cost; bottleneck; two approaches, one chosen; complexity and edge cases; 10x; verification), out of 16; write the miss and one question-bank line. Order: 1, 2 Sat 19 · 3, 4 Sun 20 · 7, 8 Mon 21 · 9, 10 Wed 23 · 5, 6 Thu 24.
**Drive home.** Per drill, the key's shape; the drills are the take-home's world (3 is the take-home exactly) plus Mercor's marketplace and graphs (7 to 10).
**Done when.** Each 12+ of 16; under 10 repeats the next day.

### A7. Fresh 8.2 threads, the interviewer picks · screen · 45 min, one most days

**Bot.** Fresh thread, `format-analysis.md` §8.2 as written, rule 8 filled with the family used last time.
**Do.** Dictate; take the hints; when she changes the constraint, say in one sentence what changed in the answer. Score /16 from rule 6; the "strongest answer" paragraph goes into the ledger log; one question-bank line.
**Done when.** Three consecutive 12+ on families you did not choose.

### A8. Mental arithmetic · paper · 15 min, twice

**Read.** `theory-syllabus.md` Part 1 E (throughput and async numbers), Part 2 D (queueing), Part 2 F (birthday bound), Part 2 C (majority-of-m).
**Do.** Ten estimates, written then checked, under 30 s each: calls × latency / concurrency (100k × 5 s / 50 = about 2.8 h) · KV ceiling = capacity tokens / mean length · staleness bound (S + 1) × B × n, 1,024 in the 397B run · Little's law L = λW · birthday bound √(2m ln(1/(1 − p))) · majority-of-3 at p = 0.1 = 0.028 · training FLOPs 6N per token · bytes per parameter 16 · KV bytes per token for a named model · M/M/1 time in system 1/(μ − λ).
**Bot.** Examiner with "Give me ten fresh numeric prompts of these shapes, one at a time, and time me."
**Done when.** Ten under 30 s, within 2x.

### A9. Salman, Sun 27 09:00 PT · paper · 45 min

**Do.** Give Salman one drill text he has not seen you do (from `algorithms-drills.md`) or a problem of his own, plus 8.2 rules 3 to 6 as his script: interrupt, "what does that cost", constraint change at 15 minutes, 10x, verification, the /16 score. Debrief lines into the question bank.
**Done when.** Score and notes in the question bank; ledger updated.

---

Track done: A3 two clean passes; A7 three consecutive 12+; A4 and A5 cold on the Examiner's table; A1 automatic.
