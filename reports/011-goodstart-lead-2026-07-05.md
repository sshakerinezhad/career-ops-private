# Evaluation: Good Start Labs — Research Lead, LLMs, Games & Multi-Agent Environments

**Date:** 2026-07-05
**Archetype:** Alignment / Evals Research Engineer (hybrid: Founding / Early AI Engineer) — at Lead seniority
**Score:** 4.0/5
**Legitimacy:** High Confidence
**URL:** https://goodstartlabs.com/careers/research-lead
**PDF:** not generated — run /career-ops pdf goodstart to create on demand
**Batch ID:** 011-goodstart-lead

---

## Machine Summary

```yaml
company: "Good Start Labs"
role: "Research Lead, LLMs, Games & Multi-Agent Environments"
score: 4.0
legitimacy_tier: "High Confidence"
archetype: "Alignment / Evals Research Engineer (Lead)"
final_decision: "Apply"
hard_stops: []
soft_gaps:
  - "PhD required (candidate holds M.Eng in progress); admitted via 'or equivalent research experience at top labs' clause, but candidate's research is via a self-organized collective, not a marquee lab"
  - "'Lead' scope: define multi-year agenda, manage 6 university PhD partnerships, hire/grow a research team — candidate has co-founded a 3-person lab but not managed external partnerships or hired researchers"
  - "Seniority mismatch: mid-level candidate (1.5y FT + M.Eng in progress) for a Lead role"
top_strengths:
  - "Reward models that resist gaming — VLM judges scoring rollouts into dense RL rewards difficult to game — maps directly to alignment-through-games + reward-modeling preferred quals"
  - "Genuine games passion is real, not performative: built BardSong (D&D storytelling tool, 23 DMs in alpha), D&D/Twilight Imperium/board-game background"
  - "Published RL/VLA research with external verification (BEHAVIOR-1K 8th place, LIBERO-PRO arXiv critique, LessWrong analysis); co-founded and ran the lab that produced it"
risk_level: "Medium"
confidence: "High"
next_action: "Apply by email to founders@goodstartlabs.com with CV + 2-3 publication links (BEHAVIOR report, LIBERO-PRO arXiv, LessWrong) + short games-and-AI note; frame level honestly and signal openness to the sibling Research Scientist role"
```

## A) Role Summary

| Field | Detail |
|-------|--------|
| **Archetype** | Alignment / Evals Research Engineer × Founding/Early AI Engineer, at **Lead** seniority |
| **Domain** | LLM training via games; multi-agent environments; alignment "through entertainment" (RL data from games with millions of players; deception/honesty signals) |
| **Function** | Define + execute a multi-year research program; build/optimize RL environments; curate pre-training data; run large-scale experiments; manage 6 university PhD partnerships (Princeton, Rice, UCSD, HKUST, UMD, NYU); coordinate NeurIPS/ICML/AAAI publication; demonstrate model lift to lab partners; lay groundwork to grow the team |
| **Seniority** | Research **Lead** (agenda-owning, partnership-managing, team-building) — a real stretch above candidate's current level |
| **Location** | Toronto or NYC preferred; flexible remote for exceptional candidates. Visa sponsorship offered for exceptional candidates |
| **Comp** | $140K–$250K USD base + "meaningful equity"; seed stage, $3.6M raised, ~2 years runway |
| **Team size** | Small/early — role explicitly seeds a future research team (currently partnership-driven with university PhDs) |
| **TL;DR** | Seed-stage lab teaching AI to get better through games (Diplomacy Arena for long-horizon multi-agent negotiation/honesty, LOL Arena for humor-preference alignment). Backed by General Catalyst + Inovia; advisors from DeepMind and Anthropic. The research theme — reward modeling, multi-agent honesty/deception, alignment via game environments — sits dead-center of the candidate's North Star. The gap is the *Lead* framing, not the subject matter. |

## B) CV Match

| JD Requirement | Candidate evidence (cv.md) | Verdict |
|----------------|----------------------------|---------|
| Published research in RL, multi-agent, game theory, or LLM training | BEHAVIOR-1K 8th place + technical report; LIBERO-PRO critique (arXiv 2510.03827); LessWrong VLA failure-mode analysis; RLinf flow-matching VLA integration for RL | Strong — real, externally verifiable RL research output |
| Strong Python + PyTorch/JAX, implements research ideas | Skills: "Python, C/C++, PyTorch, JAX, RL, Imitation Learning, LLM Fine-tuning"; ships training + eval code, not just design | Strong |
| Build/optimize RL environments, run large-scale experiments | RLinf integration enabling RL training on BEHAVIOR-1K in OmniGibson; trained on 10,000+ demos across 22 tasks | Strong on RL experimentation; sim RL env work, not game-engine RL |
| RLHF / reward modeling / alignment (preferred) | Merlyn: "Developing VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game"; BMO: found systematic risk-downplaying bias in a $200B+ AUM GenAI tool; deterministic agent eval pipeline | **Excellent** — reward modeling resistant to gaming is precisely the alignment-via-games thesis |
| Genuine passion for games | BardSong (D&D storytelling tool, closed alpha with 23 DMs); Interests: Dungeons & Dragons, Twilight Imperium; game-like adversarial eval design is his stated cross-cutting advantage | **Excellent** — authentic, documented, not a checkbox |
| Multi-agent systems / game theory | Adjacent: agentic systems at BMO (graph-based multi-hop); adversarial eval framing. No direct multi-agent game-theory publication | Partial |
| Comfortable at early-stage startup | Co-founded Merlyn Labs (self-funded, 3 people); ships research fast while working full-time | Strong |
| PhD in CS/ML *or* equivalent research experience at top labs | M.Eng (AI & Robotics), UofT, in progress (anticipated 2027); B.Eng Eng Physics. Research via Merlyn Labs (self-organized collective), not a top lab | **Gap** — see below |
| Experience at DeepMind/FAIR/OpenAI/Anthropic or top academic groups (preferred) | None | Gap (preferred, not required) |
| Experience hiring/growing research teams (preferred) | Co-founded a 3-person lab; VP Technical led a student design team. No formal hiring of researchers | Gap (preferred) |
| Manage university research partnerships + publication coordination | Published independently; no experience managing external PhD partnerships | Gap — the core "Lead" duty |

### Gaps and mitigation

1. **PhD / top-lab requirement — soft blocker.** The "or equivalent research experience at top labs" escape hatch is the path, and the JD repeatedly rewards "exceptional" candidates (flexible remote, visa sponsorship). Mitigation: lead with externally verifiable output (BEHAVIOR-1K leaderboard, arXiv, RLinf GitHub, LessWrong) rather than credentials. This is not a hard blocker — it is a bar-raising screen the candidate must clear on substance.
2. **"Lead" scope: multi-year agenda + partnership management + hiring — the real stretch.** Candidate has agenda-setting and zero-to-one experience (co-founded Merlyn, chose its research directions) but has not managed external PhD partnerships or hired researchers. Mitigation (the bridge argument): frame Merlyn Labs honestly as evidence he can *originate and execute a research agenda from nothing* and coordinate collaborators — then be explicit that partnership-management and hiring are growth areas, not claimed strengths.
3. **Multi-agent game-theory depth — partial.** Diplomacy Arena centers on negotiation/honesty/deception. Candidate's multi-agent exposure is agentic-systems-adjacent, not game-theoretic. Mitigation: connect via his reward-gaming / adversarial-eval instinct (honesty and deception are eval-design problems) rather than overclaiming game-theory background.
4. **Seniority mismatch.** Mid-level candidate for a Lead role. Mitigation: apply anyway (the fit is exceptional on theme), be transparent about level, and signal openness to the sibling **Research Scientist** role (report 010) so the company can level him where he fits.

## C) Level and Strategy

**JD level:** Research **Lead** — owns the research agenda, manages six external university partnerships, coordinates top-venue publication, and lays groundwork to hire a team. This is a senior IC-plus-leadership role, typically PhD + several years.

**Candidate's natural level:** Mid-level research engineer — ~1.5 years full-time (BMO AI CoE) plus M.Eng in progress plus a co-founded 3-person research collective. Naturally a strong **Research Scientist / Research Engineer** candidate, not yet a Lead.

**"Sell strong without lying" plan:**
- Lead with output density: "In under a year, our 3-person self-funded collective placed 8th in Stanford's BEHAVIOR-1K Challenge, published a technical report + a LessWrong analysis, contributed flow-matching VLA integration to RLinf, and posted a peer-facing critique of the LIBERO-PRO baseline on arXiv." That cadence, produced with no resources, is the leadership signal.
- Anchor on the exact thesis: "My Merlyn work builds VLM judges that turn rollouts into dense rewards that are hard to game — which is the same problem as measuring honesty and deception in a Diplomacy environment." This makes him look purpose-built for the reward-modeling side of the role.
- Use co-founder framing as the agenda-ownership proof: he didn't execute someone else's plan, he chose the research directions.

**"If they downlevel me" plan:** Accept a Research Scientist / Research Engineer title readily if the work and comp are right — the substance of the job (build RL game environments, reward models, run experiments) is identical and it is squarely his North Star. Propose a 6–12 month review toward expanded scope as the team grows. Apply to both this and the sibling Research Scientist posting (010) and let them level.

## D) Comp and Demand

| Data point | Finding | Source |
|-----------|---------|--------|
| Posted range | $140K–$250K USD base + "meaningful equity" | JD |
| Funding | $3.6M seed (General Catalyst, Inovia, Every, TIRTA, angels from DeepMind); ~2 yrs runway | every.to, PitchBook, Inovia |
| Seed AI/ML research comp 2026 | Mid build roles ~$150–195K base; senior systems ~$195K+; seed startups budget +20–30% over senior SWE band for exceptional talent; equity refreshes 25–50% of initial grant | topstartups.io, recruitingfromscratch.com |
| Remote discount (LLM roles) | ~5–8% vs SF — small; talent market stays competitive across locations | recruitingfromscratch.com |

**Comp score: 3/5.** The $140–250K USD base band tops out at a solid seed-stage number; at $250K + meaningful equity it approaches the candidate's US-robotics-startup target ($250K+ with strong equity). But it sits below his stated frontier-lab priority ($300–500K TC), and "meaningful equity" on a $3.6M seed with ~2 years runway is high-variance. The Toronto option removes relocation friction, and the ~5–8% remote discount is minor. Net: fair-to-good for the stage, below his top-line ambition. Negotiate toward the top of the base band and press on equity percentage, refresh policy, and current preferred-price/last-round valuation.

**Demand:** Games-as-RL-data is a hot 2026 category (cf. General Intuition's $134M seed for game-based agent training). Live lab contracts + accepted NeurIPS workshop paper indicate real, funded demand rather than a science project.

## E) Personalization Plan

**Top 5 CV changes:**

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "LLM/agent evaluation, VLA models, RL, and robotics" | Lead with "reward modeling, RL environments, and multi-agent/alignment evaluation" | Mirror the JD's exact axes (reward modeling, multi-agent, alignment) |
| 2 | Merlyn bullet (VLM judges) | Buried mid-list | Promote to first bullet; add "designed to resist reward gaming" phrasing | This is the single most on-thesis line for the role |
| 3 | Projects | BardSong listed as D&D tool | Reframe headline to foreground the games-and-AI passion the JD explicitly asks for | "Genuine passion for games" is a stated requirement; make it undeniable |
| 4 | BEHAVIOR-1K | Robotics-framed | Add RL-environment + large-scale-experiment framing (10,000+ demos, 22 tasks, RL training in OmniGibson) | JD wants "build/optimize RL environments, run large-scale experiments" |
| 5 | Skills | General ML list | Surface RLHF-adjacent / reward-modeling / multi-agent terms near the top | ATS + human match to preferred quals |

**Top 5 LinkedIn changes:**
1. Headline: add "RL environments · reward modeling · alignment evals."
2. About: open with the games-and-alignment convergence, name the reward-gaming work.
3. Feature the LessWrong post and BEHAVIOR report (public, verifiable).
4. Pin the RLinf contribution and LIBERO-PRO arXiv link.
5. Add "co-founder, Merlyn Labs" with the honest one-liner (self-organized collective, 8th at BEHAVIOR-1K).

## F) Interview Plan

**Application is by email** (`founders@goodstartlabs.com`): CV + 2–3 publication/project links + a short "why games + AI" note. The note is the highest-leverage artifact — this is where authentic games passion + the reward-modeling thesis land.

| # | JD requirement | STAR story | S | T | A | R |
|---|----------------|-----------|---|---|---|---|
| 1 | Reward models resistant to gaming | Merlyn VLM judges | VLAs need dense reward signal; naive rewards get gamed | Build judges scoring rollouts into RL rewards hard to game | Designed context-dependent VLM-judge scoring | Rewards usable for RL, resistant to exploitation |
| 2 | Alignment / finding failure modes | BMO GenAI bias | GenAI tool serving $200B+ AUM wealth mgmt | Detect misaligned outputs at scale | Built deterministic eval pipeline, hundreds of synthesized inputs | Uncovered systematic risk-downplaying bias |
| 3 | RL environments + large-scale experiments | BEHAVIOR-1K | Standard-track challenge, 22 tasks | Maximize task success | Trained on 10,000+ demos; found proprioceptive collapse | 60% masking improved success up to 48%; 8th place |
| 4 | Rigorous experimentation / peer critique | LIBERO-PRO | Published baseline claimed π0.5 generalization failure | Test whether the failure was real | Showed it was recipe-induced overfitting; proposed alt baseline | Conservative finetuning doubled position-swap success (21%→42%) |
| 5 | Build/optimize training infra | RLinf contribution | RL on BEHAVIOR-1K unsupported in OmniGibson | Enable it | Open-sourced flow-matching VLA integration | Merged; enables RL training on the suite |
| 6 | Genuine games passion | BardSong | Wanted richer D&D storytelling | Ship an end-to-end tool | Groq STT → Gemini scene extraction → image gen → narrated video; finetuned on sourcebooks | Closed alpha, 23 DMs |
| 7 | Agenda ownership / early-stage | Co-founding Merlyn | No lab, no funding, full-time job | Produce frontier research anyway | Chose directions, recruited two peers, shipped report + arXiv + open source | 8th at BEHAVIOR-1K, published cadence |
| 8 | Multi-agent / honesty framing | Adversarial eval instinct | Evals get gamed | Design evals adversaries can't game | Treat eval design as adversarial game construction | Cross-cutting pattern: break rigorously, then build the fix |

**Recommended case study:** The Merlyn VLM-judge reward-modeling work, framed as "measuring hard-to-fake signals" — bridge directly to Diplomacy Arena's honesty/deception measurement problem. Second choice: the BEHAVIOR-1K proprioceptive-collapse finding as evidence of large-scale RL experimentation.

**Red-flag questions and how to answer:**
- *"You don't have a PhD or top-lab experience — why are you a fit for a Lead role?"* → "My output speaks to the bar: an 8th-place BEHAVIOR-1K finish, an arXiv baseline critique, and open-source RL infra, all produced by a self-funded 3-person collective in under a year. I originate and execute research agendas. I'd want us both to be clear-eyed about which level fits — I'm equally excited about the Research Scientist scope if that's the better match today."
- *"Have you managed external research partnerships or hired researchers?"* → Honest: "Not formally — I co-founded and directed a small collective. Partnership management and hiring are areas I'd be growing into, and I'd want mentorship or a co-lead on that side early." (Do not overclaim.)
- *"Why leave a stable bank role for a seed startup?"* → The convergence: alignment evals + RL + games is exactly where his two tracks meet; this is the job description of his North Star.

## G) Posting Legitimacy

**Assessment: High Confidence** (posting freshness verified live today per orchestrator; company legitimacy independently corroborated).

| Signal | Finding | Weight |
|--------|---------|--------|
| Company real / funded | $3.6M seed confirmed — General Catalyst, Inovia, Every, TIRTA; PitchBook company profile exists | Strong positive |
| Named, checkable specifics | Six named university partners; named advisors (Kelly Clancy ex-DeepMind; Anthropic researchers); NeurIPS workshop acceptance; Diplomacy/LOL Arenas match public materials | Strong positive |
| Salary transparency | Explicit $140–250K USD base + equity stated | Positive |
| Application channel | Direct email to founders@ with CV + publications + note — human, non-boilerplate, rolling review | Positive |
| JD quality | Specific duties, realistic required/preferred split, no keyword-stuffing or vague boilerplate | Positive |
| Reposting | scan-history.tsv: first appearance 2026-07-05 (user tip). No prior listings | Neutral / clean |
| Posting freshness | Verified live today by orchestrator (site 403s WebFetch; confirmed via browser) | Positive |

**Context notes:** Minor inconsistency between "2 years funded / two years funded" in the JD and public reporting that the $3.6M seed is recent (2025 incubation via Every). Not a red flag — likely counts runway, not company age. Nothing here suggests a ghost or bait posting; this is a real, funded, actively hiring seed lab.

---

## Extracted Keywords

RL environments, reward modeling, multi-agent systems, LLM training, alignment, PyTorch, JAX, Python, RLHF, game-based training, large-scale experiments, pre-training data curation, research agenda, publication (NeurIPS/ICML/AAAI), VLM judges, reward gaming, honesty/deception evaluation, game theory, research partnerships, early-stage startup
