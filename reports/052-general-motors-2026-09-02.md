# Evaluation: General Motors — Senior Software Engineer, Autonomy Evaluation

**Date:** 2026-09-02
**Archetype:** Alignment / Evals Research Engineer (primary) + Robotics Software Engineer (secondary)
**Score:** 3.0/5
**Legitimacy:** High Confidence
**Work Auth:** ⚠️ Unstated
**URL:** https://generalmotors.wd5.myworkdayjobs.com/careers_gm/job/Remote---United-States/Senior-Software-Engineer--Autonomy-Evaluation_JR-202611035
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 052-gm-autonomy-eval

---

## Machine Summary

```yaml
company: "General Motors"
role: "Senior Software Engineer, Autonomy Evaluation"
score: 3.0
legitimacy_tier: "High Confidence"
archetype: "Alignment / Evals Research Engineer + Robotics Software Engineer"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "5+ years applied robotics/autonomous-systems software experience required; standing YoE answer is 2-4, so this is a mechanical recruiter-screen filter"
  - "3+ years evaluating dynamic systems (time-series, state derivatives, interconnected subsystems) is only partially covered by VLA rollout analysis and Epineuron signals work"
  - "No AV-domain experience: no camera/lidar/radar fleet logs, no prediction or planning stack, no release gating"
  - "Pandas/NumPy/SciPy and production Python code-review practice are implied by the research output but never stated in cv.md"
  - "C++ listed as a skill with no depth evidence; JD wants comfort reading and instrumenting core C++ algorithms"
top_strengths:
  - "The role is literally eval design for an autonomous system: deterministic agent eval pipeline at BMO plus hard-to-game VLM judges at Merlyn Labs map directly onto the JD's VLM/LLM scenario-triage responsibility"
  - "Published autonomy failure-mode analysis (proprioceptive collapse, 60% masking improved task success up to 48%; chunked execution beat temporal ensembling ~3x) is exactly the introspect-the-ML-component work the JD describes"
  - "Systematic root-causing of anomalous data is his documented pattern: found recipe-induced overfitting behind the pi-0.5 LIBERO-PRO collapse, doubling position-swap success 21% to 42%"
  - "ROS2, sim2real on a hand-built AlohaMini embodiment, and YOLO plus LiDAR grasp planning cover several preferred qualifications outright"
risk_level: "Medium"
confidence: "Medium"
next_action: "Warm path first: run contacto to find an Evaluation-team engineer or manager in GM's rebuilt autonomy org on LinkedIn, anchor a 300-char note on the VLM-judge and BEHAVIOR-1K eval work, then submit through Workday within 48 hours while the req is still fresh"
work_auth: "unstated"
discard_reasons:
  - "salary_too_low"
  - "seniority_mismatch"
  - "geo_restriction"
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
| Detected archetype | Alignment / Evals Research Engineer (primary), Robotics Software Engineer (secondary) |
| Domain | Autonomous vehicles, ADAS to personal autonomy (Super Cruise lineage) |
| Function | Evaluation platform engineering: metrics, analysis algorithms, continuous eval pipelines, release gating |
| Seniority | Senior IC, 5+ years required, explicit technical-leadership expectation |
| Remote / work mode | "Remote - United States"; Workday field `remoteType` = Work From Home - United States, country = United States of America |
| Team | GM Evaluation team inside the Autonomy org; system-level integrator and arbiter of end-to-end AV quality, partnering with Autonomy, Simulation, Systems, Safety |
| Req ID | JR-202611035, posted 2 days ago, start date 2026-08-31 |
| TL;DR | The job description is an unusually precise match for his stated superpower (eval design against a system that can hide its failures), pointed at a physical autonomous stack rather than an LLM agent. What holds it back is the 5+ YoE screen, the automaker comp band against a $300K-500K target, and a US-residency requirement that removes the remote-from-Toronto upside. |
| Profile caps / overrides applied | Rule 3 (hard YoE numbers are semi-hard, screen risk stated plainly in Block C). Rule 7 (attainability first: warm path named in `next_action`, cold Workday apply is not the plan). Rule 8 (robotics scored at full weight, not as a fallback). Location Policy (US relocation carries no penalty; the remote-from-Toronto bonus does NOT apply here, see Block C). No Calibration Rule 1 trigger: no PhD or first-author publication gate. |
| Culture screen | Not evaluated in batch mode |

### Work authorization and location, stated plainly

The posting is US-remote, not globally remote. Workday tags it `Work From Home - United States` with country United States of America, and GM is hiring onto US payroll.

**A Canadian TN candidate cannot hold this role from Toronto.** Two separate facts, often confused:

1. Working for a US employer while physically in Canada needs no US work authorization at all, but it needs the employer to have a Canadian payroll entity or an EOR. This req is on the US entity, so that path is not on offer.
2. TN status authorizes work performed *inside* the US. It presumes a US work location and a US residence. A fully remote TN is workable but attracts more scrutiny at the border than an office-based one, because the officer wants a named US work site in the support letter.

So the honest read: this is a **relocate-to-the-US role**. Per the Location Policy that is preferred, not a cost, and it carries no scoring penalty. It does mean the "remote-from-Toronto at US comp" dream-scenario bonus is off the table, and the profile's remote-US-open-to-Canada bonus signal does not apply.

The JD says nothing about sponsorship either way, so `work_auth` is `unstated`, which is neutral. GM does hire TN professionals; the Engineer category fits an M.Eng plus B.Eng cleanly.

## B) CV Match

| JD requirement | Evidence from cv.md / article-digest.md | Verdict |
|----------------|------------------------------------------|---------|
| Build the evaluation ecosystem: metrics, automated workflows, analysis approaches for data-driven decisions | BMO: "Built a deterministic agent eval pipeline using hundreds of synthesized inputs to detect misaligned outputs at scale" | Strong |
| Leverage VLMs and LLMs to classify performance, identify critical scenarios, prioritize validation, with human-in-the-loop | Merlyn Labs: "Developing VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game" | Strong, and rare |
| Introspect the operation of ML components in the autonomy stack, including perception, prediction, planning models | BEHAVIOR-1K: identified proprioceptive collapse as a critical VLA failure mode, 60% masking improved task success by up to 48%; found chunked execution beat temporal ensembling by 3x, revealing VLA architectures lack temporal awareness | Strong on method, absent on AV-specific perception / prediction / planning stacks |
| Strong curiosity to question anomalous data and systematically root-cause discrepancies | article-digest §3: traced the pi-0.5 LIBERO-PRO collapse (96% standard to 21% position-swap) to a recipe, then tested and rejected two rival hypotheses (LoRA at 15-21%, frozen video-diffusion priors made it worse, 42% to 35%) | Strong, this is the single best-evidenced line in the JD |
| Propose new statistical / ML methods to quantify performance and find behavior patterns across diverse scenes and domains | Boundary resampling of skill transitions doubled manipulation success on long-tail subtasks; 10,000+ demonstrations across 22 of 50 scored BEHAVIOR-1K task types | Good |
| Experience with ROS or similar robotics/IPC frameworks, log pipelines, experiment databases (preferred) | ROS2 in skills; AlohaMini sim2real; OmniGibson / RLinf integration work | Good on ROS and sim, unproven on large-scale log pipelines |
| Evaluating robotics or AV systems using sensor data (camera, lidar, radar) (preferred) | UofT prosthetic project: YOLO object detection integrated with LiDAR depth mapping for 3D localization and grasp planning | Partial: camera and lidar yes at project scale, radar no, fleet scale no |
| PyTorch, computational geometry, linear algebra, ML for perception/prediction/planning/control (preferred) | PyTorch, JAX, RL, imitation learning, flow matching, MuJoCo, OmniGibson in skills; 7-DOF simulated arm control pipeline | Good |
| Strong proficiency developing Python in production team environments, incl. testing, performance, code review | Python listed first in skills; the BMO eval pipeline and the RLinf open-source merge both imply reviewed code in a team, but cv.md never states the practice | Adjacent, not evidenced |
| Proficiency with Pandas, NumPy, SciPy and visualization libraries for large-scale analysis and reporting | Not named anywhere in cv.md or article-digest.md | Gap on paper, near-certain in reality |
| Comfort in C++ codebases: reading, debugging, instrumenting core algorithms | "C/C++" appears in the skills line; no project bullet demonstrates C++ depth | Weak evidence |
| Build and maintain evaluation dashboards and interactive reports (trend analysis, drift detection, scenario coverage) | No dashboard or BI artifact in cv.md; the BEHAVIOR-1K technical report is analysis-and-writeup, not a live dashboard | Gap |
| 3+ years evaluating dynamic systems using numerical and/or ML approaches: time-series, state derivatives, dynamics, interconnected subsystems | Closest real evidence: VLA rollout temporal analysis (chunking vs ensembling), proprioception masking over trajectories, and at Epineuron the COMSOL EM field modeling plus oscilloscope/power-analyzer characterization | Partial. Defensible in an interview, thin on a resume screen |
| 5+ years applied experience with robotics or autonomous systems software, data analysis, ML evaluation, or autonomy analytics | BMO Sep 2025 to present; Merlyn Labs Aug 2025 to present (concurrent); Epineuron co-op May 2021 to Aug 2022 (biomedical/electrical, not autonomy); McMaster Medical Design Team VP Technical Apr 2018 to Apr 2023 | **The main gap.** See Block C |
| Demonstrated technical leadership: architectural decisions, cross-team influence, owning complex features end-to-end | Co-founded Merlyn Labs (3 people, sets the research agenda); owned the BMO eval pipeline end-to-end; VP Technical of a student design team leading an open-source prosthetic under $300 | Defensible for Senior, not for Staff |
| Bachelor's / Master's / PhD in CS, Robotics, Mech/Aero, ML, Data Science, or equivalent | M.Eng in AI & Robotics, University of Toronto, expected April 2027; B.Eng Engineering Physics, McMaster, Dean's Honour List | Met |

### Gaps and mitigation

**1. "5+ years applied experience with robotics or autonomous systems software" (soft blocker, screen-level).**
Hard blocker? No, the JD's own clause is broad ("robotics *or* autonomous systems software ... data analysis, ML evaluation, *or* autonomy analytics") and closes with "or equivalent practical experience" on the degree line. But per Calibration Rule 3 this is semi-hard: a Fortune-10 Workday req is screened mechanically, and the standing YoE answer is 2-4. Adjacent experience exists (five years of continuous robotics building if the McMaster design team and the Epineuron device work count, but neither is autonomy software). Mitigation: do not lead with tenure, lead with output density. The cover framing is that the eval work he has already published on autonomous policies is the exact deliverable in the responsibilities list, and that a warm intro converts this from a keyword screen into a conversation. This is why `next_action` is contacto-first.

**2. No AV-domain experience (soft, real).**
Nice-to-have on paper, load-bearing in practice: no prediction or planning stack, no fleet log pipeline, no release-gating decision he has owned. Adjacent: he evaluates *policies* that perceive and act, which is structurally the same problem at a smaller scale, and OmniGibson/MuJoCo simulation evaluation is the sim half of the JD's sim-plus-road pairing. Portfolio proof: the BEHAVIOR-1K technical report and the LessWrong model-organism post are both public artifacts a hiring manager can read in ten minutes. Mitigation: name the transfer explicitly rather than hoping it is inferred. "Scenario coverage and drift detection for a driving policy is the same question as long-tail subtask coverage for a manipulation policy" is a claim he can defend with numbers.

**3. Dashboards and large-scale reporting (soft, cheap to close).**
No blocker; nobody screens on dashboard tooling. Mitigation: in interview, describe how the BEHAVIOR-1K results were decomposed per task type and per failure mode for the technical report, which is the same decomposition problem the JD asks for in a visual form.

**4. Pandas/NumPy/SciPy and C++ depth (documentation gap, not a skills gap).**
These are almost certainly true and simply unwritten. **Do not add them to cv.md without confirming with Shayan first** (`modes/_custom.md` Off-Limits). For this application, the honest move is a competency line that reflects what the CV already backs, and letting the interview establish the rest.

## C) Level and Strategy

**JD level vs natural level.** GM is asking for a Senior IC with 5+ years in robotics/AV software plus 3+ years of dynamic-systems evaluation, and explicitly wants demonstrated technical leadership. His natural level by wall-clock tenure is mid: BMO from Sep 2025 and Merlyn Labs from Aug 2025 run concurrently, so strict counting is under one year of post-graduate full-time work, and the standing decision (user-ratified 2026-07-28, not to be re-litigated) answers 2-4 on YoE dropdowns.

**Screen risk, stated plainly.** This is the highest-risk part of the application and it should not be waved away. A Workday req at a Fortune-10 automaker is filtered before a human reads it, and "5+ years" on the required-qualifications list is exactly the kind of numeric field a recruiter or an automated screen matches mechanically. Two things make it worse here: GM's autonomy org has been rehiring more than 100 former Cruise staff plus people from Nvidia, Uber and Zoox, so the applicant pool is full of people with genuine five-to-ten-year AV resumes; and the role is remote-US, which draws national volume. Assume a cold application has a low single-digit chance of reaching a human. Assume a referred application is a real conversation, because the domain fit is genuinely unusual.

There is no waivable-requirement argument to make here, and per Calibration Rule 4 it should not be invented. What is true is narrower and more useful: the JD's required clause is disjunctive, and "ML evaluation" and "autonomy analytics" are two of the listed alternatives. He does have publishable ML-evaluation output on autonomous policies. That argument works on a human. It does not work on a keyword filter.

**Selling seniority without lying.** Three honest senior signals, none of which require inflating a title:
- He co-founded a research collective and set its agenda. The interview one-liner stays exactly as written in the profile: "Self-organized research collective, three of us doing robotics research nights and weekends. We placed 8th in Stanford's BEHAVIOR-1K Challenge, published our methods, and contribute to open-source RL infra." Never imply funding, headcount, or company status.
- He owned an evaluation system end to end at a bank, from the question through the harness to a finding that mattered to a $200B+ AUM product.
- He has run and reported adversarial hypothesis testing: proposing a mechanism, then killing two rival explanations with matched-hyperparameter experiments. That is the "systematically root-cause discrepancies" bullet in senior form.

What he should not claim: multi-team architectural ownership, production AV systems, or the BMO greeter robot as a robotics credential. That robot is a side project he was asked to repair, and it never leads.

**If GM downlevels.** Likely and not offensive. If they come back with a non-senior Software Engineer or Engineer II title, the response is comp-first, not title-first: "Title is negotiable, band is not. My floor is $180K USD base-equivalent and I'm comparing against US robotics and AI roles in the $250K+ range." A downlevel at GM's mid bands (Levels.fyi shows GM SWE medians around $138K in the US) would fall under the profile floor and should be declined. A senior-band offer at or above $180K is worth discussing on the strength of the work itself.

**Education phrasing for this application:** "M.Eng in AI & Robotics, University of Toronto, expected April 2027." Never "M.Eng candidate," never any implication of a thesis or research masters.

## D) Compensation and Demand

**Demand trend.** GM's autonomy program is in an expansion phase after a public reversal. GM shut down Cruise as an independent robotaxi subsidiary in December 2024 and refocused autonomous development on personal vehicles, building on Super Cruise (now on 20+ models, logging over 10 million hands-free miles per month per GM's own materials; the JD claims 500,000+ equipped vehicles and 700M+ hands-free miles). Since then GM has rehired more than 100 former Cruise employees, including senior managers returning to their old roles, and has been recruiting from Nvidia, Uber and Zoox. The effort is led by chief product officer Sterling Anderson, formerly of Tesla Autopilot and co-founder of Aurora, with an eyes-off highway-capable electric Cadillac targeted for 2028. This req sits inside that build-out, and a sibling GM AV posting (Senior ML Perception Engineer, Fallback Driving System, GM Automation Sunnyvale) appeared in `data/scan-history.tsv` on the same scan date, which corroborates active multi-role hiring on the autonomy side.

The counter-signal is real and belongs in the same paragraph. In May 2026 GM laid off up to roughly 600 white-collar IT workers (reporting ranges higher across the year), concentrated in Austin and Warren, explicitly to re-hire for AI-native development, data engineering, and agent/model work. GM has also committed to $2B+ in cost reductions and is absorbing tariff and EV-demand pressure. So the company is cutting software headcount in one direction while hiring autonomy and AI headcount in another. For someone taking a US relocation on TN status, program volatility is a status risk, not just a career risk: losing the job means losing the basis for being in the country.

**Market band, for calibration only.** Levels.fyi puts GM Software Engineer total compensation in the US at roughly $104K (L5) to $274K (L8), with a US median near $138K, and Software Engineering Manager median around $290K. Autonomy and AI roles typically sit in the upper part of that IC range rather than the median. A realistic senior autonomy-evaluation offer is plausibly $170K-$240K total compensation, mostly base plus modest RSUs, with none of the equity upside profile of a robotics startup. Against the profile targets ($300K-500K+ for US frontier labs, $250K+ for US robotics startups with strong equity, hard floor $180K USD) this sits at or barely above the floor, and clearly below target.

- **Company type:** Enterprise / traditional corporate (public company, structured salary grades, formal Workday process, Total Rewards boilerplate in the posting)
- **Compensation reliability:** Medium — no advertised salary figure in the posting; the band above is external market data (Levels.fyi), not a GM statement

**Comp score: 2/5** (slightly below market relative to this candidate's stated targets, and well below the frontier-lab band he is benchmarking against).

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|------------------|-----|
| 1 | Professional Summary | Leads with "AI Research Engineer at BMO's AI Centre of Excellence and Co-Founder of Merlyn Labs" across LLM/agent evaluation, VLA, RL, robotics | Lead with evaluation of autonomous systems: eval pipelines and VLM judges for policies, with the BEHAVIOR-1K placement as the embodied credential. Two to three sentences, zero pronouns, past tense for results | The JD's entire charter is evaluation. Rule 5's finding hierarchy puts proprioceptive collapse first as summary material |
| 2 | Core Competencies (one line) | Generic | Rebuild around JD vocabulary that cv.md actually backs: evaluation pipelines, VLM/LLM judges, failure-mode analysis, sim2real, ROS2, PyTorch, Python. Do not add Pandas/NumPy/SciPy, C++ depth, or "drift detection" as chips | Rule 11c: exactly one line, every term must survive a "tell me about that" follow-up. Unbacked chips are the canonical violation |
| 3 | Merlyn Labs bullets | Five bullets, paper-first ordering | Reorder: VLM judges first (matches the JD's VLM/LLM responsibility verbatim), then the pi-0.5 recipe finding, then RLinf, then AlohaMini sim2real. Keep the numbers | Rule 4: pick the 1-2 most role-relevant, let verifiable results talk |
| 4 | BEHAVIOR-1K project | Present as a challenge placement | Reframe the same facts as autonomy evaluation: identified a failure mode by introspecting a policy's inputs, quantified it (60% masking, up to 48% success gain), and showed an architectural limitation (chunking beat ensembling 3x). State "trained on 22 of 50, scored against all 50" | Directly mirrors "introspect the operation of ML components." Never state 22 or 50 alone |
| 5 | BMO bullets | Bias finding, then eval pipeline, then agents | Keep, in the profile's canonical order (bias detection, deterministic eval pipeline, graph agentic system). Do not cut them for being off-domain | Delta D007, recur-weighted: strong off-domain bullets beat weak on-domain ones. The greeter robot never appears |
| 6 | UofT prosthetic project | Listed third | Promote above BardSong for this application: YOLO plus LiDAR 3D localization and grasp planning is the only camera-plus-lidar evidence on the CV, and the JD names both | Preferred qualification, cheaply satisfied with a true bullet |
| 7 | BardSong | Present | First cut if the page overflows | Lowest domain relevance for an AV evaluation role |
| 8 | Epineuron | Full four bullets | Keep at least the two strongest with metrics intact: FDA Breakthrough-designated PeriPulse in multinational trials, 900% battery-life improvement via oscilloscope/power-analyzer work. COMSOL and signals work is the closest thing on the CV to numerical dynamic-systems evaluation | Rule 12: never thin a role to a stub; cut a whole item instead |
| 9 | Header | Standard | One line, exactly: name, email, phone, GitHub, location "Toronto, Canada." No visa text anywhere in the header | Rule 11b, binding |
| 10 | LinkedIn headline | Current framing | For the duration of this application track, foreground "evaluation of autonomous systems" alongside the research framing, so a GM recruiter who searches the name after a cold note sees the match immediately | Attainability: the warm path is the plan, and the profile is the second thing a contact clicks |
| 11 | Format | LaTeX per `cv.output_format` | US role, so `letter` paper. Exactly one full page, roughly 550-700 words, 12-18 bullets, no em dashes | Rules 1 and 10 |

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Introspect ML components in the autonomy stack | Proprioceptive collapse in BEHAVIOR-1K | A VLA policy underperformed on manipulation tasks in OmniGibson with no obvious cause in the loss curves | Find why the policy failed on tasks it appeared trained for | Ablated the input channels rather than the architecture, masking proprioception progressively | Masking 60% of proprioception improved task success by up to 48%; the policy had been leaning on proprioceptive shortcuts instead of vision | The failure was in what the model was allowed to see, not in its capacity. Same class of question as asking which signal an AV planner is actually keying on |
| 2 | Systematically root-cause discrepancies in anomalous data | The pi-0.5 LIBERO-PRO recipe finding | Published checkpoint scored 96% on standard LIBERO and 21% on position-swap evaluation | Determine whether the collapse was architectural or induced | Reproduced the gap, then tested rival hypotheses at matched hyperparameters: LoRA (15-21%), frozen video-diffusion visual priors (42% down to 35%), and a conservative full-finetune (batch 64, LR 1e-5) | Conservative FFT doubled position-swap success to 42% while matching standard LIBERO, stable across 8k-27k steps. The brittleness was recipe-induced trajectory memorization | Everyone reporting gains on that benchmark was measuring against a miscalibrated baseline. The paper is unpublished: submitted to CoRL 2026 and rejected. Never claim a venue |
| 3 | Leverage VLMs/LLMs to classify performance and prioritize validation | VLM judges at Merlyn Labs | Needed dense reward signal for RL on tasks where sparse success/failure was uninformative | Build a judge that scores rollouts without being trivially satisfiable | Developed VLM judges producing dense, context-dependent scores designed to resist gaming | Judges that turn rollouts into usable RL reward metrics that are hard to game | Most of the design effort goes into what the judge refuses to reward. Directly transferable to using VLMs to triage critical driving scenarios |
| 4 | Build evaluation ecosystems that surface failures at scale | BMO deterministic agent eval pipeline | A GenAI tool serving $200B+ AUM in wealth management behaved plausibly in every individual review | Determine whether behavior was systematically misaligned rather than anecdotally odd | Built evaluation harnesses over hundreds of synthesized inputs, deterministic so results were comparable across runs | Surfaced a systematic tendency to downplay investment risk, invisible at single-case scale | The finding was the pipeline's output, not a lucky catch. Lead with what was built, then let the finding arrive |
| 5 | Statistical/ML methods to find behavior patterns across diverse scenes | Boundary resampling for long-tail subtasks | Manipulation success collapsed at skill transitions across a wide task distribution | Improve long-tail performance without more data collection | Oversampled skill-transition boundaries in the training distribution | Doubled manipulation success on long-tail subtasks; 10,000+ demonstrations across 22 of the 50 scored task types | Scenario coverage is a sampling problem before it is a modeling problem, which is precisely GM's scenario-library question |
| 6 | Evaluate systems with camera and lidar sensor data | Voice-controlled robotic prosthetic, UofT | A 7-DOF simulated arm had to act on natural-language instructions in a real scene | Localize and plan grasps from perception, not from ground truth | Integrated YOLO detection with LiDAR depth mapping for 3D localization and grasp planning, driven by an LLM control pipeline | Working language-to-manipulation pipeline on the simulated arm | Where multimodal localization actually breaks is calibration and disagreement between sensors, not detection accuracy |
| 7 | Sim-to-real and simulation-vs-road correspondence | AlohaMini sim2real | Policies trained in simulation had to run on a hand-built physical embodiment | Transfer household task performance from sim to hardware | Ran sim-to-real transfer on the hand-built AlohaMini | Ongoing transfer work on real hardware | GM treats simulation and road testing as one analytics framework. The interesting question is which sim results predict road results and which do not |
| 8 | Technical leadership and end-to-end ownership | Co-founding Merlyn Labs | Three people, no funding, nights and weekends, competing in Stanford's BEHAVIOR-1K Challenge | Produce externally verifiable research output with no institutional resources | Set the research agenda, split the work, published a technical report and an open-source contribution | 8th place Standard Track; flow-matching VLA integration merged into RLinf enabling RL training on BEHAVIOR-1K in OmniGibson | Constraint forced prioritization. Use the profile's exact one-liner and never imply funding or headcount |
| 9 | Instrumenting and characterizing physical systems numerically | Epineuron power characterization | A neurostimulation device had inadequate battery life for clinical use | Extend operating time without changing the therapy | Characterized power draw with oscilloscope and power-analyzer measurement, then optimized | 900% battery-life improvement; also modeled EM field penetration into peripheral nerves in COMSOL, which set electrode diameter | Closest story to "evaluating dynamic systems numerically" outside ML. Also the FDA Breakthrough-designated PeriPulse context, now in multinational trials |
| 10 | Cross-organizational communication of evaluation results | BEHAVIOR-1K technical report and LessWrong post | Findings had to reach both a robotics audience and an alignment audience | Communicate the same results to two readerships without distorting either | Wrote the technical report for the robotics framing and a separate model-organism analysis on LessWrong for the alignment framing | Two public artifacts, both externally checkable | The LessWrong post is the BEHAVIOR-1K model-organism view. It is NOT the LIBERO-PRO/pi-0.5 work. Conflating them is a known drafting error |

**Recommended case study.** Bring a one-page design for a scenario-coverage and drift-detection metric for an AV evaluation pipeline, framed as: what would a VLM judge have to refuse to reward for a "we passed the scenario library" result to actually mean something? Anchor it on the proprioceptive-collapse finding as the concrete precedent for a metric that looked fine while the system was cheating. This is the shape of work the JD describes and it is the shape of work he already does.

**Likely red-flag questions.**

- *"You've been out of school for about a year. We asked for five."* Do not argue the arithmetic. Answer with output: two publishable evaluation findings on autonomous policies, an open-source contribution merged into an RL framework, and a production eval pipeline at a bank, all inside that window. Then ask what the team's actual failure mode is. On YoE dropdowns the answer stays 2-4.
- *"Have you worked on a real AV stack?"* No. Say so flatly, then draw the transfer: evaluating a manipulation policy across scenes and evaluating a driving policy across operational domains are the same coverage and attribution problem, and he has the published version of it.
- *"How much C++ have you written?"* Give the honest scope. The JD asks for comfort reading, debugging, and instrumenting, not authoring core algorithms. Do not upgrade the answer.
- *"What is Merlyn Labs?"* Verbatim profile one-liner. Independent collective, three people, nights and weekends. No funding or headcount implications.
- *"Is your paper published?"* Unpublished. Submitted to CoRL 2026, rejected. Never say "under review," "accepted," or name a venue. The result stands on its own.
- *"Are you authorized to work in the US?"* Yes via TN, no sponsorship required. Flat, one sentence, no border-or-petition explainer.
- *"GM cut hundreds of software roles this year. Concerned?"* Ask it back, specifically: how is the Evaluation team funded relative to the IT organization that was reduced, and what is the headcount trajectory on the autonomy side. This is a legitimate question for someone relocating on a status tied to the job.

## G) Posting Legitimacy

**Tier: High Confidence.**

| Signal | Assessment |
|--------|------------|
| Source | GM's own Workday tenant (`generalmotors.wd5.myworkdayjobs.com`), hiring organization returned as "General Motors LLC" by the CXS API. Not an aggregator or third-party repost |
| Requisition | JR-202611035, `posted: true`, `canApply: true`, start date 2026-08-31, "Posted 2 Days Ago" |
| JD specificity | High. Names the team's actual charter (scenario libraries, continuous evaluation pipelines, release gating), names partner orgs, and lists tooling at a level of detail boilerplate does not reach |
| Boilerplate ratio | Moderate and appropriate: the About GM / EEO / accommodations blocks are standard corporate footer, and the role-specific content above them is substantial |
| Salary transparency | No figure. Notable, since GM posts ranges for some jurisdictions. Not a red flag for a national-remote req, but it is a gap |
| Scam-like language | None. No fee requests, no urgency pressure, no vague "comprehensive salary" framing |
| Corroborating pipeline signal | A sibling GM autonomy req (Senior ML Perception Engineer, Fallback Driving System, GM Automation Sunnyvale) appears in `data/scan-history.tsv` dated 2026-09-02, consistent with an active multi-role hiring push |
| Company hiring/freeze/layoff signals | Mixed but explicable: ~600 white-collar IT roles cut in May 2026 while the autonomy org rehires 100+ former Cruise staff. Hiring in this specific org is real |
| Apply-button state, freshness verification | `unverified (batch mode)` — no Playwright available. The CXS API's `canApply: true` and `posted: true` are indirect but strong evidence |

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | — not evaluated |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | — not evaluated |

### Global Score

| Dimension | Score |
|-----------|-------|
| CV match | 3.5/5 |
| North Star alignment | 3.5/5 |
| Compensation | 2.0/5 |
| Culture / working model | 4.0/5 |
| Red flags | -0.25 (2026 software layoffs, Cruise shutdown precedent, TN status tied to a program with a reversal in its history) |
| **Global** | **3.0/5** |

**Verdict: Consider, below the 4.0 apply-recommendation bar.**

The thematic fit is one of the better ones in this batch. The role is eval design for an autonomous system, which is the exact intersection of both of his stated love axes, and Calibration Rule 8 says robotics gets full weight. If the only question were "would he be good at this and enjoy it," the answer is clearly yes.

Three things pull it to 3.0. Compensation is the largest: GM's IC bands are well below a $300K-500K target and only marginally above the $180K floor, with no startup equity upside, and comp is a stated top priority. Second, the 5+ YoE requirement on a Workday req at a company currently flooded with genuinely senior ex-Cruise and ex-Zoox applicants makes a cold application a poor bet. Third, "Remote - United States" means relocation, which is fine per the Location Policy, but it removes the remote-from-Toronto bonus and it couples his immigration status to a program that GM has already reversed once.

Per Calibration Rule 7, the reason to keep this alive rather than skip it is attainability of a different kind: GM is not the ultra-selective tier, the domain match is specific enough to carry a warm intro, and the org is visibly hiring. But it should not consume a slot ahead of a comparable robotics or evals role at a startup with better comp and an assessment-first process. Treat it as a warm-path experiment, not a cold submission.

## Extracted Keywords

autonomy evaluation · evaluation pipelines · metrics and analysis algorithms · scenario coverage · drift detection · release gating · perception, prediction, planning · VLM / LLM evaluation · human-in-the-loop review · time-series analysis · dynamic systems evaluation · statistical modeling and experimental design · Python · Pandas / NumPy / SciPy · C++ · SQL · PyTorch · ROS · lidar / camera / radar sensor data · simulation and on-road testing · data visualization and dashboards · root-cause analysis · autonomy analytics · technical leadership
