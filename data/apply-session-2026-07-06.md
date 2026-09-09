# Apply Session Handoff — 2026-07-06 (updated 2026-07-07)

> **2026-09-02 (session 8):** the current apply queue, deadlines (BMO 09-03, Mercor screen 09-09) and the CV-sync blocker are in `data/agent-inbox.md`, top section. This file stays the detailed per-application resume point for the July applications.

**DATE CORRECTION (2026-07-07, session 3): BMO start is Sep 2025, NOT Sep 2024.** The typo originated in `main.tex` and propagated to cv.md, all 9 PDFs (2026-07-05), and YoE math in reports 001/008/023/028/030. Sources fixed (main.tex, cv.md, _profile.md rules 11-12 added). `main.tex` is now the canonical original resume; tailored CVs start from it, light-touch only (no gutted one-liner roles). Corrected PDF for #4: `output/cv-candidate-openai-evals-re-2026-07-07.pdf` — HTML-template format (user-confirmed keeper), regenerated via `generate-pdf.mjs --format=letter`, content from main.tex per _profile.md rules 11/11b/11c/12 (one-line contact, one-line high-signal competencies, full bullets; cuts for page fit: BardSong project + BEHAVIOR boundary-resampling bullet). Its `.html` intermediate in `output/` is the layout reference for regenerating the rest. Old evals-re PDF deleted. **The other 8 PDFs still carry Sep 2024, the two-line contact, buzzword competencies, and gutted bullets — regenerate from main.tex content in this format before EACH remaining application.** The submitted #3 PDF (cv-candidate-openai-agent-pt-2026-07-05.pdf, kept as record) went out with Sep 2024; user aware. YoE dropdown honest math is now under 1 year → bracket 0-1 (see _profile.md policy), NOT 2-4 as previously drafted.

**RESUME POINT (2026-08-01, session 7 — START HERE, overrides everything below):**

**Nothing was submitted this session. One new evaluation: Google DeepMind ASAT #31.**

1. **FOLLOW-UP DEBT IS CLOSED, THE BAD WAY: OpenAI #3, OpenAI #4, and METR #12 all came back REJECTED** (user-reported 2026-08-01, exact rejection dates not captured). All three set to `Rejected` via `set-status.mjs`. The follow-up drafts written this session are **dead, do not send them** — regenerating them was wasted work and the earlier 07-30 drafts had never been persisted anywhere either. Cadence is now clean: 0 overdue, 2 waiting (Figure #13 due 08-04, Haize #22 due 08-06).
   - **The METR retake ask is LIVE and UNSENT.** It was deliberately held out of the follow-up for exactly this moment. Draft is logged in the corpus as `metr-12-retake-ask-2026-08-01` (lint clean, zero violations); text is in the session transcript. It leads with the ask, states the L3 spec misread flatly, and gives them an easy no. It deliberately does NOT mention the Catan work — they already rejected him, and stapling a pitch to a retake request muddies both. Shayan has not said whether he's sending it. **Ask.**
   - **Two corpus drafts will never ship** (`fu-openai-3-4-2026-08-01`, `fu-metr-12-2026-08-01`). Leave them unfinalized. `learn.mjs` has no void command, and finalizing them with `final == draft` and empty spans would record them as "shipped unedited" and inflate the survival metric with artifacts that were never sent. `audit` passes with them open; it only fails on unlogged artifacts and untagged edits.

1b. **APPLY RECORD AS OF 2026-08-01: 5 submitted, 3 rejected, 2 open, 0 human interviews.** The three rejections scored 4.8, 4.6, 4.6 — his three highest. Score is not the filter; the résumé screen is. METR was the only one to produce any stage at all and it was an automated CodeSignal screen. All three were cold applies through an ATS with no human contact (Ashby ×2, Lever ×1).
   - **Do not trust `analyze-patterns.mjs` recommendations at this n.** It counts Figure #13 and Haize #22 as "positive outcomes" because they are still `Applied`, then recommends doubling down on robotics off that. Its own ATS module refuses claims under n=8; the archetype recommendations do not apply the same floor. Revisit once there are real positives.
   - **Read-across to GDM ASAT #31:** same cold-apply shape as the two OpenAI reqs that just failed. The differences that matter are that ASAT screens its own CVs and explicitly weights a written note, so the note is the lever the OpenAI applications never had. Suggested to Shayan that `/career-ops contacto` for ASAT may now beat another cold submit; he has not ruled on it. Note the post says not to email the team individually, so any contact route has to respect that.

2. **NEW: Google DeepMind ASAT #31 — Research Engineer, AGI Safety and Alignment. 4.3/5, Apply.** Full evaluation in `reports/031-google-deepmind-asat-2026-08-01.md`. Surfaced from @NeelNanda5 + @nikitasaxena02 on X (2026-07-31) → [gdmalignment.substack.com hiring post](https://gdmalignment.substack.com/p/agi-safety-and-alignment-team-hiring-2026), written by Seb Farquhar + Rohin Shah. US req: `https://www.google.com/about/careers/applications/jobs/results/95635593379095238?e=72477625` (SF / Mountain View / NYC). UK req exists but is irrelevant — no UK work rights.
   - **Why it clears where DeepMind RS #7 (3.5, parked) did not:** Research **Engineer** title. Min quals are BSc + 3 YoE + "experience working with research teams". No PhD, no first-author-publication gate. Calibration rule 1 does not fire.
   - **Comp (verbatim from req):** `US: $174000 - $253000 (USD) + 15% bonus target + equity + benefits`. Band straddles Google L4→L5. Realistic L4 outcome ≈ $300-360K TC — clears the target floor at its low end.
   - **The gates, in priority order:** (a) 3-year minimum vs ~1 year strict / ~2.3 including the Epineuron co-op — semi-hard, softened because ASAT screens its own CVs rather than routing through a generic Google recruiter filter; standing YoE answer stays 2-4, don't raise it unprompted; (b) **no legible AGI/ASI x-risk work on the CV, and the post explicitly says candidates without it must explain the pivot** — this is the real screen; (c) no frontier-scale post-training (preferred qual only, do not imply otherwise); (d) robotics is the visible half of the CV and ASAT does zero robotics.
   - **The cover note is the whole application.** ASAT specifies the format: 1 paragraph why you fit, 1 paragraph why you want them, blunt language, bullets fine, uploaded to the form's `cover letter` field. Verbatim from the post: "Real reasons get much better results for this than corporate waffle." A draft is appended to report 031 (logged to corpus as `031-gdm-asat-cover-draft`), but **paragraph 2 is a deliberate placeholder — it must come from Shayan, not be manufactured.** Do not write him a conversion narrative.
   - **CV not yet built.** Tailoring plan is Block E of report 031: lead the summary with alignment evaluation and misalignment detection in deployed agentic systems (VLA second, not first); keep the BMO bias-finding bullet first and reframe the eval-pipeline bullet as the harness that produced it (delta D011); promote the VLM-judge bullet to the top of Merlyn; cut AlohaMini sim2real. Build from `main.tex` per the usual workflow; format reference is still `output/cv-candidate-haize-applied-researcher.html` (one-line header, gap:8px, 918/940.8px). `.tmp-measure.mjs` must pass before any PDF.
   - **Process facts worth prepping for:** no leetcode; the screening interview is deliberately not practice-rewarding; **every engineering interview allows unlimited coding agents and the post says most people who decline to use them will fail**. ~2 months start-to-finish. Interview plan with 8 STAR+R stories is in Block F; recommended case study is the pi-0.5 LIBERO-PRO recalibration, not BEHAVIOR-1K, because refuting a published baseline matches ASAT's stated "prefer knowledge over advocacy" posture.

3. **`git push origin main` was BLOCKED by the auto-mode classifier this session.** Report 031 + tracker row #31 + corpus record are committed locally as `d17b7cc` but **not pushed**. Check `git status` at session start; if still unpushed, ask Shayan to run `! git push origin main` himself.

4. **career-ops update available: v1.23.0 → v1.24.0** (offered 2026-08-01, no answer). Highlight is an a16z speedrun talent-network provider covering ~200 portfolio startups in one feed — directly relevant to the wide-net directive. Re-offer once; don't nag.

5. **Unchanged debts from session 6:** Catan/TI still in cover letters but NOT on the CV (proposed Projects entry drafted 07-30, user hasn't ruled; confirm the harness actually scores deception/promise-keeping before it ships). Good Start Labs #10/#11 still parked pending that project. Remaining apply queue: Skild #14, Gray Swan #21, Mechanize #15, Surge #23, Reflection #19, Prime Intellect #20 — liveness last swept 2026-07-28, re-check before use.

**PRIOR RESUME POINT (2026-07-30, session 6):**

**Submitted: OpenAI #3, OpenAI #4, METR #12, Figure #13, Haize #22.** Haize went out 2026-07-30 with a resume + text-only cover letter; tracker Applied, follow-up pinned 2026-08-06, answers persisted in report 022.

1. **START NEXT SESSION WITH FOLLOW-UPS. Still 0 sent, now 4 overdue** (OpenAI #3 pinned 07-14, OpenAI #4 pinned 07-21, METR #12 pinned 07-14, and #13/#22 coming due 08-04/08-06). Drafts for the OpenAI combined message and METR were written 2026-07-30 and NOT sent. Ashby merged both OpenAI apps → ONE combined message. METR draft deliberately omits the "I misread L3, can I retake" ask; hold that for the rejection reply. This has now been deferred three times.
2. **CONTACT-ROW BUG, twice-shipped.** The CV contact row wrapped to 2 lines on the Figure CV (submitted 07-28) and again on the first Haize build. `.tmp-measure.mjs` now checks line count and **exits 1** on violation — never generate a PDF from an HTML that fails it. Fix order: drop lab/portfolio URL → tighten `.contact-row` gap (14px → 8px buys ~48px) → only then drop a real item. Keep `flex-wrap: wrap`. Rule written into `modes/_custom.md`.
3. **Cover letters are body text only** (user directive 07-30): no name header, no contact row, no addressee block. `output/cover-haize-applied-researcher.html` is the format reference.
4. **New in `cv.md` + `main.tex` (user-approved 07-30):** "Developing RL environments to train specialized agents for BMO's wealth management division", 3rd in the BMO block. BMO is now 7 bullets; tailoring must cut to fit.
5. **Current CV format reference is `output/cv-candidate-haize-applied-researcher.html`** (one-line header with gap:8px, 918/940.8px), NOT the Figure HTML — that one carries the wrapped header.
6. **Catan/TI is in cover letters but still NOT on the CV.** Proposed Projects entry drafted 07-30, user hasn't ruled on it. Before it ships, confirm the harness actually scores deception/promise-keeping today.
7. Remaining queue: Skild #14, Gray Swan #21, Mechanize #15, Surge #23, Reflection #19, Prime Intellect #20. Liveness last swept 2026-07-28 (re-check). Good Start Labs #10/#11 still parked pending Catan/TI shipping.

**PRIOR RESUME POINT (session 5, 2026-07-28):**

**Submitted: OpenAI #3, OpenAI #4, METR #12, Figure #13.** METR is at `Responded` — it sent an automated CodeSignal screen (1st step, no human contact), which is NOT an interview. Cohere #9 dead (posting pulled).

1. **START NEXT SESSION WITH: Haize #22** (Applied Researcher, 4.5, Greenhouse, liveness-verified 2026-07-28). Needs a CV built from scratch — none exists. It's an evals shop, so the ordering flips vs Figure: lead with the BMO policy-eval bullet, the deterministic eval pipeline, the $200B AUM bias finding, and the Catan/TI agent-eval project. Robotics moves down but stays.
2. **CV build workflow that works (validated 2026-07-28):** `node extract-latex-content.mjs main.tex --out <scratch>/manifest.json` to inventory all 24 items → hand-write the HTML from the `output/cv-candidate-figure-helix-2026-07-28.html` layout (that file is the CURRENT format reference; the 2026-07-07 HTML intermediates no longer exist) → `node .tmp-measure.mjs <html>` against the 940.8px budget → `node generate-pdf.mjs <html> <pdf> --format=letter --max-pages=1 --strict-pages --report=NNN`. Playwright works locally. HTML intermediates stay untracked; PDFs are committed.
3. **Cut rule (user correction, logged D007):** rank one-page cuts by relevance × signal strength, NOT domain match. Strong off-domain bullets (the $200B AUM bias finding, the eval pipeline) stay on robotics applications. Cutting them was an error.
4. **Follow-ups are the biggest debt: 0 sent across 3 Applied apps.** OpenAI #3 pinned 2026-07-14 (overdue), OpenAI #4 pinned 2026-07-21 (overdue), Figure #13 pinned 2026-08-04. Ashby merged #3 and #4 into one candidate record → send ONE combined OpenAI message, not two. User deferred this twice to keep applying; raise it early next session.
5. **Standing decisions now in `modes/_profile.md`** — YoE = 2-4 (don't re-ask), TN border explainer is form-fields-only and never in letters.
6. Remaining queue after Haize: Skild #14, Gray Swan #21, Mechanize #15, Surge #23, Reflection #19, Prime Intellect #20. All liveness-verified 2026-07-28. Good Start Labs #10/#11 still parked pending the Catan/TI project shipping — it now has a working Catan harness and running experiments (`data/projects/ti-agent-evals.md`), so it's closer to unparking.

**PRIOR RESUME POINT (session 4, 2026-07-28):**
1. **METR #12 → Interview.** CodeSignal industry-coding screen taken mid-July (time-scoped parcel/tag store): L1-L2 cleared, L3 misread → rebuilt → out of time, 500/1000. Logged in `data/assessments.tsv`. Awaiting result; if rejected, user will ask for a retake.
2. **Cohere #9 → Discarded** — posting removed from Ashby board (liveness 2026-07-28). Watch for repost.
3. **Liveness re-swept 2026-07-28:** OpenAI #4, Figure #13, Haize #22, Skild #14, Gray Swan #21, Mechanize #15, Surge #23, Reflection #19, Prime Intellect #20 all ACTIVE.
4. **OpenAI #3 follow-up OVERDUE** (pinned 2026-07-14, 14 days past).
5. **OpenAI #4 submission still UNCONFIRMED** — ask before anything else.
6. **New BMO work added to `cv.md` + `main.tex` 2026-07-28:** (a) agent evaluations for LLMs doing policy analysis/retrieval across commercial banking and insurance — "CB" expansion assumed, confirm; (b) role-based multi-agent platform (define agent by role → provisioned to run a job, deployed across bank functions). BMO section is now 6 bullets — tailoring must cut to fit 1 page.
7. Next queue row: **Figure #13** (prepped, trivial Greenhouse form).

**PRIOR RESUME POINT (session ended 2026-07-08):**
1. **OpenAI #4: submission status UNKNOWN.** Final answer sheet delivered (corrected CV `output/cv-candidate-openai-evals-re-2026-07-07.pdf`, YoE dropdown = 0-1 recommended, user never confirmed submitting). FIRST THING next session: ask "did OpenAI #4 go in, and what YoE did you pick?" → if yes: `node set-status.mjs 4 Applied`, `node followup-seed.mjs 4 --json --date {actual date}`, persist answers (sheet content is reproducible: form fields in this file + policies in _profile.md).
2. **METR #12: DONE.** Submitted 2026-07-07 (work-auth=Other, sharing=middle option). Tracker Applied, follow-up pinned 2026-07-14 (same day as OpenAI #3's — batch them), answers persisted in report 012.
3. **Figure #13: PREPPED, ready to fill.** Posting verified active 2026-07-08. CV ready: `output/cv-candidate-figure-helix-2026-07-07.pdf` (robotics-tailored, 1 page at 941/940.8px — user should eyeball before upload). Form is trivial (Greenhouse): First/Last name, Email, Phone, Resume, optional Cover Letter/LinkedIn/Website — NO work-auth, NO custom questions, NO knock-outs. Standard values apply; Website = sshakerinezhad.github.io. Cover letter not yet drafted — offer it (form allows one; _shared rule 0 says include).
4. **LinkedIn URL is NOT in profile.yml** — asked user, no answer yet. Get it and add to `config/profile.yml` under candidate.
5. Then queue: Haize #22 (needs CV), Cohere #9, Skild #14, Gray Swan #21, Mechanize #15, Surge #23 (re-check: "2-6 yrs" floor NOT cleared under corrected dates), Reflection #19, Prime Intellect #20. Regenerate each CV from main.tex content in the 2026-07-07 HTML format (fit workflow in _custom.md).

Resume point (session ended 2026-07-07, SUPERSEDED by above): OpenAI #4 (RE Frontier Evals & Environments) answer sheet DELIVERED, user has NOT filled/submitted yet. Full sheet is in the 2026-07-07 conversation; key facts to rebuild it if lost: form re-extracted via `.tmp-read-form.mjs` (needs `NODE_USE_ENV_PROXY=1` in remote env), posting active, PDF = `output/cv-candidate-openai-evals-re-2026-07-05.pdf` (delivered to user). Form quirks vs #3: no work-auth pair (sponsorship Q only → No), start date is FREE TEXT (use the 2-4-weeks-from-offer line), Additional Info is a String field (may render single-line — condensed one-liner variant was provided), has "Where can we learn more about you?" (links go there) and a REQUIRED YoE dropdown — recommended 2-4, USER HAS NOT RATIFIED, confirm before submit. Durable form-answer policies now live in modes/_profile.md ("Application Form Answer Policies") — they survive this file's deletion. On user "submitted": tracker #4 → Applied, `node followup-seed.mjs 4 --json`, persist answers via application-answers.mjs, then next queue row = #12 METR (Lever, hCaptcha on checkboxes, fully hands-on for user).

OpenAI #3: SUBMITTED 2026-07-07, all post-submit steps done (tracker Applied, follow-up pinned 2026-07-14, answers in report 003).

## State

- Liveness sweep DONE: 13 APPLY roles checked via `node check-liveness.mjs --file`, 12 active. OpenAI #3 re-verified active 2026-07-07 (API).
- Tesla (#26) expired → tracker updated to `Discarded` with note (req 187690 closed; watch for Autopilot AI RL repost).
- `.tmp-read-form.mjs` REWRITTEN 2026-07-07: now API-based (no browser) — Ashby via non-user GraphQL (`jobs.ashbyhq.com/api/non-user-graphql`, returns full applicationForm), Greenhouse via `boards-api.greenhouse.io/v1/boards/{org}/jobs/{id}?questions=true`. Headless Chromium is BLOCKED by the remote environment's egress proxy (ERR_CONNECTION_RESET despite proxy+CA config) — do not retry Playwright page reads here; curl/Node fetch work fine. Lever/Workday/own-site forms: user reads in live browser. KEEP helper until all 12 apps done, then delete.
- Answers delivered copy-paste style. If Chrome extension connected in a local session, can live-fill instead.
- User confirmations received 2026-07-07: (1) work-auth pair = Yes / No + TN clarifier in Additional Info; (2) start = 2-4 weeks from offer (form field is a DATE — recommended 2026-08-03, user picks final); (3) US office 3 days/week = Yes.
- Form re-extracted 2026-07-07 via API: start-date is a Date field (not text); NO EEOC self-ID fields on current form; two user-only certification checkboxes (Arbitration + truthfulness certification).

## Queue (score order, all liveness-verified 2026-07-06)

| # | Company — Role | Score | ATS | PDF | Status |
|---|----------------|-------|-----|-----|--------|
| 3 | OpenAI — Agent Post-Training, Frontier Evals & Environments | 4.8 | Ashby | ✅ `output/cv-candidate-openai-agent-pt-2026-07-05.pdf` | ✅ SUBMITTED 2026-07-07 (tracker Applied, follow-up pinned 07-14, answers persisted) |
| 4 | OpenAI — RE Frontier Evals & Environments | 4.6 | Ashby | ✅ exists | Next after #3. FLAG: Ashby dedups by email per company; 2nd OpenAI app merges into same candidate record (normal, both land) |
| 12 | METR — MTS Eval Execution | 4.6 | Lever | ✅ exists | Lever hCaptcha fires on checkbox clicks — user must click those live |
| 13 | Figure — Helix AI Engineer | 4.6 | Greenhouse | ✅ exists | |
| 22 | Haize — Applied Researcher | 4.5 | Greenhouse | ❌ generate | |
| 9 | Cohere — Senior RE Model Eval | 4.4 | Ashby | ✅ exists | |
| 14 | Skild — RE Post-training | 4.4 | Greenhouse | ✅ exists | |
| 21 | Gray Swan — MLE | 4.4 | Ashby | ❌ generate | |
| 15 | Mechanize — SWE | 4.3 | own site | ✅ exists | |
| 23 | Surge AI — SWE | 4.2 | own site | ❌ generate | |
| 19 | Reflection AI — MTS | 4.1 | Ashby | ❌ generate | |
| 20 | Prime Intellect — RE RL | 4.1 | Ashby | ❌ generate | |

Tracker PDF ❌ flags are stale for rows with existing PDFs — fix while updating statuses.

## OpenAI #3 — pending user confirmations (blocking)

Form: https://jobs.ashbyhq.com/openai/9d72171e-2630-4347-83a1-263178644282 (fields extracted, see report 003).
PDF ready: `output/cv-candidate-openai-agent-pt-2026-07-05.pdf`.

Awaiting user answers:
1. **Work-auth checkbox pair** — "Are you authorized to work in the country where the job is located?" + "Will you now or in the future require sponsorship?" Recommended: Yes / No + TN clarifier in Additional Info (TN needs no employer petition; strict reading of Q1 is "No" today; wrong combo can auto-reject). USER MUST DECIDE.
2. **"When can you start a new role?"** — suggested `4-6 weeks from offer (TN processing at border is fast; relocation to SF ready)`, needs real number.
3. **"US office 3 days/week?"** — suggested Yes per location policy, needs confirm.

Drafted copy-paste values (confirmed safe fields):
- Legal Name: `Shayan Shakeri` · Email: `shayansnezhad@gmail.com` · Phone: `+1 416 471 6651` · Location: `Toronto, Canada` · Preferred Name: skip

Additional Information — FINAL, user approved 2026-07-07 (v3: restored RLinf bullet + numbers after conflation fix; the LessWrong post is a model-organism view of the BEHAVIOR-1K findings, NOT the LIBERO-PRO/π0.5 paper work; see article-digest.md):

> Eval design is a through-line of my work.
>
> At BMO's AI Centre of Excellence I built deterministic evals (hundreds of synthesized inputs) that surfaced a systematic bias to downplay investment risk in a GenAI tool serving $200B+ AUM.
>
> At Merlyn Labs, the 3-person research collective I co-founded, we study VLAs:
> - VLM judges that score rollouts into dense, context-dependent RL rewards built to resist gaming
> - A conservative finetuning recipe that doubles π0.5's success on LIBERO-PRO position-swap tasks (21% to 42%), showing the published checkpoint's brittleness is recipe-induced, not an architectural limit
> - An open-sourced flow-matching VLA integration for RLinf, enabling RL training on BEHAVIOR-1K in OmniGibson
>
> We also placed 8th in Stanford's BEHAVIOR-1K Challenge and published the failure modes we found (proprioceptive collapse: masking 60% of proprioception improved success up to 48%):
> https://merlyn-labs.com/behavior-report
> https://lesswrong.com/posts/4p2HBMxCkh7pZ3xCa
> github.com/sshakerinezhad
>
> Canadian citizen, TN-eligible (no sponsorship needed; TN is issued at the border, no employer petition). Ready to relocate to San Francisco 2-4 weeks from an offer.

User-only fields (never answer for them): EEOC self-ID radios (Gender/Race/Veteran/Disability), Arbitration Agreement checkboxes ×2, Submit click.

## Per-application procedure (repeat for each queue row)

1. If PDF missing: generate tailored CV first (pdf mode; 1 full page, rules in `modes/_profile.md` CV rules 1-10).
2. `node .tmp-read-form.mjs <url>` → extract fields (or Chrome extension live-fill if connected).
3. Load report + cv.md + _profile.md + profile.yml + voice-dna.md → knock-out pre-scan → answer sheet → present → WAIT for user.
4. After user confirms submitted: tracker status → `Applied` (edit existing row, never add), `node followup-seed.mjs {num} --json`, persist answers via `node application-answers.mjs --report reports/{...}.md --input answers.json --state submitted`.

## Cleanup at end of run

- Delete `.tmp-read-form.mjs` (untracked, repo root)
- Delete this handoff file or mark complete
