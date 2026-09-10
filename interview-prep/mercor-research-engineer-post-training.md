# Mercor screen: Wed 2026-09-09, 13:00–13:20 ET, James Moore

Research Engineer, Post Training. Tracker #32. Full research (team table, sibling reqs, sources) is in git history at commit c173f31; this file is only what the call needs.

## 1. The call

- **What it is** (Aksh Garg, 08-28): "a 20 minute conversation with a Hiring Manager. This will be a technical conversation about your background & skillset." Not a coding round, not a recruiter gate. The take-home is the reason you are here; expect it to come up.
- **Who:** James Moore, research eng team under Aksh (Head of Evaluation; team of ~10 with Edward Hu, Charlie Ruan, "Victor"). James is MIT, recent; treat as a peer engineer, likely on the SkyRL work. Unverified. Ask what he works on in minute one.
- **Where:** https://meet.google.com/gzy-xivr-vyu · phone +1 724-565-4894, PIN 766693142. AI notetaker is on; leave it on.
- **Clock:** 0–2 pitch · 2–14 his questions (4 to 6, with follow-ups) · 14–18 your questions · 18–20 close. Every answer has a version under 90 seconds. Stop talking when the point is made.
- **Open:** "Hi James, good to meet you." Then "happy to start wherever you'd like." Never mention Charlie.
- **Close:** "Thanks, this was useful. I'm keen. What's the next step on your side and roughly when?"

## 2. Answer plans

Not scripts. Each is: the point to land, the beats that carry it, why they matter to this listener, and options depending on where he steers. Every fact is in cv.md, article-digest.md, or your own approved wording. Add nothing. Cap: 90 seconds, then stop.

**"Walk me through your background" (first question, near-certain)**
- Point: I find where models fail and build the eval or training fix. Two threads that converge.
- Beats, in order: BMO bias finding ($200B+ AUM, systematic risk-downplaying) → the deterministic eval pipeline that catches it at scale → the graph agent harness (multi-hop over client data) → RL environments and policy evals now in progress. Then Merlyn: 8th at BEHAVIOR-1K, proprioceptive collapse (60% masked → up to +48%) → LIBERO-PRO: recipe, not architecture (21 → 42) → RLinf integration → Catan/TI side exploration (open action space plus negotiation; harness runs, LLM experiments started).
- Why: it is the scorecard line "does rigorous failure analysis and reward/eval design, with numbers." Every beat carries a number or an artifact.
- Options: if he is on the environments side, spend the last 20 seconds on Catan and the BMO RL envs. If he is on the training side, spend it on LIBERO-PRO and RLinf. If he cuts in early, stop and follow him; the rest comes out in follow-ups.
- Don't: the greeter robot; "published"; Merlyn as anything but three people, nights and weekends.

**"Why Mercor / why this team"**
- Point: their loop (probe capability limits → build benchmarks → post-train to prove lift) is the loop you already run, at smaller scale.
- Beats: Aksh's three-part description → the 397B post: harness fixes gave the 35B ~6 points before any RL; file-diff grading was much harder to overfit → same lesson as LIBERO-PRO (a published number that was a recipe artifact) → want to work where data and verifiers are the product.
- Why: proves you read their work and can say what in it mattered, which is the second scorecard line.
- Options: if he wrote or worked on the post, ask which of the de-risking steps he owned before you say your take. If he asks "why not a lab," say the take-home-first process and a small team that owns the full stack.

**"Tell me about the take-home"**
- Point: what you decided, what you skipped, what you would do next. Confidence comes from naming the weak spot yourself.
- Beats (fill from your Tuesday re-read): problem in 2 lines → decision 1 and the alternative you rejected → decision 2 → what you skipped on purpose → one more day → the weakest part.
- Why: Aksh's email ties this round to it: "how you think and solve open-ended problems."
- Options: if he pokes the weak spot, agree and say what you'd change; do not defend it. If he asks what the grader wanted, give your honest guess.

**"Experience with RL post-training / GRPO / have you trained LLMs" (the gap)**
- Point: VLAs yes, LLMs no. Said in the first sentence.
- Beats: RLinf integration (flow-matching VLA, RL on BEHAVIOR-1K) → BMO RL environments in progress → have not run GRPO or DAPO on a language model → read their recipe; what transfers is the discipline: non-model error to zero before training, no gain trusted without an ablation → the trainer and inference plumbing is what you'd learn here.
- Why: the third scorecard line, "honest about the gap, and it's learnable." Bluffing here is the one way to lose the call.
- Options: if he goes deeper, use §5: GRPO drops the critic and uses group-normalized advantage; DAPO's four fixes; why Mercor found prompt_mean beat token_mean. Stop where your knowledge stops: "I don't know that; here's what I'd check."

**"Hard technical trade-off"**
- Point: chose conservative full finetune over LoRA on LIBERO-PRO; paid compute and time for a clean causal story.
- Beats: published π0.5 collapses 96 → 21 on position-swap → hypothesis: trajectory memorization → conservative FFT (batch 64, LR 1e-5) → 42% while matching standard LIBERO → LoRA 15 to 21 at matched hparams → frozen video prior made it worse (42 → 35) → bounded: batch 16 / LR 1e-6 → 26%.
- Why: shows ablation discipline, the thing their post says mattered most.
- Options: if he asks what you'd do differently, have one line ready (fill Tuesday). If he asks about CoRL, "we wrote it up; rejected at CoRL; the result stands."
- Alternate story if he wants a systems trade-off instead: the BMO eval pipeline: determinism versus coverage (fill from your card).

**"End-to-end project you drove"**
- Point: the BMO bias finding, from suspicion to a pipeline that now runs at scale.
- Beats: the tool and its stakes ($200B+ AUM, compliance) → why spot checks can't show "systematic" → hundreds of synthesized inputs, deterministic → quantified skew → now how misaligned outputs get detected.
- Why: ownership signal; Blind-reported HM theme.
- Options: the graph harness is the alternate: ground-up build, now a multi-agent data-layer; the 30,000-client screen in 3 hours (only inside your BMO stop line). Pick whichever he has not already heard.

**"How would you design a verifier that's hard to game"**
- Point: grade state, not narration; dense over terminal; build it as the adversary.
- Beats: your VLM judges at Merlyn (dense, context-dependent rewards) → their file-diff finding is the same principle → per-criterion beats one score → held-out slice, judge-vs-human agreement → what you haven't done: judge calibration at RLVR scale.
- Why: JD line "verifiers calibrated and hard to game"; their eval-systems post's first constraint.
- Options: if he asks for failure patterns, the four in §5. If he asks about LLM judges specifically, say what you've built is VLM judges for rollouts, and ask how they calibrate rubric criteria against experts.

**"First 90 days"**
- Beats: own one benchmark or environment slice → failure analysis, categorize, quantify → top modes into verifier or data fixes → reproduce the public 35B recipe on their infra before touching the trainer → one experiment: does a data or grading change move Pass@1 more than an algorithm change.
- Why: shows you'd start where their own post says the leverage is.

**Logistics (only if asked)**
- SF, five days: yes. Canadian citizen, TN-eligible, no sponsorship needed.
- Start date: ______________________ (decide before the call: finish the M.Eng remotely / put it on hold / a month).
- Comp: don't raise it. If asked: "calibrating to market at this level; your public research-eng reqs show $180K to $500K plus equity; where does this one sit?"

## 3. Depth cards (fill the blanks Tuesday, one line each, on paper)

He will pull on whatever you name. Format per card: what → how (3 sentences) → hardest part → number → where you stop. BMO cards end at your stop line: "That's as far as I can go on the internal detail."

1. **BMO eval pipeline.** What: hundreds of synthesized inputs through the tool, deterministic, flags misaligned outputs. How: [inputs synthesized how?] [deterministic means what: seeds, temp 0, fixed set?] [output scored how: rules, judge, sampled human review?]. Hardest: [ ]. Number: hundreds; $200B+.
2. **BMO graph agent harness.** What: orchestration harness with graph, analysis, and search tools over client data; multi-hop questions. Approved metric (Mubit CV, 09-03): one prompt found, sorted, and screened nearly 30,000 clients for defined-benefit plans in 3 hours, previously days of manual work. How: [what the graph holds] [how tools get chosen] [how an answer is checked]. Hardest: [ ].
3. **BMO RL environments** (in progress). How: [what an episode is] [where reward comes from] [what "specialized" means]. This is the card that maps onto their product; if early, say early and describe design.
4. **BMO agent provisioning** (in progress). What: stands up an agent from a written role and scope. How: [what the definition contains] [what gets generated] [how it's tested].
5. **RLinf integration.** What: contributed a flow-matching VLA integration so RL runs on BEHAVIOR-1K in OmniGibson. You did not build RLinf. How: [what you touched: policy wrapper, action sampling, env interface?] [what broke first] [how you verified it trains].
6. **Catan agent environment** (Merlyn; your facts, 09-08). What: started on Catanatron, the open-source engine prior papers and scores were built on; found its agents scored future moves by peeking at hidden game state, so the published numbers leak information. Rebuilt the engine natively. Agents get a view object: the full game transcript (initial board, every action, every negotiation message) plus the legal-action set plus a negotiation action, and choose. Every chosen action and reasoning trace is saved for later training. Games have been played; no numbers yet; compute is the constraint. Next: run many models, leaderboard, post-train on the best trajectories. Two goals: strong Catan agents (RL environment) and watching strategy and negotiation behavior (agent eval, alignment). TI tooling in progress and much harder; mention only if asked.
   - Tell it in order, as you told me: wanted environments for agents, chose Catan, goal is strong Catan bots. Started on Catanatron. Figured out its agents score future moves with hidden state; didn't want that, so rebuilt a native engine. How the view works. Bots play full games and have won some. Next: leaderboard, post-train. Not an audit of someone else's work; a build that hit a problem and fixed it.
   - If asked what you'd train on and how (a defensible answer, in order of cheapness): save per turn the exact view the agent saw, the legal-action set, the raw completion (tokens, not just text), the chosen action, and any message; per game the outcome, seat, seed, and model. Step 1: rejection-sampling SFT on turns from winning games of the top leaderboard models (cheap, no RL infra). Step 2: because every transcript replays to any state, branch from saved states, sample several continuations, roll out, and build preference pairs (DPO) or value estimates from the outcomes. Step 3: RL with the game outcome as the verifier; sparse and long-horizon, so shape carefully (VP delta is gameable). Caveat you can say out loud: API models give text, not tokens; for post-training you'd run open-weight models so the trajectories carry exact tokens, which is Mercor's TITO point. Negotiation: the message log lets you score promises kept vs broken with a judge, separately from win rate.
7. **BEHAVIOR / LIBERO-PRO mechanism lines:** [how you measured proprioceptive collapse] [how you set up the position-swap eval].

Likely order: 1 or 2 → 6 → the gap → 5.

## 4. Their work (know this cold)

**397B SkyRL write-up, 2026-09-01** (mercor.com/blog/training-frontier-knowledge-work-agents-a-397b-rl-training-guide-with-skyrl/; recipe: github.com/Mercor-Intelligence/ApexAgents-SkyRL-Recipe). Read the post once, whole, 45 min.
- Trained Qwen3.6-35B-A3B and Qwen3.5-397B-A17B with RL on 1,928 APEX-Agents tasks (consulting, banking, law); 480 held-out eval tasks.
- Loop: SkyRL fully-async training, in-flight weight updates, vLLM inference, Megatron training. Harbor runs each trial and the verifier in-sandbox (Modal); tasks are Docker images exposing MCP tools (docs, PDF, email, chat). Reward flows back with the trajectory.
- De-risk before training: (1) run the whole train set at RL concurrency and drive non-model errors to ~0 (timeouts, judge rate limits, MCP client isolation); (2) compare trainer vs inference logprobs (under 0.03 is healthy; this caught a vLLM CPU-offload + GDN + in-flight-update bug); (3) overfit a few tasks first: file-diff-graded tasks were much harder to overfit than final-response-graded ones.
- Results: 397B Pass@1 16.11 → 27.29. 35B: harness fixes alone 22.74 → 28.69 with zero training; RL added ~10 to 12 more.
- Ablations (35B): prompt_mean over token_mean +3.9 (2k to 128k-token trajectories, token_mean let long ones dominate); "wrap up" nudge at 20% context left +3.0; DPPO vs GLM-5 loss within noise; overlong filtering and length penalty neutral or negative.
- Lesson in their words: algorithm choices mattered less than the data. Generalized to a different harness (OpenCode) and Terminal-Bench 2.1; no regression on HLE/GPQA.

**Self-check (from memory):** two models and task counts · three de-risk steps and what each caught · 397B before/after · harness-only gain on 35B · which aggregation won and why · which grading resisted overfitting.

**APEX-Agents, 2026-01-21** (mercor.com/blog/introducing-apex-agents/): long, cross-application office tasks in IB, consulting, corporate law; expert-staged datarooms (Google Workspace, Box); 1 to 10 pass/fail expert criteria per task; frontier models under 25% Pass@1, ~40% at 8 tries. Archipelago is the open harness; Harbor runs trials and verifiers.

**Agent Eval Systems, 2026-06-30** (mercor.com/blog/agent-eval-systems/): verifier = script or agent grading trajectory + output, score in [0,1] plus explanation; weighted verifiers; three constraints: resist gaming, coverage matches real work, domain expertise sets the bar.

**Their words:** environments, verifiers, harness, trajectory, golden sets, loss analysis, Pass@1, APEX, Harbor, SkyRL, "evals are the new PRD."

## 5. RL post-training, conversation depth

You are not implementing these. You are following a 5-minute exchange without bluffing.

- **RLVR** (Tülu 3, arxiv.org/abs/2411.15124, "Verifiable Rewards" section): reward from a deterministic checker (answer match, tests pass, file state), not a learned reward model. Risk moves onto the verifier: anything gameable gets gamed. That is Mercor's whole thesis.
- **GRPO** (DeepSeekMath, arxiv.org/abs/2402.03300, §4.1): drops PPO's critic (a second model the size of the policy). Sample G answers per prompt; advantage = (reward − group mean) / group std, applied to every token of that answer. KL to the reference model added straight into the loss. Clipped ratio as in PPO.
- **DAPO** (arxiv.org/abs/2503.14476, §3): four fixes on top of GRPO. Clip-Higher (bigger upper clip so rare tokens can grow, avoids entropy collapse). Dynamic Sampling (drop prompts where all samples are right or all wrong: zero gradient). Token-level loss (long sequences count more). Overlong reward shaping (soft length penalty instead of hard zero). Note the tension: DAPO says token-level; Mercor found token_mean hurt on 2k to 128k agent trajectories and prompt_mean won +3.9. Different regime. Good thing to say aloud.
- **DPPO / GLM-5 loss, only as Mercor's post defines them:** both use rollout logprobs in the loss to correct train/inference mismatch and async staleness. DPPO masks tokens where train and inference logprobs diverge (binary TV-divergence approximation); GLM-5 loss truncates the importance ratio. Within noise. If asked what DPPO stands for: "I only know it from your post's description."
- **Reward hacking, four patterns and fixes:** grading narration instead of state → diff the artifact. One terminal score → dense per-criterion rewards. LLM judge drift or exploitation → calibrate against human labels on a held-out slice, track agreement. Train/eval overlap → held-out worlds, not just tasks. You have built the first two (Merlyn VLM judges, BMO pipeline). Say you have not run judge calibration at scale.

**Self-check:** what GRPO removes and why · the advantage formula · DAPO's four names · why prompt_mean beat token_mean for Mercor · two gaming patterns with fixes.

## 6. Numbers (cover, recite, 100%)

| Cue | Number |
|---|---|
| Wealth tool AUM | $200B+ |
| Eval inputs | hundreds |
| Graph harness screen | nearly 30,000 clients · 3 hours · previously days |
| BEHAVIOR | 8th · 22 of 50 task types trained, 50 scored · 10,000+ demos |
| Proprioception masking | 60% masked → up to +48% |
| Chunking vs ensembling · long-tail | 3x · doubled |
| π0.5 LIBERO → LIBERO-PRO swap | 96% → 21% |
| Conservative FFT | batch 64, LR 1e-5, stable 8k–27k steps → 42% |
| LoRA · video prior · too-conservative | 15–21% · 42→35% · 26% |
| Merlyn | 3 people, nights and weekends |
| Mercor 397B · 35B harness-only | 16.11→27.29 · 22.74→28.69 |
| Mercor knobs · tasks | prompt_mean +3.9, nudge +3.0 · 1,928 / 480 |
| Research-eng band | $180K–$500K + equity |

## 7. Ask them (pick 2 to 3)

1. "Harness fixes alone moved the 35B about six points before any RL. How much of the team's time goes into harness and verifier correctness versus the training loop now?"
2. "File-diff grading was much harder to overfit. Is that becoming a design rule for new APEX tasks, and who owns that call?"
3. "There are sibling reqs on the board: Benchmarking, Real Environments, Environments/Data/Post-Training. How does the Post Training req split from those, and what does a normal week look like, Saturdays included?"
- Backup, if he is on the SkyRL work: "What surprised you most in the de-risking phase before the 397B run?"

## 8. Don't

Claim LLM post-training runs · say "published" or "under review" (say "we wrote a paper; it was rejected at CoRL; the result stands") · mention Charlie · raise comp · mention the greeter robot · say "US-authorized" · conflate LessWrong (BEHAVIOR) with the LIBERO-PRO paper · describe Merlyn as anything beyond three people, nights and weekends · fill silence.

## 9. Tuesday night and Wednesday

**Tuesday (in order; stop when time runs out):**
1. Write the start-date sentence (§2) and your BMO stop line. 10 min.
2. Read the pitch twice, record it on your phone, timed, under 90 s. 15 min.
3. Re-read your Litmus submission. Write: the problem in 5 lines · three decisions with the alternative you rejected · what you skipped · what you'd do with one more day · the weakest part. Say it aloud once, 90 s. 45 min.
4. Read the 397B post once, whole. Do the §4 self-check from memory. 60 min.
5. Fill the §3 card blanks, one line each. Say cards 1, 2, 6 aloud, timed. 30 min.
6. §5 once, then its self-check. 20 min.
7. §6 cover-and-recite, two passes. 10 min.
8. Join the Meet link from the laptop and desk you'll use; check camera, headset, background. 5 min.

**Wednesday:**
- 11:00–11:30: §2 plans once, §6 once. Then nothing new.
- 12:30: laptop on charger, phone silent, Meet open, paper beside keyboard: §7 questions, §6 numbers, start-date sentence, stop line. Water.
- 12:45: read §10.
- 12:57: join, camera on.
- During: headline first, then reasons. Don't know something: "I don't know that; here's what I'd check." If he goes deep on LLM RL: the gap script, then §5 vocabulary, stop where your knowledge stops. At 13:14 if he hasn't offered: "Can I ask you a couple of things about the team?"
- 13:20–13:50: write down every question in his words and what you answered. Run `/career-ops interview/debrief` here and paste them.

## 10. Twelve-forty-five card

**Anchor:** I find where models actually fail and build the eval or the training fix that closes the gap: bias in a $200B AUM GenAI tool, proprioceptive collapse in VLAs, a published VLA baseline that was a recipe artifact.

**Leave him with:** (1) real failure analysis and reward/verifier design, with exact numbers; (2) I read the 397B write-up and got it: harness before training, file-diff grading, data over algorithm knobs; (3) the gap is LLM-scale RL infra, said plainly, learnable.

**First sentence if he opens with "tell me about yourself":** "Two threads: enterprise AI evals at BMO by day, robotics research at Merlyn Labs by night, and they converge on finding where models fail."

**Start date:** ______________________

**Questions:** harness vs training loop · file-diff as design rule · how this req splits from the siblings, and the week.

## Round 1 Debrief — 2026-09-09 (screen, James Moore)

**Interviewer:** James Moore (HM screen, "First Screen (Eng)")
**Round type:** hiring-manager technical background screen, 20 min, Google Meet
**Outcome:** moved forward (onsite invite 2026-09-10 00:21 ET from Kristen O'Donnell)
**input_source:** recall (Shayan, 2026-09-10, morning after; no transcript)

### Questions Asked (in order)
1. "I've looked at your background, but I want to hear it in your words."
2. (James described the team's work, then:) "What is GRPO? How does it differ from other methods?"
3. "Imagine you have some model and some thing you need it to do, call it Humanity's Last Exam. How do you go about designing an environment for it?"
4. "One of the interesting things is masking. Say you have these APIs we call for RL: the model calls tools, the tools output results. How would you go about masking certain parts of outputs for RL?" (Shayan first said he does not know those APIs and that RL is newer in his work; James accepted that and framed the question.)
5. Shayan's questions: James's journey to Mercor, day to day, what he finds interesting.

### Assessment

**Q1 Background** — ✅ Strong
- What was said: McMaster → UofT master's → BMO AI CoE (agent evaluations for a tool serving $200B+ AUM; caught systematic bias toward downplaying investment risk; building the agentic data layer replacing bank workflows; now RL environments for financial agents) → Merlyn Labs (BEHAVIOR Challenge 8th, VLAs in OmniGibson; π0.5 baseline calibration + RL on top; Catan agents with an expanded negotiation space, trajectories saved for later retraining) → through-line: "I find out how systems break, build the tests to catch it, and create the fixes."
- What landed: the order (education → BMO → Merlyn → through-line) and the through-line itself. The bias catch is the strongest single proof point and it came first.
- What was missing: numbers. Only $200B got said; 30,000 clients / 3 hours, 60% masked → +48%, 21 → 42 on LIBERO-PRO all stayed in the prep doc. Also, as recounted, the degree line came out as "bachelor of science in AI"; `cv.md` says B.Eng Engineering Physics (McMaster) and M.Eng AI & Robotics (UofT, expected Apr 2027). Confirm what was actually said; the onsite panel will have the CV in front of them.

**Q2 GRPO vs other methods** — 🟡 Solid, one real error
- What was said: PPO uses several models, one being a critic that "verifies the outputs and gives the reward"; GRPO removes the critic, samples 8 or 16 outputs per prompt, averages them, and uses that to update the tokens. Then "everything has trade-offs" chat.
- What landed: the structural difference (critic gone, group of samples as the baseline) is correct. Sample counts in the right range.
- What was wrong: the critic does not give the reward. The critic (value model) estimates expected return for a state so the advantage is less noisy; the score comes from the reward model (RLHF) or the verifier (RLVR), and GRPO keeps that part. Saying "critic = reward" in front of a post-training team is the kind of slip that gets probed at the onsite. Primer §6 and §8 have this exactly.
- What was imprecise: "average those and update the tokens." The mechanism is A_i = (r_i − mean(r)) / std(r) over the group, applied to every token of sample i, inside the PPO clipped-ratio objective, with the KL to the reference model added directly to the loss.
- Trade-offs that were available and not used: G rollouts per prompt is the price of no critic; all-same-reward groups give zero gradient (DAPO dynamic sampling); token_mean vs prompt_mean aggregation, where Mercor's own 09-01 post found prompt_mean +3.9 on long agent trajectories. That last one was in §4 of this file and was the obvious thing to say to this team.
- Correct/complete answer: primer §8 "Plain" + "How it works" paragraphs, then the Mercor aggregation point.

**Q3 Design an environment for a Humanity's Last Exam-style target** — 🔴 Gap
- What was said: assume the model is pretrained; first question is how to model reward; look at what HLE is and what the success criteria are; then build plumbing; ideal workflow is to throw the model into a simple environment with GRPO and see how the harness breaks. Shayan's own read: fumbled, no clear answer.
- What landed: "define success criteria first" and "run it early to see how it breaks" are the right instincts, and match Mercor's de-risk-before-training philosophy.
- What was missing: everything concrete. HLE is a verifiable benchmark: 2,500 expert-written questions, roughly 80% exact-match short answer and the rest multiple choice, graded by an LLM equality checker against a reference answer (sources below). So the reward is not the hard problem; this is RLVR with a rule-based or judge-based verifier, no learned reward model. The hard problems are:
  1. **Prompt set.** You cannot train on the eval. You need training questions with the same shape (closed-form, verifiable, expert-level, many domains): buy or author them, or synthesize and filter. Filter by difficulty: keep prompts where the base model's pass rate over G samples is strictly between 0 and 1, because all-correct or all-wrong groups produce zero advantage under GRPO.
  2. **Verifier.** Answer extraction from a fixed final-answer format; exact match with numeric tolerance; an LLM equality judge for free-form answers, calibrated against human labels on a held-out slice; hedged or multiple final answers scored 0.
  3. **Harness.** Rollout loop (SkyRL-style: env.step(action) returns observations, reward, done), tool access if the target allows search or code (which makes it multi-turn and brings in loss masking, Q4), length budget, held-out eval split, contamination check against HLE itself.
  4. **De-risk before training**, in Mercor's own order from §4: run the whole train set at RL concurrency and drive non-model errors to ~0; compare trainer vs inference logprobs; overfit a handful of prompts first.
  5. **How it breaks:** hedging, judge leniency exploitation, length blow-up, format gaming, train/eval overlap.
- Correct/complete answer: state the assumption "verifiable target → RLVR," then walk prompt set → verifier → harness → de-risk → failure modes. Two minutes, structured. Practise it aloud on three different targets before the onsite (HLE, an APEX-style banking task, a Catan negotiation).
- Why 🔴: this is the team's core job and the answer stayed abstract. It is fully closable; the material is already in §4/§5 and the primer.

**Q4 Masking for multi-turn tool-use RL** — 🟡 Half right, then a conceptual slip
- What was said: (a) mask tool outputs; you want what the model did, not what the tools returned. (b) "I'd also be interested in masking parts of the model's final output," explained after James asked what he meant: the model emits an artifact (a filled defined-benefit PDF) plus prose and reasoning traces; the prose might be gaming the verifier; care about the end result, not what it says it gave you; related to hedging/scattergunning.
- What landed: (a) is the core answer and it was fast. Tool and environment output tokens were not generated by the policy, so they carry no policy gradient signal; training on them teaches the model to predict tool output. In SkyRL terms, the observations that env.step() returns are exactly the tokens that get excluded.
- What was wrong: (b) conflates two different knobs. The **loss mask** decides which tokens receive gradient; the **reward function** decides what gets scored. Masking the model's own reasoning or prose out of the loss does not reduce gaming; it just stops the model learning to produce those tokens well. What Shayan was reaching for is a reward-side statement: the verifier scores only the artifact or the resulting state, never the narration (Mercor's post: file-diff-graded tasks were much harder to overfit than final-response-graded ones), and a single-final-answer rule so hedging scores 0. There is also a real argument for keeping chain-of-thought out of the reward model's input so the reasoning stays honest; that is again a reward-input choice, not a loss mask.
- Interviewer signal: James's "what do you mean by that?" was confusion, not interest. Read it as a pushback signal.
- Correct/complete answer: "Loss mask: everything the policy did not generate (tool returns, environment observations, injected user turns) is masked out; all policy tokens, reasoning included, stay in. Reward: computed from the artifact or state, not the prose; hedging gets zero. Those are two different mechanisms and I'd keep them separate."
- Also owed: Shayan told James he does not know "these APIs." Before the onsite, know the SkyRL environment interface cold: `BaseTextEnv.step(action: str) -> BaseTextEnvStepOutput` with `observations` (new messages), `reward` (float), `done`, `metadata` (docs.skyrl.ai, checked 2026-09-10). Write a toy env against it.

**Q5 Shayan's questions** — 🟡
- Journey / day to day / what interests you. Fine, generic. §7 of this file had sharper ones (aggregation finding, what the 480 held-out tasks look like, sibling reqs). Use those at the onsite.

### Gaps to Close Before the Onsite (priority order)
1. **Environment-design walkthrough** (Q3). Structure: assumption → prompt set → verifier → harness → de-risk → failure modes. Rehearse on three targets, timed at two minutes each.
2. **Critic vs reward, and the GRPO mechanism** (Q2). Say the advantage formula aloud. Know what the critic estimated and why the group mean replaces it. Bring the prompt_mean vs token_mean finding unprompted.
3. **Loss mask vs reward function** (Q4). One sentence each, never blended.
4. **SkyRL env interface** (Q4 follow-up). Read the new-environment tutorial, write and run a toy env. Charlie Ruan is on the team; expect this to come up.
5. **Numbers** (Q1). §6 of this file. They did not get said once in 20 minutes.
6. **Degree line** (Q1). Match `cv.md` exactly.

### Next Round
**Format:** in-person onsite, 181 Fremont St, San Francisco. ~7 hours, starts ~10AM PT, Mon–Fri. Source: Kristen O'Donnell email 2026-09-10 (thread `1a0898cae8ce4775`), subject "Shayan Shakeri - Mercor Onsite". Schedule "typically books ~two weeks out, but we can often move sooner."
**Interviewers:** unknown. Kristen: "Once we lock a date, I'll follow up shortly with scheduling details and next steps."
**Scheduling:** Ashby self-serve date picker: https://you.ashbyhq.com/meeting/28b02ec3-e35f-4eb7-b3ba-2fefa6bd414a/ (Shayan submits; nothing booked by the agent). Full-day blocks requested.
**Open question from Kristen:** "Do you have any upcoming deadlines (offers, interviews, travel) we should know about?" Nothing in the tracker qualifies as a live deadline (BMO offer deadline 09-03 outcome unrecorded; TMX letter unanswered; Mubit #61 Applied, no reply). Shayan decides what to disclose.
**Likely sessions, all [inferred] from a 7-hour research-engineering onsite and what the screen probed:** a coding round (Python, data/harness work); an environment- or verifier-design session (Q3 again, deeper); a systems conversation around the async training loop (vLLM inference, Megatron training, trainer-vs-inference logprob drift); a Litmus take-home walkthrough; a behavioral/values round; a founder or HM conversation with the start-date question (D1).
**Priority prep:** items 1–4 above, then run `interview/plan` once the date is locked.

### Process Intel
**Comp discussed:** no (per Shayan's recount)
**Timeline:** onsite invite arrived ~11 hours after the screen; onsite ~2 weeks out → likely week of 09-21 or 09-28
**Other candidates:** "some candidates finish early depending on fit" (onsite is adaptive)
**Next steps:** Shayan picks dates in Ashby → Kristen sends scheduling details. Travel Toronto→SF is not mentioned in the email; ask her whether Mercor books or reimburses it.
**Still uncaptured:** Litmus take-home content (08-27). Capture before the onsite; it will be discussed.

Sources checked 2026-09-10 for the HLE facts: [arXiv 2501.14249](https://arxiv.org/pdf/2501.14249), [Scale leaderboard](https://labs.scale.com/leaderboard/humanitys_last_exam), [Epoch AI](https://epoch.ai/benchmarks/hle), [Artificial Analysis](https://artificialanalysis.ai/evaluations/humanitys-last-exam). SkyRL interface: [docs.skyrl.ai new-environment tutorial](https://docs.skyrl.ai/docs/tutorials/new_env).
