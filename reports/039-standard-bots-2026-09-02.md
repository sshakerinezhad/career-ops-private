# Evaluation: Standard Bots — Senior AI Research Engineer

**Date:** 2026-09-02
**Archetype:** Robotics / VLA Research Engineer (primary) + ML / LLM Research Engineer (secondary)
**Score:** 3.6/5
**Legitimacy:** Proceed with Caution
**Work Auth:** ⚠️ Unstated
**URL:** https://jobs.ashbyhq.com/StandardBots/a3cd1d01-66a1-4d2d-9017-876532f4f68c
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 039-standard-bots-ai-re

---

## Machine Summary

```yaml
company: "Standard Bots"
role: "Senior AI Research Engineer"
score: 3.6
legitimacy_tier: "Proceed with Caution"
archetype: "Robotics / VLA Research Engineer"
final_decision: "Consider"
hard_stops:
  - "5+ years AI modeling experience specifically in the self-driving car industry (alt path: PhD + 3 years AV): zero AV-industry experience, no PhD, ~1 year professional AI modeling"
soft_gaps:
  - "No large-scale production ML deployment at fleet scale; largest deployed surface is an internal bank GenAI tool and sim/benchmark training runs"
  - "Autoregressive action models are adjacent (LLM finetuning, VLA policy work) rather than a professional AR-policy track record"
  - "No stated NodeJS/TypeScript or production Docker/infra ownership in cv.md"
top_strengths:
  - "Flow-matching VLA work is exactly camera-input-to-trajectory-output: RLinf flow-matching VLA integration for BEHAVIOR-1K in OmniGibson"
  - "Model debugging and failure-mode analysis is the core skill: proprioceptive collapse (60% masking, up to 48% success gain) and the LIBERO-PRO recipe-induced overfitting finding (21% to 42%)"
  - "Implements and recalibrates research papers as a habit, which is the JD's explicit 'adapting academic work' bullet"
risk_level: "Medium"
confidence: "Medium"
next_action: "Warm contact first: identify the AI team lead or a founding engineer on the ~small AI team via contacto mode and send a short note anchored on the flow-matching VLA and LIBERO-PRO recalibration work, then apply to the Senior req (not the Staff sibling) referencing that thread. Do not cold-apply first."
work_auth: "unstated"
discard_reasons:
  - "seniority_mismatch"
  - "domain_experience_gate_self_driving_industry"
via: null
company_confidential: false
advertised_comp: "$225,000 to $300,000"
risk_summary:
  legitimacy: "proceed_with_caution"
  classification: "not_evaluated"
  culture: "not_evaluated"
  interview_redflags: "not_evaluated"
  ai_infra: "consistent"
```

## A) Role Summary

| Field | Value |
|-------|-------|
| Detected archetype | Robotics / VLA Research Engineer (primary), ML / LLM Research Engineer (secondary) |
| Domain | AI-native industrial robotics (cobot arms, demonstration-trained manipulation) |
| Function | Model development, training pipelines, evaluation and debugging systems |
| Seniority | Senior, with explicit flex: "We are open to a variety of seniority levels for this role" |
| Remote / work mode | Primary New York City, NY; workplace type Hybrid; secondary location "US (Remote)". Ashby metadata marks the secondary remote location as `addressCountry: United States` |
| Team size | "We have a small team of AI engineers"; company-wide 37-38 open reqs, scaling toward 200+ employees |
| Tech stack | PyTorch (required), Python, NodeJS/TypeScript, Docker |
| Comp (advertised) | $225,000 to $300,000 base, plus employee stock options and bonus |
| Posted | 2026-01-24 (over 7 months old as of evaluation date) |
| TL;DR | The work described is a near-exact match for what Shayan already does: diffusion and flow-matching policies, camera-to-trajectory pipelines, RL, eval frameworks, failure-mode analysis, and adapting research papers. The gate is not the work, it is the credential line: 5+ years of AI modeling **specifically in the self-driving car industry**, which he does not have in any amount. |

**Calibration rules applied (`modes/_profile.md`):**

- **Rule 8 (robotics co-primary):** Standard Bots is named explicitly in the in-scope robotics-startup list. Full weight, not a fallback archetype.
- **Rule 7 (attainability first):** Funded mid-size robotics startup rather than a marquee lab, with an explicit seniority-flex clause. That places it above frontier-lab résumé screens on attainability, but the AV-industry line is a real, specific filter, so a warm path is mandatory rather than optional.
- **Rule 3 (hard YoE numbers are semi-hard):** "5+ years" and "PhD with 3+ years" are both scoped to the self-driving car industry. Screen risk is stated plainly in Block C, not waved away.
- **Rule 5 (stretch labelling):** this is a stretch on credentials, not on capability. Labelled as such.
- **Rule 4 (honest bar over encouragement):** the specific reason the gate is partially waivable is quoted in Block C from the JD's own compensation paragraph, not assumed.
- **Rule 6 (no Anthropic):** not applicable.
- **Location Policy:** NYC hybrid relocation carries **no penalty**; relocation to the US is preferred. The "US (Remote)" secondary location would be a bonus signal **only if open to Canada**, and it is not confirmed. See the location note below.

**Location and Canada eligibility (explicit finding):** The posting does **not** state that the remote option is open to Canada, and there is no evidence that it is. All 38 live Standard Bots postings resolve to US locations only (New York City, Glen Cove NY, Philadelphia, Boston, San Francisco, Seattle, "US (Remote)", "United States (Remote)", "US-West Coast (remote)"). No Canadian entity, no Canadian posting, and the Ashby record tags the remote secondary location with `addressCountry: United States`. Treat this as **US-payroll, US-based**: the realistic path is relocation to NYC on TN status, not remote-from-Toronto. No location bonus is applied to the score. Confirm with the recruiter before assuming any Canada-based arrangement.

**Work authorization:** the JD is silent on sponsorship (`unstated`, neutral, not a blocker). Shayan is a Canadian citizen and TN-eligible, so no petition-based sponsorship is required for a US-based role. Nothing in the posting suggests an ITAR or US-person restriction, though a domestic-manufacturing "American-made" positioning is central to the company's public story and is worth a direct question if defense-adjacent customers come up.

## B) CV Match

| JD requirement | Evidence in `cv.md` / `article-digest.md` | Verdict |
|---|---|---|
| "Design and implement state of the art ML models and training pipelines" | BEHAVIOR-1K: trained on 10,000+ demonstrations across 22 of 50 scored task types, 8th place Standard Track. Open-sourced flow-matching VLA integration for RLinf. | ✅ Strong |
| "Latest techniques in diffusion and autoregressive models in a professional setting" | Flow matching listed as a core skill; flow-matching VLA integration shipped into RLinf; π0.5 recalibration work is on a flow-matching policy. Autoregressive coverage is LLM finetuning and agent work at BMO. | ⚠️ Partial: diffusion/flow-matching is direct, autoregressive is adjacent, and "professional setting" is arguable since the strongest work is at a self-funded collective |
| "Training, inference and infra pipelines from camera input to trajectory output for self driving or robotics" | This is literally the VLA stack: OmniGibson/BEHAVIOR-1K training, sim-to-real transfer on hand-built AlohaMini, YOLO + LiDAR to 3D localization and grasp planning on a 7-DOF arm. | ✅ Strong (robotics branch; zero on the self-driving branch) |
| "Experience with RL" | Developing RL environments for BMO wealth-management agents; VLM judges producing dense, hard-to-game RL rewards; RLinf contribution enabling RL training on BEHAVIOR-1K. | ✅ Strong |
| "Implement model evaluation frameworks and metrics tracking" / "Build robust evaluation and debugging systems" / "Analyze model behavior and failure modes" | The single strongest match. Deterministic agent eval pipeline over hundreds of synthesized inputs at BMO; proprioceptive collapse identified as a critical VLA failure mode (60% masking, up to 48% success improvement); chunked execution beat temporal ensembling ~3x. | ✅ Very strong |
| "Transfer learning and fine-tuning strategies" | Conservative full finetuning doubled π0.5 LIBERO-PRO position-swap success from 21% to 42%; tested and rejected LoRA (15-21%) and frozen video-diffusion visual priors (42% to 35%). Fine-tuned an LLM on D&D sourcebooks for BardSong. | ✅ Very strong, with a rare negative-result discipline |
| "Model debugging, optimization, and performance tuning" | The LIBERO-PRO study is a debugging study: it isolates recipe-induced trajectory memorization from a representational limit, and bounds the effect (batch 16 / LR 1e-6 drops to 26%). | ✅ Strong |
| "Background in implementing ML research papers and adapting academic work" | Reproduced and recalibrated a published π0.5 baseline, then proposed an alternative baseline. Wrote a paper on it (unpublished; submitted to CoRL 2026 and rejected). | ✅ Strong |
| "Proven track record developing and deploying large-scale ML models" | Production-adjacent at BMO (internal GenAI tooling touching a $200B+ AUM business); research-scale training runs at Merlyn. No fleet-scale or high-QPS deployment. | ⚠️ Partial |
| PyTorch required; Python | PyTorch and Python both listed and demonstrated throughout. | ✅ |
| NodeJS / TypeScript, Docker | Not stated anywhere in `cv.md`. | ⚠️ Gap, minor |
| **"5+ years of AI modeling experience, specifically within the self-driving car industry (or PhD with 3+ years ... in the self-driving car industry)"** | BMO from Sep 2025, Merlyn Labs from Aug 2025 (concurrent). M.Eng, not PhD. No autonomous-vehicle industry experience of any duration. | ⛔ **Hard gate missed on both prongs** |

**Gap analysis and mitigation**

| # | Gap | Blocker or nice-to-have? | Adjacent experience | Portfolio proof | Mitigation |
|---|---|---|---|---|---|
| 1 | 5+ years AV-industry AI modeling | **Hard as written.** Both alternative paths route through the same self-driving requirement. | Robotic manipulation policy work is the same technical shape: perception input, learned policy, trajectory output, sim-to-real gap, closed-loop failure modes. AV planning and manipulation planning share diffusion-policy and imitation-learning literature almost wholesale. | BEHAVIOR-1K report, LIBERO-PRO paper, RLinf merge | The JD's own compensation paragraph says "We are open to a variety of seniority levels for this role and will build compensation packages that are commensurate with seniority and skill level." That is an explicit invitation to be levelled down rather than filtered out, and it is the only legitimate lever here. Use a warm contact to get the manipulation-equals-planning argument in front of a human before the résumé hits an ATS keyword filter for "autonomous vehicle". |
| 2 | Years of professional experience generally (~1 year wall-clock) | Semi-hard (Rule 3). Recruiter screens count. | Epineuron co-op (May 2021 to Aug 2022), Merlyn research output at a depth most 1-year engineers do not reach. | Standing decision: YoE dropdowns answered 2-4 (user-ratified 2026-07-28). | Do not re-litigate. Answer 2-4 and let the artifacts carry the weight. |
| 3 | Large-scale deployment | Nice-to-have; the JD emphasises experimentation velocity more than serving scale. | BMO internal tooling at a regulated bank; eval pipelines over hundreds of synthesized inputs. | BMO bias-detection work | Reframe "large-scale" as breadth of evaluation surface rather than QPS. Do not overclaim deployment scale. |
| 4 | Autoregressive models "in a professional setting" | Nice-to-have; diffusion is the co-listed technique and is genuinely covered. | LLM finetuning and agent systems at BMO; BardSong finetuning. | article-digest §3 | State the flow-matching depth first, then the AR exposure honestly as LLM-side. Do not invent AR-policy work. |
| 5 | NodeJS/TypeScript, Docker | Nice-to-have; peripheral to the modeling role. | Not evidenced in `cv.md`. | None | Leave it alone. Do not add either to the CV; there is no backing claim. |

## C) Level and Strategy

**JD level vs natural level.** The req is titled Senior and asks for 5+ years of AV-industry modeling. Shayan's natural level today is early-career-to-mid research engineer with an unusually senior research output profile: about 1 year of full-time professional work, plus a co-founded collective with externally verifiable results (BEHAVIOR-1K 8th place, RLinf merge). On the work itself he can hold a Senior conversation about VLA training, evaluation design, and finetuning recipes. On the credential line he is two prongs short.

**Screen risk, stated plainly.** This is high. The gate is not just a YoE number, it is a YoE number **bound to a specific industry** ("specifically within the self-driving car industry"), repeated twice in the posting, including in the "About the role" paragraph: "This role requires a proven background working on ML planning within the autonomous vehicle space." A recruiter or an ATS filter scanning for AV employers (Waymo, Cruise, Zoox, Aurora, Nuro, Tesla Autopilot, Wayve, Motional) will find none on the résumé. A cold Ashby application here is likely to be filtered before a human reads the BEHAVIOR-1K line. Per Rule 3 this is treated as binding, not hand-waved.

**Why it is nevertheless partly waivable, with the specific reason (Rule 4).** Three concrete signals, not optimism:

1. The posting states its own flexibility: "We are open to a variety of seniority levels for this role and will build compensation packages that are commensurate with seniority and skill level." Companies that write this are prepared to hire a strong candidate below the stated bar and pay them lower in the band.
2. The AI team is described as small and cross-stack ("work across the stack to do what is needed to get a model that achieves a customer problem"). Small teams hire on demonstrated capability more than on employer pedigree.
3. The company simultaneously lists a Staff AI Research Engineer req (posted 2026-08-25, $250K-$300K, 7+ years AV) with an otherwise identical description. Two open reqs for the same work, one of them seven months old, is a team that has struggled to fill against the AV requirement. That is exactly the situation where an adjacent-domain candidate with strong artifacts gets a conversation.

**Selling seniority without lying.** Lead with scope and output, never with title or tenure. Honest framings that are already backed by `cv.md`:

- "Camera-to-trajectory policy work is what I do: I open-sourced the flow-matching VLA integration for RLinf so BEHAVIOR-1K tasks can be RL-trained in OmniGibson."
- "I have run the debugging loop you describe end to end: found proprioceptive collapse as a VLA failure mode, quantified it (masking 60% of proprioception improved task success by up to 48%), and shipped the fix."
- "I recalibrated a published π0.5 baseline. Conservative full finetuning doubled position-swap success from 21% to 42% with no architectural change, and I ruled out LoRA and frozen video-diffusion priors as explanations."

Never: "5 years of experience", "AV background", "led BMO's robot platform", "published paper", or any venue for the recalibration paper. It was submitted to CoRL 2026 and rejected. The honest phrasing is "we wrote a paper" or "we proposed an alternative baseline".

**If they downlevel.** Accept the level, negotiate the number. The advertised floor is $225K base, which already clears the $180K minimum and sits inside the robotics-startup target band. Script, adapted from the profile's negotiation scripts: "Level is yours to set. I'm targeting the upper part of the posted band based on the research output I'm bringing, and I'm flexible on structure. What matters is total package and what I get to work on." If they anchor at $225K on a downlevelled title, push on equity quality instead of base: this is a post-Series-C $1B-valuation company, so strike price and refresh policy matter more than $10K of base.

**If they push back on the AV gap directly.** Do not apologize for it and do not oversell manipulation as equivalent. The honest, strong answer: "I haven't worked in AV. The pipeline shape is the same one I work on daily, camera input to trajectory output with a learned policy, and the failure modes I chase (proprioceptive shortcuts, memorized trajectories that break under position swaps) are the ones that bite planning stacks too. What I'd need to learn is your safety and validation culture, not the modeling."

## D) Compensation and Demand

**Advertised range:** "The salary range for this role is $225,000 to $300,000, depending on experience." Plus: "All Full-Time Employees are eligible for Employee Stock Options," a bonus component (Ashby tags "Offers Bonus"), and PTO, medical/dental/vision, life, disability, and 401(k).

**Company type:** Growth-stage / VC-backed startup, high confidence. Standard Bots closed a $200M Series C at a $1B valuation on 2026-06-09, led by RoboStrategy with participation from General Catalyst, Amazon's Alexa Fund, Samsung Next, BoxGroup, and GiantLeap Capital. It manufactures the RO1 cobot in Glen Cove, NY and is expanding that facility from 16,000 to 70,000 sq ft.

**Compensation reliability: High.** The figure is stated as "the salary range for this role" in the compensation section, and it is separated from equity and bonus in both the prose and the structured Ashby compensation record ($225,000-$300,000 salary, 1 YEAR interval, USD; equity and bonus listed as distinct components). This is a base-salary band, not an OTE or "total package" number. NYC pay-transparency law also applies to the NYC-primary posting, which raises the reliability of the figure further.

**Component split**

- **Advertised range:** $225,000 to $300,000 (verbatim: "The salary range for this role is $225,000 to $300,000, depending on experience")
- **Likely guaranteed base:** $225,000 to $300,000, with a downlevelled offer landing near or slightly below the floor given the explicit seniority-flex clause. Assume $225K-$245K for a levelled-down offer.
- **Variable / conditional cash:** bonus, structure and target unstated. Treat as $0 for planning.
- **Expected stable cash:** approximately $225K-$260K gross for a realistic downlevelled offer, before tax.
- **Non-cash:** Employee Stock Options at a $1B post-money valuation, 401(k), medical/dental/vision, life, disability, PTO. Equity upside is real but priced at unicorn valuation, so the multiple from here is smaller than at an earlier stage.

**Market context.** Levels.fyi lists Standard Bots Software Engineer total compensation at roughly $200K-$280K with a reported median around $199,750 (last updated 2026-07-12), so this req is posted above the company's own general SWE band, consistent with a scarce-skill AI research role. Against the profile's targets: US robotics startups are benchmarked at $180K-$300K base plus meaningful equity, with a $250K+ preference for strong-equity cases. A $225K-$300K base band sits at the top of that benchmark; the midpoint of $262.5K clears the $250K preference. It does not reach the US frontier-lab band of $300K-$500K+ TC, but Standard Bots is not a frontier lab and the search-breadth rule explicitly says to evaluate on comp plus fit rather than brand.

**Demand trend.** Strong and specific: 37-38 open reqs post-Series-C, a stated goal of delivering 10% of new US industrial robots next year, and a physical-footprint expansion under way. Industrial-manipulation AI hiring is competitive in 2026 and this company has fresh capital. The one caution is that the AI team itself is described as small and this particular req has been open since January.

**Comp score: 4/5** (above market for a robotics startup, transparent, base-separated, but not frontier-lab tier and equity is priced at $1B).

**HR verification questions**

1. Is the $225K-$300K band the base only, and where in it would you place this profile given the seniority flexibility you mention in the posting?
2. What is the bonus target as a percentage of base, and is it discretionary or formulaic?
3. For the equity grant: number of options, strike price, current 409A, vesting schedule, post-termination exercise window, and refresh policy?
4. Is the "US (Remote)" secondary location open to a candidate based in Canada, or is US residency and US payroll required? If US-based is required, is relocation support to NYC available?
5. How does the NYC-primary hybrid expectation work in practice: how many days on site, and at which location (Manhattan office versus Glen Cove facility)?
6. This req has been open since January and there is also a Staff version of it. Are these two distinct headcounts, and is the Senior one still actively being filled?

## E) Personalization Plan

CV and PDF generation is deferred this run (CV sources pending sync), so this is the plan to execute when the sources land. All changes are reordering and emphasis only, starting from the full bullets in `main.tex`; no role gets compressed into a one-liner (Rule 12) and no unbacked competency appears (Rule 11c).

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Professional Summary | Generic dual-track framing across evals and VLA | Two to three sentences leading with camera-to-trajectory policy work and the failure-mode discovery, then the eval-harness thread. No pronouns, past tense for results. | JD leads with "state of the art ML models and training pipelines" and "analyze model behavior and failure modes"; the proprioceptive-collapse finding is the strongest summary-tier item per Rule 5's finding hierarchy |
| 2 | Core Competencies (one line) | General ML/robotics mix | Emphasise: PyTorch, Flow Matching, Diffusion Policies, Imitation Learning, RL, Sim2Real, VLA Models, Model Evaluation. Drop anything not directly backed. | Mirrors the JD's stated techniques and tech stack while every term survives a "tell me about that" follow-up |
| 3 | Merlyn Labs bullets | Five bullets, mixed ordering | Order: RLinf flow-matching VLA integration, LIBERO-PRO recalibration (21% to 42%), VLM judges as dense RL rewards, AlohaMini sim-to-real. Keep to the two most role-relevant in any space-constrained version. | Flow matching and diffusion are named requirements; the recalibration bullet is the transfer-learning and paper-adaptation evidence in one line |
| 4 | BEHAVIOR-1K project | Present | Keep in full and promote above BardSong. Lead the bullet order with proprioceptive collapse, then chunked execution vs temporal ensembling. | Direct evidence for "analyze model behavior and failure modes" and "implement model evaluation frameworks", plus an externally verifiable placement |
| 5 | BMO bullets | Six bullets | Keep the bias-detection and deterministic-eval-pipeline bullets even for this robotics role (delta D007). Keep the RL-environments bullet. Cut the greeter-robot side project entirely. | D007: a strong off-domain bullet beats a weak on-domain one. Rule 3 of the CV rules forbids leading with or leaning on the greeter robot as a robotics credential |
| 6 | Voice-controlled robotic prosthetic (UofT) | Present | Keep. It is the second camera-to-3D-localization-to-grasp-planning artifact on the page. | Reinforces the perception-to-trajectory pipeline claim with a second, independent instance |
| 7 | BardSong | Present | First candidate to cut if the page runs long. | Lowest relevance to an industrial-manipulation modeling role |
| 8 | Header | Standard | Exactly one line; location item exactly "Toronto, Canada". No visa text in the header. | Rules 11b. Visa nuance belongs in the form free-text fields, not the CV header |
| 9 | Paper reference | Sometimes cited | Refer to it as a paper written and an alternative baseline proposed. Never "published", "accepted", "under review", or any venue. No preprint link. | CoRL 2026 rejection reported 2026-09-02; `article-digest.md` §3 |
| 10 | LinkedIn headline | Broad frontier-AI framing | For the duration of this application thread, foreground robot learning and manipulation policy work over the alignment framing. | The AI team here buys manipulation modeling, not alignment |

**Application form answers (from standing policy, do not re-ask):** "Authorized to work?" Yes. "Require sponsorship?" No. Free-text clarifier: "Canadian citizen, TN-eligible (no sponsorship needed; TN is issued at the border, no employer petition)." YoE dropdown: 2-4. Start date free-text: "2-4 weeks from an offer (TN processing at the border is fast; ready to relocate)". Note that the standing start-date text names San Francisco; rewrite the city to New York for this application. "How did you hear about us?" leave blank unless an honest option exists.

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Analyze model behavior and failure modes | Proprioceptive collapse | Training VLA policies for the Stanford BEHAVIOR-1K Challenge on 10,000+ demonstrations, scored across all 50 task types | Success was plateauing and the cause was not obvious from aggregate metrics | Isolated proprioception as a shortcut channel and ablated it by masking | Masking 60% of proprioception improved task success by up to 48%; team placed 8th in the Standard Track | Aggregate metrics hide shortcut learning. The finding came from asking what the policy could be cheating on, not from tuning |
| 2 | Transfer learning and fine-tuning strategies | LIBERO-PRO recalibration | The published π0.5 checkpoint scores 96% on standard LIBERO but 21% on position-swap evaluation | Determine whether that collapse is architectural or recipe-induced | Ran a conservative full-finetuning recipe (batch 64, LR 1e-5) and held it stable from 8k to 27k steps, while matching standard LIBERO | Position-swap success doubled to 42%; the brittleness is recipe-induced trajectory memorization, not a representational limit | The baseline everyone compares against was miscalibrated, so reported gains partially compensate for someone else's recipe |
| 3 | Model debugging and rigor (negative results) | Ruling out rival hypotheses | Same study; two plausible alternative explanations existed | Test them rather than assert the preferred one | Tried LoRA at matched hyperparameters and frozen video-diffusion visual priors | LoRA landed at 15-21%, consistently below FFT; frozen visual priors made it worse, 42% down to 35%; too-conservative recipes (batch 16, LR 1e-6) dropped to 26% | Bounding the effect in both directions is what turned an observation into a claim |
| 4 | Diffusion / flow matching, training infra | RLinf flow-matching VLA integration | RLinf had no flow-matching VLA path, so BEHAVIOR-1K tasks could not be RL-trained in OmniGibson | Make that path exist and get it upstream | Implemented and open-sourced the integration | Merged into RLinf; enables RL training on the BEHAVIOR-1K suite | Working in someone else's training framework in public is the fastest way to learn where an abstraction leaks |
| 5 | Implement model evaluation frameworks and metrics tracking | BMO deterministic eval pipeline | A GenAI tool inside a wealth-management business serving $200B+ AUM | Anecdotal spot-checks were not surfacing systematic behavior | Built a deterministic eval pipeline over hundreds of synthesized inputs to detect misaligned outputs at scale | Uncovered systematic bias toward downplaying investment risk, invisible at anecdote scale | Per delta D011: lead with the harness that was built, and let the finding arrive as its output |
| 6 | Experience with RL | VLM judges as dense reward | Sparse task-success reward is a poor training signal for manipulation rollouts | Produce a dense reward that an agent cannot trivially game | Built VLM judges that score rollouts into dense, context-dependent rewards | Reward signal usable for RL training on rollouts | Most of the design effort is making the judge hard to satisfy without doing the task |
| 7 | Camera input to trajectory output | AlohaMini sim-to-real | Household manipulation tasks trained in simulation, hand-built AlohaMini hardware | Close the sim-to-real gap on real hardware | Ran sim-to-real transfer on the physical embodiment | Ongoing transfer work on a self-built platform | Nothing exposes a policy's false assumptions faster than the hardware it was not trained on |
| 8 | Rapid experimentation at a small company | Merlyn Labs cadence | Three people, self-funded, nights and weekends, alongside a full-time job | Produce externally verifiable research output anyway | Competed in BEHAVIOR-1K, published a technical report and a LessWrong analysis, contributed to RLinf, wrote a paper | 8th place, an upstream merge, and a public report inside roughly a year | This is the closest available proxy for "work across the stack to do what is needed" at a small startup team |
| 9 | Perception to grasp planning | UofT robotic prosthetic control pipeline | Voice-controlled 7-DOF simulated arm | Convert natural language to a manipulation sequence with real perception | Built an LLM control pipeline; integrated YOLO detection with LiDAR depth for 3D localization and grasp planning | Working end-to-end natural-language-to-grasp pipeline | A second, independent instance of the perception-to-trajectory stack, from a different starting point |
| 10 | Hardware realism | Epineuron PeriPulse | Class-defining neurostimulation device, FDA Breakthrough-designated, multi-national clinical trials | Ship hardware that survives regulatory validation | Designed and assembled PCBs, authored IEC 60601-1 and ISO 13485 validation protocols, modelled nerve-field penetration in COMSOL | 900% battery-life improvement; COMSOL data set electrode diameter | Relevant to a company that actually manufactures its robots: validation discipline is not foreign territory |

**Recommended case study.** Ask for one of their real manipulation failure cases (a task the RO1 fails after demonstration training) and walk the debugging loop out loud: what channel could the policy be shortcutting on, what ablation isolates it, what the metric would look like if the hypothesis is right, and what the finetuning recipe change would be. This maps directly onto stories 1 through 3 and demonstrates the exact loop the JD's "Build robust evaluation and debugging systems" bullet describes, using their domain rather than his.

**Likely red-flag questions and how to answer them**

1. *"You haven't worked in self-driving. Why are you in this pipeline?"* Answer flat, no apology: the pipeline shape is identical (camera input, learned policy, trajectory output, sim-to-real gap), the failure modes overlap (shortcut channels, memorized trajectories that break under spatial perturbation), and what is genuinely new to learn is their safety and validation culture, not the modeling. Then hand them story 1 or 2.
2. *"How many years of professional experience do you have?"* 2-4, per the standing decision, backed by BMO plus Merlyn plus the Epineuron co-op. Do not over-explain the arithmetic.
3. *"What is Merlyn Labs, exactly?"* Use the approved one-liner verbatim: self-organized research collective, three people doing robotics research nights and weekends, 8th in Stanford's BEHAVIOR-1K Challenge, published methods, contributions to open-source RL infrastructure. Never imply funding, headcount, or company status beyond that.
4. *"Is the paper published?"* No. Written and submitted to CoRL 2026, rejected. The result stands on its own and the checkpoint comparison is reproducible. Never claim a venue or "under review".
5. *"Your BMO work looks like banking, not robotics."* Correct, and the transferable part is the evaluation discipline: building a harness that turns invisible systematic behavior into a measurable signal. Do not reach for the greeter robot as a robotics credential.
6. *"Can you work from Canada?"* Turn it into their question: is the remote option US-only? Then state it flat: Canadian citizen, TN-eligible, no sponsorship needed, and ready to relocate to New York.
7. *"Are you going to leave for a frontier lab?"* Honest angle: the work described here is closer to his actual research than most lab reqs are, because it involves real hardware, real customers, and a real failure-mode budget.

## G) Posting Legitimacy

**Tier: Proceed with Caution** (driven entirely by posting age, not by company legitimacy).

| Signal | Assessment |
|---|---|
| Company reality | Unambiguously real. $200M Series C at a $1B valuation closed 2026-06-09 (RoboStrategy lead; General Catalyst, Alexa Fund, Samsung Next, BoxGroup, GiantLeap participating), covered by Forbes, SiliconANGLE, PR Newswire and trade press. Manufactures the RO1 cobot in Glen Cove, NY. |
| ATS and posting channel | Ashby job board under the company's own subdomain, returned live by the public posting API with `isListed: true` on evaluation date. Apply URL resolves to the company's own Ashby application form. Not a third-party or aggregator repost. |
| Salary transparency | Full base band published in the JD and in the structured Ashby compensation record, with equity and bonus separated. Strong positive signal. |
| JD specificity | High. Names the tech stack, the team size, the required domain, and the exact model families. Low boilerplate ratio; no generic filler paragraphs beyond the standard "about us". |
| Scam-like language | None. No upfront costs, no unusual contact channels, no urgency pressure, no vague "comprehensive package" phrasing. |
| Hiring / freeze / layoff signals | Positive: 37-38 open reqs across engineering, production and corporate; facility expanding from 16,000 to 70,000 sq ft; no layoff or freeze signals found. |
| Scan history | First seen in `data/scan-history.tsv` on 2026-09-02 via the Ashby API. No repost pattern recorded for this URL. |
| **Freshness** | ⚠️ **Published 2026-01-24, over seven months old.** A near-identical Staff AI Research Engineer req (same description text, 7+ years instead of 5+, $250K-$300K) was published 2026-08-25. Two interpretations: a genuinely hard-to-fill req kept open, or a stale/evergreen listing that the fresher Staff req has effectively superseded. This is the sole reason the tier is not High Confidence. |
| Apply-button state and live freshness | `unverified (batch mode)` — Playwright is unavailable, so the apply flow was not exercised. The public Ashby API does return the posting as listed with a live apply URL. |
| AI claims vs infrastructure | ✅ Consistent. The company ships physical robot arms, manufactures them domestically, and the req's technical asks (PyTorch, diffusion and autoregressive models, camera-to-trajectory pipelines, RL, training infra) are coherent with a real in-house model team rather than an AI-branded wrapper. |

**Practical implication:** before investing in a tailored CV and cover letter, confirm the Senior req is still being actively filled. That question is item 6 in the Block D verification list and is a natural opener for the warm-contact message.

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ⚠️ Proceed with Caution — req published 2026-01-24 and superseded in practice by a fresher Staff sibling posted 2026-08-25; company itself is unambiguously legitimate |
| Employment classification | — not evaluated |
| Culture screen | — not evaluated |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | ✅ consistent |

## Global Score

| Dimension | Score |
|-----------|-------|
| CV match | 3.0/5 |
| North Star alignment | 4.5/5 |
| Compensation | 4.0/5 |
| Culture / working model | 4.0/5 |
| Red flags | -0.3 (stale req superseded by a Staff sibling; AV-industry gate is stated twice) |
| **Global** | **3.6/5** |

**Verdict: Consider, and treat it as a labelled stretch on credentials rather than on capability.**

The work is one of the closest content matches in the pipeline: this team wants someone who trains diffusion and flow-matching policies, builds evaluation and debugging systems, analyzes failure modes, and adapts research papers, which is a line-by-line description of what Shayan already does. Attainability is also better than a frontier lab: a $1B-valuation robotics startup with a small AI team, an explicit seniority-flex clause, and a req that has plainly been hard to fill. Standard Bots is named in the in-scope robotics list (Rule 8), and the comp band clears the target for this company class.

What holds it below 4.0 is a single, specific, twice-stated requirement: AI modeling experience **in the self-driving car industry**, 5+ years or a PhD plus 3. There is no honest way to claim it and no partial credit for it in an ATS keyword filter. A cold application here most likely dies at the screen, which is precisely the failure mode Rule 7 exists to avoid.

So: do not cold-apply. Get a human first.

## Extracted Keywords

PyTorch · Python · diffusion models · autoregressive models · flow matching · large-scale ML models · training pipelines · model evaluation frameworks · metrics tracking · failure-mode analysis · model debugging · performance optimization · transfer learning · fine-tuning · reinforcement learning · imitation learning · camera-to-trajectory · trajectory planning · robotics manipulation · sim-to-real · interpretability tools · visualization frameworks · training infrastructure · deployment · rapid experimentation · model architectures · implementing ML research papers · Docker · NodeJS/TypeScript · industrial robotics · cobot
