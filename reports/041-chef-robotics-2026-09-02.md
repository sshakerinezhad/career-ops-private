# Evaluation: Chef Robotics — Senior ML Engineer, Manipulation

**Date:** 2026-09-02
**Archetype:** Robotics / VLA Research Engineer (primary) + Robotics Software Engineer (secondary)
**Score:** 4.0/5
**Legitimacy:** High Confidence
**Work Auth:** ⚠️ Unstated
**URL:** https://jobs.lever.co/ChefRobotics/ad92bc91-ae6b-4ef1-a794-97913052b20a
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 041-chef-robotics-manipulation

---

## Machine Summary

```yaml
company: "Chef Robotics"
role: "Senior ML Engineer, Manipulation"
score: 4.0
legitimacy_tier: "High Confidence"
archetype: "Robotics / VLA Research Engineer"
final_decision: "Apply"
hard_stops: []
soft_gaps:
  - "5+ years deploying ML systems for robotics manipulation is a stated minimum; wall-clock is roughly 1 year full-time (2-4 by the standing YoE answer). This is the single biggest reason the application dies at resume screen, and it is semi-hard, not waivable by argument."
  - "No production hardware deployment. AlohaMini sim2real is real hardware but a hand-built nights-and-weekends research embodiment, not a fleet running in customer facilities."
  - "No recovery/fallback behavior work for dropped items, mis-grasps, or partial occlusions."
  - "No multi-end-effector experience (suction, parallel jaw, multi-finger); no food, agriculture, or deformable-object domain background."
  - "No teleoperation or kinesthetic-teaching data-collection pipeline experience explicitly on record."
  - "No model compression, quantization, or TensorRT edge-deployment experience."
  - "MS not yet conferred: M.Eng in AI & Robotics expected April 2027, course-based, while working full-time."
top_strengths:
  - "Action chunking is published, verifiable work: chunked execution beat temporal ensembling roughly 3x on BEHAVIOR-1K, and the JD names action chunking as a required architecture."
  - "Evaluation metrics that predict real-world performance is the exact thesis of the LIBERO-PRO recalibration paper: conservative finetuning doubled position-swap success 21% to 42%, showing the published baseline was miscalibrated."
  - "Imitation learning plus RL both covered with public artifacts: BEHAVIOR-1K 8th place on 10,000+ demonstrations, and an open-sourced flow-matching VLA integration for RLinf."
  - "Deterministic eval pipelines at production stakes: evaluation harnesses at BMO surfaced an agentic tool serving $200B+ AUM subtly downplaying investment risk."
risk_level: "Medium"
confidence: "High"
next_action: "Warm contact first: identify the Autonomy team lead or manipulation hiring manager on LinkedIn via contacto, send the BEHAVIOR-1K technical report plus the RLinf merge, then submit through Lever within 48 hours. A cold Lever application into a 5+ YoE requirement is the weakest available route."
work_auth: "unstated"
discard_reasons: []
via: null
company_confidential: false
advertised_comp: "$180,000 - $280,000 USD per year"
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
| Detected archetype | Robotics / VLA Research Engineer (primary); Robotics Software Engineer (secondary) |
| Domain | Food manufacturing automation, deformable-object manipulation, robotics-as-a-service |
| Function | Own the learning systems for pick, place, and handling of diverse food classes across multiple end effectors, end to end from data strategy to on-robot debugging |
| Seniority | Senior (stated), Autonomy team, Engineering department |
| Remote / work mode | Onsite, 5 days per week, San Francisco. Explicitly stated in the JD, no hybrid option offered |
| Team size | Company headcount roughly 139-144 (ZoomInfo / Tracxn, May 2026). JD describes the immediate team as "small, high-ownership" |
| Commitment | Full Time |
| Work authorization | JD is silent on sponsorship. Canadian citizen, TN-eligible, so no H-1B petition is needed, but the employer still has to issue the offer letter and support-letter package for a TN at the border. Treated as neutral, not a blocker |
| TL;DR | The closest content match in the current pipeline to what Shayan actually publishes. The JD names action chunking, diffusion policies, transformer action models, imitation learning, RL, and "evaluation metrics that accurately predict real-world manipulation performance" as core duties. Four of those five map onto verifiable public artifacts. The drag is the stated 5+ years and the absence of production-fleet deployment |
| Profile caps / overrides applied | Rule 8 (robotics co-primary, Chef named in scope): full archetype weight, not treated as a fallback. Rule 7 (attainability first): a 144-person Series A robotics startup ranks above marquee labs at equal fit, and a warm path is part of the plan. Rule 3 (hard YoE numbers are semi-hard): the 5+ requirement is stated plainly in Block C and priced into the score. Rule 1 (PhD + first-author pubs = hard stop) does NOT trigger: this is an engineer title, education reads "MS or PhD ... or equivalent practical experience", and publications appear only under nice-to-have |

**Culture screen:** not produced in batch mode (see Risk Summary).

---

## B) CV Match

### Core responsibilities ("In this role, you will")

| JD requirement | Evidence | Verdict |
|----------------|----------|---------|
| Design and train manipulation policies: behavior cloning, imitation learning, RL, for dexterous handling across item classes and end-effector types | `cv.md` BEHAVIOR-1K: trained on 10,000+ demonstrations covering 22 of 50 scored task types, 8th place Standard Track. `cv.md` Merlyn: open-sourced flow-matching VLA integration for RLinf enabling RL training on BEHAVIOR-1K in OmniGibson. `cv.md` BMO: developing RL environments for specialized agents | Strong on IL and RL. Gap on end-effector diversity: no suction, parallel-jaw, or multi-finger work on record |
| Implement and evaluate modern policy architectures: diffusion policies, transformer action models, action chunking | `article-digest.md` §1: chunked execution beat temporal ensembling roughly 3x, revealing VLA architectures lack temporal awareness. `article-digest.md` §3: systematic study of the π0.5 flow-matching VLA checkpoint, including LoRA vs full-finetune and frozen video-diffusion visual priors as tested-and-rejected hypotheses | Direct hit, and unusually literal. Action chunking is not a keyword here, it is a published finding |
| Build data collection pipelines: teleoperation, kinesthetic teaching, autonomous rollouts; dataset curation and augmentation | `cv.md`: sim-to-real transfer on a hand-built AlohaMini embodiment. `cv.md` BEHAVIOR-1K: doubled long-tail subtask success by oversampling skill transitions via boundary resampling. `cv.md` BMO: deterministic eval pipeline over hundreds of synthesized inputs | Partial. Boundary resampling is real dataset-curation work with a measured result. Teleoperation and kinesthetic teaching are adjacent (AlohaMini is a teleoperable platform class) but are NOT claimed anywhere in the sources, so do not assert them |
| Define evaluation metrics and regression benchmarks that accurately predict real-world manipulation performance | `article-digest.md` §3: the entire paper is an argument that a widely used benchmark result was miscalibrated, that recent methods report gains against that miscalibrated baseline, and that a conservative recipe doubles position-swap success 21% to 42% without architectural change. `cv.md` Merlyn: VLM judges scoring rollouts into dense, context-dependent RL rewards designed to be difficult to game. `cv.md` BMO: deterministic agent eval pipeline | Strongest single match in the posting. This bullet is Shayan's stated thesis restated in a production setting |
| Build recovery and fallback behaviors for dropped items, mis-grasps, partial occlusions | Nothing direct. Nearest adjacent: proprioceptive collapse work (masking 60% of proprioception improved task success by up to 48%) is failure-mode diagnosis, not runtime recovery | Gap |
| Partner with perception and robotics engineers on end-to-end grasp-to-place validation across new food classes | `cv.md` UofT prosthetic project: YOLO object detection integrated with LiDAR depth mapping for 3D localization and grasp planning, LLM-based control pipeline for a 7-DOF arm | Partial. Real grasp-planning pipeline work, but simulated arm, not a production line |

### Stated requirements ("What You Bring")

| Requirement | Evidence | Verdict |
|-------------|----------|---------|
| MS or PhD in Robotics, ML, CS, or equivalent practical experience | M.Eng in AI & Robotics, University of Toronto, expected April 2027. B.Eng Engineering Physics, McMaster, Dean's Honour List | Partial. Degree not yet conferred. The "or equivalent practical experience" clause is the intended route here |
| 5+ years developing and deploying ML systems for robotics manipulation, visuomotor control, or robot learning | BMO Sep 2025 to present, Merlyn Aug 2025 to present, concurrent. Epineuron co-op 2021-2022 is biomedical hardware, not robotics ML | **Miss, and it is the decisive line.** See Block C |
| Deep expertise in at least two of: imitation learning, RL, grasp estimation, learned motion generation | Imitation learning: BEHAVIOR-1K, 10,000+ demonstrations, π0.5 finetuning study. RL: RLinf flow-matching integration, VLM reward judges, BMO RL environments | Clears the bar on two of four, with public artifacts for both |
| Strong PyTorch, production-quality training and evaluation pipelines | `cv.md` skills: Python, C/C++, PyTorch, JAX. Deterministic eval pipeline at BMO; multi-thousand-demonstration training runs at Merlyn | Clear |
| Hands-on deploying policies to real robotic hardware, not just simulation | `cv.md`: sim-to-real transfer of household tasks on a hand-built AlohaMini embodiment. `cv.md` BMO side project: repairing and reprogramming a legacy greeter robot | Partial. Clears "not just simulation" literally. Does not clear "deployed in production facilities across North America and Europe", which is the bar the team actually lives at |
| Strong Python SWE fundamentals, maintainable tested code across research and production | RLinf contribution was merged into a public open-source RL framework, which is externally verifiable code review by a third party | Clear enough to defend |
| Track record owning projects end-to-end, problem framing through field deployment and iteration | Co-founded a 3-person research collective, took BEHAVIOR-1K from training through 8th place, published a technical report plus a LessWrong analysis, all while working full-time | Strong on ownership. Weak on the "field deployment" half |

### Nice-to-haves

| Item | Status |
|------|--------|
| VLA models, diffusion policies, transformer action representations | Direct hit, three for three |
| Simulation environments (MuJoCo, Isaac Sim, Genesis) and sim-to-real | Hit: OmniGibson, MuJoCo, sim2real all on `cv.md` |
| Multiple end-effector types (suction, parallel jaw, multi-finger, soft) | Gap |
| Food, agriculture, or consumer-goods robotics with high object variability | Gap |
| Model compression, quantization, TensorRT for edge deployment | Gap |
| Contributions to open robotics datasets or publications at CoRL, ICRA, RSS, NeurIPS | Partial and needs care. The RLinf open-source contribution is a genuine open robotics code contribution. The BEHAVIOR-1K technical report and LessWrong post are not peer-reviewed venues. The "Recalibrating VLA Baselines" paper was submitted to CoRL 2026 and rejected: never claim published, accepted, under review, or a venue |
| Simulation for synthetic data generation and domain randomization | Adjacent via OmniGibson and sim2real work; not explicitly claimed as domain randomization |

### Gap analysis and mitigation

| Gap | Blocker or nice-to-have | Adjacent experience | Portfolio proof | Mitigation |
|-----|-------------------------|---------------------|-----------------|------------|
| 5+ years robotics ML | Semi-hard blocker at screen stage | Roughly 1 year full-time, concurrent across two roles; 2-4 by the standing form answer | BEHAVIOR-1K 8th place, RLinf merge, one full paper | Do not argue the number. Route around the screen with a warm contact so a human reads the artifacts first. If asked directly, answer the standing 2-4 and immediately move to output density: three verifiable research results and an open-source merge inside 12 months |
| Production hardware deployment | Real, and the JD says it twice ("not just simulation results", "ships to customers, not just in the lab") | AlohaMini sim2real, legacy greeter-robot repair at BMO | AlohaMini build | Be honest: real hardware yes, production fleet no. Then reframe: the reason the BEHAVIOR-1K findings mattered is that sim-only evaluation was hiding the failure, which is the same argument Chef makes about lab-vs-production |
| Recovery and fallback behaviors | Nice-to-have as a hiring bar, core to the day job | Proprioceptive collapse and long-tail subtask work are failure-mode analysis | BEHAVIOR-1K report | Pitch it as the natural extension: diagnosing why a policy fails at a skill boundary is the prerequisite for a fallback that triggers at the right moment. Offer it as the case study (Block F) |
| Multiple end effectors, deformable food | Nice-to-have, learnable on the job | 7-DOF grasp planning, PCB and hardware background | UofT project, Epineuron | Not worth over-explaining. Name the hardware background once and move on |
| Edge deployment, TensorRT, quantization | Nice-to-have | None | None | Do not claim it. Say it is a gap and that the training-and-eval side is where the contribution starts |

---

## C) Level and Strategy

**JD level vs natural level.** The title says Senior and the JD prices it at 5+ years. Shayan's natural level on content is mid-to-senior in research output and early-career in wall-clock. Calibration rule 3 applies directly: minimum-qualification lines with hard year counts are semi-hard, screens filter on them mechanically, and hand-waving them is exactly the failure mode this profile was updated to prevent.

**Screen risk, stated plainly.** Strict wall-clock on BMO (Sep 2025 to present) and Merlyn (Aug 2025 to present, concurrent) is under one year. The standing, user-ratified answer for YoE dropdowns is 2-4, applied here without re-litigating it. Against a stated 5+, that is a visible mismatch on the form itself. Concretely:

- If Chef's Lever flow includes a YoE knockout question, the application is filtered before a human reads it. Probability of a cold submission reaching the hiring manager: low.
- If it does not, a recruiter still scans dates first. A résumé showing two roles both starting in 2025 against a 5+ line is a fast no for someone triaging 200 applications.

**Why the requirement is nonetheless worth working around rather than treating as final** (per rule 4, the specific justification, not a wave):

1. Chef is roughly 144 people at Series A stage. At that size the manipulation lead usually reads the pipeline personally rather than delegating to an ATS rule. That is a structural difference from an Amazon-style mechanical screen, not wishful thinking.
2. The education line already carries an explicit "or equivalent practical experience" escape clause, which signals the team knows the credential is a proxy.
3. The one required expertise gate that is written as a genuine test, "deep expertise in at least two of imitation learning, RL, grasp estimation, learned motion generation", is cleared on two with third-party-verifiable artifacts (a public leaderboard placement and a merged open-source contribution).
4. The one requirement that cannot be routed around is production deployment, and that one is honestly partial rather than absent.

None of that makes the 5+ line waivable in the abstract. It makes it worth spending a warm contact on. Cold-applying and hoping is the losing play.

**How to sell seniority without lying.** Sell density of output, never inflate the timeline.

- Lead with externally verifiable results: 8th place in Stanford's BEHAVIOR-1K Challenge, a merged contribution to RLinf, a full paper. Three verifiable artifacts inside twelve months is a legible seniority signal that does not depend on a date range.
- Frame the failure-mode work as ownership: identified proprioceptive collapse, quantified it (60% masking, up to 48% success improvement), and shipped the correction. That is the "owning projects end-to-end" bullet answered with a real example.
- Merlyn Labs stays honest and restrained: a self-organized 3-person research collective, nights and weekends. Never imply funding, headcount, or company status. The results do the talking.
- The paper is described as written and self-published only. Submitted to CoRL 2026 and rejected. Never say published, accepted, under review, or name a venue.

**If Chef downlevels.** Expect an offer at "ML Engineer" rather than "Senior ML Engineer" as the most likely non-rejection outcome, and prepare for it rather than being surprised by it.

- Accept the title, hold the band. The posted range is $180K-$280K. A downlevel realistically lands $185K-$215K base. That clears the $180K minimum in `config/profile.yml` but sits well under the $250K+ target for US robotics startups.
- Script for it, adapted from the profile's negotiation scripts: "I'm comparing with US opportunities in the higher range. I'm drawn to Chef because the deformable-food dataset is the only place this problem exists at production scale. Can we explore the upper half of the posted band, or make up the difference in equity?"
- Early-stage equity is the lever that matters more than title here. Ask for the strike price, the current preferred valuation, the total outstanding shares, and the option exercise window before treating any equity number as meaningful.
- Do not accept a title downlevel plus a bottom-of-band base plus vague equity. Two of three is negotiable; all three is a signal to walk.

---

## D) Compensation and Demand

**Company type: Growth-stage startup / VC-backed startup.** High confidence. Chef Robotics raised a $43.1M Series A and a $20.6M round in March 2025 (Crunchbase, PitchBook), backed by Kleiner Perkins, Construct Capital, Avataar Ventures, Bloomberg Beta, and Promus Ventures. Headcount roughly 139-144 as of May 2026. The distinguishing feature versus a typical Series A robotics company is real deployed revenue: robots running in North American and European production facilities for named customers (Amy's Kitchen, gategroup, CookUnity) on a robotics-as-a-service contract model, with over 100 million servings produced. That is a materially better risk profile than a pre-revenue robotics startup at the same stage.

**Advertised range (verbatim from the posting's structured salary field):** $180,000 - $280,000 USD per year.

**Component split.**

- **Advertised range:** $180,000 - $280,000 USD per year.
- **Likely guaranteed base:** the full advertised figure is base. The JD states the range "reflects the minimum and maximum target for new hire salaries for the position" and separately lists equity as an additional component, so this is not an OTE or total-package number.
- **Variable / conditional cash components:** none stated. No bonus, commission, or target-based pay appears in the posting.
- **Expected stable cash:** $180K-$280K base, pre-tax, position within the band set by level. Realistic landing given the YoE mismatch: $185K-$225K.
- **Non-cash benefits:** early-stage equity (explicitly called "a major part of the compensation package"), medical, dental and vision insurance, commuter benefits, flexible PTO, catered lunch, 401(k) matching.

**Compensation reliability: High.** The figure is unambiguously stated as salary, is separated from equity and benefits, and is a structured Lever pay-transparency field rather than marketing prose. The uncertainty here is *position within* the band, which is a negotiation question, not a reliability question. Cross-checks are thin: Levels.fyi's Chef Robotics page was last updated 2025-09-14 and carries no verified Senior ML Engineer entry; Glassdoor lists 16 salaries total across all roles. A senior full-stack posting at the company was benchmarked at $150K-$240K, which is consistent with the ML band sitting slightly higher.

**HR verification questions (tailored to a Series A RaaS startup):**

1. Where in the $180K-$280K band does this specific req sit for a candidate you would title "Senior", and what distinguishes a $200K offer from a $260K one?
2. What is the option grant size in shares, the current strike price, the total fully diluted share count, and the most recent preferred price per share?
3. What is the post-termination option exercise window, and are early exercise or extended windows available?
4. Is the next financing round expected within 12-18 months, and what is the current gross-margin trajectory on the RaaS contracts?
5. Is there any refresh grant schedule, or is the initial grant the whole equity story?
6. Is relocation support offered for a candidate moving from Toronto, and will Chef issue the employer support letter required for a TN entry?

**Market demand trend.** Demand for manipulation and robot-learning engineers in the Bay Area remains strong through 2026, with the VLA and robot-foundation-model wave pulling talent toward Physical Intelligence, Skild, Dyna, Figure, and Dexterity. Chef competes for the same candidates but differentiates on data: the proprietary deformable-food manipulation dataset is genuinely scarce and is the company's stated moat. For a candidate whose research is specifically about VLA generalization failure, access to that dataset is a non-comp form of compensation worth weighing.

**Comp score: 3/5 (market median).** The band top ($280K) would clear the $250K+ target for US robotics startups; the realistic landing after a probable downlevel does not. It clears the $180K minimum comfortably. Early-stage equity with real revenue behind it is above-average quality for the stage, but it is not cash and should not be scored as cash.

Sources: [Crunchbase](https://www.crunchbase.com/organization/chef-robotics), [PitchBook](https://pitchbook.com/profiles/company/267022-90), [Tracxn](https://tracxn.com/d/companies/chef-robotics/__ay3hGWqv7pvqyV-3mAPooHpdlYPGiPBXN_cM3_6WjTs), [Chef Robotics funding announcement](https://www.chefrobotics.ai/post/weve-raised-43-1m-to-accelerate-our-ai-enabled-robot-deployments), [Levels.fyi](https://www.levels.fyi/companies/chef-robotics/salaries), [Glassdoor](https://www.glassdoor.com/Salary/Chef-Robotics-Salaries-E7976753.htm).

---

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|------------------|-----|
| 1 | Professional Summary | Generic dual-track framing across evals and robotics | Two to three sentences leading with manipulation policy work: BEHAVIOR-1K placement, action-chunking finding, and evaluation design that predicts real-world performance. Zero pronouns, past tense for results | The JD's own bullet list names action chunking and predictive evaluation. Mirror their vocabulary using his real results |
| 2 | Core Competencies (one line) | Broad ML and robotics mix | Imitation Learning · Reinforcement Learning · VLA Models · Diffusion / Flow-Matching Policies · Action Chunking · Sim2Real · PyTorch · Evaluation Design | Every term is backed by `cv.md` or `article-digest.md` and would survive a "tell me about that" follow-up. No unbacked chips |
| 3 | Merlyn Labs bullets | Five bullets, mixed emphasis | Reorder to put the flow-matching VLA / RLinf integration and the π0.5 conservative-finetuning result first; keep AlohaMini sim2real as the hardware-contact bullet | RL on VLAs plus real-hardware transfer are the two requirements Chef weights hardest |
| 4 | BEHAVIOR-1K project block | Four bullets, chronological | Lead with the action-chunking finding (chunked execution beat temporal ensembling roughly 3x), then proprioceptive collapse, then boundary resampling for long-tail subtasks | Action chunking is named verbatim in the JD; the long-tail bullet is the closest thing on the CV to their "diverse item classes" problem |
| 5 | BMO bullets | Five bullets plus greeter-robot side project | Keep the two strongest (bias detection at $200B+ AUM, deterministic eval pipeline) per delta D007. Keep the greeter robot only if space allows, always labelled a side project | D007: strong off-domain bullets beat weak on-domain ones. The eval-pipeline bullet is on-domain here anyway, since Chef asks for regression benchmarks |
| 6 | UofT prosthetic project | Present | Keep, promoted above BardSong. Emphasize YOLO plus LiDAR grasp planning for a 7-DOF arm | Only grasp-planning and perception-integration evidence on the CV, and Chef explicitly asks for perception partnership on grasp-to-place |
| 7 | BardSong | Present | Cut first if the page overflows | Lowest relevance to manipulation |
| 8 | Epineuron | Full bullets | Keep at least the two strongest with metrics intact (FDA Breakthrough-designated PeriPulse in multinational trials, 900% battery-life improvement). Never compress to a one-liner | Rule 12: no gutted one-liner roles. It is also the only real hardware-productization evidence, which speaks to "ships to customers" |
| 9 | Header contact line | Multiple items | Exactly one line. Location reads "Toronto, Canada" only. Drop the portfolio URL before allowing a wrap. No visa text in the header | Rules 11b and 9 |
| 10 | Education line | M.Eng expected April 2027 | Phrase as "M.Eng in AI & Robotics, University of Toronto, expected April 2027". Never "M.Eng candidate" | Rule 8. Also pre-empts the "MS or PhD" line without overclaiming a conferred degree |
| 11 | LinkedIn headline | Current dual-track framing | Shift toward "Robotics / VLA research: manipulation policies, imitation learning, evaluation design" for the duration of this application cycle | Rule 8 puts robotics back at co-primary weight; recruiters at robotics startups scan the headline first |
| 12 | Form free-text (work auth) | n/a | "Canadian citizen, TN-eligible (no sponsorship needed; TN is issued at the border, no employer petition)." Checkboxes: authorized = Yes, requires sponsorship = No | Standing policy for form fields. Note: the border/petition clause belongs in forms only, never in a cover letter (delta D005) |
| 13 | Form free-text (start date) | n/a | "2-4 weeks from an offer (TN processing at the border is fast; ready to relocate to San Francisco)" | Standing policy. Relocation willingness is load-bearing for a 5-day onsite role |
| 14 | YoE dropdown | n/a | 2-4 | Standing user-ratified decision. Do not re-litigate per application |

---

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Implement and evaluate modern policy architectures including action chunking | Chunked execution vs temporal ensembling on BEHAVIOR-1K | VLA policies underperformed on long-horizon household tasks in OmniGibson | Determine whether the action-representation choice or the training data was the limiter | Ran chunked execution against temporal ensembling under matched conditions | Chunked execution outperformed temporal ensembling by roughly 3x | The architectures lacked temporal awareness. The representation, not the data, was the binding constraint. Directly relevant to choosing an action representation for a food line where cycle time matters |
| 2 | Define evaluation metrics and regression benchmarks that predict real-world performance | LIBERO-PRO recalibration of the π0.5 baseline | The published π0.5 checkpoint scored 96% on standard LIBERO but collapsed to 21% on position-swap evaluation | Determine whether the collapse was architectural or an artifact of the training recipe | Ran a conservative full-finetune (batch 64, LR 1e-5), then tested and rejected two rival hypotheses: LoRA (15-21%, consistently below FFT at matched hyperparameters) and frozen video-diffusion visual priors (42% down to 35%) | Position-swap success doubled to 42%, stable across 8k-27k steps, while matching standard LIBERO | The benchmark was measuring the recipe, not the model. Recent methods reporting LIBERO-PRO gains were partly compensating for a miscalibrated baseline. This is the single most transferable story: Chef needs benchmarks that predict line performance, not benchmarks that flatter the last checkpoint |
| 3 | Build recovery and fallback behaviors for mis-grasps and partial occlusions | Proprioceptive collapse on BEHAVIOR-1K | Policies were failing in ways the aggregate success metric did not explain | Isolate the failure mode | Masked proprioceptive input progressively and measured task success across the sweep | Masking 60% of proprioception improved task success by up to 48% | The policy was leaning on proprioception as a shortcut and ignoring visual context. Detecting that a policy has latched onto the wrong signal is the prerequisite for knowing when a fallback should fire |
| 4 | Design and train manipulation policies across diverse item classes | Boundary resampling for long-tail subtasks | Success was concentrated in common subtasks; rare skill transitions dragged the score | Improve long-tail performance without more compute budget | Oversampled skill-transition boundaries in the training mix | Doubled manipulation success on long-tail subtasks | The distribution, not the model, was the fix. Chef's growing menu of meal types is a long-tail problem by construction |
| 5 | Reinforcement learning for manipulation | Flow-matching VLA integration for RLinf | No open path existed to run RL on flow-matching VLAs against BEHAVIOR-1K in OmniGibson | Make it possible, in public | Implemented and open-sourced the integration into RLinf | Merged into the upstream open-source RL framework | Third-party code review on a public repo is the cheapest legible proof of production-quality engineering when the résumé is short on years |
| 6 | Evaluation pipelines that resist gaming | VLM judges for dense RL rewards at Merlyn Labs | Sparse task-success rewards gave almost no training signal for RL on long-horizon manipulation | Produce dense, context-dependent reward without opening a reward-hacking surface | Built VLM judges that score rollouts into dense rewards designed to be difficult to game | Dense reward signal usable for RL training | A judge that can be satisfied without doing the task is worse than no judge. Applies directly to any automated quality metric on a food line |
| 7 | Production-quality evaluation, high stakes | Evaluation harnesses at BMO's AI Centre of Excellence | An agentic tool serving $200B+ AUM in wealth management was in use | Establish whether its outputs were reliable | Built evaluation harnesses and test setups over hundreds of synthesized inputs | Surfaced systematic risk-downplaying behaviour that was invisible at anecdotal scale | The behaviour only became visible once the evaluation was scaled. This is the same argument Chef makes about lab results versus production, told in a regulated setting |
| 8 | Hands-on deployment to real robot hardware | AlohaMini sim2real | Simulation results needed validation on a physical embodiment | Transfer household-task policies from sim to real hardware | Hand-built an AlohaMini embodiment and ran sim-to-real transfer of household tasks | Working transfer on a physical arm | Say plainly this is a research embodiment, not a fleet. What it demonstrates is willingness to own the whole stack down to the hardware when nobody hands it to you |
| 9 | Ownership end-to-end, shipping under constraint | Co-founding Merlyn Labs | No lab, no funding, no compute allocation, full-time job already | Produce real research output anyway | Co-founded a 3-person collective working nights and weekends, self-funded, Toronto | 8th place in Stanford's BEHAVIOR-1K Challenge, a technical report, a LessWrong analysis, and a merged open-source contribution | Density of output under constraint is the honest answer to a years-of-experience question. Never inflate the collective into a company |
| 10 | Hardware and productization credibility | PeriPulse at Epineuron | A neurostimulation device was heading into multinational clinical trials | Get the hardware validated and field-ready | Designed and assembled PCBs, authored IEC 60601-1 and ISO 13485 validation protocols, optimized power draw via oscilloscope and power-analyzer testing, modeled nerve-field penetration in COMSOL | FDA Breakthrough-designated device now in multinational clinical trials; 900% battery-life improvement; COMSOL data set electrode diameter | Shipping regulated hardware to real users is a different discipline from research. Useful evidence for a team whose robots run in customer facilities every day |

### Recommended case study

**"A regression benchmark for a new food class, plus the fallback it justifies."** Propose a two-part design for onboarding an unseen food item (something deformable and temperature-sensitive, such as shredded cheese or cooked pasta):

1. **The benchmark.** An offline evaluation suite whose score actually predicts line success rate, built by deliberately breaking the correlation the way LIBERO-PRO breaks LIBERO: hold out position swaps, container geometry changes, and moisture/temperature variants rather than held-out trajectories of the same setup. State the acceptance criterion up front: the benchmark is only useful if its ranking of two policies matches their ranking on the real line.
2. **The fallback.** Use the failure signature the benchmark surfaces (analogous to proprioceptive collapse: the policy leaning on a shortcut signal) as the runtime trigger for a recovery behavior, rather than triggering on a downstream outcome like a detected drop.

This answers the JD's fourth bullet, covers the recovery-behavior gap by proposing rather than claiming, and is built entirely from work he has actually done.

### Likely red-flag questions

| Question | How to answer |
|----------|---------------|
| "The req says 5+ years. Walk me through your experience." | Do not argue the number and do not inflate it. Give the standing 2-4 answer, name the two concurrent roles honestly, and pivot immediately to output density: three verifiable artifacts in twelve months (BEHAVIOR-1K 8th place, a merged RLinf contribution, a full paper), all while working full-time. Then ask what the team actually needs someone to do in month one |
| "Have you deployed policies on real robots in production?" | "Real hardware yes, production fleet no." AlohaMini sim2real and the legacy robot repair at BMO are the honest extent. Then make the relevant point: the reason the BEHAVIOR-1K findings mattered is that sim-only evaluation was hiding the failure, which is the same gap Chef is describing |
| "Where was your paper published?" | Unpublished. Submitted to CoRL 2026 and rejected. Written and self-held. Never claim a venue, never say under review. The findings stand on their own and can be walked through in detail |
| "What is Merlyn Labs?" | The prepared one-liner, verbatim: "Self-organized research collective, three of us doing robotics research nights and weekends. We placed 8th in Stanford's BEHAVIOR-1K Challenge, published our methods, and contribute to open-source RL infra." Never imply funding, headcount, or company status |
| "You're finishing an M.Eng in April 2027. How does that work with onsite five days a week in San Francisco?" | Answer it directly rather than deflecting. Course-based M.Eng, not a research masters, no thesis obligation. Be ready with the specific plan for remaining coursework, because a 5-day-onsite startup will read an unresolved degree timeline as a commitment risk |
| "Why food manufacturing?" | The deformable-object dataset. Over 100 million servings of real manipulation data on objects that are irregular, visually similar, and change with temperature and moisture is a distribution that does not exist anywhere else, and generalization failure on exactly that kind of variation is what the last year of research has been about |
| "You have no experience with suction, parallel-jaw, or multi-finger end effectors." | Concede it cleanly. Point to the hardware background (PCB design, hand-built embodiment, 7-DOF grasp planning with YOLO and LiDAR) as evidence the mechanical side is not foreign, then ask which end effector is currently hardest and why |
| "Are you interviewing elsewhere?" | Honest and non-specific. Robotics startups and research engineering roles. Do not name a marquee lab as leverage at a company that competes on mission rather than brand |

---

## G) Posting Legitimacy

| Signal | Assessment |
|--------|------------|
| Company reality | Verified. Named production customers (Amy's Kitchen, gategroup, CookUnity), named institutional investors (Kleiner Perkins, Construct Capital, Avataar Ventures, Bloomberg Beta, Promus Ventures), corroborated headcount of roughly 139-144, and independent coverage on Crunchbase, PitchBook, and Tracxn |
| Posting channel | Lever ATS on the company's own subdomain, with a structured pay-transparency salary field. Not an aggregator repost, not a staffing intermediary |
| JD specificity | High. Names concrete architectures (diffusion policies, transformer action models, action chunking), concrete end-effector types, concrete simulators (MuJoCo, Isaac Sim, Genesis), and a specific technical problem (deformable food variability under temperature, moisture, and preparation state). This is not boilerplate |
| Salary transparency | Explicit: $180,000 - $280,000 USD per year, stated as salary and separated from equity and benefits |
| Boilerplate ratio | Low. Roughly one paragraph of company mission language against three detailed requirement lists |
| Scam-like language | None. No fees, no unsolicited-contact pattern, no vague "comprehensive package", no urgency pressure |
| Hiring and freeze signals | No layoff or hiring-freeze reporting found. Five concurrent Chef Robotics engineering reqs were returned by the Lever API in the 2026-09-02 scan, which is consistent with an actively scaling team |
| Prior appearances in `data/scan-history.tsv` | This exact posting was captured today (2026-09-02) via lever-api with a posted date of 2026-06-15. Four sibling Chef reqs were captured in the same run. One earlier Chef posting (a Senior Perception Engineer req, 2026-07-05) was recorded as `skipped_expired`, which indicates the company does retire filled reqs rather than leaving evergreen listings up |
| Posting age | Roughly 79 days old (posted 2026-06-15). Mildly aged. Still returned as live by the Lever API today, and Chef's history of expiring old reqs makes an unfilled-but-open interpretation more likely than a stale-listing one. Worth confirming freshness before investing in a warm-contact push |
| Apply-button state and live freshness | `unverified (batch mode)`: Playwright is unavailable, so the apply flow was not directly exercised |

**Tier: High Confidence.** Real company, real revenue, real customers, structured ATS posting with a transparent salary field, and a technically specific JD. The only open item is the posting's age, which is a freshness question rather than a legitimacy question.

---

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | — not evaluated |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |

---

## Global Score

| Dimension | Score |
|-----------|-------|
| CV match | 4.0/5 |
| North Star alignment | 4.5/5 |
| Compensation | 3.0/5 |
| Culture / working model | 4.5/5 |
| Red flags | -0.1 (5+ year minimum creates mechanical screen risk) |
| **Global** | **4.0/5** |

**Weighting note.** CV match 0.30, North Star 0.30, Compensation 0.20, Culture 0.20, giving 4.05 before the screen-risk deduction. North Star carries elevated weight because calibration rule 8 restores robotics to co-primary status and this req sits on both of the stated love axes at once: manipulation policy work on one side, evaluation design that predicts real-world performance on the other. Compensation is deliberately held at 3.0 rather than being rounded up on the strength of the band top, because the realistic post-downlevel landing does not reach the $250K+ target.

**Decision: Apply, with the warm path first.** This clears the bar; it is not a slam dunk. The content match on the five core responsibility bullets is the highest in the current pipeline, and calibration rule 7 puts an attainable robotics startup ahead of a prestige-brand alternative at equal fit. The stated 5+ years is the single thing most likely to kill it, and the correct response is to route around the résumé screen rather than to argue with the number. Not a stretch role by content; a stretch role by tenure.

---

## Extracted Keywords

manipulation policies · imitation learning · behavior cloning · reinforcement learning · diffusion policies · transformer action models · action chunking · Vision-Language-Action (VLA) models · grasp estimation · learned motion generation · visuomotor control · robot learning · PyTorch · sim-to-real transfer · MuJoCo · Isaac Sim · teleoperation · kinesthetic teaching · autonomous rollouts · dataset curation · data augmentation · training infrastructure · evaluation metrics · regression benchmarks · recovery behaviors · mis-grasp handling · partial occlusion · end effectors (suction, parallel jaw, multi-finger) · deformable object manipulation · edge deployment · TensorRT · quantization · domain randomization · production robotics
