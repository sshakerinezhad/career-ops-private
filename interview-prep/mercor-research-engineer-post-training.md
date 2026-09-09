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
   - Say it as: "it's a side project; the interesting part so far is that the prior engine's results were contaminated." That is the LIBERO-PRO pattern and their non-model-error lesson in one story.
   - If asked what you'd train: [you: SFT on the best trajectories? RL against the engine? what reward?]. If asked how you'd score negotiation: [you].
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
