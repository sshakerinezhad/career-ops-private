# Agent Inbox — queued for next session

## Session handoff (2026-09-03, end of session 9 — remote/web session, branch `claude/resume-ashby-application-oeye2e` fast-forwarded into main)

**MERCOR PREP: DONE 2026-09-03 (session 10, branch `claude/mercor-interview-prep-svvx9u`).** `interview-prep/mercor-research-engineer-post-training.md` exists: Gmail timeline, team/artifact research (397B SkyRL blog 09-01 is the hook), fit table, drafted answers, questions to ask, checklist, day-by-day plan to Wed 2026-09-09 13:00 ET (Google Meet, interviewer James Moore per the 09-01 invite). **Six items still need Shayan** (file §10): M.Eng-vs-start-date answer, a 5-line note on the Litmus problem, BMO proprietary boundary, AI-notetaker on/off, BMO/TMX offer outcomes, and which CV went to Mercor ~08-20 (sources here are stale per the 09-02 handoff). No `story-bank.md` yet: three STAR+R skeletons are in the prep file §6 awaiting his S/R details before they go into a bank. Do not re-research; run `interview/practice` against the file next.

### Done this session
- **Mubit Founding Engineer (London, on-site, Ashby 77a5ea32) SUBMITTED by Shayan 2026-09-03.** Tracker #61 Applied, score N/A (no evaluation run, resume-only ask). CV `output/cv-candidate-mubit-founding-eng-2026-09-03.pdf`, A4, one page, 8 iterations. Follow-up seeded 09-10. Form: right-to-work ticked "I require sponsorship" (Yes would be a lie, No disqualifies) and the CV summary carries "Canadian citizen, no sponsorship needed; eligible for the Youth Mobility Scheme and High Potential Individual visa" (both verified on gov.uk 09-03: YMS Canadians 18-35, 2y+1y; HPI McMaster on the 2022 list covering Nov 2022-Oct 2023 awards, once only). Salary field: "Open to a salary and equity split that reflects the scope of the role and what you expect from a founding engineer. Happy to talk numbers early." No number given, by his choice. Mubit: founded Nov 2025, ~$2.1M seed (Hoxton, Heavybit), first eng hire.
- **New facts Shayan stated in chat, used in the Mubit CV, NOT yet in cv.md/main.tex** (he has not said yes to writing them in; show the lines first, per the Off-Limits rule):
  - "Built, scaled, and own BMO Wealth's multi-agent data layer: an orchestration harness with graph, analysis, and search tools." (the graph DB of client data is one tool; no "agent marketplace" wording)
  - "Used to discover, sort, and scan nearly 30,000 clients for defined-benefit plans, turning a 5-day manual job into a 3-hour autonomous task." (his exact words; proprietary detail stays out)
  - "Owned a proprietary subcutaneous neurostimulator from first idea to production device" at Epineuron (he can't share detail; kept separate from PeriPulse, unclear if same device)
  - The 30,000 / 3 hours / 5 day metrics live as provenance-tagged exceptions in `config/cv-facts.json` (new file) so the fact gate passes.
- **Ledger:** D013 (cv, recur 4: one-line bullets that FILL the line, built/own/scaled beats, BMO Wealth naming), D014 (cv, recur 2: his outcome-bullet phrasing), D015 (cv: Merlyn summary phrasing + Interests & Hobbies row at the bottom), D012 (now recur 2, extended to form answers: one plain sentence, no rationale, no quoting the posting back). D013 is at recur 4 → graduate into voice-dna.md on the next prune.
- **Rendering note for this remote box:** the raw template renders ~25% taller than the shipped July CVs (their PDFs show ~11pt line pitch vs 15-16pt). The Mubit HTML got a `<style id="one-page-fit">` override (li line-height 1.4, margin 1px, section 12px, header 12px, summary 1.45). Reuse it or the page will not fit. A4 measurement: viewport 679px, budget 1007px (the letter helper `.tmp-measure.mjs` assumes 701/940). Contact row at A4 width fits only 4 items; LinkedIn was dropped.
- Corpus: Mubit CV and salary answer finalized. `mubit-founding-eng-salary-answer-2026-09-03` (numbered drafts) left unfinalized on purpose, superseded. The 5 older unfinalized drafts from 08-01 are unchanged.

### Still open
- **BMO offer deadline was today 2026-09-03 4:00 PM EST.** Shayan did not say what he did. Ask.
- TMX Group "6428 AI Intern" offer letter (08-25): still no instruction.
- Other-machine CV sources still unmerged here (see 09-02 handoff). Today's cv-facts.json, deltas, corpus rows will need to survive that merge too.
- Remote branches: `claude/continue-previous-gjuvlg` and `claude/continue-previous-wx470w` (07-08) share no history with main (pre-rewrite), contents superseded; delete only if Shayan says so. Four Dependabot branches open (js-yaml 5.4.1, playwright 1.62.1, actions/stale 11, charmbracelet ansi).
- career-ops update 1.24.0 → 1.32.0 offered again, unanswered.
- `modes/_brief.md` was auto-copied by doctor and committed by the stop hook with placeholders unfilled.

## Session handoff (2026-09-02, end of session 8 — remote/web session, branch `claude/status-check-projects-sv1tym` merged to main)

**Nothing submitted. 28 evaluations added (reports 033-060), Mercor backfilled as #32 (Interview). Two sweeps run. All pushed to main.**

### Hard deadlines
1. **BMO offer: confirm by Thu 2026-09-03 4:00 PM EST** (Jovic Howland, thread "Shayan's Revised Offer"). AI Developer, HM Rhiannon Freeman, start 2027-06-01, BMO Place, "Rate of pay: $110.00 + Bonus Eligibility", bonus 10%; earlier thread gave the band as 61,600-113,900 CAD. Shayan's call; not in the tracker.
2. **Mercor HM screen: Wed 2026-09-09 13:00-13:20 ET**, Google Meet (link in the 2026-09-01 updated invite). Interviewer is **James Moore** on the updated invite (was Charlie Ruan on the 08-30 confirmation; Shayan's reply still says "look forward to speaking with Charlie"). AI notetaker with opt-out link. Recruiter Ally Sollis; Aksh Garg runs research eng (team: Edward Hu, Charlie Ruan/SkyRL, Victor/Tau-bench). Litmus take-home submitted 08-27, advanced 08-28. **No `interview-prep/mercor-*.md` exists yet** — use the report-less path in `modes/interview-prep.md`. Six sibling Mercor reqs are in the inbox (Benchmarking, Real Environments, Environments/Data/Post-Training, Enterprise Evals Platform, Agentic Systems, APEX Benchmarks): ask Aksh/Ally about them in-process rather than cold-applying.
3. TMX Group sent an offer letter 2026-08-25 for "6428 AI Intern" (Workday). Not in the tracker. Shayan hasn't said what he wants done with it.

### Directives recorded this session (modes/_profile.md Calibration Rules 6-8)
- Anthropic: do not surface in triage. Attainability is the first sort key (assessment-first > startups/mid-size > marquee; warm path planned for every APPLY). Robotics is co-primary again.
- **Paper "Recalibrating VLA Baselines" was REJECTED at CoRL 2026** (user reported 09-02). article-digest.md §3 and _profile.md updated: never claim published/accepted/under review/venue. Not on arXiv as far as the sources say; posting it was suggested, not decided.

### CV SOURCES ARE STALE HERE — merge from the other machine first
`cv.md` / `main.tex` / `article-digest.md` / profile were last edited 2026-07-30 in this repo. The Mercor application (~08-20) and any résumé edits after 07-30 happened on the other machine and are not here. **Every tailored artifact was deferred for that reason** — all 28 reports carry `**PDF:** deferred — CV sources pending sync`. On the other machine: `git pull origin main`, expect conflicts only in `data/applications.md` (row order; today's rows are 32-60), `data/pipeline.md`, `data/scan-history.tsv`, possibly `data/corpus.jsonl` and `data/deltas.md` if the edit-learning system was used there. Keep both sides' rows; never drop a report row. The paper-status edits to article-digest.md/_profile.md must survive the merge.

### Apply queue (from 28 reports today; routes are each report's `next_action`)
| # | Company | Role | Score | Route in |
|---|---|---|---|---|
| 53 | Epoch AI | SWE, Benchmarking (remote, $125-275K) | 4.5 | Paid work trial. DM Tom Adamczewski (@tmkadamcz). JD says no cover letter. Canada unconfirmed. Port one benchmark into Inspect first. |
| 55 | Thinking Machines | Research, Post-Training Evals | 4.5 stretch | Warm path only via Alex Robey (@AlexRobey23, X 08-31). No YoE floor, no PhD gate. Rule 2 still governs cold applies. |
| 44 | Mechanize | RE, Alignment | 4.4 | Two-minute résumé-only form, take-home at stage 2. Founder note optional. Google-acquihire reports flagged. |
| 54 | AI Digest | MTS (remote, $150-350K) | 4.4 | Résumé optional, LinkedIn/site REQUIRED — the Win95 portfolio page is the screen; rewrite it to read agent-eval engineer in 10s. |
| 34 | Nuro | Applied AI Researcher, Agent Systems & Eval | 4.2 | contacto first (small CEO-adjacent team), then Greenhouse. |
| 36 | Waabi | RE, World Models (Toronto) | 4.2 | UofT warm path; verify US-entity USD band vs Toronto CAD. |
| 48 | Wayve | Roboticist, Robot Foundation Model | 4.1 stretch | Apply here, NOT the RS sibling (#47, pubs under Essential). |
| 37 | Dyna Robotics | RE/RS, Simulation | 4.0 | Ashby + founder note (Jason Ma). Verify whether BEHAVIOR-1K work involved a mobile base before claiming. |
| 41 | Chef Robotics | Senior MLE, Manipulation | 4.0 | contacto to route around the 5+ yr line. |
Consider tier, better sibling doors named in reports: PI #40 (email a π0.5 author with the recalibration result), Skild #46 (apply to July #14 first), Agility #56 (apply to Senior AI Research Engineer gh_jid 6032175004 instead; requires CURRENT US auth), Prime Intellect #42 (July #20 RL req still unsent and better), Jump #50 (Campus AI Research Engineer req 8052313 instead), Nuance #60 (Research Fellow req 17 paid trial instead of the UXR req). Skips: NVIDIA #33, Together #45, Contra #59, Nuance #60, plus GM/Torc/Benchling/Vizcom/Lightning/Scale/Standard Bots/Apptronik below 3.7.

### Still-open July items
Figure #13 (applied 07-28) and Haize #22 (applied 07-30): confirmation receipts only, no reply. GDM ASAT #31: CV built, cover note paragraph 2 still needs Shayan. METR retake ask (corpus id `metr-12-retake-ask-2026-08-01`) still unsent. OpenAI rows are deprioritized by rule 7 (three cold-screen rejections).

### New tooling / data layout
- `data/scan-x.mjs` — zero-key X/Twitter hiring-post scanner (DDG HTML + past-month filter via r.jina.ai, then the mirror per status). `--dry-run`, `--days N`, `--query`, `--self-test`. Documented in modes/_custom.md. Plain `WebSearch site:x.com` was measured near-useless. Reply-level "join us" chatter still needs a logged-in X session (Shayan's laptop) or an X API key; upstream 1.30 ships a BYO-key `xquik` plugin, manifest not readable from the remote box.
- `data/pipeline.md` now has a bottom section "ATS full sweep 2026-09-02 — bulk" (1,912 rows from `scan-ats-full.mjs --since 30`); 22 passers were copied to Pending tagged `ats-full 2026-09-02 triage-pass`. X leads are tagged `x-websearch 2026-09-02`. Pending is ~611 rows.
- Parallel-worker rule added to modes/_custom.md: per-worker scratch filenames + programmatic JD id/title assertion (two cache collisions were caught today).
- `.tmp-read-form.mjs` works from the remote box; Playwright does not (browser version mismatch); `npm ci` is needed there for js-yaml; GitHub API is scoped to this repo only.

### Unanswered offers / hygiene
- career-ops update 1.24.0 → 1.31.0 offered twice, unanswered (adds /calibrate, ATS-friendliness check, text CV output, reply-watch status log). Run `node update-system.mjs apply` or `dismiss`.
- `node data/learn.mjs audit` is still red with the same 5 unfinalized drafts from 08-01 (two are intentionally dead follow-ups). No user-facing artifacts were drafted this session, so nothing new to log. Shayan said the enforcement pass for the edit-learning system was done on the other machine; expect to merge that too.
- Mercor scan-history row from July (Software Engineer, Applied AI) is unrelated to the role he is interviewing for.


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
