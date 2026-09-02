# Evaluation: Torc Robotics — ML Engineer, II - Simulation Enablement

**Date:** 2026-09-02
**Archetype:** Robotics Software Engineer (simulation / model-validation platform), co-primary AI Platform / Forward-Deployed Engineer
**Score:** 3.1/5
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**URL:** https://job-boards.greenhouse.io/torcrobotics/jobs/8651349002
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 057-torc-sim-mle

---

## Machine Summary

```yaml
company: "Torc Robotics"
role: "ML Engineer, II - Simulation Enablement"
score: 3.1
legitimacy_tier: "High Confidence"
archetype: "Robotics Software Engineer"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "Degree/YoE bar: 'Bachelor's plus competencies typically acquired through 4+ years, OR Master's plus 2+ years'. The M.Eng is not conferred until April 2027 and post-B.Eng professional ML time is roughly one year, so this is a semi-hard recruiter-screen filter (Calibration Rule 3)"
  - "Zero autonomous-vehicle domain experience: no camera, lidar, vehicle-intent or object-tracking production models, no AV replay or scenario frameworks"
  - "Cloud storage and compute is unstated in cv.md: no named AWS/GCP/Azure work, no Terraform, no GitHub Actions"
  - "None of the named data tooling appears in cv.md: MCAP, Parquet, PyArrow, Daft, Pandas, Ray, Anyscale, AWS HyperPods"
  - "No prior forward-deployed, solutions-engineer or embedded-platform role, which is the actual shape of this job"
  - "No Foxglove, OpenGL or Three.js visualization experience on record; the React portfolio site shows frontend comfort but is not the same claim"
top_strengths:
  - "Simulation, replay and model validation is the JD's core requirement and it is his strongest single competency: OmniGibson and MuJoCo training, 10,000+ demonstrations on BEHAVIOR-1K, sim-to-real on hand-built AlohaMini"
  - "Interpretable and auditable metrics is literally the BMO work: a deterministic agent eval pipeline over hundreds of synthesized inputs that surfaced systematic risk-downplaying in a $200B+ AUM tool"
  - "The Recalibrating VLA Baselines study is model validation done adversarially: diagnosing that a published checkpoint's collapse was recipe-induced, then doubling position-swap success from 21% to 42%, is exactly the 'explain a metric discrepancy to a model owner' skill the JD asks for"
  - "Full-stack debugging across ingestion, execution, storage and metrics maps to a real pattern: PCB and oscilloscope work at Epineuron through COMSOL modeling through policy training, plus repairing BMO's legacy greeter robot"
risk_level: "Medium"
confidence: "High"
next_action: "Most attainable route: apply direct on Greenhouse (remote-eligible from Canada, so no TN step and no relocation), leading the application with sim/replay/model-validation evidence rather than VLA research, and pair it with a contacto note to a Dataloop + Simulation engineer or the Torc technical recruiter; before submitting, compare against sibling req 8567705002 (ML Engineer, II - New AI Initiatives, Remote - US), which may be the better content fit at the same level."
work_auth: "not_needed"
discard_reasons:
  - "salary_too_low"
  - "role_function_mismatch_platform_enablement_not_research"
via: null
company_confidential: false
advertised_comp: "$153,200—$183,800 USD"
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
| Detected archetype | Robotics Software Engineer (simulation and model-validation platform), co-primary AI Platform / Forward-Deployed Engineer |
| Domain | Autonomous trucking. Torc Sim is the replay, recompute, evaluate and visualize platform built by the Dataloop + Simulation division |
| Function | Embedded platform engineer. Sits inside one or two Autonomy teams to drive Torc Sim adoption, onboard their models to replay/recompute at scale, own the metrics that come out, and feed requirements back to the platform roadmap |
| Seniority | Level II, explicitly a mid-level individual contributor title. Bar is Bachelor's plus competencies typically acquired through 4+ years, OR Master's plus 2+ years |
| Remote / work mode | Remote, and the JD states hiring "Remote in the United States **and Canada**". Ann Arbor, MI is the alternative office |
| Team size | Not stated. Reports into Dataloop + Simulation while embedding with one or two Autonomy teams, so effectively a team of one at the seam |
| Company | Torc Robotics, wholly owned subsidiary of Daimler Truck. Autonomous driving since 2007, targeting 2027 commercial launch of L4 Freightliner Cascadia |
| Req ID | R-102870 (internal job id 6455117002) |
| Posted | First published 2026-08-07, last updated 2026-08-26 |
| TL;DR | A genuinely good match on the simulation, replay, model-validation and metrics half, and a genuine mismatch on the forward-deployed adoption half. Level and remote-from-Canada eligibility make it attainable. Comp sits at or under the stated floor and the work is enabling other people's experiments rather than running his own. |
| Profile caps / overrides applied | Calibration Rule 3 (hard YoE numbers are semi-hard, state screen risk plainly in Block C). Calibration Rule 7 (attainability is the first sort key). Calibration Rule 8 (robotics is co-primary, full weight). Location Policy: remote US-payroll role open to Canada counts as a bonus signal, and the higher comp bar for Canada-payroll roles applies. |

**Culture screen:** not produced in batch mode.

**Note on the "ML Engineer" title.** The title says ML Engineer but the job description does not describe training models. It describes onboarding somebody else's models into a simulation platform, keeping their jobs running at scale, and making their metrics interpretable. Read the responsibilities, not the title.

## B) CV Match

### Required qualifications

| # | JD requirement | Evidence from cv.md / article-digest.md | Verdict |
|---|----------------|------------------------------------------|---------|
| 1 | Bachelor's in CS, Robotics, EE or related plus competencies typically acquired through 4+ years, OR Master's plus 2+ years | B.Eng Engineering Physics, McMaster, 2023, Dean's Honour List. M.Eng in AI & Robotics, University of Toronto, expected April 2027 (not yet conferred). BMO AI CoE since Sep 2025, Merlyn Labs since Aug 2025, Epineuron co-op May 2021 to Aug 2022 | Partial. See Block C, this is the main screen risk |
| 2 | Strong Python skills and experience building or operating data pipelines at scale | Deterministic agent eval pipeline over hundreds of synthesized inputs (BMO). BardSong end-to-end pipeline: Groq speech-to-text into Gemini scene extraction into image generation into narrated video. Training runs over 10,000+ demonstrations covering 22 of 50 BEHAVIOR-1K task types. Python listed first under ML & AI skills | Strong on Python and pipeline construction. "At scale" in the AV sense means terabytes of logged sensor data, which is a different order of magnitude from anything on the CV. Partial |
| 3 | Experience working with simulation, replay, or model validation | The strongest match on the page. OmniGibson and MuJoCo. Sim-to-real transfer of household tasks on hand-built AlohaMini. The Recalibrating VLA Baselines study is model validation: 96% on standard LIBERO collapsing to 21% on LIBERO-PRO position-swap, conservative full finetuning at batch 64 and LR 1e-5 doubling that to 42%, with LoRA and frozen video-diffusion priors tested and rejected as rival hypotheses | Strong |
| 4 | Familiarity with autonomy or robotics ML models (perception, tracking, prediction, planning) and the data they consume | Robotics ML models yes: VLA policies, flow matching, imitation learning, RL. Perception yes at project scale: YOLO object detection integrated with LiDAR depth mapping for 3D localization and grasp planning on a 7-DOF arm. Tracking, prediction and vehicle intent: nothing | Partial. Robotics-general is covered, AV-specific is not |
| 5 | Comfort working across cloud storage and compute | Not stated anywhere in cv.md or article-digest.md. Training multi-thousand-demonstration VLA runs and 8k to 27k step finetunes implies cluster access, but no cloud provider, object store or scheduler is named in an in-scope file | Gap. Do not claim it |
| 6 | Strong cross-team communication, translating between a platform team and embedded Autonomy teams daily | BMO AI CoE is a central function serving the wealth management division, which is structurally the same platform-to-consumer seam. Co-founded a 3-person collective. VP Technical of McMaster Medical Design Team, led open-source prosthetic development | Partial. Real evidence of working across an internal boundary, no evidence of a formal embedded or customer-facing engineering role |
| 7 | Bias toward hands-on problem solving, as comfortable debugging a broken data pipeline as explaining a metric discrepancy to a model owner | Both halves are on the CV. Debugging: PCB assembly and oscilloscope/power-analyzer work that produced a 900% battery-life improvement at Epineuron, plus repairing and reprogramming BMO's legacy greeter robot. Metric discrepancy: the entire LIBERO-PRO recalibration is an argument that a published number was measuring the recipe, not the architecture | Strong |

### Bonus points

| JD bonus | Evidence | Verdict |
|----------|----------|---------|
| Prior forward-deployed, solutions-engineer or embedded-platform role | None | Gap |
| Hands-on with Camera, Lidar, Vehicle Intent or Object Tracking models | YOLO plus LiDAR depth mapping on the UofT prosthetic project. Camera and lidar only, at project scale, not production AV | Partial |
| Simulation or replay frameworks for AV or robotics | Robotics yes and deeply: OmniGibson, MuJoCo, BEHAVIOR-1K, LIBERO. AV frameworks no | Partial |
| Visualization tooling: Foxglove, OpenGL, Three.js | None on record. The Win95-style React portfolio site shows frontend willingness, which is honest to mention and is not the same as claiming these tools | Gap |
| Large sensor data formats (MCAP, Parquet) and PyArrow, Daft, Pandas | None named in an in-scope file | Gap |
| Distributed compute and orchestration (Ray, Anyscale, AWS HyperPods) | None named | Gap |
| Infrastructure as code (Terraform) and CI (GitHub Actions) | None named | Gap |

### Gap analysis and mitigation

| Gap | Blocker or nice-to-have? | Adjacent experience | Portfolio proof point | Mitigation |
|-----|--------------------------|---------------------|-----------------------|------------|
| Degree and YoE bar | Semi-hard. Mechanical recruiter-screen filter per Calibration Rule 3, softened by the JD's own "demonstrated competencies typically acquired through" phrasing and by the explicit "even if you don't meet 100% of the qualifications, we encourage you to apply" | BMO plus Merlyn concurrent since Aug/Sep 2025, Epineuron co-op 2021 to 2022 | BEHAVIOR-1K 8th place, RLinf merge, LessWrong analysis: all externally verifiable output that a screener can check in one click | Standing decision on YoE dropdowns is 2-4 (ratified 2026-07-28), which is exactly the Level II band this req targets. Lead with verifiable artifacts, not years. See Block C |
| No AV domain experience | Nice-to-have as written, since the JD asks for "familiarity" not production ownership, and explicitly says the person becomes the resident expert on the partner team's model after joining | VLA manipulation policies, YOLO plus LiDAR perception, sim-to-real | BEHAVIOR-1K technical report | Frame the transfer honestly: the object is different (truck vs. household manipulation) but the loop is identical, which is logged data replayed into a simulator, a policy recomputed against it, and a metric that has to survive scrutiny |
| Cloud storage and compute unstated | Nice-to-have but likely probed at screen | Multi-thousand-demonstration training runs | None citable | Do not invent a cloud claim. If asked, describe the actual compute setup used for the BEHAVIOR-1K and LIBERO runs. If that setup involved a named cloud, it belongs in cv.md first |
| AV data formats and orchestration stack (MCAP, Parquet, Ray, Terraform) | Nice-to-have, all listed under Bonus Points | None | None | Treat as learnable-on-the-job and say so plainly. This is a platform team whose product is the tooling, so they expect to teach it |
| No forward-deployed or embedded-platform role | Nice-to-have on paper, but it is the actual day-to-day of the job, so it will be probed hard | BMO central-CoE-to-business-division seam, co-founding a 3-person lab | None | This is the honest weak point. Prepare a concrete story about persuading a model owner to change how they measured something, or the interviewer will assume he wants to be on the model team instead |

## C) Level and Strategy

### JD level vs natural level

Level II is a mid-level individual contributor title, and that matters here more than usual. The stated bar, Bachelor's plus roughly 4 years or Master's plus 2 years, describes exactly the 2-4 band that is the standing answer on YoE dropdowns (ratified 2026-07-28: "2-4 is fine, I have experience to back it up"). So the title, the bar and the standing self-assessment all point at the same bracket. That alignment is the single best structural feature of this req. It is not a stretch role and it is not a downlevel: it is the correct rung.

His natural level on content is arguably higher than II on the research axis, since the LIBERO-PRO recalibration work and the BEHAVIOR-1K findings are the kind of output a senior research engineer produces. It is lower than II on the axis this job actually cares about, which is production data infrastructure, cloud operations and platform delivery.

### Screen risk, stated plainly

Per Calibration Rule 3, this does not get hand-waved.

The screen risk is real and it is the primary reason not to expect a fast yes:

1. **The Master's is not conferred.** "Master's Degree plus 2+ years" is not satisfiable until April 2027. A recruiter reading the two branches will therefore evaluate him on the first branch, Bachelor's plus 4+ years, where strict wall-clock post-B.Eng professional time is roughly one year at BMO and Merlyn (concurrent, and the Epineuron work is a co-op). That is a visible shortfall on the branch he has to be judged against.
2. **The counterweights are genuinely there, and they are unusually strong for this specific gap.** The JD's phrasing is "demonstrated competencies typically acquired through 4+ years of experience", which is competency-language, not a hard floor, and it is materially softer than an Amazon-style Basic Qualification. The posting closes with an explicit "Even if you don't meet 100% of the qualifications listed for this opportunity, we encourage you to apply." Torc has 55 open requisitions and at least five open ML Engineer I/II reqs, which is a volume-hiring posture rather than a filter-hard posture.
3. **Net read:** the YoE bar here is soft enough to survive if the résumé makes the simulation and model-validation match obvious in the first six lines. It is not soft enough to survive a résumé that leads with VLA research and buries the pipeline work. This is a targeting problem, not a qualification problem.

Do not treat the "we encourage you to apply" line as a promise. It appears on most Greenhouse postings. It shifts the odds, it does not remove the filter.

### Selling seniority without lying

- Lead with the loop, not the research. The pitch is: built a deterministic eval pipeline over hundreds of synthesized inputs that caught behavior nobody could see anecdotally, and separately diagnosed why a published robotics checkpoint's benchmark number was measuring the training recipe rather than the model. Both are "the metrics coming out are interpretable and auditable" told in the language of results.
- The onboarding-a-model-to-replay-at-scale task has a direct analogue: integrating flow-matching VLA into RLinf so that RL training could run on BEHAVIOR-1K inside OmniGibson. That is taking somebody else's model, making it execute inside somebody else's simulator, and open-sourcing the result. It is the closest thing on the CV to the literal job.
- Merlyn Labs restraint applies. Three people, nights and weekends, self-funded. The verifiable results carry it: 8th place in Stanford's BEHAVIOR-1K Challenge, an RLinf contribution that merged.
- Do not lead with the BMO robot. It was a broken legacy greeter robot he was asked to repair. It is a side project and it is not a robotics credential.

### If they downlevel

Downlevel here means an offer at ML Engineer I (the MLOps Framework req 8728723002 is a Level I posting, so the rung below exists and is open). Response:

> "I'd want to understand what separates I from II on this team. On the platform side I'd be ramping, and I'd expect that. On the model-validation and metrics side I've already done the work: I built the eval harness that found a systematic bias in a tool serving over $200B in AUM, and I published an analysis showing a well-known robotics checkpoint's benchmark collapse was recipe-induced. If the gap is AV domain knowledge, I'd rather agree on a six-month checkpoint at II than start at I."

If they hold at I, the comp math (Block D) almost certainly falls under the $180K floor and the answer should be no.

## D) Compensation and Demand

**Company type:** Enterprise subsidiary of a public multinational. Torc Robotics is a wholly owned, independently operated subsidiary of Daimler Truck. Formal HR process, published pay ranges, structured levels, corporate bonus plan. Confidence high, evidenced by the posted range, the requisition ID R-102870, and Daimler Truck press releases describing Torc as its independent subsidiary.

**Compensation reliability:** Medium-High. The range is labeled "Hiring Range for Job Opening / US Pay Range", which in Greenhouse convention is base salary, and the JD separately names bonus and stock options as additions. Components are named but not quantified.

### Component split

- **Advertised range:** "$153,200 — $183,800 USD" (US Pay Range, verbatim from the posting)
- **Likely guaranteed base:** $153,200 to $183,800, with realistic landing for a candidate at the low end of the stated experience band around $155K to $168K
- **Variable / conditional cash:** corporate bonus (percentage unstated, AV-industry norm for an IC II is roughly 8 to 12%), possible sign-on and relocation, both described as "dependent on the position offered"
- **Expected stable cash:** roughly $155K to $185K base. Adding a mid-single-digit-to-low-double-digit bonus at target puts realistic cash near $170K to $200K
- **Non-cash:** stock options, 100% employer-paid medical/dental/vision premiums for full-time employees, 401(k) with a 6% employer match, AD&D and life insurance, immediately available paid vacation, company-wide holiday closures

**The stock-options line deserves a flag.** Torc is wholly owned by Daimler Truck. A wholly owned subsidiary does not have its own tradable equity, so "stock options" here most likely means Daimler Truck Holding AG shares or a phantom/LTI equivalent. That is not startup equity, it has no venture upside, and it should be valued as a modest cash-equivalent, not as the "meaningful equity" line in the profile's robotics-startup comp target. Verify before modeling any TC number above the base plus bonus.

### Market data

| Source | Figure |
|--------|--------|
| Levels.fyi, Torc Robotics Machine Learning Engineer | Median total compensation $167,000; range $137K to $174K+; highest reported $225,600 |
| Levels.fyi, sibling Torc ML Engineer II reqs (End to End, Birds Eye View) | $153K to $183K, same band as this posting, confirming it is the standard Level II band rather than a one-off |
| Levels.fyi, Torc Software Engineer, Ann Arbor area | $114K to $132K+ |

The posted band therefore sits at or slightly above Torc's own reported ML median, which means the number is real and the company is not lowballing for its tier.

### Demand trend

Positive. Torc reached driver-out validation on a closed Texas track, began public-road testing in Michigan (Feb 2026), opened an Ann Arbor technology hub (Aug 2025) and a Fort Worth freight hub, is taking delivery of next-generation Daimler autonomous-ready Cascadia platforms, and is targeting a 2027 commercial launch. Fifty-five open requisitions on the board including at least five ML Engineer I/II openings. No layoff or hiring-freeze signal surfaced in search. This is a company staffing up into a dated commercial launch, which is the healthiest hiring posture there is.

### Scored against the profile, not against the market

Two readings, and they diverge:

- **Pure market read for an AV ML Engineer II:** the band is at or above the Levels.fyi median for the role. That is a 3/5, market median or a touch above.
- **Read against `config/profile.yml`:** the stated minimum is $180K USD. The band midpoint is $168,500, under the floor. Only the top of the range clears it, and the top of a posted band is rarely where a candidate at the bottom of the experience bar lands. The stated target for US robotics companies is $250K+ with meaningful equity, and this is roughly two thirds of that with subsidiary equity rather than startup equity. Applying the profile's explicit "Canadian roles: apply higher bar on comp" rule (see the location note below) does not help either.

Profile overrides system defaults, so the scored value is the second reading. **Comp: 2/5.**

### Location and payroll, the point that changes the shape of this req

The JD states: *"For this position, we are hiring Remote in the United States and Canada."*

Per the Location Policy this is the bonus-signal case and then some. It means:

- No TN process, no border crossing, no relocation, no sponsorship question at all. `work_auth: not_needed` is literal here, not a TN-eligibility argument.
- **Canada is explicitly allowed.** He can take this job from Toronto. That removes the single largest source of friction in every other US application in the pipeline.
- The catch: the posted band is labeled "US Pay Range" and the JD says "Our compensation reflects the cost of labor across several geographic markets." A Toronto-based hire may be placed on a Canadian band, in CAD, and Torc has published no Canada range. The dream scenario in the profile is remote-from-Toronto **at US comp**. This is remote-from-Toronto at possibly-not-US comp, which is a materially different deal. Confirm the Canada band before anything else.

### HR verification questions

1. Is the $153,200 to $183,800 figure base salary only, and where in that band would someone entering at the low end of the stated experience range be placed?
2. For a candidate based in Toronto, is compensation set on the posted US band in USD, or on a separate Canadian band in CAD? What is that Canadian range?
3. Is the Canadian hire an employee of a Torc Canadian entity, a Daimler Truck Canada entity, or an employer-of-record? Which benefits carry over, given that the 401(k) 6% match and US medical premiums do not apply in Canada?
4. What is the corporate bonus target percentage at Level II, and is it individual, company, or blended performance?
5. Since Torc is wholly owned by Daimler Truck, what instrument are the "stock options" (Daimler Truck Holding AG shares, RSUs, phantom units, or a cash LTI), what is the grant value at this level, and what is the vesting schedule?
6. Is a sign-on payment part of the package for this req, and is there a remote work stipend or home-office allowance?

## E) Personalization Plan

Note: PDF generation is deferred for this run (CV sources pending sync). This plan is the instruction set for when the tailored CV is built.

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|-----------------|-----|
| 1 | Professional Summary | Leads with "AI Research Engineer at BMO's AI Centre of Excellence and Co-Founder of Merlyn Labs. Works across LLM/agent evaluation, VLA models, RL, and robotics" | Reframe to lead with simulation, evaluation pipelines and model validation, then robotics. Two to three sentences, zero pronouns, past tense for results. Something in the shape of: engineer working on simulation-based model evaluation and the pipelines behind it, built a deterministic eval pipeline that surfaced systematic bias in a $200B+ AUM tool, published a recalibration of a robotics baseline showing a benchmark collapse was recipe-induced | The screener's first question is "does this person understand replay, recompute and metrics?" The current summary answers "does this person do VLA research?" Different question. Profile CV rule 2 caps at 2-3 sentences, rule 7 bans pronouns |
| 2 | Core Competencies (one line) | Generated per role | Draw only from CV-backed terms relevant here: Simulation (OmniGibson, MuJoCo) · Model Validation & Benchmarking · Evaluation Pipelines · Python · Imitation Learning & RL · Perception (YOLO, LiDAR) | Profile rule 11c: exactly one line, every item must survive a "tell me about that" follow-up. Do not add MCAP, Ray, Terraform or Foxglove: they are not backed |
| 3 | Merlyn Labs bullet order | Currently leads with the π0.5 / LIBERO-PRO recipe finding | Reorder to lead with the RLinf flow-matching integration ("open-sourced flow-matching VLA integration for RLinf, enabling RL training on the BEHAVIOR-1K suite in OmniGibson"), then the LIBERO-PRO recalibration, then VLM judges | The RLinf bullet is the closest literal analogue to "onboard Autonomy models to execute replay/recompute workflows at scale". It is integration work inside somebody else's simulator, which is the job |
| 4 | BMO bullet order | Bias discovery, then eval pipeline, then policy evals, then RL envs, then agent infra, then graph agentic system | Keep the profile's mandated order (bias detection, deterministic eval pipeline, graph agentic system) but promote the deterministic eval pipeline bullet to sit immediately after the bias finding and emphasize "hundreds of synthesized inputs" and "at scale" | Per delta D007, never drop the $200B+ AUM finding or the eval-pipeline bullet for a robotics role. Here they are not just kept, they are the strongest evidence on the page for "interpretable and auditable metrics" |
| 5 | BEHAVIOR-1K project | 8th place, proprioceptive collapse, chunked execution, boundary resampling, 10,000+ demonstrations | Keep, and surface the "10,000+ demonstrations covering 22 of 50 scored task types" phrasing prominently as the scale-of-data signal | It is the only data-volume number on the CV. Per article-digest §1, never state 22 or 50 alone: trained on 22, scored against 50 |
| 6 | UofT prosthetic project | LLM control pipeline plus YOLO with LiDAR depth mapping | Keep the YOLO plus LiDAR bullet, it is the only camera-and-lidar perception evidence and the JD names both explicitly. Consider cutting the LLM-control bullet if space forces it | Direct hit on the "Camera, Lidar" bonus point. The LLM-control half is off-theme for this req |
| 7 | Epineuron | Full four-bullet role | Keep at least the FDA Breakthrough PeriPulse bullet and the 900% battery-life oscilloscope bullet | Profile rule 12: no gutted one-liner roles. These two are the concrete evidence for the JD's "bias toward hands-on problem solving" and full-stack debugging line |
| 8 | BardSong | End-to-end pipeline plus fine-tuned LLM, 23 DMs in closed alpha | Candidate for the cut if over one page. If kept, emphasize the end-to-end pipeline construction phrasing only | Pipeline-building evidence is real but the domain (D&D storytelling) is the least relevant on the page. Per rule 1, cut whole low-relevance items rather than thinning strong ones |
| 9 | Header | Six items | "Toronto, Canada" as the location item, exactly one line, measured with `.tmp-measure.mjs` before PDF | Profile rules 11b and the _custom.md contact-row rule. No visa text in the header, and Canada eligibility here means visa status is not even a talking point |
| 10 | Cover letter, if written | n/a | Body text only, no header block. Do not restate the posting back at them (delta D012). Open flat with what he works on. State the sim/eval work first and the AV gap once, plainly, without apologizing for it | Deltas D003, D008, D009, D012 and the _custom.md cover-letter rule |
| 11 | LinkedIn headline | n/a | Temporarily foreground "simulation, evaluation and model validation" alongside robotics for the duration of AV-adjacent applications | A recruiter at a simulation platform team searching internally will match on those terms, not on "VLA" |
| 12 | Application free-text / additional info | n/a | Answer YoE as 2-4 (standing decision). Work-auth: authorized yes, sponsorship no. Add one line that he is based in Toronto and noted the posting is open to Canada, so no immigration process is involved | Removes the single most common reason a Canadian applicant to a US req gets screened out by default. The JD explicitly permits it, so say so early and make it a non-issue |

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Metrics that are interpretable and auditable | The BMO risk-bias discovery | A GenAI tool was in use across wealth management serving $200B+ AUM, and its outputs looked fine case by case | Determine whether the tool's behavior was actually safe, not just plausible | Built a deterministic eval pipeline and ran hundreds of synthesized inputs through it rather than sampling anecdotally | Surfaced a systematic tendency to downplay investment risk that was invisible at single-case scale | Anecdotal review is not evaluation. The bias only existed as a distribution, so only a deterministic harness over a designed input set could see it. That is the same reason a replay metric has to be reproducible before it is trustworthy |
| 2 | Explaining a metric discrepancy to a model owner | Recalibrating VLA Baselines | The published π0.5 checkpoint scored 96% on standard LIBERO and 21% on LIBERO-PRO position-swap, and the field read that as an architectural limitation | Find out whether the collapse was the model or the measurement | Ran a systematic finetuning study, tested and rejected LoRA (15-21%, consistently below full finetuning at matched hyperparameters) and frozen video-diffusion visual priors (42% down to 35%, worse) | A conservative full-finetune at batch 64, LR 1e-5 doubled position-swap success to 42%, stable from 8k to 27k steps, while matching standard LIBERO. The brittleness was recipe-induced trajectory memorization, not a representational limit | The most useful thing to tell a model owner is often "your baseline is wrong", and that is also the hardest thing to say. It only lands with the rival hypotheses already eliminated. Note: unpublished, submitted to CoRL 2026 and rejected. Never imply a venue |
| 3 | Onboard models to execute at scale in a simulator | RLinf flow-matching integration | RLinf had no path to run flow-matching VLA policies, so RL training on BEHAVIOR-1K in OmniGibson was not possible | Make somebody else's policy class executable inside somebody else's RL infrastructure | Implemented and open-sourced the flow-matching VLA integration | Merged upstream, enabling RL training on the BEHAVIOR-1K suite in OmniGibson | This is the literal shape of the job: take a model the platform does not support, make it run in the platform, and leave documentation behind so the next person does not repeat it |
| 4 | Debugging across the full stack from ingestion to metrics | BEHAVIOR-1K proprioceptive collapse | Policies trained on 10,000+ demonstrations were failing in ways the aggregate success number did not explain | Find the actual failure mode rather than tuning around it | Isolated proprioception as the suspect input channel and ablated it systematically | Masking 60% of proprioception improved task success by up to 48% | The bug was in what the model was allowed to see, not in the training loop. Full-stack debugging means being willing to suspect the data path, not just the model |
| 5 | Familiarity with perception models and the data they consume | UofT voice-controlled robotic prosthetic | A 7-DOF simulated arm needed to act on natural-language instructions | Turn language into a grasp on a specific object in 3D | Integrated YOLO object detection with LiDAR depth mapping for 3D localization and grasp planning, driven by an LLM control pipeline | Working manipulation sequences from natural-language commands | Camera plus lidar fusion is the same sensor pairing the Autonomy teams here use. The scale is different, the failure surface (association, depth error, timing) is not |
| 6 | Hands-on problem solving, comfort with a broken pipeline | Epineuron power optimization | PeriPulse, an FDA Breakthrough-designated device, was constrained by battery life | Extend runtime enough for the clinical use case | Instrumented the system with an oscilloscope and power analyzer and traced draw path by path | 900% battery-life improvement; the device is now in multinational clinical trials | The measurement rig came before the fix. Same instinct as building the eval harness before claiming a bias exists |
| 7 | Cross-team translation between platform and consumers | Merlyn Labs founding | Three people, no funding, nights and weekends, wanting to do real robotics research | Produce results a skeptical outsider could verify | Split the work, ran the challenge submission, wrote up the methods publicly | 8th place in Stanford's BEHAVIOR-1K Challenge, a published technical report, a LessWrong analysis, and an upstream open-source contribution | With no authority to assign anything, the only coordination tool is a shared, legible artifact. That is also how a platform team gets an Autonomy team to change their workflow |
| 8 | Documenting workflows so adoption scales | The BEHAVIOR-1K technical report and LessWrong post | Findings that would otherwise stay inside a three-person team | Make the failure modes reusable by other people | Wrote a technical report on the methods and a separate model-organism framing of the same findings for an alignment audience | Both are public and cited by the team's own work | The same result needs two documents for two audiences. That is exactly the "translate between simulation platform and autonomy model" ask. Keep the two artifacts distinct: LessWrong is the BEHAVIOR-1K model-organism view, not the LIBERO-PRO recipe work |
| 9 | Driving hands-on adoption from the inside | BMO greeter robot repair | BMO had a broken legacy branded greeter robot | Get it working again | Repaired and reprogrammed it | Working robot | Use only as a light "I fix things that are in front of me" anecdote. Never present it as a robotics credential and never call it leading a platform |

### Recommended case study

Come with a concrete proposal for a first 90 days as the embedded engineer on one Autonomy team, built around one question: **what would make a replay metric trustworthy enough that a model owner changes a decision because of it?**

Structure it as: (1) pick one model type from the JD's list, ideally Object Tracking, and describe the replay-to-metric path end to end; (2) name the three ways that metric could silently lie (non-determinism across recompute runs, distribution skew in the selected log set, and a metric that aggregates away the failure mode, which is exactly the BEHAVIOR-1K proprioception case); (3) propose the audit that catches each one. This does two things at once: it demonstrates the eval instinct, and it shows he has thought about the adoption problem rather than just the tooling problem.

### Likely red-flag questions

| Question | How to answer |
|----------|---------------|
| "You've never worked on autonomous vehicles. Why this?" | Do not oversell transfer. The honest version: the object is different, the loop is the same. Logged data replayed into a simulator, a policy recomputed against it, a metric that has to survive somebody disagreeing with it. Then give the RLinf integration as evidence of doing exactly that inside an unfamiliar codebase |
| "The bar is 4+ years with a Bachelor's, or a Master's plus 2. Where are you?" | Answer straight, do not deflect. B.Eng 2023, M.Eng in AI & Robotics expected April 2027, and roughly two to four years of relevant engineering counting the Epineuron co-op alongside BMO and Merlyn. Then pivot to output: an upstream open-source contribution, 8th in a Stanford challenge, a production eval harness at a major bank. Let the artifacts carry the argument |
| "This role is 50% internal adoption and support. Are you going to be bored?" | The real risk, and they will be probing for it. The honest answer is that the interesting part of adoption is that it forces the metric to be defensible, because a model owner who does not trust the number will not use the platform. That is a genuine reason to want the job. Do not pretend to love the UX-feedback and onboarding-docs half |
| "Have you operated data pipelines at production scale?" | No, not at AV sensor-log scale. Say so. What exists is a deterministic eval pipeline over hundreds of synthesized inputs at BMO and multi-thousand-demonstration training runs. Name the gap and name the nearest real thing |
| "What cloud and orchestration stack have you used?" | Do not manufacture an answer. Describe the actual compute used for the BEHAVIOR-1K and LIBERO training runs and be clear about what was managed for him versus by him. An invented AWS claim collapses in one follow-up |
| "Are you going to leave for a research role?" | Fair question given the CV. Answer it with the specific thing this job offers that a research role does not: seeing what a model does across a fleet's worth of real logged driving, which is the scale of failure surface he cannot get anywhere else |
| "Where are you based, and does that work?" | Toronto. The posting says remote in the US and Canada, so there is no immigration step. Ask the Canada-band question here rather than at offer stage |

## G) Posting Legitimacy

| Signal | Finding |
|--------|---------|
| Source | Official Torc Robotics Greenhouse board, `job-boards.greenhouse.io/torcrobotics`. Fetched via the public Greenhouse Boards API |
| Requisition integrity | Verified. Job id 8651349002 returns title "ML Engineer, II - Simulation Enablement", location "Remote - US, Ann Arbor, MI", requisition_id R-102870, internal_job_id 6455117002, company_name "Torc Robotics". The same id and title appear in the board-wide index at `/v1/boards/torcrobotics/jobs`, so the posting is present in the live public listing |
| Liveness | Strong indirect evidence. The Greenhouse Boards API index returns only live postings, and this req is in it as of 2026-09-02. `application_deadline` is null. Apply-button state itself is `unverified (batch mode)`: Playwright is unavailable in this run |
| Freshness | First published 2026-08-07, last updated 2026-08-26. Twenty-six days old at evaluation, updated within the last week of August, which is an actively maintained req rather than a stale evergreen |
| JD specificity | High. Names the division (Dataloop + Simulation), the product (Torc Sim), the exact model families (Camera, Lidar, Vehicle Intent, Object Tracking), a specific tooling stack (Foxglove, MCAP, Parquet, PyArrow, Daft, Ray, Anyscale, AWS HyperPods, Terraform), and the reporting structure. This is written by someone who knows the team |
| Salary transparency | Posted range with a stated currency and an explicit "Hiring Range for Job Opening" label. Bonus and stock options named separately rather than folded into a headline number |
| Boilerplate ratio | Low to moderate. About one third of the text is company boilerplate and benefits, standard for a corporate posting, with a substantive and specific middle section |
| Company signals | Daimler Truck subsidiary, autonomous driving since 2007. Driver-out validation milestone achieved, public-road testing in Michigan (Feb 2026), Ann Arbor technology hub opened Aug 2025, Fort Worth freight hub launched, taking delivery of next-generation autonomous-ready Cascadia platforms, 2027 commercial launch target. Fifty-five open requisitions. No layoff or freeze signal found |
| Prior appearances in scan-history | Appeared once, on 2026-09-02, via the `greenhouse-full` scanner. Six other Torc reqs were captured in the same sweep. No repost pattern |
| Scam-like language | None. No fee request, no vague "comprehensive salary", no third-party recruiter framing, no urgency pressure |
| Hiring entity | Torc Robotics directly. Not an agency, not a staffing listing. `via: null` |

**Tier: High Confidence.** Verified requisition on the company's own official board, specific and internally consistent job description, posted salary range, healthy and publicly documented hiring posture. The only unverified signal is the apply-button state, which is a batch-mode tooling limitation rather than a finding.

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | — not evaluated |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |

## Global Score

| Dimension | Score | Reasoning |
|-----------|-------|-----------|
| CV match | 3.5/5 | Strong on the JD's stated core (simulation, replay, model validation, auditable metrics, full-stack debugging). Real gaps on AV domain, cloud and compute, the AV data-format and orchestration stack, and any prior forward-deployed role. The degree and YoE bar is met only on the softer competency reading |
| North Star alignment | 3.0/5 | Robotics gets full weight per Calibration Rule 8 and this is genuinely embodied, simulation-heavy work in a real robotics company. But the function is platform enablement and adoption, not research. No VLA, no RL, no alignment content. He would be making other people's experiments run rather than running his own |
| Compensation | 2.0/5 | $153.2K to $183.8K base plus bonus and subsidiary stock options. At or above market for an AV ML Engineer II (Levels.fyi median $167K TC), but the band midpoint of $168.5K sits under the stated $180K floor and well under the $250K+ US-robotics target. Canada-payroll band unpublished and possibly lower |
| Culture / working model | 4.0/5 | Fully remote and explicitly open to Canada, which removes the visa question entirely. Daimler-backed stability with a dated 2027 commercial launch. 100% paid medical/dental/vision, 401(k) with 6% match, immediately available PTO. Clear team mission and an unusually well-written req |
| Red flags | 0 | None material |
| **Global** | **3.1/5** | |

### Verdict

**Consider, conditionally.** This is the most *attainable* robotics req evaluated in this batch and the least *aspirational*. Both halves of that sentence are load-bearing.

What makes it attainable, per Calibration Rule 7: Level II is the correct rung rather than a stretch, the YoE bar is competency-phrased rather than a hard floor, the company is a mid-size AV subsidiary rather than a marquee lab that filters at résumé stage, there are five open ML Engineer I/II reqs signaling volume hiring, and Canada eligibility means there is no immigration friction at all. That last point is rare and worth a lot.

What makes it a compromise: the base band midpoint is below the stated floor, the equity is subsidiary equity rather than startup equity, and the job is fundamentally about driving adoption of a platform rather than doing research. The "resident expert on whichever model you are partnered with" line is real and interesting, but it arrives after the onboarding, documentation and UX-feedback work.

Recommendation: apply, but do two things first. (1) Compare against sibling req 8567705002, "ML Engineer, II - New AI Initiatives" (Remote - US), which is the same level and may be closer to the research content he wants. Applying to one Torc req thoughtfully beats applying to five. (2) Get the Canada compensation band in writing early, because if a Toronto hire lands on a CAD band below the posted US range, the comp dimension drops from 2 to 1 and the answer becomes no.

The counter-case, and it is a real one: he said "we need to get me in somewhere." This is a legitimate, funded, technically serious robotics company with a dated commercial launch, hiring at his level, remote from his city, at a salary near his floor. Against a pipeline whose only advance so far came from a take-home, an attainable 3.1 with no visa step is not nothing.

## Extracted Keywords

simulation · replay · recompute · model validation · metric evaluation · data pipelines at scale · Python · autonomy models · perception · object tracking · vehicle intent · camera · lidar · cloud storage and compute · distributed compute · orchestration · visualization tooling · Foxglove · MCAP · Parquet · PyArrow · Daft · Pandas · Ray · Anyscale · AWS HyperPods · Terraform · GitHub Actions · forward-deployed engineer · embedded platform · cross-team communication · full-stack debugging · data ingestion · persistent storage · onboarding and documentation · autonomous vehicles · Level 4 autonomy
