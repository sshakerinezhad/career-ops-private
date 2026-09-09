# Evaluation: Waabi — Research Engineer, World Models

**Date:** 2026-09-02
**Archetype:** ML / LLM Research Engineer (co-primary: Robotics / VLA Research Engineer)
**Score:** 4.2/5
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**URL:** https://jobs.lever.co/waabi/ef8b9a24-a010-4ef6-814c-3503e268e9a3
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 036-waabi-world-models

---

## Machine Summary

```yaml
company: "Waabi"
role: "Research Engineer, World Models"
score: 4.2
legitimacy_tier: "High Confidence"
archetype: "ML / LLM Research Engineer (co-primary: Robotics / VLA Research Engineer)"
final_decision: "Apply"
hard_stops: []
soft_gaps:
  - "\"Extensive experience with distributed training and large-scale model deployment\" — RLinf integration and 10,000+ demonstration training are real but sit below the scale this line implies; no production serving record."
  - "Master's degree is in progress (M.Eng, expected April 2027), not completed; JD accepts \"or equivalent industry experience\" so this is soft, not blocking."
  - "No autonomous-driving or AV-stack experience (traffic-participant prediction, driving scenes, on-vehicle deployment)."
  - "Bonus stack unmet: ONNX/TensorRT serving, Kubeflow/Ray, top-conference publications (CoRL submission was rejected — never claim a venue)."
top_strengths:
  - "Flow matching, video-diffusion priors, and VLA/VLM methods are all first-hand: the LIBERO-PRO study tested frozen video-diffusion visual priors directly, and the RLinf contribution is a flow-matching VLA integration."
  - "Simulation-native research record (OmniGibson, BEHAVIOR-1K 8th place, sim-to-real on AlohaMini) maps onto Waabi World's generative-simulation thesis."
  - "Research Engineer title, not Research Scientist — this is the exact pivot report 024 recommended, and the publication gate that blocked that req does not bind here."
  - "Toronto home city with a direct UofT-to-Waabi warm path (Urtasun is a UofT professor; the req is cross-posted on the UofT entrepreneurship board)."
risk_level: "Medium"
confidence: "High"
next_action: "Warm contact first: run contacto to find a UofT-affiliated Waabi World Models / Autonomy engineer or the Waabi technical recruiter, send the ≤300-char note, then submit the Lever application within a week regardless of reply. Run check-liveness.mjs first — the req was created 2026-04-02 and is ~5 months old."
work_auth: "not_needed"
discard_reasons: []
via: null
company_confidential: false
advertised_comp: "$155,000 - $269,000 USD"
risk_summary:
  legitimacy: "high_confidence"
  classification: "not_evaluated"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
  ai_infra: "not_evaluated"
```

## A) Role Summary

| Field | Detail |
|-------|--------|
| **Detected archetype** | ML / LLM Research Engineer (primary) — co-primary with Robotics / VLA Research Engineer per Calibration Rule 8 |
| **Company** | Waabi (founder/CEO Raquel Urtasun, ex-Uber ATG chief scientist). "Physical AI" for autonomous trucks and, as of the 2026 Uber deal, robotaxis |
| **Domain** | Generative world models for driving: video generation and prediction, latent diffusion / autoregressive / flow matching, multimodal foundation models, LLM/VLM/VLA for scene understanding and control, controllable scenario simulation, distillation |
| **Function** | Engineering arm of the World Models research effort. Translate Research Scientist prototypes into robust distributed training and inference pipelines; build large-scale data pipelines; own codebase quality and inference efficiency |
| **Seniority** | Research Engineer, IC. Bar is a Master's *or equivalent industry experience* plus demonstrated model development and scaling. No hard YoE number stated |
| **Work mode** | Hybrid. Primary location Toronto, ON; posting also lists San Francisco, Pittsburgh, and **Remote US & Canada**. Employing entity for the quoted band is Waabi US Inc. |
| **Team** | Autonomy & Algorithms (Software department), World Models sub-team. Headcount not stated; JD says "close-knit team of researchers and engineers" |
| **Comp** | $155,000–$269,000 USD base + equity incentive awards + annual performance bonus |
| **Posted** | 2026-04-02 (Lever `createdAt`) — roughly five months old at evaluation time |

**Caps / overrides applied:**

- **Calibration Rule 1 (PhD + first-author pubs = hard stop):** does **not** fire. Title is Research Engineer; publications appear only under "Bonus," and the degree line explicitly permits equivalent industry experience. This is the door report 024 (Research Scientist, 3.5/5, "right role, wrong door") told him to walk through instead.
- **Calibration Rule 3 (mechanical minimum-qualification screens):** partially fires on "extensive experience with distributed training and large-scale model deployment." Treated as binding in Block C, not waved away.
- **Calibration Rule 7 (attainability first):** applied as a genuine upweight. Mid-size, newly capitalized startup; home city; a real warm path exists; not a marquee-lab résumé lottery.
- **Calibration Rule 8 (robotics co-primary):** applied. This is scored at full weight as a primary-archetype role, not as a fallback.
- **Location Policy (Toronto held to the "exceptional" bar):** applied, and it survives — because the band is quoted in **USD**, the posting also opens Remote US & Canada and San Francisco, and there is zero relocation cost. See Block D for the CAD-entity risk that partially offsets this.

**TL;DR:** The strongest realistic role in the pipeline right now. Content fit is near-exact (flow matching, video diffusion, VLA/VLM, simulation, RL) and, unlike Waabi req 024, the title carries no publication gate. The screen risk is concentrated in one phrase, "extensive experience with distributed training and large-scale model deployment," which his RLinf and BEHAVIOR-1K work addresses partially rather than fully. Home city, USD comp, and a live UofT warm path make this the highest-attainability strong-fit role evaluated so far. Apply, but lead with a warm contact and check liveness first.

## B) CV Match

| # | JD requirement | Evidence | Verdict |
|---|----------------|----------|---------|
| 1 | Very strong Python & PyTorch (or JAX) | `cv.md` Skills: Python, C/C++, PyTorch, JAX. Every research artifact (BEHAVIOR-1K, LIBERO-PRO study, RLinf) is PyTorch work | ✅ Strong |
| 2 | Latent diffusion / autoregressive / **flow-matching** models | Open-sourced **flow-matching VLA integration** for RLinf (`cv.md`, Merlyn Labs). The LIBERO-PRO study is built around π0.5, a flow-matching policy | ✅ Strong, directly named |
| 3 | Video generation and prediction | `article-digest.md` §3: tested **frozen video-diffusion visual priors** as a rival hypothesis (42% → 35%, made it worse). First-hand contact with video-diffusion models, framed as an ablation rather than as generation work | ⚠️ Partial, but real and citable |
| 4 | LLM / VLM / VLA methods for scene understanding, reasoning, and control | VLM judges scoring rollouts into dense RL rewards (Merlyn); VLA work across BEHAVIOR-1K and the π0.5 study; LLM-based control pipeline for a 7-DOF arm (UofT) | ✅ Strong |
| 5 | Multimodal foundation models / generative and predictive models **of the physical world** | BEHAVIOR-1K: 10,000+ demonstrations, 22 of 50 task types, proprioceptive-collapse finding (60% masking, up to 48% success gain). Sim-to-real transfer on hand-built AlohaMini | ✅ Strong on the physical-world axis |
| 6 | Generative scenario modeling and controllable simulation | OmniGibson-based work throughout; RLinf integration enables RL training on the BEHAVIOR-1K suite inside OmniGibson | ✅ Adjacent-strong (household sim, not driving sim) |
| 7 | **Extensive** distributed training and large-scale model deployment | RLinf is distributed RL infrastructure and the contribution is real; BEHAVIOR-1K trained over 10,000+ demonstrations. Nothing in `cv.md` or `article-digest.md` evidences multi-node cluster training or production model serving | ⚠️ **Primary gap** — see mitigation |
| 8 | Build large-scale data pipelines for training datasets | Deterministic agent eval pipeline over hundreds of synthesized inputs (BMO); 10,000+ demonstration training corpus (BEHAVIOR); boundary-resampling data strategy that doubled long-tail subtask success | ✅ Genuine pipeline work, moderate scale |
| 9 | Optimize training/inference for efficiency, speed, reliability | Chunked execution vs temporal ensembling (3x) is an inference-strategy result; conservative-finetuning recipe study is a training-efficiency result stable across 8k–27k steps | ✅ Good |
| 10 | Codebase quality, stability, maintainability | Open-source contribution merged into RLinf; end-to-end BardSong pipeline in closed alpha with 23 DMs; PCB/validation-protocol discipline at Epineuron (IEC 60601-1, ISO 13485) | ✅ Good |
| 11 | Collaborate closely with Research Scientists | Merlyn Labs is a 3-person collective doing exactly this handoff; BMO AI CoE is a research-to-production function | ✅ Strong |
| 12 | Master's in CV/ML/Robotics **or equivalent industry experience** | M.Eng in AI & Robotics, University of Toronto, expected April 2027 (in progress). B.Eng Engineering Physics, McMaster, Dean's Honour List. Plus BMO AI CoE and Merlyn output | ⚠️ Soft — degree pending, alternative path stated in JD |
| 13 | Model distillation | No distillation work in `cv.md` or `article-digest.md` | ❌ Gap (one bullet of a six-item list) |
| 14 | Bonus: Kubeflow, Ray, cloud ML infra | Not evidenced | ❌ Bonus gap |
| 15 | Bonus: ONNX, TensorRT serving | Not evidenced | ❌ Bonus gap |
| 16 | Bonus: publications at CVPR/ECCV/NeurIPS | Technical report, LessWrong analysis, RLinf merge. The "Recalibrating VLA Baselines" paper was submitted to CoRL 2026 and **rejected** — never claim published, accepted, under review, or a venue | ❌ Bonus gap, honestly stated |

### Gaps and mitigation

**Gap 1 — "extensive experience with distributed training and large-scale model deployment" (the one that matters).**

1. *Blocker or nice-to-have?* Semi-hard. It sits in the first and most emphatic qualification bullet, and per Calibration Rule 3 a recruiter screen will read it mechanically. It is not framed as a bonus.
2. *Adjacent experience?* Yes, and it is better than it first looks. RLinf is a distributed RL framework; contributing a flow-matching VLA integration to it means working inside distributed training machinery, not around it. BEHAVIOR-1K meant training over 10,000+ demonstrations under a compute budget tight enough that only 22 of 50 task types could be covered — that constraint is itself scaling experience.
3. *Portfolio proof point?* The BEHAVIOR-1K technical report at merlyn-labs.com/behavior-report and the merged RLinf pull request. Both are externally verifiable, which matters more than a claim.
4. *Mitigation.* Do not paper over it. Put the RLinf integration at the top of the Merlyn block with the word "distributed" attached to the framework, not to his own scale claims. In interview, name the ceiling directly: single-node multi-GPU with a real compute budget, and say what he would need to learn for multi-node. Overstating here is the fastest way to fail a technical screen at a company that actually runs this scale daily.

**Gap 2 — Master's in progress.** Not a blocker: the JD writes "or equivalent industry experience," and BMO AI CoE plus Merlyn output is that argument. Use the profile's exact phrasing, "M.Eng in AI & Robotics, University of Toronto, expected April 2027." Never "M.Eng candidate."

**Gap 3 — no autonomous-driving domain experience.** Soft. This role is the World Models team, and the modelling machinery (video prediction, diffusion, flow matching, VLM reasoning, controllable scenario generation) is domain-portable. Waabi hires for method depth and expects driving-domain ramp. Mitigation: answer it before it is asked, in one sentence, then pivot to the simulation record.

**Gap 4 — distillation, ONNX/TensorRT, Kubeflow/Ray.** Bonus-tier. Leave them off the CV rather than stretching adjacent work to cover them.

## C) Level and Strategy

**JD level vs natural level.** The JD is a mid-level-to-senior IC Research Engineer with no YoE floor and an explicitly flexible degree line. That is unusually well matched to where Shayan actually sits: substantially more research output than his wall-clock tenure implies, and less production-scale engineering than a senior title at an AV company would normally assume. The role's own framing helps him: it defines the job as translating Research Scientist prototypes into robust pipelines, which is an engineering-support-to-research function rather than an independent research charter. That is the honest description of what he has been doing at Merlyn Labs, at a smaller scale.

**Screen risk, stated plainly.** This is a real risk, and it is concentrated rather than diffuse:

- The binding filter is qualification bullet 1: *"extensive experience with distributed training and large-scale model deployment."* A recruiter or a keyword pass will look for multi-node training, cluster orchestration, and served models in production. `cv.md` supports "trained large models under a compute budget and contributed to a distributed RL framework." Those are not the same sentence, and pretending otherwise fails at the technical screen rather than the résumé screen, which is worse.
- Secondary filter: **wall-clock experience.** BMO started Sep 2025 and Merlyn Aug 2025, concurrently. A screener doing arithmetic sees roughly one year of post-graduate professional experience against a JD that says "extensive." The standing 2-4 YoE answer on dropdowns (profile, user-ratified 2026-07-28) is defensible and should be used without re-litigation, but it does not remove the underlying read.
- Tertiary: **degree pending.** Low risk given the JD's own carve-out, but an inattentive screener may still flag "expected April 2027."
- **Counterweight, and it is substantial:** the World Models req is *methodologically* an unusually precise match. Flow matching, VLA, VLM reasoning, video diffusion, and simulation are not adjacent keywords for him, they are the last twelve months of his actual work. Résumé screens at a 300-person startup are far less mechanical than at Amazon or a frontier lab, and a recognizable BEHAVIOR-1K leaderboard placement plus a merged RLinf contribution reads as concrete to an engineer reviewer in a way that titles do not.

**Net read on screen risk: moderate, and materially reducible.** Cold-applied, this is maybe a coin flip at the résumé stage. Routed through one UofT-affiliated Waabi engineer, it is a strong bet — the technical story survives contact with a human, which is exactly where it is strongest. Per Calibration Rule 7 the warm path is part of the plan, not an optional garnish.

**How to sell seniority without lying.** Sell *density*, never duration. The shape of the pitch: one calendar year that produced an 8th-place finish in Stanford's BEHAVIOR-1K Challenge, a merged contribution to an open-source distributed RL framework, a systematic recalibration study of a published VLA baseline, and a production bias finding on a tool serving $200B+ AUM. Every one of those is externally checkable. Nothing in that list requires inflating a title or a verb. Do not describe himself as senior; describe what shipped and let the reviewer level him.

**If Waabi downlevels him.** Likely outcomes are an offer near the bottom of the band ($155–185K USD) or a redirect to a more junior Autonomy or ML engineering req. Response:

- *Accept a level, negotiate the number.* Title at a 300-person startup is nearly costless to change later; the band is $114K wide, so the negotiation surface is in the number and the equity, not the label.
- *Use the profile script:* "Based on market data for research engineering roles at this level, I'm targeting [range]. I'm flexible on structure — what matters is total package and the research agenda."
- *If redirected to a lower req,* take the conversation. A Waabi interview loop with the World Models team is worth more than holding out for a title, and per Rule 7 the priority right now is reaching a human at a company that can hire him.
- *Do not accept a CAD-denominated offer without asking the entity question first.* See Block D.

## D) Compensation and Demand

**Advertised range (verbatim from the JD):** "The US yearly salary range for this role is: $155,000 - $269,000 USD in addition to competitive perks & benefits." The JD adds that Waabi US Inc.'s ranges reflect new-hire minimum and maximum targets across all US locations, and that the role carries additional compensation in the form of equity incentive awards and an annual performance bonus.

**Company type classification:** Growth-stage startup / VC-backed startup — high confidence. Waabi closed a **US$750M Series C in January 2026**, co-led by Khosla Ventures and G2 Venture Partners, with an additional milestone-based commitment of up to US$250M from Uber, for US$1B total. Reported as the largest funding round in Canadian tech history. Additional investors include NVIDIA's NVentures, Volvo Group Venture Capital, and Porsche Automobil Holding SE. ([CNBC](https://www.cnbc.com/2026/01/28/autonomous-startup-waabi-raises-750-million-to-expand-into-robotaxis.html), [BetaKit](https://betakit.com/waabi-lands-750-million-usd-series-c-partners-with-uber-on-robotaxis/), [Robotics & Automation News](https://roboticsandautomationnews.com/2026/02/02/waabi-secures-1-billion-funding-to-accelerate-commercialization-in-autonomous-trucking-and-expand-into-robotaxis/98561/))

**Compensation reliability: Medium-High.** A stated base range with variable components (equity, bonus) named separately rather than folded in. No "up to," no OTE, no total-package obfuscation. The band is wide ($114K), which is normal for a startup spanning multiple levels under one req.

| Component | Reading |
|-----------|---------|
| **Advertised range** | $155,000 – $269,000 USD (base, US entity) |
| **Likely guaranteed base** | Given the profile against a JD asking for "extensive" scaling experience, realistic landing is lower-middle of band: roughly **$175K–$215K USD** |
| **Variable / conditional cash** | Annual performance bonus, percentage unstated |
| **Expected stable cash** | Base only; treat the bonus as upside, not budget |
| **Non-cash** | Equity incentive awards (meaningful post-Series C at a $1B-raise company, but a late-stage strike price and a long liquidity horizon), medical/dental/vision, unlimited vacation, flexible hours and WFH support, catered meals in office |

**Market context.** Levels.fyi lists Waabi Software Engineer median total compensation in Canada at roughly **CA$157K–CA$168K**, and a separate generic Waabi Research Engineer posting advertises a **US$122K–$215K** band. This req's $155K–$269K band sits clearly above both, consistent with World Models being a specialized, higher-leverage team. ([Levels.fyi — Waabi](https://www.levels.fyi/companies/waabi/salaries))

**The entity question, which is the real comp risk.** The band is explicitly Waabi US Inc.'s US range, while the primary listed location is Toronto and the Lever record marks `country: CA`. A Toronto-based hire may be paid through the Canadian entity at CAD numbers closer to the Levels.fyi medians, which would be a substantial haircut against this band. Report 024's Waabi req quoted USD for a Toronto role, so USD-for-Toronto has precedent here, but precedent is not a commitment. **Ask before the first number is exchanged**, and note that the posting also lists San Francisco and Remote US & Canada, which gives him leverage to steer toward the US entity if the Canadian one pays materially less.

**HR verification questions:**

1. Which legal entity would the offer come from for a Toronto-based hire — Waabi US Inc. or the Canadian entity — and is the quoted $155K–$269K band the one that applies?
2. If a Toronto hire is paid in CAD, what is the equivalent CAD band for this role?
3. Where in the band does this req expect a new hire at my level to land, and what distinguishes bottom-third from top-third placement?
4. What is the target annual bonus as a percentage of base, and how has it actually paid out over the last two cycles?
5. For the equity award: what is the current preferred price, the vesting schedule, the post-termination exercise window, and are these options or RSUs?
6. Does the "Remote US & Canada" option on this posting apply to the World Models team specifically, or is that team Toronto-hybrid only?

**Comp score: 3.5/5.** The USD band is genuinely good for a Canadian-headquartered employer and the top of it ($269K + equity + bonus) is respectable against the profile's $250K+ target for US robotics startups with strong equity. But the realistic landing point sits below that target, the frontier-lab target ($300–500K) is out of reach here, and the CAD-entity risk is unresolved. Per the Location Policy's higher bar for Canadian roles, comp is good-not-exceptional. It clears the $180K minimum comfortably in USD terms and would be borderline in CAD terms.

**Demand trend.** Very strong and improving. Post-Series C, Waabi is simultaneously commercializing driverless trucking and standing up a robotaxi program with Uber targeting 25,000+ vehicles. That is a hiring expansion, not a maintenance headcount, and the World Models team is upstream of both. Waabi has run multiple concurrent Lever postings across Research Scientist, World Models, and Simulation Agents through 2026. No layoff, freeze, or down-round signals surfaced.

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|-----------------|-----|
| 1 | Professional Summary | "across LLM/agent evaluation, VLA models, RL, and robotics" | Lead with **generative and predictive modelling of the physical world**: flow matching, VLA, simulation. Keep to 2-3 sentences, zero pronouns | Mirrors the JD's own framing of the team's mandate |
| 2 | Merlyn Labs block | RLinf bullet sits fourth | Promote the **flow-matching VLA integration for RLinf** to the top bullet and name RLinf as a distributed RL framework | This is the single strongest answer to the distributed-training qualification; burying it wastes it |
| 3 | Merlyn Labs block | π0.5 / LIBERO-PRO bullets | Keep both, and surface the **video-diffusion visual prior** ablation from `article-digest.md` §3 as concrete video-model contact | "Video generation and prediction" is the first item on the JD's list; this is the only honest evidence for it |
| 4 | BEHAVIOR-1K project | Report framing, 8th place | Emphasize the **simulation** stack explicitly (OmniGibson, 10,000+ demonstrations, sim-to-real on AlohaMini) and keep the trained-on-22 / scored-against-50 phrasing exact | Waabi World is a simulation bet; this is the closest thing he has to it |
| 5 | BMO block | Bias finding, eval pipeline, graph agentic system | **Keep**, per delta D007: a strong off-domain bullet beats a weak on-domain one. Lead with the deterministic eval pipeline (data-pipeline relevance) over the bias finding for this role only | Shows production discipline and large-input-volume pipeline work, which maps to "build large scale data pipelines" |
| 6 | Skills line | General ML list | Surface PyTorch, JAX, flow matching, VLA, OmniGibson, MuJoCo, sim2real, RL, imitation learning first; keep C/C++ | Direct ATS keyword overlap with the JD |
| 7 | Core Competencies | One line | Keep to exactly one line, CV-backed only. No "distributed training at scale," no "video generation," no distillation, no MLOps chips | Rule 11c: an unbacked chip dies at the "tell me about that" follow-up, and this JD's reviewer will ask |
| 8 | Epineuron | Full co-op block | Retain at least the two strongest bullets (FDA Breakthrough-designated PeriPulse in multinational trials; 900% battery-life improvement) if space allows; cut whole low-relevance items instead of thinning | Rule 12: no gutted one-liner roles |
| 9 | Header | Contact row | Exactly one measured line; location item exactly "Toronto, Canada," no visa text. Verify with `.tmp-measure.mjs` before any PDF | Rules 11b and the custom-file contact-row rule; a wrapped header has shipped twice before |
| 10 | Education | M.Eng entry | "M.Eng in AI & Robotics, University of Toronto, expected April 2027." Never "candidate" | Rule 8; also directly answers the JD's degree line |

**LinkedIn / profile framing:**

1. Headline → "AI Research Engineer — world models, VLA, sim2real" (adopt their vocabulary honestly; he does work on models of the physical world).
2. Feature the BEHAVIOR-1K technical report and the LessWrong analysis at the top of Featured.
3. Pin the RLinf contribution with the word "flow-matching" visible in the description.
4. Keep Toronto prominent — it is a genuine advantage for this specific req and a hybrid-role reviewer looks for it.
5. Follow Waabi and Urtasun; engaging substantively on their neural-simulation posts creates warm-intro surface area before the outreach message lands.

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Predictive models of the physical world | BEHAVIOR-1K proprioceptive collapse | 10,000+ demonstrations, 22 of 50 task types trained, scored against all 50; policies failing for no visible reason | Rank in the Standard Track under a hard compute budget | Diagnosed over-reliance on proprioceptive state; masked 60% of proprioception; added boundary resampling on skill transitions | Task success improved up to 48%; long-tail subtask success doubled; 8th place | The failure was invisible until the input was ablated. That habit, break the model deliberately to find what it is actually keying on, is what he would bring to world-model evaluation |
| 2 | Latent diffusion / autoregressive / flow-matching models | RLinf flow-matching VLA integration | RLinf had no path to RL-train flow-matching VLA policies on BEHAVIOR-1K in OmniGibson | Make it possible and upstream it | Implemented and open-sourced the integration inside a distributed RL framework | Merged; enables RL training on the BEHAVIOR-1K suite | The honest scale story: worked inside distributed training machinery, single-node multi-GPU budget. Say the ceiling out loud |
| 3 | Video generation and prediction | Video-diffusion visual priors ablation | π0.5 collapses on LIBERO-PRO position-swap (96% → 21%); one hypothesis was weak visual representations | Test whether frozen video-diffusion priors fix it | Swapped in frozen video-diffusion visual priors and measured | Made it **worse**, 42% → 35%; hypothesis rejected | The result is negative and that is the point. Knowing which fashionable fix does not work is worth more than another win |
| 4 | Rigorous model development and scaling | Recalibrating VLA baselines | A published checkpoint's failure was being read as an architectural limit | Determine whether it was the architecture or the recipe | Conservative full finetuning (batch 64, LR 1e-5); tested and rejected LoRA (15-21%) and frozen video priors; bounded the effect (batch 16 / LR 1e-6 drops to 26%) | Position-swap success doubled 21% → 42%, stable 8k–27k steps, standard LIBERO matched, no architectural change | Recipe-induced, not representational. Never say published, accepted, or under review — the CoRL 2026 submission was rejected |
| 5 | LLM / VLM methods for reasoning and control | VLM judges as dense RL rewards | Sparse rewards are gameable and uninformative for long-horizon manipulation | Produce a dense, context-dependent reward signal | Built VLM judges scoring rollouts, designed against reward hacking | Reward signal usable for RL training | Most of the work is making the judge hard to satisfy without doing the task. Same instinct applies to scoring generated driving scenarios |
| 6 | Build large-scale data pipelines | BMO deterministic eval pipeline | GenAI tool serving $200B+ AUM in wealth management; misalignment invisible case by case | Detect systematic behaviour at scale | Built evaluation harnesses over hundreds of synthesized inputs, deterministic and repeatable | Surfaced systematic risk-downplaying bias | The behaviour only became visible at volume. Frame as pipeline and measurement discipline, not as a bias anecdote |
| 7 | Optimize inference for efficiency and reliability | Chunked execution vs temporal ensembling | Two competing inference strategies for VLA rollouts | Determine which actually works | Benchmarked both across the task suite | Chunked execution outperformed temporal ensembling roughly 3x | Body-level evidence, not headline material. Points at a real architectural gap: VLAs lack temporal awareness |
| 8 | Team player in a close-knit research team | Co-founding Merlyn Labs | Three people, self-funded, nights and weekends, full-time day jobs | Produce externally verifiable research anyway | Split the work, shipped a technical report, a LessWrong analysis, and an OSS contribution | Verifiable output: leaderboard placement, merged PR, published report | The one-liner from the profile, verbatim. Never imply funding, headcount, or company status beyond it |
| 9 | Software engineering fundamentals | Epineuron PeriPulse | FDA Breakthrough-designated device heading into multinational clinical trials | Make hardware pass regulated validation | Designed and assembled PCBs; authored IEC 60601-1 / ISO 13485 validation protocols; COMSOL nerve-field modelling that set electrode diameter; 900% battery-life improvement via power analysis | Device in multinational clinical trials | Where the "quality, stability, maintainability" instinct in the JD actually comes from |

**Recommended case study:** the **BEHAVIOR-1K technical report**. It is simulation-native, quantified, externally verifiable on a public leaderboard, and it demonstrates exactly the loop this team runs, which is finding what a model is really conditioning on and correcting it. Have merlyn-labs.com/behavior-report ready to share.

**Likely red-flag questions:**

- *"What's the largest training run you've owned?"* — The one that decides the loop. Answer flat: the honest ceiling, the compute budget it was run under, what he did to make the budget go further (22 of 50 task types, boundary resampling, 10,000+ demonstrations), and what multi-node experience he does not yet have. Then say what he would want to learn first. Inflating here is unrecoverable.
- *"Do you have autonomous-driving experience?"* — "No production autonomy. My work is generative and predictive modelling of physical environments in simulation, which is the transferable core, and I'd ramp on the vehicle-specific stack fast."
- *"Where have you published?"* — "A technical report, a LessWrong analysis, and a merged contribution to RLinf. We wrote a paper on recalibrating VLA baselines; it was rejected at CoRL. My output has been reports and open source rather than the conference cycle." Never dress the rejection up.
- *"You've been at BMO under a year and your Master's isn't finished."* — Density over duration. Name what shipped in that year and let the list do the work.
- *"What have you built that's deployed?"* — Real gap. The strongest honest answer is the BMO eval infrastructure in a regulated environment plus the merged RLinf contribution. Do not claim served production models.
- *"Why Waabi and not a frontier lab?"* — Simulation is the actual bottleneck for embodied AI, Waabi World is one of the few places where generative simulation is the product rather than a side effect, and he is already doing sim-to-real work in his own time in this city.

## G) Posting Legitimacy

**Assessment: High Confidence.**

| Signal | Reading | Status |
|--------|---------|--------|
| Company identity | Waabi, founder Raquel Urtasun; offices Toronto / SF / Dallas / Pittsburgh; independently verified US$1B financing in Jan 2026 with named institutional investors | ✅ |
| Salary transparency | Full band posted ($155K–$269K USD), equity and bonus named as separate components rather than folded into a "package" | ✅ |
| JD specificity | Highly specific and low-boilerplate: latent diffusion, autoregressive, flow matching, distillation, controllable simulation, named bonus tooling (Kubeflow, Ray, ONNX, TensorRT). Written by someone who knows the work | ✅ |
| ATS / channel | Lever (`jobs.lever.co/waabi`), official board, also cross-posted on the UofT entrepreneurship job board | ✅ |
| Hiring / freeze signals | Post-Series C expansion into robotaxis with Uber; multiple concurrent Waabi research postings through 2026. No layoff or freeze signals surfaced | ✅ |
| Scam-like language | None. No fees, no urgency pressure, no personal-device or crypto requests, no recruiter intermediary | ✅ |
| Prior appearances | Waabi appears in the pipeline before (report 024, Research Scientist, 2026-07-05; report 035, Simulation Agents). This is a **distinct** req, not a repost: different Lever ID, different team, different band | ✅ |
| Freshness | Lever `createdAt` = **2026-04-02**, roughly five months old. Long-open reqs at fast-growing startups are common, but this one deserves a liveness check before effort is spent | ⚠️ Aging posting |
| Apply-button state | **Unverified (batch mode)** — Playwright unavailable. Positive signal: the public Lever v0 postings API returned the complete payload on 2026-09-02, which removed postings generally do not | ⚠️ Unverified |

**Action before applying:** run `node check-liveness.mjs https://jobs.lever.co/waabi/ef8b9a24-a010-4ef6-814c-3503e268e9a3`. If it comes back stale, the warm-contact route becomes the primary path rather than the accelerant, and the ask changes to "is this team still hiring."

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | — not evaluated |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |

## Global Score

| Dimension | Score |
|-----------|-------|
| CV match | 4.0/5 |
| North Star alignment | 4.5/5 |
| Compensation | 3.5/5 |
| Culture / working model | 4.5/5 |
| Attainability (Calibration Rule 7) | 4.5/5 |
| Red flags | 0 |
| **Global** | **4.2/5** |

**Reasoning.** CV match is 4.0 rather than higher because the flagship qualification, extensive distributed training and large-scale deployment, is only partly evidenced, and distillation and the serving stack are absent. North Star alignment is 4.5: generative world models for physical environments is squarely the robotics co-primary archetype under Calibration Rule 8, with a half-point held back because the role is research-engineering support to Research Scientists rather than an independent research charter, and because it is not evals work. Compensation is 3.5 because the USD band is good but lands below the profile target and carries an unresolved CAD-entity risk. Culture and working model is 4.5: home city, zero relocation, hybrid with Remote US & Canada listed, unlimited vacation, flexible hours, and a company that just raised US$1B, offset slightly by post-raise commercialization pressure.

Attainability is scored explicitly per Calibration Rule 7 and is the reason this outranks higher-content-fit frontier-lab reqs: a Research Engineer title with no publication gate, at a 300-person startup in his own city, with a live UofT-to-Waabi warm path, and with a company that is expanding rather than trimming headcount. Report 024 identified this exact door in July. It is now open.

**Decision: Apply.** Not a stretch role. Route it through a warm contact first, verify the posting is live, and do not overstate the distributed-training story at any point in the process.

## Extracted Keywords

World Models, generative world models, video generation, video prediction, latent diffusion, autoregressive models, flow matching, multimodal foundation models, LLM, VLM, VLA, scene understanding, controllable simulation, generative scenario modeling, model distillation, distributed training, large-scale model deployment, PyTorch, JAX, Python, data pipelines, inference optimization, 4D environments, temporal reasoning, traffic participant prediction, physical AI, autonomous driving, simulation, Kubeflow, Ray, ONNX, TensorRT
