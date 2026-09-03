# Interview Intel: Mercor — Research Engineer, Post Training

**URL:** N/A for the exact req (recruiter/assessment-sourced; no public "Research Engineer, Post Training" posting on the Ashby board as of 2026-09-03). Closest public sibling: https://jobs.ashbyhq.com/mercor/97b8c17e-e438-4b61-bab1-9ae18e2c3f34 (Research Engineer - Environments, Data and Post-Training, $180K–$500K + equity, SF in-person 5 days).
**Legitimacy:** unknown (no evaluation report; process is real: Ashby-scheduled, mercor.com senders, Litmus take-home completed)
**Report:** N/A (tracker #32, backfilled 2026-09-02, no evaluation run)
**Researched:** 2026-09-03
**Sources:** 0 Glassdoor reviews read directly (403 from this box; 3.2/5 difficulty figure is secondhand via techinterview.org), 0 Blind posts read directly (403; Blind claims are secondhand via techinterview.org), 5 Gmail threads (primary), Mercor Ashby job-board API (primary), 6 Mercor blog posts, 1 GitHub README, ~10 web searches
**Audiences covered:** hiring-manager (primary), peer-tech (secondary), recruiter-screen (logistics only; no recruiter round exists in this process so far)
**JD source:** sibling req fetched from the Ashby posting API, not the exact req. All JD-derived questions are tagged `[inferred from JD]`.

---

## 0. What is actually happening (from Gmail, primary source)

| Date | Event | Source |
|---|---|---|
| 2026-08-21 | Aksh Garg (aksh@mercor.com, cc Ally Sollis, Kristen O'Donnell): "I run research engineering at Mercor and work closely with Edward Hu (inventor of LoRA), Charlie (SkyRL), Victor (Tau-bench) on benchmarks & post-training." Team focus: "1) studying the limits of model capabilities, 2) defining frontier benchmarks to probe and improve them, and 3) post-training on our data to prove model lift." Also: "working towards post-training a large OSS model to reach fable level performance", "nine-figure compute budget", "largest environment dataset in the world", "own problems across the entire stack." Next step: 75-min Litmus take-home, AI tools allowed. | thread `Congrats Shayan!` |
| 2026-08-27 | Litmus "Post-train" assessment submitted (deadline 11:59 PM PT). | Litmus receipt |
| 2026-08-28 | Aksh: "We enjoyed learning more about how you think and solve open-ended problems." Next: **"a 20 minute conversation with a Hiring Manager. This will be a technical conversation about your background & skillset. You'll also get an opportunity to learn more about the team."** Plus an Ashby questionnaire (Shayan completed it 08-31; content not visible from here). | thread `Congratulations!` |
| 2026-08-30 | Ally Sollis confirmation: "First Screen (Eng) - Charlie Ruan", Wed 2026-09-09 1:00–1:20 PM EDT, Google Meet https://meet.google.com/gzy-xivr-vyu | thread `Interview Confirmation` |
| 2026-08-31 | Shayan replied to Ally: "look forward to speaking with Charlie." | sent mail |
| 2026-09-01 | **Updated invite: interviewer is now James Moore** (description changed). AI Notetaker records and transcribes; opt-out link in the invite; "Opting out will not impact your candidacy." Dial-in: +1 724-565-4894 PIN 766693142. Reschedule link: https://you.ashbyhq.com/meeting/85fd1bb6-0ab5-45bf-96be-ea10a82c140b/ | updated invite |

**Read:** Aksh's 08-28 email defines this round. It is a 20-minute *technical* background conversation run by someone on the engineering side, not a recruiter fit-gate and not a coding round. Twenty minutes means roughly: 2 min intro, 12–14 min on your background and the take-home, 3–5 min for your questions. Every answer needs a 60–90 second version.

**Interviewer swap:** the name on the invite is James Moore, not Charlie Ruan. Open with "Hi James", do not mention the earlier name. If Charlie joins instead, nothing changes.

---

## 1. Research

### The team (who Aksh named, and what is public)

| Person | What is verifiable | Source |
|---|---|---|
| **Aksh Garg** | Runs research engineering (his words). Public title "Head of Evaluation"; team listed as ~10 people; background Point72 quant research, Tesla ML/CV, D.E. Shaw corp dev, Stanford AI Lab. He is the decision-maker for this req (he sent both process emails). | Aksh's email; theorg.com/org/mercor/org-chart/aksh-garg; linkedin.com/in/aksh-garg |
| **Edward Hu** | LoRA creator, core contributor to OpenAI o1, PhD with Bengio (Mila). Brendan Foody (CEO) posted that Edward joined to "lead model training & research." Co-author on the 09-01 397B RL blog. | x.com/BrendanFoody/status/2095008689912795360; edwardjhu.com/about |
| **Charlie Ruan** | Berkeley Sky Lab PhD student (Ion Stoica), builds SkyRL; WebLLM lead, MLC-LLM, XGrammar. First author on the 09-01 397B RL blog. Was the original interviewer on this slot. | charlieruan.com; Mercor blog 2026-09-01 |
| **Victor (Barres)** | Aksh says "Tau-bench". Victor Barres is a tau-bench / tau2-bench / tau-Knowledge / tau-Voice author (Sierra Research). No public confirmation he is at Mercor beyond Aksh's email. Treat as "Aksh said" only. | github.com/sierra-research/tau2-bench; Aksh's email |
| **James Moore** (your interviewer) | **Thin.** Search snippets only: LinkedIn profile lists Mercor, MIT, Los Gatos; snippets mention MIT Sloan research assistant (early 2023) and course staff for MIT 6.380 Inference (Sep 2024–May 2025). Profile page itself is blocked from this box (HTTP 999). Read: likely a recent MIT grad on the research-eng team, so expect a **peer-level technical conversation**, not a manager-style leadership screen. Unverified; confirm by asking him what he works on in the first minute. | linkedin.com/in/james-moore-a931811b7 (snippet only) |

### What the team shipped in the last 12 months (this is the vocabulary)

| Date | Artifact | What matters for you |
|---|---|---|
| **2026-09-01** | **"Training frontier knowledge work agents: A 397B RL training guide with SkyRL"** (Ruan, Hegde, Tang, Griggs, Park, Baraya, Moritz, Haines, Hu et al.). Post-trained Qwen3.6-35B-A3B and Qwen3.5-397B-A17B on 1,928 APEX-Agents tasks. SkyRL fully-async training, in-flight weight updates, vLLM inference + Megatron training. Harbor runs the task lifecycle, Modal sandboxes, tasks ship as Docker images with MCP servers (Docs/PDF/Email/Chat). Verifier runs in-sandbox; reward flows back with the trajectory. 397B Pass@1 16.11% → 27.29%. 35B: harness fixes alone took base 22.74% → 28.69% with zero training; RL added ~10–12 points. Ablations: prompt_mean vs token_mean +3.9, a context "nudge" in the harness +3.0, DPPO vs GLM-5 loss within noise, overlong filtering / adaptive length penalty neutral or negative. Lessons quoted: "algorithm choices mattered less than the data"; drive "non-model error rate as close to zero as possible before training"; a trainer/inference logprob mismatch exposed a vLLM CPU-offload + GDN + in-flight-update correctness bug; tasks graded on **file diffs** were much harder to overfit than tasks graded on the final response. TITO (token-in-token-out) exact token accounting via a rewritten harness on `/completions`. Next: APEX-Agents v1.1, TITO proxy in SkyRL, any Tinker-compatible backend. | This is the team's current work, eight days old. Your interviewer is probably on it. It is the strongest hook for both your questions and your framing (harness/eval bugs before training, verifiers that resist overfitting, ablation discipline). Source: mercor.com/blog/training-frontier-knowledge-work-agents-a-397b-rl-training-guide-with-skyrl/ and github.com/Mercor-Intelligence/ApexAgents-SkyRL-Recipe |
| 2026-08 | APEX-Accounting (with Ramp). | mercor.com/apex/newsletter/introducing-apex-accounting-built-with-ramp/ |
| 2026-07 | Acquired **Deeptune** (RL environments; now "Deeptune Environments" team in NYC building the env platform, tool surfaces, graders, sandboxing). | staffingindustry.com, futurumgroup.com 2026-07-10; Ashby req a24b4495 |
| 2026-06-30 | Blog "Agent Eval Systems" (Brandon Lei, MTS): task / environment / trajectory / output / **verifier** returning a score in [0,1] plus an explanation; weighted verifiers; offline evals with mocked envs, production grading, runtime quality gates; generator + fixer optimization loop; three constraints: verifiers must resist gaming, coverage must match the real work distribution, domain expertise is required. | mercor.com/blog/agent-eval-systems/ |
| 2026-03-24 | APEX-SWE (with Cognition). | mercor.com/blog/introducing-apex-swe/ |
| 2026-02 | Acquired **Sepal AI** (YC S24; expert-graded benchmarks + RL environments). | orrick.com/en/News/2026/02/Mercor-Acquires-Sepal-AI |
| 2026-01-21 | **APEX-Agents** (Foody, Vidgen, Nitski): long-horizon cross-application tasks in simulated companies (Google-Workspace-style datarooms, Box), 1–10 pass/fail expert criteria per task, frontier models <25% Pass@1 (~40% at 8 attempts). Open dataset (CC-BY) + **Archipelago** harness on GitHub. | mercor.com/blog/introducing-apex-agents/; arxiv.org/abs/2601.14242; github.com/Mercor-Intelligence/archipelago |
| 2025-12 / 2025-09 | APEX-1 (IB, consulting, law, medicine), arXiv 2509.25721. | mercor.com/research/ |
| 2025-09-15 | CEO essay "The Economy will Become an RL Environment Machine." | mercor.com/blog/ |
| 2025-06-30 | CEO essay "Welcome to the Era of Evals": "Evals are the new PRD"; models "saturate any evaluation"; rubric-based rewards for subjective domains; "environment generation using autograders." | mercor.com/blog/welcome-to-the-era-of-evals/ |

### Company facts (for context, not for reciting)

- Series C $350M at $10B (Sep 2025); July 2026 reports of a $500M raise at ~$20B led by General Catalyst with Nvidia interested; ~$2B annualized gross revenue as of June 2026 (Bloomberg/Forbes 2026-07-09). Customers named in press: OpenAI, Anthropic, Meta.
- Ashby JDs: "profitable Series C company valued at $10 billion", in-person five days a week (SF / NYC / London), "optional remote Saturdays" on the sibling req. Blind threads (secondhand via techinterview.org) describe a six-day-a-week pace. Deeptune req states 10am–8pm ET in-office. **Ask about the actual week, do not assume.**
- Comp on the sibling research-eng reqs: **$180K–$500K + equity**, bi-annual performance bonus, up to $15K relocation, $10K housing bonus within 0.5 mi of office, $1.5K/mo meals, Equinox, $200/mo laundry, $200/mo wellness. Levels.fyi SWE data exists but is noisy (medians from $183K to $700K depending on page); not RE-specific.

### Interview-process intel (all secondhand; Glassdoor and Blind blocked from this box)

- techinterview.org (citing Glassdoor, 2026): difficulty ~3.2/5; general SWE loop = recruiter screen → 1–2 technical rounds → HM/founder; onsite reported as 4 assessments over ~5 hours (no-AI coding, system design, algorithms, final project with AI allowed); 1–3 weeks end to end; system design tied to Mercor's business (job-matching pipelines, real-time notifications). HM/founder round tests "ownership, speed, behavioral signal." Blind (secondhand): "an end-to-end project you drove, a hard technical trade-off you made, and whether a six-day-a-week pace suits you."
- **None of that is research-engineer specific.** Your process so far (take-home first, then eng screen) already differs from the SWE loop. Treat the SWE onsite description as a weak prior for what comes after 09-09.

---

## 2. Process Overview

- **Rounds:** 3 known so far (take-home → 20-min eng screen → unknown). Later rounds: unknown, not enough data. Weak prior from SWE reports: a longer virtual onsite.
- **Format:** Litmus 75-min take-home (done, advanced) → "First Screen (Eng)" 20 min → TBD
- **Platform:** Google Meet (link in the 09-01 invite), phone fallback in the invite
- **Difficulty:** 3.2/5 secondhand (techinterview.org citing Glassdoor, SWE roles); no RE-specific data
- **Positive experience rate:** unknown, not enough data
- **Known quirks:** AI Notetaker on the call (opt-out link, stated no effect on candidacy); interviewer changed once already; Aksh personally runs the process emails
- **Sources:** Gmail threads above; techinterview.org/companies/mercor-interview-guide/

## 2.5 Audience Map

- **Round 1** (Litmus take-home, 75 min, done 08-27) → `peer-tech`
- **Round 2** (First Screen (Eng), 20 min, James Moore, 09-09) → `hiring-manager` per Aksh's label, but run by an engineer: prep the **hiring-manager pack with peer-tech depth**. `[inferred]` from Aksh's description ("technical conversation about your background & skillset").
- **Round 3+** → unknown; prep both `peer-tech` and `panel-mixed` after 09-09.

---

## 3. Round 2: First Screen (Eng) — audience: `hiring-manager` (peer-tech depth)

- **Duration:** 20 min
- **Conducted by:** James Moore (research eng team, likely IC; see table above)
- **Platform:** Google Meet
- **What they evaluate (Aksh's words):** your background and skillset, technically. Plus: does your take-home reasoning hold up live, and do you understand what the team does.
- **Reported questions:** none sourced for this specific round. Blind-derived themes (secondhand): end-to-end project you drove; a hard technical trade-off; six-day pace.
- **How to prepare:** (1) Re-read your Litmus submission the day before; every design choice in it is fair game. (2) Rehearse the 90-second background pitch below out loud until it lands in under 90 seconds. (3) Google Meet: camera, lighting, background, headset test the morning of; have the dial-in number on paper.

---

## 4. Fit Assessment (sibling JD vs cv.md)

**Strengths to anchor on**

| JD line (97b8c17e / 40cc6334) | Your evidence (cv.md / article-digest.md) |
|---|---|
| "Ability to reason deeply about model behavior, experimental results, and data quality" | Proprioceptive collapse finding (60% masking → up to +48% task success); LIBERO-PRO position-swap: recipe-induced overfitting, 21% → 42% with conservative FFT, LoRA and frozen video priors tested and rejected, too-conservative recipe drops to 26% |
| "Create and refine rubrics, evaluators, and scoring frameworks"; "verifiers calibrated and hard to game" | BMO: deterministic agent eval pipeline over hundreds of synthesized inputs; found systematic risk-downplaying bias in a $200B+ AUM GenAI tool. Merlyn: VLM judges producing dense, context-dependent RL rewards designed to resist gaming |
| "Work on post-training and RLVR pipelines" | RL post-training of VLAs: open-sourced flow-matching VLA integration for RLinf enabling RL on BEHAVIOR-1K in OmniGibson; RL environments for BMO wealth-management agents (in progress) |
| "Design and run reward-shaping experiments" | VLM-judge reward design (Merlyn); boundary-resampling data intervention doubled long-tail subtask success (BEHAVIOR) |
| "Experience training models or evaluating model performance" | π0.5 finetuning study; BEHAVIOR-1K 8th place on 10,000+ demos, trained on 22 of 50 scored task types |
| "Work samples, artifacts, or code repositories" | RLinf PR, BEHAVIOR technical report, LessWrong post, the unpublished paper PDF |
| "Own problems across the entire stack" (Aksh) | Hardware → sim → policy → eval; co-founded a 3-person lab and shipped results nights and weekends |

**Gaps to close (honest)**

| Gap | Why it will come up | How to handle in 20 minutes |
|---|---|---|
| **No LLM post-training at scale.** Your RL is VLA/robotics (RLinf, OmniGibson); no GRPO/DAPO/DPPO runs, no vLLM/Megatron, no async trainer work in cv.md. JD nice-to-have #1 is "real-world post-training team experience in industry (highest priority)". | It is the req's name. | Do not bluff. Frame: the failure-analysis and reward-design skills transfer; the LLM-specific infra is what you would learn fastest here. Know the concepts cold (GRPO/DAPO/DPPO, RLVR, reward hacking, verifier gaming, logprob mismatch) so you can hold a conversation about the 397B blog. |
| **No top-tier publications.** CoRL 2026 rejected the paper. | JD nice-to-have. | "We wrote a paper on it; it was not accepted at CoRL; the result stands and the PDF is available." Never say under review, never name a venue as if pending. |
| **SQL/NoSQL, cloud, backend fundamentals** are not on cv.md. | JD "what we're looking for" bullets 3–4. | BMO graph-based agentic system is the closest evidence (multi-hop relational queries over client data). Do not claim tools you have not used. If asked directly, answer plainly. |
| **Logistics: SF in-person 5 days; Toronto-based; M.Eng runs to April 2027.** | Any eng screen may end with "when could you start / are you open to SF?" | Answers below (Section 5, recruiter-logistics). Relocation is welcomed per profile; TN-eligible; the M.Eng question needs *your* answer before the call (see Open Items). |
| **Take-home specifics.** Nothing about the problem is in this repo. | Aksh's email ties this round to it. | Re-read your submission; write down the 3 decisions you made and the 1 thing you would do with more time. |

---

## 5. Likely Questions and Drafted Answers

Result-first (headline → effect → rationale → operations). Every factual claim traces to cv.md or article-digest.md. Nothing below adds a claim that is not in those files.

### Audience: `hiring-manager` (this round)

**Q1. "Walk me through your background." (universal; expect it first)** — 90-second version:

> Two threads. By day I'm an AI research engineer at BMO's AI Centre of Excellence: I found a systematic bias toward downplaying investment risk in a GenAI tool serving $200B+ in wealth-management assets, then built a deterministic agent eval pipeline over hundreds of synthesized inputs so that class of failure gets caught at scale. Since then I've been building evals for agents that reason over banking and insurance policy, RL environments for wealth-management agents, and a graph-based agent that answers multi-hop questions over client data.
> By night I co-founded Merlyn Labs, a three-person research collective. We placed 8th in Stanford's BEHAVIOR-1K Challenge, where I found that masking 60% of proprioception improved task success by up to 48%, and we wrote up why the published π0.5 checkpoint collapses on LIBERO-PRO position-swap: it's the finetuning recipe, not the architecture, and a conservative recipe doubles success from 21% to 42%. I also open-sourced a flow-matching VLA integration for RLinf so people can do RL on BEHAVIOR-1K.
> The common thread is finding where a model actually fails and building the evaluation or the training fix that closes it. That's why the post-training and benchmarks work here is the job I want.

(Do not extend it. Stop and let him steer.)

**Q2. "Why Mercor, why this team?"** `[inferred from JD]`

> Aksh's description matched what I already do: study capability limits, build benchmarks that probe them, post-train to prove lift. The 397B SkyRL write-up is the concrete reason: the two findings I cared most about were that harness fixes alone moved the 35B model six points before any training, and that file-diff grading was much harder to overfit than final-response grading. That's the same lesson as my LIBERO-PRO work, where a published result was really a recipe artifact. I want to work where the data and the verifiers are the product.

**Q3. "Tell me about the take-home / how did you approach the open-ended problem?"** (Aksh's 08-28 email makes this near-certain.)

> Prepare from your own submission. Structure: what you decided first and why, what you deliberately skipped, what you would do with another day, and what you think the grader was looking for. Write these four bullets down before the call. (Not draftable from this repo: the problem is not in any in-scope file.)

**Q4. "Tell me about a hard technical trade-off you made."** (Blind theme, secondhand)

> Headline: on LIBERO-PRO I chose a conservative full-finetune (batch 64, LR 1e-5) over LoRA even though LoRA was cheaper and the field's default. Effect: position-swap success went from the published 21% to 42% while matching standard LIBERO; LoRA sat at 15–21% at matched hyperparameters. Rationale: the failure looked like trajectory memorization, so I wanted the update spread across the network rather than a low-rank patch, and I needed to rule out "it's the architecture." Operations: swept recipes both ways, found the effect is bounded (batch 16 / LR 1e-6 falls back to 26%), and tested a frozen video-diffusion visual prior that made things worse (42% → 35%). The trade-off was compute and time for a clean causal story.

**Q5. "Tell me about an end-to-end project you drove."** (Blind theme, secondhand)

> Headline: the BMO bias finding, start to finish. Effect: a GenAI tool serving $200B+ AUM had a systematic tendency to downplay investment risk, which in wealth management is a compliance problem, not a UX nit. Rationale: one-off spot checks would never have shown "systematic"; it needed a deterministic pipeline so the same inputs produce comparable outputs run to run. Operations: synthesized hundreds of inputs, built the eval harness, quantified the skew, and the pipeline is now how misaligned outputs get detected at scale. (Keep proprietary detail out; if pushed, say what you can and can't share.)

**Q6. "How would you design a verifier that's hard to game?"** `[inferred from JD]` (JD: "verifiers calibrated and hard to game"; blog: "verifiers must resist gaming")

> Lead with what you have actually done: VLM judges that score rollouts into dense, context-dependent rewards. Principles you can defend from your own work: grade state, not narration (Mercor's own file-diff vs final-response finding is the LLM analogue); dense and context-dependent beats a single terminal score; build the eval as an adversary would (your profile's "eval design as game construction"); hold out a slice the policy never sees and watch judge-vs-human agreement. Then say plainly you have not yet run this at LLM-RLVR scale and would want to learn how their in-sandbox verifiers and rubric criteria are calibrated.

**Q7. "What's your experience with RL post-training / GRPO?"** `[inferred from JD]`

> Honest version: my RL post-training is on VLAs, not LLMs. I integrated a flow-matching VLA into RLinf so RL can run on BEHAVIOR-1K in OmniGibson, and I'm building RL environments for agents at BMO. I have not run GRPO/DAPO on an LLM. I've read the 397B recipe closely (async training, in-flight weight sync, prompt_mean vs token_mean, the logprob-mismatch bug) and the part that maps directly is the discipline: kill non-model errors before training, and distrust a gain until an ablation isolates it.

**Q8. "What would your first 90 days look like?"** `[inferred from JD]`

> First: own one benchmark or environment slice end to end, run the failure analysis on current model outputs, categorize and quantify the failure modes, and turn the top ones into verifier or data fixes. Second: reproduce the public 35B recipe on the team's infra so I understand the trainer/harness path before touching it. Third: propose one experiment that tests whether a data or grading change moves Pass@1 more than an algorithm change, because their own ablations say data dominates.

**Q9. "How do you work with domain experts producing training data?"** `[inferred from JD]`

> Closest real evidence: BMO, where the "experts" are wealth-management and commercial-banking staff and the eval targets are their policy documents. Say what is true: you have designed evals against expert-written policy, you have not yet run a rubric program across thousands of experts. Ask how their expert criteria get calibrated (inter-rater agreement, model-as-judge vs human).

**Q10. "Are you open to SF, five days in person?"** (logistics; may come from anyone)

> Yes, relocation to San Francisco is preferred, not a cost. Canadian citizen, TN-eligible, no sponsorship needed. **Then the M.Eng question: the profile says "expected April 2027" and you must decide before the call how you answer "when can you start" (see Open Items).** Do not improvise this live.

**Q11. "What do you want to know about the team?"** → Section 7 questions.

### Audience: `peer-tech` (depth James may go to; keep to 60 seconds each)

- **"Why did 60% proprioception masking help?"** Your finding: proprioceptive collapse as a VLA failure mode (report + LessWrong). Explain the mechanism as you understand it; cite the +48% ceiling; say it's a model-organism view of a shortcut-learning failure.
- **"Chunked execution vs temporal ensembling?"** 3x in favor of chunking on BEHAVIOR; your read is VLAs lack temporal awareness. Body-bullet material, not summary material (profile rule 5).
- **"What did the RLinf integration actually involve?"** Flow-matching VLA into their RL loop so BEHAVIOR-1K in OmniGibson is trainable. Be specific about what you wrote vs what existed (authorship rule: you contributed an integration, you did not build RLinf).
- **"How would you reproduce the LIBERO-PRO result at LLM scale?"** Same method: fix the recipe, hold architecture constant, ablate one knob at a time, report the bounded regime. Map to their prompt_mean / nudge ablations.
- **"What breaks in an eval pipeline over hundreds of synthesized inputs?"** Talk determinism, seed control, input coverage vs real distribution (their blog's constraint #2), and judge drift.

### Audience: `recruiter-screen` (no recruiter round exists; only if logistics come up)

- **Comp:** do not raise it. If asked: "I'm calibrating to market for research engineering at this level. The band on your public research-eng reqs is $180K to $500K plus equity; where does this req sit?" Profile target is $300K–$500K+ USD TC; do not state a number first in a 20-minute eng screen. No prior stated-comp observation for #32 (`node salary-gap.mjs --stated-for 32` → `stated: []`, run 2026-09-03), so there is no number to stay consistent with.
- **Other processes:** honest, short: "a few other conversations, this is the one I'm most excited about" only if true.
- **Timeline:** you are already booked; nothing to negotiate.

---

## 6. Story Bank Mapping

`interview-prep/story-bank.md` does not exist. Mapping is against cv.md material. Drafts below are skeletons built only from cv.md / article-digest.md facts; the S and R fields need your detail before they go into a story bank.

| # | Audience | Likely question | Best story (cv.md) | Fit | Gap? |
|---|---|---|---|---|---|
| 1 | hiring-manager | Background pitch | BMO bias + BEHAVIOR + LIBERO-PRO | strong | — |
| 2 | hiring-manager | Hard technical trade-off | LIBERO-PRO FFT vs LoRA | strong | need the "what I'd do differently" line |
| 3 | hiring-manager | End-to-end project you drove | BMO bias → deterministic eval pipeline | strong | proprietary boundary: decide what you can say |
| 4 | hiring-manager | Why this team | 397B blog ↔ your recipe-artifact finding | strong | — |
| 5 | peer-tech | Verifier design / reward gaming | Merlyn VLM judges | partial | no LLM-scale run; say so |
| 6 | peer-tech | RL post-training hands-on | RLinf integration, BMO RL envs | partial | no GRPO/DAPO run |
| 7 | hiring-manager | Working with experts / rubrics | BMO policy evals | partial | no expert-rubric program |
| 8 | hiring-manager | Failure that taught you something | **none written** | none | candidate: CoRL rejection, or a BEHAVIOR run that went wrong; you need to pick |
| 9 | hiring-manager | Working under a six-day pace / intensity | **none written** | none | candidate: BMO full-time + Merlyn nights/weekends + M.Eng concurrently; frame as fact, not martyrdom |
| 10 | hiring-manager | Collaboration / conflict | **none written** | none | candidate: a Merlyn co-founder disagreement on method, or BMO cross-team |

**Draft STAR+R skeletons (fill S and R yourself; A and results are from the sources):**

- **LIBERO-PRO recipe.** S: [why you looked at π0.5 on LIBERO-PRO]. T: explain 96% → 21% collapse. A: conservative FFT (b64, LR 1e-5), 8k–27k steps stable; LoRA 15–21%; frozen video prior 42% → 35%; b16/LR 1e-6 → 26%. R: 42%, matched standard LIBERO; conclusion: recipe-induced, not architectural. Reflection: [what you would do differently; how you'd have presented it to CoRL reviewers].
- **BMO bias.** S: [how the tool came to you]. T: detect misaligned outputs at scale. A: hundreds of synthesized inputs, deterministic pipeline. R: systematic risk-downplaying bias surfaced and now detectable at scale. Reflection: [what generalizes].
- **BEHAVIOR-1K.** S: 3-person team, compute-limited, 22 of 50 task types trained, scored on all 50. T: place. A: proprioception masking (60%), chunked execution over ensembling (3x), boundary resampling for long-tail subtasks (2x). R: 8th, technical report + LessWrong. Reflection: [proprioceptive collapse as shortcut learning].

---

## 7. Sharp Questions to Ask Back (pick 2–3; 20 minutes leaves ~4)

Tied to specific, dated things they shipped:

1. "In the 397B write-up, harness fixes alone moved the 35B model about six points before any RL. How much of the team's time goes into harness and verifier correctness versus the training loop now?"
2. "You found file-diff grading was much harder to overfit than final-response grading. Is that becoming a design rule for new APEX tasks, and who owns that call, research or the data-ops side?"
3. "Aksh mentioned post-training a large open model toward frontier performance. Is the 397B run the first step of that, and what's the next capability you're targeting?"
4. "There are several sibling reqs on the board: Benchmarking, Real Environments, Environments/Data/Post-Training, Enterprise Evals Platform, Agentic Systems, APEX Benchmarks. How does the Post Training req split from those, and how much do people move between them?" (This is the in-process route to the six sibling reqs; do not cold-apply to them.)
5. "What does a normal week look like on the research-eng team, including Saturdays?" (Ask it plainly; the answer matters for your decision.)
6. For James specifically, if he is on the SkyRL work: "What surprised you most in the de-risking phase before the 397B run?"

Skip generic "what's the culture like."

---

## 8. Company Signals

**Vocabulary to use naturally (theirs):** environments, verifiers, harness, trajectory, golden sets, loss analysis, rollout gates, Pass@1, APEX (-1, -Agents, -SWE, -Accounting), Archipelago, Harbor, SkyRL, TITO, "evals are the new PRD," "the economy as an RL environment," model lift, expert-built data.

**Lead with:** you find real failure modes and build the eval or training fix (profile narrative). Name the 397B ablation finding that matches your own work.

**Avoid:**
- Claiming LLM post-training experience you do not have. Rule 6 in `_profile.md` (no verb inflation) applies to speech too.
- "Published" / "under review" for the paper. It was rejected at CoRL 2026. Say "we wrote a paper; the result is in the PDF."
- Conflating LessWrong (BEHAVIOR model-organism view) with the LIBERO-PRO paper. Two different artifacts.
- The BMO greeter robot. Not a credential here.
- Saying "US-authorized." You are TN-eligible, not currently authorized.
- Any framing of Merlyn Labs beyond "three of us, nights and weekends, self-funded research collective."
- Raising comp first.

**AI Notetaker:** default recommendation is to leave it on (opting out is allowed but makes you the exception in a 20-minute slot). Your call; decide before the call, not during.

---

## 9. Technical Prep Checklist (max 10, ordered)

- [ ] **Re-read your Litmus submission**; write the 4 bullets (decisions, skipped, next day, what the grader wanted). Why: Aksh's email ties this round to it.
- [ ] **Read the 397B SkyRL blog end to end** and skim the recipe README. Why: 8 days old, team's flagship, your interviewer is likely on it.
- [ ] **GRPO / DAPO / DPPO, RLVR**: be able to explain group-relative advantages, why no critic, clipping and length handling, and what "prompt_mean vs token_mean" aggregation changes. Why: JD names GRPO/DAPO; blog ablates them. You have no runs; you need the concepts.
- [ ] **Reward hacking and verifier gaming**: three concrete failure patterns and three mitigations, one of which is your own VLM-judge work. Why: JD + Agent Eval Systems blog.
- [ ] **Your LIBERO-PRO numbers, exact**: 96→21, 21→42, LoRA 15–21, video prior 42→35, b16/LR1e-6→26, 8k–27k stable. Why: this is your trade-off story; wrong numbers kill it.
- [ ] **Your BEHAVIOR numbers, exact**: 8th, 22 of 50 trained / 50 scored, 10,000+ demos, 60% masking → up to +48%, chunking 3x, long-tail 2x. Why: same.
- [ ] **RLinf integration**: 2-minute technical explanation of what you wrote. Why: it is your only LLM-RL-framework-adjacent artifact.
- [ ] **APEX-Agents design**: how tasks are built (expert survey → simulated company → 1–10 pass/fail criteria → Archipelago), <25% Pass@1. Why: the data the team trains on.
- [ ] **Logistics answers written down**: SF yes, TN, start date, M.Eng plan. Why: do not improvise.
- [ ] **Google Meet dry run** the morning of. Why: platform stated in the invite.

---

## 10. Open Items (need Shayan; not derivable from repo)

1. **M.Eng vs start date.** Profile says expected April 2027. If asked "when could you start full-time in SF," what is the answer? (Finish remotely? Pause? Done earlier?) This is the one logistics question that can end the process, and it is not answered anywhere in the repo.
2. **What was the Litmus problem?** Nothing is stored. A 5-line note in this file after you re-read it would let the next prep round (post-09-09) target it.
3. **BMO proprietary boundary.** Which specifics of the bias finding and the RL environments can you say out loud? Decide a line before the call.
4. **AI Notetaker**: on or opt out.
5. **BMO offer decision (deadline was 09-03 4 PM)** and TMX offer letter: unrelated to Mercor prep but they change how you answer "other processes" and "timeline."
6. The 09-02 handoff says CV sources are stale here (other machine has edits after 07-30). If the Mercor application CV differs from `cv.md`, the pitch above should match what they have on file. Confirm which CV went to Mercor ~08-20.

---

## Prep Plan (09-03 → 09-09, 13:00 ET)

Six days, calendar-based. Screening round: narrative, take-home recall, and company research outrank deep domain blocks. No `interview-prep/question-bank.md` exists, so no 🔴 gaps override this ordering.

**Thu 09-03 (today), 45 min — Block 1: lock the narrative**
- Read Sections 0, 5-Q1, 10 of this file. Answer Open Items 1, 3, 4 in writing.
- Say the 90-second pitch out loud twice, timed.

**Fri 09-04, 60 min — Block 2: take-home recall**
- Re-read your Litmus submission. Write the 4 bullets. Add a 5-line summary of the problem under Open Item 2.

**Sat 09-05, 90 min — Block 3: the team's work**
- 397B SkyRL blog, full read. Recipe README skim. APEX-Agents blog skim.
- Write your own one-paragraph summary of what they found and where it rhymes with LIBERO-PRO.

**Sun 09-06, 90 min — Block 4: LLM post-training concepts (your biggest gap)**
- GRPO / DAPO / DPPO / RLVR: one page of notes in your own words. Reward hacking: 3 patterns, 3 mitigations.
- Goal is conversation, not mastery. Stop at 90 minutes.

**Mon 09-07, 60 min — Block 5: stories and numbers**
- Fill the S and R fields of the three STAR+R skeletons (Section 6).
- Drill the exact numbers (checklist items 5–6) until you can say them without looking.
- Pick your 3 questions from Section 7.

**Tue 09-08, 45 min — Block 6: practice run**
- Out loud, timed: Q1, Q3, Q4, Q6, Q7, Q10. Each under 90 seconds.
- Google Meet test with camera and headset. Print the dial-in.

**Wed 09-09, morning — Block 7: buffer + rest**
- 15-minute review below at 12:30. Nothing new after 11:30. Water, quiet room, notes on paper (not on the shared screen).

---

## 15-Minute Pre-Interview Review

**Your anchor sentence:** I find where models actually fail and build the evaluation or training fix that closes the gap: bias in a $200B AUM GenAI tool, proprioceptive collapse in VLAs, a published VLA baseline that turned out to be a recipe artifact.

**Top 3 things to remember:**
1. Leave him with: rigorous failure analysis + reward/verifier design, already done for real, with exact numbers; LLM-scale infra is the part you would learn here, and you have already read their recipe.
2. Most likely first question: "walk me through your background." First sentence: "Two threads: enterprise AI evals at BMO by day, frontier robotics research at Merlyn Labs by night, and they converge on finding where models fail."
3. Their own 397B finding (harness fixes +6 points before training; file-diff grading resists overfitting) is your LIBERO-PRO lesson in their domain. Say it once, in your own words.

**Do not:** claim LLM post-training runs; say "published"; mention Charlie; raise comp; mention the greeter robot.

**Your questions to ask:**
1. Harness/verifier correctness vs training loop: where does the team's time go now?
2. Is file-diff grading becoming a design rule for new APEX tasks?
3. How does the Post Training req split from the sibling reqs, and what does a normal week (Saturdays included) look like?
