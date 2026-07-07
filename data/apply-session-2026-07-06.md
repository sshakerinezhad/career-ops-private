# Apply Session Handoff — 2026-07-06

Session ended mid-application-run. Next session: resume from "OpenAI #3 pending confirmations" below.

## State

- Liveness sweep DONE: 13 APPLY roles checked via `node check-liveness.mjs --file`, 12 active.
- Tesla (#26) expired → tracker updated to `Discarded` with note (req 187690 closed; watch for Autopilot AI RL repost).
- Chrome MCP extension NOT connected this session → fallback used: headless Playwright form reader at repo root `.tmp-read-form.mjs` (`node .tmp-read-form.mjs <url>`, must run from repo root for playwright resolution). Read-only, never submits. KEEP until all 12 apps done, then delete.
- Answers delivered copy-paste style. If extension connected next session, can live-fill instead.

## Queue (score order, all liveness-verified 2026-07-06)

| # | Company — Role | Score | ATS | PDF | Status |
|---|----------------|-------|-----|-----|--------|
| 3 | OpenAI — Agent Post-Training, Frontier Evals & Environments | 4.8 | Ashby | ✅ `output/cv-candidate-openai-agent-pt-2026-07-05.pdf` | **Answer sheet presented, awaiting 3 user confirmations (below)** |
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

Additional Information draft (voice-dna checked, approved format):

> Eval design is the through-line of my work. At BMO's AI Centre of Excellence I built a deterministic eval pipeline (hundreds of synthesized inputs) that surfaced a systematic bias to downplay investment risk in a GenAI tool serving $200B+ AUM. At Merlyn Labs, the 3-person research collective I co-founded, I build VLM judges that score rollouts into dense, context-dependent RL rewards built to resist gaming, and I open-sourced the flow-matching VLA integration for RLinf that enables RL training on BEHAVIOR-1K in OmniGibson.
>
> I care about where measurement breaks. We placed 8th in Stanford's BEHAVIOR-1K Challenge and published the failure modes we found: proprioceptive collapse (60% masking improved task success up to 48%), and a LessWrong analysis showing a published benchmark's generalization gains were recipe-induced overfitting.
>
> Work: merlyn-labs.com/behavior-report · lesswrong.com/posts/4p2HBMxCkh7pZ3xCa · github.com/sshakerinezhad
>
> Canadian citizen, TN-eligible (no H-1B sponsorship required). Ready to relocate to San Francisco.

User-only fields (never answer for them): EEOC self-ID radios (Gender/Race/Veteran/Disability), Arbitration Agreement checkboxes ×2, Submit click.

## Per-application procedure (repeat for each queue row)

1. If PDF missing: generate tailored CV first (pdf mode; 1 full page, rules in `modes/_profile.md` CV rules 1-10).
2. `node .tmp-read-form.mjs <url>` → extract fields (or Chrome extension live-fill if connected).
3. Load report + cv.md + _profile.md + profile.yml + voice-dna.md → knock-out pre-scan → answer sheet → present → WAIT for user.
4. After user confirms submitted: tracker status → `Applied` (edit existing row, never add), `node followup-seed.mjs {num} --json`, persist answers via `node application-answers.mjs --report reports/{...}.md --input answers.json --state submitted`.

## Cleanup at end of run

- Delete `.tmp-read-form.mjs` (untracked, repo root)
- Delete this handoff file or mark complete
