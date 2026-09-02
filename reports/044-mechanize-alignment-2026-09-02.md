# Evaluation: Mechanize — Research Engineer, Alignment

**Date:** 2026-09-02
**Archetype:** Alignment / Evals Research Engineer (primary) + ML / LLM Research Engineer
**Score:** 4.4/5
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed (application form explicitly lists TN as an accepted category)
**URL:** https://www.mechanize.work/apply/research-engineer-alignment/
**Verification:** unconfirmed (batch mode)
**PDF:** deferred — CV sources pending sync (2026-09-02)
**Batch ID:** 044-mechanize-alignment-re

---

## Machine Summary

```yaml
company: "Mechanize"
role: "Research Engineer, Alignment"
score: 4.4
legitimacy_tier: "High Confidence"
archetype: "Alignment / Evals Research Engineer + ML / LLM Research Engineer"
final_decision: "Apply"
hard_stops: []
soft_gaps:
  - "Posted JD is three sentences; role-specific detail (day-to-day, interview loop) is inferred from Mechanize's software-engineer pages, not from this req"
  - "Stage 2 is a 3-hour agent-assisted web-app build; speed at agent-directed application SWE is the weakest surface on the CV, not eval design"
  - "Prior eval work is robotics (BEHAVIOR-1K/VLA) and enterprise GenAI, not behavioral misalignment evals for coding agents specifically"
  - "In-person San Francisco only; relocation is welcome per location policy but still a real move"
  - "Google is reported (Aug 2026) to be in talks to hire Mechanize's model-evaluation staff and license the tech; team, equity value, and req continuity are all uncertain"
top_strengths:
  - "The literal job (evals that catch models going off the rails: sycophancy, dishonesty, unsafe actions) is the same work as the BMO finding: a $200B+ AUM agentic tool systematically downplaying investment risk, caught only by scaling to hundreds of synthesized inputs"
  - "Builds graders designed to resist gaming: VLM judges that turn rollouts into dense, hard-to-game RL rewards (Merlyn Labs)"
  - "Track record of finding failure modes nobody reported: proprioceptive collapse (60% masking, up to +48% success) and recipe-induced brittleness in a published pi-0.5 checkpoint (21% to 42% on position-swap)"
  - "Attainable process: two-minute resume-only application, published 3-stage loop, take-home at stage 2"
risk_level: "Medium"
confidence: "Medium"
next_action: "Cold apply — the two-minute resume-only form is the most attainable route here (no cover letter, no referral gate, and the published loop puts a take-home at stage 2 where he competes best); submit this week, then immediately drill the Stage 2 3-hour agent-assisted web-app build, and send a short founder-level note to Tamay Besiroglu or Matthew Barnett as the warm layer on top."
work_auth: "not_needed"
discard_reasons: []
via: null
company_confidential: false
advertised_comp: "$300K–$400K salary · equity · bonus"
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
| **Detected archetype** | Alignment / Evals Research Engineer (primary) + ML / LLM Research Engineer (secondary) |
| **Domain** | Misalignment evals for frontier models: sycophancy, dishonesty, unsafe actions |
| **Function** | Per the posting: "create evals that test for misaligned model behaviors. The goal will be to assess when models go off the rails." Company pages describe the engineer operating model as single-owner task lifecycle: idea, automated grader, QA until the grader is robust, fair, and deterministic |
| **Seniority** | IC Research Engineer. No Lead/Head/Principal cap trigger |
| **Remote** | In person, San Francisco. Remote considered only "for people who have no other way of joining or who are only working part-time" |
| **Team size** | ~35 people per the company's own page; a third-party profile reports 54 employees as of 2026-07-31. Roughly 10 open roles |
| **Comp (posted)** | $300K–$400K salary · equity · bonus |
| **TL;DR** | This is the alignment-axis version of report 015. Same company, same comp band, same city, but the deliverable is behavioral misalignment evals rather than RL environments for coding agents. It sits closer to the candidate's stated second love axis than 015 did, and the application costs two minutes |
| **Profile caps / overrides applied** | Rule 6 (no Anthropic): not applicable, Mechanize is a separate company though reportedly an Anthropic vendor. Rule 7 (attainability first): applied, and it raises this req rather than lowering it. Rule 8 (robotics co-primary): not applicable, this is not a robotics req. Rule 1 (PhD gate): not triggered, no PhD or first-author publication requirement is stated. Rule 5 (stretch labeling): not needed, this is not a stretch req |

**Relationship to report 015.** [Report 015](015-mechanize-2026-07-05.md) evaluated Mechanize's Software Engineer (RL Environments / Evals) req on 2026-07-05, scored it 4.3/5, High Confidence, decision Apply, and flagged the mission/values tension as the thing to weigh. The tracker still shows that row as `Evaluated`, not `Applied`, so the 015 recommendation was never acted on. Three things have changed since:

1. **A closer-fitting req exists.** 015 was RL environments for coding agents, a domain transplant from robotics. This one is behavioral misalignment evaluation, which is the candidate's stated alignment axis rather than an adjacent one.
2. **Comp is now posted as a band.** 015 recorded "$350K salary + equity + bonus"; the current apply page lists $300K–$400K + equity + bonus for both engineering roles. Slightly wider, slightly lower at the floor.
3. **A material corporate event.** Google is reported to be in talks to pay $1.5B+ to hire Mechanize's model-evaluation staff and license the technology. That is precisely the staff group this req sits in. See Block D and Block G.

The 015 mission/values note still stands and is not re-litigated here beyond Block G; it is the same company and the same tension.

## B) CV Match

| JD requirement | Evidence |
|----------------|----------|
| Create evals that test for misaligned model behaviors | cv.md: "Built a deterministic agent eval pipeline using hundreds of synthesized inputs to detect misaligned outputs at scale" (BMO). This is the requirement stated almost word for word |
| Detect models going "off the rails": sycophancy, dishonesty, unsafe actions | cv.md: "Uncovered systematic bias to downplay investment risk in a GenAI tool serving $200B+ AUM wealth management." Risk-downplaying to a client is the finance-domain instance of exactly this failure class, and it was invisible until scaled over hundreds of test cases |
| Graders that models cannot satisfy without doing the work | cv.md: "Developing VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game" (Merlyn Labs) |
| Grader robustness, fairness, determinism (the QA phase the company says dominates the work) | cv.md: deterministic eval pipeline at BMO; article-digest.md §3: rival hypotheses tested and rejected (LoRA at matched hyperparameters, frozen video-diffusion priors), effect bounds established (batch 16 / LR 1e-6 degrades to 26%). That is grader-discipline reasoning applied to an experiment |
| Intuition for what models can and cannot do; theory of mind about how a model reads a prompt | article-digest.md §1: proprioceptive collapse. Masking 60% of proprioception raised task success by up to 48%, which came from reasoning about what the policy was actually keying on rather than from a sweep |
| Failure analysis on frontier models | article-digest.md §3: published pi-0.5 checkpoint drops 96% to 21% on LIBERO-PRO position-swap; conservative full finetuning doubles it to 42%, showing the brittleness is recipe-induced trajectory memorization rather than a representational limit |
| Ownership of a deliverable end to end, solo | Co-founded Merlyn Labs, a 3-person self-funded collective; produced 8th place in Stanford's BEHAVIOR-1K Challenge (trained on 22 of 50 task types, scored across all 50, 10,000+ demonstrations) plus a technical report and a LessWrong analysis, while working full time |
| Strong SWE, Python-first shared infrastructure | cv.md skills: Python, C/C++, PyTorch, JAX. BardSong is a real end-to-end multi-stage pipeline: Groq speech-to-text, Gemini scene extraction, image generation, narrated video; closed alpha with 23 DMs |
| Using coding agents effectively, directing rather than typing | Partial. cv.md shows agent *building* and agent *evaluation* (graph-based agentic system over bank client data, agent provisioning infrastructure, agent eval pipeline). It does not evidence speed at agent-directed application development, which is what their take-home measures |

**Gaps and mitigation**

1. **Agent-directed web-app speed (soft, but it is the actual screen).** The published loop asks for a web app implemented in 3 hours with AI coding tools, followed by a 1-hour code interview. Nothing on the CV is a web app. *Blocker?* No, it is a practiceable skill. *Adjacent experience?* BardSong is a shipped multi-service pipeline and the BMO agent-provisioning infrastructure is real systems work. *Portfolio proof?* None public that is web-shaped. *Mitigation:* before applying or in the days between stage 1 and stage 2, do two timed dry runs of a 3-hour agent-assisted CRUD-plus-auth web app, then explain every design decision out loud. The interview explicitly scores whether you can explain what the agent changed and why, and whether you can spot a solution that "only works by accident." That second part is the candidate's actual strength and should be played loudly.
2. **Domain: misalignment evals for coding agents vs. robotics and finance (soft).** *Blocker?* No. *Adjacent?* Strongly. The transferable core is grader design that resists gaming plus systematic failure discovery, and it has been demonstrated in two unrelated domains, which is itself the argument that it transfers to a third. *Proof point?* The BMO risk-downplaying finding is the single most on-point artifact he has for this req; the LessWrong post frames the BEHAVIOR-1K failure modes for an alignment audience. *Mitigation:* lead with BMO, not with robotics, on this one application. That inverts the usual framing.
3. **No public artifact in the exact shape of the job (soft).** *Mitigation:* the game-based agent-eval side exploration (Twilight Imperium / Catan as test beds for large action spaces with multi-agent negotiation, where deception and betrayal become measurable) is the closest thing and is directly on the misalignment-behavior axis. It is early and should be described as such, but even a rough written writeup would be the strongest single differentiator available before an interview.
4. **Thin JD (informational, not a skill gap).** The posting is three sentences. Everything about the day-to-day, the loop, and the team came from other pages on the company's own site and from press. Treat the specifics in this report as company-level rather than req-level facts.

## C) Level and Positioning Strategy

**JD level vs. natural level.** The title is Research Engineer with no stated years-of-experience floor, no degree gate, and no publication gate. Calibration rule 1 does not fire: this is not a Research Scientist req demanding a PhD and first-author publications. Calibration rule 3 does not fire either: there are no hard basic-qualification numbers to be screened against mechanically. The candidate's mid-senior research-engineer level is inside the band.

**Screen risk, stated plainly.** The résumé screen is the mild risk here; the take-home is the real one.

- *Résumé stage (low to moderate).* The application is resume-only, two minutes, no cover letter field. That means the resume alone carries the whole argument, and the recruiter reading it is optimizing for "can this person produce high-quality work quickly." A robotics-forward resume reads as a domain mismatch for an alignment-evals req at a coding-agent company. A resume that opens with misalignment detection at scale in production reads as an obvious yes. The tailoring decision matters more here than at a company with a cover-letter field, because there is no other channel.
- *Stage 2 take-home (moderate to high, and this is where the process actually filters).* A 3-hour web-app build under time pressure, judged partly on agent-direction fluency, is not the candidate's home turf, and the company says outright that it redesigned the loop to weight "realistic engineering output" over recall. Being excellent at eval design will not rescue a slow, half-finished app. Conversely, the 1-hour follow-up call is heavily weighted toward understanding your own code and noticing brittleness, which is a strength. Net: prepare for stage 2 as if it were the whole interview, because functionally it is.
- *Attainability read (calibration rule 7).* Compared to the frontier-lab cold résumé screens that produced the three rejections, this is a materially better bet: ~54 people, ~10 open reqs, an explicitly fast loop with same-week offers, a published process, and a take-home as the primary filter. It belongs in the "assessment-first" tier that rule 7(a) ranks highest, and it should not be crowded out by a higher-scoring marquee-lab req.

**Selling seniority without inflation.** The line to hold: *"I build evaluations that catch models behaving badly in ways nobody had noticed. At BMO's AI Centre of Excellence I built evaluation harnesses over hundreds of synthesized inputs and caught an agentic tool serving over $200B in AUM systematically downplaying investment risk; the behaviour was invisible at anecdotal scale. At Merlyn Labs, the research collective I co-founded, I build VLM judges that turn rollouts into dense rewards that are difficult to game."* Then the failure-finding record: proprioceptive collapse, and the pi-0.5 recipe result. No title inflation is required, and none should be added. The BMO greeter robot stays off this application entirely.

**If downleveled.** Title is not the lever at this company; comp is posted as a band and the work is task-output-measured. If offered the bottom of the $300K–$400K band, negotiate on the band position and the bonus structure rather than on title, using the profile's script. Do not trade comp for a title at a 54-person company mid-acquisition-talks.

## D) Compensation and Demand

**Company type classification:** Growth-stage startup / VC-backed startup. Confidence high: Mechanize, Inc., founded April 2025 by three named ex-Epoch AI researchers (Tamay Besiroglu, Matthew Barnett, Ege Erdil), $9.1M seed at a $500M post-money valuation with named investors (Nat Friedman, Daniel Gross, Patrick Collison), ~35-54 employees, frontier labs as customers.

| Component | Reading |
|-----------|---------|
| **Advertised range** | "$300K–$400K salary · equity · bonus · in person · San Francisco" (verbatim from the apply page) |
| **Likely guaranteed base** | $300K–$400K. The word used is "salary," not OTE, not "up to," not "total package," and the same band is posted publicly across multiple reqs. This reads as real fixed base |
| **Variable / conditional cash** | Bonus, unspecified. Report 015 recorded the company's own framing that "top performers can earn more from bonuses than salary" for the SWE role. Bonus is explicitly tied to measured task output, so treat it as genuinely variable |
| **Expected stable cash** | $300K–$400K USD base, pre-tax, before any bonus |
| **Non-cash** | Equity in a company reportedly in $1.5B+ hire-and-license talks with Google. Note the structure: a hire-and-license deal is not an acquisition, and it does not automatically convert common equity into cash the way an acquisition would. Ask directly |
| **Reliability tier** | **High** for base. Public, consistent across reqs, stated as salary. Medium for the bonus, unknown for equity outcome given the corporate situation |

**Market context.** The band matches the profile's US frontier-lab target of $300K-500K+ TC for a Research Engineer at the base level alone, before bonus and equity. RL-environment and eval vendors have been a hot, well-funded category through 2025-2026, and Mechanize deliberately pays above data-vendor market to pull elite engineers. Demand trend: strongly positive, with the caveat below.

**Demand caveat that cuts both ways.** In August 2026, multiple outlets reported Google in talks to pay over $1.5B to hire Mechanize's model-evaluation staff and license its technology, following the Windsurf template rather than a full acquisition. Both companies declined to comment. For *this* req specifically, the staff group named in those reports is the model-evaluation group, which is where an alignment-evals research engineer would sit.

- Upside: joining shortly before such a deal can be a fast path into a frontier lab's eval organization at frontier-lab comp, and the company is clearly hiring rather than freezing.
- Downside: hire-and-license deals routinely leave behind a hollowed-out entity, common shareholders often do badly, and a req posted before a deal can be repriced or dissolved after one. Treat any equity narrative offered in the loop as unverified.
- Verification questions, all fair to ask a recruiter at stage 1: (1) Is this req affected by the reported Google discussions? (2) What is the bonus structure and what has it actually paid out over the last two quarters? (3) What is the equity type, current strike, and what happens to it in a licensing-plus-hiring transaction as opposed to an acquisition? (4) How many people are on the alignment-evals side today, and is this a new function or an existing one? (5) Is the interview loop described on the software-engineer page the same one used for this req?

**Comp score: 5/5.** Base alone clears the stated target range; the risk in this block is about equity certainty, not about pay level.

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|------------------|-----|
| 1 | Professional Summary | Leads with BMO plus Merlyn breadth, "from GenAI bias detection to sim-to-real" | Lead with misalignment evaluation: evaluation harnesses that surface model behaviour nobody had measured, then the frontier-research thread in one clause | This req is one sentence long and that sentence is about catching models going off the rails. The summary should answer it directly |
| 2 | BMO bullets | Bias-detection bullet first, eval-pipeline bullet second | Keep that order and keep both at the top of the whole CV, ahead of robotics | Per _profile.md rule 3 the BMO order is bias detection, then eval pipeline, then agentic system; per delta D007 a strong off-domain bullet outranks a weak on-domain one, and here the BMO bullets are the *on*-domain ones |
| 3 | Merlyn bullets | VLM judges bullet sits third | Promote the "VLM judges ... difficult to game" bullet to first Merlyn bullet; keep RLinf and the pi-0.5 recipe finding; hold the line at 1-2 Merlyn items in the summary per rule 4 | Grader-gaming resistance is the core competency of the role |
| 4 | Research and Projects | BEHAVIOR-1K first, framed as a robotics competition result | Keep BEHAVIOR-1K but frame the bullet around the *failure-mode discovery* (proprioceptive collapse, 60% masking, up to +48%) rather than the placement alone | Reframes a robotics result as evidence of finding hidden failure modes, which is the transferable claim |
| 5 | Core Competencies line | General ML and robotics mix | One line, high signal, CV-backed: agent evaluation, grader design, reward modelling, RL environments, LLM agents, Python | Rule 11c: exactly one line, nothing that would not survive a "tell me about that" follow-up. No RLHF/RLAIF |
| 6 | Lower-relevance content | Prosthetic and McMaster team items compete for space | Cut whole low-relevance items before thinning any surviving role; keep Epineuron's two strongest concrete bullets intact if it stays | Rules 1 and 12: one full page, no gutted one-line roles |
| 7 | Header | Standard | One line only, location exactly "Toronto, Canada"; no visa text in the header | Rule 11b. TN status belongs in the form fields, and this form asks for it explicitly |
| 8 | Application form | n/a | "Authorized to work in the United States?" = Yes. "Which visa categories are you eligible for?" = **TN**. The form lists TN by name, so no free-text explainer is needed or wanted | Standing form policy plus delta D005: state it flat, no border/petition explainer |
| 9 | Profile framing (LinkedIn) | Robotics-forward | Headline emphasising evaluation of model behaviour; pin the LessWrong analysis rather than the BEHAVIOR report for this audience | _profile.md: LessWrong is the alignment-facing artifact |

**Do not claim, on this application:** any venue, acceptance, or "under review" status for the Recalibrating VLA Baselines paper (CoRL 2026 rejected, unpublished, not on arXiv); any US work authorization beyond TN eligibility; the BMO greeter robot as a credential; the game-eval side project as a finished artifact.

## F) Interview Plan

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|----------------|--------------|---|---|---|---|------------|
| 1 | Evals that catch misaligned behaviour | BMO risk-downplaying discovery | Agentic tool serving $200B+ AUM in wealth management, outputs reviewed anecdotally | Determine whether the tool was systematically misaligned, not just occasionally wrong | Built evaluation harnesses and test setups over hundreds of synthesized inputs | Found a systematic bias to downplay investment risk that was invisible at small scale | The failure was not a bug in any single output; it only existed as a distribution. That is why the eval had to be built before the finding could exist |
| 2 | Graders that resist gaming | VLM judges at Merlyn Labs | Rollout quality needed a dense reward signal, and naive judges are trivially satisfiable | Build judges usable as RL reward without being farmable | Context-dependent VLM scoring of rollouts into dense rewards | Rewards that are difficult to game | A judge you can satisfy without doing the task actively teaches the wrong policy, so grader QA is the work, not the overhead |
| 3 | Grader robustness and determinism | Deterministic BMO eval pipeline | Non-deterministic spot checks could not be compared across model versions | Make results reproducible and comparable | Deterministic pipeline with synthesized inputs at scale | Misaligned outputs detectable at scale and re-testable | Determinism is what turns an anecdote into a regression test |
| 4 | Intuition for what models can and cannot do | Proprioceptive collapse (BEHAVIOR-1K) | VLA task success plateaued and the cause was unclear | Find what the policy was actually keying on | Masked 60% of proprioception rather than adding capacity | Task success improved by up to 48%; contributed to 8th place, Standard Track | The model was cheating on an input that correlated with success. Recognising that is the same skill as designing a task a model cannot shortcut |
| 5 | Rigour against a published baseline | pi-0.5 on LIBERO-PRO | A published checkpoint fell from 96% on standard LIBERO to 21% on position-swap, read by the field as a generalization limit | Test whether the limit was real | Conservative full finetuning (batch 64, LR 1e-5); tested and rejected LoRA and frozen video-diffusion priors as rival explanations | Position-swap success doubled to 42% with no architectural change; brittleness is recipe-induced trajectory memorization | Most reported gains on that benchmark are partly compensating for a miscalibrated baseline. Paper written, submitted to CoRL 2026 and rejected, unpublished |
| 6 | Theory of mind about how a model reads a task | Chunked execution vs. temporal ensembling | Two plausible execution strategies for the same policy | Determine which matched how the architecture actually handles time | Compared chunked execution against temporal ensembling | Chunked execution won by roughly 3x, revealing the architectures lacked temporal awareness | Designing for how the model actually processes the input, rather than how it ought to, is the whole game in task design |
| 7 | Solo ownership of a deliverable end to end | Co-founding Merlyn Labs | No lab, no funding, no compute budget, full-time job | Produce real research output anyway | 3-person self-funded collective, nights and weekends | 8th place in Stanford's BEHAVIOR-1K Challenge (trained on 22 of 50 task types, scored across all 50, 10,000+ demonstrations), technical report, LessWrong analysis, RLinf contribution merged | The single-owner task model at Mechanize is the operating model already in use, minus the compute constraint |
| 8 | Shipping working software quickly | BardSong | No tool existed for automated narration of tabletop sessions | Build the whole pipeline | Groq speech-to-text, Gemini scene extraction, image generation, narrated video, plus a fine-tuned LLM for narrative coherence | Closed alpha with 23 DMs | Evidence of shipping a multi-service system end to end, which is the closest analogue to the take-home |
| 9 | Interest in misalignment behaviours specifically | Game-based agent evals (in progress, early) | Standard agent benchmarks have small action spaces and no adversaries | Explore evals where deception and betrayal are measurable strategies | Building test beds on large-action-space negotiation games (Twilight Imperium, Catan) | Early, no shipped artifact yet | Present as an in-progress exploration, never as a finished project |
| 10 | Working under real engineering constraint | Epineuron PeriPulse | FDA Breakthrough-designated device heading into multi-national clinical trials | Meet clinical validation and power requirements | PCB design and assembly, IEC 60601-1 and ISO 13485 validation protocols, oscilloscope and power-analyzer optimization, COMSOL nerve-field modelling | 900% battery-life improvement; field model set electrode diameter | Use only if asked about engineering depth or regulated environments; it is the least on-domain item here |

**Recommended case study:** the BMO risk-downplaying discovery, told as an eval-design story rather than a finding story. It is the only artifact he has where a production system was misaligned, the misalignment was invisible one output at a time, and an eval he built made it visible. That is a one-to-one description of this job.

**Likely red-flag questions and how to answer:**

1. *"Your background is robotics. Why alignment evals for coding agents?"* Do not concede the premise. The eval work is the through-line and it has already been demonstrated in two unrelated domains: a regulated bank and frontier VLA research. Domain three is a substrate change, not a skill change.
2. *"You have not built coding-agent evals before."* True, say so, then point at the transferable mechanics: grader determinism, resistance to gaming, failure-mode discovery, and the QA loop that the company itself says dominates the work.
3. *"How do you feel about our mission of automating all work?"* This is the values tension flagged in report 015 and it has not gone away. Have a considered, honest answer prepared before stage 1, not improvised in it. Note the genuine argument available here: evals that catch dishonesty, sycophancy, and unsafe actions are safety work whoever pays for them.
4. *"Why leave a bank and your own lab?"* Convergence: the two threads meet at rigorous, hard-to-game evaluation, and this req is that as a full-time job.
5. *Expect a speed question or a live probe of agent-directed development.* Prepare by doing it, not by talking about it.
6. *Question to ask them:* how the reported Google discussions affect this team and this req. Asking is reasonable and reads as commercial awareness, not as distrust.

## G) Posting Legitimacy

**Assessment: High Confidence** that the posting and company are real. Freshness and apply-button state are **unverified (batch mode)**: Playwright is unavailable, so the page was read over HTTP rather than rendered.

| Signal | Reading |
|--------|---------|
| Company real and documented | Yes. Mechanize, Inc., founded April 2025 by three named ex-Epoch AI researchers; $9.1M seed at $500M post-money with named investors; extensive independent press coverage through 2026 |
| Posting reachable and specific | Yes. HTTP 200 today; the page carries a real role description, a posted comp band, a location, and a functioning application form with named fields |
| Comp transparency | High. $300K–$400K salary plus equity plus bonus stated publicly, consistent across multiple reqs on the same apply page |
| JD specificity | Low in volume, high in clarity. Three sentences, but they are concrete and non-boilerplate. The company compensates with unusually detailed public pages on the interview loop and the day-to-day |
| Boilerplate ratio | Very low. No stock "fast-paced environment" filler, no unpaid-trial language, no urgency manipulation |
| Application friction | Minimal and legitimate: name, email, resume, work authorization, visa category. No fee, no personal financial data, no off-platform messaging |
| Prior appearances in scan-history | This URL first appeared 2026-09-02 (today). The sibling SWE URL appeared 2026-07-05. No repost churn |
| Hiring / freeze / layoff signals | Actively hiring, roughly 10 open roles, headcount reported growing from ~35 to ~54 across 2026 |
| Corporate-event signal | Reported Google talks (August 2026) to hire the model-evaluation staff and license the technology for $1.5B+, unconfirmed by either party. Not a legitimacy problem; it is a due-diligence item, covered in Block D |
| Suspicious language | None |
| Freshness / apply-button state | Unverified (batch mode). Run `node check-liveness.mjs` before applying |

**Values note, carried forward from report 015 and unchanged:** Mechanize's public mission is the full automation of work, which drew criticism from parts of the AI-safety community at launch. For a candidate whose second axis is alignment, that tension is real and worth resolving before stage 1 rather than during it. It does not lower the fit or comp score, and the work in *this* req is more safety-adjacent than the 015 req was.

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
| Red flags | -0.2 (reported Google hire-and-license talks affecting the model-evaluation staff; unresolved mission/values tension) |
| **Global** | **4.4/5** |

**Decision: Apply.** Higher than report 015's 4.3 on a closer-fitting req, and it ranks well on calibration rule 7: a two-minute resume-only application, a published loop with a take-home at stage 2, and a 54-person company are all the opposite of the frontier-lab cold résumé screens that produced the three rejections. The Google-talks uncertainty is priced in as the -0.2 and as stage 1 questions, not as a reason to skip.

## Extracted Keywords

alignment evals, misaligned model behavior, sycophancy, dishonesty, unsafe actions, model evaluation, automated graders, grader determinism, reward hacking, hard-to-game rewards, VLM judges, agent evaluation, eval pipeline, failure analysis, frontier models, coding agents, RL environments, task design, quality assurance, Python, research engineer
