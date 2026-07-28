# Apply Session Handoff — 2026-07-06 (updated 2026-07-07)

**DATE CORRECTION (2026-07-07, session 3): BMO start is Sep 2025, NOT Sep 2024.** The typo originated in `main.tex` and propagated to cv.md, all 9 PDFs (2026-07-05), and YoE math in reports 001/008/023/028/030. Sources fixed (main.tex, cv.md, _profile.md rules 11-12 added). `main.tex` is now the canonical original resume; tailored CVs start from it, light-touch only (no gutted one-liner roles). Corrected PDF for #4: `output/cv-candidate-openai-evals-re-2026-07-07.pdf` — HTML-template format (user-confirmed keeper), regenerated via `generate-pdf.mjs --format=letter`, content from main.tex per _profile.md rules 11/11b/11c/12 (one-line contact, one-line high-signal competencies, full bullets; cuts for page fit: BardSong project + BEHAVIOR boundary-resampling bullet). Its `.html` intermediate in `output/` is the layout reference for regenerating the rest. Old evals-re PDF deleted. **The other 8 PDFs still carry Sep 2024, the two-line contact, buzzword competencies, and gutted bullets — regenerate from main.tex content in this format before EACH remaining application.** The submitted #3 PDF (cv-candidate-openai-agent-pt-2026-07-05.pdf, kept as record) went out with Sep 2024; user aware. YoE dropdown honest math is now under 1 year → bracket 0-1 (see _profile.md policy), NOT 2-4 as previously drafted.

**RESUME POINT (session ended 2026-07-08, overrides the paragraph below):**
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
