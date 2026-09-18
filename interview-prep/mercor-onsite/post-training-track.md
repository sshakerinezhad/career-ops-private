# Post-training track: the cards (T1 to T13)

The 45-minute session with Charlie Ruan, only if the first two pass. Their words: "Post-training and RL fundamentals: algorithms, agentic RL, systems design, data, and infra tradeoffs. Emphasis on explaining mechanisms rather than recalling terminology." "Interviewers care how you reason through an unfamiliar tradeoff, not whether you know our vocabulary." Two or three topics, each opened with a mechanism question and escalated into a trade-off you have not seen (`format-analysis.md` §3.2). Charlie's ground (§3.4): async RL and staleness, train/inference logprob mismatch and its corrections, TITO and step-wise training, loss aggregation and length on 2k to 128k-token trajectories, where compute goes, value model or not on 100-turn tasks, data over algorithm. The screen's three misses were precision misses (`question-bank.md` rows 2 to 4).

The bar (`theory-syllabus.md`): Part 1 rows at L2 to L4, Part 0 field maps at L1 to L3. L1 words · L2 equation and derivation · L3 failure mode and the experiment that exposes it · L4 the number or regime from a primary source. The routine for any unfamiliar trade-off: objective, constraint, two options, failure mode of each, the cheapest experiment that decides it. At the edge: "I have not seen that; here is what I would measure." Never claim LLM RL you have not run: "VLAs yes, LLMs no," then reason.

How to read a card: **Read** is the only reading. **Do** is the whole task, in order. **Drive home** is what must be automatic afterwards. **Master** is the topic list the Examiner tests. **Bot** names the thread (Tutor and Examiner are in the plan §1; 8.1 is in `format-analysis.md` §8). **Test** and **Done when** are the pass bar. Then one ledger line. Fresh rows go through the five steps (plan §1).

---

### T1. The derivation deck, 12 items · paper · 45 min per pass · Fri 18, Sun 20, Thu 24, Sun 27

**Read.** `theory-syllabus.md` Part 1, "The derivation deck". Answer key: `post-training-primer.md` §5 (REINFORCE), §6 (PPO), §8 (GRPO), §9 (DAPO), §10 (aggregation), §7 (DPO), §13 (LoRA), and the syllabus rows Part 1 A, B, C, E, G and Part 2 A.
**Master.** 1 REINFORCE gradient and why the baseline is unbiased · 2 PPO clipped objective and why the clip bounds the update · 3 GAE from TD errors · 4 GRPO advantage, loss, and the k3 KL estimator · 5 E[k(G − k)]/G² = ((G − 1)/G) p(1 − p) · 6 token_mean vs prompt_mean effective weights · 7 DPO from the KL-regularized objective to the Bradley-Terry loss · 8 potential-based shaping preserves the optimal policy · 9 Pass@k unbiased estimator · 10 staleness bound and KV concurrency ceiling with their numbers · 11 LoRA update and parameter count · 12 Bloom filter FP rate and optimal k.
**Do.** Closed book, on paper, 3 minutes each, timed; score 0/1/2; write the miss list. Each miss: a Tutor thread the same evening with the syllabus row pasted, then closed-book reproduce. The miss list opens the next T9 thread: "start on these gaps".
**Drive home.** The log-derivative trick, and E[∇log π · b] = 0 · the clip as a trust region · λ trades bias for variance · the group mean replaces the critic, std equalizes prompts and breaks near zero · (7/8)p(1 − p) · under token_mean a 128k trajectory weighs 64× a 2k one · Z cancels in DPO · F = γΦ(s′) − Φ(s) · 1 − C(n − c, k)/C(n, k), needs n ≥ k · (S + 1) × B × n = 1,024; KV ceiling = capacity / mean length · r(d + k) · (1 − e^{−kn/m})^k, k = (m/n) ln 2.
**Bot.** Examiner with "Topics: the 12 derivations; for each, the derivation, then one variant (a different baseline, a different G, a different λ, a weighted rubric) to check it is understood, not memorized."
**Done when.** Two consecutive all-2 passes.

### T2. The screen's gaps · paper · 1.5 h Sat 19, then 15-minute reps

**Read.** `question-bank.md` rows 2, 3, 4 (the misses in James's words). `mercor-research-engineer-post-training.md`, "Round 1 Debrief", Q2 to Q4 assessments (the correct and complete answers are written there). `theory-syllabus.md` Part 1 D, "Loss masking" and "Environment design".
**Master.** The six-step environment design: assumption (verifiable target → RLVR) → prompt set (same shape, difficulty-filtered so groups are not all-same) → verifier (extraction, exact match with tolerance, a calibrated judge, hedging scores 0) → harness (rollout loop, tools, length budget, held-out split, contamination check) → de-risk (non-model errors to about 0, logprob check, overfit a handful) → failure modes (hedging, judge leniency, length blow-up, format gaming, overlap) · the GRPO mechanism in 90 s: A_i = (r_i − mean)/std over the group, applied to every token of sample i, inside the clipped-ratio objective, KL to the reference in the loss with k3; prompt_mean vs token_mean unprompted · the two one-liners.
**Do.**
1. Write the six steps from memory; check against the Q3 answer.
2. Record three 2-minute walkthroughs: HLE; an APEX-style banking task; a Catan negotiation. Each hits all six steps and names the SkyRL `step` interface (observations, reward, done, metadata).
3. The two one-liners aloud until automatic: "the critic estimates value; the verifier or reward model gives the reward" · "the loss mask decides which tokens get gradient; the reward decides what gets scored; two knobs, never blended."
4. The GRPO 90 s to a recorder; check against the Q2 assessment.
**Bot.** Examiner with "Topics: environment design for a verifiable target; loss mask vs reward in multi-turn tool-use RL; the GRPO mechanism and its failure modes." Bar: every topic reaches L3.
**Done when.** Three recordings under 2:15 with all six steps; one-liners right first try on two days; GRPO 90 s clean.

### T3. A SkyRL toy environment · dev · 1 h · Sun 20

**Read.** The SkyRL new-environment tutorial at docs.skyrl.ai (linked in the prep file's debrief sources): the `BaseTextEnv` interface, `init` (reset with the prompt), `step(action) → observations, reward, done, metadata`, and how an environment is registered.
**Do.** Install the SkyRL gym package per the tutorial. Write a one-turn environment whose `step` extracts a final answer and returns reward 1 on an exact match, 0 otherwise, done = True. Run one episode with a hard-coded action. If the install fights past 45 minutes, write the class anyway and a unit test that calls `step` and asserts reward and done.
**Drive home.** The verifier lives in `step`. Everything `step` returns as observations is masked from the loss in training; the reward is the only scored quantity. Say the interface aloud in one sentence.
**Done when.** Episode runs or the test passes; the interface said aloud without notes.

### T4. Your scheduler at mechanism depth · paper · 1 h · Fri 25, again Sun 27

**Read.** `format-analysis.md` §0.5: the 12 questions Charlie could ask and the answers you need to own. Your code: `post-train/curriculum/__init__.py`, `post-train/notes.txt`.
**Master.** The 12 answers. The map to real RL: flat groups = DAPO's dynamic sampling; the census = difficulty filtering, keep 0 < pass rate < 1; staleness = pass-rate estimates rot as the policy improves; the product over skills = one starved capability caps a compositional eval; poison = corrupted reward or data.
**Do.** Record the 12 answers, no notes, 1 minute each; check against §0.5; redo the misses; then the map to real RL aloud.
**Drive home.** (7/8)p(1 − p) · clean +0.031, 16 of 16 · poisoned +0.041, 12 of 16, three banks lose 5 to 12 · drift about +0.12 per epoch vs RMSE 0.095 · about 38% unreachable · the wake term measured harmful and set to zero, left in with the receipt · what was yours and what Claude Code proposed.
**Bot.** 8.1 thread opened with "Start with my take-home: [paste the §0.5 'What you built' paragraph]. Ask the 12 questions an interviewer would, then escalate."
**Done when.** All 12 clean on a recording.

### T5. Primary sources, once each · screen · 30 to 60 min each, only as step 2 for a gap the deck or a thread found

**Read**, and for each write from memory afterwards the numbers and one mechanism, then check:
- Mercor's 397B post (link in `research/interviewers.md` §3): the knobs (prompt_mean +3.9, nudge +3.0, OLF cost 1.5, DPPO vs GLM-5 within noise, more and shorter turns); the health check (logprob difference below 0.03); the concurrency (550, 300), the staleness bound (1,024), the GPU splits (12:4, 12:8); the de-risk order.
- SkyRL docs, Charlie's pages: step-wise training (decompose T turns into T samples on exact token IDs; advantages on last steps, broadcast; O(T²) tokens unless prefixes merge; context management breaks linear histories); agent integration (re-tokenization drift; TITO); off-policy correction (TIS token clip 2.0, sequence clip 5.0; geometric masking 0.99 to 1.01; icepop 0.5 to 2.0; router replay for MoE); the DAPO page.
- Jet-RL 2601.14243, abstract and the mismatch section: FP8 rollouts collapse on long horizons.
- DAPO 2503.14476 §3: clip-higher (ε_low 0.2, ε_high 0.28), dynamic sampling, token-level loss, overlong soft penalty; AIME 50 on Qwen2.5-32B base.
- DeepSeekMath 2402.03300 §4.1: the GRPO objective, the k3 KL in the loss.
- DPO 2305.18290 §4: the derivation.
- APEX-Agents §4.2: the judge calibration (1,407 items, 354 held out; FN 5.3% → 8.0% to catch scattergunning).
**Done when.** Each source's numbers recited; new numbers added to `numbers.md`.

### T6. The syllabus rows at level · paper · 45 min per sitting, six sittings

**Read.** `theory-syllabus.md` Part 1 A to G, then Part 0 fields 1 to 3.
**Master.** Part 1 to L2 to L4: A REINFORCE, sequence vs token credit, importance sampling and PPO, actor-critic and GAE · B GRPO, expected signal from a group, RLOO, DAPO's four, Dr. GRPO, loss aggregation, GSPO, DPO, rejection sampling · C RLVR, judge calibration statistics, reward hacking taxonomy, shaping, process vs outcome rewards · D loss masking, re-tokenization drift and TITO, step-wise training, environment design, credit across turns · E async RL, train/inference mismatch, throughput arithmetic, parallelism and packing, LoRA vs full fine-tune · F difficulty filtering and curriculum, data over algorithm, contamination and splits, poisoned rewards · G Pass@k, intervals, agreement, sequential decisions. Part 0 to L1 to L3: Field 1 RL (MDPs and Bellman, value methods and the deadly triad, TRPO and natural gradient, exploration, credit assignment, POMDPs, imitation and offline RL, reward learning and overoptimization, multi-agent, model-based and search, robotics RL) · Field 2 post-training (the pipeline, preference optimization family, reasoning RL, reward models and judges, data, known phenomena, PEFT, infrastructure landscape, test-time compute, evaluation of post-training) · Field 3 agent evaluation (benchmark design, environments, grading, metrics, failure analysis, harness engineering, the benchmark landscape, evals as training signal).
**Do.** Cover the middle column; say the row; mark the level reached; the five steps on every row below its level. Order: A, B, D, E, C, F, G, then Field 1, 2, 3.
**Bot.** Tutor per row. Examiner per section ("Topics: Part 1 E rows"), whose closing table is the record. T9 threads roam across all of it.
**Done when.** No row below its level on an Examiner table; the three fields each reached L3 somewhere and L1 everywhere.

### T7. Trade-off drills, 15 · paper · 2 min each plus the key · Tue 22 (1 to 5), then five a day

**Read.** `tradeoff-drills.md` (the routine and the 15 prompts). Key: `tradeoff-drills-key.md`, opened only after the recording.
**Do.** Record 2 minutes per prompt with the routine: objective · constraint · two options · failure mode of each · the cheapest deciding experiment · the number or regime, or "no number in the sources". Open the key; score 0 to 2 on each of the six; misses go to T5 (the source) or a Tutor thread; one question-bank line per drill.
**Drive home.** The routine is the answer format for every unfamiliar trade-off. It ends with an experiment and a number. Silence is the only wrong answer.
**Bot.** 8.1 thread told "Give me five unfamiliar trade-offs outside this list: [paste the 15 titles]." Bar: the routine present in every answer; Strong on four of five.
**Done when.** 15 recordings with the routine in each; 10+ of 12 on the key for each.

### T8. Your evidence as mechanism · paper · 45 min · Mon 21

**Read.** `mercor-call-card.md` §4 DEPTH; the four `cv.md` lines: LIBERO-PRO, VLM judges, the BMO pipeline, Catan.
**Do.** For each, five lines: what was built · the mechanism that mattered · the number · what broke · what you would do next. Say each in under 60 s to a recorder. "VLAs yes, LLMs no."
**Drive home.** LIBERO-PRO: LoRA 15 to 21 vs full fine-tune 42 at matched hyperparameters, said as a finding not a verdict; video prior 42 → 35; too conservative 26 · VLM judges: what they saw, how they were checked · BMO: hundreds of synthesized inputs, deterministic, the quantified skew; 30,000 clients in 3 hours · Catan: rebuilt engine because bots peeked hidden state; save view, legal actions, tokens, action, message; rejection-SFT on winners → branched preference pairs → RL with an outcome verifier; VP delta is gameable.
**Bot.** 8.1 rule 6 does this ("explain my own résumé lines at mechanism depth"). Bar: Strong on all four.
**Done when.** Written; each under 60 s; Strong in a thread.

### T9. Fresh 8.1 threads · screen · 60 to 90 min, one most days, 8 total

**Bot.** Fresh thread, `format-analysis.md` §8.1 with `cv.md` pasted. Open with "start on these gaps: [the latest miss list from T1, T6, T7, or the question bank]".
**Do.** Two questions at a time; answer aloud by dictation; "explain" only after an attempt; 25 questions; at the end the ranked gap list goes into `question-bank.md` and the deepest-level table into the ledger log. New thread every time.
**Done when.** Three consecutive threads with no new gap and no topic where the interviewer reached the bottom of you before you reached the bottom of the topic.

### T10. Salman, Sat 26 14:00 PT · paper · 45 + 15

**Do.** Give Salman `format-analysis.md` §8.1 rules 1 to 5 and 7 as his script, plus your CV; he leans on RL fundamentals, reward design, imitation vs RL, your VLA and Catan work. He scores aloud on the two rubric lines: mechanism over terminology; reasoning through an unfamiliar trade-off. Debrief lines into the question bank.
**Done when.** Debrief in the question bank; ledger updated.

### T11. The numbers, cold · paper · 10 min daily from Sun 20

**Read.** `numbers.md`.
**Do.** Cover the right column; recite; score; misses again the next day.
**Done when.** 100% on two days.

### T12. Two questions for Charlie · paper · 10 min

**Read.** `numbers.md`, "Questions for Charlie".
**Do.** Pick two; say them aloud once. On the day, at 15:35 if he has not offered.
**Done when.** Two picked.

### T13. A small GRPO run on a rented GPU · dev · Wed 23 13:00 to 16:00 · gate: rehearsal 2 at 12+ and A6 averaging 12+

**Read.** `grpo-run.md`, all of it, the night before.
**Do.** Follow it step by step: rent, notebook, the 15-minute smoke test and its abort rule, max_steps at 300 or more, the curves, the trainer lines read against the deck items, the write-down, the 60-second account recorded.
**Drive home.** The four curves and what each means (reward, KL, completion length, the zero-advantage fraction); frac_reward_zero_std is the take-home's flat-group rule inside a real trainer; the advantage and loss lines are deck items 4 and 6; the first-person sentences you can now say.
**Done when.** One run; four curves seen; each loss line tied to a deck item; the 60-second account recorded.

---

Track done: T1 two clean passes; T9 three clean threads; T2 clean; T11 100%.
