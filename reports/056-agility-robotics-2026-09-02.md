# Evaluation: Agility Robotics — Senior AI Software Engineer, Reinforcement Learning

**Date:** 2026-09-02
**Archetype:** Robotics / VLA Research Engineer (primary) + Robotics Software Engineer (co-primary)
**Score:** 3.8/5
**Legitimacy:** High Confidence
**Work Auth:** ⛔ No sponsorship
**URL:** https://www.agilityrobotics.com/about/job-post?gh_jid=6127693004
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 056-agility-rl-swe

---

## Machine Summary

```yaml
company: "Agility Robotics"
role: "Senior AI Software Engineer, Reinforcement Learning"
score: 3.8
legitimacy_tier: "High Confidence"
archetype: "Robotics / VLA Research Engineer"
final_decision: "Consider"
hard_stops:
  - "JD requires proven deployment of RL policies on real bipedal or quadrupedal robots; no legged-robot deployment exists in cv.md"
  - "JD requires 4+ years developing and deploying RL policies for robotics; standing YoE answer is 2-4 and RL-for-robotics wall-clock is roughly 1 year"
soft_gaps:
  - "No evidence of exploration-strategy design as a named competency"
  - "Perception-in-the-loop experience is planning-stage (YOLO plus LiDAR grasp planning), not high-rate reactive control"
  - "No contact-rich manipulation, force-torque or tactile sensing"
  - "No teacher-student policy distillation evidence"
  - "No accepted publication at NeurIPS/ICML/CoRL/RSS/ICRA; CoRL 2026 submission was rejected"
  - "M.Eng not yet conferred (expected April 2027) against a bonus MS/PhD preference"
top_strengths:
  - "Reward design against gaming: VLM judges turning rollouts into dense, hard-to-game RL rewards"
  - "Systematic RL recipe study: conservative finetuning doubled pi-0.5 LIBERO-PRO position-swap success from 21% to 42%"
  - "RL infrastructure and simulation: open-sourced flow-matching VLA integration for RLinf enabling RL on BEHAVIOR-1K in OmniGibson"
  - "Sim-to-real on a hand-built AlohaMini embodiment plus BEHAVIOR-1K 8th place"
risk_level: "Medium"
confidence: "High"
next_action: "Apply to the sibling Senior AI Research Engineer req (gh_jid 6032175004, req 785) FIRST after a liveness check, paired with a direct note to the AI Innovation team; treat this RL req as a stretch second touch, not the opener"
work_auth: "no_sponsorship"
discard_reasons:
  - "seniority_mismatch"
  - "missing_hard_requirement_legged_robot_rl_deployment"
via: null
company_confidential: false
advertised_comp: "$187,000—$292,000 USD"
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
| Detected archetype | Robotics / VLA Research Engineer (primary), Robotics Software Engineer (co-primary) |
| Domain | Humanoid robotics, commercially deployed (Digit) |
| Function | RL controls: locomotion, whole-body control, manipulation, perception-conditioned policies |
| Team | AI Controls team, Software Engineering department |
| Seniority | Senior individual contributor, 4+ years RL-for-robotics stated |
| Work mode | Hybrid, based out of one of Fremont CA, Salem OR, or Pittsburgh PA |
| Requisition | 825 (internal job id 5192301004) |
| Posted / updated | Published 2026-07-28, updated 2026-08-11 |
| Advertised comp | $187,000—$292,000 USD anticipated base range |
| Work authorization | "All of our roles are U.S.-based. Applicants must have current authorization to work in the United States." |
| Profile caps applied | Calibration rules 3 (hard YoE gates are semi-hard), 5 (label stretch), 7 (attainability first), 8 (robotics co-primary) |

**TL;DR.** This is close to the ideal subject matter: RL policies for humanoid locomotion, whole-body control and manipulation, plus RL training infrastructure, simulation environment design, and sim-to-real, shipped to robots that actually run in customer facilities. The thematic fit is near the top of anything evaluated in this pipeline. The problem is the gate, not the content. Two of the stated requirements are things Shayan cannot claim: 4+ years deploying RL policies for robotics, and proven deployment on real bipedal or quadrupedal robots. Both are the kind of mechanical filter a recruiter screen applies literally. The sibling req on the same board, Senior AI Research Engineer (gh_jid 6032175004), asks for 3+ years of learning-from-demonstration and no legged deployment at all, pays more, and matches his strongest evidence directly. That one is the better first application.

**Work-authorization note.** The JD never mentions sponsorship, so it is not a literal sponsorship refusal. It does state an explicit requirement for *current* US work authorization, which Shayan does not hold today. Per profile rule 9 he is TN-eligible, not TN-authorized, and that distinction must never be blurred. Classifying this as `unstated` (defined as neutral and not a blocker) would understate a real screen risk, so it is recorded as `no_sponsorship`. In practice TN converts this from a blocker into a logistics item for any recruiter who knows the category: it is issued at the border on an employer letter, with no petition, no cap and no lottery. US robotics startups usually do know it. Treat it as a screen risk to pre-empt in the application, not as a disqualification.

**Culture screen:** not produced by this batch prompt.

---

## B) CV Match

| # | JD requirement | Evidence in cv.md / article-digest.md | Verdict |
|---|----------------|----------------------------------------|---------|
| 1 | 4+ yrs developing and deploying RL policies for robotics | Merlyn Labs since Aug 2025, BMO RL environments since Sep 2025, U of T RL coursework. Wall-clock RL-for-robotics is roughly one year | ❌ Not met |
| 2 | Strong Python, hands-on deep learning framework (PyTorch) | Skills line: Python, C/C++, PyTorch, JAX. All Merlyn and BEHAVIOR work is PyTorch-based | ✅ Strong |
| 3 | Designing reward functions | "Developing VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game" (Merlyn). This is reward design with an explicit anti-gaming objective, which is the harder version of the skill | ✅ Strong |
| 4 | Tuning hyperparameters to solve complex control tasks | The recalibration study is a systematic hyperparameter investigation: conservative full finetuning at batch 64 / LR 1e-5 doubled position-swap success 21% to 42%, stable across 8k-27k steps; LoRA (15-21%) and frozen video-diffusion visual priors (42% to 35%) were tested and rejected; too-conservative recipes (batch 16 / LR 1e-6) fell to 26% | ✅ Strong |
| 5 | Implementing exploration strategies | No direct evidence in the source files | ⚠️ Gap, soft |
| 6 | Perception-in-the-loop control, real-time sensory inputs for reactive/adaptive behavior | YOLO object detection plus LiDAR depth mapping for 3D localization and grasp planning on a 7-DOF simulated arm (U of T). VLA policies at BEHAVIOR are vision-conditioned by construction. Both are perception-conditioned, neither is a high-rate reactive control loop | ⚠️ Adjacent |
| 7 | **Proven deployment of RL policies on real bipedal or quadrupedal robots** | AlohaMini is a hand-built tabletop bimanual manipulator. The sim-to-real work there is real and on hardware, but it is not legged, and there is no locomotion work anywhere in the sources | ❌ **Not met, hardest gap** |
| 8 | Robot simulation environments (MuJoCo-Warp, Isaac) and sim-to-real | Skills: OmniGibson, MuJoCo, Sim2Real. RLinf integration enabled RL training on BEHAVIOR-1K in OmniGibson. OmniGibson itself runs on NVIDIA Omniverse / Isaac Sim, so the Isaac toolchain is adjacent territory rather than wholly new, though Isaac is not named in the CV | ✅ Strong (MuJoCo/OmniGibson), ⚠️ Isaac unnamed |
| 9 | Core RL infrastructure, scalable training pipelines, evaluation frameworks | Open-sourced flow-matching VLA integration for RLinf; deterministic agent eval pipeline over hundreds of synthesized inputs at BMO; trained on 10,000+ demonstrations for BEHAVIOR-1K | ✅ Strong |
| 10 | Design new simulation environments and tasks | RLinf/OmniGibson integration work, plus BEHAVIOR task coverage across 22 of 50 scored task types | ✅ Good |
| 11 | Ship production-quality policies with on-robot software teams | No production robot deployment. Closest analogue is Epineuron: PCB design and IEC 60601-1 / ISO 13485 validation protocols for a device now in multinational clinical trials, which is genuine safety-critical hardware shipping discipline in a different domain | ⚠️ Adjacent |
| 12 | Bonus: MS or PhD | M.Eng in AI & Robotics, University of Toronto, expected April 2027. Not yet conferred | ⚠️ Partial |
| 13 | Bonus: contact-rich manipulation, force-torque or tactile sensing | No evidence | ⚠️ Gap, soft |
| 14 | Bonus: policy distillation (teacher-student) | No evidence | ⚠️ Gap, soft |
| 15 | Bonus: publications at NeurIPS/ICML/CoRL/RSS/ICRA | The "Recalibrating VLA Baselines" paper was submitted to CoRL 2026 and rejected. A technical report and a LessWrong analysis exist. Neither clears a top-venue publication bar and neither may be described as published or under review | ❌ Not met |

### Gap analysis and mitigation

**Gap 1: legged-robot RL deployment (requirement 7). Hard blocker as written.**
Not a nice-to-have. It is the requirement most specific to the AI Controls team's actual work, and there is no adjacent experience that honestly substitutes: manipulation sim-to-real on a tabletop bimanual arm is a different control problem from bipedal locomotion. Mitigation is limited and should not be oversold. The honest framing is transferable method rather than transferable domain: the sim-to-real loop, the reward design, the RL infrastructure and the failure-mode diagnosis all carry over, the embodiment does not. The only real fix is an artifact (see the case study in Block F), and that takes weeks, not days. Do not apply to this req claiming this box is checked.

**Gap 2: 4+ years RL-for-robotics (requirement 1). Semi-hard per calibration rule 3.**
Recruiter screens filter on stated YoE mechanically, and this is not waivable by team norms or title inflation the way a "senior" label sometimes is: the number is attached to a specific, narrow skill. The standing YoE decision (2-4, user-ratified 2026-07-28) is the answer to give on forms and remains correct, but it sits visibly below the ask. There is no version of this where the number reads as a match. Weigh it as binding rather than hand-waving it.

**Gap 3: exploration strategies, contact-rich manipulation, distillation. Soft.**
These are single-line JD items, and two of the three are bonus qualifications. None would sink a candidacy that cleared gaps 1 and 2. Distillation in particular is worth reading as an opportunity: teacher-student transfer from a state-based policy to a perception-driven one is close to the recalibration work's methodology, and it is a credible thing to propose rather than claim.

**Gap 4: publications. Soft here, and note it is a bonus line, not a requirement.**
This req asks for publications only under Bonus Qualifications, so calibration rule 1 (PhD plus first-author publications as a hard stop) does not fire. That rule is about Research Scientist titles gating on publications; this is a Software Engineer title with publications as a plus. The CoRL rejection costs nothing here beyond a missed bonus.

---

## C) Level and Strategy

### JD level vs natural level

The title is Senior AI Software Engineer and the body asks for 4+ years of a narrow specialty. Shayan's natural level for robotics RL work is mid, arguably strong-mid on the strength of the research output, but not senior against this specific yardstick. The research quality is genuinely above his years: the proprioceptive-collapse finding and the recalibration study are the kind of work that gets noticed. That closes the gap in a conversation with a hiring manager. It does not close the gap in a résumé screen, which is where this application would actually be decided.

### Screen risk, stated plainly

**This req is a low-probability cold résumé screen, and it should be labelled a stretch (calibration rule 5).**

Two mechanical filters, not one:

1. Stated 4+ years RL-for-robotics against a 2-4 answer and roughly one year of wall-clock evidence.
2. "Proven experience deploying reinforcement learning policies on real-world bipedal or quadrupedal robots" against zero legged-robot work.

A single failed numeric gate is often survivable when the rest of the profile is loud. Two failed gates, one of which is a domain-specific experience claim rather than a number, is a different situation. A screener reading this CV has an easy, defensible reason to pass before anyone technical sees it.

This also matches the pattern already in the user's own data (calibration rule 7a): the one advance so far came through a take-home (Mercor); the three rejections were all cold résumé screens. Agility is a hot, newly-public humanoid company with 69 open reqs and heavy inbound. A cold application to its most requirement-specific senior RL role is the worst-odds shape available, applied to one of the best-fit subjects available. That tension is the whole story of this evaluation.

### Selling seniority without lying

Lead with output density rather than tenure. The defensible claims, all backed by the sources:

- Found and quantified a failure mode nobody had named (proprioceptive collapse, 60% masking improving task success by up to 48%).
- Ran a controlled recipe study that overturned a published baseline's interpretation, including rejecting two rival hypotheses rather than only confirming the favoured one.
- Shipped open-source infrastructure others build on (flow-matching VLA integration for RLinf).
- Did all of it nights and weekends while holding a full-time enterprise AI research role.

That last point is the seniority argument, and it should be made as a fact rather than a boast: the volume of shipped research per unit time is the evidence, not the years elapsed.

What must not happen: no inflation of AlohaMini into "robot deployment", no implying the CoRL submission was published or under review, no describing Merlyn Labs as anything beyond a three-person self-funded collective, and no claim of current US work authorization.

### If they downlevel

Accept it, and consider proposing it first. Agility's board carries more attainable adjacent reqs, including Robotics Software Engineer III, Manipulation (gh_jid 6132259004) which is already in `data/scan-history.tsv`. A downlevel at a company whose robots ship to customers is a better outcome than a senior title at a company whose robots do not exist yet. The script:

> "I'd rather be levelled correctly and get to the work. My RL and sim-to-real depth is real but my legged-locomotion time is zero, and I'd rather learn that from your controls team than argue about a title."

### Which req to apply to first

**The sibling Senior AI Research Engineer (gh_jid 6032175004, req 785) is the better first application, and it is not close.**

| Dimension | This req (825, RL SWE) | Sibling (785, AI Research Engineer) |
|-----------|------------------------|--------------------------------------|
| Experience ask | 4+ yrs deploying RL policies for robotics | 3+ yrs learning-from-demonstration |
| Hard domain filter | Proven RL deployment on real bipedal/quadrupedal robots | None comparable |
| Core methods | RL for locomotion, WBC, manipulation | Imitation learning, robot foundation models, end-to-end policies |
| Named tooling | MuJoCo-Warp, Isaac | DiffusionPolicy, MuJoCo, Isaac Sim |
| Hardware ask | Legged robots | Robot data collection, training, testing on hardware for manipulation |
| Degree | MS/PhD as bonus | MS required, PhD bonus |
| RL for locomotion/WBC | Core requirement | Listed under Bonus Points |
| Advertised base | $187,000—$292,000 USD | $195,000—$304,000 USD |
| Published / updated | 2026-07-28 / 2026-08-11 | 2026-07-02 / 2026-07-02 |

Why 785 wins:

- **Learning-from-demonstration is literally what the BEHAVIOR-1K work is.** 10,000+ demonstrations, 22 of 50 task types trained, 8th place, plus the boundary-resampling result that doubled long-tail subtask success. That maps to the primary requirement one-to-one.
- **DiffusionPolicy familiarity** is the closest thing to a named tool match anywhere across both reqs: the RLinf contribution is a flow-matching VLA integration, and flow matching is the direct successor family to diffusion policies.
- **"Robot data collection, training, and testing on hardware to perform manipulation tasks"** describes the AlohaMini sim-to-real work almost exactly, and AlohaMini is a manipulation embodiment, so it counts here in a way it does not count against a legged-robot requirement.
- **It moves RL for locomotion and whole-body control into Bonus Points.** The single hardest gap on this req becomes optional on that one.
- Higher band, and the 3+ against 4+ ask is one year closer to a defensible 2-4 answer.

The one caution: 785 was published 2026-07-02 and has not been updated since, roughly two months, while 825 was refreshed 2026-08-11. Run `node check-liveness.mjs` on 785 before investing in a tailored CV. If it has gone stale, this RL req becomes the fallback rather than the second choice, and the pitch changes to leading with imitation learning and sim-to-real while naming the locomotion gap upfront.

Do not cold-apply to both simultaneously. Two applications the same week to near-identical senior titles on one board reads as spray, which is exactly the pattern the ethical-use rule and the user's own quality-over-quantity preference push against. Apply to 785, and hold 825 for either a recruiter conversation ("is there a better-fit req?") or a later, warmer touch.

---

## D) Compensation and Demand

### Company type and reliability

- **Company type:** Growth-stage venture-backed robotics company mid-transition to public. On 2026-06-24 Agility announced a roughly $2.5B merger with Churchill Capital Corp XI (Nasdaq: CCXI) to list as **AGLT**, expected to close by end of 2026, raising $620M+ gross ($420M trust plus roughly $200M incremental led by Foxconn). Amazon, NVIDIA and SoftBank are investors. High confidence, multiple independent sources plus an SEC Form 425 filing.
- **Compensation reliability: High.** The JD states the figure as a base-pay range under a US pay-transparency disclosure, and separates it explicitly from the rest of the package ("In addition to base pay..."). This is not an OTE, not a "total package", not an "up to". That is the most trustworthy shape a posted number takes.

### Component split

- **Advertised range:** "$187,000—$292,000 USD" (Anticipated Salary Range, verbatim)
- **Likely guaranteed base:** $187K to $292K depending on office. Fremont CA sits at the top of the band, Salem OR at the bottom, Pittsburgh PA in between; the JD says the range "may change based on geographical location". Realistically, a candidate who screens at the junior edge of senior lands roughly $190K to $230K, and picking Fremont pulls that up.
- **Variable / conditional cash:** annual discretionary bonus, explicitly "for eligible roles" and explicitly discretionary. Do not count it.
- **Expected stable cash:** roughly $190K to $230K base for a realistic offer at this level.
- **Non-cash:** company stock options on a standard 4-year, 25%-per-year vest; 401(k) with 6% company match (real money, roughly $11K to $17K/yr at this base); 100% company-paid medical, dental, vision and short/long-term disability for the employee; benefits effective day one; unlimited PTO plus 12 holidays and a winter shutdown; catered lunches four days a week at Salem and Pittsburgh; parental leave; tuition reimbursement; relocation assistance "for eligible roles".

The equity here is unusual and worth weighting up. Options in a pre-listing company that has a signed SPAC deal expected to close within months are far closer to liquid than the typical robotics-startup grant, which is the risk the profile flags when it says to weigh equity quality heavily. That is a genuine positive against, say, an equal-band offer from a Series B robotics company. The counterweight is that $2.5B is a deal valuation, not a market-tested one, and de-SPAC listings are frequently volatile post-close. Treat the options as real but unpriced, not as a number to add to base.

### Market data and the Levels.fyi discrepancy

Levels.fyi (last updated 2026-07-21) reports a median Software Engineer total compensation at Agility Robotics of $150K, with the highest reported package at $225K, and a company-wide span of roughly $138K to $238K. That sits well below this JD's base band alone.

This discrepancy is worth understanding rather than averaging away. The likely explanation is composition, not contradiction: that sample is small, skews to the older Salem Oregon engineering base, and covers general software rather than senior AI controls talent. The posted band reflects what Agility is paying *now* to compete for humanoid RL engineers against Figure, Skild, 1X and Physical Intelligence, in Fremont. For this specific req, the JD number is the better signal, because pay-transparency-posted ranges are contractually meaningful in a way crowd-sourced medians are not. The mild caution it supports: Agility's historical pay was modest, so negotiate against the posted band and the competitive market, not against internal precedent, and expect the low end of the band to be the opening move at the Salem office.

### Demand trend

Humanoid RL controls is one of the hottest and thinnest talent markets in robotics right now, which is precisely why the band is where it is. Agility's own board shows 69 open reqs, several in AI and perception (including Senior Staff AI Software Engineer, Perception and Robotics Software Engineer III, Manipulation, both already in `data/scan-history.tsv`). Aggregators reporting 83 total employees are stale or wrong and should be ignored. No layoff, freeze or distress signal surfaced. Hiring is expanding into a capital raise, a factory built for 10,000 robots a year, and $300M+ in stated orders.

### Comp score against profile targets

Profile target for US robotics startups is $250K+ total comp with strong equity, minimum $180K. Base alone clears the $180K minimum comfortably at every office. A realistic package of roughly $190K to $230K base, plus a 6% 401(k) match, plus fully employer-paid insurance, plus options in a company about to trade publicly, plausibly totals $230K to $320K. That is at or slightly above the stated robotics-startup target and well below the $300K to $500K frontier-lab band, which is the correct comparison only if a frontier lab is actually attainable, and per calibration rule 7 it currently is not.

**Comp score: 4/5** (above market for robotics startups, with unusually good equity liquidity for the category).

**Sources:** [Agility Robotics SPAC announcement](https://www.agilityrobotics.com/content/agility-robotics-to-go-public-through-merger-with-churchill-capital-corp-xi) · [WWD Sourcing Journal](https://wwd.com/sourcing-journal/logistics/agility-robotics-goes-public-humanoid-robots-digit-spac-merger-amazon-1239030943/) · [SEC Form 425](https://www.sec.gov/Archives/edgar/data/0002074973/000121390026071290/ea029548401ex99-2.htm) · [Levels.fyi Agility Robotics](https://www.levels.fyi/companies/agility-robotics/salaries/software-engineer) · [Glassdoor](https://www.glassdoor.com/Salary/Agility-Robotics-Salaries-E1697238.htm)

---

## E) Personalization Plan

Applies to whichever Agility req is submitted. Tuned here for 785 first, with notes for 825.

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|-----------------|-----|
| 1 | Professional Summary | "Works across LLM/agent evaluation, VLA models, RL, and robotics" | Lead with embodied RL and imitation learning, then evals. Two to three sentences, zero pronouns, past tense for results | Robotics is the buyer here; evals are the differentiator, not the headline (profile rules 2, 7) |
| 2 | Core Competencies (one line) | General ML plus robotics mix | Reinforcement Learning · Imitation Learning · Sim-to-Real · VLA Models · Reward Design · MuJoCo / OmniGibson · PyTorch | Exactly one line, every item survives a "tell me about that" follow-up (rule 11c) |
| 3 | Merlyn Labs bullets | Five bullets, evals-weighted | Reorder: RLinf integration first, then recalibration result, then AlohaMini sim-to-real, then VLM judges. Cut nothing | Requirements 8, 9, 4 and 3 in that order of JD prominence (rule 4: pick role-relevant, do not stack) |
| 4 | BEHAVIOR-1K project | Third under Research & Projects | Promote to first project. Lead with the proprioceptive-collapse finding, keep the 22-of-50 / 10,000+ demo framing intact | Finding hierarchy rule 5; and for 785 this is the single most on-target item on the CV |
| 5 | BMO bullets | Six bullets, eval-first | Keep the $200B+ AUM bias finding and the deterministic eval pipeline. Promote "Developing RL environments to train specialized agents" to sit directly under them | Delta D007 (binding, recur 1): never drop the strong BMO bullets on a robotics application. The RL-environments bullet is a genuine RL-infrastructure data point |
| 6 | BMO greeter robot | Present as "Side project" | Cut entirely for this application | Rule 3: never a robotics credential. On a humanoid-robotics application the risk of it being misread is highest |
| 7 | Prosthetic project (U of T) | Third project | Keep, reframed toward perception-in-the-loop: YOLO plus LiDAR to 3D localization and grasp planning on a 7-DOF arm | Only evidence touching JD requirement 6; needed for 825, useful for 785 |
| 8 | Epineuron | Full co-op entry | Keep at least the FDA Breakthrough / clinical-trials bullet and the IEC 60601-1 / ISO 13485 validation bullet | Rule 12: no gutted one-liners. Safety-critical hardware validation is real signal for a company shipping robots that work next to people |
| 9 | BardSong | Second project | Cut for one-page fit if needed | Lowest relevance to an embodied-RL reader; cut whole items, never thin others (rule 12) |
| 10 | Education | "M.Eng, MIE — AI & Robotics" | "M.Eng in AI & Robotics, University of Toronto, expected April 2027" | Rule 8 phrasing. Matters more on 785, where MS is a stated requirement |
| 11 | Header contact row | Six items | Measure with `.tmp-measure.mjs`, drop portfolio URL first if it wraps. Location is exactly "Toronto, Canada" | Rules 11b and the measured-not-assumed rule; no visa text in the header, ever |
| 12 | Paper reference | Cited in Merlyn bullets | Keep "proposed an alternative baseline" phrasing. Never "published", "accepted", "under review" or a venue name | article-digest §3: CoRL 2026 rejected |
| 13 | LinkedIn headline | Current narrative headline | Shift toward "RL and imitation learning for embodied agents" for the duration of the robotics push | Recruiters at Agility will look; rule 8 has robotics as co-primary |
| 14 | Form free-text (work auth) | n/a | "Canadian citizen, TN-eligible (no sponsorship needed; TN is issued at the border, no employer petition)." | Profile policy: the clarifier belongs in form free-text. Given this JD's explicit current-authorization line, pre-empt it rather than waiting to be asked |
| 15 | Cover letter, if used | n/a | Flat identity statement, then the RL/IL evidence, then one sentence on TN. No border explainer, no aphorisms, no posting mirroring | Deltas D003, D005, D008, D009, D012 all binding here |

---

## F) Interview Plan

### STAR+R stories

| # | JD requirement | Story | S | T | A | R | Reflection |
|---|----------------|-------|---|---|---|---|------------|
| 1 | Design reward functions resistant to gaming | VLM judges at Merlyn | RL on long-horizon household tasks needed dense reward, sparse success signals were too weak to train on | Produce dense, context-dependent rewards a policy could not shortcut | Built VLM judges scoring rollouts into dense reward metrics, designed specifically to be difficult to game | Dense reward signal usable for RL without the policy learning to satisfy the judge instead of the task | The hard part of reward design is not accuracy, it is being unsatisfiable by shortcuts. Same instinct that found the BMO bias |
| 2 | Tune hyperparameters to solve complex control tasks | pi-0.5 LIBERO-PRO recalibration | Published pi-0.5 checkpoint scored 96% on standard LIBERO but collapsed to 21% on position-swap | Determine whether the collapse was architectural or recipe-induced | Ran a controlled recipe study: conservative full finetuning at batch 64 / LR 1e-5; tested and rejected LoRA (15-21%) and frozen video-diffusion visual priors (42% to 35%); bounded the effect by showing batch 16 / LR 1e-6 fell to 26% | Position-swap success doubled to 42%, stable 8k-27k steps, matching standard LIBERO with no architectural change | The baseline everyone compared against was miscalibrated, so reported gains were partly compensating for recipe-induced brittleness. Rejecting the rival hypotheses mattered more than confirming ours |
| 3 | Deploy RL/learned policies, diagnose failure modes | Proprioceptive collapse, BEHAVIOR-1K | Policies trained on 10,000+ demos plateaued on manipulation tasks for no obvious reason | Find what the policy was actually keying on | Systematically masked proprioceptive input and measured the effect on task success | Masking 60% of proprioception improved task success by up to 48% | The model was reading its own joint state as a shortcut instead of the scene. Generalises: any input that predicts the next action too well becomes a crutch |
| 4 | Simulation environments, RL infrastructure | RLinf flow-matching VLA integration | RLinf could not run RL on BEHAVIOR-1K tasks with flow-matching VLA policies | Make that combination trainable and open-source it | Built and upstreamed the flow-matching VLA integration enabling RL training on the BEHAVIOR-1K suite in OmniGibson | Merged open-source contribution others build on | Infrastructure work compounds. This is the piece of the portfolio most directly comparable to "develop and maintain core RL infrastructure" |
| 5 | Sim-to-real transfer | AlohaMini | Needed to know whether policies trained in simulation survived contact with real hardware | Run household manipulation tasks on a physical embodiment | Hand-built the AlohaMini embodiment and ran sim-to-real transfer of household tasks | Working sim-to-real loop on hardware built from scratch | Building the robot taught the failure modes faster than reading about them. Honest limit: bimanual tabletop manipulation, not legged locomotion |
| 6 | Training pipelines at scale, long-tail performance | Boundary resampling, BEHAVIOR-1K | Long-tail subtasks failed disproportionately in a 50-task-scored challenge | Raise success on the subtasks the data underrepresented | Oversampled skill transitions via boundary resampling | Doubled manipulation success on long-tail subtasks; team placed 8th in the Standard Track | Most of the gain lived in the transitions between skills, not within them. Data curation beat architecture changes |
| 7 | Evaluation frameworks | BMO deterministic eval pipeline | A GenAI tool serving $200B+ AUM in wealth management behaved acceptably in spot checks | Determine whether behaviour was systematically misaligned rather than anecdotally off | Built evaluation harnesses and test setups over hundreds of synthesized inputs | Surfaced systematic risk-downplaying behaviour that was invisible at small sample sizes | Behaviour that only appears at scale needs deterministic evaluation to see at all. Directly transfers to policy evaluation frameworks |
| 8 | Perception integrated into control | Voice-controlled robotic prosthetic, U of T | Natural-language commands had to become manipulation sequences on a 7-DOF arm | Localise and grasp objects named in speech | Built an LLM control pipeline and integrated YOLO detection with LiDAR depth mapping for 3D localisation and grasp planning | Working perception-to-grasp pipeline in simulation | Closest thing to perception-in-the-loop on the CV. Honest limit: planning-stage perception, not a high-rate reactive loop |
| 9 | Deliver safe, high-quality software | Epineuron PeriPulse | Neurostimulation device heading into multinational clinical trials | Meet medical-device safety and validation standards | Designed and assembled PCBs, authored IEC 60601-1 and ISO 13485 validation protocols, modeled nerve-field penetration in COMSOL to set electrode diameter, cut power draw for a 900% battery-life improvement | FDA Breakthrough-designated device now in multinational clinical trials | Shipping hardware that touches people imposes a discipline most ML work never encounters. Relevant to robots working beside warehouse staff |

### Recommended case study

**Perception-conditioned locomotion policy with teacher-student distillation, in simulation.** Train a state-based RL locomotion or whole-body-control teacher in MuJoCo or Isaac, distill it into a depth- or vision-conditioned student, and evaluate with a deliberately hard-to-game success metric rather than a reward proxy.

This is the single highest-leverage artifact available, and it should be framed as a proposal, not as past work:

- It attacks the one hard blocker directly. It is the only way to put legged, perception-conditioned RL into the portfolio without an employer's robot.
- It hits JD bonus item "policy distillation (teacher-student) for transferring state-based policies to perception-driven ones" precisely.
- It reuses the existing toolchain (MuJoCo, OmniGibson/Omniverse, RLinf, PyTorch), so the ramp is short.
- The evaluation design is where his actual differentiation shows, and it distinguishes the artifact from the many hobby locomotion repos.
- It compounds with the proof-building track already noted in `modes/_profile.md`, and weakens calibration rules 2 and 3 over time.

Sim-only is fine and should be stated as sim-only. Overclaiming here would be worse than the gap it patches.

### Likely red-flag questions

| Question | How to answer |
|----------|---------------|
| "You haven't deployed RL on a legged robot." | Concede immediately and precisely. "No, I haven't. My hardware sim-to-real is bimanual tabletop manipulation on a robot I built. The transferable parts are the sim-to-real loop, reward design and the diagnosis work; locomotion dynamics I'd be learning." Never stretch AlohaMini toward locomotion |
| "Do you have four years of RL experience?" | "Not four years of RL-for-robotics, no." Then pivot to output density: the RLinf contribution, the recalibration study, the BEHAVIOR result, all inside about a year alongside a full-time role. Do not litigate the number |
| "Have you published at CoRL or NeurIPS?" | "No. We wrote a paper on the pi-0.5 LIBERO-PRO recalibration and submitted it to CoRL; it was rejected. The technical report and a LessWrong analysis are public." Never soften "rejected" into "under review" |
| "What is Merlyn Labs?" | The approved one-liner verbatim: self-organized research collective, three people, nights and weekends, 8th in BEHAVIOR-1K, published methods, contributes to open-source RL infrastructure. Never imply funding, headcount or company status |
| "Are you authorized to work in the US?" | "I'm a Canadian citizen and TN-eligible, so I don't need sponsorship." Flat, then stop. In written form fields only, add the border/no-petition clarifier. Never claim current authorization |
| "Your M.Eng isn't finished." | "Correct, expected April 2027. It's a course-based M.Eng; my research happens at Merlyn Labs." |
| "Why humanoids, coming from a bank?" | Two-track by design: enterprise AI rigor by day, embodied research by night, converging on finding where AI systems fail and building evaluations that surface it. Agility is where that stops being two tracks |
| "Why should we hire you over someone with legged experience?" | Do not fight the premise. "For a pure locomotion seat, probably you shouldn't. Where I'd be worth more is the manipulation, perception-conditioned policy and evaluation-infrastructure side, and I'd want to be levelled honestly on the locomotion part." |

---

## G) Posting Legitimacy

**Tier: High Confidence**

| Signal | Finding |
|--------|---------|
| Source | Official Greenhouse board (`boards-api.greenhouse.io/v1/boards/agilityrobotics`), canonical URL on the company's own domain |
| Identity verification | **Performed and passed.** Board listing (69 jobs) independently confirms id 6127693004 maps to "Senior AI Software Engineer, Reinforcement Learning" at Agility Robotics. Re-verified with three cache-busted fetches after a mid-session cache anomaly (see note below); all three returned identical content, 16,551 bytes, req 825 |
| Requisition | 825, internal job id 5192301004 |
| Freshness | Published 2026-07-28, updated 2026-08-11. Recent and actively maintained |
| Salary transparency | Explicit base range posted, $187,000—$292,000 USD, with a location-variance disclosure. Strong positive signal |
| JD specificity | High. Named tools (Mujoco-Warp, Isaac), named methods (teacher-student distillation, force-torque/tactile sensing), a specific team (AI Controls), and a specific product (Digit). Low boilerplate ratio |
| Company verifiability | Very high. Public SPAC merger with Churchill Capital Corp XI, SEC Form 425 on file, named customers (Schaeffler, GXO, Toyota Motor Manufacturing Canada, Mercado Libre), 65,000+ logged operating hours |
| Agency posture | "Agility Robotics does not accept unsolicited referrals from third-party recruiting agencies. We prioritize direct applicants." A legitimacy positive: real employers protect their funnel this way, and it confirms `via: null` is correct |
| Hiring signals | 69 open reqs on the board, multiple AI and perception roles. No layoff, freeze or distress signal found |
| Prior appearances | Present in `data/scan-history.tsv` twice, added 2026-09-02 via `x-websearch` and `greenhouse-full`. Consistent listing, no repost-churn pattern |
| Scam-like language | None |
| Apply-button state | `unverified (batch mode)` |
| Live freshness re-check | `unverified (batch mode)` |

**Cache anomaly note (process, not a legitimacy finding).** Mid-evaluation, two cached JSON files in the scratchpad were found to contain a different company's posting ("Human Evaluation Researcher" at "Nuance Labs") and a truncated 8-job board listing, despite having been fetched correctly minutes earlier. The corruption was confined to the local cached files; three subsequent cache-busted fetches of the live endpoint returned byte-identical, correct Agility content, and a fresh board fetch again returned 69 jobs with the correct id-to-title mapping. This report is written from re-verified live content. Flagging it because the orchestrator warned about exactly this failure mode, and because it means cached JD files in this batch run should not be trusted without re-verification.

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
| CV match | 3.0/5 |
| North Star alignment | 5.0/5 |
| Compensation | 4.0/5 |
| Culture / working model | 4.0/5 |
| Red flags | 0 |
| **Global** | **3.8/5** |

**Weighting.** CV match is double-weighted as the attainability proxy, per calibration rule 7 (attainability is the first sort key): (3.0 x 2 + 5.0 + 4.0 + 4.0) / 5 = 3.8.

**Dimension notes.**

- **CV match 3.0.** Thematic fit is roughly 4.5; literal requirement fit is roughly 2.5. Two stated requirements are unmet, one of them a domain-specific experience claim with no honest substitute.
- **North Star 5.0.** RL for humanoid locomotion, whole-body control and manipulation, plus RL infrastructure, simulation design and sim-to-real, shipping to robots in production. Robotics is a co-primary target (rule 8) and this is the centre of it.
- **Compensation 4.0.** At or slightly above the stated robotics-startup target, with unusually liquid equity for the category.
- **Culture / working model 4.0.** Hybrid with relocation assistance, and US relocation is preferred rather than penalised (location policy). Friction from the three-office constraint and the explicit current-authorization requirement.
- **Red flags 0.** Nothing disqualifying. De-SPAC equity volatility and an untested $2.5B deal valuation are noted as Medium risk, not scored against.

**Decision: Consider, labelled stretch.** Excellent subject matter, real money, verified employer, and a screen Shayan is unlikely to clear cold. The correct move is not to skip Agility, it is to enter through the sibling req.

---

## Extracted Keywords

`reinforcement learning` · `RL policies` · `humanoid robotics` · `bipedal locomotion` · `whole-body control` · `manipulation` · `perception-in-the-loop` · `collision-free motion` · `reward function design` · `hyperparameter tuning` · `exploration strategies` · `sim-to-real transfer` · `MuJoCo-Warp` · `Isaac Sim` · `simulation environments` · `RL infrastructure` · `scalable training pipelines` · `evaluation frameworks` · `policy distillation` · `teacher-student` · `contact-rich manipulation` · `force-torque sensing` · `tactile sensing` · `PyTorch` · `Python` · `imitation learning` · `robot foundation models` · `on-robot deployment` · `production policies` · `Digit`
