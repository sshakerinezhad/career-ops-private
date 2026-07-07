# Portfolio Project Evaluation: Twilight Imperium Agent Evals

**Date:** 2026-07-05
**Verdict:** BUILD (scoped variant — see pivot)
**Weighted score:** 4.35/5

## Scoring matrix

| Dimension | Weight | Score | Reasoning |
|-----------|--------|-------|-----------|
| Signal for target roles | 25% | 5 | Eval design for open-ended agentic games = exact thesis of Goodstart, Mechanize, Gray Swan, Haize, OpenAI Frontier Evals |
| Uniqueness | 20% | 4.5 | Diplomacy (Goodstart), Werewolf/Avalon benchmarks exist; nobody has touched 4X grand strategy. TI's action space is the novel axis |
| Demo ability | 20% | 3 | Full TI undemoable; scoped text-mode engine + web replay viewer = 2-min demo |
| Metrics potential | 15% | 5 | Win rate/Elo, betrayal rate, promise-keeping (honesty), reward-gaming incidents, performance-vs-action-space-size curves |
| Time to MVP | 10% | 3.5 | Full TI = months (50-page rulebook). Scoped = 2 wk full-time ≈ 4 wk evenings |
| STAR story potential | 10% | 5 | Trade-offs everywhere: scoping, action abstraction, judge design |

## REVISED (2026-07-06, after user challenge + landscape check)

User pushed back: is the scoped version novel, and isn't full TI the cool part? Verdict after research:
- Generic small negotiation games = crowded (Diplomacy/Cicero, Werewolf/Avalon, NegotiationArena, CivRealm). Scoped version's novelty lives ONLY in the controlled action-space ablation.
- **Nobody has done TI + LLMs** (no benchmark found; closest: DSGBench, Orak). Niche empty.
- **AsyncTI4 (github.com/AsyncTI4)** = open-source Java Discord bot running 100% of full TI4. Kills the rules-engine blocker. Risk: Discord-coupled; needs interface botting or engine fork — run a 1-evening feasibility spike first.
- Full TI's real weakness = sample size (3-5 games affordable = anecdotes). Scoped's weakness = no spectacle.

**Final architecture: one agent+judge harness, two outputs.**
1. Scoped ablation engine (hundreds of cheap games) → the FINDING: honesty/performance vs action-space size. Rigor layer for METR/OpenAI/Anthropic-grade readers.
2. Full TI via AsyncTI4 (3-5 games) → the SHOWCASE: "first LLMs to play full Twilight Imperium", betrayal clips, launch writeup. Attention layer for Goodstart/LessWrong reach.

Ship order: feasibility spike on AsyncTI4 → scoped engine + finding → full-TI showcase rides on top at launch. Diplomacy precedent (Cicero science + Twitch spectacle) validates the two-layer model.

## Original pivot analysis (superseded scope, still-valid MVP details below)

**"Action-space scaling for LLM agents: negotiation games as evals"**

MVP scope:
- Small hex map (7-19 tiles), 3 LLM players, simplified econ (2 resources), hidden objectives, full free-text negotiation with binding/non-binding deal mechanics
- Text-mode engine, no graphics; JSON game logs → web replay viewer
- The RESEARCH CONTRIBUTION: hierarchical action schema; measure how model performance/honesty degrade as action space grows (ablate: action count, hidden info, horizon length)
- VLM/LLM judge scoring deception + promise-keeping — directly reuses his Merlyn VLM-judge reward work

Why this beats full TI: open action space stops being an implementation nightmare and becomes the measured variable — the eval insight IS the deliverable.

## Interview pack (per project mode)
1. One-pager: architecture + metrics + eval plan
2. Demo: web replay of one juicy betrayal game + metrics dashboard
3. Postmortem: what broke, judge-gaming incidents, mitigations

## 80/20 plan (evenings/weekends cadence)
- Wk 1-2: engine + 3-agent loop + basic negotiation → first full game log
- Wk 3: metrics + ablations (action-space size sweep)
- Wk 4: replay viewer + LessWrong writeup + one-pager

## Payoff map
- Goodstart founders email: "built a negotiation-game eval, here's the writeup" — near-perfect hook
- Mechanize/Gray Swan/Haize: RL-environment + adversarial-eval credibility
- OpenAI Frontier Evals: environments portfolio piece
- Anthropic (parked): exactly the "proof" that unparks it
- LessWrong post #2 → publication cadence signal
