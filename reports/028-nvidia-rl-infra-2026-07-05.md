# Evaluación: NVIDIA — Agent RL Infra Engineer

**Fecha:** 2026-07-05
**Arquetipo:** ML / LLM Research Engineer × AI Engineer (Agents / LLM Systems) — heavy RL-infra / MLOps flavor
**Score:** 3.0/5
**Legitimacy:** High Confidence
**URL:** https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/Agent-RL-Infra-Engineer_JR2015309
**PDF:** not generated — run /career-ops pdf nvidia-rl-infra to create on demand
**Batch ID:** 028-nvidia-rl-infra

---

## Machine Summary

```yaml
company: "NVIDIA"
role: "Agent RL Infra Engineer"
score: 3.0
legitimacy_tier: "High Confidence"
archetype: "ML / LLM Research Engineer × AI Engineer (Agents/LLM Systems) — RL infra/MLOps"
final_decision: "Skip"
hard_stops:
  - "10+ years experience required — mechanical recruiter screen; candidate has ~2 yrs professional. Staff-level filter (calibration rule 3)."
  - "Role scope is production RL-platform engineering (self-service enterprise cookbooks, multi-node GPU training) — not frontier research; distributed-training-at-scale infra is a genuine capability gap, not just seniority framing."
soft_gaps:
  - "Distributed training frameworks (Megatron, NeMo, DeepSpeed, FSDP, HF Accelerate) not on CV"
  - "GPU cluster management / MLOps job orchestration / multi-node training not demonstrated"
  - "Go/Rust not on CV (Python + C/C++ present)"
  - "MS not yet completed (M.Eng anticipated 2027; 'or equivalent experience' softens but 10yoe binds)"
top_strengths:
  - "Verifiable reward environment design maps 1:1 — VLM judges that score rollouts into hard-to-game RL rewards (Merlyn Labs) is exactly 'design verifiable reward environments building on NeMo Gym'"
  - "Genuine hands-on RL: RLinf flow-matching VLA integration enabling RL on BEHAVIOR-1K in OmniGibson; RL techniques (GRPO/DPO/PPO/RLAIF) are familiar terrain"
  - "Agent self-improvement + reward modeling + agent eval pipeline (BMO) align with the agent-RL mission"
risk_level: "High"
confidence: "High"
next_action: "Park as stretch. Do not apply cold — 10+ YoE Staff filter makes a résumé pass unlikely. Pursue only via NVIDIA referral, or pivot to a non-10yoe NVIDIA RL/research-engineer req (e.g. NeMo / Research). Verify liveness first (stated acceptance window closed Apr 2, 2026)."
```

## A) Resumen del Rol

| Campo | Valor |
|-------|-------|
| Arquetipo detectado | ML/LLM Research Engineer × AI Engineer (Agents) — RL infra/MLOps hybrid |
| Domain | Enterprise RL-for-agents platform (self-improving autonomous agents) |
| Function | Build reusable RL cookbooks/environments + operationalize training backends as production services |
| Seniority | Staff-level (title says "Engineer" but reqs = 10+ YoE, "lead" scope) |
| Remote | On-site, US-CA-Santa-Clara (relocation — no penalty per location policy; TN-eligible) |
| Team size | Cross-functional (platform, security, agent infra, internal-customer teams); not stated |
| TL;DR | Bring RL self-improvement loops to every NVIDIA agent team: design verifiable reward environments (NeMo Gym), operationalize GRPO/DPO/PPO/RLAIF into self-service blueprints, integrate NeMo Microservices + AI Factory GPU infra. Reward-design core is dead-center Shayan's wheelhouse; the 10+ YoE + production-platform scope is the wall. |

## B) Match con CV

| Requisito del JD | Match en CV | Fuerza |
|------------------|-------------|--------|
| RL techniques (DPO, GRPO, PPO, RLAIF) into workflows | "Open-sourced flow-matching VLA integration for RLinf, enabling RL training on BEHAVIOR-1K in OmniGibson" (cv.md:28); RL coursework (cv.md:65) | Medium — genuine RL, but research-scale not production self-service |
| Design verifiable reward environments (NeMo Gym) | "Developing VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game" (cv.md:27) | **Strong — 1:1 map**, this is his signature |
| RL training loops: reward modeling, policy optimization, safety constraints | VLM-judge reward design (cv.md:27) + agent eval pipeline (cv.md:19) | Medium-strong |
| Fine-tuning methods (LoRA, SFT) operationalized | "Conservative finetuning doubled position-swap success 21%→42%" (cv.md:26); "Fine-tuned LLM on D&D sourcebooks" (cv.md:50) | Medium — has finetuning, not as self-service cookbooks |
| Data curation / active learning / data flywheel | "deterministic agent eval pipeline using hundreds of synthesized inputs" (cv.md:19) | Weak-adjacent |
| Agent self-improvement / agent infra collaboration | "graph-based agentic system... multi-hop relational queries" (cv.md:20); agent eval pipeline | Medium |
| Python | cv.md:74 | Strong |
| **10+ years of experience** | ~2 yrs professional (BMO Sep 2024–present + co-op) | **HARD MISS** |
| Distributed training (Megatron, NeMo, DeepSpeed, FSDP, HF Accelerate) | Not present | Hard gap |
| GPU cluster mgmt, pipeline automation, job orchestration, multi-node | Not present | Hard gap |
| Go / Rust | C/C++ present (cv.md:74); no Go/Rust | Gap |
| NVIDIA infra (DGX, AI Factory, NVLink/InfiniBand), NeMo Microservices | Not present | Nice-to-have miss |
| MS in CS/ML | M.Eng AI & Robotics anticipated Apr 2027 (cv.md:63) — not yet completed | Soft (equivalent-experience clause) |

**Gaps analysis:**

1. **10+ YoE — HARD BLOCKER (mechanical screen).** Calibration rule 3: NVIDIA recruiter screens filter on hard YoE numbers mechanically. Candidate is ~2 years out; there is no framing that closes an 8-year gap. Not waivable by portfolio at résumé stage. This is the decision driver.
2. **Distributed-training-at-scale infra (Megatron/NeMo/DeepSpeed/FSDP + GPU cluster mgmt) — hard, real capability gap.** Not seniority theater — the role is fundamentally about operationalizing multi-node training as production services. Shayan has trained on 10,000+ demos (single/small-scale) but no evidence of Megatron/FSDP/multi-node cluster ops. No portfolio project covers this.
3. **Production self-service platform engineering vs research.** The role wants someone who turns methods into "cookbooks other teams consume." Shayan's RL work is research output, not internal-platform productization. Adjacent but not the same job.
4. **Reward-environment design — NOT a gap, a strength.** His hard-to-game VLM-judge reward work is genuinely what NeMo Gym / verifiable-reward-environment design asks for. This is the one axis where he'd be a standout — but one strong axis doesn't clear a 10-YoE Staff gate.

Mitigation: none sufficient for a cold application. The honest path is referral or a lower-YoE sibling req.

## C) Nivel y Estrategia

- **Nivel detectado:** Staff / Senior-Staff RL infra engineer (10+ YoE, "lead" data-curation strategy, cross-team platform ownership). NVIDIA IC5-IC6 territory by scope.
- **Candidate's natural level:** Mid / early-senior research engineer (~2 yrs).
- **Gap:** This is not a downlevel-able mismatch — it's ~3 levels and a domain shift (research → production infra platform). "Sell senior without lying" does **not** apply; overreaching here burns a NVIDIA recruiter touch.
- **Screen-risk (stated plainly per rule 3/4):** Résumé will very likely be filtered at the automated 10+ YoE gate before a human reads the RL content. NVIDIA discloses it uses AI tools in recruiting — mechanical YoE filtering is near-certain.
- **If pursued:** only via a warm NVIDIA referral who can route the résumé past the YoE screen, OR pivot to a NeMo / Research-Engineer req without the 10-YoE floor. Label: **stretch — park** (calibration rule 5).

## D) Comp y Demanda

| Fuente | Dato | Nota |
|--------|------|------|
| JD (posting) | **$224,000 – $356,500 base** + equity + benefits | Disclosed in posting — authoritative |
| Levels.fyi — NVIDIA ML Engineer | $205K (IC1) – $331K+ (IC4), median ~$261K | Base+equity TC |
| Levels.fyi — NVIDIA SWE | median ~$345K TC; IC5–IC6 ~$528K–$626K median | Senior tiers |
| Levels.fyi — NVIDIA overall | median TC ~$263K | Company-wide |

**Comp score: 5/5.** The disclosed base band ($224–356.5K) is top-of-market for base alone; with NVIDIA equity (strong appreciation) TC easily clears the $300–500K frontier-lab target. Comp is a stated top priority and this role delivers — the problem is purely the entry gate, not the reward.

**Demand:** RL-for-agents infra is white-hot; NVIDIA is expanding the NeMo/agent-platform org aggressively. Demand tailwind is real, but at this role's seniority the supply of 10-YoE RL-infra engineers is what NVIDIA is competing for — not early-career researchers.

## E) Plan de Personalización

*Applies only IF pursued via referral / sibling req. Not recommended for cold application.*

| # | Sección | Estado actual | Cambio propuesto | Por qué |
|---|---------|---------------|------------------|---------|
| 1 | Summary | "LLM/agent evaluation, VLA, RL" | Lead with "RL + verifiable reward-environment design" | Hit the reward-environment core first |
| 2 | Merlyn bullet | "VLM judges... difficult to game" | Reframe as "verifiable reward environments for RL training" | Match NeMo Gym vocabulary exactly |
| 3 | RLinf bullet | "flow-matching VLA integration for RLinf" | Add "RL training loop on OmniGibson/BEHAVIOR-1K" | Surface RL-infra hands-on |
| 4 | Skills | RL, Imitation Learning | Add "GRPO, DPO, PPO, RLAIF" (only these he can defend) | ATS keyword match — do NOT add Megatron/FSDP (not real) |
| 5 | BMO bullet | "agent eval pipeline" | Frame as "agent self-improvement eval loop" | Ties to agent-RL mission |

**LinkedIn:** headline emphasize "RL + reward-environment design"; do not claim distributed-training-infra experience he lacks (source-of-truth boundary).

## F) Plan de Entrevistas

*Only relevant if a referral secures a conversation.*

| # | Requisito del JD | Historia STAR | S | T | A | R |
|---|------------------|---------------|---|---|---|---|
| 1 | Verifiable reward environments | VLM-judge reward design | Reward hacking in VLA rollouts | Build rewards agents can't game | Context-dependent VLM judges scoring rollouts | Dense, hard-to-game RL reward signal |
| 2 | RL training loops (GRPO/PPO) | RLinf integration | No RL path for flow-matching VLAs on BEHAVIOR-1K | Enable RL training in OmniGibson | Open-sourced flow-matching integration | RL training unlocked on BEHAVIOR-1K suite |
| 3 | Reward modeling / policy optimization | BEHAVIOR-1K 8th place | Proprioceptive collapse failure mode | Improve task success | 60% proprioception masking | Up to 48% task-success gain |
| 4 | Data curation / eval at scale | BMO agent eval pipeline | Undetected misaligned outputs | Detect at scale | Deterministic pipeline, hundreds of synthesized inputs | Systematic bias found in $200B+ AUM tool |
| 5 | Fine-tuning operationalization | LIBERO-PRO finetuning | Overfitting vs generalization | Test spatial generalization | Conservative finetuning | Position-swap success 21%→42% |
| 6 | Agent infra collaboration | BMO graph-agentic system | Complex multi-hop queries across client data | Build agentic answering system | Graph-based agent design | Production agentic system at a bank |

**Case study to present:** Merlyn Labs verifiable-reward / VLM-judge work — it's the single closest map to the role's technical core.

**Red-flag questions & answers:**
- *"You have ~2 years; we asked for 10+."* — Honest: "I don't have 10 years. My reward-environment and RL research maps directly to your NeMo Gym work; I'm here because a referral thought the technical fit was worth a conversation despite the tenure gap." Do not bluff YoE.
- *"Have you run multi-node distributed training?"* — "Not at cluster scale — my training has been single/small-node. That's the clearest gap for this role; I'd be ramping on Megatron/FSDP." Honesty preserves the NVIDIA relationship for future reqs.

## G) Posting Legitimacy

**Assessment: High Confidence (legitimate) — with a freshness caution.**

| Signal | Reading | Verified? |
|--------|---------|-----------|
| Requisition ID | JR2015309 present | Yes |
| "Existing vacancy" statement | Explicit in posting | Yes |
| Salary transparency | Full band disclosed ($224–356.5K) | Yes |
| Description specificity | High — names NeMo Gym, NeMo Microservices (Curator/Customizer/Evaluator/Guardrails), AI Factory, specific RL methods | Yes |
| Boilerplate ratio | Low — role-specific, not generic | Yes |
| AI-in-recruiting disclosure | Explicitly disclosed (transparency signal) | Yes |
| Reposting history | Not found in scan-history (first appearance in pipeline) | Yes |
| **Posting freshness** | "Posted 30+ Days Ago"; "accepted at least until April 2, 2026" — **that window closed ~3 months before today (2026-07-05)** | Unverified (batch mode) — mild staleness flag |

**Context notes:** This is unambiguously a real NVIDIA requisition (ID, disclosed band, deeply specific JD). The only caution is age: 30+ days posted and a stated minimum acceptance window that has already elapsed. The page still renders an Apply button, but the role may be filled or in late-stage. **Verify liveness (`node check-liveness.mjs <url>` or Playwright) before any application.** Legitimacy of the posting itself is not in doubt.

## Score Global

| Dimensión | Score |
|-----------|-------|
| Match con CV | 2.5/5 |
| Alineación North Star | 3.5/5 |
| Comp | 5/5 |
| Señales culturales | 3.5/5 |
| Red flags | -0.5 (10+ YoE mechanical screen + Staff-level scope well above natural level) |
| **Global** | **3.0/5** |

**Decision: Skip (stretch — park).** Content on the reward-environment/RL axis is genuinely strong and comp is dream-tier, but the 10+ YoE requirement is a mechanical résumé filter (calibration rule 3) for a Staff-level production-infra role that also demands distributed-training-at-scale experience Shayan doesn't have (a real capability gap, not seniority framing). A cold application near-certainly filters at the YoE gate. Pursue **only** via a NVIDIA referral who can route past the screen, or pivot to a lower-YoE NVIDIA RL / NeMo / Research-Engineer req. Do not let this crowd out realistic applications (OpenAI evals, Cohere, Good Start).

---

## Keywords extraídas

reinforcement learning, RL environments, GRPO, DPO, PPO, RLAIF, reward modeling, verifiable reward environments, NeMo Gym, NeMo Microservices, agent self-improvement, policy optimization, fine-tuning, LoRA, SFT, distributed training, GPU cluster, data flywheel, active learning, VLM judges
