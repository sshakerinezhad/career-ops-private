# Evaluation: Physical Intelligence — Applied Researcher (Deployments)

**Date:** 2026-09-02
**Archetype:** Robotics Software Engineer × AI Forward Deployed Engineer (policy training half maps to Robotics / VLA Research Engineer)
**Score:** 3.9/5
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**URL:** https://jobs.ashbyhq.com/physicalintelligence/1a7a181f-c318-4e0b-9516-c7111b3e3968
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 040-physical-intelligence-applied

---

## Machine Summary

```yaml
company: "Physical Intelligence"
role: "Applied Researcher"
score: 3.9
legitimacy_tier: "High Confidence"
archetype: "Robotics SWE × AI Forward Deployed Engineer"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "Top listed hope is hands-on experience deploying robots or autonomous systems in real-world environments; robot work to date is bench and lab scale (hand-built AlohaMini sim2real, simulated 7-DOF arm), not fielded systems"
  - "No customer or partner-facing deployment experience; the JD asks for engaging with partners and observing robots in deployment contexts"
  - "JD states a practical mindset motivated by making things work, not by open-ended research; the profile identity is research-first, so this is a genuine motivation-fit question, not just a framing exercise"
  - "No production robotics fleet code; RLinf upstream merge and BMO internal infrastructure are the closest evidence of production-quality code"
  - "Ultra-selective lab: roughly 50 to 100 people at an $11B valuation, founder pedigree Berkeley/Stanford/Google Brain, and their own recruiter req advertises a top .02% talent bar (Calibration Rule 2)"
top_strengths:
  - "Policy training, tuning and data curation are a near-exact match: 10,000+ demonstrations on BEHAVIOR-1K, boundary resampling on skill transitions doubled long-tail subtask success, conservative full-finetuning doubled pi-0.5 position-swap success 21% to 42%"
  - "Direct, verifiable engagement with Physical Intelligence's own model: the unpublished recalibration paper shows the published pi-0.5 checkpoint's LIBERO-PRO collapse is recipe-induced rather than architectural, which is a favourable finding about their model and a legitimate reason to reach a PI researcher"
  - "Full-stack failure diagnosis across perception, policy, control and hardware: YOLO plus LiDAR grasp planning on a 7-DOF arm, proprioceptive collapse discovery, PCB design and power debugging at Epineuron"
  - "No PhD gate and no numeric YoE minimum in this posting, unlike PI's sibling Research Scientist req; this is the most attainable of PI's open research-track roles"
risk_level: "Medium"
confidence: "Medium"
next_action: "Warm contact first: send the unpublished LIBERO-PRO recalibration result to a pi-0.5 author at PI as a technical note (their checkpoint's brittleness is recipe-induced; conservative FFT doubles position-swap 21% to 42%), then apply to this req inside that thread. Cold apply alone is the weakest of the three routes here."
work_auth: "not_needed"
discard_reasons:
  - "no_real_world_robot_deployment_experience"
  - "role_shape_deployments_not_research"
  - "ultra_selective_resume_screen"
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

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | Robotics Software Engineer × AI Forward Deployed Engineer. The "train and tune policies, curate data" half maps onto Robotics / VLA Research Engineer |
| Domain | General-purpose robot foundation models (pi-0, pi-0.5) taken into real customer environments |
| Function | Deployments team. Full-stack robotics: integrate with customer workflows, finetune models for their dexterous tasks, keep the on-site system reliable |
| Seniority | Unstated. No numeric YoE minimum, no degree requirement. PhD is listed under "Bonus Points", not required |
| Remote | On-site, San Francisco. `workplaceType: OnSite`, `isRemote: false`, no secondary locations |
| Team size | Not stated in the JD. Company reported at roughly 50 to 100 people; the Deployments team is a subset |
| Culture screen | — not evaluated (batch mode does not run the Block A culture screen) |
| Posting age | Published 2026-01-23, still listed on the company's Ashby board as of the 2026-09-02 scan. Roughly 7 months old, which reads as an evergreen or slow-moving req |
| TL;DR | Frontier robotics at the lab that built the model his own paper recalibrates, on a title with no PhD gate and no YoE floor. The catch is role shape: this is a deployments and field-reliability job that explicitly says it does not want open-ended research, and the top thing they hope for is real-world robot deployment experience he does not have. |

### Work-authorization check

➖ **Not needed.** US-located role in San Francisco. Profile records Canadian citizen, TN-eligible, no H-1B sponsorship required. The JD says nothing about sponsorship, which is neutral, and includes the standard San Francisco Fair Chance Ordinance line. No ITAR or US-person language. Score-neutral per the location policy; US relocation is a preference, not a cost.

## B) CV Match

| JD requirement | CV / digest evidence | Verdict |
|---|---|---|
| "Train and tune policies, curate data, and iterate to improve real-world performance" | Trained on 10,000+ demonstrations covering 22 of 50 scored BEHAVIOR-1K task types; doubled manipulation success on long-tail subtasks by oversampling skill transitions via boundary resampling; conservative full-finetuning recipe (batch 64, LR 1e-5) doubled pi-0.5 LIBERO-PRO position-swap success 21% to 42% | **Strong.** This is the single closest line in the posting |
| "Deploy and debug learned policies on physical robots, diagnosing failures across the full stack (perception, policy, control, hardware)" | Identified proprioceptive collapse as a critical VLA failure mode (60% masking improved task success up to 48%); found chunked execution beat temporal ensembling ~3x; sim-to-real transfer of household tasks on hand-built AlohaMini; YOLO plus LiDAR depth mapping for 3D localization and grasp planning on a 7-DOF arm; PCB design and COMSOL field modelling at Epineuron | **Partial-strong.** The diagnosis instinct and the vertical span are real and evidenced. The robots are bench and lab scale, not fielded |
| "Hands-on experience deploying robots or autonomous systems in real-world environments" | Hand-built AlohaMini sim-to-real is the only physical-robot line. The 7-DOF arm work is simulated. The BMO greeter robot is a side project and is off-limits as a robotics credential per profile rule 3 | **Gap.** This is the top item under "What We Hope You'll Bring" and the honest answer is no |
| "Write production-quality code that interfaces with Pi's infrastructure" | Open-sourced flow-matching VLA integration merged into RLinf (upstream review bar on a real OSS repo); building internal infrastructure at BMO that provisions LLM agents from a written role and scope definition; graph-based agentic system over bank client data | **Partial.** Real code that other people depend on, but not robotics-fleet production code |
| "Work with operators to set up tests, evals, and data collection pipelines" | Built a deterministic agent eval pipeline using hundreds of synthesized inputs to detect misaligned outputs at scale; developing VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game; designing evals for LLM agents over banking and insurance policy | **Strong on evals, thin on operators.** The eval-pipeline instinct is a genuine differentiator; running a human data-collection operation is not on the CV |
| "Engage with partners to understand use cases and observe robots in deployment contexts" | No customer-facing or partner-facing work anywhere in `cv.md`. Closest adjacent: BardSong closed alpha with 23 DMs, and the McMaster open-source prosthetic built so anyone could assemble it for under $300 | **Gap.** Adjacent user-facing instinct only |
| "Bridge research and operations: translate research advances into deployable systems, and surface real-world failure modes back to researchers and engineers" | The dual-track pattern is the exit narrative: enterprise AI rigor at BMO's AI CoE, frontier robotics research at Merlyn Labs, both converging on finding where systems fail. The pi-0.5 recalibration is literally surfacing a failure mode back to the people who trained the model | **Strong.** Best-fitting bullet in the whole posting after policy training |
| "Strong engineering skills: clean Python, ability to interface with infrastructure, debugging instincts" | Python, C/C++, PyTorch, JAX; 900% battery-life improvement at Epineuron via oscilloscope and power-analyzer debugging; RLinf integration | **Strong** |
| "Practical mindset: motivated by making things work, not by open-ended research" | Profile self-description is research-first: "Seeking a frontier role where that convergence is the job", and the cross-cutting advantage is "breaks things rigorously, then builds the fix" | **Mismatch to watch.** The "then builds the fix" half is a defensible answer, but this is a real motivation screen, not a wording problem |
| *Bonus:* "Founded or worked at an early-stage robotics or AV company" | Co-founded Merlyn Labs, a 3-person independent research collective, nights and weekends, self-funded | **Partial.** Honest framing only; it is a collective, not a company. Never imply funding, headcount, or company status |
| *Bonus:* "PhD in relevant field" | M.Eng in AI & Robotics, University of Toronto, expected April 2027 | **No.** Bonus only, so not a gate |
| *Bonus:* "Intuition for policy training, neural network debugging, and data curation" | All three, with numbers: proprioception masking, chunking vs ensembling, boundary resampling, conservative FFT recipe, LoRA and frozen-visual-prior hypotheses tested and rejected | **Strong** |
| *Bonus:* "Experience with robot manipulation platforms" | OmniGibson / BEHAVIOR-1K, LIBERO and LIBERO-PRO, MuJoCo, AlohaMini, ROS2 | **Strong** |

### Gaps and mitigation

1. **Real-world robot deployment (the top hoped-for line).** Not a hard blocker: it sits under "What We Hope You'll Bring", not a requirements list, and there is no numeric floor anywhere in the posting. Adjacent experience is genuine but smaller in scale: sim-to-real on a hand-built embodiment is the same failure-diagnosis loop at bench scale, and Epineuron shipped hardware into multinational clinical trials under IEC 60601-1 and ISO 13485, which is real-world reliability engineering even though it is not a robot. Mitigation: do not claim deployment experience. Claim the loop instead. Lead with sim-to-real on AlohaMini and the proprioceptive-collapse finding as evidence of diagnosing why a policy fails on hardware, then be explicit that the fleet and customer-site scale would be new.
2. **Partner-facing work.** Nice-to-have and the weakest item to fake. No portfolio proof point exists. Mitigation: leave it alone in written materials and prepare an honest interview answer built on BardSong's closed alpha and the McMaster sub-$300 prosthetic, both of which were built for people who were not the builder.
3. **Production robotics code.** Nice-to-have. The RLinf upstream merge is the strongest available proof that his code survives someone else's review. Mitigation: name the merge specifically and describe what integrating flow-matching VLA into a distributed RL trainer required.
4. **Motivation fit ("not open-ended research").** Not a credential gap, so it cannot be mitigated on paper. Mitigation is a prepared answer: the pattern across BEHAVIOR-1K, LIBERO-PRO and the BMO bias work is find the failure, quantify it, ship the correction. If the honest answer is that open-ended research is what he actually wants, that is an argument for PI's Research Scientist or Robotics Software Engineer reqs instead, and against this one.

## C) Level and Strategy

**JD level vs natural level.** The posting names no level, no YoE floor and no degree requirement, which removes both Calibration Rule 1 (no PhD or first-author-publication gate; PhD is a bonus) and Calibration Rule 3 (no mechanical YoE screen to fail). "Applied Researcher" at PI is reported as one of the master's-accessible tracks alongside ML Infra and Robotics SWE, in contrast to the Research Scientist req on the same board. On credential shape this is the most reachable research-track opening PI has listed.

**Screen risk, stated plainly.** It is still high, and the reason is not credentials.

- Physical Intelligence is squarely in the ultra-selective tier that Calibration Rule 2 covers: roughly 50 to 100 people, $11B valuation, founders out of Berkeley, Stanford and Google Brain, and their own recruiting req describes hiring the top .02% of talent. A résumé arriving cold into that funnel is filtered before content fit is ever assessed. The three cold-screen rejections on record (OpenAI x2, METR) were all exactly this shape.
- The specific résumé read for *this* team is worse than his general robotics read. A Deployments hiring manager scanning for "has this person kept robots running somewhere real" finds a hand-built AlohaMini and a simulated arm. The policy-training strength that makes him interesting shows up in the second half of the CV, not the first.
- Countervailing signal: the posting is 7 months old and still listed. Evergreen reqs at fast-growing labs often mean an unfilled seat and a hiring manager who reads more of the pile, which is mildly favourable.

**How to sell seniority without lying.** Do not reach for a level. The title carries no level, so the argument is scope and rigor, not years. Concretely: he has independently run a full experimental program that changed the interpretation of a published checkpoint, shipped the code upstream, and placed 8th in a 50-task benchmark on a 3-person nights-and-weekends team. That is the seniority argument. Per profile rule 12 and delta D007, do not thin the BMO bullets for being off-domain: the $200B+ AUM bias finding and the deterministic eval pipeline are the strongest evidence in the whole CV that he finds problems nobody asked him to look for, which is exactly what a Deployments team needs.

**If PI downlevels or redirects.** Two redirects are worth pre-accepting rather than resisting. First, PI's *Robotics Software Engineer* req (f6bee7a7, published 2026-01-06) and *Forward Deployed Robotics Engineer* req (567d620f) are on the same board and may fit the actual evidence better if the deployment gap is the blocker. Second, if the conversation drifts toward pure research, the *Research Scientist* req (f83ba447) is the wrong pivot under Calibration Rule 1 unless they raise it themselves. Accepting a Robotics SWE framing at PI is not a downgrade in this search; per Calibration Rule 7, getting into the building at a lab like this outranks the title on the offer.

## D) Compensation and Demand

**Demand trend.** Physical AI is the hottest hiring segment in the market right now and PI sits at its centre: about $1.6B raised across recent rounds, valuation reported at $11.2B in 2026 after $5.6B in November 2025, still pre-revenue and spending on data-collection infrastructure, compute, hardware and talent. Reported comp on Levels.fyi for a Physical Intelligence Software Engineer runs roughly $291K to $406K total compensation (last updated 2026-07-26), and robotics or VLA specialists are reported to carry a 25% to 45% premium over generalist ML engineers in 2026. Against the profile target for US robotics startups ($180K to $300K base plus meaningful equity, $250K+ TC), a PI offer would very likely clear the floor and probably the target, though a Deployments track may sit below the research track and the equity multiple is compressed at an $11B mark. None of that is in the posting.

- **Company type:** Growth-stage startup / VC-backed startup — high confidence; $1.6B raised across two rounds at a reported $11.2B valuation, pre-revenue, roughly 50 to 100 employees.
- **Compensation reliability:** Unknown — no advertised salary figure (`shouldDisplayCompensationOnJobPostings: false` on the Ashby posting); skip component split, detailed market rows, and HR verification questions.

**Comp score: 4/5.** Above market in expectation, discounted for the absence of any stated figure and for the possibility that Deployments pays under the research band.

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|------------------|-----|
| 1 | Professional Summary | Generic dual-track framing across evals and VLA | Two to three sentences leading with policy training on real embodiments and full-stack failure diagnosis, then the eval rigor. Zero pronouns, past tense for results, per profile rule 7 | The Deployments reader needs "makes robots work" in the first line, not "designs evaluations" |
| 2 | Core Competencies (one line) | Broad ML and robotics mix | One line only, CV-backed: VLA policy training and finetuning, sim2real, data curation, ROS2, perception (YOLO/LiDAR), PyTorch/JAX | Profile rule 11c: one line, no keyword salad, every term must survive a "tell me about that" follow-up |
| 3 | Merlyn Labs bullet order | Paper-first ordering | Lead with AlohaMini sim-to-real, then the conservative-finetuning result (21% to 42%), then RLinf. Keep the VLM-judge bullet, drop it before dropping a hardware bullet | Physical robot first for a physical-deployment team. Profile rule 4: pick the 1 to 2 most role-relevant, do not stack all of Merlyn |
| 4 | BEHAVIOR-1K project | Standard ordering | Lead with proprioceptive collapse (60% masking, up to 48%) and boundary resampling on long-tail subtasks; keep "trained on 22 of 50 scored task types, 10,000+ demonstrations" exactly as written in `article-digest.md` §1 | Proprioceptive collapse is a hardware-facing failure mode and sits top of the finding hierarchy (profile rule 5). Never state 22 or 50 alone |
| 5 | BMO block | Six bullets | Keep the bias-detection and eval-pipeline bullets in that order; keep the RL-environments bullet. Do not add the greeter robot | Delta D007: a strong off-domain bullet beats a weak on-domain one. Profile rule 3: the robot is never a robotics credential |
| 6 | Epineuron | Often trimmed on robotics CVs | Keep at least the FDA Breakthrough PeriPulse line and the 900% battery-life debugging line | Profile rule 12: no gutted one-liner roles. For a reliability-focused team, hardware debugging with a number is directly on-message |
| 7 | Voice-controlled prosthetic project | Present | Keep, and make the perception-to-control span explicit (YOLO plus LiDAR to grasp planning on a 7-DOF arm) | Maps 1:1 to "debug the full stack from perception to control" |
| 8 | Header contact row | Standard | Exactly one line, location item exactly "Toronto, Canada", no visa text. Measure with `.tmp-measure.mjs` before any PDF | Profile rule 11b and the `_custom.md` measured-contact-row rule; a wrapped header shipped twice already |
| 9 | LinkedIn headline | Research-forward | Add "VLA policy training, sim2real" ahead of the evals language for the duration of this application | Deployments recruiters search on embodiment terms |
| 10 | Paper references | — | Never write "published", "accepted", "under review", or a venue for the recalibration paper. It was submitted to CoRL 2026 and rejected | `article-digest.md` §3 and profile portfolio notes |

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Train and tune policies to improve real-world performance | pi-0.5 LIBERO-PRO recalibration | Published pi-0.5 checkpoint scored 96% on standard LIBERO but 21% on position-swap evaluation | Determine whether the collapse was architectural or an artifact of the training recipe | Ran a conservative full-finetuning sweep (batch 64, LR 1e-5), then tested and rejected two rival hypotheses: LoRA (15-21%, consistently below FFT at matched hyperparameters) and frozen video-diffusion visual priors (42% down to 35%) | Position-swap success doubled to 42%, stable 8k-27k steps, while matching standard LIBERO, with no architectural change | The brittleness was recipe-induced trajectory memorization. Recent methods reporting LIBERO-PRO gains are measuring against a miscalibrated baseline. Note: submitted to CoRL 2026 and rejected, so never claim a venue |
| 2 | Diagnose failures across the full stack | Proprioceptive collapse on BEHAVIOR-1K | Policies plateaued on manipulation tasks in OmniGibson despite more data | Find what the policy was actually keying on | Systematically masked proprioceptive input and measured the effect | Masking 60% of proprioception improved task success by up to 48% | The policy was reading its own joint state instead of the scene. Cleanest example of a failure that no amount of extra data would have fixed |
| 3 | Curate data and iterate | Boundary resampling on long-tail subtasks | Long-tail subtasks in the 50-task benchmark were failing at the seams between skills | Improve success without more demonstrations | Oversampled skill-transition boundaries in the training mix | Doubled manipulation success on long-tail subtasks | Data curation moved the number more than model changes did. Directly on-message for a team that curates customer-task data |
| 4 | Deploy and debug learned policies on physical robots | AlohaMini sim-to-real | Hand-built AlohaMini embodiment, household manipulation tasks trained in simulation | Get simulation-trained behaviour to run on the physical arm | Built the embodiment, ran the transfer, debugged the sim-to-real gap end to end | Household tasks running on real hardware | Be explicit about scale: one bench robot, not a fleet. Use it to show the loop, not to claim deployment experience |
| 5 | Debug the full stack from perception to control | Voice-controlled robotic prosthetic (UofT) | Natural-language commands needed to become manipulation sequences on a 7-DOF arm | Build the whole path from utterance to grasp | LLM-based control pipeline for command decomposition; YOLO object detection fused with LiDAR depth for 3D localization and grasp planning | Working end-to-end pipeline on the simulated 7-DOF arm | Every layer in the JD's list appears here except hardware. Say "simulated" without being prompted |
| 6 | Ensure on-site reliability of the system | Epineuron PeriPulse power debugging | Device battery life was inadequate for clinical use | Extend runtime without redesigning the device | Oscilloscope and power-analyzer characterization of draw across operating modes | 900% battery-life improvement; PeriPulse is FDA Breakthrough-designated and in multinational clinical trials | Closest thing on the CV to keeping hardware alive in the field, under IEC 60601-1 and ISO 13485 validation protocols |
| 7 | Set up tests, evals, and data collection pipelines | BMO agentic bias discovery | An agentic tool serving $200B+ AUM in wealth management appeared to work correctly case by case | Determine whether behaviour was systematically off | Built evaluation harnesses and a deterministic pipeline over hundreds of synthesized inputs | Surfaced systematic risk-downplaying behaviour that was invisible at anecdote scale | The point is that the behaviour only became visible once the test setup scaled. Same argument applies to robot policies on customer tasks |
| 8 | Write production-quality code that interfaces with infrastructure | RLinf flow-matching VLA integration | RLinf had no path to RL-train flow-matching VLAs on BEHAVIOR-1K in OmniGibson | Add it in a form the maintainers would accept | Implemented and open-sourced the integration; carried it through upstream review | Merged; enables RL training on the BEHAVIOR-1K suite | Strongest available evidence that his code survives someone else's standards |
| 9 | Bridge research and operations | Dual-track pattern | Enterprise AI work at BMO by day, frontier robotics research at Merlyn Labs nights and weekends | Keep both productive without either becoming a hobby | Ran an eval-first approach in both: find the failure mode, quantify it, ship the correction | Bias finding at BMO; 8th place in Stanford's BEHAVIOR-1K Challenge with a 3-person team | This is the answer to "why you for a bridge role". Say "we placed 8th" (team result) |
| 10 | Practical mindset, motivated by making things work | McMaster open-source prosthetic | Motorized lower-arm prostheses were out of reach on cost | Make one anybody could build | Led development of an open-source motorized prosthetic | Assemblable by anyone for under $300 | The build-for-a-real-user instinct, from before the research track. Useful against the "are you actually practical" screen |

**Recommended case study.** Bring the pi-0.5 recalibration as a 10-minute walkthrough, framed for PI as a favourable result about their own model: the published checkpoint's LIBERO-PRO collapse is a training-recipe artifact, not a representational limit, and a conservative recipe recovers half the gap. Include the two rejected hypotheses (LoRA, frozen visual priors) and the bounded-effect result (too-conservative recipes drop back to 26%), because the negative results are what make it a study rather than a tuning anecdote. This is also the single best warm-contact asset in the whole search.

**Likely red-flag questions.**

1. *"Have you deployed a robot outside a lab?"* — No. Answer flat, then redirect to the loop: sim-to-real on AlohaMini, proprioceptive collapse, and hardware reliability work at Epineuron under clinical validation protocols. Do not stretch the BMO greeter robot into a deployment credential.
2. *"This role is not open-ended research. Are you sure you want it?"* — The honest answer decides whether to keep pursuing this req at all. If yes, ground it: the pattern is find the failure, quantify it, ship the correction, and deployment is where the failures actually are.
3. *"What is Merlyn Labs?"* — Use the profile's approved line: "Self-organized research collective. Three of us doing robotics research nights and weekends. We placed 8th in Stanford's BEHAVIOR-1K Challenge, published our methods, and contribute to open-source RL infra." Never imply funding, headcount, or company status.
4. *"Is the recalibration paper published?"* — No. Submitted to CoRL 2026 and rejected. Say that plainly and let the result stand on its own.
5. *"You are finishing an M.Eng through April 2027 in Toronto and this is on-site in San Francisco."* — Relocation is preferred, not a concession. Canadian citizen, TN-eligible, no sponsorship needed. Start date: 2 to 4 weeks from an offer.
6. *"Only 22 of the 50 BEHAVIOR-1K tasks?"* — Compute limits; trained on 22, scored against all 50. Never state one number alone.

## G) Posting Legitimacy

**Tier: High Confidence.**

| Signal | Assessment |
|--------|------------|
| Source | The company's own Ashby job board (`jobs.ashbyhq.com/physicalintelligence`), retrieved from the public posting API. Not a third-party aggregator or recruiter repost |
| JD specificity | High. Names a specific team (Deployments), a specific problem space (customer workflows, dexterous task finetuning, on-site reliability), and distinguishes "hope you'll bring" from "bonus points". Low boilerplate ratio |
| Company reality | Verified independently: $1.6B raised across two rounds, reported $11.2B valuation, pi-0 and pi-0.5 models public, named investors including Alphabet's CapitalG |
| Salary transparency | None. `shouldDisplayCompensationOnJobPostings: false`. Legal for a private California employer at this posting date; noted, not penalized |
| Scam-like language | None. No fees, no "unlimited earnings", no personal-device or crypto requests. Includes the standard San Francisco Fair Chance Ordinance notice |
| Prior appearances | `data/scan-history.tsv` line 511: added 2026-09-02 via ashby-api, `publishedAt` 2026-01-23. Four sibling PI reqs captured in the same run. One earlier PI req (e4301617, Robotics Research Engineer) was marked `skipped_expired` on 2026-07-05, so this board does get pruned, which makes a still-listed req more meaningful |
| Freshness | **unverified (batch mode).** Roughly 7 months since `publishedAt`. Still returned as `isListed: true` by the posting API on 2026-09-02, but evergreen versus stale cannot be distinguished without a browser check |
| Apply-button state | **unverified (batch mode).** Playwright unavailable. `applyUrl` is present and well-formed |
| Blacklist | Not present. `data/blacklist.md` is empty |

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
| North Star alignment | 4.0/5 |
| Compensation | 4.0/5 |
| Culture / working model | 4.0/5 |
| Red flags | 0 |
| **Global** | **3.9/5** |

**Verdict: Consider, and treat it as a stretch.** Calibration Rule 8 puts robotics back at full weight and names Physical Intelligence in scope, so this does not get filed as a fallback. Calibration Rule 1 does not fire: there is no PhD gate and no publication gate on this title, which makes it the most reachable of PI's four listed research-track reqs. Calibration Rule 3 does not fire either: no numeric YoE minimum to be filtered on mechanically.

What does fire is Calibration Rule 2. PI is ultra-selective by any measure, and the résumé that arrives cold is one where the Deployments reader's first question, "has this person kept robots running somewhere real", has the answer no. Calibration Rule 7 then settles the ranking: this is a prestige-brand role with a genuine attainability problem, and it must not crowd out more attainable robotics startups. It also points at the route in. He has a real, non-generic, verifiable reason to reach a PI researcher directly: an experimental result about their own published checkpoint that is favourable to them.

So: worth pursuing, but the warm contact comes first and the application goes inside that thread. A cold submission here is the lowest-yield of the three routes and should not be the plan.

## Extracted Keywords

deployments, learned policies, physical robots, full-stack debugging, perception, policy, control, hardware, policy training, policy tuning, data curation, real-world performance, production-quality Python, infrastructure integration, evals, data collection pipelines, operators, partner engagement, deployment contexts, research-to-operations bridge, real-world failure modes, robot manipulation platforms, neural network debugging, autonomous systems, early-stage robotics, foundation models, dexterous tasks, on-site reliability, San Francisco, on-site
