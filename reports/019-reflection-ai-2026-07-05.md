# Evaluación: Reflection AI — Member of Technical Staff, Post-Training

**Fecha:** 2026-07-05
**Arquetipo:** ML / LLM Research Engineer (primary) + Alignment / Evals Research Engineer (secondary)
**Score:** 4.1/5
**Legitimacy:** High Confidence
**URL:** https://jobs.ashbyhq.com/reflectionai/13e02dca-e042-4ad0-bbbe-be6b09a98211
**PDF:** not generated — run /career-ops pdf reflection-ai to create on demand
**Batch ID:** 019-reflection-pt

---

## Machine Summary

```yaml
company: "Reflection AI"
role: "Member of Technical Staff - Post-Training"
score: 4.1
legitimacy_tier: "High Confidence"
archetype: "ML / LLM Research Engineer + Alignment / Evals Research Engineer"
final_decision: "Apply"
hard_stops: []
soft_gaps:
  - "No frontier-scale LLM post-training experience — RL/reward work is on VLA/robotics and LLM work is fine-tuning-scale"
  - "Distributed-systems / large-scale training-infra depth not evidenced in CV"
  - "Talent-dense, Nvidia-backed lab (ex-DeepMind founders) — résumé screen bar is high"
top_strengths:
  - "Reward-model design is his literal wheelhouse: VLM judges scoring rollouts into dense, hard-to-game RL rewards"
  - "Owns ambitious research agendas with measurable model gains (BEHAVIOR-1K 8th, 21%→42% finetuning, RLinf infra)"
  - "High-agency startup builder (co-founded Merlyn Labs, ships research fast while full-time)"
risk_level: "Medium"
confidence: "High"
next_action: "Apply via Ashby with RE-framed CV; lead with reward-modeling + RL + hard-to-game-eval work; pursue a DeepMind-adjacent referral to clear the talent-density screen"
```

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| Arquetipo | ML / LLM Research Engineer (primary) + Alignment / Evals (secondary) |
| Domain | Post-training of open foundation models — RL, reward modeling, data generation, inference-time scaling |
| Function | Research + engineering IC (Member of Technical Staff) |
| Seniority | MTS — level-agnostic IC title; no PhD or first-author-pubs requirement stated |
| Remote | On-site, San Francisco (primary); secondary offices London + New York |
| Team size | Small, "talent-dense" — early-stage frontier lab building from the ground up |
| TL;DR | Turn pre-trained models into aligned, general agents via data pipelines, reward models, RL, and inference-time scaling at a Nvidia-backed open-frontier lab founded by ex-DeepMind leads (Misha Laskin, Ioannis Antonoglou). |

**Why this is a strong archetype match:** The role is post-training — the exact intersection of Shayan's two strongest threads. "Develop data generation pipelines, reward models, reinforcement learning algorithms, and inference-time scaling techniques" and "transform powerful pre-trained models into aligned and general agents" maps almost 1:1 to his stated superpower: building VLM judges that turn rollouts into dense, hard-to-game RL rewards. This is not an adjacent role; it is his North Star said back to him — with one caveat (scale/domain, below).

## B) Match con CV

| JD requirement | CV evidence | Strength |
|----------------|-------------|----------|
| "reward models, RL algorithms, inference-time scaling" | "Developing VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game" (Merlyn Labs); "Open-sourced flow-matching VLA integration for RLinf, enabling RL training on BEHAVIOR-1K in OmniGibson" | **Strong** — reward modeling + RL infra are his exact focus |
| "improving model behavior through data, reward modeling, or RL techniques" | "Conservative finetuning doubled position-swap success (21% → 42%)"; "60% proprioception masking improved task success up to 48%" | **Strong** — measurable, technique-driven model improvement |
| "data generation / curation pipelines" | "Built a deterministic agent eval pipeline using hundreds of synthesized inputs" (BMO); "oversampling skill transitions via boundary resampling" (BEHAVIOR) | **Good** — synthetic data + resampling pipelines |
| "owning ambitious research or engineering agendas that led to measurable model improvements" | BEHAVIOR-1K 8th place / Standard Track; LIBERO-PRO overfitting critique w/ proposed baseline; published technical report + LessWrong | **Strong** — self-driven agendas, externally verifiable results |
| "comfortable diving into complex ML codebases and distributed systems" | RLinf open-source contribution (RL infra codebase); LLM fine-tuning (D&D sourcebooks, BardSong pipeline) | **Partial** — codebase-diving yes; distributed/large-scale systems not shown |
| "practical experience with large-scale LLM training" | LLM fine-tuning + VLA training on 10k+ demos; no frontier-scale LLM pretraining/post-training | **Gap** — training is fine-tuning + VLA/robotics-scale, not frontier LLM-scale |
| "aligned and general agents" | Graph-based agentic system over bank data (BMO); agent eval pipeline; hard-to-game reward design | **Strong** — alignment + agents are central to his work |
| "fast-paced, high-agency startup; bias toward action" | Co-founded Merlyn Labs, shipped published research nights/weekends while full-time at BMO | **Strong** — proven high-agency operator |
| "fluid across research and infra boundaries" | Full-stack embodiment PCB→COMSOL→sim→real; research + production GenAI at BMO | **Strong** — research-to-systems range is his identity |

**Gaps & mitigation:**

1. **Large-scale LLM training / post-training experience (soft-to-semi-hard blocker).** His RL and reward work is on VLA/robotics; his LLM training is fine-tuning-scale. Post-training at a frontier LLM lab wants RLHF/RLAIF-at-scale intuition on language models. *Mitigation:* Frame the transferable core honestly — reward-model design, RL reward shaping that resists gaming, and data-pipeline discipline are modality-agnostic skills; his hard-to-game VLM-judge work is directly the "reward modeling" the JD names. Do NOT claim frontier-LLM post-training experience he doesn't have. Position as "reward-modeling/RL researcher crossing into LLM post-training," not "already a frontier LLM post-training engineer."
2. **Distributed-systems / training-infra depth (soft gap).** RLinf shows infra contribution but not multi-node large-model training. *Mitigation:* Lead with the infra he does own (RLinf integration) and frame willingness to go deep; don't overstate.
3. **Talent-density screen bar (screen risk, not a content gap).** Ex-DeepMind founders + Nvidia backing → the résumé filter is severe. *Mitigation:* A DeepMind-adjacent or founder-network referral materially changes the odds here; pursue one before or alongside the cold apply.

## C) Nivel y Estrategia

**Nivel detectado:** Member of Technical Staff — the standard frontier-lab IC title, deliberately level-agnostic. Critically, this is **not** a "Research Scientist" title and states **no PhD or first-author-publication requirement** — so Calibration Rule 1 (PhD/first-author hard stop) does **not** apply here. It sits at Shayan's natural target level (Research Engineer / MTS at a frontier lab).

**Sell senior without lying:**
- "I design reward models that resist gaming — VLM judges that turn rollouts into dense, context-dependent RL rewards" — this is the JD's exact language, and it's true.
- "I own research agendas end-to-end: found proprioceptive collapse as a VLA failure mode, quantified it, shipped the fix (up to 48% task-success gain), and published." — demonstrates the "owns ambitious agenda → measurable improvement" bar directly.
- Founder framing as an asset: "I co-founded a research collective and placed 8th in Stanford's BEHAVIOR-1K Challenge on nights and weekends — high-agency, bias-to-action execution with no institutional resources" maps precisely to "thrive in a fast-paced, high-agency startup."

**If down-leveled / scoped to a narrower post-training niche:** Accept if comp clears target and the RL/reward mandate is real. The upside of learning frontier LLM post-training inside a $8–25B lab is strategically high; a 6-month review clause on scope is reasonable to request.

**Honest bar assessment (per Calibration Rule 4):** The binding filter is not the title or a stated YoE number — it's (a) the "large-scale LLM training" line and (b) talent density. Neither is hand-waved away here. His content fit on reward modeling / RL / evals / agenda-ownership is genuinely top-tier; the LLM-scale-training axis is a real stretch. This is a realistic-to-stretch apply, not a slam dunk — but well above the "discourage" line because the thematic fit is exceptional and the comp tier matches his stated top priority.

## D) Comp y Demanda

| Data point | Value | Source |
|------------|-------|--------|
| Posting comp | **Not disclosed** on the listing ("Top-tier compensation: Salary and equity structured to recognize and retain our talent globally"; stock options for all) | Ashby posting API |
| Company funding | $130M Series A (Mar 2025, ~$545M) → $2B Series B led by Nvidia (Oct 2025, $8B) → reportedly raising at ~$25B (2026) | [TechCrunch](https://techcrunch.com/2025/10/09/reflection-raises-2b-to-be-americas-open-frontier-ai-lab-challenging-deepseek/), [CNBC](https://www.cnbc.com/video/2026/04/23/reflection-ceo-on-ai-race-the-best-open-models-are-coming-from-china.html) |
| Aggregator MTS ranges | Conflicting/unreliable — some scrapes show $90–130K (almost certainly noise), others $225–300K base for senior MTS | [Levels.fyi](https://www.levels.fyi/companies/reflectionai), [Ladders](https://www.theladders.com/job/member-of-technical-staff-post-training-reflection-ai-inc-london-on_83781595) |
| Market context (frontier lab MTS) | $300K–500K+ TC typical for RE/MTS at well-funded frontier labs; equity in a $8–25B lab is high-quality | modes/_profile.md comp targets + peer reports (METR, Figure, Skild in this pipeline) |

**Comp score: 4.5/5.** Undisclosed on the posting, but the company explicitly promises "top-tier compensation" and is one of the best-funded AI labs in existence (Nvidia-led, ex-DeepMind founders). Equity upside at a $8→$25B trajectory is exceptional. The low aggregator numbers are unreliable scraper noise and should be disregarded — verify the real band at recruiter screen. Visa: **sponsorship explicitly offered** ("We sponsor visas... support long-term immigration pathways"), which combined with Shayan's TN-eligibility removes any authorization friction.

**Demand trend:** Post-training / RL / reward-modeling talent is among the hottest niches in the market. Reflection is scaling aggressively (55 open roles on their board; SpaceX GB300 compute deal from Jul 2026). Demand is very high.

## E) Plan de Personalización

**Top 5 CV changes:**

| # | Section | Current | Proposed change | Why |
|---|---------|---------|-----------------|-----|
| 1 | Summary | "LLM/agent evaluation, VLA models, RL, and robotics" | Front-load "post-training, reward modeling, and RL" language; keep robotics second | Mirror the JD's exact framing ("post-training," "reward models," "RL") |
| 2 | Merlyn bullet | "VLM judges that score rollouts into dense... rewards difficult to game" | Elevate to the FIRST research bullet and tag it "reward modeling for RL" | It's the single most JD-aligned line he has |
| 3 | RLinf bullet | "Open-sourced flow-matching VLA integration for RLinf" | Add "RL post-training infrastructure" framing | Signals infra + post-training in one line |
| 4 | BMO bullet | "deterministic agent eval pipeline using hundreds of synthesized inputs" | Reframe as "synthetic data generation + eval pipeline" | Hits "data generation pipelines" requirement |
| 5 | Skills | Current ML/AI list | Add explicit "RLHF/reward modeling, post-training, inference-time scaling" only where truthfully backed by reward-design work; keep honest | ATS keyword coverage for post-training screen |

**Top 5 LinkedIn changes:**
1. Headline: add "Reward modeling · RL · Post-training" alongside robotics/evals.
2. Feature the LessWrong VLA failure-mode post (shows research rigor recruiters can verify).
3. Pin the BEHAVIOR-1K technical report link.
4. About section: one line on "hard-to-game reward design" as a throughline.
5. Open to Work: signal SF/NYC/London relocation openness (all three are Reflection offices).

## F) Plan de Entrevistas

| # | JD requirement | STAR story | S | T | A | R |
|---|----------------|------------|---|---|---|---|
| 1 | Reward modeling that resists gaming | VLM judges for VLA rollouts | Sparse/hackable RL rewards for household tasks | Build dense rewards robust to gaming | Designed context-dependent VLM judges scoring rollouts | Rewards usable for RL that agents couldn't trivially exploit |
| 2 | Measurable model improvement via technique | LIBERO-PRO conservative finetuning | π0.5 failing position-swap generalization | Show it's overfitting, not capability limit | Proposed conservative-finetuning baseline | Position-swap success 21%→42% (doubled) |
| 3 | Owning an ambitious agenda | BEHAVIOR-1K Challenge | Open embodied-AI benchmark, no resources | Place competitively + learn something real | Trained on 10k+ demos across 22 tasks, found proprioceptive collapse | 8th place; masking gave up to 48% task-success gain; published |
| 4 | Data generation pipelines | BMO deterministic eval pipeline | Detect misaligned GenAI outputs at scale | Build repeatable eval over synthetic inputs | Synthesized hundreds of inputs, deterministic pipeline | Uncovered systematic risk-downplaying bias in a $200B+ AUM tool |
| 5 | Diving into complex ML codebases | RLinf contribution | RLinf lacked flow-matching VLA + BEHAVIOR support | Enable RL training on BEHAVIOR-1K in OmniGibson | Integrated flow-matching VLA into RLinf, open-sourced | Merged contribution enabling new RL experiments |
| 6 | Aligned, general agents | BMO graph-based agentic system | Complex multi-hop queries over client data | Answer relational queries reliably | Built graph-based agent system | Handles multi-hop relational queries across bank data |
| 7 | High-agency startup execution | Co-founding Merlyn Labs | No lab, no funding, full-time job | Do real frontier research anyway | Co-founded collective, ran experiments nights/weekends | Published report + LessWrong; externally verifiable results |
| 8 | Temporal / architecture insight | Chunking vs ensembling finding | VLAs underperforming on execution | Diagnose why | Compared chunked execution vs temporal ensembling | Chunked outperformed ensembling 3x — revealed missing temporal awareness |

**Recommended case study:** Lead with the **VLM-judge / hard-to-game reward** work, explicitly framed as "reward modeling for RL post-training." It's the highest-leverage story for this exact role and demonstrates the alignment instinct they're hiring for. Back it with BEHAVIOR-1K for agenda-ownership + measurable results.

**Red-flag questions to expect & how to answer:**
- *"You haven't done large-scale LLM post-training — why you?"* → "My reward-modeling and RL-reward-shaping work is modality-agnostic; the hardest part — designing dense rewards that resist gaming and building the eval to trust them — is exactly what I've done, on VLAs. I'm crossing into LLM post-training, and I ramp fast: I taught myself RLinf and contributed upstream." (Honest, no overclaim.)
- *"Merlyn Labs — is that a company?"* → Use the profile one-liner: "Self-organized research collective, three of us, nights and weekends. 8th in Stanford's BEHAVIOR-1K, published methods, contribute to open-source RL infra." Never imply funding or headcount.

## G) Posting Legitimacy

**Assessment: High Confidence.**

| Signal | Finding | Status |
|--------|---------|--------|
| Listing active | Ashby posting API returns `isListed: true` for this exact job ID | Verified (API) |
| Freshness | Appeared in scan-history.tsv today (2026-07-05), added via websearch | Verified today |
| Description quality | Specific, well-structured, realistic requirements; concrete offer details (parental leave, PTO, meals, visa sponsorship). Low boilerplate. | Strong |
| Company reality | Extensively documented: Nvidia-led $2B round, ex-DeepMind founders, major press coverage | Strong |
| Comp transparency | Not disclosed on posting (US pay-transparency gap for SF/NYC roles is a minor negative, but common) | Neutral |
| Reposting / churn | A sibling "Research Engineer" posting shows `skipped_expired` in scan-history; this Post-Training role is separately active | Neutral (normal role churn) |
| Posting freshness (days/apply-button) | Unverified (batch mode — Playwright unavailable) | Unverified |

**Context notes:** This is a real, active opening at a well-capitalized, heavily-covered frontier lab. The only soft signals are (1) undisclosed comp on the listing and (2) an aggressive burn profile (the reported $150M/month SpaceX compute deal from Jul 2026 implies startup risk typical of a lab racing at this valuation). Neither undermines legitimacy; both are worth weighing as startup risk, not fraud risk.

---

## Keywords extraídas

post-training, reinforcement learning, reward modeling, RLHF, data generation pipelines, inference-time scaling, aligned agents, LLM training, distributed systems, ML fundamentals, model optimization, reward gaming, RL algorithms, foundation models, high-agency, research engineering, VLM judges, eval pipelines, agent behavior, model capability
