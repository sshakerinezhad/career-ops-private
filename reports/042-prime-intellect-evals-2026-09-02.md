# Evaluation: Prime Intellect — Applied Research: Evals & Data

**Date:** 2026-09-02
**Archetype:** Alignment / Evals Research Engineer (secondary: AI Engineer, Agents / LLM Systems, with a forward-deployed overlay)
**Score:** 3.7/5
**Legitimacy:** High Confidence
**Work Auth:** ✅ Sponsors
**URL:** https://jobs.ashbyhq.com/PrimeIntellect/bbfe94a6-d1a8-47e9-86af-f117277cdacb
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 042-prime-intellect-evals

---

## Machine Summary

```yaml
company: "Prime Intellect"
role: "Applied Research - Evals & Data"
score: 3.7
legitimacy_tier: "High Confidence"
archetype: "Alignment / Evals Research Engineer"
final_decision: "Consider"
hard_stops: []
soft_gaps:
  - "No documented distributed training/inference stack (vLLM, sglang, Ray, Accelerate) — same gap flagged in report 020, and stated harder here as 'deep expertise'"
  - "No containerization or IaC evidence (Docker, Kubernetes, Terraform) anywhere in cv.md"
  - "No observability tooling (Prometheus, Grafana, tracing) on the CV"
  - "Customer-facing delivery is unevidenced: BMO work is internal-stakeholder-facing, not external-customer-facing"
  - "No first-author peer-reviewed publication (the CoRL 2026 submission was rejected); JD asks for a research track record, which OSS and benchmark results do satisfy"
top_strengths:
  - "Built a deterministic agent eval pipeline over hundreds of synthesized inputs at BMO and used it to surface systematic risk-downplaying in a tool serving $200B+ AUM — this is exactly the 'evaluation harnesses and verifiers' bullet"
  - "VLM judges that turn rollouts into dense, hard-to-game RL rewards (Merlyn Labs) map directly to the reward-shaping half of the post-training bullet"
  - "Merged open-source contribution to RLinf (flow-matching VLA integration for RL on BEHAVIOR-1K in OmniGibson) is the exact currency Prime Intellect trades in"
  - "Benchmark-recalibration work on LIBERO-PRO is applied eval-integrity research: showing a published baseline's collapse was recipe-induced, not architectural"
risk_level: "Medium"
confidence: "Medium"
next_action: "Warm contact, artifact-first: ship one eval environment to prime-environments / the Environments Hub using the verifiers spec, then email the Applied Research team linking it plus the merged RLinf PR. Cold apply into a post-$130M Series A funnel is the lowest-yield route here and should be the fallback, not the plan."
work_auth: "sponsors"
discard_reasons:
  - "tech_stack_mismatch"
  - "role_shape_mismatch"
  - "salary_floor_risk"
via: null
company_confidential: false
advertised_comp: "Cash Compensation Range of $150-300k + equity incentives"
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
| **Archetype** | Alignment / Evals Research Engineer (primary). Secondary: AI Engineer (Agents / LLM Systems). Both sit under a forward-deployed, customer-facing overlay that neither archetype fully covers. |
| **Domain** | Open post-training stack: compute, RL environments, evals, sandboxes, training and deployment, sold as one platform ("Lab") to enterprises building their own agents. |
| **Function** | Customer-facing applied research. Prototype agents, eval harnesses and data pipelines with customers, feed the signal back into RL/post-training, hand hardened systems to core teams. |
| **Seniority** | IC applied researcher / research engineer. No YoE number, no degree gate, no publication gate stated. |
| **Work mode** | Contradictory in the source. The Ashby API record says `location: New York City, USA`, `workplaceType: Hybrid`, `isRemote: true`. The JD body says "Flexible Work (remote or San Francisco)". NYC never appears in the body text. Treat this as unresolved and ask before assuming remote. |
| **Team size** | Not stated. Company-level: Series A closed 2026-07-08, $130M led by Radical Ventures with NVIDIA Ventures, Intel Capital and Dell Technologies Capital, ~$150M total, ~$1B valuation, ~$100M annualized run rate. 25 open reqs on the board today. |
| **Sibling req** | Report 020 covers a different Prime Intellect posting: Research Engineer, Reinforcement Learning (`ee13090e-...`, SF/Remote), scored 4.1/5, decision Apply, still `Evaluated` in the tracker and never sent. Two more siblings are live and unevaluated: Applied Research: RL & Agents (SF) and Research Engineer: Distributed Training. This report is about req #4 in the same family. |
| **TL;DR** | The eval-and-data content is the closest thing on the board to what Shayan actually loves doing, and the research-track-record bullet is a clean pass. But this specific req bolts three unevidenced infra requirements (distributed serving, K8s/Terraform, Prometheus/Grafana) plus a customer-facing delivery bar onto that eval core. Of the four live Prime Intellect reqs, this is not the one with the best screen odds. |
| **Caps / overrides applied** | Rule 1 (PhD + first-author gate) does **not** fire: no such gate in the JD. Rule 3 (hard YoE minimums) does **not** fire: no YoE numbers. Rule 6 (no Anthropic) not applicable. Rule 7 (attainability first) applied in Block C and in the decision. Rule 8 (robotics co-primary) not applicable: this is an LLM-agent req, and it is being scored on the alignment/evals axis rather than the robotics one. |

**Culture screen:** not produced by batch Block A. See Risk Summary.

---

## B) CV Match

| JD requirement | Evidence in cv.md / article-digest.md | Strength |
|----------------|----------------------------------------|----------|
| Build evaluation harnesses and verifiers measuring reasoning, robustness and agentic behavior | "Built a deterministic agent eval pipeline using hundreds of synthesized inputs to detect misaligned outputs at scale" and "Designing evals for LLM agents that retrieve and reason over commercial banking and insurance policy" (BMO) | **Strong, 1:1** |
| Integrate applied data collection and analytics into post-training to surface regressions and alignment opportunities | Same BMO pipeline, used to surface systematic risk-downplaying in a GenAI tool serving $200B+ AUM. Finding was invisible until scaled across hundreds of test cases. | **Strong** |
| Reward shaping so real-world signals inform model alignment | "Developing VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game" (Merlyn Labs) | **Strong** |
| Track record of research contributions (publications, open-source, benchmarks) | Merged flow-matching VLA integration into RLinf; BEHAVIOR-1K Challenge 8th place, Standard Track (team result, trained on 22 of 50 task types, scored across all 50); technical report at merlyn-labs.com/behavior-report; LessWrong model-organism writeup of those failure modes | **Strong.** The JD's phrasing is "publications, open-source contributions, benchmarks", so OSS and benchmark placement clear this on their own terms. |
| Applied data workflows and eval frameworks for large models or agents (SWE-Bench, HELM, internal eval pipelines) | BMO internal eval pipeline is a direct hit on "internal eval pipelines". The LIBERO-PRO recalibration work is benchmark-integrity research: showed the published π0.5 checkpoint's position-swap collapse (96% standard → 21% swap) is recipe-induced, and a conservative full-finetune recipe doubles it to 42%. | **Strong.** Note: that paper is **unpublished**. Submitted to CoRL 2026 and rejected. Frame as "we wrote a paper / proposed an alternative baseline", never as published or under review. |
| Design and implement novel RL and post-training methods (RLHF, RLVR, GRPO, etc.) | "Developing RL environments to train specialized agents for BMO's wealth management division"; RL training on BEHAVIOR-1K via RLinf; conservative-finetuning study. **RLHF/RLAIF and GRPO appear nowhere in cv.md or main.tex.** Do not claim either. | Medium. Real RL and post-training work, but the named-method vocabulary in the JD is not on the CV. |
| Rapidly prototype agents, multi-agent and memory-augmented systems | "Building a graph-based agentic system answering complex multi-hop relational queries across bank client data"; "Building internal infrastructure that provisions LLM agents from a written role and scope definition"; BardSong end-to-end pipeline (Groq STT → Gemini → image gen → narrated video), closed alpha with 23 DMs | Medium-high |
| Deep expertise in distributed training/inference frameworks (vLLM, sglang, Ray, Accelerate) | Nothing. Adjacent only: OmniGibson/MuJoCo training loops, RLinf internals, 10,000+ demonstration training runs. | **Gap** |
| Deploy containerized systems at scale (Docker, Kubernetes, Terraform) | Nothing on the CV. | **Gap** |
| Observability and monitoring (Prometheus, Grafana, tracing) | Nothing on the CV. | **Gap** |
| Work side-by-side with customers; translate customer insight into roadmap | BMO work serves internal business lines (wealth management, commercial banking, insurance policy). That is stakeholder-facing, not external-customer-facing. | **Gap, honest.** Adjacent, not equivalent. Do not inflate "internal business partner" into "customer". |

### Gaps and mitigation

**1. Distributed serving stack (vLLM, sglang, Ray, Accelerate) — soft blocker, hardest of the three.**
Report 020 flagged the same gap against the RL req, where the JD softened it with an explicit "get familiar and reach out" invitation. This req has no such escape hatch: it says "deep expertise". Adjacent experience is real but different in kind (training-loop and simulator work, not high-throughput serving). Mitigation: the honest one is to close part of it before contact. Building an eval environment against the `verifiers` spec means running it against local or API models, which is the shallow end of exactly this stack. That converts a résumé gap into a two-sentence story with a repo behind it.

**2. Docker / Kubernetes / Terraform — soft blocker, most fixable on paper.**
Zero evidence in cv.md, and this is the sort of line a recruiter screen checks mechanically (rule 3 logic applies even though no YoE number is attached). If real container work exists from BMO or Merlyn that simply never made it onto the CV, that is a `cv.md` conversation to have before applying anywhere in this family. Do not add it speculatively: per the standing rule, no new factual claim goes into `cv.md` without Shayan confirming the line first.

**3. Observability (Prometheus, Grafana, tracing) — nice-to-have.**
Bottom of the requirement list, in the "Agent Development & Infrastructure" section rather than Requirements-proper. Not worth engineering around. If asked, the honest answer is deterministic eval pipelines and experiment discipline, which is monitoring of a different flavor.

**4. Customer-facing delivery — role-shape gap, not a skill gap.**
This is a forward-deployed job with an applied-research label. Roughly 40% of the described work is sitting with customers. There is no CV evidence for that, and inventing some would be the exact "reformulate never fabricate" violation. The credible mitigation is a level-headed pitch: enterprise-regulated environment, business stakeholders who did not speak ML, and a finding that had to be made legible to a wealth-management division before anyone acted on it. That is adjacent enough to say out loud and weak enough that it should not be the lead.

**5. Named RL method vocabulary (RLHF, RLVR, GRPO).**
Not a claim to make. The defensible statement is reward design and environment design, plus the RLinf merge. Anyone who probes will find real depth; anyone who keyword-screens will not find the acronyms. That is a screen-stage cost, priced into Block C.

---

## C) Level and Positioning Strategy

**JD level vs natural level.** Fair match. No YoE floor, no degree requirement, no publication gate, and "Applied Research" at a Series A company usually means a wide IC band. Nothing here forces a downlevel conversation. Rule 1 does not fire, which is worth naming explicitly since it fired on the Boston Dynamics and DeepMind RS reqs.

**Screen risk, stated plainly (rule 3, rule 4).**
This req's screen risk is meaningfully higher than the sibling RL req in report 020, for three reasons that compound:

1. **Three of six Requirements bullets have zero CV evidence** (distributed serving, containers/IaC, and by extension the observability line). Not one soft gap: a cluster. A recruiter working a checklist reads "deep expertise in vLLM/sglang/Ray" and stops.
2. **The customer-facing dimension has no proxy on the CV.** Forward-deployed hiring managers screen hard for it because a mis-hire there is expensive and visible. Shayan has enterprise credibility but no delivery-to-external-customer story.
3. **Funnel volume.** The posting went up 2026-07-08, the same day the $130M Series A was announced by TechCrunch and the investors. A hot Series A at a $1B valuation with Karpathy and Dwarkesh Patel on the cap table generates enormous inbound. Eight weeks later the req is still listed, which cuts both ways: still open, but they have not been short of applicants.

Against that: **no PhD gate, no first-author gate, no YoE gate.** The bar that has actually killed applications so far (rules 1 and 3) is absent here. The bar in play is a keyword-and-shape bar, and keyword-and-shape bars are the kind a demonstrated artifact routes around.

**Attainability read (rule 7).**
The one advance so far came through a take-home (Mercor); the three rejections were all cold résumé screens at frontier labs. This req advertises no assessment stage, so a cold apply here is structurally the same shape as those three rejections, just at a smaller company. Prime Intellect does, however, run an unusually legible open door: the `verifiers` library and the `prime-environments` repo, the Environments Hub with a public contribution program, `prime-rl`, and a live posting literally titled "Open Application for Unconventional Talent". That is the assessment-first path this company happens to offer, even though this req does not label it as one.

Ranking the routes for this specific req, most attainable first:
1. **Warm contact backed by an artifact.** Ship one eval environment to `prime-environments` / the Environments Hub against the `verifiers` spec, then email Applied Research with the link plus the merged RLinf PR. This is the highest-yield route and the only one that neutralizes both the serving-stack gap and the funnel-volume problem at once.
2. **Cold apply, but to the right req.** If only one Prime Intellect application goes out, report 020's Research Engineer, RL is the better screen fit: cleaner content overlap, one infra gap instead of three, and the JD itself invites generalists to reach out. Applied Research: RL & Agents (SF) is worth an evaluation before choosing.
3. **Cold apply to this req as the primary move.** Lowest yield. Not recommended as the plan.

**How to sell seniority without lying.**
Lead with the eval work, in this order: built the harnesses and test setups, scaled to hundreds of synthesized inputs, and that scale is what surfaced systematic risk-downplaying in a tool serving $200B+ AUM. The finding arrives as the output of the system, not as a lucky catch. Then Merlyn as side research: VLM judges producing dense rewards that are hard to game, and the RLinf merge. Three-person collective, nights and weekends, stated flat. Never imply funding or headcount.

Do not lead with BMO's greeter robot. It is a side project he was asked to fix because he knows robots, and it is irrelevant here anyway.

**If they downlevel.**
Two plausible downlevels: a junior applied-research band on the infra gaps, or a redirect toward a pure eval/research req with less customer exposure. The second is a good outcome, not a demotion, and worth accepting quickly. For the first, the counter is evidence rather than argument: the eval pipeline was built end to end, the RLinf contribution was merged into someone else's codebase, and the BEHAVIOR result was earned against 50 scored task types with compute for only 22. If the sticking point is genuinely serving infrastructure, take it on the chin and ask what the ramp looks like. That reads better than talking around it.

---

## D) Compensation and Demand

**Advertised range (verbatim from the JD):** "Cash Compensation Range of $150-300k + equity incentives"

**Company type:** Growth-stage startup / VC-backed startup. High confidence: Series A of $130M closed 2026-07-08 led by Radical Ventures with NVIDIA Ventures, Intel Capital and Dell Technologies Capital, total funding above $150M, valuation reported around $1B, annualized revenue run rate reported around $100M, founded 2024.

**Compensation reliability:** Medium-high. The JD separates cash from equity in the same sentence, which is better hygiene than most startup postings and rules out the usual "total package" trap. What it does not do is separate base from bonus inside "cash compensation", and it does not attach the band to a level.

| Component | Read |
|-----------|------|
| **Advertised range** | "Cash Compensation Range of $150-300k + equity incentives" |
| **Likely guaranteed base** | $150-300k depending on level. The 2x spread almost certainly spans multiple levels rather than one negotiable band. Sibling reqs on the same board advertise $150-350k, so the ceiling moves with the role. |
| **Variable / conditional cash** | None named. No bonus, commission or OTE language anywhere, which is consistent with a research-org comp structure. |
| **Expected stable cash** | Realistically $200-260k gross for a mid-level applied researcher without the serving-infra profile; the $300k ceiling is a senior/staff number. |
| **Non-cash** | Equity incentives (unspecified instrument, unspecified size), professional development budget, offsites and conference attendance, visa sponsorship and relocation support. |

**Against Shayan's targets.** Profile floor is $180k USD; target is $250k+ for a US startup with strong equity, $300-500k for frontier labs. So: the bottom of this band ($150k) sits **below the stated floor** and must not be accepted or anchored against. The midpoint (~$225k) is under target. Only the top third clears it on cash. The equity is the swing factor, and at a ~$1B post-money with ~$100M ARR the paper is more credible than a typical Series A grant, but it is still illiquid and the JD gives no numbers.

**Anchoring guidance.** Enter at $280-300k cash and treat $250k as the walk-toward-neutral line, using the profile script: "Based on market data for research engineering roles at this level, I'm targeting [range]. I'm flexible on structure, what matters is total package and the research agenda." A remote-from-Toronto arrangement (which the API record suggests is possible, though the location field is contradictory) would invite a geo discount, and the profile's pushback script applies: output is location-independent, benchmark against US rates.

**HR verification questions (5).**
1. Is the $150-300k figure base salary, or does it include a bonus or variable component?
2. Where in that band would this specific req land for someone at my level, and what distinguishes the $150k end from the $300k end?
3. What is the equity grant: options or RSUs, what percentage or dollar value at the current preferred price, what vesting schedule and cliff, and what is the post-termination exercise window?
4. The posting says "remote or San Francisco" but the job board record lists New York City and Hybrid. Which is accurate for this req, and does comp vary by location?
5. Is the band adjusted for a candidate working from Canada on a TN, and does the TN classification change the employment entity or payroll arrangement?

**Demand trend.** Strong and rising. Post-training, RL environments and agent evaluation are among the hottest hiring categories in the market right now, and Prime Intellect is hiring across 25 open reqs immediately after a $130M raise. That is a genuine hiring wave, not a placeholder posting. The flip side is that the same market heat means every strong candidate in this niche is applying to the same 25 reqs.

**Comp score: 3/5.** Market median. The band is honest and the equity is credible, but the cash midpoint is below Shayan's stated target and the floor is below his floor.

Sources: [TechCrunch on the $130M Series A](https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/) · [Prime Intellect Series A announcement](https://www.primeintellect.ai/blog/series-a) · [Intel Capital release](https://www.intelcapital.com/prime-intellect-raises-130m-series-a-to-build-the-open-superintelligence-stack/) · [Levels.fyi Prime Intellect](https://www.levels.fyi/companies/prime-intellect/salaries/software-engineer) · [Environments Hub](https://www.primeintellect.ai/blog/environments) · [PrimeIntellect-ai/verifiers](https://github.com/PrimeIntellect-ai/verifiers) · [PrimeIntellect-ai/prime-rl](https://github.com/PrimeIntellect-ai/prime-rl)

---

## E) Personalization Plan

CV/PDF generation is deferred this run (sources pending sync), so this is the spec for when it runs.

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|------------------|-----|
| 1 | Professional Summary | Generic dual-track framing (frontier robotics + alignment evals) | Two to three sentences, evals-first: agent evaluation and reward design, applied in a regulated enterprise and in open-source RL. Robotics survives as the research provenance, not the headline. | This req is evals-and-data. The robotics framing is true but buries the lede here. Max 3 sentences per CV rule 2. |
| 2 | Core Competencies (one line) | Whatever the last render produced | Exactly one line, CV-backed only: agent evaluation · reward design · RL environments · LLM post-training · distributed simulation · Python/PyTorch. **No RLHF, no RLAIF, no GRPO, no Kubernetes.** | Rule 11c. Every chip must survive a "tell me about that" follow-up. Three of the JD's keywords have no backing and must not be chipped in. |
| 3 | BMO block | Six bullets including the greeter robot | Reorder to: (1) risk-downplaying finding at $200B+ AUM, (2) deterministic eval pipeline over hundreds of synthesized inputs, (3) evals for agents reasoning over banking/insurance policy, (4) RL environments for specialized agents, (5) graph-based multi-hop agentic system. Drop the greeter robot. Keep 2 strongest bullets minimum if space forces cuts. | Rule 3 (BMO order) and rule 12 (no gutted roles). The eval bullets are the whole pitch for this req; the robot is noise. |
| 4 | Merlyn Labs block | Five bullets | Lead with VLM judges producing dense hard-to-game rewards, then RLinf open-source merge, then the LIBERO-PRO recalibration result (21% → 42%). AlohaMini sim2real drops to last or off. | Rule 4 (Merlyn restraint: pick the 1-2 most role-relevant). Reward design and OSS are what this team buys. Physical embodiment is not. |
| 5 | BEHAVIOR-1K project | Present | Keep, compressed. The 8th-place placement plus "published a technical report and further analysis on LessWrong" is the research-track-record proof the JD asks for. Say "we placed 8th": team result. Trained on 22 of 50, scored across all 50, never one number alone. | JD requirement: "publications, open-source contributions, benchmarks". This is the benchmark leg. |
| 6 | BardSong | Present, 2 bullets | Keep 1 bullet if space allows: end-to-end pipeline, closed alpha with 23 DMs. It is the closest thing to "shipped a thing real users touch". | Weak proxy for the customer-facing requirement, but it is the only honest one available. |
| 7 | Epineuron / prosthetic / McMaster | Present | Cut whole entries before thinning anything above. Fill only if the page is under ~90%. | Rules 1 and 12: cut whole low-relevance entries, never thin every bullet into stubs. |
| 8 | Header | Varies | One line exactly. Location item is "Toronto, Canada". No TN text, no visa text, no citizenship text in the header, on any CV. Drop the portfolio URL first if it wraps. | Rule 11b. |
| 9 | Education | Varies | "M.Eng in AI & Robotics, University of Toronto, expected April 2027". Never "M.Eng candidate", never imply a thesis. | Rule 8. |
| 10 | Voice | n/a | Implied first person, zero pronouns, no em dashes anywhere in the prose. | Rules 7 and 10. |
| 11 | LinkedIn headline | "AI research engineer across frontier robotics (VLA/RL) and alignment evals" | For the duration of this application family, front-load evals: agent evaluation and RL post-training first, robotics second. | Whoever screens this req searches for eval and post-training language, not VLA. |
| 12 | Paper claim, everywhere | Risk of overstatement | "Recalibrating VLA Baselines" is **unpublished**, submitted to CoRL 2026 and rejected. Never "published", "accepted", "under review", or a named venue. Honest framing: "we wrote a paper proposing an alternative baseline". | article-digest.md §3. Non-negotiable. |

**Application form answers (from the standing policies):** Authorized to work = Yes. Requires sponsorship = No. Free-text clarifier: "Canadian citizen, TN-eligible (no sponsorship needed; TN is issued at the border, no employer petition)." Start date free-text: "2-4 weeks from an offer (TN processing at the border is fast; ready to relocate to San Francisco)". US office 3 days/week = Yes. YoE dropdown = 2-4. "How did you hear about us" = blank unless an honest option exists.

Note: this employer explicitly offers visa sponsorship and relocation, so the sponsorship question is low-stakes here. TN still beats it on speed and should be stated as the plan.

---

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Build eval harnesses that surface misalignment | BMO risk-downplaying discovery | GenAI tool serving a wealth-management division with $200B+ AUM; behavior looked fine case by case | Determine whether the tool was systematically shading risk, not just occasionally | Built a deterministic eval pipeline and scaled it across hundreds of synthesized inputs, holding conditions fixed so the signal was reproducible rather than anecdotal | Surfaced systematic downplaying of investment risk that was invisible at anecdotal scale | Some misalignment only exists statistically. One-off review cannot find it, and the harness is what makes it real. |
| 2 | Reward shaping; verifiers that resist gaming | Merlyn VLM judges | Rollouts needed dense reward signal, sparse task success was too coarse to train on | Build judges producing context-dependent dense rewards without becoming trivially gameable | Designed VLM judges scoring rollouts into dense rewards specifically constructed to be hard to satisfy without doing the task | Dense, context-dependent reward signal usable for RL | A judge you can satisfy without doing the task is worse than no judge. Most of the design effort goes into the gaming surface, not the accuracy. |
| 3 | Track record of open-source contributions | RLinf flow-matching VLA integration | RLinf had no path to RL training on the BEHAVIOR-1K suite in OmniGibson | Add flow-matching VLA support and get it accepted upstream | Implemented the integration against someone else's architecture and conventions, and got it merged | Open-sourced integration enabling RL training on BEHAVIOR-1K in OmniGibson | Contributing into a codebase you did not design is a different skill from building your own. It is also the one that matters on a platform team. |
| 4 | Benchmarks and eval integrity | LIBERO-PRO recalibration (unpublished paper) | Published π0.5 checkpoint scored 96% on standard LIBERO and collapsed to 21% on position-swap | Determine whether the collapse was architectural or an artifact of the training recipe | Ran a systematic finetuning study; tested and rejected LoRA (15-21%) and frozen video-diffusion visual priors (42% → 35%); found a conservative full-finetune recipe (batch 64, LR 1e-5) that held stable 8k-27k steps | Doubled position-swap success to 42% with no architectural change; showed the brittleness was recipe-induced trajectory memorization | Methods reporting LIBERO-PRO gains may be compensating for a miscalibrated baseline. Evals are only as good as the baseline you compare against. |
| 5 | Discovering emergent failure modes in agents | Proprioceptive collapse, BEHAVIOR-1K | Policies plateaued on long-horizon household manipulation | Find what the model was actually leaning on | Ablated proprioceptive input systematically rather than tuning around the symptom | Masking 60% of proprioception improved task success by up to 48% | The model had learned to trust the wrong channel. Removing information made it better, which is the kind of result you only find by ablating rather than tuning. |
| 6 | Distributed training at scale | BEHAVIOR-1K challenge run | 50 scored task types, compute for far fewer | Maximize scored performance under a hard compute ceiling | Trained on 10,000+ demonstrations covering 22 of the 50 scored task types; doubled long-tail subtask success by oversampling skill transitions via boundary resampling | We placed 8th, Standard Track | Most of the work was allocation, not modeling. Choosing what not to train on was the decision that moved the score. |
| 7 | Agent systems, multi-hop reasoning | BMO graph-based agentic system | Complex relational queries across bank client data that flat retrieval could not answer | Answer multi-hop relational questions reliably | Building a graph-based agentic system over client data (in progress) | System in development | Retrieval quality is a graph problem before it is a model problem, at least in this data. |
| 8 | Customer-facing translation (weakest, prepare anyway) | BMO stakeholder translation | Wealth-management business partners with no ML background, and a finding they had commercial reasons not to want | Make a statistical alignment finding legible and actionable to a non-technical business line | Reframed the finding as reproducible evidence with the harness as the exhibit, not as an opinion about the model | Finding was taken seriously and acted on internally | Nearest thing to customer-facing work. Say plainly that it was internal, not external. Overclaiming here is the fastest way to lose the room. |

**Recommended case study.** Build and present one eval environment against the `verifiers` spec: a task with a real gaming surface, an explicit reward function, and a short writeup of how an agent cheated it before the reward was tightened. This doubles as the artifact for the outreach route in Block C, and it maps to the Twilight Imperium agent-eval project already in flight (large action space, multi-agent negotiation, long-horizon strategy). One artifact, two jobs.

**Likely red-flag questions.**

1. *"Do you have production experience with vLLM or sglang?"* No, and say so in one sentence, then say what is adjacent (RLinf internals, OmniGibson training loops) and what has already been done to close it. Do not talk around it. This is the question that decides the screen.
2. *"Have you deployed with Kubernetes or Terraform?"* Same shape, shorter answer. If real container work exists from BMO or Merlyn that never made the CV, this is where it goes, but only if it is real.
3. *"Have you worked directly with external customers?"* No. Internal business lines at a bank, which is adjacent, and the specific transferable part is making a technical finding land with people who did not want it. Say that and stop.
4. *"Tell me about your publications."* One technical report, one LessWrong analysis, one paper submitted to CoRL 2026 and rejected, one merged OSS contribution, one benchmark placement. Say "rejected" out loud. It costs nothing and the alternative is a credibility risk.
5. *"What is Merlyn Labs?"* Use the standing one-liner: self-organized research collective, three people doing robotics research nights and weekends, 8th in Stanford's BEHAVIOR-1K Challenge, published methods, contribute to open-source RL infra. Never imply funding, headcount or company status.
6. *"You're mostly robotics. Why evals?"* They are the same instinct applied to different systems: find where a system fails, quantify it, build the measurement that makes it reproducible. The proprioceptive-collapse finding and the BMO bias finding are the same move on different substrates.
7. *"Are you authorized to work in the US?"* Canadian citizen, TN-eligible, no sponsorship needed. Flat statement, no border explainer in conversation.

---

## G) Posting Legitimacy

**Tier: High Confidence.**

| Signal | Assessment |
|--------|------------|
| Company reality | Verified independently. $130M Series A announced 2026-07-08, covered by TechCrunch and confirmed by Intel Capital and the company's own blog. Radical Ventures leading, NVIDIA Ventures and Dell Technologies Capital participating. ~$1B valuation, ~$100M ARR reported. |
| Posting channel | Official Ashby board for PrimeIntellect, canonical `jobs.ashbyhq.com` URL, matching `applyUrl`. Direct employer, no agency intermediary. |
| Listing state | Ashby posting API returns `isListed: true` for this job id today (2026-09-02), which is a live-data freshness signal, though not a Playwright-verified page render. |
| Freshness | `publishedAt: 2026-07-08`, so roughly 8 weeks old. Long enough to warrant a liveness re-check right before applying, not long enough to be suspicious on its own given 25 concurrently open reqs. |
| Salary transparency | Explicit cash range with equity named separately. No "OTE", "up to", "uncapped" or "comprehensive package" language. |
| JD specificity | High. Named frameworks (vLLM, sglang, Ray, Accelerate, Docker, Kubernetes, Terraform, Prometheus, Grafana), named methods (RLHF, RLVR, GRPO), named benchmarks (SWE-Bench, HELM). Boilerplate ratio is low outside the standard company-mission preamble. |
| Scam indicators | None. No fees, no personal financial information, no third-party recruiter, no unrealistic promises. |
| Prior appearances | `data/scan-history.tsv` shows this exact URL added 2026-09-02 via ashby-api, plus four sibling Prime Intellect reqs (two from 2026-07-05 websearch, two from today). Consistent presence, no repost churn. |
| Apply-button state | **unverified (batch mode).** No Playwright in this environment. |
| Page render / expiry banner | **unverified (batch mode).** |
| Location consistency | ⚠️ Inconsistent. API record says New York City with `workplaceType: Hybrid` and `isRemote: true`; the JD body says "remote or San Francisco" and never mentions NYC. Not a legitimacy problem, but a real question to ask before applying. |

Nothing here reads as fake. The only caution is procedural: verify liveness and resolve the location contradiction before spending an application on it.

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
| CV match | 3.5/5 |
| North Star alignment | 4.0/5 |
| Compensation | 3.0/5 |
| Culture / working model | 4.0/5 |
| Red flags | 0 |
| **Global** | **3.7/5** |

Weighting: CV match and North Star alignment carry 1.5x, compensation and culture carry 1.0x. (3.5×1.5 + 4.0×1.5 + 3.0 + 4.0) / 5 = 3.65, rounded to 3.7.

**Why 3.7 and not 4.1 like the sibling req (020).** Same company, same funding story, same comp band. The difference is entirely req-level: three unevidenced infra requirements instead of one, plus a customer-facing role shape with no CV proxy, minus the "reach out anyway" invitation that softened the RL req. The eval content here is a better match to what Shayan loves; the screen is a worse match to what his CV proves.

**Decision: Consider.** Below the 4.0 apply line, so this is not a straight recommendation to fire off an application. Two concrete paths, in order:

1. **Artifact first, then warm contact.** Ship one eval environment to `prime-environments` / the Environments Hub, then email Applied Research with that link and the merged RLinf PR. This is the highest-odds route into this company for this profile, and it upgrades every Prime Intellect req at once rather than just this one.
2. **If a cold application goes out to Prime Intellect this week, send it to report 020's req instead** (Research Engineer, RL, `ee13090e-...`), or evaluate Applied Research: RL & Agents first. Both are cleaner screen fits than this one. Report 020 has been sitting at `Evaluated` since 2026-07-05 and was never sent, which is the more actionable gap.

Do not let this req crowd out either. It is a strong content match wrapped in a screen he is likely to lose cold.

---

## Extracted Keywords

evaluation harnesses · verifiers · agent evals · applied data · post-training · reinforcement learning · RLVR · GRPO · reward shaping · model alignment · reasoning benchmarks · SWE-Bench · HELM · eval pipelines · distributed training · distributed inference · vLLM · sglang · Ray · Accelerate · agent frameworks · multi-agent systems · memory-augmented agents · workflow automation · data capture and versioning · model traces · reward signals · observability · Prometheus · Grafana · tracing · Docker · Kubernetes · Terraform · containerized deployment · forward-deployed · customer-facing engineering · prototyping · open-source contributions · RL environments · sandboxes
