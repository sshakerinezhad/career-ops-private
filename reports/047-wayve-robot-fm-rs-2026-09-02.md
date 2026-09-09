# Evaluation: Wayve — Research Scientist, Robot Foundation Model

**Date:** 2026-09-02
**Archetype:** Robotics / VLA Research Engineer (primary), ML / LLM Research Engineer (secondary)
**Score:** 3.9/5
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**URL:** https://wayve.firststage.co/jobs?gh_jid=8684160002
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 047-wayve-robot-fm-rs

---

## Machine Summary

```yaml
company: "Wayve"
role: "Research Scientist, Robot Foundation Model"
score: 3.9
legitimacy_tier: "High Confidence"
archetype: "Robotics / VLA Research Engineer"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "Essential requirement 'strong research track record, including publications in top-tier venues such as ICRA, CoRL, CVPR, NeurIPS, ICML or ICLR' is unmet: no top-tier venue publication exists, and the one paper was rejected by CoRL 2026"
  - "Essential requirement 'experience with scalable training, such as multi-node training, large datasets and/or large model training' has thin evidence: 10,000+ demonstrations and RLinf integration, but no multi-node or large-model training run in the CV"
  - "Seniority band mismatch: the $370K-419K range and 'founding member working closely with experienced researchers' framing point at a senior IC scientist, against roughly one year of post-graduate industry time"
  - "Desirable PhD or MS is not yet held: M.Eng in AI & Robotics is in progress, expected April 2027"
  - "No large-scale video dataset experience, which the JD names in both responsibilities and desirables"
top_strengths:
  - "Direct VLA and robot foundation model research output: BEHAVIOR-1K 8th place, proprioceptive collapse finding (60% masking improved task success up to 48%), open-sourced flow-matching VLA integration for RLinf"
  - "Rigorous multi-hypothesis experimental method matching 'ability to design and run rigorous experiments': the LIBERO-PRO study doubled position-swap success 21% to 42% and explicitly tested and rejected LoRA and frozen video-diffusion priors as rival explanations"
  - "Evaluation design depth, which the JD lists as a core responsibility: deterministic agent eval pipeline at BMO and VLM judges built to resist reward gaming at Merlyn Labs"
  - "Full-stack embodiment across sim and hardware: OmniGibson, MuJoCo, ROS2, sim-to-real on the hand-built AlohaMini platform, plus PCB and COMSOL roots"
risk_level: "Medium"
confidence: "High"
next_action: "Apply to the sibling req 'Roboticist, Robot Foundation Model' (gh_jid 8691402002, report 048) as the primary door into MEGA, since it accepts an MS with strong relevant experience and treats publications as valued rather than essential; pair it with warm outreach to a Wayve Labs or MEGA researcher, and submit this Research Scientist req only if that contact confirms the team levels flexibly"
work_auth: "not_needed"
discard_reasons:
  - "publication_gate_unmet"
  - "seniority_mismatch"
  - "resume_screen_first_process"
via: null
company_confidential: false
advertised_comp: "$370.000 to 419,000"
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
| Detected archetype | Robotics / VLA Research Engineer (primary); ML / LLM Research Engineer (secondary) |
| Domain | Embodied AI, robot foundation models for general-purpose robots explicitly beyond self-driving |
| Function | Research Scientist, founding member of the Multi-Embodiment Generalist Agent (MEGA) team inside Wayve Labs |
| Seniority | Senior individual-contributor scientist. The JD says "founding member" and "working closely with experienced researchers"; the $370K-419K band sits far above Wayve's own Roboticist band of $184.2K-240K, which places this at staff-adjacent scientist level |
| Remote / work mode | Hybrid, Sunnyvale CA, with stated core working hours. Relocation required, not remote-eligible |
| Team size | MEGA is a brand new team being staffed from zero. Wayve overall is carrying 154 open reqs on its Greenhouse board as of 2026-09-02 |
| Requisition | NR-SCI19, department "Wayve Labs", office "Sunnyvale, California USA", first published 2026-08-06 |
| Work authorization | JD is silent on sponsorship and carries a US E-Verify notice. Canadian citizenship plus TN eligibility means no sponsorship is required, so this is scored as not needed rather than as an unstated risk |
| TL;DR | Topically this is close to the best-matched robotics req seen in this batch: VLAs, world and action models, RL, imitation learning, evaluation design, real robots, publishing. The obstacle is not fit, it is the door. Publications in top-tier venues sit under Essential and are unmet, and the comp band describes a scientist several levels up. The same team is hiring a Roboticist with explicitly softer credential language, and that is the realistic entry point |
| User-profile caps or overrides applied | Calibration rule 1 checked and **not** triggered literally: this JD lists PhD or MS as *Desirable*, not required, and never says "first-author", so the automatic 3.5 cap does not fire. Calibration rule 3 **does** apply: top-tier publications are an *Essential* line and recruiter screens filter on those mechanically, so it is treated as semi-hard and stated plainly in Block C rather than waved away (rule 4). Rule 8 applied: robotics scored at full co-primary weight. Rule 7 applied: attainability is the first sort key, and the more attainable route is named in `next_action`. Rule 5 applied: labelled a stretch. Rule 6 not applicable |

---

## B) CV Match

### Essential requirements

| JD requirement (Essential) | Evidence | Verdict |
|---|---|---|
| Machine learning with focus in one or more of: vision-language models, video models, robot policies, foundation models for robotics, embodied AI | `cv.md` Merlyn Labs: open-sourced flow-matching VLA integration for RLinf enabling RL training on the BEHAVIOR-1K suite in OmniGibson; showed π0.5 generalization failures on LIBERO-PRO are recipe-induced overfitting. `cv.md` BEHAVIOR-1K: trained on 10,000+ demonstrations covering 22 of 50 scored task types | Strong match. Robot policies and foundation models for robotics are the centre of the last year of work |
| Experience with scalable training: multi-node training, large datasets and/or large model training | `cv.md`: 10,000+ demonstrations for BEHAVIOR-1K; distributed RL training infrastructure via the RLinf contribution; `article-digest.md` §3 documents a controlled sweep across batch sizes and learning rates stable from 8k to 27k steps | Partial. Large-dataset and distributed-infrastructure work is real, but no multi-node run and no large-model pretraining appears anywhere in the sources. This is the second-weakest line |
| Strong research track record, including publications in top-tier venues such as ICRA, CoRL, CVPR, NeurIPS, ICML or ICLR | `article-digest.md` §1: team technical report at merlyn-labs.com/behavior-report. §2: LessWrong post. §3: "Recalibrating VLA Baselines", **unpublished**, submitted to CoRL 2026 and rejected | **Unmet.** Output volume and quality are there; the venue credential is not. See Block C for how this behaves at a screen |
| Strong coding skills and hands-on experience with modern ML frameworks | `cv.md` Skills: Python, C/C++, PyTorch, JAX. Demonstrated through the RLinf merge, an accepted contribution to an external open-source RL framework | Match |
| Ability to design and run rigorous experiments while collaborating with engineering and robotics teams | `article-digest.md` §3: tested and rejected two rival hypotheses (LoRA at 15-21%, consistently below full finetuning at matched hyperparameters; frozen video-diffusion visual priors made results worse, 42% down to 35%) and bounded the effect (batch 16, LR 1e-6 drops to 26%). `cv.md` BEHAVIOR-1K: 60% proprioception masking improved task success up to 48% | Strongest match in the whole JD. This is exactly the ablation discipline the requirement describes |
| Experience translating research ideas into working systems, experiments or deployed capabilities | `cv.md`: RLinf integration merged upstream; sim-to-real transfer of household tasks on the hand-built AlohaMini embodiment; at BMO a deterministic agent eval pipeline running in a production wealth-management context | Match |
| Strong communication, sharing research clearly across teams | `article-digest.md` §1 and §2: published technical report plus a LessWrong post reframing the same findings for an alignment audience. Writing the same result for two different readerships is direct evidence | Match |

### Desirable requirements

| JD requirement (Desirable) | Evidence | Verdict |
|---|---|---|
| PhD or MS in CS, ML, Robotics, Computer Vision or related | `cv.md`: M.Eng in AI & Robotics, University of Toronto, expected April 2027. B.Eng Engineering Physics, McMaster, Dean's Honour List | Partial. The M.Eng is in progress, not held. Do not describe it as completed |
| Industry experience in ML, robotics, embodied AI or applied research | `cv.md`: AI Research Engineer at BMO AI Centre of Excellence since Sep 2025. Epineuron co-op May 2021 to Aug 2022 was biomedical and electrical, not ML | Partial. Industry ML experience is roughly one year and is in enterprise GenAI, not robotics |
| Real robots, robotic learning, embodied AI, simulation or policy learning | `cv.md`: OmniGibson, MuJoCo, sim2real on hand-built AlohaMini, ROS2, plus a 7-DOF simulated arm control pipeline with YOLO and LiDAR grasp planning | Strong match, and the closest thing to a differentiator against a purely simulation-based candidate |
| Large-scale video data and sequential decision-making systems | Sequential decision-making is covered by RL work at Merlyn Labs and RL environments at BMO. Large-scale video data has no support in `cv.md` or `article-digest.md` | Half met. Do not claim video-data experience |

### Gaps and mitigation

| Gap | Hard blocker or nice-to-have? | Adjacent experience | Portfolio proof point | Mitigation |
|---|---|---|---|---|
| No top-tier venue publication | Effectively hard at the screen, since it is listed under Essential. Not a hard blocker on the underlying ability | Externally verifiable research output: BEHAVIOR-1K leaderboard placement, an upstream open-source merge, a written technical report | merlyn-labs.com/behavior-report, github.com/RLinf/RLinf, the LessWrong post | Do not argue the gate away in writing. Change the door instead: the Roboticist req at the same team lists publications as "highly valued" rather than essential. If pursuing this req anyway, a referral is the only realistic path past the checklist |
| No multi-node or large-model training run | Nice-to-have with real weight, since the JD names distributed training pipelines as a core responsibility | Built and used distributed RL training through the RLinf integration; ran controlled sweeps over 8k-27k step budgets | RLinf flow-matching VLA integration | State the ceiling honestly and describe the infrastructure actually built. Scale exposure is a compute-access gap at a 3-person self-funded collective, which is a credible explanation and not a skill gap |
| PhD or MS not yet held | Nice-to-have. The JD marks it Desirable, and the sibling req states MS is acceptable | M.Eng in progress to April 2027 | Coursework in Deep Learning, RL, AI Applications in Robotics | Use the profile phrasing: "M.Eng in AI & Robotics, University of Toronto, expected April 2027". If pressed, "course-based M.Eng; my research happens at Merlyn Labs" |
| Seniority against a founding-scientist band | Semi-hard. Comp band and "founding member" language both point upward | One year at BMO plus concurrent independent research since Aug 2025, and an earlier 16-month engineering co-op | BEHAVIOR-1K result achieved nights and weekends alongside a full-time role | Do not chase this band. Target the Roboticist req and let leveling be a conversation after a technical signal exists |
| No large-scale video data experience | Nice-to-have | Multimodal pipeline work on BardSong (speech to text, scene extraction, image generation, narrated video) | BardSong, closed alpha with 23 DMs | Mention only if asked. BardSong is a generation pipeline, not video-dataset curation at training scale, and should not be stretched into one |

---

## C) Level and Strategy

**JD level versus natural level.** Wayve is advertising two members of the same MEGA team at once, and the gap between them is the whole story. This Research Scientist req is banded at $370,000 to $419,000. The Roboticist req on the same team is banded at $184,200 to $240,000. A spread of roughly $180,000 at the midpoints is not a title preference, it is two different levels. The Research Scientist band describes someone who already has a publication record and has led research direction. The natural level here is the Roboticist band: roughly one year of post-graduate industry work at BMO since September 2025, concurrent independent research at Merlyn Labs since August 2025, an M.Eng finishing April 2027, and a 16-month engineering co-op before that.

**Screen risk, stated plainly.** The screen risk on this req is high and it is mechanical. "Strong research track record, including publications in top-tier venues such as ICRA, CoRL, CVPR, NeurIPS, ICML or ICLR" is printed under **Essential**, not under Desirable. A recruiter working a checklist reads that line, looks for a venue name, finds none, and stops. The available artifacts do not clear it: a self-published technical report on merlyn-labs.com, a LessWrong post, and a paper submitted to CoRL 2026 and rejected. This is precisely the pattern behind the three prior cold-résumé rejections at frontier labs. There is no phrasing that converts a rejected submission into a top-tier publication, and attempting one is both dishonest and transparent to anyone who checks.

Two things soften it slightly, and neither should be over-read. First, PhD is only Desirable here, so this is not the full "PhD plus first-author publications" wall that triggers an automatic cap; the score is not capped at 3.5 on that basis. Second, Wayve appends the standard "not everyone will meet all of the requirements listed above, we encourage you to apply" clause. That clause is boilerplate present on all 154 of its reqs and carries close to zero information about how this specific requisition is actually screened. It is not a reason to treat the Essential line as soft.

**Selling seniority without lying.** The honest frame is research productivity without institutional support, not seniority. Concrete version, usable verbatim in outreach: eighth place in Stanford's BEHAVIOR-1K Challenge on the standard track, achieved by a self-funded three-person collective working nights and weekends against funded lab teams; a flow-matching VLA integration merged upstream into RLinf; and a systematic study that doubled π0.5 position-swap success from 21% to 42% while explicitly ruling out LoRA and frozen video-diffusion priors as alternative explanations. That last point is the one that maps to "ability to design and run rigorous experiments", because it shows rival hypotheses being tested and killed rather than a single favourable number being reported. Follow the profile's Merlyn restraint rule: describe it as a self-organized research collective, never imply funding, headcount, or company status.

**If Wayve downlevels.** The downlevel target is already posted, which makes this easier than usual. Do not treat a downlevel as a defeat to negotiate against; name the Roboticist req first and make the recruiter's job trivial. Script:

> "Looking at the two MEGA postings, I think the Roboticist req is the better match for where I am right now. I have the robot-learning and hardware side, and my research output is real but it is independent rather than published in venues. What does the path from that role toward the scientist track look like on this team?"

The comp consequence is real and should be understood before that sentence is said: moving from this band to the Roboticist band gives up roughly $130,000 to $235,000. The Roboticist band of $184.2K-240K still clears the stated $180K floor and sits inside the $180K-300K expectation for US robotics roles, so it remains a fundable outcome, just not a frontier-lab-band one.

---

## D) Compensation and Demand

**Company type: Growth-stage startup, late stage, VC-backed.** Founded 2017, headquartered in London with a Sunnyvale office. Wayve raised a $1.2 billion Series D announced February 2026 at an $8.6 billion post-money valuation, led by Eclipse, Balderton and SoftBank Vision Fund 2, with Nvidia, Microsoft and Uber participating alongside Mercedes-Benz, Nissan, Stellantis, Ontario Teachers' Pension Plan and Baillie Gifford. Including milestone-based commitments from Uber the round totals about $1.5 billion. This is a well-capitalized private company with strategic corporate backers, not an early-stage risk.

**Demand trend: strongly positive.** The Wayve Greenhouse board carries 154 open requisitions as of 2026-09-02. This scan alone captured 12 Sunnyvale and London roles first published between 2026-08-06 and 2026-09-01, including four on the Robot Foundation Model team specifically: Principal Research Scientist, Research Scientist (this req), Principal Roboticist, and Roboticist. Building out an entire new team at four levels at once is a funded expansion signal, not backfill. Commercially, Wayve has stated robotaxi trials with Uber in London during 2026 and supervised autonomy in consumer vehicles from 2027. No freeze or layoff signal surfaced.

**Advertised range:** "the reasonably estimated salary for this role ranges from $370.000 to 419,000, plus a competitive equity package". The "$370.000" is a typo in the posting; read as $370,000 to $419,000. The typo is a proofreading error, not an ambiguity, since the upper bound is correctly formatted.

**Likely guaranteed base:** $370,000 to $419,000. The phrasing "reasonably estimated salary for this role" with equity called out separately is standard California pay-transparency language for base salary, so the range should be read as base rather than total compensation.

**Variable or conditional cash components:** none stated. No bonus, no OTE, no sign-on mentioned.

**Expected stable cash:** $370,000 to $419,000 base, before tax.

**Non-cash benefits:** "a competitive equity package" in a private company at an $8.6 billion valuation. Illiquid and unpriced in the posting. Hybrid working policy with core hours. No specific benefits enumerated in the JD.

**Compensation reliability: High.** A specific range appears in the JD itself, is separated from equity, and is independently corroborated: Glassdoor shows an employer-provided estimate of $370K to $419K for this exact title in Sunnyvale. For contrast, levels.fyi reports a median Research Scientist package at Wayve in the UK of about £162K with a reported maximum near £255K, which is consistent with a US Bay Area premium rather than in conflict with it.

**Against target:** the profile targets $300K-500K+ total comp at US frontier labs, with a $180K floor. Base alone at $370K-419K lands inside the upper half of that range before any equity, and the base exceeds the entire target range for US robotics startups. On compensation this is the strongest req evaluated in this batch.

**HR verification questions (ask before or during any offer conversation):**

1. Is the $370,000 to $419,000 figure base salary only, and which internal level and band does this requisition map to?
2. What is the equity grant expressed in both share count and current 409A value, and what is the strike price relative to the Series D preferred price at the $8.6 billion valuation?
3. What is the vesting schedule and cliff, and is there a refresh policy for research staff?
4. Given the Series D closed in February 2026, what is the runway assumption behind funding a brand new MEGA team, and is MEGA headcount ring-fenced from the autonomous-driving roadmap?
5. What relocation support is provided for a Canadian citizen entering on TN status, and does Wayve have prior experience processing TN entries for this office?
6. How many days per week does the hybrid policy require on site in Sunnyvale, and are the core working hours defined in Pacific time?

**Comp score: 5/5.** Top quartile. The advertised base clears the top of the stated target range on cash alone.

---

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|------------------|-----|
| 1 | Professional Summary | "AI Research Engineer at BMO's AI Centre of Excellence and Co-Founder of Merlyn Labs. Works across LLM/agent evaluation, VLA models, RL, and robotics..." | Lead with robot foundation models and multi-embodiment policy work, keeping it to two sentences and zero pronouns. Anchor on the proprioceptive-collapse finding, which is the novel result | Profile rule 5 sets the finding hierarchy: proprioceptive collapse ranks above the position-swap finetuning result. Rules 2 and 7 cap length at two to three sentences with implied first person |
| 2 | Core Competencies (one line) | General ML and robotics mix | VLA models, imitation learning, reinforcement learning, sim-to-real, OmniGibson and MuJoCo, distributed RL training, evaluation design | Every term is backed by `cv.md`. Profile rule 11c bans unbacked chips, so nothing about video models or large-scale pretraining goes on this line |
| 3 | Merlyn Labs bullets | Four bullets covering LIBERO-PRO, conservative finetuning, VLM judges, RLinf, AlohaMini | Reorder to put RLinf and AlohaMini first for this req, since the JD names distributed training pipelines and deploying policies on physical robots as responsibilities | Reordering only, not rewriting. Rule 12 keeps full bullets rather than compressing roles to stubs |
| 4 | BEHAVIOR-1K project | Present with all four bullets | Keep in full and keep it high on the page. Retain the trained-on-22-of-50-scored framing exactly | `article-digest.md` §1 is explicit that stating either 22 or 50 alone is wrong. This is the most externally verifiable robotics credential available |
| 5 | BMO role | Six bullets plus the greeter-robot side project | Keep the bias-detection, eval-pipeline and graph-agent bullets in that order. Cut the greeter-robot line for this application | Profile rule 3 forbids using the robot as a robotics credential. Delta D007 forbids dropping the strong BMO bullets on a robotics application, so they stay |
| 6 | Epineuron | Four bullets | Keep two strongest if space allows: FDA Breakthrough-designated PeriPulse in multinational clinical trials, and the COMSOL nerve-field modeling that set electrode diameter | Rule 12 forbids gutting a role to one weak line. Hardware credibility supports the "real robots" desirable |
| 7 | Prosthetic and BardSong projects | Both present | First cut candidates if the page runs over, BardSong before the prosthetic | The 7-DOF arm with YOLO and LiDAR grasp planning is on-domain for manipulation; BardSong is not |
| 8 | Education phrasing | "M.Eng, MIE — AI & Robotics, University of Toronto (Sep 2024 – Apr 2027, anticipated)" | "M.Eng in AI & Robotics, University of Toronto, expected April 2027" | Profile rule 8. Never "M.Eng candidate". The JD lists MS as desirable, so the expected date should be legible at a glance |
| 9 | Header contact row | Six items risk wrapping | Exactly one line, location item exactly "Toronto, Canada", no visa text. Drop the portfolio URL first if it wraps | Profile rules 11b and the `_custom.md` measured-header rule. Verify with `.tmp-measure.mjs`, never by eye |
| 10 | LinkedIn headline | "AI research engineer across frontier robotics (VLA/RL) and alignment evals" | For the Wayve window, foreground embodied AI and robot foundation models ahead of alignment evals | MEGA is explicitly a robotics program. Alignment framing is the secondary axis for this team |
| 11 | Application free-text work authorization | Not yet drafted | "Canadian citizen, TN-eligible (no sponsorship needed; TN is issued at the border, no employer petition)." | Profile policy for form free-text fields specifically. Delta D005 confirms the clarifier is stripped from letters but kept in forms |
| 12 | Cover letter, if written | Not yet drafted | Open with a flat statement of the work, then evidence. No mirroring of the posting back, no maxims, no em dashes | Deltas D003, D008, D009 and D012, plus profile rule 10 |

---

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Design and evaluate models such as VLAs for robotics | Proprioceptive collapse in BEHAVIOR-1K | Competing in Stanford's BEHAVIOR-1K Challenge on the standard track, scored across all 50 task types with compute for only 22 | Diagnose why manipulation policies failed on tasks that looked learnable | Isolated the policy's dependence on proprioceptive input and ablated it by masking | Masking 60% of proprioception improved task success by up to 48% | The model was reading its own joint state as a shortcut instead of reading the scene. The lesson is that an input channel can be actively harmful, which is only visible if you ablate inputs rather than only tuning them |
| 2 | Ability to design and run rigorous experiments | Recalibrating the π0.5 LIBERO-PRO baseline | The published π0.5 checkpoint scored 96% on standard LIBERO but collapsed to 21% on LIBERO-PRO position-swap evaluation | Determine whether the collapse was architectural or recipe-induced | Ran a conservative full-finetuning recipe at batch 64 and LR 1e-5, then tested rival hypotheses: LoRA at matched hyperparameters, and frozen video-diffusion visual priors | Position-swap success doubled from 21% to 42% and stayed stable from 8k to 27k steps. LoRA came in at 15-21%, consistently below full finetuning. Frozen visual priors made it worse, 42% down to 35%. Too-conservative settings at batch 16 and LR 1e-6 dropped to 26% | The failure was trajectory memorization from the training recipe, not a representational limit. The implication for the field is that recent methods reporting LIBERO-PRO gains are measuring against a miscalibrated baseline. Note honestly: submitted to CoRL 2026 and rejected |
| 3 | Build scalable distributed training pipelines and infrastructure | RLinf flow-matching VLA integration | RLinf had no path to train flow-matching VLA policies with RL on BEHAVIOR-1K tasks | Make RL training possible on the BEHAVIOR-1K suite inside OmniGibson | Implemented and open-sourced the flow-matching VLA integration into an external RL framework and took it through upstream review | Merged into github.com/RLinf/RLinf, enabling RL training on BEHAVIOR-1K in OmniGibson | Infrastructure work is what makes a research question askable at all. Getting it merged upstream also meant meeting someone else's code standards, not just my own |
| 4 | Designing evaluations, and connecting research progress to real performance | Deterministic agent eval pipeline at BMO | An agentic tool serving over $200B in AUM in wealth management was behaving subtly wrong in ways individual spot checks did not catch | Detect misaligned outputs systematically rather than anecdotally | Built evaluation harnesses and test setups running hundreds of synthesized inputs through the tool | Surfaced a systematic bias toward downplaying investment risk | The behaviour was invisible until scaled to hundreds of test cases. Single-example review cannot find a distributional bias, which is the same reason robot policy evaluation needs many seeds rather than a good demo |
| 5 | Explore learning approaches including RL and behavioural cloning | VLM judges as dense RL reward | Sparse task-completion reward gives almost no learning signal on long-horizon manipulation | Produce dense, context-dependent reward without hand-engineering per-task reward functions | Developing VLM judges that score rollouts into dense rewards, with the design constraint that the judge must be difficult to game | In active development at Merlyn Labs | Most of the work goes into resistance to gaming rather than into accuracy. A reward model that can be satisfied without doing the task teaches the policy the wrong thing |
| 6 | Collaborate with robotics teams, deploy policies on physical robots | AlohaMini sim-to-real | Household manipulation policies trained in simulation needed to run on real hardware | Transfer learned tasks onto a physical embodiment | Hand-built the AlohaMini platform and ran sim-to-real transfer of household tasks | Ongoing transfer work on a self-built robot | Building the robot changes what you notice in simulation. Calibration and timing problems that are invisible in sim dominate on hardware |
| 7 | Robot policy development, spatial reasoning | Long-tail subtask performance via boundary resampling | Manipulation success on long-tail BEHAVIOR-1K subtasks lagged badly behind common ones | Improve performance on rare skill segments without more data collection | Oversampled skill transitions through boundary resampling in the training mix | Doubled manipulation success on long-tail subtasks | Where the demonstrations are cut matters as much as how many there are. Skill boundaries are where policies actually break |
| 8 | Strong coding, hands-on with real robots and control | 7-DOF voice-controlled robotic prosthetic, University of Toronto | A 7-DOF simulated arm needed to act on natural-language instruction | Convert language into executable manipulation sequences | Built an LLM-based control pipeline and integrated YOLO object detection with LiDAR depth mapping for 3D localization and grasp planning | Working language-to-manipulation pipeline on the simulated arm | This was language-to-action before I had the vocabulary for VLAs. The perception-to-grasp plumbing is the part that generalizes to real platforms |
| 9 | Translating research into deployed capability, hardware fluency | PeriPulse at Epineuron | A neurostimulation device was heading into multinational clinical trials | Get the hardware validated and field-viable | Designed and assembled PCBs, authored IEC 60601-1 and ISO 13485 validation protocols, optimized power draw with oscilloscope and power-analyzer testing, and modeled electromagnetic field penetration into peripheral nerves in COMSOL | FDA Breakthrough-designated device now in multinational trials; 900% battery-life improvement; the COMSOL data set the electrode diameter | Regulated hardware teaches you to write down what "working" means before you build. That habit is what evaluation design is |
| 10 | Chunked execution and temporal modelling in VLAs | Chunked execution versus temporal ensembling | Evaluating action-decoding strategies for VLA policies on BEHAVIOR-1K | Determine which decoding strategy served long-horizon tasks | Compared chunked execution against temporal ensembling across tasks | Chunked execution outperformed temporal ensembling by roughly 3x | The architectures lack temporal awareness, so averaging across timesteps destroys signal instead of smoothing it. Keep this as a body-level detail, not a headline: it is a well-known observation |

### Recommended case study

Propose a cross-embodiment extension of the proprioceptive-collapse result, aimed directly at MEGA's stated multi-embodiment goal. The question: does a VLA's over-reliance on proprioceptive state change across embodiments, and does a masking schedule tuned on one embodiment transfer to another? The setup uses OmniGibson and BEHAVIOR-1K for the simulated arm, AlohaMini for a real dual-arm platform, and measures the masking ratio that maximizes task success on each. This is buildable from work already done, it targets the exact failure mode MEGA will hit when moving policies between mobile manipulators, dual-arm platforms and humanoids, and it doubles as an evaluation-design proposal rather than only a modelling one. Bring it as a one-page written proposal, not as slides.

### Likely red-flag questions

| Question | How to answer |
|---|---|
| "You do not have publications at ICRA, CoRL, NeurIPS or similar. This role lists that as essential." | Answer it straight and do not negotiate the premise. The paper went to CoRL 2026 and was rejected. Everything else is a technical report, a LessWrong post, and an open-source merge. Then redirect to what is externally verifiable: the BEHAVIOR-1K leaderboard placement and the RLinf merge are both checkable by anyone in five minutes, which is a different kind of evidence than a citation count. If the checklist is binding, ask directly whether the Roboticist req is the better fit |
| "Your M.Eng is not finished, and it is course-based." | "Course-based M.Eng in AI and Robotics at Toronto, expected April 2027. My research happens at Merlyn Labs." No embellishment, no thesis implication |
| "What is Merlyn Labs? How many people, who funds it?" | Use the profile one-liner verbatim: "Self-organized research collective. Three of us doing robotics research nights and weekends. We placed 8th in Stanford's BEHAVIOR-1K Challenge, published our methods, and contribute to open-source RL infra." Never imply funding, headcount or company status beyond that |
| "What is the largest model and the largest training run you have driven?" | The honest ceiling: 10,000+ demonstrations on BEHAVIOR-1K, controlled sweeps over an 8k to 27k step range, distributed RL through the RLinf integration. No multi-node pretraining. Frame it as a compute-access constraint at a self-funded three-person collective and say what you would do with a real cluster |
| "Your paper was rejected. What did the reviewers object to?" | Answer factually about the work rather than speculating about reviewers: the result is a recipe-calibration finding rather than a new method, which is a harder sell at a methods venue even when the implication for the field is real. Do not claim it is under revision or under review unless that becomes true |
| "You have a full-time job at a bank. How does the robotics research fit?" | It is nights and weekends, and the BEHAVIOR-1K result was produced under exactly that constraint. Do not oversell the bank work as robotics: BMO is enterprise GenAI evaluation, the legacy greeter robot is a side repair task, and calling it robotics experience would not survive one follow-up question |
| "Why Wayve, and why MEGA rather than the driving stack?" | MEGA is manipulation and multi-embodiment policy work, which is the actual research area. Be direct that the AV product is not the draw and the robot foundation model program is. The posting's own "passionate about self-driving cars" line is recycled boilerplate on a team the JD explicitly defines as beyond self-driving |

---

## G) Posting Legitimacy

**Tier: High Confidence.**

| Signal | Finding |
|---|---|
| Company verifiability | Strong. Wayve is a well-documented company founded 2017. $1.2 billion Series D announced February 2026 at an $8.6 billion valuation, with Nvidia, Microsoft, SoftBank Vision Fund 2, Uber, Mercedes-Benz, Nissan and Stellantis on the cap table. Covered by CNBC and Ontario Teachers' Pension Plan among others |
| Source authenticity | Strong. Pulled directly from the official Greenhouse Boards API for board `wayve`. Requisition ID NR-SCI19, internal job ID 6469408002, department "Wayve Labs", office "Sunnyvale, California USA" |
| Identity verification | **Passed a mandatory integrity check.** Job id 8684160002 was independently confirmed against the full board listing at `/v1/boards/wayve/jobs` and maps to "Research Scientist, Robot Foundation Model" in Sunnyvale on both endpoints. A first fetch in this session was cross-contaminated by a filename collision with a sibling worker's payload; the JD was re-fetched to an isolated path and the id was asserted programmatically before any content was read |
| JD specificity | High. Names the specific team (MEGA), specific model families (VLAs, world and action models, omni-modal, video models), specific embodiments (mobile manipulators, dual-arm platforms, humanoids), and specific venues |
| Salary transparency | Strong. A concrete range appears in the posting, separated from equity, consistent with California pay-transparency law. Corroborated by an employer-provided Glassdoor estimate of $370K to $419K for this exact title and location |
| Boilerplate ratio | Moderate, roughly 40%. About-us, DEI, accommodations, E-Verify and disclaimer sections are standard and appear on all Wayve reqs. The role-specific content is substantial and detailed |
| Sloppiness signals | Three present and worth noting as quality, not fraud: a malformed sentence ("general-purpose robots beyond not self-driving vehicles"), a salary typo ("$370.000"), and a recycled closing line inviting people "passionate about self-driving cars" on a team the same JD defines as explicitly beyond self-driving. Read as template reuse under fast hiring, not deception |
| Scam-like language | None. No fees, no vague employer, no personal-data requests, no unrealistic promises, no off-platform contact |
| Freshness | First published 2026-08-06, last updated 2026-08-06, no application deadline set. Roughly four weeks old as of 2026-09-02, which is normal for a senior research req |
| Prior appearances | Appears once in `data/scan-history.tsv`, added 2026-09-02 by the `greenhouse-full` scanner. First capture, not a repost |
| Hiring context | Wayve is carrying 154 open reqs. The Robot Foundation Model team alone is advertising four levels simultaneously: Principal Research Scientist (8684066002), Research Scientist (this req), Principal Roboticist (8692111002) and Roboticist (8691402002). Consistent with a funded new-team build-out |
| Apply-button state, live liveness | `unverified (batch mode)`. Playwright is not available in this worker, so the apply flow and current live state were not directly exercised. The posting was returned as active by the Greenhouse API on 2026-09-02 |

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
| Compensation | 5.0/5 |
| Culture / working model | 4.5/5 |
| Red flags | -0.5 (screen risk: an unmet *Essential* top-tier publications requirement at a founding-scientist comp band) |
| **Global** | **3.9/5** |

Arithmetic: (3.0 + 5.0 + 5.0 + 4.5) / 4 = 4.375, less 0.5 for screen risk, rounds to 3.9.

**Notes on each dimension.** CV match at 3.0 reflects a split verdict: topical overlap is close to the highest available, while two Essential lines (publications, scalable training) are unmet or thin and the desirable degree is not yet held. North Star at 5.0 is unambiguous, since robot foundation models, VLAs, RL, imitation learning, sim-to-real and evaluation design are the exact stated love axis. Compensation at 5.0 clears the top of the target range on base alone. Culture at 4.5 reflects a hybrid Sunnyvale role where relocation is welcomed rather than penalized under the location policy, with half a point off for mandatory on-site presence closing off the remote-from-Toronto scenario. No red-flag deduction was taken for legitimacy, which is clean; the 0.5 is attainability, and it is named rather than buried.

**Decision: Consider, labelled stretch.** Content fit is excellent and the compensation is the best in this batch, but the entry path is a cold résumé screen against an Essential requirement that is genuinely unmet, at a band describing a more senior scientist. Under the attainability-first rule this must not crowd out the realistic application. The realistic application is on the same team: "Roboticist, Robot Foundation Model" (gh_jid 8691402002, evaluated as report 048) states that an MS is acceptable with strong relevant experience, treats top-tier publications as "highly valued" rather than essential, and asks for exactly the C++, Python, ROS2, robot hardware and policy-deployment work that the AlohaMini build, the 7-DOF pipeline and the PCB background support directly. Go through that door, pair it with warm outreach to a Wayve Labs or MEGA researcher, and hold this requisition for the case where a contact says the team levels flexibly.

---

## Extracted Keywords

`robot foundation models` · `vision-language-action models (VLA)` · `world and action models (WAM)` · `omni-modal models` · `video models` · `multi-embodiment` · `embodied AI` · `robot policies` · `reinforcement learning` · `imitation learning` · `behavioural cloning` · `policy deployment on physical robots` · `evaluation design` · `large-scale video datasets` · `data curation and filtering` · `scalable distributed training` · `multi-node training` · `model architectures` · `mobile manipulators` · `dual-arm platforms` · `humanoids` · `sim-to-real` · `foundation model research`
