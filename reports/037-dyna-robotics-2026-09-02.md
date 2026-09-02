# Evaluation: Dyna Robotics — Research Engineer/Scientist, Simulation

**Date:** 2026-09-02
**Archetype:** Robotics / VLA Research Engineer (primary) × Robotics Software Engineer (secondary)
**Score:** 4.0/5
**Legitimacy:** High Confidence
**Work Auth:** ⚠️ Unstated
**URL:** https://jobs.ashbyhq.com/dyna-robotics/942cd530-b2b7-4141-8aaa-d844175e26ac
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 037-dyna-sim-re

---

## Machine Summary

```yaml
company: "Dyna Robotics"
role: "Research Engineer/Scientist, Simulation"
score: 4.0
legitimacy_tier: "High Confidence"
archetype: "Robotics / VLA Research Engineer × Robotics Software Engineer"
final_decision: "Apply"
hard_stops: []
soft_gaps:
  - "Procedural scene/asset generation and photorealistic rendering at scale: the JD calls rendering fidelity a first-class deliverable and nothing in cv.md or article-digest.md backs graphics/rendering work"
  - "Real-to-sim reconstruction (3D reconstruction, NeRF/Gaussian splatting, differentiable rendering) is a bonus item with zero evidence in the sources"
  - "Mobile-base simulation (wheeled/holonomic) and loco-manipulation / whole-body control: evidenced work is fixed-arm and tabletop (AlohaMini, LIBERO-PRO). BEHAVIOR-1K may cover room-scale mobile manipulation, but cv.md does not say so and it must be confirmed by the user before it is claimed"
  - "GPU-scale parallel physics (CUDA, large-batch sim) is adjacent through the RLinf contribution, not directly evidenced"
  - "Founding-type ownership is asked for; ownership evidence is real (co-founded Merlyn Labs) while professional tenure is short"
top_strengths:
  - "Training and evaluating manipulation policies from simulated data is the JD's fourth requirement and the candidate's strongest axis: 10,000+ demonstrations across 22 of 50 BEHAVIOR-1K task types in OmniGibson, 8th place"
  - "Simulation benchmark design that tests a policy as a whole: proprioceptive collapse finding (60% masking improved task success up to 48%) and chunked execution beating temporal ensembling ~3x"
  - "Feeding failure modes back into new training scenarios: boundary resampling on skill transitions doubled success on long-tail subtasks"
  - "Open-sourced flow-matching VLA integration for RLinf, enabling RL training on BEHAVIOR-1K in OmniGibson: simulation plumbing for policy learning, shipped publicly"
  - "Sim-to-real transfer on hand-built AlohaMini plus PCB/COMSOL hardware roots: credible on both sides of the sim-to-real gap"
risk_level: "Medium"
confidence: "Medium"
next_action: "Cold apply via Ashby this week with a simulation-for-policy-learning framing, and pair it with a warm path: message Jason Ma (co-founder, ex-DeepMind research scientist) or a Dyna research engineer on LinkedIn using the BEHAVIOR-1K report + RLinf merge as the opener"
work_auth: "unstated"
discard_reasons: []
via: null
company_confidential: false
advertised_comp: null
risk_summary:
  legitimacy: "high_confidence"
  classification: "not_evaluated"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
  ai_infra: "not_evaluated"
```

## A) Role Summary

| Field | Value |
|-------|-------|
| Detected archetype | Robotics / VLA Research Engineer (primary) × Robotics Software Engineer (secondary) |
| Domain | Embodied AI foundation models, commercial robot deployment |
| Function | Simulation research and engineering for loco-manipulation policy learning |
| Seniority | Senior IC with founding-type ownership ("define your own research agenda"), no YoE number stated |
| Remote / work mode | On-site, Redwood City, CA (`workplaceType: OnSite`, `isRemote: false`) |
| Team | Research team, small AI research org; partners with AI Research and Data Ops |
| Posted | 2026-08-04 (Ashby `publishedAt`), still listed as of 2026-09-02 |
| Work authorization | JD is silent on sponsorship. Candidate is a Canadian citizen and TN-eligible, so no petition is needed for a US on-site role. Treated as neutral, not a blocker |
| Location policy | US on-site relocation is preferred per profile, so no score penalty |
| Profile caps / overrides applied | Calibration Rule 8 (robotics is co-primary, full weight). Calibration Rule 7 (attainability first) raises this posting relative to marquee-lab reqs. Calibration Rule 1 does **not** fire: publications are listed under "Bonus Points", not required. Calibration Rule 3 does **not** fire: the JD explicitly disclaims a fixed years-of-experience bar |

**TL;DR.** A wheeled mobile manipulator company wants someone to own simulation end to end: reconstruct real facility-scale spaces, generate them procedurally, produce synthetic training data, and build benchmarks for policies that move a base and an arm together. Half of that brief (sim-for-data-gen, policy evaluation, VLA/IL/diffusion familiarity) sits directly on top of the BEHAVIOR-1K, RLinf and LIBERO-PRO work. The other half (3D reconstruction, procedural scene generation, photorealistic rendering) has no support in the CV. The credential gates that killed the Boston Dynamics, Ai2 and DeepMind reqs are absent here, which is what makes it worth the application despite the skills gap.

**One finding worth naming up front:** Dyna's other open req, `Research Engineer/Scientist` (357b1b23, seen in `data/scan-history.tsv` on 2026-07-05), asks for a PhD preferred plus a top-tier publication record plus 5+ years deploying models on physical robots. This simulation req deliberately drops all three ("We care more about demonstrated depth building simulation/rendering systems than a fixed years-of-experience bar"). Of the two Dyna doors, this is the one that does not filter him at the résumé stage.

## B) CV Match

| # | JD requirement | Evidence from sources | Verdict |
|---|----------------|-----------------------|---------|
| 1 | MS or PhD in CS/Robotics/Graphics, or equivalent hands-on experience | M.Eng in AI & Robotics, University of Toronto, expected April 2027 (in progress). B.Eng Engineering Physics, McMaster, Dean's Honour List. Coursework: Deep Learning, RL, AI Applications in Robotics | Partial: degree is in progress, and the "equivalent hands-on" clause carries the weight |
| 2 | Simulation stacks (MuJoCo, Isaac Sim / Isaac Lab, SAPIEN, Omniverse, Blender) | `cv.md` Skills: OmniGibson, MuJoCo. BEHAVIOR-1K work ran in OmniGibson; RLinf contribution enabled RL training on BEHAVIOR-1K in OmniGibson | Met for MuJoCo and OmniGibson. Isaac Lab, SAPIEN and Blender are **not** claimed anywhere and must not be added |
| 3 | Procedural scene/asset generation, domain randomization, photorealistic rendering at scale | Nothing in `cv.md` or `article-digest.md` | **Gap.** This is the core deliverable the JD calls "a first-class deliverable, not an afterthought" |
| 4 | Familiarity training/evaluating manipulation policies (IL, VLA, diffusion, RL) and how sim data feeds them | BEHAVIOR-1K: 10,000+ demonstrations, 22 of 50 scored task types, 8th place. LIBERO-PRO: conservative full finetuning doubled π0.5 position-swap success 21% → 42%. VLM judges scoring rollouts into dense RL rewards. RLinf flow-matching VLA integration | **Strong.** Best-matched requirement in the posting |
| 5 | Simulating mobile bases (wheeled, tracked, holonomic) is "a real plus" | Evidenced simulation work is fixed-arm and tabletop: AlohaMini, LIBERO-PRO, a 7-DOF simulated arm. BEHAVIOR-1K's standard track runs room-scale household tasks, so base motion may well be in scope, but `cv.md` does not say so | **Unresolved.** Highest-leverage single question in this evaluation. See "Verify before claiming" below |
| 6 | Prior loco-manipulation or whole-body control research | Not evidenced. Closest adjacent item is the voice-controlled prosthetic pipeline (7-DOF arm, YOLO + LiDAR grasp planning), which is arm-only | **Gap**, softened by the fact that the JD frames this as an alternative route rather than a hard requirement |
| 7 | Strong Python; PyTorch or JAX for training/eval | `cv.md` Skills: Python, C/C++, PyTorch, JAX, RL, Imitation Learning | **Met** |
| 8 | Senior enough to define a research agenda; founding-type ownership | Co-founded Merlyn Labs (3-person independent collective, self-funded), set its research agenda, published a technical report and a LessWrong analysis while working full-time at BMO | **Met in kind.** The ownership signal is genuine; the tenure behind it is short |
| B1 | Bonus: real-to-sim-to-real, NeRF / Gaussian splatting, differentiable rendering | Not evidenced | Gap |
| B2 | Bonus: world models / video prediction | Not evidenced. Flow matching and diffusion policies are adjacent, not equivalent, and conflating them would be a fabrication | Gap |
| B3 | Bonus: GPU-scale physics (CUDA, large-batch parallel sim) | RLinf is large-scale RL infrastructure and the contribution enabled RL on BEHAVIOR-1K, so the exposure is real. Engineering CUDA or batched physics is not claimed | Adjacent |
| B4 | Bonus: wheeled/mobile manipulator simulation specifically | Same open question as row 5 | Unresolved |
| B5 | Bonus: publications at CoRL, RSS, ICRA, NeurIPS, CVPR, SIGGRAPH | None. "Recalibrating VLA Baselines" was submitted to CoRL 2026 and rejected. The BEHAVIOR-1K technical report and LessWrong post are self-published | Gap. Never claim a venue, "published", "accepted", or "under review" |
| B6 | Bonus: leading or mentoring in a small research team | Co-founded and runs a 3-person research collective | Partial |

### Gap analysis and mitigation

**1. Procedural generation and photorealistic rendering (hard-ish, the central gap).**
Blocker or nice-to-have: closer to blocker for a specialist screen, since it is one of six named responsibilities and the JD singles rendering fidelity out.
Adjacent experience: he has consumed simulated environments at scale (10,000+ demos in OmniGibson) and understands what makes simulated data useful for a policy, which is the demand side of the same pipeline. Engineering Physics plus COMSOL electromagnetic field modelling shows he can work in a physics-simulation toolchain.
Portfolio proof: none for rendering.
Mitigation: state it plainly in the application. Position as "I have been the customer of simulation pipelines and know exactly where they fail policies; I have not built the reconstruction and rendering side, and I would ramp there." Pair that with a concrete proposal (see Block F case study). Do not paper over it with keyword salad.

**2. Mobile base and loco-manipulation (unresolved, potentially not a gap at all).**
This is the JD's own differentiator: "Most of the field's simulation talent comes from fixed-arm tabletop manipulation or legged-humanoid balance/gait work, and neither maps cleanly onto a wheeled mobile manipulator." If the BEHAVIOR-1K work involved a wheeled mobile manipulator navigating room-scale scenes, he sits precisely in the gap Dyna says is hard to hire for, and the whole evaluation moves up.
Mitigation: ask the user before drafting anything. See below.

**3. No top-conference publications (soft here).**
Publications are in the bonus list only. The technical report, the LessWrong analysis and the RLinf merge are externally verifiable artifacts and carry the same evidentiary weight for an engineering-titled req. Calibration Rule 1 does not fire.

**4. Short professional tenure against "senior enough to define your own research agenda".**
Adjacent evidence is strong (co-founded a lab, chose its agenda, shipped results). The honest framing is ownership demonstrated at small scale, and the answer to "have you owned a pipeline end to end" is BEHAVIOR-1K plus the RLinf integration.

### Verify before claiming (do not draft without this)

Ask the user one question: **did the BEHAVIOR-1K work involve a mobile base (navigation plus manipulation in room-scale scenes), or was it manipulation from a fixed base?** `cv.md` and `article-digest.md` do not answer it. A "yes" is the single strongest sentence available for this application and belongs in the first paragraph of any outreach. A guess here would be exactly the fabrication pattern the data contract forbids.

## C) Level and Strategy

**JD level vs natural level.** The posting asks for a senior IC who sets a research direction, described as "closer to a founding-type ownership role than a narrow IC slot". By professional wall-clock (BMO from Sep 2025, Merlyn from Aug 2025, concurrent), that is above his tenure. By output (an 8th-place finish in a Stanford challenge, a merged contribution to an open-source RL framework, a paper-length recalibration study, a co-founded lab), the ownership claim is defensible.

**Screen risk, stated plainly.**
- *Credential screen: low.* No PhD requirement, no publication requirement, no YoE number. The JD actively disclaims the YoE bar and closes with "Don't let a checklist stop you." This is the lowest résumé-stage risk of any robotics req evaluated so far.
- *Specialist-skills screen: medium-high, and this is the real risk.* A reviewer scanning for Isaac Lab, Gaussian splatting, Blender, USD, procedural generation or rendering keywords will not find them. Roughly half the "What You'll Bring" list has no support in the CV. A résumé reader looking for a graphics person passes on him.
- *Seniority screen: medium.* "Senior enough to define your own research agenda" is subjective, which cuts both ways: no mechanical filter, but a hiring manager may read a 2027 M.Eng plus a first professional role as too early for a founding-type slot.

Net: the door is open, and the strongest single move is to make the reviewer read the policy-side evidence before they notice the rendering gap.

**How to sell seniority without inflating.**
Lead with scope owned rather than years served. "Co-founded a 3-person research collective, set its research agenda, placed 8th in Stanford's BEHAVIOR-1K Challenge, published the methods, and contributed the flow-matching VLA integration that lets RLinf train RL policies on BEHAVIOR-1K in OmniGibson." Every clause is verifiable. Keep the Merlyn framing at "self-organized research collective, nights and weekends" per the profile one-liner; no implied funding or headcount.

**If they downlevel.**
Take it. A mid-level research engineer seat at a $600M+ robotics company with a deployed foundation model, working on loco-manipulation simulation, is worth more to the stated goal than a senior title elsewhere. The comp band at Dyna is wide enough ($200K to $400K reported for Research Engineer/Scientist) that a level down likely still clears the $180K floor and probably the $250K robotics-startup target. Negotiate the band, not the title. If they propose the sibling `Applied Researcher, Deployment Intelligence & Continuous Learning` req instead (also open, seen 2026-09-02), that is a fine outcome and arguably a closer fit to the eval and failure-analysis strength.

## D) Compensation and Demand

**Funding and hiring signals.** Dyna Robotics raised a $120M round announced September 2025 (led by Robostrategy, with CRV and First Round Capital), at a valuation reported above $600M; the JD states over $140M raised in total, with Salesforce Ventures, NVentures, Amazon, Samsung Next and LG Technology Ventures also on the cap table. The company reports commercial deployments across multiple industries and a foundation model (DYNA-1) with sustained high success rates over long unattended runs. The Ashby board carried 28 open roles on 2026-09-02, five of them added to `data/scan-history.tsv` that day, which reads as an active hiring push rather than a maintenance posting. No layoff or freeze signals surfaced.

**Market band (research, not advertised).** Public aggregators list Dyna Research Engineer/Scientist roles in the $200K to $400K range (employer-provided figures on Glassdoor listings), with Senior ML Engineer and ML Research Scientist reqs at $180K to $270K base plus equity and benefits. Against the profile target for US robotics startups ($180K to $300K base plus meaningful equity, $250K+ preferred), the top of that band clears comfortably and the bottom clears the $180K floor. Equity quality is the live variable: a $600M+ valuation with $140M raised means real upside if the physical-AI thesis holds, and meaningful dilution risk if it does not. Demand trend for loco-manipulation simulation talent is rising and supply is thin by the company's own admission in this JD.

- **Company type:** Growth-stage startup / VC-backed startup — high confidence; $120M round September 2025, named institutional investors, 28 open reqs.
- **Compensation reliability:** Medium — no advertised salary figure on this posting (`compensationTiers` empty in the Ashby API despite the board flag), so the band above is market research rather than an offer signal.

**Comp score: 4/5** (above market for the archetype, with the caveat that this specific req publishes no number).

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|------------------|-----|
| 1 | Professional Summary | "Works across LLM/agent evaluation, VLA models, RL, and robotics" | Lead with simulation for policy learning: VLA and imitation learning trained and evaluated in simulation (OmniGibson, MuJoCo), sim-to-real on a hand-built embodiment | The req is a simulation req. The first line should answer "does this person live in a simulator?" |
| 2 | Core Competencies (one line) | General ML/robotics mix | Rewrite to CV-backed simulation terms only: OmniGibson · MuJoCo · Sim2Real · Imitation Learning · VLA · RL · PyTorch/JAX. No Isaac Lab, no Gaussian splatting, no procedural generation | Rule 11c: every competency must survive a "tell me about that" follow-up. Adding unbacked graphics terms here is the canonical violation |
| 3 | BEHAVIOR-1K project block | Listed under Research & Projects with challenge framing | Reorder bullets so the simulation-scale facts come first: 10,000+ demonstrations across 22 of 50 scored task types in OmniGibson, then the proprioceptive-collapse and chunking findings | Dyna's fifth "What You'll Do" bullet is sim-for-data-gen; the demo-scale number is the closest thing he has to "at scale, not academic-scale one-off scenes" |
| 4 | BEHAVIOR-1K project block | Embodiment and scene scale unstated | **Pending user confirmation only:** if the work involved a wheeled mobile base in room-scale scenes, add one bullet saying so | It answers the JD's stated hiring difficulty directly. Do not write it without confirmation |
| 5 | Merlyn Labs role | Five bullets, mixed emphasis | Keep the RLinf flow-matching integration and the AlohaMini sim-to-real bullet at the top; keep the LIBERO-PRO recipe finding; the VLM-judge bullet moves down for this req | Rules 4 and 7 of the CV rules: pick the 1-2 most role-relevant Merlyn items, and never gut a role |
| 6 | BMO role | Six bullets plus the greeter-robot side project | Keep the bias-detection and deterministic-eval-pipeline bullets (D007: strong off-domain bullets beat weak on-domain ones). Cut the greeter robot for space if needed, and never present it as a robotics credential | Profile CV rule 3 |
| 7 | Voice-controlled prosthetic project | Present | Keep. YOLO plus LiDAR grasp planning on a 7-DOF simulated arm is perception-in-simulation evidence and cheap to keep | Adjacent support for row 2 of the JD's requirement list |
| 8 | Header contact row | Standard | One line, "Toronto, Canada" as the location item, no visa text. Measure with `.tmp-measure.mjs` before generating | Rules 11b and the _custom.md measured-header rule |
| 9 | LinkedIn headline | "AI research engineer across frontier robotics (VLA/RL) and alignment evals" | For the outreach window, foreground the robotics/simulation half | Whoever Dyna asks to look him up should land on the robotics thread first |
| 10 | Cover letter / outreach opener | n/a | Open flat with the work (D003, D008): "I train and evaluate VLA policies in simulation." Then the BEHAVIOR-1K and RLinf evidence, with the mechanism behind each number (D004), and no mirroring of the posting back at them (D012) | Delta ledger entries with recur ≥ 2 are binding |

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Sim-for-data-gen at scale | BEHAVIOR-1K training set | Stanford's BEHAVIOR-1K Challenge scored every entry across 50 household task types | Compute limits allowed training on only a subset | Trained on 10,000+ demonstrations covering 22 of the 50 scored task types in OmniGibson | 8th place, Standard Track, methods published as a technical report | Taught him which simulated data actually moves a policy and which is wasted compute, which is the judgment call this role makes daily |
| 2 | Simulation benchmarks that test the policy as a whole | Proprioceptive collapse | VLA policies were failing in ways the aggregate success number did not explain | Find the mechanism rather than tune around it | Ran ablations masking proprioceptive input | Masking 60% of proprioception improved task success by up to 48% | The failure was in what the policy attended to, not in the environment. This is the argument for benchmarks that test base and arm jointly instead of manipulation in isolation |
| 3 | Evaluation design | Chunked execution vs temporal ensembling | Two standard action-execution strategies, unclear trade-off | Measure them under matched conditions | Controlled comparison across the task suite | Chunked execution beat temporal ensembling by roughly 3x, showing the architectures lack temporal awareness | Body-level story, not a headline (profile rule 5). Use it when asked for a concrete evaluation he designed |
| 4 | Feeding real failure modes back into new sim scenarios | Boundary resampling | Long-tail subtasks failed at skill transitions | Fix without more data collection | Oversampled skill transitions via boundary resampling | Doubled manipulation success on long-tail subtasks | Direct rehearsal of the JD's "feed real-world failure modes back into new sim scenarios" bullet |
| 5 | VLA / IL / diffusion policy training | LIBERO-PRO recalibration | The published π0.5 checkpoint scored 96% on standard LIBERO and 21% on position-swap | Determine whether the collapse was architectural or recipe-induced | Systematic finetuning study; tested and rejected LoRA (15-21%) and frozen video-diffusion visual priors (42% → 35%) | Conservative full finetuning (batch 64, LR 1e-5) doubled position-swap success to 42%, stable from 8k to 27k steps, while matching standard LIBERO | The model had memorized trajectories rather than generalizing spatially. Paper submitted to CoRL 2026 and rejected; say "we wrote a paper", never name a venue |
| 6 | Simulation infrastructure for policy learning | RLinf contribution | RLinf could not run RL on BEHAVIOR-1K tasks | Make the flow-matching VLA trainable inside the framework | Built and open-sourced the flow-matching VLA integration | Merged; RL training on the BEHAVIOR-1K suite in OmniGibson now works | The closest thing he has to "own the pipeline end to end", and it is publicly verifiable on GitHub |
| 7 | Closing the sim-to-real gap | AlohaMini | Household manipulation policies trained in simulation | Get them running on physical hardware | Hand-built the AlohaMini embodiment and ran sim-to-real transfer | Transfer running on real hardware | He has felt the sim-to-real gap from both ends, which is the premise of the rendering-fidelity argument in this JD |
| 8 | Evaluation that resists gaming | VLM judges + BMO eval pipeline | Rollout quality needed dense reward signal at Merlyn; a GenAI tool served $200B+ AUM at BMO | Build evaluation that catches subtle misbehaviour at scale | VLM judges scoring rollouts into dense, context-dependent rewards designed to be difficult to game; at BMO, a deterministic eval pipeline over hundreds of synthesized inputs | Found systematic risk-downplaying behaviour that was invisible case by case | Answers "how would you know your benchmark is measuring the right thing" |
| 9 | Founding-type ownership | Merlyn Labs | Wanted frontier robotics research with no institutional resources | Produce verifiable results anyway | Co-founded a 3-person self-funded collective, set the agenda, ran it nights and weekends alongside a full-time role | 8th place at BEHAVIOR-1K, a merged RLinf contribution, a technical report and a LessWrong analysis | The ownership evidence for a role framed as founding-type. Never imply funding, headcount or company status beyond this |

### Recommended case study

Write a two-page research proposal: **a loco-manipulation evaluation benchmark that a policy cannot pass by standing still.** Structure it as (1) why fixed-base manipulation benchmarks over-report on a wheeled platform, using the proprioceptive-collapse and position-swap findings as evidence that policies exploit whatever the benchmark does not vary; (2) a concrete scene-parameterization axis list (approach angle, reachability envelope, obstacle-forced repositioning) drawn straight from the JD's own bullets; (3) the metric design, including how to keep it hard to game, drawn from the VLM-judge work. This does three things at once: it demonstrates the research-agenda ownership the req asks for, it converts the rendering gap into a stated ramp plan rather than a silence, and Dyna reportedly assigns take-home assessments or research proposals for candidates with unusual backgrounds, so it may double as pre-emptively completed homework.

### Likely red-flag questions

| Question | How to answer |
|----------|---------------|
| "What rendering or graphics work have you done?" | Answer honestly and immediately: none at production scale. Then pivot to the demand side: he has trained and evaluated policies on simulated data at scale and knows which fidelity failures actually break a policy. Offer the ramp plan rather than a claim |
| "Have you simulated a mobile base?" | **Requires user confirmation first.** If BEHAVIOR-1K covered room-scale mobile manipulation, say exactly what the scope was. If it did not, say the evidenced work is fixed-base and tabletop, and note the household-scene experience as partial |
| "This is a founding-type ownership role. How much have you owned?" | Merlyn Labs end to end, plus the RLinf integration from proposal to merge. Scope owned, not years served |
| "Any publications at CoRL, RSS or ICRA?" | No. A paper on LIBERO-PRO recalibration was written and submitted to CoRL 2026 and rejected. The BEHAVIOR-1K technical report and the LessWrong analysis are self-published and externally checkable. Never say "published", "accepted", "under review", or name a venue as a credential |
| "Is your M.Eng a research masters?" | Course-based M.Eng; the research happens at Merlyn Labs |
| "Why are you in Toronto and can you work in the US?" | Canadian citizen, TN-eligible, no sponsorship needed. One flat sentence, no border or petition explainer (D005). Relocation to the Bay Area is welcomed |
| "You are early in your career for a senior req." | Point at output, not tenure: an 8th-place Stanford challenge finish, a merged open-source contribution, a recalibration study that overturned a published baseline's reported brittleness. Then ask what the first six months would look like |

## G) Posting Legitimacy

| Signal | Reading |
|--------|---------|
| Source | Ashby job board, Dyna's own tenant (`jobs.ashbyhq.com/dyna-robotics`), pulled from the public posting API. Direct employer posting, no agency intermediary |
| JD specificity | High. Names the robot form factor (wheeled mobile manipulator), the exact hiring difficulty they face, six specific responsibilities, and named simulation stacks. Very low boilerplate ratio |
| Salary transparency | No figure published on this req (`compensationTiers` empty), despite the board's display flag being on. Neutral for a US startup, and a point to raise early with the recruiter |
| Company verification | $120M round announced September 2025 (Robostrategy, CRV, First Round Capital), valuation reported above $600M, founders Lindon Gao and York Yang (sold Caper AI for $350M) plus Jason Ma (ex-DeepMind research scientist). Named strategic investors match the JD's own list |
| Freshness | `publishedAt` 2026-08-04, `isListed: true` as of the 2026-09-02 scan. About four weeks old |
| Apply-button state | `unverified (batch mode)` |
| On-page freshness rendering | `unverified (batch mode)` |
| Prior appearances in scan-history | First seen 2026-09-02 via the Ashby API. A different Dyna Research Engineer/Scientist req (357b1b23) was seen 2026-07-05, so the company has been hiring into research continuously |
| Scam-like language | None. No "comprehensive salary", no OTE framing, no urgency pressure, no contact-us-off-platform request |

**Tier: High Confidence.** Direct employer posting, verifiable funding and leadership, specific technical content, recent publication date, no scam markers. The only unverified items are the two Playwright-dependent signals.

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
| CV match | 3.5/5 |
| North Star alignment | 4.5/5 |
| Compensation | 4.0/5 |
| Culture / working model | 4.5/5 |
| Red flags | 0 |
| **Global** | **4.0/5** |

**Decision: Apply.** The fit is genuinely partial: roughly half the "What You'll Bring" list is unsupported, and the unsupported half includes the deliverable the JD calls first-class. What carries it over the line is attainability (Calibration Rule 7). There is no PhD gate, no publication gate and no YoE number, at a well-funded robotics startup whose product is a wheeled mobile manipulator, in a market where robotics is co-primary (Rule 8). Compared with the reqs that scored higher on paper and then filtered him at the résumé stage, this one can actually be reached. Label the rendering half honestly in the application and let the policy-side evidence do the work.

## Extracted Keywords

simulation · loco-manipulation · wheeled mobile manipulator · real-to-sim reconstruction · procedural scene generation · photorealistic rendering · domain randomization · sim-to-real gap · synthetic training data · simulation benchmarks · VLA · imitation learning · diffusion policy · reinforcement learning · MuJoCo · Isaac Sim / Isaac Lab · Omniverse · OmniGibson · SAPIEN · Blender · Gaussian splatting · NeRF · differentiable rendering · world models · GPU-scale parallel simulation · whole-body control · base positioning · reachability · Python · PyTorch · JAX
