# Agent Inbox — queued for next session

## Session handoff (2026-09-18, end of session 13 — remote/web session, branch `claude/tender-ritchie-vn1u03`, NOT merged into main)

**Branch state:** five commits on top of main (1e0ec87, 52530e6, 07850ac, 875a852, plus this handoff). Laptop: `git fetch origin` then `git checkout claude/tender-ritchie-vn1u03`, or ask for a fast-forward of main. `claude/bmo-resume-submission-tgku6c` (09-11) is still unmerged. All 18 prep docs were also sent to Shayan in chat as a zip on 09-18 (from the branch head at 875a852).

**What this session did:** rebuilt `interview-prep/mercor-onsite-plan.md` three times on his feedback, ending at the lean form: per-interview master task lists (P1a to P12, A1 to A9, T1 to T13, L1 to L6), each task with a done-when test and a device tag (dev / screen / paper / travel laptop); a schedule keyed by task IDs, re-cut for the next 2 to 3 days after each rehearsal debrief; a "Now" block; a §9 tracker prompt he can paste with the plan into a thread so an agent keeps the ledger. Content moved out of the plan into `mercor-onsite/toolkit-spec.md` (P3), `mercor-onsite/numbers.md` (T11, T12), `mercor-onsite/tradeoff-drills.md` (T7 prompts; keys pending), `theory-syllabus.md` Parts 2b (general-CS breadth sweep) and 2c (math, probability, statistics, ML layer). `format-analysis.md` §8: escalation and coverage rules added to 8.1 and 8.2; 8.2 now rotates across three layers; new 8.4 brief-triage prompt. Verified today: Emily confirmed 09-18 16:29Z that an API key from any provider is fine (thread `1a0a3ff4ea1e29f9`); Google Calendar Sep 18 to 30 unchanged from the 09-17 record. `node data/learn.mjs audit`: the same 5 pre-existing unfinalized drafts, nothing new (no user-facing artifact was drafted).

### Decisions Shayan made 09-18 (binding)

1. **Structure:** master task lists per interview beat a strict regimen; a suggested schedule per day; every task must be doable without the travel laptop where possible.
2. **Style, standing for every file:** only as many words as needed; words go to teaching content (drills, keys, syllabus), not the plan; clear, not vague; followable day by day, task by task, "know exactly what to do when"; he may hand the plan to a tracking agent (§9 prompt). No walls of text.
3. **Algorithms goes broad and is three layers** (CS core / math, probability, statistics, ML arithmetic / Mercor-specific), because Mercor's attested prompts include a compact-GPT review, candidate search with top-p vs beam, and coffee-cup probability (candidate-reports.md R10). Split now about 38 / 30 / 32.
4. **Fresh material:** he needs to learn first, then practise hard. The plan carries a five-step protocol (attempt cold; one guarded instruction pass; closed-book reproduce; same-day thread; spaced re-test and teach-back), each step an evidence.md row.
5. **Interviewer threads are the engine, spammed:** thread protocol in plan §1; targets T9 eight threads, A7 twelve rounds, P7 three, P12 five.
6. **Avoid a behemoth:** lists stable; Now block and ledger change; only the next 2 to 3 days get re-cut.
7. **Salman** = robotics research engineer at DeepMind; Sat 26 (P9 audience, T10 post-training mock 14:00 PT) and Sun 27 morning (A9 algorithms mock). No Toronto mock (only if critical; assume not).
8. **Wed 23:** evening busy, rest of the day free (rehearsal 2, GPU run, two algorithm blocks).
9. **GPU:** he will rent one. T13 scheduled Wed 23 13:00 to 16:00, only if rehearsal 2 is 12+ and the A6 drills average 12+; else the afternoon goes to algorithms.
10. **Toolkit repo public.** Generic, no Mercor data or prompts, no PII. Kickoff ask stands.
11. **Courses:** lectures are attended as fixed blocks; nothing else about the courses is in the plan.
12. **Travel laptop** arrives Sun 20 or Mon 21; P1b Tue 22 lunch; rehearsal 2 runs on it.
13. **Rehearsal 1 on Sun 20** morning; toolkit built Sat 19 morning.

### Files to read first

`interview-prep/mercor-onsite-plan.md` (the Now block, then the lists) · `mercor-onsite/format-analysis.md` §8 (the four prompts) · `mercor-onsite/theory-syllabus.md` (Parts 0 to 3, now with 2b and 2c) · `mercor-onsite/toolkit-spec.md`, `numbers.md`, `tradeoff-drills.md` · the rest as the session-12 handoff lists them.

### Next agent, in order (dates are in the plan; he has not typed the word "go", confirm in one line and proceed)

- **Sat 19 09:30 with him: write `mercor-onsite/run-sheet.md`** (P4): the 90-minute minute-by-minute (0 to 10 read twice, one question, one metric, cut list; 10 to 25 smoke set of 20, launch the full run; 25 to 60 read failures, taxonomy, count; 60 to 75 metrics, one table, one plot; 75 to 85 report, slides, email; behind at 60: cut analysis, never the presentation), pre-flight checklist, if-then rules (evidence.md implementation intentions), the 5-slide template (finding first), the kickoff questions (format-analysis §1.9). Short; printed.
- **Sat 19: keys for `tradeoff-drills.md`** (15 strong answers: objective, constraint, two options, failure mode of each, deciding experiment; sources: theory-syllabus Part 1, primer, 397B post). Keys in a separate file, `tradeoff-drills-key.md`.
- **Sun 20 10:45: rehearsal 1 debrief** against `mock-1-grader-key.md`; fix list; re-cut Sun to Tue in plan §6; update Now and the ledger.
- **Sun 20: drills 7 to 10 with keys** appended to `algorithms-drills.md` / `algorithms-grader-key.md` (session-12 handoff item d: contractor matching with capacities; noisy-comparator ranking with a call budget; referral DAG reachability and flow centrality with expected value; task-DAG orchestration with retries, worker loss, lineage, tenant fairness).
- **Tue 22: `mercor-onsite/grpo-run.md`** (handoff item h + plan T13: provider and instance, the Unsloth notebook, smoke test and abort rule, four curves, trainer code to read, what to say about it) and **`mock-2-brief.md` + key** (handoff item f: APEX-v1-extended, 37 CSV/text-only tasks, dataset facts already computed).
- **Wed 23 10:00: rehearsal 2 debrief**; re-cut Wed to Fri.
- **Fri 25 morning: `mock-3-brief.md` + key + planted-bug judge script** (handoff item g: apex-accounting dev set facts already computed; candidate bugs listed there).
- Every session: update the plan's Now block and status; add question-bank lines he dictates; keep the style rule.

### Still open / carried

Keys (P1a) and HF gates (P2) not yet done, scheduled tonight · Mercor_Benefits_2026.pdf values section still not pasted · BMO T&O offer, BMO CoE return offer, TMX letter, Mubit #61: all still unanswered · career-ops update 1.24.0 → 1.33.0 offered again 09-18, unanswered (`node update-system.mjs apply` or `dismiss`; `npm install` needed on a fresh box, js-yaml is missing here so `doctor.mjs` fails) · `node data/learn.mjs audit`: the same 5 pre-existing unfinalized drafts (two intentionally dead).

## Session handoff (2026-09-17, end of session 12 — remote/web session, branch `claude/interview-format-analysis-330n5v`)

**Branch state:** contains origin/main (merged at 79449be, which brought in his other machine's `post-train/`, `mercor-call-card.md`, a second screen debrief) plus this session's commits. **Remote `main` was fast-forwarded to this branch at 0b6da82 (09-17, on Shayan's ask); both refs point at the same commit.** Laptop: `git pull origin main`. `claude/optimistic-thompson-dy2u7h` is now redundant (its content is in main). `claude/bmo-resume-submission-tgku6c` (09-11) is still unmerged.

**What this session did, in order:** re-verified every load-bearing onsite claim from primary sources; wrote `interview-prep/mercor-onsite/format-analysis.md` (what each session is, what is scored, what an expert does, the gate, mock loop, paste-ready interviewer prompts §8); drafted and logged the Emily reply, which Shayan edited and SENT 09-17 17:04Z (corpus final logged, contact details redacted; deltas D018, D019); merged and read the Litmus take-home (`post-train/`), re-ran it, digested it into format-analysis §0.5; verified his calendar for Sep 17 to 29 via the Calendar tool; confirmed the two open Mercor datasets download from here and computed their facts; wrote `interview-prep/mercor-onsite/theory-syllabus.md` (the depth bar). **The plan itself was NOT rebuilt.** Shayan paused the build to discuss the big picture, then directed: record everything for handoff; the next agent reconstructs the plan.

### Decisions Shayan made this session (binding for the plan)

1. **Order:** understand the formats first, then plan. The format analysis was explained to him in chat and not disputed. Priority split **40% practical / 25% algorithms / 35% post-training: accepted.**
2. **Depth bar (his words):** "I have to be so good at it I should be interviewing them." And: "don't pigeonhole us into one guess of what the topics will be... we must be an expert, ultimately, in agent evaluations, post-training, and RL." → `theory-syllabus.md` Part 0 (three fields + the CS core; Mercor-shaped rows are priorities, not the boundary; every mock thread draws at least one question from outside the priorities).
3. **Method (his friend at Google):** the goal is to be someone who has done this before, not someone who practised. Main engine = fresh-thread harsh-interviewer mock loop: tell the thread the format, 2 to 3 questions at a time, answer, debrief, name gaps, 20 to 30 questions, then a NEW thread so the question distribution does not narrow; repeat until nothing surprises him. Prompts in format-analysis §8; add the escalation rule (theory-syllabus Part 3.2) and the coverage rule (Part 0).
4. **Toolkit for the practical:** yes, build it, make it public on GitHub before the 29th, and ask Austin at kickoff whether it may be used. He did NOT ask Emily about pre-written code (he cut that question).
5. **Tools in the room:** Claude Code in the terminal with Cursor as editor. He knows Cursor, does not use its agent; uses Claude Code often; some OpenCode. No Codex. He has never built a full eval pipeline with an agent outside the Litmus test, so the rehearsals are where that happens. Test Claude Code on unfamiliar Wi-Fi and the inference key (separate from the subscription) from the travel laptop before Fri 25.
6. **GPU / small GRPO run:** optional, only after the gate prep (practical, algorithms) is safe. It is a third-interview upgrade, not a gate item.
7. **Screen facts:** James did NOT walk the take-home on 09-09; the 09-10 debrief (background, GRPO, HLE-style environment design, masking) is authoritative; the partial 09-09 file carries a correction note.
8. **Take-home walkthrough questions** were generic (what did you do, how did you approach it, how would this change things, how would you act differently).
9. **Style rules for the plan (standing):** concise, clear, follow-alongable, no jumping around; "know exactly what I need to do, exactly what I need to have"; never reference an artifact that does not exist (either it exists or the plan schedules who writes it and by when); bullets not scripts; no em dashes in prose.

### Files to read first (all on this branch)

- `interview-prep/mercor-onsite/format-analysis.md`: the format picture. §0 the gate; §0.5 the take-home digest with re-measured numbers and 12 questions Charlie could ask; §1 to §3 per session (their words / verified / inferred / general / judgment tags); §4 priority; §5 what survives and what changes; §6 mock loop per session; §8 paste-ready prompts.
- `interview-prep/mercor-onsite/theory-syllabus.md`: the depth bar. Part 0 scope (RL, post-training, agent evaluation field maps + CS core); Part 1 post-training priorities with L1 to L4 per row; Part 2 algorithms priorities; derivation deck (12) and prove-it list (12); Part 3 how the depth gets built. Rows marked (verify) need their citation identifier checked before use in a drill key.
- `post-train/`: the take-home as submitted (README, gymsim.py, curriculum/__init__.py, notes.txt, tools/). Keep untouched. `./bin/check` passes here; `python3 tools/score_run.py --salts 16` gives +0.031 mean delta, 16/16; `--poison` gives +0.041, 12/16 with three banks at −5 to −12 points.
- `interview-prep/mercor-call-card.md` (his screen card; §2 has his own account of the take-home incl. which ideas were his vs Claude's), `interview-prep/sessions/mercor-research-engineer-post-training-screen-2026-09-09.md` (authoritative debrief), `interview-prep/question-bank.md`.
- `interview-prep/mercor-onsite-plan.md` (OLD, 09-16): still valid and reusable: §0 the day, §1 company, §2 people, §4 method rules, §5 A1 toolkit spec / A2 run-sheet / A3 presentation / B protocol / C tracks, §8 day-of run sheet, §9 numbers. Superseded: §3 (by format-analysis) and §6 day-by-day (rebuild). `mercor-onsite/evidence.md` still backs the method rules.
- Existing drills and mocks: `mercor-onsite/mock-1-brief.md` + `mock-1-grader-key.md` (Terminal-Bench traces, ready to run), `mercor-onsite/algorithms-drills.md` + `algorithms-grader-key.md` (protocol, pattern sheet, drills 1 to 6), `interview-prep/post-training-primer.md` (answer key, not reading).

### Verified calendar, Sep 17 to 29 (Google Calendar, read 09-17; ET unless marked PT)

Fixed per his 09-16 rule (lectures, Strahd, Akira, Readers of Books): Thu 17 EI 18:00–21:00 · Sun 20 Akira 12:30–14:30, Readers of Books 21:00 PT (= 00:00 ET Mon) · Mon 21 Positive Psych 17:00–20:00 · Tue 22 Imitation Learning 15:00–17:00, Leadership 18:00–21:00 · Wed 23 RL lecture 19:00–21:00 online AND Strahd 19:00–22:00 (collision; his call) · Thu 24 EI 18:00–21:00 · Fri 25 flight AC 743 13:05 (leave home 10:00) · Sat 26 Readers of Books 12:30–13:30 PT · Mon 28 Positive Psych 17:00–20:00 (he is in SF; assume missed) · Tue 29 onsite 11:30–16:00 PT; return Wed 30 AC 744 19:40 ET listed.
Skippable per his rule: Aemma (Thu 17, Sat 19, Mon 21, Thu 24, Sat 26, Mon 28), Robotics Jam (Fri 18, Mon 21, Fri 25, Mon 28), BMO soccer (Fri 18 12:00–16:00), DnD session 7 (Sat 19), Serobro (Sun 20, Sun 27), Meg's send-off (Sat 26 21:00 Toronto; he is in SF).
**New since the 09-16 rules (he added these 09-17 14:34 ET, all 30-minute markers, likely deadlines):** Tue 22 13:30 "Imitation Learning: Week 3 Panel Qs"; Thu 24 20:30 "Positive Psych: Mindfulness #1"; Mon 28 17:30 "Imitation Learning: Assignment 1"; **Tue 29 13:30 "Imitation Learning: Week 4 Panel Qs" (= 10:30 PT, during the onsite; must be done by Sun 27).** Ask him what each requires before scheduling around them.
Free blocks the old plan assumed still hold: weekdays ~07:30–09:00, 12:30–13:15, one evening block after the lecture (21:15–22:30); Sat 19 09:30–17:30; Sun 20 08:30–12:00 and 15:00–20:45; SF Sat 26 09:00–12:00 and 14:00–17:00 PT; Sun 27 09:00–14:00 PT then stop; Mon 28 rest. About 42 hours total; bed by 23:00.

### Plan-build inputs: what was about to be written, with the facts already gathered

a. **`mercor-onsite-plan.md` rebuild.** One self-contained file: goal in one line (their JD: "Real-world post-training team experience in industry (highest priority)"); the three tracks with a "done when" test each (format-analysis §6 and theory-syllabus Part 3.6); an artifact table (exists / agent writes by date / Shayan produces); the method rules (old plan §4, evidence.md); day by day Thu 17 → Tue 29 against the calendar above with time, what, with what, done-when; day-of run sheet (old plan §8); numbers (old plan §9). Hours roughly A 17 / B 10 / C 15.
b. **`mercor-onsite/toolkit-spec.md`.** From old plan §5 A1 (run_inference / grade / metrics / failures / report / README) plus: the loop must handle all five brief variants in format-analysis §1.3 without redesign; per-criterion judge in Mercor's shape (`{"result": 0|1, "reason": ...}`, prompt verbatim in `research/mercor-output-2026.md` §2); scattergun check; task-level bootstrap; paired comparison; judge-vs-label agreement (precision/recall on Met, κ); acceptance test: clean clone to first result under 5 minutes; public repo with README; every function explainable.
c. **`mercor-onsite/run-sheet.md`.** Old plan §5 A2 (minute-by-minute) and A3 (5 slides, conclusion first) plus the kickoff questions (format-analysis §1.9), the pre-flight checklist, and if-then rules (evidence.md: implementation intentions).
d. **Algorithm drills 7 to 10 + keys** (append to the two existing files): two matching/ranking (a project-to-contractor matching system with capacities and a ranking-under-noisy-comparator variant with a call budget), two graphs (referral DAG reachability and flow centrality with expected value; task-DAG orchestration with retries, worker loss, lineage, tenant fairness). All four are PracHub-attested Mercor prompt families (format-analysis §2.4).
e. **`mercor-onsite/tradeoff-drills.md`.** The ten from old plan §5 C3 with strong-answer keys, plus at least five from outside the priorities (theory-syllabus Part 0), e.g. DPO vs online RL for a preference dataset; PRM vs ORM for a 40-step task; LoRA vs full fine-tune under a memory cap; offline logged trajectories vs on-policy rollouts; training compute vs test-time compute for a fixed budget.
f. **`mercor-onsite/mock-2-brief.md` + key (rehearsal 2, target Wed 23 07:30).** Dataset `mercor/APEX-v1-extended` (open; `data/train.csv`, 1.3 MB, downloads with one curl). Facts computed 09-17: 100 rows; columns Task ID, Domain, Prompt, Rubric JSON, File Attachments; domains Legal/Medicine/Consulting/Finance 25 each; criteria per task mean 11.4 (min 5, max 25; Medicine 16.8); criterion keys description/sources/justification/weight/human_rating/criterion_type/dependent_criteria; types Reasoning 1,021, Extraction (recall) 673, Style 7; weights Primary objective(s) 788, Not primary 352; human_rating True on only 4 criteria; 541 criteria have dependent_criteria; prompts median 1,264 chars; every task has attachments: 132 PDFs, 42 CSVs; **37 tasks have CSV/text-only attachments (31 Consulting, 6 Finance), use those for a 90-minute run.** Judge in their harness: Gemini 2.5 Pro thinking; apex-evals prompt and `{result, reason}` output in `research/mercor-output-2026.md`. Brief: two models on 30 CSV-only tasks, per-criterion judge, mean % criteria met with task-level bootstrap CI, paired; validate the judge on 40 hand labels; find criterion types where it fails; scattergun check; what is wrong with this eval. Key = dataset facts + strong-answer list (model numbers cannot be precomputed here: no API keys on this box).
g. **`mercor-onsite/mock-3-brief.md` + key + a planted-bug judge script (rehearsal 3, target Sat 26 09:00 PT in SF).** Dataset `mercor/apex-accounting` (open; `data/dev.jsonl` 43 KB). Facts computed 09-17: 10 tasks, 89 criteria (2 to 24 per task, mean 8.9), types Reasoning (numerical)/(qualitative); 72 of 89 criteria state an "acceptable value" tolerance; gold_output 254 to 2,854 chars; context files xlsx 33, csv 12, pdf 7, txt 3, docx 1 (task 30 has only two xlsx; task 23 has a docx memo); estimated hours 0.75 to 4.0; the paper's judge sees prompt + criterion + final output only. Exercise: grade the GOLD outputs first with a provided judge script that carries one planted bug (candidates: off-by-one pairing of outputs to rubrics; tolerance parsing that treats "$29,700" and "29700" as different); a correct judge must score gold near 100%, so the bug shows as a gold score well below that; then run one or two models ×3 on the csv/txt-context tasks, Mean Criteria@3, agreement between two judges (κ), failure taxonomy against the paper's L1 categories. Key = which bug, expected gold score with and without it, strong-answer list.
h. **`mercor-onsite/grpo-run.md` (optional, after-gate).** Unsloth's GitHub notebooks list GRPO recipes for small models (Qwen2.5 3B GSM8K, Llama 3.2 1B DAPO, Gemma 3 1B GSM8K; verified the README lists them 09-17). Free-tier Colab feasibility NOT verified. What to watch: reward curve, KL, completion length, fraction of zero-advantage groups, a reward hack if one appears; then read the trainer's advantage and loss-aggregation code (SkyRL or TRL) and relate each line to theory-syllabus Part 1 B.
i. **Mock-loop prompts:** format-analysis §8 has three; add the escalation rule (interviewer keeps escalating per topic until the candidate fails or the interviewer runs out; report the deepest question reached) and the coverage rule (at least one question per thread from outside the priorities).
j. **Human mocks:** the Toronto mock friend (identity and expertise unknown) and Salman in SF (expertise unknown). Ask before scheduling them.

### Still open / needs Shayan

Toronto mock friend and Salman: who, what they know, slots · keys (OpenAI, Anthropic, Google, OpenRouter) tested from the travel laptop; Cursor account · Hugging Face gate acceptance on `mercor/apex-agents-v1.1` and `mercor/apex-agents` (auto-approval) so the real task format is on disk · Wed 23: RL lecture or Strahd · the four new calendar markers above · Emily's answer on the API provider (thread `1a0a3ff4ea1e29f9`; watch it) · `Mercor_Benefits_2026.pdf` values section (attachment not downloadable via the mail tool; ask him to paste) · BMO T&O offer, BMO CoE return offer, TMX letter, Mubit #61: all still unanswered · career-ops update 1.24.0 → 1.33.0 offered again 09-17, unanswered (`node update-system.mjs apply` or `dismiss`) · `node data/learn.mjs audit`: same 5 pre-existing unfinalized drafts; the Emily record is finalized.

## Session handoff (2026-09-16/17, end of session 11 — remote/web session, branch `claude/optimistic-thompson-dy2u7h`, NOT yet merged into main)

**Mercor onsite is Tue 2026-09-29, 11:30–16:00 PT, 181 Fremont St SF, 33rd floor.** Sessions: 11:45 kickoff + 90 min solo "LLM Evaluation and Analysis" practical + 15 min presentation (Austin Bennett; results emailed to apex@mercor.com; Cursor allowed; bring own API key) → 30 min Algorithms (Jiwon Lee; "not Leetcode, not system design, true algorithms") → 45 min Post-Training (Charlie Ruan; only "if the first two interviews are successful"). Shayan flies AC 743 Fri 09-25 13:05 ET, stays with Salman 25–27, hotel near 181 Fremont on 28 (rest day), returns AC 744 Wed 09-30.

**Everything from this session is in `interview-prep/`:**
- `mercor-onsite-plan.md`: the day, the company, the three interviewers (verified profiles, inferred probes, questions to ask), what each session tests, the method (7 evidence-backed rules + how the LLM/tutor skill is used), tracks A/B/C, day-by-day Sep 16–29 against the real calendar, inputs needed (§7), day-of run sheet, numbers to know.
- `mercor-onsite/evidence.md`: literature basis for every method rule (MA/RCT labels; what was rejected: expressive writing, power posing, crib sheets, melatonin).
- `mercor-onsite/mock-1-brief.md` + `mock-1-grader-key.md`: practical rehearsal 1 (Sat 19) on Mercor's ungated `mercor/ApexAgentsRecipe-TBench2_1-EvalTraces`; key numbers precomputed (397B paired gain +4.9 pts CI +0.4..+9.7; 35B trained set has 18 errored rollouts; `tool_calls` field is 0 everywhere = harness artefact).
- `mercor-onsite/algorithms-drills.md` + `algorithms-grader-key.md`: protocol, pattern sheet, six Mercor-shaped drills with strong-answer keys.
- `mercor-onsite/research/{interviewers,mercor-output-2026,candidate-reports}.md`: the raw research (verified where marked).
- `mercor-research-engineer-post-training.md` (the screen prep file, now with the 09-10 Round 1 debrief merged in from branch `claude/session-debrief-vyffp1`): 35B "22.74→28.69" relabelled **mean reward**, not Pass@1 (the post's own sentence).
- `question-bank.md` and `sessions/mercor-...-screen-2026-09-09.md` (from the merged debrief branch): 🔴 env design for HLE-style target; 🟡 critic-gives-reward slip; 🟡 loss mask vs reward; SkyRL env API unknown → all scheduled in the plan (C2).
- Tracker #32 note updated with the confirmed onsite (set-status.mjs; `npm install` was run here so js-yaml exists on this box).

**Calendar rules Shayan gave (09-16):** lectures, Strahd (Wed 19–22), Akira (Sun 20 12:30), Readers of Books (Sun 20 midnight ET; Sat 26 12:30 PT) are fixed; everything else (Aemma, Robotics Jam, Serobro, BMO soccer, DnD Sat 19, Walid) is skippable; work is remote and flexible. Plan assumes ~3 h weekdays, 5–6 h weekend days, ~42 h total.

**Still open / needs Shayan (plan §7):** Litmus take-home written from memory (`interview-prep/mercor-litmus-takehome.md`, not yet written); API keys (OpenAI, Anthropic, OpenRouter, Google) tested from the travel laptop; Cursor account; Toronto mock friend's and Salman's expertise and slots; laptop/Python setup; start date + three references for Emily's reply (I draft it once given; corpus-log it); the values section of `Mercor_Benefits_2026.pdf` (attachment not downloadable via the mail tool; ask him to paste); whether Wed RL lecture is recorded; HF gate acceptance on `mercor/apex-agents-v1.1` and `mercor/apex-agents`. Next deliverables from the agent: Emily reply draft, mock 2 (APEX-v1-extended dev) and mock 3 (APEX-Accounting dev) briefs + grader keys, the run-sheet and 5-slide template (Sat 19 09:30 with him).

**Shayan said (09-17) he is starting a new session to rethink a few things.** Do not assume the plan is accepted as-is; ask what he wants to change first. **Branch `claude/optimistic-thompson-dy2u7h` must be merged into main** (contains this session + the debrief branch); laptop: `git fetch && git merge origin/claude/optimistic-thompson-dy2u7h`. `claude/bmo-resume-submission-tgku6c` (09-11, a BMO CV PDF) is also unmerged.

**Other still-open items carried from earlier handoffs:** BMO T&O offer status; BMO CoE return offer; TMX letter; Mubit #61 no reply; career-ops update 1.24.0 → 1.33.0 offered again (unanswered; `node update-system.mjs apply` or `dismiss`); `node data/learn.mjs audit` pre-existing unfinalized drafts; other-machine CV sources merge.

## Session handoff (2026-09-03, end of session 9 — remote/web session, branch `claude/resume-ashby-application-oeye2e` fast-forwarded into main)

## Session handoff (2026-09-09, end of session 10 — remote/web session, branch `claude/mercor-interview-prep-svvx9u`, fast-forwarded into main at 1284a0d)

**Mercor screen is Wed 2026-09-09 13:00–13:20 ET, James Moore, Google Meet. Session ended ~2 h before the call.** Next session's first job: **ask how it went, get every question in his words, run `interview/debrief`** (creates `interview-prep/sessions/` + `question-bank.md`), then update tracker #32 via `set-status.mjs --row 32`.

### Files this session (all on the branch)
- `interview-prep/mercor-research-engineer-post-training.md` + `output/mercor-screen-2026-09-09.pdf`: the lean prep doc (rebuilt twice on his feedback: bullet answer plans, not scripts). §2 answer plans, §3 depth cards (blanks he fills), §4 their work (397B SkyRL post 09-01 is the hook), §5 RL at conversation depth, §6 numbers, §7 questions, §8 don'ts, §9 run sheet. Full company research is in git history at c173f31 only.
- `interview-prep/post-training-primer.md` + PDF: every training method at plain/technical/math level (pretraining → SFT → distillation → rejection sampling → REINFORCE → PPO/RLHF → DPO → GRPO → DAPO → aggregation → async corrections → RLVR → LoRA → self-play → reward hacking). Durable; reuse for any post-training role.
- `output/cv-shayan-shakeri-mercor-2026-09-08.pdf`: one-page Letter CV built for the Ashby reminder's "share an updated resume." Corpus id `mercor-32-cv-2026-09-08`, finalized with his spans. Payload only lives in the session scratchpad (gone); rebuild from cv.md + the facts below if needed. **Whether he actually sent it to Ally is unknown; ask.**
- `jds/mercor-re-post-training.md`: closest public sibling JD (97b8c17e), used for jd-skill-gap.

### CV facts used that are NOT in cv.md (he approved them in chat; ask before writing into cv.md)
- BMO: "Built, scaled, and own BMO Wealth's multi-agent data layer: an orchestration harness with graph, analysis, and search tools" (D013) and the 30,000-clients / 3-hours / days line (D014; metrics in cv-facts.json).
- New project, his exact four lines (2026-09-08): **Catan Agent Environment (Merlyn Labs), 2026–present, in progress**: "Built an environment to train and evaluate LLM agents playing Settlers of Catan with an expanded negotiation space" / "Found OTS Catanatron engine agents scored future moves with hidden state, so redesigned a native engine" / "Agents see the full game transcript then choose either one of the legal actions or to negotiate with other bots" / "Integrating a multi-model leaderboard, then post-training on the best performing bots". Context: view object = full transcript + legal actions + negotiate; every action and reasoning trace saved for later training; bots play full games and have won some; compute is the constraint; TI tooling in progress, much harder. Not an audit of Catanatron; a build that hit a problem.
- Format decisions he made for this CV: **no Core Competencies strip** (engineer-read CV; departs from _profile.md rule 11c, not yet a standing rule; ask if it should be), projects rendered as bullets (post-processed; template only has a description paragraph), summary in his Mubit voice, no neurostimulator line, no VLM-judges bullet.
- His stated preferences this session, worth a delta entry: prep docs = bullets (point, beats, why, options), never verbatim scripts; "think about what goes in and why," tell projects in order (what, motivation, what we did, why we switched, how it works, next).

### Still open
- D1 start-date sentence (M.Eng to Apr 2027 vs SF 5 days) and BMO stop line: he was told to write them before the call; not recorded anywhere.
- Litmus take-home content: still not in the repo. Capture in the debrief.
- BMO offer (deadline was 09-03) and TMX letter: never answered.
- career-ops update 1.24.0 → 1.32.0: offered, unanswered. `npm install` was run here (no lockfile; `npm ci` fails).
- `node data/learn.mjs audit`: same pre-existing unfinalized drafts; the Mercor CV record is finalized.
- Branch is merged into main (fast-forward, 2026-09-09). Laptop: `git pull origin main`.


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
