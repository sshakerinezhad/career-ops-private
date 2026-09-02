# Evaluation: Thinking Machines Lab — Research, Post-Training Evals

**Date:** 2026-09-02
**Archetype:** Alignment / Evals Research Engineer (primary) × ML / LLM Research Engineer (secondary)
**Score:** 4.5/5
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**URL:** https://jobs.ashbyhq.com/thinkingmachines/602f2a99-34eb-4fde-9eec-b4945ee4aab6
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 055-thinking-machines-pt-evals

---

## Machine Summary

```yaml
company: "Thinking Machines Lab"
role: "Research, Post-Training Evals"
score: 4.5
legitimacy_tier: "High Confidence"
archetype: "Alignment / Evals Research Engineer"
final_decision: "Apply"
hard_stops: []
soft_gaps:
  - "No frontier-scale LLM post-training experience; the eval work is on enterprise LLM agents and VLA policies, not on models the size TML trains"
  - "No peer-reviewed first-author publication (the CoRL 2026 submission was rejected); PhD is preferred-only here, so this is a screen-strength gap rather than a gate"
  - "No evidence of debugging distributed training at scale; the preferred list names it explicitly"
  - "No human-evaluation or annotation-operations experience; user simulators and cross-harness generalization are unevidenced"
  - "Ultra-selective résumé screen at a lab that raised $5B at a ~$50B valuation and hires roughly 200 people total"
top_strengths:
  - "The minimum qualification is literally eval, benchmark, dataset and grader design; the BMO deterministic eval pipeline over hundreds of synthesized inputs, which surfaced systematic risk-downplaying in a tool serving $200B+ AUM, satisfies it directly"
  - "Benchmark auditing is a named responsibility and the LIBERO-PRO recalibration work is exactly that: showing a published baseline's collapse (96% to 21%) was recipe-induced, then doubling position-swap success to 42% and rejecting two rival hypotheses"
  - "VLM judges that score rollouts into dense, hard-to-game RL rewards map onto grader reliability, evaluator disagreement and gaming resistance, which is the robustness bullet"
  - "Evaluating bias and nuanced behaviours is a named bullet and the $200B+ AUM risk-bias discovery is a direct, production-scale instance of it"
  - "Building RL environments for specialized agents at BMO maps onto agentic evaluation environments and harness development"
risk_level: "Medium"
confidence: "Medium"
next_action: "Warm-path first: email or DM Alex Robey (Thinking Machines, posted on X 2026-08-31 that they are hiring for harmful-capability evals, safety post-training, red-teaming, and evals plus tooling for open-weights safety cases, linking this board) with three links: the BMO eval-harness story, the LIBERO-PRO benchmark-recalibration result, and the RLinf merge. Then submit to Research, Post-Training Evals within the same week regardless of reply. Do not lead with the Research, Safety req."
work_auth: "not_needed"
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

---

## A) Role Summary

| Field | Detail |
|-------|--------|
| Detected archetype | Alignment / Evals Research Engineer (primary) × ML / LLM Research Engineer (secondary) |
| Domain | Frontier LLM post-training evaluation: eval creation, usability, auditing, robustness, agentic environments |
| Function | Research with hands-on engineering; builds internal evals and research signals, partners with the data flywheel |
| Seniority | IC research, no level stated. Minimum is a Bachelor's or equivalent experience with no YoE floor |
| Remote / work mode | Listed San Francisco. The Ashby feed carries `isRemote: true` on this record, but the sibling Software Engineer, Evaluation Platform req on the same board carries `isRemote: false`, so treat the flag as unreliable and assume on-site SF |
| Team size | Research org inside a roughly 200-person lab; the role explicitly spans post-training and the broader research organization |
| Posted | 2026-08-27 (Ashby `publishedAt`); first seen in `data/scan-history.tsv` on 2026-09-02 via the X scan |
| TL;DR | Build the evals that tell TML's researchers whether post-training is working: create internal research signals, make graders reliable under ambiguous ground truth, audit benchmarks so researchers can trust them, build agentic eval environments and user simulators, and evaluate preferences, biases and values |
| Profile caps / overrides applied | Rule 2 (ultra-selective tier): applied, but softened by a named public solicitation, see Block C. Rule 3 (hard YoE): not triggered on this req, triggered on the SWE sibling. Rule 5: decision labelled a stretch. Rule 7 (attainability first): drives the warm-path-first plan and the door ranking. Rule 1 (PhD hard stop): not triggered, PhD is preferred only |
| Culture screen | Not produced in batch mode |

### Relationship to report 016

Report [016](016-tml-post-training-2026-07-05.md) (2026-07-05) evaluated the sibling req **Research, Post-Training** at **4.2/5**, decision *"Research first (do NOT cold-apply)"*. That call rested on two findings: the content fit was real but the substrate was LLM post-training rather than embodied RL, and TML's résumé screen was judged likely to end a cold application regardless of fit.

Three things have changed since:

1. **The req is narrower and closer.** 016 was the general post-training role, where eval design was one bullet among recipes, hyperparameters and training debugging. This req is *only* evals. Every minimum qualification is something Shayan has shipped, and four of the eight preferred qualifications are direct hits.
2. **A named person is publicly soliciting.** Alex Robey, who works on safety at Thinking Machines and is known for SmoothLLM and the ICML 2024 safe-harbour work on evaluation and red-teaming, posted on X on 2026-08-31 that they are hiring for harmful-capability evals, safety post-training, red-teaming, and evals plus tooling for open-weights safety cases, linking this board. 016's blocking condition was the absence of any warm path. There is now a plausible one.
3. **The requirement list no longer asks for what he lacks.** 016 flagged the PhD-preferred line and the frontier-scale gap. Both persist, but this req's minimums are eval-design experience and communication, not scale.

The 016 verdict is therefore updated rather than repeated: the fit is tighter, the door is lower, and the plan is warm contact first, application second. What has *not* changed is the honest bar. This remains an ultra-selective lab and the application is a stretch.

## B) CV Match

| JD requirement | Type | CV / digest evidence | Verdict |
|----------------|------|----------------------|---------|
| Bachelor's or equivalent in CS/ML/Physics/Math with strong theoretical and empirical grounding | Minimum | B.Eng Engineering Physics, McMaster, Dean's Honour List (`cv.md`); M.Eng AI & Robotics, University of Toronto, expected April 2027 | ✅ Direct, exceeds |
| Experience designing, building or analyzing evaluations, benchmarks, datasets, graders or other measurement systems | Minimum | "Built a deterministic agent eval pipeline using hundreds of synthesized inputs to detect misaligned outputs at scale"; "Designing evals for LLM agents that retrieve and reason over commercial banking and insurance policy" (`cv.md`, BMO). Plus benchmark analysis on LIBERO-PRO (`article-digest.md` §3) | ✅ Direct, this is the centre of his work |
| Strong written and verbal communication, cross-team collaboration | Minimum | BEHAVIOR-1K technical report, LessWrong analysis, a written paper; three-person collective run alongside a full-time role (`cv.md`, `article-digest.md` §1-3) | ✅ Direct |
| Create internal evaluations and research signals for capabilities and behaviors | Responsibility | BMO eval pipeline built to detect misaligned outputs at scale, not to score a public benchmark. That is an internal research signal | ✅ Direct |
| Improve evaluation robustness: grader reliability, ambiguous ground truth, evaluator disagreement, false positives/negatives, measured-versus-intended gaps | Responsibility | "Developing VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game" (`cv.md`, Merlyn). Grader reliability under gaming pressure is the same problem | ✅ Strong |
| Build benchmark auditing methodologies so researchers can trust eval signals | Responsibility | The LIBERO-PRO work is a benchmark audit: the published π0.5 checkpoint drops 96% to 21% on position-swap, the cause is recipe-induced trajectory memorization rather than a representational limit, a conservative recipe doubles it to 42%, and LoRA plus frozen video-diffusion priors were tested and rejected as rival explanations (`article-digest.md` §3). The stated implication is that methods reporting LIBERO-PRO gains are measuring against a miscalibrated baseline | ✅ Direct, and unusually on-nose |
| Develop specialized agentic evaluation environments and user simulators; harness development; cross-harness generalization | Responsibility | "Developing RL environments to train specialized agents for BMO's wealth management division"; "Building a graph-based agentic system answering complex multi-hop relational queries" (`cv.md`). Environments and agentic evals: yes. User simulators and cross-harness generalization: no evidence | ⚠️ Partial, environments yes, simulators no |
| Develop evaluations for preferences, biases, values and nuanced behaviors | Responsibility | "Uncovered systematic bias to downplay investment risk in a GenAI tool serving $200B+ AUM wealth management" (`cv.md`). A nuanced, subtle behavioural failure found at production scale | ✅ Direct |
| Usability evaluations measuring whether models are genuinely useful in real workflows; partner with the data flywheel | Responsibility | Adjacent only. The BMO evals measure correctness and misalignment in a deployed workflow, which is closer to usability than to benchmark scoring, but there is no data-flywheel or training-data-feedback loop on the CV | ⚠️ Adjacent |
| Experience with LLMs, post-training, RL or agentic systems | Preferred | LLM fine-tuning, RL, imitation learning, agents (`cv.md` skills); BardSong fine-tune; agent evals and RL environments at BMO; VLA post-training at Merlyn | ✅ Direct |
| Evaluation auditing, human evaluations, LLM-judges, open-ended task evaluation | Preferred | LLM/VLM judges ✅, evaluation auditing ✅ (LIBERO-PRO). Human evaluations ❌ | ✅ Mostly |
| Agentic evaluation, harnesses, long-horizon tasks, RL environments | Preferred | RL environments at BMO ✅; BEHAVIOR-1K long-horizon household tasks, 10,000+ demonstrations across 22 of 50 scored task types ✅ | ✅ Direct |
| Evaluating preferences, personalization, biases, values | Preferred | The $200B+ AUM risk-bias finding | ✅ Direct |
| Track record of new eval methodologies or research signals that meaningfully influenced model development | Preferred | Proprioceptive collapse, where masking 60% of proprioception improved task success by up to 48%, changed his team's own training. The LIBERO-PRO recalibration argues the field is mismeasuring. Influence on *others'* model development is asserted, not demonstrated | ⚠️ Partial, honest framing needed |
| Python plus a DL framework; comfortable debugging distributed training and writing code that scales | Preferred | Python, C/C++, PyTorch, JAX (`cv.md`). Distributed training debugging: no CV evidence | ⚠️ Half |
| Strong research judgment: clean ablations, honest baselines, clear technical writing | Preferred | This is arguably his single strongest signal: rejecting two rival hypotheses, reporting the bounded case where too-conservative recipes drop to 26%, and correcting a published baseline rather than claiming a new method | ✅ Direct |
| PhD, or equivalent industry research experience | Preferred | No PhD. M.Eng in progress, course-based. Equivalent industry research is arguable via BMO CoE plus Merlyn output | ⚠️ Preferred-only gap |

### Gaps and mitigation

1. **Frontier-scale LLM post-training (soft, adjacent).** He has post-training experience on VLA policies and eval experience on LLM agents, but not both at once at frontier scale. *Blocker?* No. The req asks for eval-design experience, not for having trained a frontier model. *Adjacent?* Yes, directly: the BMO half is LLM-side, the Merlyn half is post-training-side. *Proof point?* The BMO eval pipeline plus the LIBERO-PRO recipe study. *Mitigation:* state the split plainly. The methodology transfers, the substrate differs, and pretending otherwise is the fastest way to lose a research interview.

2. **No peer-reviewed first-author publication (soft, screen-strength).** The CoRL 2026 submission was rejected and is not on arXiv, so never claim a venue, acceptance, or "under review". *Blocker?* No, because PhD and publication are preferred here, not required, so Calibration Rule 1 does not fire. *Mitigation:* the technical report, the LessWrong post and the merged RLinf contribution are externally verifiable and were produced alongside full-time work. Lead with verifiability, not with venue.

3. **Distributed-training debugging at scale (soft).** Named in the preferred list, absent from the CV. *Mitigation:* do not claim it. The nearest honest adjacency is training-run diagnosis on BEHAVIOR-1K, 10,000+ demonstrations, ablation discipline, and the RLinf integration that made RL training on that suite possible in OmniGibson.

4. **Human evaluations, annotation operations, user simulators (soft, narrow).** Three of the role's surfaces have no CV backing. *Mitigation:* frame the synthesized-input pipeline as the closest analogue, which it is, and be explicit that the human-in-the-loop side is new territory.

5. **Résumé-stage selectivity (the real constraint).** See Block C.

## C) Level and Strategy

**Level.** IC research, no level named, no YoE floor. That matches his natural level. Nothing here suggests he would be evaluated as a manager or a staff-level lead, so the usual downlevel conversation is not the live risk.

**Screen risk, stated plainly (Calibration Rules 2, 3 and 7).**

The bar is the constraint, not the fit. Thinking Machines raised a $2B seed and a $5B Series B at roughly a $50B valuation, employs on the order of 200 people, and hires senior researchers away from OpenAI, DeepMind and Meta. Public accounts of its process describe screening for people who are unusually strong at one hard problem rather than broadly competent. A cold application from a candidate with an in-progress course-based M.Eng, roughly one year of full-time industry work, a self-organized research collective, and no peer-reviewed first-author paper has poor odds of clearing a résumé screen there on volume alone. Calibration Rule 2 says park rather than push for this tier, and that judgement stands as far as *cold* applications go.

What changes the calculus is not the fit score. It is that a named person at the lab publicly asked for exactly this profile of work on 2026-08-31 and linked the board. That converts an anonymous screen into a message to a specific human with a specific ask, which is precisely the access mechanism Rule 7 prioritizes. The application is still a stretch and should be labelled as such (Rule 5). It should not crowd out the more attainable roles in this batch.

**Which door is most attainable.**

| Req | Screen mechanics | Content fit | Verdict |
|-----|------------------|-------------|---------|
| **Research, Post-Training Evals** (this one, `602f2a99`) | Minimums are a Bachelor's plus eval/benchmark/grader design experience plus communication. **No YoE floor.** Every minimum is satisfiable from `cv.md` without stretching | Highest of the three. Four preferred bullets are direct hits | **Most attainable. Apply here.** |
| **Research, Safety** (`01aba71c`) | "Background in AI safety research, with hands-on experience in at least one area" is listed under **Required**, not preferred, and names RLHF/RLAIF, alignment and preference modeling, deliberative alignment, safety evaluations, or red-teaming. Safety evaluations is the only one he can honestly claim, and the BMO bias work is a behavioural-risk eval rather than a safety eval in the harmful-capability sense | Real but thinner. No red-teaming, no jailbreak, no RLHF/RLAIF line anywhere in `cv.md` (note: RLHF/RLAIF is a known unbacked-claim trap in this profile, see `_profile.md` rule 11c) | Second. Mention interest, do not lead with it |
| **Software Engineer, Evaluation Platform / Infra** (`9d863c78`) | Hard minimum: "Two years of post-grad work experience as a software engineer or ML engineer, exclusive of internships." BMO from Sep 2025 plus Merlyn from Aug 2025 run concurrently and total under one year post-grad. Per Calibration Rule 3 this is a semi-hard mechanical filter and must not be hand-waved. Stack also asks for Rust, React/TypeScript, databases and distributed systems, which are unevidenced | Moderate. The eval-platform subject matter fits, the engineering profile does not | Least attainable despite being an engineering door |

**Selling seniority without lying.** Three genuine senior-grade signals, all backed: (a) finding a subtle behavioural failure in a production system serving $200B+ AUM, which nobody asked him to look for; (b) auditing a published baseline and showing the field is measuring against a miscalibrated one, which is a research-judgment signal rather than a seniority claim; (c) designing graders under explicit gaming pressure. Do not inflate Merlyn Labs beyond the approved one-liner, do not imply funding or headcount, and do not claim frontier-scale post-training.

**If downlevelled or redirected.** The likely redirect is toward a more engineering-shaped eval role. Accept a conversation about the Evaluation Platform req only if they raise it, since the two-year minimum is theirs to waive, not his to argue past.

## D) Compensation and Demand

**Company type: Growth-stage startup, VC-backed, frontier lab.** High confidence. $2B seed at a $10-12B valuation, $5B Series B at roughly a $50B valuation in March 2026, roughly 200 employees, structured public job board with 38 open reqs.

**This posting states no salary figure.** That is notable because it is the exception on its own board, not the rule. A scan of all 38 TML reqs shows every other `Research, X` posting carrying an explicit band:

| Req on the same board | Stated band |
|-----------------------|-------------|
| Research, Post-Training | $350,000 - $475,000 USD |
| Research, Safety | $350,000 - $475,000 USD |
| Research, RL Scaling | $350,000 - $475,000 USD |
| Research, Pre-Training Science | $350,000 - $475,000 USD |
| Research, Coding Agents | $350,000 - $475,000 USD |
| Software Engineer, Evaluation Platform / Infra | $300,000 - $475,000 USD |
| **Research, Post-Training Evals (this req)** | **none stated** |

Report 016 independently recorded $350,000 - $475,000 base for Research, Post-Training in July on the previous Greenhouse board, so the band is stable across two ATS migrations and two months. The most likely reading of the omission is a posting oversight on a req published 2026-08-27, not a different band. It is still an inference, so `advertised_comp` is `null` and the number below is treated as researched market data rather than an advertised figure.

- **Advertised range:** none in this JD
- **Peer-req band on the same board:** $350,000 - $475,000 USD, base, for every sibling Research req
- **Likely guaranteed base:** $350,000 - $475,000 USD if the sibling band applies
- **Variable / conditional cash:** none disclosed
- **Non-cash:** report 016 recorded health/dental/vision, unlimited PTO, paid parental leave, visa sponsorship and relocation support on the July posting. This Ashby record carries no benefits section, so treat as unconfirmed for this req
- **Compensation reliability:** **Medium-High.** The band is not stated on this req, but it is stated identically on six sibling research reqs and was independently confirmed in July

**Demand trend.** Eval and measurement talent is one of the tightest segments in the 2026 frontier-lab market. Every major lab is hiring evals-specific researchers, and TML has posted at least three eval-adjacent reqs in the last week of August (this one, Research Safety, and the Evaluation Platform engineering role published 2026-08-31). That is a team being stood up, not backfilled.

**Comp score: 5/5.** If the sibling band holds, base alone clears the top of the profile target of $300K-500K+ TC for frontier labs before equity. Relocation to San Francisco is a stated preference in the location policy, so no geographic penalty applies.

**HR verification questions (deferred).** Since this req advertises nothing, the questions collapse to one for a recruiter screen: confirm whether the $350,000 - $475,000 band that appears on the sibling Research reqs applies to Post-Training Evals, and ask for the equity component and refresh policy separately, since TML's public bands are base-only.

Sources: [Thinking Machines Lab public Ashby board](https://api.ashbyhq.com/posting-api/job-board/thinkingmachines) (38 reqs read 2026-09-02), [PitchBook company profile](https://pitchbook.com/profiles/company/752821-12), [Thinking Machines Raises $2B at $12B Valuation](https://weishauptai.substack.com/p/thinking-machines-raises-2b-at-12b), [Thinking Machines Lab hires for spikes, not checklists](https://www.techinterview.org/post/3233476796/thinking-machines-lab-interview/), report [016](016-tml-post-training-2026-07-05.md).

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|------------------|-----|
| 1 | Professional Summary | Opens with BMO plus Merlyn and spans LLM/agent evaluation, VLA, RL and robotics | Lead with evaluation and measurement: eval and grader design, benchmark auditing, judges built to resist gaming. Keep VLA as the second clause, not the first | The req is 100% evals. The robotics half is credibility, not the pitch |
| 2 | BMO bullets | Bias finding first, eval pipeline second | Keep that order but reframe the pipeline bullet as the *mechanism* that produced the finding, per the approved delta framing: harnesses and test setups that caught behaviour invisible until scaled to hundreds of test cases | Matches D011 in `data/deltas.md` and matches the JD's "measured versus intended behavior" language |
| 3 | BMO bullets | RL-environments bullet sits low | Promote "Developing RL environments to train specialized agents" | Directly answers "specialized agentic evaluation environments" |
| 4 | Merlyn bullets | VLM-judges bullet is third | Promote to first Merlyn bullet | Grader reliability and gaming resistance is the robustness bullet in the JD |
| 5 | Merlyn bullets | LIBERO-PRO bullet reads as a robotics result | Keep the wording but let the *auditing* framing carry it in the summary and cover letter: a published baseline was miscalibrated and the field measures against it | "Benchmark auditing methodologies" is a named responsibility and almost nobody applying will have done one |
| 6 | BEHAVIOR-1K project | Framed as a challenge placement | Foreground the measurement findings, proprioceptive collapse and chunking versus ensembling, over the placement | Research signals that changed training decisions, which is what the last preferred bullet asks for |
| 7 | Skills line | VLA and robotics forward | One line, high-signal, CV-backed only: eval design, LLM judges, RL environments, benchmark auditing, PyTorch, JAX. **Do not add RLHF or RLAIF**, which appear nowhere in the sources | `_profile.md` rules 11c and 6; RLHF chips are the documented violation |
| 8 | LinkedIn | General AI research engineer framing | Headline to evaluation and measurement for LLM agents; feature the LessWrong post and the BEHAVIOR report; pin the RLinf contribution | The outreach in `next_action` will get a profile click |

**One-page fit note:** when the CV is regenerated, the cut order is the prosthetic project first, then McMaster MDT, then BardSong. Epineuron keeps its two strongest bullets per `_profile.md` rule 12.

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Design and analyze evaluations and measurement systems | BMO eval harness | Agentic tool deployed against $200B+ AUM wealth management | Detect misalignment that anecdotal testing misses | Built a deterministic pipeline over hundreds of synthesized inputs | Surfaced systematic risk-downplaying that was invisible case by case | The failure was only visible at volume. Single-case review would never have found it, which is the argument for building the harness before you know what you are looking for |
| 2 | Benchmark auditing methodologies | LIBERO-PRO recalibration | Published π0.5 checkpoint scores 96% on standard LIBERO, 21% on position-swap | Determine whether that gap is architectural | Conservative full finetune, batch 64, LR 1e-5, stable 8k-27k steps; tested and rejected LoRA at 15-21% and frozen video-diffusion priors which dropped 42% to 35% | Position-swap success doubled to 42% with no architectural change; the brittleness was recipe-induced | The uncomfortable implication is that methods reporting gains on this benchmark partly compensate for a miscalibrated baseline. Auditing the baseline was worth more than proposing a method |
| 3 | Grader reliability and resistance to gaming | VLM judges at Merlyn | Rollouts need a dense reward signal, sparse success is uninformative | Build judges that cannot be satisfied without doing the task | Context-dependent VLM judges scoring rollouts into dense rewards | Reward signals that are difficult to game | Most of the design effort goes into what the judge refuses to reward, not into what it rewards |
| 4 | Evaluating biases, values and nuanced behaviors | The risk-downplaying discovery | Regulated wealth-management context where downplaying risk is a real harm | Characterize the behaviour, not just observe it | Synthesized input families varying risk framing | Systematic, reproducible bias rather than sampling noise | Nuanced behavioural evals need a controlled input distribution. Ad-hoc prompting produces anecdotes, not signals |
| 5 | Research signals that changed model development | Proprioceptive collapse | VLA underperforming on manipulation in BEHAVIOR-1K | Diagnose the failure mode | Masked 60% of proprioception as a controlled intervention | Task success improved by up to 48% | The model was leaning on proprioception as a shortcut. Removing information made it better, which is the kind of result that only shows up if you are willing to test the counterintuitive ablation |
| 6 | Measured versus intended behavior gaps | Chunked execution versus temporal ensembling | Unclear how the architecture handled time | Compare the two execution strategies cleanly | Controlled comparison on the same policy | Chunked execution beat temporal ensembling roughly 3x | The gap was not in the metric, it was in what the architecture could represent. Temporal awareness was missing and the aggregate score hid it |
| 7 | Agentic evaluation environments | RL environments at BMO | Specialized agents needed for wealth management workflows | Provide trainable, measurable environments | Built RL environments for specific agent tasks | Environments in use internally | Environment design and eval design are the same discipline pointed in opposite directions |
| 8 | Code that scales; open-source contribution | RLinf flow-matching integration | RL infrastructure could not train flow-matching VLAs on BEHAVIOR-1K | Make RL training possible on that suite | Open-sourced a flow-matching VLA integration | RL training on BEHAVIOR-1K in OmniGibson, merged upstream | Shipping into someone else's codebase is the cheapest verifiable proof of engineering judgment available to an outsider |
| 9 | Communication and honest baselines | The paper that was rejected | CoRL 2026 submission on recalibrating VLA baselines | Publish the recalibration argument | Wrote and submitted the paper; it was rejected | Not published; the result stands and is reproducible | Worth telling honestly if asked. The finding did not become false when the reviewers said no, and saying so is a better signal than avoiding the topic |
| 10 | Cross-team collaboration under constraint | Running Merlyn alongside full-time work | Three people, no funding, nights and weekends | Produce real research output anyway | Self-organized collective, divided scope, published methods | 8th place in Stanford's BEHAVIOR-1K Challenge, trained on 22 of 50 scored task types with 10,000+ demonstrations | Constraint forced ruthless prioritization of which experiments were worth compute. That habit is directly useful when eval compute is the scarce resource |

**Recommended case study.** The LIBERO-PRO benchmark audit, presented as an evaluation-integrity story rather than a robotics story. It is the single closest match to "build benchmark auditing methodologies that help researchers understand, trust, and appropriately use evaluation signals", and it demonstrates the exact posture the role wants: distrust the measurement first. Pair it with the BMO harness as the LLM-side companion.

**Likely red-flag questions.**

- *"You have not done LLM post-training at frontier scale."* Own it flatly. The eval and measurement methodology is the transferable part, the BMO work is LLM-side, and the scale is new. Do not claim otherwise.
- *"Do you have publications?"* A technical report, a LessWrong analysis, a merged open-source contribution, and one paper submitted to CoRL 2026 that was rejected. Never say published, accepted, under review, or name a venue as an achievement.
- *"What is Merlyn Labs?"* Use the approved one-liner verbatim: "Self-organized research collective, three of us doing robotics research nights and weekends. We placed 8th in Stanford's BEHAVIOR-1K Challenge, published our methods, and contribute to open-source RL infra." Never imply funding, headcount, or company status.
- *"Why evals and not the safety req?"* Honest answer: the eval-design and grader-robustness work is what he has actually built, and the safety req asks for red-teaming and RLHF background he does not have. Interest in the safety surface is real; the claim of a safety-research background would not be.
- *"How much of the BEHAVIOR result is yours versus the team's?"* Say "we placed 8th" per the digest voice note, then be specific about which analyses he ran.
- *"YoE?"* Standing decision: 2-4 on dropdowns, without re-litigating.

## G) Posting Legitimacy

**Assessment: High Confidence.** Apply-button state and freshness are `unverified (batch mode)`; Playwright is unavailable, so the posting was read through the official Ashby posting API.

| Signal | Reading |
|--------|---------|
| ATS host | Official Ashby job board for `thinkingmachines`, read directly from `api.ashbyhq.com/posting-api/job-board/thinkingmachines`. The req is `isListed: true` |
| Description specificity | High. Six concrete responsibilities naming grader reliability, ambiguous ground truth, evaluator disagreement, user simulators and cross-harness generalization. Not writable from a template |
| Boilerplate ratio | Low. Only the shared "About Thinking Machines" paragraph is common to the board |
| Requirements realism | Realistic and unusually honest: three minimums, an explicit "apply if you meet some but not all", and PhD listed last among preferred |
| Salary transparency | **Weak spot.** No band on this req while six sibling Research reqs on the same board all state $350,000 - $475,000 USD. Read as a posting oversight rather than a legitimacy signal, but it is the one thing that differs from its siblings |
| Company hiring signals | $5B Series B at roughly a $50B valuation (March 2026), roughly 200 employees, 38 live reqs. Some senior churn reported (Meta hired five people connected to the founding group, Zoph and Metz returned to OpenAI in January 2026), which is normal turbulence at this tier, not distress |
| Independent corroboration | A named employee, Alex Robey, publicly posted on 2026-08-31 that the team is hiring for exactly this surface and linked this board. Independent confirmation that the reqs are real and actively worked |
| Reposting | First appearance for this req ID in `data/scan-history.tsv` (2026-09-02, `x-websearch`). Published 2026-08-27, so roughly six days old at evaluation time. Not a stale repost |
| Freshness / apply-button state | `unverified (batch mode)`. Verify with `node check-liveness.mjs https://jobs.ashbyhq.com/thinkingmachines/602f2a99-34eb-4fde-9eec-b4945ee4aab6` before applying |
| Suspicious language | None |

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
| CV match | 4.5/5 |
| North Star alignment | 5/5 |
| Compensation | 5/5 |
| Culture / working model | 4/5 |
| Red flags | 0 |
| **Global** | **4.5/5** |

Higher than report 016's 4.2 for three specific reasons: the requirement list is a tighter match to what is actually in `cv.md`, this req carries no YoE floor while its engineering sibling does, and a named person at the lab is publicly soliciting for this exact surface. Not higher than 4.5, because the résumé-stage bar at a lab of this tier is the binding constraint and no amount of content fit removes it. This is a stretch application with a warm path, ranked below the assessment-first and mid-size-lab roles in this batch per Calibration Rule 7, and it should not displace them.

## Extracted Keywords

evaluation design, benchmark auditing, grader reliability, LLM judges, evaluator disagreement, ambiguous ground truth, false positives and negatives, agentic evaluation environments, user simulators, harness development, cross-harness generalization, RL environments, long-horizon tasks, post-training, research signals, usability evaluation, data flywheel, preference evaluation, bias evaluation, model behavior, clean ablations, honest baselines, PyTorch, JAX, Python, distributed training, open-ended task evaluation, measurement systems
