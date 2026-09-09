# Mercor screen: Wed 2026-09-09, 13:00–13:20 ET, James Moore

Research Engineer, Post Training. Tracker #32. Full research (team table, sibling reqs, sources) is in git history at commit c173f31; this file is only what the call needs.

## 1. The call

- **What it is** (Aksh Garg, 08-28): "a 20 minute conversation with a Hiring Manager. This will be a technical conversation about your background & skillset." Not a coding round, not a recruiter gate. The take-home is the reason you are here; expect it to come up.
- **Who:** James Moore, research eng team under Aksh (Head of Evaluation; team of ~10 with Edward Hu, Charlie Ruan, "Victor"). James is MIT, recent; treat as a peer engineer, likely on the SkyRL work. Unverified. Ask what he works on in minute one.
- **Where:** https://meet.google.com/gzy-xivr-vyu · phone +1 724-565-4894, PIN 766693142. AI notetaker is on; leave it on.
- **Clock:** 0–2 pitch · 2–14 his questions (4 to 6, with follow-ups) · 14–18 your questions · 18–20 close. Every answer has a version under 90 seconds. Stop talking when the point is made.
- **Open:** "Hi James, good to meet you." Then "happy to start wherever you'd like." Never mention Charlie.
- **Close:** "Thanks, this was useful. I'm keen. What's the next step on your side and roughly when?"

## 2. Say this

Every fact below is in cv.md, article-digest.md, or your own approved wording. Add nothing.

**Pitch (≤90 s)**
> Two threads. By day I'm an AI research engineer at BMO's AI Centre of Excellence. My main result there: I found a systematic bias toward downplaying investment risk in a GenAI tool serving over $200B in wealth-management assets, then built a deterministic eval pipeline over hundreds of synthesized inputs so that class of failure gets caught at scale. Since then I've built a graph-based agent harness over client data, and I'm building evals for agents that reason over banking and insurance policy and RL environments for wealth-management agents.
> By night I co-founded Merlyn Labs, three of us doing robotics research. We placed 8th in Stanford's BEHAVIOR-1K Challenge, where I found that masking 60% of proprioception improved task success by up to 48%. We also wrote up why the published π0.5 checkpoint collapses on LIBERO-PRO position-swap: it's the finetuning recipe, not the architecture; a conservative recipe doubles success from 21% to 42%. I open-sourced a flow-matching VLA integration for RLinf so people can run RL on BEHAVIOR-1K. And as a side exploration I'm building agent evals on Settlers of Catan and Twilight Imperium: open action space plus negotiation. The Catan harness runs; LLM experiments have started.
> The thread is finding where a model actually fails and building the eval or the training fix that closes it. That's what your post-training and benchmarks work is.

**Why this team (45 s)**
> Aksh described it as studying capability limits, building benchmarks that probe them, and post-training to prove lift. That's the loop I already run, at smaller scale. The concrete reason is the 397B SkyRL write-up: harness fixes alone moved the 35B model about six points before any RL, and file-diff grading was much harder to overfit than final-response grading. That's my LIBERO-PRO lesson in your domain. I want to work where the data and the verifiers are the product.

**The gap (40 s). Use it the moment he asks about GRPO, RLVR, or "have you trained LLMs."**
> Straight answer: my RL post-training is on VLAs, not LLMs. I integrated a flow-matching VLA into RLinf and I'm building RL environments at BMO. I have not run GRPO or DAPO on a language model. I've read your recipe closely; what maps directly is the discipline: drive non-model error to zero before training, and don't trust a gain until an ablation isolates it. The trainer and inference plumbing is what I'd be learning here, and I'd rather say that than pretend.

**Hard trade-off (75 s)**
> On LIBERO-PRO I chose a conservative full finetune over LoRA even though LoRA was cheaper and the default. Position-swap went from the published 21% to 42% while matching standard LIBERO; LoRA sat at 15 to 21% at matched hyperparameters. The failure looked like trajectory memorization, so I wanted the update spread across the network, and I needed to rule out "it's the architecture." I swept both ways: batch 16 at LR 1e-6 falls back to 26%, and a frozen video-diffusion prior made it worse, 42 to 35. The trade was compute and time for a clean causal story.

**End-to-end project (60 s)**
> The BMO bias finding. A GenAI tool serving $200B+ in wealth-management assets had a systematic tendency to downplay investment risk. In wealth management that's a compliance problem. Spot checks never show "systematic," so I built a deterministic pipeline: hundreds of synthesized inputs, comparable outputs run to run, quantify the skew. That pipeline is now how misaligned outputs get detected at scale there.

**Verifier that's hard to game (75 s)**
> From what I've built: VLM judges at Merlyn that score rollouts into dense, context-dependent rewards. Principles I'd defend: grade state, not narration, which is your file-diff versus final-response finding. Dense per-criterion beats one terminal score, because a terminal score is the easiest thing to shortcut. Build the eval the way an adversary would, hold out a slice the policy never sees, and watch judge-versus-human agreement on it. I haven't run this at RLVR scale, so I'd want to see how your in-sandbox verifiers and rubric criteria are calibrated.

**First 90 days (45 s)**
> Own one benchmark or environment slice end to end: failure analysis on current outputs, categorize and quantify the modes, turn the top ones into verifier or data fixes. Reproduce the public 35B recipe on your infra before touching the trainer. Then propose one experiment testing whether a data or grading change moves Pass@1 more than an algorithm change, because your ablations say data dominates.

**Logistics (only if asked)**
> Yes to San Francisco, five days in person. Canadian citizen, TN-eligible, no sponsorship needed.
> Start date: ______________________ (write it before the call; options: "2 to 4 weeks from an offer, the M.Eng is course-based and I'd finish it remotely" / "…I'd put it on hold" / a month)

**Comp:** don't raise it. If asked: "Calibrating to market at this level. Your public research-eng reqs show $180K to $500K plus equity; where does this one sit?"

## 3. Depth cards (fill the blanks Tuesday, one line each, on paper)

He will pull on whatever you name. Format per card: what → how (3 sentences) → hardest part → number → where you stop. BMO cards end at your stop line: "That's as far as I can go on the internal detail."

1. **BMO eval pipeline.** What: hundreds of synthesized inputs through the tool, deterministic, flags misaligned outputs. How: [inputs synthesized how?] [deterministic means what: seeds, temp 0, fixed set?] [output scored how: rules, judge, sampled human review?]. Hardest: [ ]. Number: hundreds; $200B+.
2. **BMO graph agent harness.** What: orchestration harness with graph, analysis, and search tools over client data; multi-hop questions. Approved metric (Mubit CV, 09-03): one prompt found, sorted, and screened nearly 30,000 clients for defined-benefit plans in 3 hours, previously days of manual work. How: [what the graph holds] [how tools get chosen] [how an answer is checked]. Hardest: [ ].
3. **BMO RL environments** (in progress). How: [what an episode is] [where reward comes from] [what "specialized" means]. This is the card that maps onto their product; if early, say early and describe design.
4. **BMO agent provisioning** (in progress). What: stands up an agent from a written role and scope. How: [what the definition contains] [what gets generated] [how it's tested].
5. **RLinf integration.** What: contributed a flow-matching VLA integration so RL runs on BEHAVIOR-1K in OmniGibson. You did not build RLinf. How: [what you touched: policy wrapper, action sampling, env interface?] [what broke first] [how you verified it trains].
6. **Catan / Twilight Imperium.** What: side exploration; Catan engine plus agent loop running, LLM experiments started; TI tooling in progress and much harder (50-page rulebook, larger action space); inference cost is the constraint. Thesis: open action space plus negotiation is sparse, important territory. How: [how state and legal actions reach the agent] [how a turn or game is scored] [one honest sentence on what you've seen so far]. Never "results," never "published."
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
- 11:00–11:30: §2 scripts once, §6 once. Then nothing new.
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
