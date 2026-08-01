# Evaluation: Google DeepMind — Research Engineer, AGI Safety and Alignment (ASAT)

**Date:** 2026-08-01
**URL:** https://www.google.com/about/careers/applications/jobs/results/95635593379095238?e=72477625
**Via:** — (direct; surfaced via @NeelNanda5 / @nikitasaxena02 on X → gdmalignment.substack.com hiring post, 2026-07-31)
**Archetype:** AI Platform / LLMOps (evals, monitoring, control) × Agentic / Automation (agent control, oversight)
**Score:** 4.3/5
**Legitimacy:** High Confidence
**Work Auth:** ➖ Not needed
**PDF:** `output/cv-candidate-gdm-asat-re-2026-08-01.pdf` (generated 2026-08-01, 916/940.8px, 1 page)

---

## Machine Summary

```yaml
company: "Google DeepMind"
role: "Research Engineer, AGI Safety and Alignment"
score: 4.3
legitimacy_tier: "High Confidence"
archetype: "AI Platform / LLMOps × Agentic"
final_decision: "Apply"
hard_stops: []
soft_gaps:
  - "Minimum qualification is 3 years software/ML engineering or ML research; strict wall-clock count is ~1 year post-degree (BMO Sep 2025, Merlyn Aug 2025), ~2.3 years including the 16-month Epineuron co-op"
  - "No frontier-scale LLM post-training experience (preferred qual names SFT and RLHF); eval and RL work is at VLA and agent scale, not Gemini scale"
  - "No legible AGI or ASI extreme-risk work on the CV; ASAT states this must be explained explicitly by candidates pivoting in"
  - "No interpretability or CoT-monitorability background; two of the named growth areas"
top_strengths:
  - "Alignment Evaluations subteam is a direct content match: found systematic risk-downplaying misalignment in a $200B+ AUM agentic tool via a deterministic eval harness over hundreds of synthesized inputs"
  - "Hard-to-game reward design is the stated Merlyn Labs workstream (VLM judges scoring rollouts into dense, gameable-resistant RL rewards), which maps onto amplified oversight and reward hacking"
  - "Track record of finding failure modes others published past: proprioceptive collapse, and the recipe-induced pi-0.5 LIBERO-PRO collapse recalibration"
  - "Research Engineer title with no PhD or first-author publication gate, unlike report 007"
risk_level: "Medium"
confidence: "High"
next_action: "Write the 2-paragraph cover note in ASAT's requested blunt style (fit + why), then apply to the US req"
work_auth: "not_needed"
discard_reasons: []
via: null
company_confidential: false
advertised_comp: "US: $174000 - $253000 (USD) + 15% bonus target + equity + benefits"
risk_summary:
  legitimacy: "high_confidence"
  classification: "clear"
  culture: "pass"
  interview_redflags: "not_evaluated"
  ai_infra: "consistent"
```

---

## A) Role Summary

| Field | Value |
|-------|-------|
| Archetype | AI Platform / LLMOps (evals, monitoring, control) × Agentic (agent control, oversight) |
| Domain | Frontier-model safety research: alignment, control, interpretability, evaluations |
| Function | Build + research (ASAT frames the role as "member of technical staff", RE or RS flavour) |
| Seniority | Min 3 YoE. Base band $174K-$253K spans Google L4 (mid) into L5 (senior) |
| Remote | On-site / hybrid. San Francisco, Mountain View, or New York (US req). London on the UK req |
| Team size | Not stated. ASAT is a multi-subteam org under Rohin Shah with roughly 7 named workstreams |
| Culture screen | **Pass.** `config/profile.yml` sets no `culture_screen.require`, so this is qualitative. Positive evidence is unusually concrete: published research agenda, published FAQ on reservations, explicit permission for external advising, alumni tracked into other safety orgs, "any team member can raise an objection and they will be listened to", coding agents allowed in every engineering interview |
| TL;DR | The alignment-evals half of Shayan's North Star, at a frontier lab, on a Research Engineer title with no PhD gate, at a comp band that clears his target. The gate is a 3-year minimum-experience line and a mission-alignment screen he has to argue for rather than point at. |

### Work-authorization check

➖ **Not needed.** Role is US-located; profile records Canadian citizen, TN-eligible, no H-1B sponsorship required. The JD says nothing about sponsorship, which is neutral. Score-neutral per the location policy.

## B) Match with CV

| JD requirement | CV evidence | Verdict |
|---|---|---|
| "Research new alignment methods, studying alignment failures" | "Uncovered systematic bias to downplay investment risk in a GenAI tool serving $200B+ AUM wealth management" — a real misalignment finding in a deployed system, not a benchmark | Strong |
| "Assess the ways in which a given model might be imperfectly aligned" (JD "About the job") | "Built a deterministic agent eval pipeline using hundreds of synthesized inputs to detect misaligned outputs at scale" | Strong |
| Alignment Evaluations subteam: honeypot evals, automated auditing, deception detection | Same two BMO bullets plus "Designing evals for LLM agents that retrieve and reason over commercial banking and insurance policy" | Strong |
| Amplified oversight / reward-hacking resistance | "Developing VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game" (Merlyn Labs) | Strong, at smaller scale |
| "3 years of experience in software development, ML engineering, or ML research" | BMO Sep 2025-present, Merlyn Aug 2025-present (concurrent, ~1 yr), Epineuron co-op May 2021-Aug 2022 (16 mo, embedded/biomedical) | **Near miss** |
| "Experience working with research teams" | Merlyn Labs (3-person collective, co-founded), BEHAVIOR-1K team submission, BMO AI Centre of Excellence | Clear |
| "Experience with training large models (e.g., supervised fine-tuning, RLHF)" *(preferred)* | Conservative full-finetuning study on pi-0.5 (batch 64, LR 1e-5, 8k-27k steps); RL environments at BMO; RLinf flow-matching VLA integration. Real finetuning and RL work, but VLA scale, not LLM-frontier scale, and no RLHF | Partial |
| "Experience conducting or contributing to applied research to improve the safety and alignment of frontier AI systems" *(preferred)* | LessWrong post framing BEHAVIOR-1K failure modes as model organisms; unpublished LIBERO-PRO recalibration paper; BMO bias work | Partial. Adjacent and real, but robotics-flavoured and not framed as x-risk work |
| Mission alignment with AGI/ASI extreme risk | Nothing on the CV addresses this. ASAT explicitly says this is the hardest thing to read off a CV | **Gap, and it is the one they warn about** |
| Interpretability, CoT monitorability, model forensics | No evidence in cv.md or article-digest.md | Gap, non-blocking (subteam-specific) |

### Gaps and mitigation

1. **3-year minimum (semi-hard, mitigable).** Blocker type: recruiter-screen risk, not capability. Strict count is ~1 year of ML engineering; ~2.3 years of engineering including the Epineuron co-op. Mitigation: ASAT screens CVs itself ("We then screen CVs and people's notes... it really helps us if you highlight things in your CV") rather than routing through a generic Google recruiter filter, which is exactly the "team norms make it waivable" justification the calibration rules demand. The min-qual line is a Google-req formality attached to a team-run pipeline. Standing YoE answer stays 2-4 on any dropdown. Do not raise it, do not apologise for it.
2. **No legible AGI/x-risk experience (soft, but it is the stated screen).** Mitigation is the cover note, and ASAT tells you exactly how to write it: one paragraph on fit, one on why you want to work with them, blunt language, bullets fine, "real reasons get much better results for this than corporate waffle". This is the single highest-leverage artefact in the whole application. Not the CV, the note.
3. **No frontier-scale post-training (soft).** Mitigation: do not claim it. Reframe around what transfers: eval design under adversarial pressure, reward functions built to resist gaming, and finding that a published baseline was miscalibrated. The pi-0.5 recalibration is a "the field's baseline was wrong and I proved it" story, which is exactly ASAT's stated "prefer knowledge over advocacy" posture.
4. **Robotics thread is orthogonal (neutral, not a gap).** ASAT does not do embodied AI. Frame Merlyn as the place the eval and reward-design instinct was sharpened, not as a robotics credential.

## C) Level and Strategy

**Level detected:** The $174K-$253K base band straddles Google L4 (mid, base ~$165K-$190K) and L5 (senior, base ~$210K-$250K). ASAT's "member of technical staff" framing plus its stated flexibility on RE-vs-RS suggests level is set at team-match, not at req time.

**Natural level:** L4. With ~1 year post-degree and no frontier-lab tenure, L5 is not a realistic ask on this application. L4 at the top of the band is.

**Sell senior without lying:**
- Lead with ownership, not tenure: found a production misalignment nobody had caught, built the harness that made it reproducible, then scaled it. That is L5 behaviour in an L4-tenure body.
- Use the co-founder fact once, flat: three-person collective, nights and weekends, 8th at BEHAVIOR-1K, a merged RLinf contribution. Independent output with no institutional support reads as agency, which is one of ASAT's three named criteria.
- Show the "prefer knowledge over advocacy" instinct explicitly: the pi-0.5 work is a refutation of a published result, run against two rival hypotheses (LoRA, frozen visual priors) and bounded in both directions. That is the temperament they say they select for.
- Do not inflate. "M.Eng in AI & Robotics, expected April 2027", never "candidate". Never claim a venue for the paper.

**If downlevelled:** L4 at GDM ASAT at $174K-$200K base + 15% + equity is roughly $300K-$360K TC, which sits inside the target range. Accept an L4 offer if the band lands there; negotiate on equity refresh and a 12-month level review rather than on title.

## D) Comp and Demand

- **Company type:** Public big tech / mature tech (Alphabet subsidiary, structured L3-L8 levelling shared with Google SWE since the 2023 Brain-DeepMind merger).
- **Compensation reliability:** **High.** The JD states a base range explicitly, separates the 15% bonus target, and names equity separately. Alphabet publishes structured bands and is subject to US pay-transparency law.

| Source | Figure | Note |
|---|---|---|
| Advertised (JD) | US: $174000 - $253000 (USD) + 15% bonus target + equity + benefits | JD, verbatim |
| Levels.fyi / aggregators, Google L4 | ~$280K-$360K TC (base ~$165K) | [Levels.fyi](https://www.levels.fyi/companies/google/salaries/software-engineer/title/research-scientist), [CTAIO](https://ctaio.dev/en/salary/google-deepmind-salary/) |
| Levels.fyi / aggregators, Google L5 | ~$475K-$625K TC (base ~$220K) | Same |
| DeepMind RE band commentary | $300K-$500K TC typical, Google RSUs on 4-year vest | [JobsByCulture](https://jobsbyculture.com/blog/deepmind-compensation-2026) |

**Component split:**
- Advertised range: $174K-$253K base
- Likely guaranteed base: the full advertised figure is base. This is the reliable part.
- Variable cash: 15% bonus target (target, not guaranteed)
- Expected stable cash: base + most of bonus, ~$200K-$290K at the midpoint
- Non-cash: Alphabet GSUs, 4-year vest, discretionary and board-approved per the JD's own equity disclaimer; Google benefits

**Read against target:** profile target is $300K-$500K+ TC at US frontier labs. An L4 offer at the band midpoint lands ~$300K-$360K TC. That clears the floor and sits at the low end of the target. An L5 outcome would clear it comfortably. Comp is not the reason to skip this; it is one of the reasons to prioritise it.

**Demand trend:** Frontier-lab safety/alignment engineering is one of the few AI subfields hiring counter-cyclically. Alphabet ran rolling cuts in 2026 across cloud, security, and Platforms & Devices, while headcount still grew ~11,800 year over year and DeepMind's research org was not in the cut scope ([KORE1](https://www.kore1.com/google-layoffs-2026/), [JobsByCulture](https://jobsbyculture.com/blog/deepmind-layoffs-2026)).

**HR verification questions:**
1. What level is this req mapped to, and is level set before or at team-match?
2. Is the $174K-$253K range the base only, or does it fold in the bonus target?
3. What is the initial GSU grant value and vest schedule, and what does a typical refresh look like at this level?
4. Is the 15% bonus target company-performance-gated, individual-rated, or both?
5. Which subteam would this req land in, and is subteam chosen at team-match?
6. Is relocation support offered for a TN-entry candidate moving from Toronto?

## E) Customization Plan

| # | Section | Current status | Proposed change | Why |
|---|---|---|---|---|
| 1 | Professional Summary | Leads "AI Research Engineer at BMO's AI Centre of Excellence and Co-Founder of Merlyn Labs... LLM/agent evaluation, VLA models, RL, robotics" | Lead with alignment evaluation and misalignment detection in deployed agentic systems; keep VLA as the second clause, not the first | ASAT does not do embodied AI. The eval thread is the whole pitch |
| 2 | BMO bullets | Bias finding first, eval pipeline second | Keep that order, but reframe bullet 2 as the harness that produced the finding, per delta D011 | The interesting claim is that the behaviour was invisible until scaled, not that a bias existed |
| 3 | Merlyn bullets | pi-0.5 recalibration, conservative finetuning, VLM judges, RLinf, AlohaMini | Promote the VLM-judge bullet to the top of Merlyn; keep pi-0.5 recalibration second; cut AlohaMini sim2real | Hard-to-game reward design maps to amplified oversight; sim2real does not map to anything ASAT does |
| 4 | Core competencies line | General ML/robotics mix | Rebuild around: alignment evaluation, adversarial eval design, reward modelling, LLM agents, RL, PyTorch/JAX | One line, all CV-backed, no unbacked terms |
| 5 | BEHAVIOR-1K project | Framed as a robotics challenge result | Keep the entry, but lead the bullet with the failure-mode discovery (proprioceptive collapse) and link the LessWrong post | The LessWrong framing is the model-organism view, which is the alignment-legible version of the same work |
| 6 | Cover note (separate artefact, uploaded to the `cover letter` field) | Does not exist | Two paragraphs. Para 1: fit, in bullets if useful. Para 2: why ASAT specifically, and why the pivot into x-risk work | ASAT names this as a screening input and tells you the register to use |

**LinkedIn (top 5):** headline to lead with alignment/evals rather than robotics; About paragraph rewritten around finding failure modes in deployed systems; pin the LessWrong post; add "Alignment Evaluation" and "Reward Modelling" as skills (both CV-backed); note TN eligibility in the About, not the headline.

## F) Interview Plan

ASAT's stated process: CV + note screen → short screening interview (no leetcode, deliberately not practice-rewarding) → remote onsite, ~4 interviews, **coding agents allowed and effectively expected** → team-matching for a very small number. Two months minimum wall-clock.

| # | JD requirement | STAR+R story | S | T | A | R | Reflection |
|---|---|---|---|---|---|---|---|
| 1 | Studying alignment failures | BMO risk-downplaying discovery | GenAI tool live across a $200B+ AUM wealth business | Establish whether anecdotal odd outputs were systematic | Built harnesses and test setups, scaled to hundreds of synthesized inputs | Systematic downplaying of investment risk, invisible at anecdote scale | Misalignment that only appears above a sample-size threshold is the norm, not the exception. Any eval that runs a dozen cases is measuring nothing |
| 2 | Assessing imperfect alignment | Deterministic agent eval pipeline | Needed repeatable detection, not a one-off audit | Make the failure reproducible | Deterministic pipeline over synthesized inputs | Detection at scale rather than by anecdote | Determinism is what makes a finding survive contact with a sceptical reviewer |
| 3 | Reward hacking / amplified oversight | VLM judges at Merlyn | Sparse rewards on long-horizon manipulation | Dense reward without a gameable proxy | VLM judges scoring rollouts into context-dependent dense rewards designed to resist gaming | Usable dense signal | Most of the work is in what the judge *refuses* to reward. Design against the policy, not for the task |
| 4 | Prefer knowledge over advocacy | pi-0.5 LIBERO-PRO recalibration | Published checkpoint collapsed 96% → 21% on position-swap | Establish whether this was architectural or recipe-induced | Conservative FFT (batch 64, LR 1e-5); tested and rejected LoRA (15-21%) and frozen video-diffusion priors (42% → 35%) | Doubled to 42%; brittleness shown recipe-induced, and bounded (too-conservative drops to 26%) | The field was comparing against a miscalibrated baseline. Refuting a result cleanly is worth more than proposing a new method badly |
| 5 | Finding what others missed | Proprioceptive collapse, BEHAVIOR-1K | Team submission across 50 scored task types, trained on 22 | Improve success under compute limits | Masked 60% of proprioception | Up to 48% improvement in task success; 8th place | Models exploit the easiest available shortcut. Removing the shortcut is often a bigger win than adding capacity |
| 6 | Agency / self-starting under uncertainty | Founding Merlyn Labs | No funding, no institution, three people, full-time jobs | Produce externally verifiable research | Co-founded a collective, ran the BEHAVIOR submission, merged the RLinf flow-matching integration, wrote the paper | Verifiable results: leaderboard placement, merged PR, public writeups | Verifiability is the whole point when you have no institutional signal to borrow |
| 7 | Teamwork | RLinf open-source contribution | Upstream RL infra had no flow-matching VLA path | Enable RL training on BEHAVIOR-1K in OmniGibson | Built and upstreamed the integration | Merged; usable by others | Working in someone else's codebase to their standard is a different skill from working in your own |
| 8 | Engineering with coding agents | Everything shipped in the last year | Full-time job plus nights-and-weekends research | Ship research output at a cadence a solo researcher cannot | (Answer honestly from actual practice — do not invent an agent workflow you do not run) | — | ASAT states most people who decline to use coding agents will fail their interviews. Be ready to describe your real workflow, and go practise on the harness you actually use |

**Recommended case study:** the pi-0.5 LIBERO-PRO recalibration. It is the strongest demonstration of the temperament ASAT says it selects for: a falsifiable claim, rival hypotheses tested and rejected, a bounded effect, and a conclusion that makes the field's existing numbers less impressive rather than the author's more impressive. Lead with it over BEHAVIOR-1K for this team.

**Red-flag questions and how to answer:**
- *"You have about a year of professional experience."* — Do not apologise. State what shipped in that year, and note the Epineuron co-op and the concurrent research track. Standing answer on YoE dropdowns is 2-4.
- *"What is Merlyn Labs?"* — Use the profile one-liner verbatim. Never imply funding, headcount, or company status.
- *"Is your paper published?"* — "We wrote it and submitted it; it wasn't accepted." Never name a venue. The result stands on its own.
- *"Why do you care about AGI risk?"* — This is the actual screen. Do not manufacture a conversion story. The honest version is available and is stronger: he already spends his time finding the ways deployed systems fail in ways nobody noticed, and got there from the capability side rather than from the discourse. Say that flatly.
- *"Your background is robotics; we do not do robotics."* — Agree immediately. The transferable asset is eval and reward design under adversarial pressure, plus a habit of not trusting published baselines.

## G) Posting Legitimacy

**Assessment: High Confidence**

| Signal | Finding | Weight |
|---|---|---|
| Posting freshness | Hiring post published 2026-07-31; both requisitions linked from it and live on 2026-08-01. Announced same day by the team lead (@NeelNanda5) and a GDM engineer (@nikitasaxena02) | Positive |
| Apply path | Google Careers req page renders full JD, min/preferred quals, comp band, and an active Apply control | Positive |
| Description specificity | Names subteams, techniques (debate, MONA, honeypot evals, CoT monitorability, model forensics), and links a published research agenda (arXiv 2504.01849) and roadmap | Positive |
| Requirements realism | 3 YoE + BSc for a $174K-$253K frontier safety role is internally consistent. No contradictions | Positive |
| Salary transparency | Full band, bonus target, and equity disclosed | Positive |
| Hiring signals | Alphabet ran 2026 cuts in cloud/security/Platforms & Devices; DeepMind research not in scope, headcount up ~11,800 YoY | Neutral to positive |
| Reposting pattern | `scan-history.tsv` has five prior DeepMind postings from 2026-07-06, none matching this req or title. No churn | Positive |
| Named accountability | Written and signed by Seb Farquhar and Rohin Shah, with the team lead publicly attached to the hire | Positive |
| Verification method | ⚠️ Playwright unavailable in this environment. Req page verified by direct HTTP fetch of the live Google Careers page, full JD body recovered including comp band. Stronger than a WebFetch summary, weaker than a browser snapshot | Note |

**Employment classification:** Clear. Standard Google employment, benefits and equity language throughout, no contractor/1099 phrasing.

**AI-buzzword vs infrastructure:** Consistent. The safety claims are backed by published arXiv work and a public roadmap, not by transformation language.

**Context notes:** ASAT signals it is bottlenecked on headcount and hires on a rolling basis; the two-month process length is disclosed up front and is normal for Google. The team explicitly asks candidates not to email individually.

## Risk Summary

| Signal | Status |
|--------|--------|
| Posting legitimacy | ✅ High Confidence |
| Employment classification | ✅ clear |
| Culture screen | ✅ pass |
| Interview red flags | — no interview sessions yet |
| AI claims vs. infrastructure | ✅ consistent |

## Cover Letter Draft

> Draft generated at evaluation time. Complete via `/career-ops cover google-deepmind-asat` to fill in angles, confirm research, and generate the final text.
> ASAT asks for something shorter and blunter than a standard cover letter: one paragraph on fit, one on motivation, bullets welcome. Treat the draft below as raw material for those two paragraphs, not as the letter.
> Gaps flagged below.

---

**Opening** *(placeholder — refine with your own "why this role" angle)*
I am an engineer. Most recently I have been working on evals for LLM agents: finding how, and why, deployed systems fail.

**Profile introduction**
At BMO's AI Centre of Excellence I build evaluation harnesses and test setups for LLM agents in production. On the side I do research at Merlyn Labs, the three-person research collective I co-founded, mostly on reward design and on why published baselines do not hold up. I am a Canadian citizen and TN-eligible, so I do not need sponsorship.

**Key achievements** *(from cv.md, wording preserved)*
- **Uncovered systematic bias to downplay investment risk** in a GenAI tool serving $200B+ AUM wealth management.
- **Built a deterministic agent eval pipeline** using hundreds of synthesized inputs to detect misaligned outputs at scale.
- **Developing VLM judges** that score rollouts into dense, context-dependent RL rewards that are difficult to game.
- **Showed pi-0.5 generalization failures on LIBERO-PRO are recipe-induced overfitting;** conservative finetuning doubled position-swap success, 21% to 42%.

**Why ASAT** *(placeholder — requires your own reasons, and this is the paragraph they actually screen on)*
> To be completed in your own words. ASAT states that mission alignment is the hardest thing to read off a CV, and that candidates without legible x-risk experience must explain the pivot explicitly. Do not manufacture a conversion narrative. The honest route: you already spend your time finding failures nobody noticed in systems already deployed, and you arrived at that from the capability side. Say why the same instinct pointed you at ASAT rather than at a capabilities team, and name which of their published directions you would actually want to work on (alignment evaluations and amplified oversight are the two that match your record).

**Closing**
Happy to talk whenever suits.

---

**Gaps flagged:**
- Minimum qualification is 3 years; strict count is under that. Do not raise it unprompted, do not apologise for it.
- No AGI/ASI x-risk work on the CV. This is the flagged pivot that the second paragraph has to carry.
- No frontier-scale LLM post-training. Do not imply otherwise; the preferred qual is preferred, not required.
- Robotics is the visible half of the CV and ASAT does not do robotics. The note has to make the eval thread the headline within its first sentence.

**JD keywords to mirror:**
alignment, misalignment, AGI safety, frontier models, alignment evaluations, control, monitorability, chain-of-thought, model forensics, interpretability, amplified oversight, red teaming, stress testing, reward hacking, ML engineering, research engineer

---
*Run `/career-ops cover google-deepmind-asat` to complete angles, confirm research, and generate the PDF.*

---

## Keywords extracted

AGI safety, alignment, misalignment, existential risk, frontier models, Gemini, alignment evaluations, honeypot evaluations, scheming propensity, deception detection, AI control, chain-of-thought monitorability, model forensics, interpretability, latent architectures, amplified oversight, debate, MONA, red teaming, stress testing, supervised fine-tuning, RLHF, large model training, research engineer, coding agents, ML research
