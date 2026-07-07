# Evaluation: Google DeepMind — Research Scientist, Multimodal Alignment, Safety, and Fairness

**Date:** 2026-07-05
**Archetype:** Alignment / Evals Research Engineer (primary) — role is titled Research Scientist
**Score:** 3.5/5
**Legitimacy:** High Confidence
**URL:** https://job-boards.greenhouse.io/deepmind/jobs/7680885
**PDF:** not generated — run /career-ops pdf deepmind to create on demand
**Batch ID:** 007-deepmind-alignment

---

## Machine Summary

```yaml
company: "Google DeepMind"
role: "Research Scientist, Multimodal Alignment, Safety, and Fairness"
score: 3.5
legitimacy_tier: "High Confidence"
archetype: "Alignment / Evals Research Engineer"
final_decision: "Research first"
hard_stops:
  - "PhD is a mandatory required qualification; candidate is M.Eng in progress (anticipated 2027), no doctorate"
  - "Required 'strong publication record in top ML conferences (NeurIPS/CVPR/ICML/ICLR/ICCV/ECCV)'; candidate has arXiv preprint + LessWrong + challenge report, not top-tier first-author papers"
soft_gaps:
  - "No large-scale (frontier-scale) VLM training experience — work is at research-collective / single-GPU-cluster scale"
  - "Location is on-site US (Kirkland/MV/NYC); relocation is welcomed but role is not remote"
top_strengths:
  - "Content fit on the preferred quals is near-perfect: multimodal alignment, VLM prototyping/prompting, LLM finetuning with RL, agentic AI, fairness/safety interest, generative AI + RL"
  - "Direct fairness/alignment proof point: found systematic risk-downplaying bias in a $200B+ AUM GenAI tool"
  - "VLM judges designed to resist reward gaming — exactly the 'human oversight of AI systems' problem this team works on"
risk_level: "Medium"
confidence: "High"
next_action: "Pivot to the Google DeepMind Research ENGINEER openings (no PhD gate) already in scan-history — e.g. Multimodal Reasoning, Human Understanding — where the same content fit applies without the Research Scientist credential wall"
```

## A) Role Summary

| Field | Value |
|-------|-------|
| Detected archetype | Alignment / Evals Research Engineer (primary North-Star fit); secondary ML/LLM Research Engineer |
| Domain | Frontier AI — multimodal alignment, safety, inclusion/fairness, human oversight of AI |
| Function | Research Scientist (IC research: generate, implement, rigorously evaluate novel methods; lead projects end-to-end) |
| Seniority | Research Scientist — PhD-track title; roughly DeepMind L4–L5 |
| Remote | On-site US: Kirkland WA / Mountain View CA / NYC. Not remote. Relocation welcomed per candidate policy (TN-eligible). |
| Team size | Not stated; part of Frontier AI unit safety/alignment org |
| TL;DR | The content of this role is the dead center of Shayan's North Star — multimodal alignment, safety, fairness, evals, VLM+RL. But the **title is Research Scientist**, which DeepMind gates on a **PhD + top-conference publication record**. That's a hard credential wall he doesn't clear yet. The right move is to redirect the same fit to DeepMind's **Research Engineer** ladder, which carries identical thematic fit without the PhD gate. |

## B) CV Match

Requirements mapped to exact CV lines:

| JD Requirement | Type | CV Evidence |
|----------------|------|-------------|
| PhD in CS/ML/related | **Required — HARD MISS** | "M.Eng, MIE — AI & Robotics, University of Toronto (Sep 2024 – Apr 2027, anticipated)" — in progress, no doctorate |
| Strong publication record in top ML conferences | **Required — MISS** | LIBERO-PRO critique (arxiv.org/abs/2510.03827), BEHAVIOR-1K technical report, LessWrong analysis — real output, but not NeurIPS/CVPR/ICML/ICLR-class first-author papers |
| Hands-on experience developing multimodal AI models/systems | Required — MATCH | "VLA (vision-language-action) models"; "Open-sourced flow-matching VLA integration for RLinf … BEHAVIOR-1K in OmniGibson"; "Developing VLM judges that score rollouts" |
| Strong Python + deep learning framework experience | Required — MATCH | Skills: "Python, C/C++, PyTorch, JAX, RL, Imitation Learning, LLM Fine-tuning" |
| Independent research: experimental design & analysis | Required — STRONG MATCH | "Showed π0.5 generalization failures … are recipe-induced overfitting"; "Identified proprioceptive collapse … 60% masking improved task success by up to 48%"; "chunked execution outperformed temporal ensembling by 3x" |
| Large-scale VLM expertise | Preferred — PARTIAL | VLA/VLM work is real but at research-collective scale, not frontier training scale |
| VLM prototyping with modern prompting | Preferred — MATCH | "Developing VLM judges that score rollouts into dense, context-dependent RL rewards" |
| LLM finetuning using RL | Preferred — STRONG MATCH | "Conservative finetuning doubled position-swap success (21% → 42%)"; VLM-judge dense RL rewards; RLinf flow-matching integration |
| Agentic AI development | Preferred — STRONG MATCH | "Building a graph-based agentic system answering complex multi-hop relational queries"; "deterministic agent eval pipeline" |
| AI alignment / safety / responsibility / fairness awareness | Preferred — SIGNATURE MATCH | "Uncovered systematic bias to downplay investment risk in a GenAI tool serving $200B+ AUM"; VLM judges "difficult to game" — this is his stated superpower |
| Generative AI + RL familiarity | Preferred — MATCH | BardSong pipeline; RL/imitation learning across BEHAVIOR + Merlyn work |
| Multimodal learning | Preferred — MATCH | VLA models, YOLO+LiDAR grasp planning, speech→scene→image→video BardSong pipeline |

**Gaps + mitigation:**

1. **PhD (HARD BLOCKER for this title).** Not mitigable by framing. DeepMind's Research Scientist track is a doctoral-credential role; the Research Engineer track is the credential-appropriate equivalent with the same research content. *Mitigation: apply to the RE req, not this one.* If he specifically wants THIS team, the only honest path is a referral from someone inside who can champion an exceptional-non-PhD exception — rare, not something to bank on.
2. **Top-conference publication record (blocker, coupled to #1).** His output is legitimate and externally verifiable (BEHAVIOR-1K leaderboard, arXiv, RLinf, LessWrong) but not the "first-author at NeurIPS/ICML" signal RS screening expects. *Mitigation: none short-term; the arXiv LIBERO-PRO work is the closest artifact — lead with it, framed honestly as a preprint/critique, never as a conference paper.*
3. **Frontier-scale VLM training (soft).** He's done VLA/VLM research, not billion-parameter multimodal pretraining. *Mitigation: reframe as "rigorous method + eval work on VLAs" rather than claiming scale he hasn't run.*

## C) Level & Strategy

**Detected level vs. natural level.** The JD level is Research Scientist (PhD-gated, ~L4–L5). Shayan's natural level is **Research Engineer, mid** — strong applied research output, production GenAI at BMO, published independent research, but pre-doctorate. The mismatch here is not seniority, it's **track**: RS vs RE. He is well-matched to RE and mismatched to RS purely on the credential gate.

**"Sell senior without lying" — does not apply cleanly here.** You cannot narrate a PhD you don't have. What you CAN do, if pursuing DeepMind broadly: position as a Research Engineer whose independent output already looks like a junior scientist's — co-founded a lab, placed 8th in Stanford BEHAVIOR-1K, shipped an open-source RL infra contribution, and found a real alignment failure in a $200B AUM production system. That's a strong RE story; it is not an RS-with-PhD story.

**"If downleveled" plan — inverted here.** The move isn't to accept a downlevel; it's to **apply to the correctly-tracked role**. DeepMind's Research Engineer postings (several live in scan-history: Multimodal Reasoning for Information Literacy, Human Understanding, Materials Science) carry the same alignment/multimodal content without requiring a doctorate. That's where the effort should go. If he still wants this exact team, the realistic route is an internal referral + the arXiv/LessWrong body of work as the "publication-adjacent" evidence.

## D) Comp & Demand

Posted **US base range: $147,000–$211,000 USD** + bonus + equity (GSUs) + benefits. GSUs are liquid Alphabet (GOOG) shares — no lock-up, real value at grant.

| Data point | Value | Source |
|-----------|-------|--------|
| Posted base | $147K–$211K | Job posting |
| DeepMind/Google RS L4 TC | ~$280K–$360K (one source ~$303K) | Levels.fyi / CTAIO |
| DeepMind/Google RS L5 TC | ~$475K–$700K (MV research scientists $500K–$700K) | Levels.fyi |
| RS vs SWE parity | RS comp matches or slightly exceeds engineer pay at same level | Levels.fyi notes |
| Equity | GSUs — publicly traded, immediately liquid on vest | jobsbyculture / Levels.fyi |

**Comp score: 4/5.** Base alone is mid-market, but total comp with GSU equity at L4–L5 lands **$280K–$500K+**, squarely inside Shayan's stated $300K–500K+ frontier-lab target. Liquid public equity is a plus vs. startup paper. It's a top-tier comp package; not scored 5 only because the *posted base midpoint* sits below his target and the real number depends on level, which the PhD gate makes uncertain for him specifically.

## E) Personalization Plan

*(Not applying to this exact req is the recommendation; these apply if he pursues DeepMind RE roles.)*

| # | Section | Current | Proposed change | Why |
|---|---------|---------|-----------------|-----|
| 1 | Summary | "AI Research Engineer … LLM/agent evaluation, VLA models, RL, robotics" | Lead with **alignment + multimodal evaluation** framing for DeepMind safety orgs | Matches the team's "safety/inclusion in multimodal AI" mandate |
| 2 | BMO bullet | "Uncovered systematic bias to downplay investment risk…" | Promote to first bullet; add the word **fairness/safety** explicitly | This is the single most on-mission line for a Multimodal *Alignment, Safety, and Fairness* team |
| 3 | Merlyn bullet | "Developing VLM judges … difficult to game" | Elevate; tie to "human oversight of AI systems" language from JD | Directly names the team's stated research problem |
| 4 | Projects | BEHAVIOR-1K report | Keep; frame the arXiv LIBERO-PRO critique as the flagship research artifact | Closest thing he has to the "publication record" signal |
| 5 | Skills | Alignment Evaluation listed mid-line | Pull "Alignment Evaluation" and "LLM Fine-tuning (RL)" to the front of the ML line | ATS keyword alignment with required + preferred quals |

**LinkedIn:** headline → "Research Engineer — Multimodal Alignment & Evals"; feature the LessWrong VLA failure-mode post; pin BEHAVIOR-1K 8th place; add "AI Safety / Alignment" to skills; note TN-eligible / open to US relocation.

## F) Interview Plan

STAR stories mapped to what this team screens for:

| # | JD Requirement | STAR story | S | T | A | R |
|---|----------------|-----------|---|---|---|---|
| 1 | Safety/fairness in multimodal AI | BMO GenAI bias discovery | GenAI tool serving $200B+ AUM wealth mgmt | Detect misaligned outputs | Built deterministic eval pipeline over hundreds of synthesized inputs | Uncovered systematic risk-downplaying bias |
| 2 | Human oversight / hard-to-game evals | Merlyn VLM judges | Rollouts need scoring for RL reward | Reward that resists gaming | Developed VLM judges producing dense, context-dependent rewards | Rewards "difficult to game" — his core thesis |
| 3 | Rigorous evaluation of novel methods | Proprioceptive collapse finding | VLA task success plateaued | Find the failure mode | Masked 60% of proprioception, ran controlled ablation | Task success up +48% |
| 4 | Independent experimental design | LIBERO-PRO overfitting critique | π0.5 "generalization failures" claimed | Test the claim | Showed failures were recipe-induced overfitting; proposed alt baseline | Conservative finetuning 21%→42% (arXiv) |
| 5 | LLM finetuning with RL | RLinf flow-matching integration | RL on BEHAVIOR-1K needed VLA support | Enable it | Open-sourced flow-matching VLA integration | RL training in OmniGibson unblocked |
| 6 | Multimodal systems building | BardSong pipeline | Multimodal storytelling | Ship end-to-end | Speech→scene→image→narrated video; finetuned LLM | Closed alpha, 23 DMs |
| 7 | Agentic AI | BMO graph agentic system | Multi-hop relational queries over client data | Answer reliably | Built graph-based agentic system + eval harness | In production build at BMO |
| 8 | Collaboration + individual drive | Merlyn Labs co-founding | 3-person self-funded collective | Produce frontier results with no resources | Co-led BEHAVIOR-1K entry nights/weekends | 8th place, Standard Track; published |

**Recommended case study:** The BMO bias discovery paired with the Merlyn VLM-judge work — it's the cleanest "I find where AI systems fail and build the evaluation that surfaces it" narrative, which is exactly this team's charter.

**Red-flag question to expect:** *"This is a Research Scientist role and you don't have a PhD — walk me through that."* Honest answer: "I'm an M.Eng candidate with a research output that already resembles a scientist's — an arXiv critique, an open-source RL infra contribution, an 8th-place BEHAVIOR-1K finish, and a real alignment failure found in a production system. I know RS is a doctoral track; I'd be glad to be considered on the Research Engineer ladder where my profile fits, or to make the case for an exception." Never overstate the publication record.

## G) Posting Legitimacy

**Assessment tier: High Confidence.**

| Signal | Reading | Verified? |
|--------|---------|-----------|
| Description specificity | Highly specific: named team, concrete required + preferred quals, real responsibilities | Yes (full JD) |
| Salary transparency | Explicit posted band ($147K–$211K + bonus/equity) — US pay-transparency compliant | Yes |
| Boilerplate ratio | Low; requirements are role-specific, not generic | Yes |
| Hosting | Official DeepMind Greenhouse board (boards-api.greenhouse.io/deepmind) | Yes |
| Company hiring signals | Google/DeepMind actively hiring across Frontier AI; multiple sibling RE/RS reqs live | Yes (scan-history: 5 DeepMind reqs added 2026-07-06) |
| Reposting | First appearance in scan-history (added 2026-07-06); no repost pattern | Yes |
| Posting freshness (days live, apply-button state) | Unverified — batch mode, no Playwright | No |

**Context notes:** Legitimate first-party posting from a top-tier lab with transparent comp. The only caution is fit-side, not legitimacy-side: this is a genuine PhD-gated Research Scientist opening. Freshness is unverified in batch mode — confirm the posting is still live via `node check-liveness.mjs` before any outreach.

## Score

| Dimension | Score |
|-----------|-------|
| CV Match | 3.0/5 (elite content fit, hard credential gate on required PhD + top-conf pubs) |
| North Star alignment | 5/5 (multimodal alignment + evals + fairness = dead center) |
| Comp | 4/5 (TC $280K–500K+ with liquid GSUs, meets target) |
| Cultural signals | 5/5 (frontier lab, safety mission, his exact charter) |
| Red flags | -0.5 (PhD hard requirement lowers realistic callback odds for this title) |
| **Global** | **3.5/5** |

**Recommendation: Research first — do not burn an application on this exact Research Scientist req.** The content fit is the best possible match to Shayan's North Star, but the PhD + top-conference-publication requirement is a genuine hard gate on the RS title. Redirect the identical fit to Google DeepMind's **Research Engineer** openings (several already in scan-history: Multimodal Reasoning for Information Literacy, Human Understanding), which carry the same alignment/multimodal/safety content without the doctoral gate. Pursue this specific team only via an internal referral who can champion a non-PhD exception.

---

## Extracted Keywords

multimodal alignment, AI safety, fairness, VLM, vision-language models, human oversight, LLM finetuning, reinforcement learning, agentic AI, generative AI, multimodal learning, evaluation, red-teaming, reward gaming, PyTorch, JAX, Python, experimental design, VLA, deep learning
