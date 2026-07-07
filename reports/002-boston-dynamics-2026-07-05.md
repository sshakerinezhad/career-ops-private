# Evaluation: Boston Dynamics — Research Scientist, RL for Dexterous Manipulation, Atlas

**Date:** 2026-07-05
**Archetype:** Robotics / VLA Research Engineer
**Score:** 4.2/5
**Legitimacy:** High Confidence
**URL:** https://bostondynamics.wd1.myworkdayjobs.com/en-US/Boston_Dynamics/job/Research-Scientist--RL-for-Dexterous-Manipulation--Atlas_R2756
**PDF:** not generated — run /career-ops pdf boston-dynamics to create on demand
**Batch ID:** 002-boston-dynamics

---

## Machine Summary

```yaml
company: "Boston Dynamics"
role: "Research Scientist, RL for Dexterous Manipulation, Atlas"
score: 4.2
legitimacy_tier: "High Confidence"
archetype: "Robotics / VLA Research Engineer"
final_decision: "Consider"
hard_stops:
  - "Required Qualifications gate: PhD (or MS + 3 yrs) AND a track record of first-author publications at CoRL/RSS/ICLR/NeurIPS — Shayan is an M.Eng candidate (anticipated 2027) with strong research output (BEHAVIOR-1K 8th place, technical report, LessWrong, RLinf) but no peer-reviewed first-author top-venue papers"
soft_gaps:
  - "Comp ceiling $220K USD base with no startup-equity upside sits below the $300K+ frontier-lab target and lacks the equity lever of a robotics startup"
  - "On-site Waltham, MA (relocation) — no penalty per location policy, but no remote option"
top_strengths:
  - "Near-verbatim technical overlap: visual sim-to-real, VLA post-training, reward modeling, offline-to-online RL, dexterous/contact-rich manipulation on a humanoid — this is Shayan's exact research area"
  - "Directly demonstrable proof points: AlohaMini sim2real, flow-matching VLA integration for RLinf, VLM-judge dense reward design, BEHAVIOR-1K 8th place"
risk_level: "Medium"
confidence: "High"
next_action: "Apply with materials that lead with research output (BEHAVIOR-1K placement + RLinf + LessWrong) to offset the PhD/first-author gate; pursue a warm intro to the Atlas team rather than a cold ATS submit if possible"
```

## A) Role Summary

| Field | Value |
|-------|-------|
| **Archetype** | Robotics / VLA Research Engineer (primary — bullseye) |
| **Domain** | Humanoid robotics / dexterous manipulation (Atlas) |
| **Function** | Research Scientist: visual sim-to-real, VLA post-training, reward modeling, offline-to-online RL |
| **Seniority** | Research Scientist — PhD or MS + 3 yrs; publication-gated |
| **Remote** | On-site, Waltham Office (POST), MA. Full time. |
| **Team** | Atlas (humanoid) — size unspecified; "world-class fleet + simulation infrastructure + compute" |
| **TL;DR** | The single closest role to Shayan's actual research to date. Every technical bullet in the JD maps to something he has shipped. The friction is credential-shaped (PhD + first-author top-venue pubs), not skill-shaped, plus a base-comp ceiling below his stated target. |

## B) Match with CV

| JD Requirement | Match in CV | Strength |
|----------------|-------------|----------|
| Visual sim-to-real transfer | "Running sim-to-real transfer of household tasks on hand-built AlohaMini embodiment"; BEHAVIOR-1K sim training | Strong |
| Post-training recipes for pretrained VLA models | LIBERO-PRO analysis (π0.5 recipe-induced overfitting; conservative finetuning 21%→42%); flow-matching VLA integration for RLinf | Strong |
| Reward modeling, offline-to-online RL for large multimodal policies | "Developing VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game" | Strong |
| Dexterous / contact-rich manipulation | BEHAVIOR-1K: 10,000+ demos across 22 manipulation tasks; long-tail subtask success via boundary resampling | Strong |
| Train policies that generalize across objects/scenes/embodiments | LIBERO-PRO spatial-generalization result; proprioceptive-collapse finding (60% masking → +48% success) | Strong |
| Proficient in PyTorch and/or JAX, training at scale | Skills: Python, PyTorch, JAX; BEHAVIOR training on 10k+ demos | Strong |
| Ship research code that runs reliably | Open-sourced flow-matching VLA integration for RLinf (external, verifiable) | Strong |
| PhD in ML/Robotics, or MS + 3 yrs experience | M.Eng (AI & Robotics) candidate, anticipated Apr 2027; not yet completed | **Gap** |
| First-author publications at CoRL / RSS / ICLR / NeurIPS | Technical report (merlyn-labs.com/behavior-report), LessWrong analysis, BEHAVIOR-1K leaderboard — no peer-reviewed first-author top-venue paper | **Gap** |
| Deployed vision-based policies on physical robots (ideal) | AlohaMini sim2real in progress; BMO physical robot platform (repair/programming) | Partial |
| RLHF / DPO / GRPO fine-tuning (ideal) | VLM-judge reward work is adjacent; no explicit DPO/GRPO line | Partial |
| Tactile sensing / multi-fingered / bimanual (ideal) | Not in CV | Gap (nice-to-have) |

**Gaps + mitigation:**

1. **PhD / MS+3yrs — hard-stated requirement.** Blocker on paper for a strict screen. Mitigation: the role is functionally a Research *Engineer* fit dressed as Research *Scientist*; lead with demonstrated output over credential. Emphasize that BMO (Sep 2024–) + Merlyn Labs research is real, externally verifiable frontier work. If the screen is rigid, a warm intro matters more than the ATS form.
2. **First-author top-venue publications — hard-stated requirement.** Real gap. Mitigation: BEHAVIOR-1K 8th place (Standard Track) + published technical report + LessWrong writeup + RLinf open-source contribution constitute a verifiable research record even without a CoRL/RSS acceptance. Frame the LIBERO-PRO and proprioceptive-collapse findings as publication-grade analyses.
3. **Tactile / multi-fingered / bimanual (nice-to-have).** Not a blocker. Adjacent embodiment breadth (7-DOF arm control, hardware/PCB roots) demonstrates fast ramp on new morphologies.
4. **RLHF/DPO/GRPO (nice-to-have).** VLM-judge reward-model work is directly adjacent; name the specific post-training methods in application materials to close the vocabulary gap.

## C) Level & Strategy

- **JD level:** Research Scientist — publication-gated, PhD-expected. **Shayan's natural level:** mid Research Engineer with genuine frontier output but pre-PhD.
- **Sell senior without lying:** Anchor on results, not titles. "I placed 8th in Stanford's BEHAVIOR-1K Challenge, open-sourced flow-matching VLA integration for RLinf, and my VLM-judge reward work targets exactly the offline-to-online RL problem in this JD." The founder/independent-lab angle (co-founded Merlyn Labs, shipped published research while working full-time at BMO) signals ownership and velocity above his years.
- **If downleveled to Research Engineer:** This is arguably the *correct* level and an easy accept if comp holds — the work is identical. Set a 6-month review expectation and treat it as a foot in the door at a premier robotics org.

## D) Comp & Demand

| Data point | Value | Source |
|-----------|-------|--------|
| Stated base range (posting) | $175,000 – $220,000 USD annually | Job posting (MA pay-transparency law) |
| Additional | Medical/dental/vision, 401(k), PTO, annual bonus | Job posting |
| Equity upside | None stated; Hyundai-owned, not a startup — no meaningful startup-equity lever | Inference from JD + ownership |
| Shayan's target (robotics startup) | $180K–300K base + meaningful equity | config/profile.yml |
| Shayan's target (frontier lab RE) | $300K–500K+ TC | config/profile.yml |

Note: this evaluation runs single-pass without live WebSearch to Levels.fyi/Blind; comp read is from the posting's transparent range plus profile targets. The $175–220K base clears his $180K minimum at the top of the band but sits below the $300K+ frontier-lab aspiration, and — unlike a robotics startup — carries no equity upside to compensate. For a publication-gated Research Scientist title this base reads at or slightly below top-of-market for the level (PI, Figure, and similar pay more, often with equity). **Comp score: 3/5** — transparent and honest, above floor, but not a comp win given his explicit high-comp priority.

Demand context: dexterous manipulation + humanoid VLA is one of the hottest research areas in robotics right now; BD/Atlas is a marquee platform. Demand for this exact skill set is very high — his leverage is real if he clears the credential screen.

## E) Personalization Plan

| # | Section | Current state | Proposed change | Why |
|---|---------|---------------|-----------------|-----|
| 1 | Summary | General "AI Research Engineer... VLA, RL, robotics" | Lead sentence on visual sim-to-real + VLA post-training for manipulation | Mirror the JD's first two responsibilities verbatim-adjacent |
| 2 | Merlyn Labs bullets | Mixed sim/real | Surface AlohaMini sim2real + VLM-judge dense-reward line to top | These are the two exact JD asks (sim-to-real, reward modeling) |
| 3 | BEHAVIOR-1K | Present | Promote and label as "publication + 8th-place leaderboard" | Directly offsets the first-author-pub gate |
| 4 | Skills | PyTorch, JAX listed | Add "offline-to-online RL, reward modeling, sim2real, diffusion/flow-matching policies" phrasing | ATS keyword coverage on JD terms |
| 5 | RLinf line | Present | Frame as "ship research code that runs reliably" (reliability + open source) | Hits a stated required qualification |

**LinkedIn:** (1) headline → "Robotics / VLA Research Engineer — sim2real, RL post-training, dexterous manipulation"; (2) featured: BEHAVIOR report + RLinf repo + LessWrong; (3) about section: emphasize humanoid/manipulation; (4) skills: sim-to-real, VLA, reward modeling; (5) open-to-work signal for US robotics research roles.

## F) Interview Plan

| # | JD Requirement | STAR Story | S | T | A | R |
|---|----------------|-----------|---|---|---|---|
| 1 | Visual sim-to-real transfer | AlohaMini sim2real | Hand-built AlohaMini embodiment, household tasks | Transfer sim-trained policy to real hardware | Built sim2real pipeline on self-assembled robot | In-progress transfer of household manipulation |
| 2 | Post-training VLA models | LIBERO-PRO critique | Published π0.5 benchmark showed generalization failures | Diagnose whether failures are fundamental or recipe-induced | Showed overfitting; proposed alternative baseline + conservative finetune | Position-swap success 21%→42% (spatial generalization) |
| 3 | Reward modeling / offline-to-online RL | VLM-judge dense rewards | Sparse/gameable rewards for manipulation rollouts | Build hard-to-game dense reward signal | Developed VLM judges scoring rollouts into context-dependent RL rewards | Rewards resistant to gaming (ongoing) |
| 4 | Generalization across objects/scenes | Proprioceptive collapse | VLA over-relying on proprioception | Improve generalization | 60% proprioception masking | Task success up to +48% |
| 5 | Train policies at scale (PyTorch/JAX) | BEHAVIOR-1K | 10,000+ demos, 22 tasks | Train competitive manipulation policies | Boundary resampling on skill transitions | 8th place Standard Track; doubled long-tail success |
| 6 | Temporal / architecture insight | Chunking vs ensembling | VLA execution strategy unclear | Compare execution modes | Chunked execution vs temporal ensembling | Chunking 3x better — VLAs lack temporal awareness |
| 7 | Ship reliable research code | RLinf contribution | RL infra lacked flow-matching VLA support | Enable RL training on BEHAVIOR-1K in OmniGibson | Open-sourced flow-matching VLA integration | Merged, externally verifiable |
| 8 | Physical robot deployment | BMO robot platform | Bank's physical robot platform down | Restore + program it | Led repair and programming | Platform operational |

**Recommended case study:** BEHAVIOR-1K technical report — it demonstrates end-to-end manipulation research (data, training, novel findings, leaderboard result) and doubles as the answer to "show me a first-author-grade publication."

**Red-flag questions to prepare:**
- *"You don't have a PhD or top-venue first-author papers — why should we consider you?"* → Lead with verifiable output: BEHAVIOR-1K placement, RLinf merge, published analyses; frame the M.Eng + dual-track (BMO + Merlyn) as evidence of research velocity that outpaces the credential.
- *"What is Merlyn Labs?"* → Use the profile one-liner exactly: "Self-organized research collective — three of us doing robotics research nights and weekends. We placed 8th in Stanford's BEHAVIOR-1K Challenge, published our methods, and contribute to open-source RL infra." Never imply funding/headcount/company status.
- *"Have you worked with tactile sensing / multi-fingered hands?"* → Honest: not yet directly; point to hardware roots (PCB/COMSOL) + fast ramp on AlohaMini as evidence of quick morphology onboarding.

## G) Posting Legitimacy

**Assessment: High Confidence** (posting freshness verified — see note).

| Signal | Reading |
|--------|---------|
| Description quality | Highly specific: named methods (VLA, diffusion policies, offline-to-online RL, RLHF/DPO/GRPO), concrete responsibilities, realistic required + ideal split. Low boilerplate. |
| Salary transparency | Explicit $175K–$220K range (MA pay-transparency compliance) — a legitimacy positive. |
| Company | Boston Dynamics (Hyundai-owned), real Waltham, MA site; marquee robotics org. |
| Posting freshness | "Posted 30+ Days Ago", req R2756. **Verified ACTIVE today via browser** (orchestrator liveness check). |
| Reposting | Appears once in scan-history.tsv (added 2026-07-05, websearch). No repost pattern. |
| Corroborating signal | Sibling BD role R1548 (Atlas Perception) is marked `skipped_expired` in scan-history — confirms BD actively expires stale postings, so this one remaining active is meaningful, not a ghost listing. |

No suspicious signals. Real, active, well-specified opening at a legitimate employer.

## Score Global

| Dimension | Score |
|-----------|-------|
| Match with CV | 4/5 (technical overlap ~5/5; credential gate pulls it down) |
| North Star alignment | 5/5 (bullseye — VLA, sim2real, RL, dexterous manipulation, humanoid) |
| Comp | 3/5 (transparent, above floor, but below high target; no equity upside) |
| Cultural signals | 4/5 (premier robotics org, world-class fleet, real humanoid impact) |
| Red flags | 0 (role is clean; PhD/pub requirement is a screening risk, not a role red flag) |
| **Global** | **4.2/5** |

**Recommendation: Consider / Apply with differentiated materials.** Substance fit is as high as it gets for Shayan's profile, and US relocation is his preferred direction. The blocker is a stated PhD + first-author-publication gate he does not cleanly meet. Recommended path: apply leading hard with verifiable research output, and — if reachable — pursue a warm intro to the Atlas team rather than relying on a cold ATS screen. Do not skip; the fit is worth the effort despite the credential friction.

---

## Keywords extracted

visual sim-to-real transfer, Vision-Language-Action (VLA), post-training, reward modeling, offline-to-online RL, dexterous manipulation, contact-rich manipulation, diffusion policies, large behavior models, photorealistic rendering, tactile sensing, bimanual coordination, multi-fingered hands, imitation learning, large-scale pretraining, RLHF, DPO, GRPO, PyTorch, JAX, humanoid robots, Atlas, system identification, foundation models
