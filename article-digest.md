# Article Digest — Proof Points

Compact, citable proof points from Shayan's research output. Each entry lists what the artifact IS, what claims it backs, and what NOT to claim. Content generation pulls from here; if a claim isn't here or in cv.md, ask before using it.

## 1. BEHAVIOR-1K technical report (Merlyn Labs)

- **URL:** https://merlyn-labs.com/behavior-report
- **What it is:** Team technical report on Stanford's BEHAVIOR-1K Challenge (8th place). Trained on 10,000+ demonstrations across 22 tasks.
- **Claims it backs:**
  - Proprioceptive collapse: masking 60% of proprioception improved task success by up to 48%
  - Action-chunking trade-offs: chunked execution beat temporal ensembling (~3x)
- **Voice notes:** team result, say "we placed 8th."

## 2. LessWrong post (Merlyn Labs / Shayan)

- **URL:** https://www.lesswrong.com/posts/4p2HBMxCkh7pZ3xCa
- **What it is:** A **model-organism view of the BEHAVIOR-1K findings** (item 1). Frames the failure modes for an alignment audience.
- **NOT:** anything about LIBERO-PRO, π0.5, recipes, or benchmark overfitting. That is item 3. Conflating the two was a real drafting error (caught by user 2026-07-07) — do not repeat it.

## 3. "Recalibrating VLA Baselines: Conservative Finetuning Closes the Generalization Gap on LIBERO" (paper)

- **File:** `data/papers/recalibrating-vla-baselines.pdf`
- **Status:** unpublished (submitted, likely rejected — never claim "published" or name a venue; "we wrote a paper" / "proposed an alternative baseline" is the honest framing)
- **What it is:** Systematic study of why the published π0.5 checkpoint collapses on LIBERO-PRO position-swap evaluation (96% on standard LIBERO → 21% on position-swap).
- **Claims it backs:**
  - A conservative full-finetuning recipe (batch 64, LR 1e-5) doubles position-swap success to 42% (vs published 21%), stable 8k-27k steps, while matching standard LIBERO — no architectural change
  - The published checkpoint's brittleness is **recipe-induced (trajectory memorization), not a fundamental representational limit**
  - Tested and rejected two rival hypotheses: LoRA (15-21%, consistently below FFT at matched hyperparameters) and frozen video-diffusion visual priors (42% → 35%, made it worse)
  - Effect is bounded: too-conservative recipes (batch 16, LR 1e-6) drop to 26%
  - Implication: recent methods reporting LIBERO-PRO gains evaluate against a miscalibrated baseline; reported gains partially compensate for recipe-induced brittleness
- **Terminology:** LIBERO-PRO **position-swap** (the paper's term), not "object swap."
- **Backs cv.md line:** "Showed π0.5 generalization failures on LIBERO-PRO are recipe-induced overfitting; proposed an alternative baseline"
