# Agent Inbox — queued for next session

## Session handoff (2026-08-01, end of session 7)

**Nothing submitted. One evaluation added: Google DeepMind ASAT #31 (Research Engineer, AGI Safety and Alignment, 4.3/5, Apply).** Full detail + resume point in `data/apply-session-2026-07-06.md`, which stays the live apply handoff.

**OpenAI #3, OpenAI #4 and METR #12 all came back REJECTED** (reported 2026-08-01, dates not captured). Tracker updated. Follow-up debt closed the bad way; cadence now 0 overdue. **Apply record: 5 submitted, 3 rejected, 2 open, 0 human interviews** — and the 3 rejections were his 3 highest-scored roles (4.8/4.6/4.6), all cold ATS applies with no human contact. Score isn't the filter, the résumé screen is.

**Open in priority order:**
1. **METR retake ask is drafted and UNSENT** — held back deliberately for the rejection reply, now live. Corpus id `metr-12-retake-ask-2026-08-01`. Ask Shayan whether it's going out.
2. **GDM ASAT #31** — CV not built, cover note is the deciding artifact and paragraph 2 must come from Shayan. Report 031 has the tailoring plan and interview plan. Given the 3 cold-apply rejections, `/career-ops contacto` for ASAT may beat another cold submit; Shayan hasn't ruled. The hiring post asks people not to email the team individually, so respect that in any contact route.
3. **3 local commits unpushed** (`d17b7cc`, `1a2ad92`, `35c63c6`) — the classifier denies `git push` from this repo by design. Ask Shayan to run `! git push origin main`.
4. **career-ops v1.23.0 → v1.24.0 offered, unanswered.** Includes an a16z speedrun talent-network provider (~200 startups, one feed) that fits the wide-net directive.
5. **Don't re-send the dead follow-up drafts.** `fu-openai-3-4-2026-08-01` and `fu-metr-12-2026-08-01` are moot and stay unfinalized in the corpus on purpose — faking a `final` would inflate the survival metric with artifacts that never shipped.

## Session handoff (updated 2026-07-08, end of session 3)

**Applications in:** OpenAI #3 (2026-07-07) · METR #12 (2026-07-07). Both follow-ups pinned 2026-07-14. **OpenAI #4 status UNKNOWN — ask first thing** (details + full resume-point in `data/apply-session-2026-07-06.md`, which is the live apply handoff; next up after #4 resolution: Figure #13, fully prepped).

**Major correction this session: BMO start = Sep 2025, not Sep 2024** (typo originated in main.tex, propagated everywhere). Sources fixed; _profile.md rules 11/11b/11c/12 added (main.tex = content truth, HTML template = format, one-line contact "Toronto, Canada" only, one-line backed competencies, no gutted roles). **YoE outside internships/academia is now <1 yr → bracket 0-1** — reports 001/008/023/028/030 still contain stale "~2 yrs" math; re-check screen risk before applying to those (Surge #23 likely fails its 2-6 yr floor now). OpenAI #3 + agent-pt PDF went out with the old date (kept as record; unremarkable typo if asked). 7 remaining queue PDFs still stale — regenerate per-application (done so far: OpenAI #4, METR, Figure).

## Older handoff (2026-07-06, end of session 1)

**State:** Onboarding + calibration complete. 30 roles evaluated (reports 001-030), tracker merged, pipeline clean. All rules durable in `modes/_profile.md`: Calibration Rules (hard gates, Anthropic parked, honest-bar) + CV/PDF Generation Rules 1-9 (exactly one FULL page ~600 words, ≤3-sentence summary, implied-first-person zero pronouns, no em/double dashes, no "claim—restatement" flourish, BMO greeter robot never appears, no "M.Eng candidate", no verb inflation, Merlyn restraint).

**CV SET: DONE AND VERIFIED (2026-07-06).** All 9 PDFs passed full regression: 1 page, filled, zero pronouns/dashes/robot/visa-overstatement, Epineuron + BMO graph bullet restored, "Canadian citizen · TN-eligible" phrasing. Nothing in flight. NEXT SESSION STARTS AT: applications via `apply` mode, user picks first role from apply-track below.

**APPLY-TRACK (user has NOT submitted anything yet; PDFs exist for all 9):**
OpenAI Evals RE (004) · OpenAI Agent PT (003, stretch) · Cohere Model Eval Toronto (009) · METR (012) · Figure Helix (013) · Skild PT (014) · Mechanize (015, user to gut-check values fit) · Amazon FAR (001, screen-risk on YoE).
Batch-2 additions WITHOUT PDFs yet (generate on demand): Reflection AI (019), Prime Intellect (020), Gray Swan (021), Haize (022), Surge (023), Tesla (026). Meta FAIR (029)/Dexterity (030) = Consider.

**NEXT STEPS in order:**
1. User eyeballs final Amazon PDF (his regression test) → then applications begin via `apply` mode. NEVER submit for him.
2. TI project (data/projects/ti-agent-evals.md, revised two-layer architecture): first step = 1-evening AsyncTI4 feasibility spike (github.com/AsyncTI4 — can LLM players drive it?). Scoped ablation engine = the finding; full TI = launch spectacle.
3. GOODSTART ON HOLD (user decision): founders email only AFTER TI project ships. Both roles marked in tracker.
4. Anthropic ×2, BD, DeepMind RS: parked (see tracker notes + calibration rules).
5. Not yet done: recurring scan automation (offer "scan every 3 days"); followup-seed once first application goes out (`node followup-seed.mjs`).

**Infra quirks:** merlyn-labs.com + goodstartlabs.com 403 WebFetch → inline Playwright node script. Workday pages: check-liveness false-expires them — ALWAYS browser-verify Workday "expired". OpenAI/Cohere Ashby pages may need Playwright. 24 portals converted to zero-token APIs; ~20 remain websearch-only.
