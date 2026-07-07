# Evaluation: Good Start Labs — Research Scientist

**Date:** 2026-07-05
**Archetype:** Alignment / Evals Research Engineer (primary) + ML / LLM Research Engineer (secondary)
**Score:** 4.4/5
**Legitimacy:** High Confidence
**URL:** https://goodstartlabs.com/careers/research-scientist
**PDF:** output/cv-candidate-goodstart-rs-2026-07-05.pdf
**Batch ID:** 010-goodstart-rs

---

## Machine Summary

```yaml
company: "Good Start Labs"
role: "Research Scientist"
score: 4.4
legitimacy_tier: "High Confidence"
archetype: "Alignment / Evals Research Engineer"
final_decision: "Apply"
hard_stops: []
soft_gaps:
  - "PhD 'required' — candidate is M.Eng in progress, not PhD (mitigated by 'or equivalent research experience' clause + published research)"
  - "No pre/post-training experience at 260B+ parameter scale — VLA-scale finetuning only"
  - "No direct game-playing AI (AlphaGo/Cicero lineage) experience — game work is D&D tooling + eval-as-game framing"
top_strengths:
  - "Eval-design-as-games is his explicit cross-cutting superpower — company literally builds games to align/train models"
  - "Published RL/LLM-training research: BEHAVIOR-1K 8th place, LIBERO-PRO arXiv critique, RLinf, LessWrong"
  - "VLM judges that turn rollouts into dense, hard-to-game RL rewards — direct reward-modeling match"
risk_level: "Medium"
confidence: "High"
next_action: "Email founders@goodstartlabs.com with CV + 3 publications (BEHAVIOR report, LIBERO-PRO arXiv, LessWrong) + a short games+AI note"
```

## A) Role Summary

| Field | Value |
|-------|-------|
| Detected archetype | Alignment / Evals Research Engineer (primary); ML / LLM Research Engineer (secondary) |
| Domain | AI alignment + capability training "through entertainment" — games as RL environments + training-data source |
| Function | Research Scientist: design/run experiments, build RL environments, curate pre-training data, implement training algorithms, run large-scale experiments |
| Seniority | IC research scientist, early-stage (2 years funded, $3.6M raised) |
| Remote | Toronto **or** New York preferred; flexible for exceptional remote candidates |
| Team size | Seed-stage startup, spun out of Every; small team, six university research partnerships |
| TL;DR | Improve a 260B+ parameter model under contract using game-generated data + RL, collaborate with academic partners, demonstrate measurable gains to lab customers. Backed by General Catalyst + Inovia; advisors ex-DeepMind + Anthropic. |

This is one of the closest role-to-profile matches in the pipeline. Good Start Labs frames its mission as "alignment through entertainment" and its research surface — RL environments, game-generated data, reward modeling, deception/alignment signals from real player preferences — maps almost one-to-one onto the candidate's two stated "love axes" (frontier RL and adversarial/game-like eval construction). The candidate flagged this company himself.

## B) CV Match

| JD requirement | CV evidence | Verdict |
|----------------|-------------|---------|
| PhD in CS/ML **or equivalent research experience at top labs** | M.Eng (AI & Robotics) UofT, in progress (cv.md:63); published independent research via Merlyn Labs | Partial — no PhD; leans on "equivalent research experience" clause |
| Published research in RL, multi-agent, or LLM training | BEHAVIOR-1K 8th place, RL on BEHAVIOR-1K via RLinf (cv.md:28,40); LIBERO-PRO arXiv critique (cv.md:25); LessWrong VLA analysis (cv.md:45) | Strong match |
| Strong Python + PyTorch/JAX, implement novel research ideas | "Python, C/C++, PyTorch, JAX, RL, Imitation Learning, LLM Fine-tuning" (cv.md:74) | Direct match |
| Genuine passion for games and what they teach about intelligence | BardSong D&D storytelling tool (cv.md:47–50); interests: D&D, Twilight Imperium (cv.md:76); eval-design-as-game-making is his stated superpower | Exceptional match |
| Comfortable at early-stage startup | Co-founded Merlyn Labs, self-funded research collective, shipped research while working full-time (cv.md:23) | Direct match |
| *Preferred:* RLHF, reward modeling, alignment | "VLM judges that score rollouts into dense, context-dependent RL rewards that are difficult to game" (cv.md:27); BMO GenAI bias/risk detection (cv.md:18) | Strong match |
| *Preferred:* pre/post-training at scale (260B+) | VLA-scale finetuning only (21%→42%, cv.md:26); no 260B LLM training | Gap |
| *Preferred:* game-playing AI (AlphaGo/Cicero, game engines) | No direct AlphaGo-lineage work; nearest is BardSong + eval-as-game framing | Gap |
| *Preferred:* DeepMind/FAIR/OpenAI/Anthropic or top academic group | BMO AI CoE + Merlyn Labs (independent collective) — not a marquee lab | Gap |

**Gaps + mitigation:**

1. **PhD credential (soft blocker, not hard).** The JD explicitly writes "or equivalent research experience at top labs." Lead with the published, externally-verifiable record: BEHAVIOR-1K leaderboard placement, an arXiv paper (LIBERO-PRO critique), a LessWrong analysis, and an open-source RL infra contribution (RLinf). For a 2-year seed startup hiring pragmatically, a strong publication trail beats a credential. Frame Merlyn Labs honestly as a self-organized research collective (never imply funding/headcount).
2. **260B+ scale (nice-to-have).** Preferred, not required. Do not overclaim. Adjacent strength: he builds RL reward machinery (VLM judges → dense rewards) and RL training pipelines (RLinf on BEHAVIOR-1K); the transferable skill is designing reward/eval signal and running large experiments, not the parameter count. Position the gap as scale-of-compute, not a conceptual one.
3. **Game-playing AI lineage (nice-to-have).** He hasn't shipped an AlphaGo/Cicero-style agent, but his entire thesis is eval-design-as-game-construction, and the reward-modeling angle (hard-to-game dense rewards) is exactly what "games that make models better" needs. This gap is more surface than substance for this specific company.

## C) Level and Strategy

- **JD level vs natural level:** The posting is a broad IC "Research Scientist" at a seed startup. The candidate's natural level is Mid-Senior research engineer. Good alignment — no downlevel risk; if anything an early-stage lab rewards breadth and ownership, which is his profile.
- **Sell senior without lying:** Lead with three concrete, verifiable results — (a) found systematic risk-downplaying bias in a $200B+ AUM GenAI tool and built a deterministic eval pipeline to surface it; (b) 8th place in Stanford's BEHAVIOR-1K Challenge with a published technical report; (c) VLM judges producing dense RL rewards that resist gaming. Founder/co-founder framing is an asset here: "I've already run an independent research effort with no resources and shipped published results" is exactly the early-stage signal they screen for.
- **If downleveled / equity-heavy:** Base is $140–220K USD; treat the top of range as the target given the publication record. If they anchor low on base, push on the total package and the research agenda (the work itself is the draw). Accept a review checkpoint at 6 months with clear criteria; weigh equity carefully — seed-stage, $3.6M raised, meaningful upside but high variance.

## D) Comp and Demand

| Data point | Value | Source |
|------------|-------|--------|
| Posted range | $140K–$220K USD base + meaningful equity | JD |
| Toronto AI research scientist (established/senior) | ~CA$150K–220K+ at Google/Meta/Shopify Toronto | [Wellfound](https://wellfound.com/hiring-data/l/toronto/i/artificial-intelligence), [Zen van Riel](https://zenvanriel.com/job/ai-engineer-salary-toronto/) |
| Ontario AI research scientist distribution | 75th pct ~CA$140K, 90th pct ~CA$175K | [ZipRecruiter](https://www.ziprecruiter.com/Salaries/Artificial-Intelligence-Research-Scientist-Salary--in-Ontario) |
| Company funding | $3.6M raised, General Catalyst + Inovia + Every + angels (ex-DeepMind) | [Every](https://every.to/on-every/our-new-incubation-raised-3-6-million-to-teach-ais-to-play-games), [Inovia](https://www.inovia.vc/active-companies/good-start-labs/) |

**Comp score: 3/5.** The band is quoted in **USD** for a Toronto/NYC role, which is a real plus against local CAD comparables — $220K USD top-of-range sits above the Toronto/Ontario market for a research scientist and is at-to-above market for a seed startup. It is, however, well below the candidate's stated frontier-lab target ($300–500K USD TC) — but this is explicitly not a frontier lab, and his own profile flags US robotics/AI startups at $180–300K base + equity as in-scope. Real value here is equity + agenda, not cash. Given the fit and Toronto-home convenience, the comp is acceptable, not the headline.

## E) Personalization Plan

**Top 5 CV changes:**

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | "LLM/agent evaluation, VLA, RL, robotics" | Lead with "reward modeling and hard-to-game evaluation for RL training" | Mirror the company's core: game-based RL + alignment |
| 2 | Merlyn Labs bullet | "VLM judges that score rollouts into dense, context-dependent RL rewards difficult to game" | Promote to first bullet; use JD vocab "reward modeling," "RL environments" | This is the single most on-target line for the role |
| 3 | BEHAVIOR-1K project | Technical report + LessWrong | Foreground the RL-environment + large-experiment framing (10,000+ demos, 22 tasks, OmniGibson) | Matches "build/optimize RL environments, run large-scale experiments" |
| 4 | BardSong | D&D storytelling pipeline | Keep, reframe as "games + LLMs" proof of genuine games passion | Directly satisfies the "genuine passion for games" required bar |
| 5 | Skills | Generic ML list | Surface "RLHF-adjacent reward modeling, eval design, RL environments, PyTorch/JAX" near top | ATS + human screen for their required stack |

**Top 5 LinkedIn changes:** headline to "AI Research Engineer — RL, reward modeling & hard-to-game evaluation"; featured section pin the BEHAVIOR report + LIBERO-PRO arXiv + LessWrong; add "games + AI" line to About; list RLinf contribution; ensure "reinforcement learning" and "reward modeling" appear in skills.

## F) Interview Plan

The application itself is a mini-interview: they ask for CV + 2–3 publications + a short "why games + AI excites you" note. Send **BEHAVIOR-1K technical report, LIBERO-PRO arXiv paper, and the LessWrong analysis** (RLinf as a fourth if links allowed). The note is a genuine advantage — the eval-as-game-construction thesis is real and personal (D&D, Twilight Imperium, and adversarial evals that resist gaming).

| # | JD requirement | STAR story | S | T | A | R |
|---|----------------|------------|---|---|---|---|
| 1 | Reward modeling / hard-to-game rewards | VLM judges for RL rewards | Sparse RL rewards on manipulation | Dense, un-gameable reward signal | Built VLM judges scoring rollouts by context | Dense rewards resisting gaming |
| 2 | Published RL research | BEHAVIOR-1K 8th place | Stanford challenge, 10k+ demos, 22 tasks | Maximize task success | Found proprioceptive collapse; 60% masking | +48% success; published report |
| 3 | Rigorous experiments | LIBERO-PRO critique | π0.5 "generalization failure" claim | Test if real or overfitting | Conservative finetuning baseline | 21%→42%; arXiv paper |
| 4 | Alignment / finding failures | BMO GenAI bias | $200B+ AUM wealth GenAI tool | Detect misalignment at scale | Deterministic eval pipeline, synthesized inputs | Found systematic risk-downplaying bias |
| 5 | Build RL environments | RLinf integration | RL on BEHAVIOR-1K needed infra | Enable flow-matching VLA RL | Open-sourced integration for RLinf | RL training enabled in OmniGibson |
| 6 | Passion for games | BardSong | D&D narration by hand | Automate storytelling | STT→scene→image→narrated video pipeline | Closed alpha, 23 DMs |
| 7 | Early-stage ownership | Merlyn Labs | No resources, full-time job | Ship real research anyway | Co-founded collective, published | 8th place + arXiv + LessWrong |
| 8 | Novel-idea implementation | Chunking vs ensembling | VLA temporal behavior unclear | Test execution strategies | Chunked vs temporal ensembling | Chunked won 3x |

**Recommended case study:** the VLM-judge / hard-to-game reward work — it's the most on-thesis for a company whose entire premise is using games to generate high-quality, alignment-relevant training signal.

**Red-flag questions to prep:**
- *"You don't have a PhD — walk me through your research."* → Point to the published, externally-verifiable trail; frame equivalent experience concretely.
- *"Have you trained models at 260B scale?"* → Honest no; pivot to reward/eval signal design and large-experiment discipline, which transfer.
- *"What's Merlyn Labs?"* → Use the profile one-liner exactly: self-organized collective, three people, nights/weekends, 8th in BEHAVIOR-1K, published methods, open-source RL contributions. Never imply funding or company status.

## G) Posting Legitimacy

**Assessment: High Confidence.**

| Signal | Reading |
|--------|---------|
| Company real + funded | Verified: $3.6M from General Catalyst, Inovia, Every, angels — multiple independent sources (Every, Inovia, PitchBook) |
| Research credibility | NeurIPS workshop paper (accepted), AAAI submission; named advisors (Kelly Clancy ex-DeepMind; researchers from Anthropic) |
| Description quality | Specific, non-boilerplate: named 260B+ model, named university partners (Princeton, Rice, UCSD, HKUST, UMD, NYU), concrete stack (RL environments, pre/post-training) |
| Salary transparency | Explicit USD band ($140–220K) + equity + $3.6M runway disclosed |
| Application channel | Direct to founders@goodstartlabs.com with CV + publications + note — human, low-friction, not a ghost ATS funnel |
| Reposting | Scanned once today (manual user tip) alongside a Research Lead role; no repost pattern |
| Liveness | Verified live today via browser (per orchestrator) |
| Freshness (exact days posted / apply-button state) | Unverified (batch mode) — but corroborated by live browser check |

No suspicious signals. Specificity, verifiable backing, transparent comp, and a direct-to-founder application all point to a genuine, active opening.

---

## Extracted Keywords

RL environments, reward modeling, RLHF, post-training, pre-training, LLM training, alignment, game-based training, multi-agent systems, PyTorch, JAX, Python, large-scale experiments, reinforcement learning, agents, computer use, VLM judges, eval design, 260B parameters, research scientist
