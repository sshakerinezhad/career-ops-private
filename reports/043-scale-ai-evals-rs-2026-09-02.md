# Evaluation: Scale AI — Machine Learning Research Scientist, Evaluations

**Date:** 2026-09-02
**Archetype:** Alignment / Evals Research Engineer (primary) + ML / LLM Research Engineer (secondary)
**Score:** 3.6/5
**Legitimacy:** High Confidence
**Work Auth:** ⚠️ Unstated
**URL:** https://job-boards.greenhouse.io/scaleai/jobs/4728014005
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 043-scale-ai-evals-rs

---

## Machine Summary

```yaml
company: "Scale AI"
role: "Machine Learning Research Scientist, Evaluations"
score: 3.6
legitimacy_tier: "High Confidence"
archetype: "Alignment / Evals Research Engineer"
final_decision: "Research first"
hard_stops: []
soft_gaps:
  - "No conference-published research (NeurIPS/ICML/ICLR/ACL/EMNLP/CVPR); the one paper was submitted to CoRL 2026 and rejected, and technical reports plus LessWrong posts do not clear a publications bullet on a Research Scientist req"
  - "Master's not yet in hand: M.Eng expected April 2027, so the 'Ph.D. or Master's' bullet is met only in progress, and the M.Eng is course-based rather than research"
  - "No customer-facing role experience, which the JD lists explicitly and which matters here because the pod partners directly with foundation model labs"
  - "Text-LLM and multimodal-VLM benchmark construction at frontier scale is adjacent, not direct: the eval depth is agent evals at BMO and VLA rollout scoring at Merlyn, not LLM benchmark suites"
top_strengths:
  - "Failure-mode RCA is the literal job and the literal track record: systematic risk-downplaying bias found in a $200B+ AUM agentic tool, proprioceptive collapse in VLAs, recipe-induced overfitting in a published pi-0.5 checkpoint"
  - "Builds evals that resist gaming: deterministic agent eval pipeline over hundreds of synthesized inputs, plus VLM judges scoring rollouts into dense hard-to-game RL rewards"
  - "Post-training is hands-on, not theoretical: conservative full-finetuning recipe doubled LIBERO-PRO position-swap success 21% to 42%, and RL environments are in flight at BMO"
risk_level: "Medium"
confidence: "Medium"
next_action: "Warm contact first: run contacto to find an Evaluation-pod researcher in Scale's GenAI Research Organization and open a conversation before submitting, because the 90-day reconsideration lockout makes a cold resume screen on a Research Scientist title the single worst-odds route here"
work_auth: "unstated"
discard_reasons:
  - "seniority_mismatch"
  - "salary_too_low"
via: null
company_confidential: false
advertised_comp: "$180,600 - $225,750 USD"
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
|---|---|
| Detected archetype | Alignment / Evals Research Engineer (primary); ML / LLM Research Engineer (secondary) |
| Domain | Frontier LLM and agent evaluation, text and multimodal |
| Function | Benchmark construction, failure-mode diagnosis and root cause analysis, post-training feedback loop |
| Seniority | Research Scientist, unleveled in the posting; the req text explicitly spans "Research Scientists and Research Engineers" |
| Org | Evaluation pod, GenAI Research Organization |
| Work mode | On-site, SF / Seattle / NY. The application form asks about being in the SF or NY office 3 days a week |
| Team size | Not stated |
| Advertised base | $180,600 to $225,750 USD, plus equity and benefits |
| TL;DR | The work described is the closest match to Shayan's stated primary axis of anything evaluated so far. The credential bullets and the title are the problem, not the content. |

**Profile caps and overrides applied**

| Rule | Applied? | Reasoning |
|---|---|---|
| Rule 1 (PhD + first-author pubs on RS titles = hard stop, cap 3.5) | **Not triggered literally; substance still weighed** | The qualifications sit under "Ideally you'd have", not "Required". The degree bullet reads "Ph.D. **or Master's**", so it is not a PhD gate. The publications bullet is not first-author-scoped. The literal trigger condition for the 3.5 cap is absent, so no mechanical cap. Rule 1's underlying finding still applies and is carried into Block C: technical reports and LessWrong posts do not clear a publications bullet at a research org. |
| Rule 4 (justify waivers specifically or treat as binding) | Yes | See Block C for the specific reasons the publications bar is softer here than at Boston Dynamics or DeepMind RS, and the specific reasons it still bites. |
| Rule 6 (no Anthropic) | N/A | Not Anthropic. |
| Rule 7 (attainability is the first sort key) | Yes | Drove `final_decision` to "Research first" and the `next_action` to a warm path. Cold resume screen is explicitly named as the worst route. |
| Rule 8 (robotics co-primary) | N/A | Not a robotics req, though the VLA work supplies the multimodal evidence. |
| Location policy (US relocation preferred, no penalty) | Yes | SF / Seattle / NY on-site carries no scoring penalty. |
| Comp policy (US target $300-500K TC) | Yes | Advertised base sits below the target band. See Block D. |

**Work authorization:** the JD states no sponsorship policy either way. The application form carries the standard "are you legally authorized" and "will you require sponsorship" pair, with no stated refusal. Tier: **unstated**, which is neutral rather than a blocker. Answer the pair per the standing policy in `modes/_profile.md`: authorized = Yes, sponsorship required = No, with the TN clarifier in free text.

---

## B) CV Match

| JD requirement | Evidence in sources | Verdict |
|---|---|---|
| "Analyze model behavior to identify, characterize, and diagnose failure modes... focusing on RCA" | `cv.md` BMO: "Uncovered systematic bias to downplay investment risk in a GenAI tool serving $200B+ AUM wealth management". `cv.md` BEHAVIOR: "Identified proprioceptive collapse as critical VLA failure mode; 60% masking improved task success by up to 48%". `article-digest.md` §3: the pi-0.5 LIBERO-PRO collapse traced to recipe-induced trajectory memorization, with two rival hypotheses tested and rejected (LoRA, frozen video-diffusion priors) | **Strong.** This is the single best-evidenced requirement on the list. The §3 work is textbook RCA: observe the failure, enumerate causes, falsify the alternatives, bound the effect. |
| "Design and build benchmarks and evaluation methods that measure LLM capabilities" | `cv.md` BMO: "Built a deterministic agent eval pipeline using hundreds of synthesized inputs to detect misaligned outputs at scale"; "Designing evals for LLM agents that retrieve and reason over commercial banking and insurance policy" | **Good, with a scope caveat.** These are eval harnesses for a specific deployed system, not general-purpose published benchmark suites. Real and directly relevant, one notch narrower than the JD's framing. |
| "...in both text and multimodal modalities" | Text: BMO agent evals over banking and insurance policy. Multimodal: `cv.md` Merlyn, "Developing VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game"; the whole VLA line of work is vision-language-action | **Covered on both, unevenly.** Multimodal evidence is vision-language-action rather than the image-text VQA style a GenAI eval pod usually means. Adjacent, and worth framing deliberately rather than assuming the reader makes the jump. |
| "Apply post-training expertise (SFT, RLHF, reward modeling) to connect observed failures to the data and training interventions that address them" | `article-digest.md` §3: conservative FFT recipe, batch 64 / LR 1e-5, doubled position-swap success 21% to 42%, stable 8k-27k steps, while matching standard LIBERO. `cv.md` BMO: "Developing RL environments to train specialized agents for BMO's wealth management division". VLM judges producing dense reward signal | **Strong on the loop, partial on the acronyms.** The failure-to-intervention loop is exactly what §3 demonstrates, end to end. But RLHF and preference modeling as named techniques do not appear in `cv.md` or `article-digest.md`. Reward *design* via VLM judges is present; RLHF on human preference data is not. Do not let a tailored CV blur these. |
| "Deep understanding of deep learning, reinforcement learning, and large-scale model fine-tuning" | `cv.md` Skills: PyTorch, JAX, RL, Imitation Learning, LLM Fine-tuning. Education coursework: Deep Learning, Reinforcement Learning. §3 finetuning study with a hyperparameter sweep | **Met**, at VLA and mid-size scale. "Large-scale" at a frontier data partner likely means larger than anything in the CV. |
| "Ph.D. or Master's degree in CS, ML, AI, or related field" | `cv.md`: "M.Eng, MIE — AI & Robotics, University of Toronto (Sep 2024 – Apr 2027, anticipated)"; B.Eng Engineering Physics, McMaster, Dean's Honour List | **Gap, in progress.** No Master's in hand until April 2027. Per profile rule 8, phrase as "M.Eng in AI & Robotics, University of Toronto, expected April 2027" and never as "M.Eng candidate". |
| "Published research... at major conferences (NeurIPS, ICML, ICLR, ACL, EMNLP, CVPR) and/or journals" | BEHAVIOR-1K technical report (self-published, merlyn-labs.com); LessWrong post; "Recalibrating VLA Baselines" submitted to CoRL 2026 and **rejected**, unpublished, not on arXiv | **Gap, and the load-bearing one.** Nothing in the portfolio is conference-published. Do not describe the paper as published, accepted, under review, or attach a venue. |
| "Previous experience in a customer facing role" | Nothing in `cv.md` or `article-digest.md` supports this | **Gap.** Not decorative here: the pod "partners with top foundation model labs", so this bullet describes real day-to-day scope. |
| "Excellent written and verbal communication skills" | Technical report, LessWrong post, a full paper, open-source contribution documentation | **Met and demonstrable.** The public writing is the proof. |

### Gap analysis and mitigation

**1. Conference publications.**
- Blocker or nice-to-have: **the hardest of the soft gaps.** It sits under "Ideally you'd have", so it is not formally required, but on a req titled Research Scientist whose stated responsibilities include "Publish research findings in top-tier AI conferences", a resume screener uses it as a sort key.
- Adjacent experience: a complete, self-contained paper with a falsification structure, a technical report tied to a public leaderboard placement, and a merged open-source contribution.
- Portfolio proof: BEHAVIOR-1K 8th place is externally verifiable on Stanford's leaderboard, and the RLinf merge is verifiable on GitHub. Verifiable beats unrefereed for a hiring manager, and loses to refereed for an ATS filter and a recruiter.
- Mitigation: this gap is not closable in an application cycle, so route around it rather than through it. Two concrete moves. First, target the Research **Engineer** siblings at Scale where the publications bullet is weaker or absent (see Block C). Second, put "Recalibrating VLA Baselines" on arXiv. A citable preprint link converts "unpublished" into "public research with a stable identifier", which is a materially better answer to "what have you published" than a PDF in a private repo. That is a user decision, not an agent action, but it is the highest-leverage single step for this whole class of req.

**2. Master's not in hand.**
- Blocker or nice-to-have: nice-to-have as written, given the "Ph.D. or Master's" phrasing and the RS/RE dual framing.
- Mitigation: state the expected date plainly. Do not over-explain the course-based structure on the CV per profile rule 8; if it comes up in interview, the honest line is "course-based M.Eng; my research happens at Merlyn Labs."

**3. Customer-facing experience.**
- Blocker or nice-to-have: nice-to-have, and the most genuinely mitigable of the three.
- Adjacent experience: BMO is an internal-stakeholder role at an AI Centre of Excellence serving a wealth management division, which is stakeholder-facing work with real delivery pressure even though it is not external-customer-facing. Merlyn Labs is co-founded, so partner and collaborator management is real.
- Mitigation: frame the BMO work as delivering evaluation findings to a business division that owned $200B+ in AUM and had to act on them. That is honest and it is the closest true analogue. Do not upgrade it to "customer-facing".

**4. Benchmark scope: system-specific harnesses versus general benchmarks.**
- Nice-to-have. Mitigation: lead with the *method* rather than the artifact. Synthesizing hundreds of inputs to surface behaviour invisible at anecdotal scale is the transferable skill, and it is the same skill a benchmark requires.

---

## C) Level and Strategy

**JD level versus natural level.** The posting is deliberately wide: it opens by saying Scale is "looking for Research Scientists and Research Engineers", and the salary boilerplate says the range "may be inclusive of several career levels at Scale". So the req is a band, not a level. Shayan's natural level here is the Research Engineer end of that band, and probably its lower half: roughly one year of full-time industry work at BMO since Sep 2025, concurrent with Merlyn Labs since Aug 2025, plus co-op experience.

**Screen risk, stated plainly (calibration rules 3 and 4).**

The resume screen for this req is the main obstacle, and it is worse than the content fit suggests. Three concrete reasons:

1. **The title selects the reviewer.** A req titled Research Scientist whose responsibilities include publishing at top-tier conferences is typically screened by someone who sorts on publication record first. Shayan's record on that axis is zero refereed papers and one CoRL rejection. Verifiable non-refereed output (8th place on a Stanford leaderboard, a merged RLinf contribution) is genuinely strong signal, and it is signal that a publication-sorted screen is not built to see.

2. **The degree bullet is met only in the future tense.** "Ph.D. or Master's" with an M.Eng expected April 2027 reads as in-progress to a human and can read as unmet to a filter.

3. **The 90-day lockout raises the cost of a miss.** The posting states: "Our policy requires a 90-day waiting period before reconsidering candidates for the same role." A cold application that dies at screen removes this specific req from the board for three months. That converts "apply and see" from free into genuinely costly, and it is the strongest argument for spending effort on a warm path first.

**Why the publications bar is softer here than at Boston Dynamics or DeepMind RS (rule 4 requires this be specific, not waved).** Three specifics, and all three are partial: the qualifications block is prefaced "Ideally you'd have" rather than "Required"; the req explicitly covers Research Engineers alongside Scientists, which is not true of a pure RS req at a research lab; and Scale is a data and evaluation partner to frontier labs rather than a lab publishing its own frontier results, so its evaluation pod has a commercial deliverable that a pure-research org does not. What none of that changes: "Publish research findings in top-tier AI conferences" is listed as a core responsibility, not a perk, and a recruiter comparing this application against a stack that includes actual NeurIPS authors will sort accordingly. **Net: treat the bar as soft enough that the RE siblings are worth pursuing, and hard enough that a cold apply to this specific RS req is the wrong opening move.**

**The Research Engineer sibling at Scale (as instructed).** Siblings exist on the same Greenhouse board, confirmed against Scale's live job list on 2026-09-02:

| Req | ID | Locations | Read |
|---|---|---|---|
| **Machine Learning Research Engineer, Agents — Enterprise GenAI** | 4625344005 | SF; NY | **Best sibling.** RE title removes the publication-sorted screen. Agents map directly onto the BMO agent eval pipeline, the RL environments, and the graph-based multi-hop agentic system. Content overlap with this req's failure-mode work is high. |
| ML Research Engineer, Agent Data Foundation — Enterprise GenAI | 4625345005 | SF; NY | Plausible second. Data-foundation framing is further from the eval-design core. |
| ML Research Engineer, ML Systems | 4534631005 | SF; Seattle; NY | Same locations as this req and an RE title, **but** report 008 already established multi-node distributed training, GPU cluster architecture, and CUDA kernels as a hard gap. Do not re-run that mistake. |
| Research Scientist, Frontier Risk Evaluations | 4677657005 | SF; NY | Closest on subject matter to the alignment-evals axis, but it carries the same RS title and therefore the same screen risk as this req. Worth a separate evaluation on content, not a route around the screen. |
| Machine Learning Fellow — Human Frontier Collective (Canada) | 4661650005 | Canada | **Flagged under rule 7 as the most attainable Scale entry point found.** Fellow programs are typically assessment-first rather than resume-screen-first, and it is Canada-located. Content not evaluated in this report; worth its own pass. |

**How to sell seniority without lying.** Do not reach for the Scientist framing. The honest and stronger pitch is the one in `modes/_profile.md`: "breaks things rigorously, then builds the fix." Three findings, three mechanisms identified, three interventions shipped, at three different levels of the stack. Lead with the BMO bias discovery because it is production, high-stakes, and quantified; follow with the pi-0.5 recipe result because it shows the full diagnose-to-fix loop; keep the chunking-versus-ensembling observation in the body only, per profile rule 5. Zero pronouns throughout, per rule 7.

**If downleveled.** Accept an RE title without argument. It is the accurate title and it removes the screen problem rather than creating a new one. Push on scope and band instead: ask which pod, whether the eval work is benchmark construction or vendor delivery, and where in the "several career levels" the offer sits. Only contest level if the offered base lands below the $180,600 floor of the posted range, which is also the floor in `config/profile.yml`.

---

## D) Compensation and Demand

**Advertised range (verbatim from the posting):** "$180,600 - $225,750 USD" base, for SF, New York, and Seattle. The posting adds that packages "include base salary, equity, and benefits", that the range "may be inclusive of several career levels at Scale", and that equity is "subject to Board of Director approval".

**Company type:** Growth-stage / late-stage private, with an unusual ownership structure. Meta acquired roughly a 49% stake for about $14.3B in June 2025 and hired founder-CEO Alexandr Wang to lead its Superintelligence Labs division; Jason Droege became interim CEO. Compensation reliability: **Medium**. The base range is explicitly stated as base and is published under a pay transparency provision, which is a High signal. The equity component is the uncertainty: a 49%-Meta-owned private company with a departed founder is a harder equity story to value than either a standard VC-backed startup or a public company.

**Component split.**

- **Advertised range:** $180,600 - $225,750 USD (verbatim, base, SF/NY/Seattle)
- **Likely guaranteed base:** $180,600 - $225,750, and the low end is the realistic anchor for a candidate entering at the RE end of a multi-level band
- **Variable / conditional cash:** none named in the posting; no bonus, commission, or OTE language, which is a good sign for reliability
- **Expected stable cash:** the base, effectively, since no variable cash is described
- **Non-cash:** equity ("subject to Board of Director approval"), comprehensive health/dental/vision, retirement benefits, learning and development stipend, generous PTO, possible commuter stipend

**Market read.** Levels.fyi reports a median total compensation at Scale AI of about $223,850 across all roles, with Software Engineer spanning roughly $231K at L3 to $1.23M at L6 and a median near $368K (data current to 2026-09-01). Against that internal picture, a $180.6K-$225.75K base for a Research Scientist req is at the low end of the house. Realistic TC here, base plus equity, plausibly lands somewhere in the $230K-$320K region, but that estimate is soft precisely because the equity is the swing factor and the posting does not size it.

**Two comparisons that matter.**

1. **Against Shayan's own targets.** `config/profile.yml` sets $300K-$500K+ TC for US frontier labs and a $180K minimum. This clears the minimum, at the floor of the advertised base. It does not reach the target band on base alone, and reaching it requires an equity grant the posting does not quantify.
2. **Against report 008, same company, two months earlier.** The Enterprise GenAI ML Systems Research Engineer req was recorded at $265K-$331K base. This Research Scientist req advertises $180.6K-$225.75K. **The Scientist title pays materially less than the Engineer title at the same company.** That is worth internalizing: the title is not tracking comp here, and it reinforces the Block C conclusion that the RE siblings are the better target on both attainability and pay.

**Demand and hiring signals.** Scale's board carried 212 open reqs on 2026-09-02, including roughly 30 research and ML roles, so hiring is clearly active. The countervailing signal is org churn in exactly this part of the company: in July 2025 Scale cut 14% of its workforce, about 200 full-time employees and 500 contractors, with the stated reason that "we ramped up our GenAI capacity too quickly over the past year", and the generative AI division was reorganized from 16 pods down to 5. This req sits on "the evaluation pod within the GenAI Research Organization", which is the org that contracted. Reporting at the time indicated Scale intended to grow enterprise, public sector, and international public sector lines while trimming data services, so this is not a simple freeze, but a pod inside a recently restructured org is a meaningful stability caution, not a disqualifier. No 2026-specific Scale reorganization news surfaced in this search, so the most recent hard data point remains July 2025.

**HR verification questions (an advertised figure exists, so these apply).**

1. Where in the $180,600-$225,750 band does this req actually land for someone entering at the Research Engineer end, and which Scale level is that?
2. What is the equity grant: number of units or dollar value at the current preferred price, vesting schedule, and cliff?
3. Given Meta's ~49% stake, what is the realistic liquidity path for equity, and has any secondary or tender been offered to employees?
4. Is the Evaluation pod one of the five surviving GenAI pods from the 2025 reorganization, and what is its current headcount and 12-month hiring plan?
5. Is there a location differential across SF, Seattle, and NY, or is the stated band uniform across all three?
6. Is any relocation support available, and does Scale sponsor or support TN entry for Canadian citizens?

**Comp score: 3/5 (market median).** Above the personal minimum, below the personal target band, low relative to Scale's own internal medians, and materially below the same company's Engineer-titled req from report 008.

---

## E) Personalization Plan

CV generation is deferred this run (sources pending sync), so this is the specification for when it runs. All changes start from `main.tex` full bullets per profile rule 12; nothing here rewrites a role into a compressed line.

| # | Section | Current state | Proposed change | Why |
|---|---|---|---|---|
| 1 | Professional Summary | General dual-track framing across evals and VLA | Two to three sentences, evals-first: current focus on LLM and agent evaluation and failure-mode diagnosis, then the VLA research as the second track. Zero pronouns, past tense for results, gerund or noun phrase for current focus | Profile rules 2 and 7. The JD's first two responsibilities are failure-mode RCA and benchmark design; the summary should answer those before the reader reaches the body |
| 2 | Core Competencies (one line) | Mixed evals and robotics terms | Exactly one line, CV-backed only: LLM & agent evaluation · failure-mode analysis · benchmark design · reinforcement learning · LLM fine-tuning · multimodal (VLM/VLA) models · Python/PyTorch | Profile rule 11c. Every term survives a "tell me about that" follow-up. **Do not add RLHF or preference modeling**: they are JD keywords with no backing in `cv.md` or `main.tex`, and that is the canonical 07-05 violation repeating itself |
| 3 | BMO bullet order | Bias detection, eval pipeline, policy evals, RL environments, agent provisioning, graph agentic system, robot side project | Reorder to: (1) bias detection with the $200B+ AUM figure, (2) deterministic eval pipeline over hundreds of synthesized inputs, (3) evals for LLM agents over banking and insurance policy, (4) RL environments. Cut the greeter robot for this application | Profile rule 3 fixes the BMO ordering, and for an evals req the first three bullets are the whole pitch. The robot is a side project and irrelevant here |
| 4 | Merlyn Labs bullets | Five bullets spanning paper, VLM judges, RLinf, sim2real | Lead with the VLM judges line ("dense, context-dependent RL rewards that are difficult to game"), then the pi-0.5 / LIBERO-PRO recipe finding with 21% → 42%. Keep RLinf. Drop or shorten AlohaMini sim2real | Rule 4 says pick the one or two most role-relevant rather than stacking. Hard-to-game judge design is the most on-target sentence in the whole CV for an evaluation pod |
| 5 | BEHAVIOR-1K project | Four bullets, robotics-framed | Keep, and re-lead with the proprioceptive collapse finding framed as a failure-mode discovery rather than a robotics result: masking 60% of proprioception improved task success by up to 48% | Profile rule 5 puts proprioceptive collapse at the top of the finding hierarchy. Reframing it as failure-mode discovery makes it read as evals evidence, which is honest: that is what it is |
| 6 | Multimodal signal | Implicit in the VLA work | Make it explicit once in the summary or competencies, as vision-language-action and VLM judging | The JD asks for multimodal twice. The evidence exists but requires the reader to make a jump; do not rely on that |
| 7 | Publications / Research section | Not a distinct section | Do **not** add one unless the paper goes on arXiv first | Refereed venue claims are non-negotiable. With a CoRL rejection and no preprint, a "Publications" header invites the exact question that ends the screen |
| 8 | Page fill | n/a | One full page, roughly 550-700 words, 12-18 bullets. If cutting is needed: drop BardSong and the McMaster VP Technical line before thinning any Merlyn or BMO bullet | Profile rules 1 and 12. Cut whole low-relevance items, never thin the survivors |
| 9 | Header | Contact line | One line, location item exactly "Toronto, Canada". No visa text in the header | Profile rule 11b |
| 10 | LinkedIn headline | Current framing | Move evals to the front for the duration of this application thread, e.g. AI Research Engineer working on LLM and agent evaluation, VLA models, and RL | If the warm-contact route in `next_action` is taken, the profile is what the contact opens first |
| 11 | Prose hygiene | n/a | No em dashes or double dashes anywhere in CV, cover, or form free text. No "claim, poetic restatement" pattern | Profile rule 10 |
| 12 | Delta ledger | n/a | Read `data/deltas.md` before drafting. D008 and D011 are directly binding here: state the identity flat first, frame the eval work as how *and why* systems fail, and lead the BMO story with what was **built** (evaluation harnesses and test setups) with the finding arriving as their output | D011 has the exact approved phrasing for the BMO story; do not re-derive it |

---

## F) Interview Plan

STAR+R stories drawn only from `cv.md` and `article-digest.md`.

| # | JD requirement | Story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Diagnose failure modes in frontier systems, focused on RCA | **The $200B AUM risk-downplaying bias** | GenAI tool in production serving wealth management with $200B+ AUM | Determine whether the tool's outputs were reliable in a regulated setting | Built evaluation harnesses and test setups; scaled to hundreds of synthesized inputs rather than reviewing anecdotally | Surfaced a systematic bias toward downplaying investment risk that was invisible at anecdotal scale | The behaviour only became visible as a distribution. Single-example review would never have caught it, which is the argument for benchmarks over spot checks |
| 2 | Design benchmarks and evaluation methods | **The deterministic agent eval pipeline** | Agent outputs varied run to run, so pass/fail judgments were not reproducible | Make misalignment detectable at scale and repeatable | Built a deterministic pipeline over hundreds of synthesized inputs | A repeatable detection mechanism rather than a one-off audit | Determinism was the design constraint that made everything else measurable |
| 3 | Post-training expertise connecting failures to training interventions | **Recalibrating VLA baselines (pi-0.5 on LIBERO-PRO)** | The published pi-0.5 checkpoint scored 96% on standard LIBERO and collapsed to 21% on position-swap | Establish whether the collapse was architectural or recipe-induced | Ran a conservative full-finetuning recipe at batch 64, LR 1e-5; tested and rejected two rival hypotheses, LoRA at 15-21% and frozen video-diffusion visual priors which made it worse at 42% → 35% | Doubled position-swap success to 42%, stable across 8k-27k steps, while matching standard LIBERO, with no architectural change. Effect bounded: too-conservative recipes at batch 16, LR 1e-6 fall to 26% | The finding that matters for an eval pod: recent methods reporting LIBERO-PRO gains are measuring against a miscalibrated baseline, so part of their reported gain is compensating for recipe-induced brittleness. **Say "we wrote a paper", never "published"** |
| 4 | Reward modeling and evaluation that resists gaming | **VLM judges as dense reward** | Sparse task-success signal is a poor RL reward and an easy target to game | Produce dense, context-dependent reward that is hard to satisfy without doing the task | Developed VLM judges scoring rollouts | Dense reward signal designed to resist gaming | Ties directly to the JD's alignment and robustness framing. Per delta D009, describe what the judges do and stop; no aphorisms about judges you can satisfy without doing the task |
| 5 | Characterize capability gaps and robustness issues | **Proprioceptive collapse** | VLA policies underperforming on BEHAVIOR-1K manipulation | Find why | Systematically masked proprioceptive input | Masking 60% of proprioception improved task success by up to 48% | Counterintuitive and the most striking single finding in the portfolio: the model was over-relying on a signal it should have discounted. A failure-mode discovery, not a tuning trick |
| 6 | Multimodal evaluation | **Chunked execution versus temporal ensembling** | Two action-execution strategies, unclear trade-off | Measure it | Compared the two directly on BEHAVIOR-1K | Chunked execution beat temporal ensembling by roughly 3x, indicating VLA architectures lack temporal awareness | Body-level evidence only, per profile rule 5. This one is a well-known observation and should not be led with |
| 7 | Large-scale evaluation under constraints | **BEHAVIOR-1K, 8th place** | Stanford challenge scoring every submission across all 50 task types | Place competitively with a three-person self-funded team | Trained on 10,000+ demonstrations covering **22 of the 50** task types under compute limits; doubled long-tail subtask success by oversampling skill transitions via boundary resampling | 8th place, Standard Track; technical report and LessWrong analysis published | **Always state both numbers: trained on 22, scored against 50.** Stating either alone has been a real error. Team result: "we placed 8th" |
| 8 | Open-source and collaboration | **RLinf contribution** | RLinf lacked flow-matching VLA support | Enable RL training on BEHAVIOR-1K in OmniGibson | Open-sourced the flow-matching VLA integration | Merged and externally verifiable on GitHub | Useful evidence of working in someone else's codebase to someone else's standards |
| 9 | Communicating findings to sophisticated audiences | **LessWrong post** | BEHAVIOR-1K failure modes were interesting beyond robotics | Frame them for an alignment audience | Wrote a model-organism view of the BEHAVIOR-1K findings | Published analysis | **This is the BEHAVIOR-1K findings reframed. It is NOT the LIBERO-PRO / pi-0.5 recipe work.** Conflating the two is a documented past error |
| 10 | Stakeholder and delivery context (customer-facing proxy) | **Delivering the bias finding at BMO** | Finding implicated a tool a business division depended on | Communicate it so it would be acted on | Presented evidence generated at scale rather than as anecdotes | Finding landed with a division owning $200B+ AUM | Closest honest analogue to the customer-facing bullet. Do not call it customer-facing |

**Recommended case study.** Ask for a frontier model, an agentic task family, and a claimed capability, and design the benchmark that would falsify the claim. Walk the panel through: hypothesis about the failure mode, synthesized input distribution wide enough to make the behaviour visible as a distribution rather than an anecdote, determinism so results are reproducible, a judge design with an explicit account of how it could be gamed and what stops that, and the handoff from observed failure to the data or training intervention that addresses it. This walks straight through stories 1, 2, 3, and 4 and mirrors the JD's four responsibilities in order.

**Likely red-flag questions.**

| Question | Answer approach |
|---|---|
| "Where have you published?" | Flat and first: no conference publications yet. Then the substance: a full paper on the pi-0.5 recipe finding submitted to CoRL 2026 and rejected, a technical report tied to a verifiable 8th-place leaderboard result, a LessWrong analysis, and a merged open-source contribution. Never say published, accepted, under review, or name a venue |
| "This is a Research Scientist role. Do you have a PhD?" | No. M.Eng in AI & Robotics at Toronto, expected April 2027, on top of a B.Eng in Engineering Physics. Then pivot to the research output and, if the panel is open to it, ask directly whether the Research Engineer track is the better fit. That question is an asset in this conversation, not a concession |
| "Have you built benchmarks, or evaluation harnesses for one system?" | Answer honestly: harnesses for specific deployed systems, at BMO and for VLA rollouts. Then argue the method transfers, and use story 1 as the evidence that scale-plus-determinism is the part that generalizes |
| "Tell me about your RLHF experience." | Do not bluff. RLHF on human preference data is not in the record. What is: reward *design*, via VLM judges producing dense context-dependent signal, plus RL environments in flight at BMO and a hands-on post-training finetuning study. Name the distinction before the interviewer does |
| "What is Merlyn Labs?" | The approved line, verbatim: "Self-organized research collective. Three of us doing robotics research nights and weekends. We placed 8th in Stanford's BEHAVIOR-1K Challenge, published our methods, and contribute to open-source RL infra." Never imply funding, headcount, or company status beyond this |
| "You are at BMO. Why leave after a year?" | The convergence story from `modes/_profile.md`: enterprise AI rigor by day, frontier robotics research by night, both converging on finding where AI systems fail and building the evaluations that surface it. This req is that convergence as a full-time job |
| "Are you authorized to work in the US?" | Canadian citizen, TN-eligible, no sponsorship needed. In a conversation, state it flat and stop. The border and petition explainer belongs in form free text only, per delta D005 |
| "How much multimodal LLM work have you done?" | Honest scoping: multimodal via vision-language-action models and VLM judging, not image-text VQA benchmarks. Then note the judge-design work is directly a multimodal evaluation problem |

---

## G) Posting Legitimacy

**Tier: High Confidence.**

| Signal | Finding |
|---|---|
| Source | Scale AI's official Greenhouse board, `job-boards.greenhouse.io/scaleai`. Confirmed present in Scale's own public job list (job ID 4728014005) on 2026-09-02 |
| JD specificity | High. Names the specific pod (Evaluation pod, GenAI Research Organization), specific techniques (SFT, RLHF, reward modeling, preference modeling, instruction tuning), specific conference venues, and both modalities. No boilerplate padding beyond the standard EEO and privacy blocks |
| Salary transparency | Explicit base range with named locations, published under a stated pay transparency provision. Equity and benefits described, with the caveat that equity is board-approval-subject |
| Boilerplate ratio | Low for the role-specific portion; the long EEO, accommodation, veteran, and disability sections are standard US federal-contractor language |
| Company reality | Well-known company. Meta holds roughly a 49% stake following a ~$14.3B investment in June 2025; named enterprise and government customers |
| Scam-like language | None. No fees, no unusual contact channels, no urgency pressure, no "unlimited earning" framing |
| Prior appearances | Scale AI appears extensively in `data/scan-history.tsv` from the 2026-07-06 sweep, including sibling evaluation and research reqs. This specific req ID does not appear in that sweep and is badged "New" on the board, consistent with a posting created after 2026-07-06 |
| Related prior evaluation | Report 008 (2026-07-05) covers a different Scale req, ML Systems Research Engineer, Agent Post-training, at 3.3/5, High Confidence. No conflict |
| Apply button / freshness | `unverified (batch mode)`. Playwright is unavailable in this run. The fetched page did return a complete application form with all standard fields and a Submit control, which is a positive but non-authoritative signal |

**Data integrity note, not a legitimacy concern.** The Greenhouse single-job API endpoint `boards-api.greenhouse.io/v1/boards/scaleai/jobs/4728014005` returned the content of a *different* company's posting on this run: Together AI, "Research Engineer, Post-Training Inference". Two independent authoritative sources contradicted it, the rendered posting at the canonical URL and Scale's own board-level job list, both of which return "Machine Learning Research Scientist, Evaluations" for this ID. The same ID returns HTTP 404 against every Together board token tried. This looks like a caching or proxy collision on the single-job endpoint rather than anything about the posting. **Operational implication: the single-job Greenhouse endpoint should not be trusted as a sole source; cross-check against the board-level `/jobs` list.** Worth knowing for `scan.mjs` and `check-liveness.mjs` behaviour. This report was written from the board-list-confirmed page text.

**Risk items that are real but not legitimacy problems:** the July 2025 restructure that cut 14% of staff and consolidated GenAI from 16 pods to 5, in the same org as this pod; a founder-departed, Meta-49%-owned ownership structure that complicates equity valuation; and the 90-day reconsideration lockout that raises the cost of a failed application.

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
| North Star alignment | 5/5 |
| Compensation | 3/5 |
| Culture / working model | 4/5 |
| Red flags | -0.3 (GenAI org restructured in 2025 and this pod sits inside it; RS-title screen risk; 90-day lockout raises the cost of a failed cold apply) |
| **Global** | **3.6/5** |

**Reading.** The content is the best evals match evaluated to date: failure-mode RCA, benchmark design, hard-to-game judges, and a post-training feedback loop are four for four against the record in `cv.md` and `article-digest.md`. What holds the score down is not fit, it is the screen and the pay. No conference publications against a Research Scientist req that lists publishing as a responsibility, a Master's still eighteen months out, and a base band that sits below both the personal target and the same company's Engineer-titled req from report 008. Per calibration rule 7, the route matters more than the score: the Research Engineer siblings at Scale, particularly ML Research Engineer, Agents (4625344005), and the Canada-located ML Fellow program (4661650005), are both more attainable and, in the Enterprise GenAI case, better paid. Do not spend the 90-day lockout on a cold application to this req.

## Extracted Keywords

LLM evaluation · benchmark development · failure mode analysis · root cause analysis (RCA) · frontier LLMs · agents · multimodal evaluation · model behavior analysis · capability gaps · reasoning errors · robustness · alignment · post-training · SFT · RLHF · reward modeling · preference modeling · instruction tuning · reinforcement learning · large-scale model fine-tuning · deep learning · evaluation-driven AI development · foundation model labs · research publication

**Keyword caution for CV generation:** RLHF, preference modeling, and instruction tuning are JD keywords with **no backing** in `cv.md`, `main.tex`, or `article-digest.md`. They must not be injected into a tailored CV or competencies line. Backed neighbours that carry similar signal: reward design via VLM judges, RL environments, LLM fine-tuning, and the conservative full-finetuning study.
