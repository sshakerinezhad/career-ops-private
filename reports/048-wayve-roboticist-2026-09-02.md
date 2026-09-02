# Evaluation: Wayve — Roboticist, Robot Foundation Model

**Date:** 2026-09-02
**Archetype:** Robotics / VLA Research Engineer (primary) + Robotics Software Engineer (secondary)
**Score:** 4.1/5
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**URL:** https://wayve.firststage.co/jobs?gh_jid=8691402002
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 048-wayve-roboticist

---

## Machine Summary

```yaml
company: "Wayve"
role: "Roboticist, Robot Foundation Model"
score: 4.1
legitimacy_tier: "High Confidence"
archetype: "Robotics / VLA Research Engineer"
final_decision: "Apply"
hard_stops: []
soft_gaps:
  - "No production C++ robot software on the CV; C/C++ is listed as a skill but no bullet demonstrates shipped C++ control or planning code"
  - "No top-tier conference publication (ICRA/CoRL/IROS); the CoRL 2026 submission was rejected and the BEHAVIOR-1K output is a technical report plus a LessWrong analysis"
  - "M.Eng not complete until April 2027, against a JD that prefers PhD and accepts MS with strong relevant experience"
  - "No ROS/ROS2 bullet on the CV; ROS2 appears only in the skills line, not in a described system"
  - "Founding-member framing implies more autonomous lab-ops seniority than a first industry robotics role usually carries"
top_strengths:
  - "Hardware-through-policy full stack: hand-built AlohaMini sim2real, PCB design, COMSOL modeling, 7-DOF grasp pipeline with YOLO plus LiDAR"
  - "Real manipulation research output with external verification: 8th place in Stanford BEHAVIOR-1K and a merged flow-matching VLA integration in RLinf"
  - "Debugging policy failure modes is the documented specialty: proprioceptive collapse finding, chunked execution vs temporal ensembling, LIBERO-PRO recipe analysis"
  - "Evaluation and regression-testing instinct from BMO: deterministic eval pipeline over hundreds of synthesized inputs"
risk_level: "Low"
confidence: "Medium"
next_action: "Apply to this Roboticist req (NR-SCI14) before the sibling Research Scientist req, and pair it same-week with a LinkedIn note to a Sunnyvale MEGA founding member leading with the BEHAVIOR-1K 8th place and the merged RLinf flow-matching VLA integration"
work_auth: "not_needed"
discard_reasons: []
via: null
company_confidential: false
advertised_comp: "$184,200 to 240,000, plus a competitive equity package"
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
| Detected archetype | Robotics / VLA Research Engineer (primary), Robotics Software Engineer (secondary) |
| Domain | Robot foundation models for general-purpose robots beyond autonomous driving (MEGA team, Wayve Labs) |
| Function | Full-stack roboticist: hardware selection and integration, C++/Python robot software, policy deployment infrastructure, data-collection pilots, regression testing |
| Seniority | IC baseline. Title carries no level prefix, and Wayve lists a separate "Principal Roboticist, Robot Foundation Model" req (gh_jid 8692111002), so this is the non-principal rung |
| Work mode | Hybrid, Sunnyvale CA, core working hours, office and workshop time expected |
| Team size | New team, founding-member framing. Alex Toshev joined Wayve Labs in Aug 2026 as Research Director to lead general robotics; founding team is being built in Sunnyvale |
| Requisition | NR-SCI14, first published 2026-08-07, last updated 2026-08-07 |
| TL;DR | A 0-to-1 roboticist seat on a newly funded general-robotics foundation-model team: build and operate the robots, build the deployment and data flywheel around them, and debug where the policies break. That last part is exactly Shayan's documented specialty, and this is the Wayve door with the softest publication gate |
| Profile caps or overrides applied | Calibration Rule 7 (attainability first): ranked above the sibling Research Scientist req. Calibration Rule 8 (robotics co-primary): scored at full weight, not as a fallback. Calibration Rule 3 (stated qualifications are semi-hard): the PhD-preferred and publications-valued lines are treated as soft but real, and screen risk is stated plainly in Block C. Rule 1 does not fire here: this is not a Research Scientist title and publications are "highly valued", not required |
| Culture screen | Not produced in batch mode |

---

## B) CV Match

| JD requirement | Evidence from cv.md / article-digest.md | Verdict |
|----------------|------------------------------------------|---------|
| Experience in robot manipulation | BEHAVIOR-1K Challenge, 8th place Standard Track: trained on 10,000+ demonstrations covering 22 of 50 scored task types; doubled manipulation success on long-tail subtasks via boundary resampling. Merlyn Labs: π0.5 / LIBERO-PRO position-swap study, conservative finetuning 21% → 42% | Strong |
| Working with robot hardware | Hand-built AlohaMini embodiment running sim-to-real transfer of household tasks. Epineuron: PCB design and assembly, oscilloscope and power-analyzer optimization for 900% battery-life improvement, COMSOL electromagnetic modeling that set electrode diameter. McMaster Medical Design Team: open-source motorized prosthetic under $300 | Strong, and unusually deep for a research-track candidate |
| C++ and Python in robotics or ML environments | Python is everywhere in the CV. C/C++ appears in the skills line only; no bullet describes a shipped C++ control, planning, or driver component | Partial, the main technical gap |
| ROS / ROS2 based systems | ROS2 listed under Robotics & Hardware skills. Closest described system is the UofT 7-DOF arm: LLM control pipeline plus YOLO object detection with LiDAR depth mapping for 3D localization and grasp planning, described in simulation | Partial |
| Strong robotics and ML fundamentals, translating research into robust systems | M.Eng AI & Robotics coursework (Deep Learning, RL, AI Applications in Robotics, Healthcare Robotics); B.Eng Engineering Physics. Research-to-system translation shown by the RLinf contribution: open-sourced flow-matching VLA integration enabling RL training on BEHAVIOR-1K in OmniGibson | Strong |
| Infrastructure for policy deployment, data collection, learning flywheel | RLinf integration is upstream training infrastructure. BMO: deterministic agent eval pipeline over hundreds of synthesized inputs; internal infrastructure that provisions LLM agents from a written role and scope definition | Adjacent but real |
| Run experiments on robots, define data-collection pilots | BEHAVIOR-1K data work: boundary resampling to oversample skill transitions is exactly a data-collection design decision driven by a measured failure mode. Sim-to-real rollouts on AlohaMini | Strong on the design instinct, thin on physical-fleet scale |
| Debug and troubleshoot software, hardware, and policy failures | This is the through-line of the whole profile: proprioceptive collapse (masking 60% of proprioception improved task success up to 48%), chunked execution beating temporal ensembling roughly 3x, π0.5 brittleness traced to recipe rather than architecture after testing and rejecting LoRA and frozen video-diffusion priors | Best-in-file match |
| Comprehensive deployment and regression tests | BMO deterministic eval pipeline; Merlyn VLM judges scoring rollouts into dense, hard-to-game rewards | Strong, transferable framing |
| Publications at ICRA / CoRL / IROS highly valued | No accepted top-tier paper. "Recalibrating VLA Baselines" was submitted to CoRL 2026 and rejected. Public artifacts are the BEHAVIOR-1K technical report and a LessWrong analysis | Gap, but the JD marks this as valued rather than required |
| PhD preferred, MS acceptable with strong relevant experience | M.Eng in AI & Robotics, University of Toronto, expected April 2027. Degree in progress | Gap, timing-based |

### Gaps and mitigation

**1. C++ depth (soft blocker for the screen, not for the job).**
Hard blocker? No, the JD pairs C++ with Python and asks for robotics or ML environments rather than systems-C++ pedigree. Adjacent experience? Embedded firmware-adjacent work at Epineuron and the PCB/power-analysis loop show comfort at the metal, and C/C++ is on the skills line. Portfolio proof? None specific. Mitigation: before applying, make one C++ artifact visible. The cheapest honest option is a C++ node or utility in the AlohaMini or RLinf-adjacent tooling pushed to github.com/sshakerinezhad, then referenced by link. Second option, in the application free-text: name the specific C++ context truthfully rather than leaving the skills-line claim unsupported. Do not upgrade the claim beyond what is true.

**2. No accepted top-tier publication.**
Hard blocker? Not on this req. "Highly valued" plus "PhD preferred; MS acceptable" is a preference stack, not a gate, and it is the single reason this req outranks the sibling Research Scientist req where top-tier publications are listed as essential. Mitigation: lead with externally verifiable artifacts instead of venues. The BEHAVIOR-1K leaderboard placement and the merged RLinf contribution are checkable in one click, which is what a hiring roboticist actually wants. Never describe the CoRL submission as published, accepted, or under review.

**3. ROS2 in the skills line but not in a described system.**
Hard blocker? No, but it is the kind of line a technical screener probes. Mitigation: on the CV and in interviews, tie ROS2 to a concrete thing that was actually built rather than leaving it as a chip. If there is no true ROS2 system to point at, say so directly and pivot to the control and integration work that does exist. An unbacked competency chip is the documented failure mode in the CV rules.

**4. Physical-fleet scale.**
The JD says "real robots at serious scale"; the CV's physical scale is one hand-built bimanual platform plus lab hardware. Mitigation: reframe honestly. What transfers is the diagnostic method, not the fleet count. The proprioceptive-collapse and chunking findings came from running enough rollouts to see a systematic pattern, which is the same instinct scaled hardware work demands.

**5. Degree completing April 2027.**
Mitigation: state the timeline plainly. A hybrid Sunnyvale start with a Toronto-based M.Eng still in progress is a real logistics question, so raise it before a recruiter finds it. If the intent is to finish remotely or defer, decide that answer before the first call.

---

## C) Level and Strategy

**JD level vs natural level.**
The req is the unleveled "Roboticist" rung, sitting under a separate Principal Roboticist posting. That is the right rung to aim at. Natural level given BMO from Sep 2025 and Merlyn from Aug 2025 is early-career-to-mid IC; the req's preferences (PhD preferred, top-tier publications valued, founding-member ownership) describe a mid-to-senior hire.

**Screen risk, stated plainly.**
This is a real gap and should not be waved away. Three things a recruiter or hiring manager screens mechanically:

1. **Degree status.** "PhD preferred; MS acceptable with strong relevant experience" reads at the screen as "completed graduate degree plus a few years". An in-progress M.Eng finishing April 2027 will read as neither. Expect this to be the first filter.
2. **Publication line.** For a team whose sibling reqs demand ICRA/CoRL/IROS output, a rejected submission plus a self-hosted technical report is below the implicit norm. The technical report and the leaderboard result partially offset it because they are verifiable, but they do not clear a publication bar and should not be presented as if they do.
3. **Founding-member scope.** "Select, build, integrate and maintain robot hardware" as a founding member means owning lab operations with little scaffolding. A screener weighing that will look for someone who has already run a robot lab, not someone who built one bimanual rig on nights and weekends.

Net read: this is a **stretch application with a genuine path**, not a formality. The path exists because the hardware-plus-policy combination is rare and because this specific req softened every gate the sibling req hardened. Realistic odds of reaching a human are meaningfully better here than at the Research Scientist door, but a cold résumé screen alone is still the weakest route. Treat the warm-contact step in `next_action` as part of the application, not an optional extra.

**Selling seniority without lying.**
The honest senior signal is scope-per-person, not years. Three framings that are all true:
- Full-stack ownership: PCB and power analysis, COMSOL field modeling, simulation, policy training, sim-to-real on a self-built embodiment. Very few candidates at any level have touched that whole chain.
- Independent research output: co-founded a 3-person collective and produced results that placed 8th against funded teams in Stanford's BEHAVIOR-1K Challenge, plus an upstream open-source contribution that was merged.
- Production rigor from a regulated environment: an evaluation pipeline that caught a systematic misalignment in an agentic tool serving over $200B AUM, which is the closest analogue to the "comprehensive deployment and regression tests" bullet in this JD.

Never inflate verbs. The BMO greeter robot is a side project he was asked to repair; it is not a robotics credential and must not appear as one on a robotics application.

**If Wayve downlevels.**
Accept a level, negotiate the band and the scope. The advertised band is $184,200 to $240,000 plus equity; a downlevel that keeps the base inside that band and keeps hands-on robot and policy work is still a strong outcome, since the profile floor is $180K. Script: "Level matters less to me than the scope. If the leveling lands lower, I would want the hardware-to-policy ownership and the deployment and evaluation work to stay in the role, and I would want the base to reflect the posted range." Refuse a redefinition into pure ops or pure tooling with no model contact; that removes the reason to take the job.

---

## D) Compensation and Demand

**Market demand trend.** Very strong and specifically timed. Wayve raised $1.5B in 2026 (Eclipse, Balderton, SoftBank Vision Fund 2, with Microsoft, NVIDIA and Uber participating) after a $1.05B Series C led by SoftBank. Alex Toshev joined Wayve Labs in August 2026 as Research Director to lead a new general-robotics intelligence team built around a founding team in Sunnyvale, with roles in Sunnyvale, London and Vancouver. Wayve's own Greenhouse board currently carries 154 open reqs, including four Robot Foundation Model postings (Roboticist, Principal Roboticist, Research Scientist, Principal Research Scientist) all first published 2026-08-06 to 2026-08-10. This is a funded team-build in progress, not a placeholder req.

**Company type:** Growth-stage startup / VC-backed startup, high confidence. Late-stage and unusually well capitalized: over $2.5B raised across the last two rounds, structured US and UK entities, published salary bands, a large and versioned hiring pipeline.

**Compensation reliability:** Medium-High. The band is stated as a "reasonably estimated salary" with equity described separately, which is the standard California pay-transparency construction and reads as base salary rather than a blended package.

- **Advertised range:** "the reasonably estimated salary for this role ranges from $184,200 to 240,000, plus a competitive equity package"
- **Likely guaranteed base:** $184,200 to $240,000, positioned by experience. A first-industry-robotics hire realistically lands in the lower half, roughly $184K to $205K.
- **Variable / conditional cash components:** None stated. No bonus, commission, OTE, or allowance language appears in the JD, which is a good sign for reliability.
- **Expected stable cash:** the base figure, gross, before US federal and California state tax. Do not model equity as cash.
- **Non-cash benefits:** "competitive equity package" (unspecified instrument and quantity), plus whatever standard US benefits apply. Wayve is private, so equity is illiquid and its value depends on strike, vesting, and preference stack.

**Market rows.**

| Reference | Figure | Source quality |
|-----------|--------|----------------|
| This req, employer-provided | $184.2K to $240K base plus equity | Verbatim JD |
| Wayve Sunnyvale sibling Research Scientist req | $370K to $419K base plus equity | Verbatim JD (gh_jid 8684160002) |
| Wayve SWE, US / SF Bay Area median TC | ~$210K | Levels.fyi |
| Wayve company-wide median TC | ~$180.6K | Levels.fyi |
| Wayve Robotics Engineer, Sunnyvale | $113K to $178K estimated | Glassdoor estimate, low confidence |
| Profile target, US robotics startups | $250K+ TC with strong equity; floor $180K | `config/profile.yml` |

**Honest read.** The band clears the $180K floor at every point and reaches the profile's robotics-startup target only at the top of the band once equity is counted. The sibling Research Scientist band is roughly double, which tells you exactly how Wayve prices the research track against the roboticist track. That is a real cost of choosing the more attainable door, and it should be a conscious trade rather than a surprise later. The counter-argument: a $184K to $240K base at a company with over $2.5B raised, on a founding team, with a publication-soft gate, is a better expected value than a $370K band behind a hard publications-essential filter.

**HR verification questions.**
1. Is the $184,200 to $240,000 figure base salary only, and what is the leveling process that places a candidate within it?
2. What is the equity grant range for this level: number of units or percentage, strike price, current 409A, and vesting schedule including cliff?
3. Is there a refresh or follow-on grant program, and what has actually been granted to comparable hires?
4. Is there any bonus component, and if so is it discretionary or formulaic?
5. What relocation support is offered for a Canadian hire moving to Sunnyvale, and is TN sponsorship handled by Wayve's immigration counsel?
6. What does "hybrid" mean concretely for this team: how many days in the Sunnyvale office and workshop, given the role is hardware-facing?

**Comp score: 3.5/5.** Transparent, all-cash-base with no variable games, clears the floor comfortably, but sits below the stated $250K+ robotics-startup target through most of the band and is visibly the lower-paid of the two MEGA tracks.

Sources: [Wayve Series D press](https://wayve.ai/press/series-d/) · [The Robot Report, Wayve $1.2B](https://www.therobotreport.com/wayve-raises-1-2b-plans-bring-robotaxis-london/) · [Dealroom, Alex Toshev joins Wayve Labs](https://app.dealroom.co/news/note/alex-toshev-joins-wayve-labs-to-lead-general-robotics-effort) · [Levels.fyi Wayve salaries](https://www.levels.fyi/companies/wayve/salaries) · [Levels.fyi Wayve SWE US](https://www.levels.fyi/companies/wayve/salaries/software-engineer/locations/united-states) · [Glassdoor Wayve pay](https://www.glassdoor.com/pay-and-benefits/Wayve-E2225260)

---

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|------------------|-----|
| 1 | Professional Summary | Leads with BMO AI CoE and Merlyn Labs across evaluation, VLA, RL and robotics | Two to three sentences leading with embodied AI: manipulation research plus hardware-through-policy, then the failure-mode-discovery angle. Keep BMO as the production-rigor clause, not the opener | The buyer here is a robotics team that needs someone who can both build the rig and debug the policy. Summary rule caps at 2-3 sentences |
| 2 | Core Competencies (one line) | Generic across ML and robotics | One line, all CV-backed: Manipulation, VLA models, Sim2Real, ROS2, C/C++ and Python, PyTorch, OmniGibson and MuJoCo, PCB and hardware bring-up | Mirrors the JD's own vocabulary without adding an unbacked chip. Every item must survive a "tell me about that" follow-up |
| 3 | Merlyn Labs bullets | Five bullets covering LIBERO-PRO, VLM judges, RLinf, AlohaMini | Reorder: AlohaMini sim-to-real first, RLinf flow-matching integration second, LIBERO-PRO recipe finding third. Drop or shorten the VLM-judges bullet for this application | The JD's top two asks are hardware and deployment infrastructure. Lead with the physical and the upstream-merged work; keep 1-2, not all five, in the summary-adjacent position |
| 4 | BEHAVIOR-1K project | Four bullets, leads with proprioceptive collapse | Keep proprioceptive collapse first (finding hierarchy rule), and promote the boundary-resampling bullet since it is a data-collection design decision, which is a named JD responsibility | Directly answers "define data collection pilots that accelerate model development" |
| 5 | UofT prosthetic project | Two bullets, LLM control pipeline and YOLO plus LiDAR | Keep both, and make the control-pipeline framing explicit about the 7-DOF arm and grasp planning | Closest thing on the CV to "control, planning" in the JD's software bullet |
| 6 | Epineuron co-op | Four strong bullets with metrics | Keep at least the PeriPulse FDA-Breakthrough bullet and the 900% battery-life bullet intact | This is the hardware credibility that separates him from software-only robot-learning candidates. Never thin it to a stub |
| 7 | BMO section | Seven bullets including the greeter-robot side project | Keep the bias-detection and deterministic-eval-pipeline bullets. **Cut the greeter-robot line entirely for this application** | Per the BMO framing rule, the robot is a side project and must never function as a robotics credential. On a robotics req it invites exactly the wrong question |
| 8 | Skills line | ROS2 grouped with VLA, OmniGibson, MuJoCo, PCB, 3D printing | Keep, but only if ROS2 is genuinely defensible. If not, drop it rather than leave it unbacked | An unsupported chip on a req that names ROS/ROS2 explicitly is a worse outcome than its absence |
| 9 | Header contact row | Email, phone, GitHub, portfolio, lab, location | Exactly one line, location as "Toronto, Canada". Drop portfolio URL first if it wraps. Measure before generating | Binding CV rule; a wrapped header has shipped twice before |
| 10 | LinkedIn headline | Current framing spans evals and robotics | For the Wayve outreach window, foreground embodied AI and manipulation | The MEGA founding team will look at LinkedIn before the ATS profile |
| 11 | Application free-text | n/a | Work-auth answers per standing policy: Authorized = Yes, Requires sponsorship = No, with the TN clarifier in free-text only. YoE dropdown = 2-4 (standing decision, do not re-ask). Start date = "2-4 weeks from an offer, ready to relocate to Sunnyvale" | Established policies; applying them without re-litigating |

**Note:** PDF generation is deferred for this run (`CV sources pending sync`). This plan is the input for the tailored CV whenever it is generated, and the one-page fit check plus the contact-row measurement still apply then.

---

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Debug policy failures | Proprioceptive collapse in BEHAVIOR-1K | VLA policies plateaued on manipulation tasks during the Stanford BEHAVIOR-1K Challenge | Find why success stalled rather than tuning blindly | Isolated proprioception as a shortcut channel and masked it progressively | Masking 60% of proprioception improved task success by up to 48% | The model was reading its own joint state instead of the scene. The lesson is that a plateau is usually a shortcut, and you find it by ablating inputs, not by adding capacity |
| 2 | Translate research into robust systems | RLinf flow-matching VLA integration | RLinf had no path to RL training on BEHAVIOR-1K tasks in OmniGibson | Make flow-matching VLA policies trainable inside the framework | Built and open-sourced the integration, worked it through upstream review | Contribution merged into RLinf; enabled RL training on the BEHAVIOR-1K suite in OmniGibson | Upstreaming forces a different quality bar than a local fork. It is the closest thing on my CV to shipping infrastructure other people depend on |
| 3 | Robot hardware, sim-to-real | AlohaMini build and transfer | No physical bimanual platform available to the collective | Get a real embodiment running household tasks from simulation-trained policies | Hand-built the AlohaMini, brought it up, ran sim-to-real transfer | Household-task rollouts running on real hardware | The gap between a working sim policy and a working robot is almost entirely unglamorous integration. Budget for that, do not be surprised by it |
| 4 | Rigorous experiments, translating research | LIBERO-PRO recipe study | Published π0.5 checkpoint scored 96% on standard LIBERO but 21% on position-swap | Determine whether that collapse was architectural or recipe-induced | Ran a conservative full-finetune (batch 64, LR 1e-5), then tested and rejected two rival hypotheses: LoRA (15-21%, consistently below FFT at matched hyperparameters) and frozen video-diffusion visual priors (42% down to 35%) | Position-swap success doubled from 21% to 42%, stable across 8k-27k steps, while matching standard LIBERO. Conclusion: recipe-induced trajectory memorization, not a representational limit | Rejecting your own alternative explanations is the work. The paper was submitted to CoRL 2026 and rejected; the result stands on its own and I am direct about the venue outcome |
| 5 | Deployment and regression tests | BMO deterministic eval pipeline | An agentic tool serving over $200B AUM in wealth management was behaving subtly wrong | Catch systematic misalignment rather than anecdotes | Built evaluation harnesses over hundreds of synthesized inputs, deterministic and repeatable | Surfaced a systematic tendency to downplay investment risk, invisible at small sample sizes | Regression testing for policies is the same discipline: one rollout tells you nothing, a few hundred structured ones tell you everything |
| 6 | Data collection pilots | Boundary resampling on long-tail subtasks | Long-tail manipulation subtasks failed disproportionately in BEHAVIOR-1K | Improve success without more compute | Oversampled skill transitions by resampling at task boundaries | Doubled manipulation success on long-tail subtasks | Data composition was a bigger lever than model changes. That is a data-collection design decision, which is what this role's pilots are |
| 7 | Control, planning, perception | UofT 7-DOF voice-controlled prosthetic | Natural-language commands needed to become executable manipulation on a 7-DOF arm | Build the language-to-motion pipeline | LLM-based control pipeline converting language to manipulation sequences; integrated YOLO detection with LiDAR depth mapping for 3D localization and grasp planning | Working grasp-planning pipeline in simulation | Perception-to-grasp is where the abstractions leak. Depth association errors look like planner bugs until you instrument both |
| 8 | Hardware bring-up and validation | Epineuron PeriPulse | FDA Breakthrough-designated neurostimulation device heading into multinational clinical trials | Make the hardware validated and power-viable | Designed and assembled PCBs, authored IEC 60601-1 and ISO 13485 validation protocols, ran oscilloscope and power-analyzer optimization, modeled electromagnetic nerve-field penetration in COMSOL | 900% battery-life improvement; COMSOL data set the electrode diameter | Regulated hardware taught me to write the test protocol before the build. That habit transfers directly to robot deployment testing |
| 9 | Evaluation design | VLM judges as dense reward | Sparse rewards made RL on manipulation rollouts slow and gameable | Build a reward signal that resists gaming | Developed VLM judges scoring rollouts into dense, context-dependent rewards | Reward signals usable for RL that are difficult to game | Any judge you can satisfy without doing the task will be satisfied without the task. Building for adversarial pressure is the default assumption |
| 10 | 0-to-1 ownership, no scaffolding | Co-founding Merlyn Labs | No lab, no funding, three people, full-time jobs | Produce research output that stands up externally | Self-organized the collective, picked the problems, built the compute and data workflow, published the report | 8th place in Stanford BEHAVIOR-1K, merged upstream contribution, public technical writeup | Founding-member work is mostly deciding what not to do. We had no resources, so problem selection was the whole game |

**Recommended case study.** Ask for a scoped exercise on the deployment-and-evaluation flywheel: given a new bimanual platform and a policy trained in simulation, design the regression suite that decides whether a checkpoint is safe to run on hardware. This lets him bring the BEHAVIOR-1K ablation methodology, the BMO deterministic-eval structure, and the AlohaMini sim-to-real experience into one answer, and it is the part of the JD ("comprehensive deployment and regression tests") that most candidates will treat as an afterthought.

**Likely red-flag questions and how to answer them.**

1. *"You have no ICRA/CoRL/IROS publications. Why should we treat your research as credible?"* Answer straight: no accepted top-tier paper. Point to what is externally checkable instead: the BEHAVIOR-1K leaderboard placement, the merged RLinf contribution, the public technical report. Mention the CoRL submission only if asked directly about attempts, and say it was rejected. Never soften that.
2. *"How much production C++ have you written?"* Do not bluff. Name the real scope, note the embedded and hardware background as the adjacent surface, and say plainly that ramping on the team's C++ stack is expected work in the first months. Offer any C++ artifact that exists.
3. *"You are still doing an M.Eng until April 2027. How does that work with a hybrid Sunnyvale role?"* Have the answer settled before the call. Whatever it is (finish remotely, defer, complete part-time), state it as a decision, not an open question.
4. *"This is a founding-member role, you would own the lab. Have you run one?"* Answer with Merlyn: co-founded a 3-person collective, built the embodiment, chose the problems, produced published-quality results with no institutional support. Be honest that this was nights and weekends and three people, not a funded lab. The honest version is more impressive than the inflated one.
5. *"Tell me about the robot at BMO."* Redirect. It was a broken legacy greeter robot he was asked to repair because he knows robots; it is a side project, not a platform he leads. Then pivot to the BMO work that actually matters here, the evaluation pipeline.
6. *"Wayve is a self-driving company. Why robotics for you, and why us?"* Ground it in MEGA specifically: general-purpose foundation models across mobile manipulators, dual-arm platforms and humanoids, built 0-to-1. That is the same problem the BEHAVIOR-1K and LIBERO-PRO work attacks, with real hardware and real scale attached.
7. *"Are you authorized to work in the US?"* Canadian citizen, TN-eligible, no sponsorship required. Flat statement, no explainer.

---

## G) Posting Legitimacy

**Tier: High Confidence.**

| Signal | Finding |
|--------|---------|
| Source | Official Greenhouse board API for `wayve` (`boards-api.greenhouse.io/v1/boards/wayve`), `company_name: "Wayve"`, requisition ID `NR-SCI14`, internal job id 6472602002 |
| Cross-check | Mandatory integrity check performed: the single-job endpoint and the full board listing both map id 8691402002 to "Roboticist, Robot Foundation Model", Wayve, Sunnyvale. No mismatch |
| JD specificity | High. Names the team (MEGA, Multi-Embodiment Generalist Agent, within Wayve Labs), the embodiments (mobile manipulators, dual-arm platforms, humanoids), concrete responsibilities, and a specific tech stack (C++, Python, ROS/ROS2) |
| Salary transparency | Explicit band, $184,200 to $240,000 plus equity, consistent with California pay-transparency requirements |
| Boilerplate ratio | Moderate. Standard Wayve boilerplate at both ends, but the role-specific middle section is substantive and clearly written for this team |
| Corroboration | Independently corroborated: Alex Toshev joined Wayve Labs Aug 2026 to lead a new general-robotics team with a Sunnyvale founding team, matching the JD's framing exactly. Wayve raised $1.5B in 2026 |
| Board coherence | Four sibling Robot Foundation Model reqs (Roboticist, Principal Roboticist, Research Scientist, Principal Research Scientist) all first published 2026-08-06 to 2026-08-10, consistent with a funded team-build rather than a phantom req |
| Freshness | First published 2026-08-07, updated 2026-08-07. Roughly 26 days old as of evaluation, and still present in the live board listing pulled today |
| Prior appearances in `data/scan-history.tsv` | One entry, added 2026-09-02 by `greenhouse-full`. No repost pattern |
| Scam-like language | None. No "up to", no OTE, no unpaid trial, no fee request, no urgency pressure |
| Apply-button state | `unverified (batch mode)` |
| Live freshness beyond the API listing | `unverified (batch mode)` |

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
| CV match | 4/5 |
| North Star alignment | 5/5 |
| Compensation | 3.5/5 |
| Culture / working model | 4.5/5 |
| Red flags | -0.2 (founding-member seniority signal vs. first-industry-robotics profile; degree completing April 2027) |
| **Global** | **4.1/5** |

**Which of the two Wayve MEGA reqs to apply to first: this one.**

Report 047 covers the sibling "Research Scientist, Robot Foundation Model" (gh_jid 8684160002, req NR-SCI19, $370,000 to $419,000). Its comp is roughly double, and its content fit is arguably closer to the VLA and world-model research he does at Merlyn. It is still the second application, for one decisive reason: that req lists "Strong research track record, including publications in top-tier venues such as ICRA, CoRL, CVPR, NeurIPS, ICML or ICLR" under **Essential**. Calibration Rule 1 treats a publications requirement on a Research Scientist title as a hard stop, and a rejected CoRL submission plus a self-hosted technical report does not clear it. Calibration Rule 7 puts attainability first: the three cold résumé screens that ended in rejection were all at frontier labs, and the one advance came through an assessment.

This Roboticist req softens every gate the sibling hardens: publications are "highly valued" rather than essential, "MS acceptable with strong relevant experience" replaces a research-track pedigree bar, and the core asks (robot hardware, manipulation, C++/Python, ROS2, deployment infrastructure, debugging policy failures) are the parts of the profile with the most physical evidence behind them. It is also the same team, the same director, the same office, so a strong showing here is the natural bridge to research scope later. Apply here first, and if a conversation opens, ask about the research track from inside it rather than trying to force that door cold.

**Decision: Apply (stretch).** Send this one, pair it with warm outreach the same week, and keep the Research Scientist req parked rather than sent cold.

---

## Extracted Keywords

robot foundation model · embodied AI · multi-embodiment · generalist agent · robot manipulation · mobile manipulators · dual-arm platforms · humanoids · robot hardware · C++ · Python · ROS2 · control · planning · policy deployment · data collection · robot learning flywheel · regression testing · deployment testing · sim-to-real · vision-language-action · imitation learning · reinforcement learning · large-scale experiments · hardware integration · debugging policy failures · 0-to-1 ownership · Sunnyvale hybrid
