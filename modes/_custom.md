# Custom Instructions -- career-ops

<!-- ============================================================
     THIS FILE IS YOURS. It will NEVER be auto-updated.

     Put your own house rules, custom workflows, and automations
     here -- anything you want the agent to ALWAYS do (or never do).

     This is for PROCEDURAL rules ("HOW I want things done").
     For WHO you are (archetypes, narrative, comp, negotiation),
     use modes/_profile.md instead. Keeping the two separate keeps
     each one readable.

     The agent reads this file alongside the system instructions;
     your rules here take precedence over the defaults, as long as
     they don't break the Data Contract (your files are never
     touched, and we never auto-submit an application for you).

     Because this is a user-layer file, anything you write here
     survives `node update-system.mjs`. Put customizations HERE,
     not in CLAUDE.md / modes/_shared.md / other system files --
     those get overwritten on update.
     ============================================================ -->

## House Rules

<!-- Rules the agent should always follow. Examples:
     - Always write evaluation summaries in British English.
     - Never include a photo in my CV (US / ATS-first market).
     - Cap each batch run at 20 listings unless I say otherwise.
     - If a report scores below 6, skip the cover letter. -->

- **Git sync (multi-device):** This repo syncs to a PRIVATE remote (`origin` = github.com/sshakerinezhad/career-ops-private) with personal data committed. `upstream` = santifer/career-ops (updates come via `update-system.mjs`, which ignores remotes). Rules:
  - Start of session: `git pull` before touching tracker/reports.
  - End of any session that changed tracker, reports, interview-prep, or profile files: `git add -A && git commit && git push`.
  - After `node update-system.mjs apply`: commit + push the updated system files so other devices get them.
  - The repo contains PII (CV, contact info, interview notes). NEVER make it public, never fork it publicly, never push it to any other remote.
  - Never commit `.env` or anything matching passport/diploma filename patterns. `output/` PDFs ARE committed on purpose (see Mobile setup below); HTML intermediates stay untracked.

- **Mobile setup (Claude Code mobile / claude.ai) — DO NOT undo these:** this repo was deliberately altered so the full pipeline works from a phone, where there is no local filesystem access and no Playwright/browser MCP.
  - `output/.gitignore` (user layer, survives updates) un-ignores `*.pdf` so tailored CV PDFs sync to the private remote and can be viewed/downloaded from mobile. Never "clean up" this file or the committed PDFs back to ignored.
  - `.tmp-read-form.mjs` (repo root) is a read-only, API-based application-form field extractor (Ashby GraphQL + Greenhouse boards API, no browser needed). Use it in `apply` mode when Playwright is unavailable: `node .tmp-read-form.mjs <url>`. It never fills or submits.
  - On mobile, prefer API-based tools throughout: `check-liveness.mjs` for liveness, `scan.mjs` for portals, `.tmp-read-form.mjs` for forms. Don't treat "Playwright MCP tools not detected" as a setup problem.
  - Skill entrypoints (e.g. `.qwen/skills/career-ops/SKILL.md`) were sometimes hand-placed via GitHub web upload from mobile; if one diverges from upstream after an update, check the backup branch before assuming it's stale.

- **Edit-delta loop (learning):** Corrections are the highest-signal data this system produces. Capture them.
  - **Before drafting** any user-facing artifact (CV bullet, cover letter, application email, form answer, report prose), read `data/deltas.md` and obey every entry whose type matches. Higher `recur` means stronger evidence; treat `recur >= 3` as binding.
  - **After any correction** (Shayan rewrites my draft, pastes back an altered version, or overrides a score), immediately log it. Auto, silent, no confirmation, no announcement:
    ```
    node data/delta.mjs add --file <scratchpad>/delta.json
    ```
    Payload: `{"type":"cv|cover|email|form|report|chat|score","rule":"<one-line lesson>","was":"<my span>","now":"<their span>","merge":"D0NN (optional)"}`. Store the minimal changed span, not the whole document. If this repeats a lesson already in the ledger, pass `merge` with that entry's id.
  - **Never hand-edit** `data/deltas.md` or `data/deltas-archive.md`. The script is the only writer. Rewriting an accumulated context wholesale is the documented "context collapse" failure mode and measurably performs worse than having no memory at all (ACE, arXiv 2510.04618).
  - **Process and workflow corrections do not go in the ledger.** They have no automatic error signal. Write those here in `modes/_custom.md` as plain rules.
  - **When `stats` flags PRUNE DUE**, run `node data/delta.mjs prune`. For each PROMOTE candidate, write the lesson into `voice-dna.md` as a hard rule (or `modes/_profile.md` if it is a content rule), then run `node data/delta.mjs promote <id>`.
  - After changing `data/delta.mjs`, run `node data/delta.mjs --self-test`. It is deliberately not registered in `test-all.mjs`, which is system-layer and would revert the registration on update.

## Custom Workflows

<!-- Multi-step routines you run often, given a short name. Examples:
     - "weekly review": scan my saved portals, evaluate the new roles,
       then give me a one-paragraph summary of the top 3.
     - "prep <company>": pull the JD, generate STAR stories from
       article-digest.md, and draft 5 likely interview questions. -->

(none yet -- add yours above)

## Output Preferences

<!-- How you like results formatted. Examples:
     - Reports: lead with the score and the one-line verdict.
     - Show the per-step token breakdown after a batch run.
     - Save PDFs date-first: YYYY-MM-DD-company.pdf -->

(none yet -- add yours above)

## Off-Limits

<!-- Things the agent must never do for you. Examples:
     - Never auto-fill or submit an application without showing me first.
     - Never edit a system file to customize my setup -- put it here. -->

- **Never write a NEW factual claim about my work into `cv.md`, `main.tex`, `modes/_profile.md`, or `article-digest.md` without showing me the line first (added 2026-07-28).** When I describe new work in conversation, draft the resulting bullet(s) in your reply, mark what is inferred vs. what I actually said, give me a blunt read on whether each is strong enough to ship, and wait. Flagging an assumption *after* the edit is not enough — a guess that lands in `cv.md` propagates into every tailored PDF and form answer. Mechanical edits (reordering, cutting for one-page fit, tracker/status updates) do not need pre-approval.

- **CV one-page fit workflow (added 2026-07-08):** before running `generate-pdf.mjs` on a tailored CV, check fit with `node .tmp-measure.mjs output/{cv}.html` — letter budget is 940.8px of `.page` height. Over budget → cut whole low-relevance items in relevance order (never thin roles to stubs; see `_profile.md` rules 11-12), then tighten CSS margins only as a last resort. The current layout reference is any `cv-candidate-*-2026-07-07.html` in `output/`. Helpers `.tmp-read-form.mjs` (Ashby/Greenhouse), `.tmp-lever-form.mjs` (Lever), `.tmp-measure.mjs` (page fit) live in the repo root — keep them until the apply queue is drained.
