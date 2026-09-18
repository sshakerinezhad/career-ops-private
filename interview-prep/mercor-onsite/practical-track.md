# Practical track: the cards (P1a to P12)

The 2-hour "LLM Evaluation and Analysis" session with Austin Bennett: 15-minute kickoff, 90 minutes alone, 15-minute presentation, results emailed to apex@mercor.com. Their words: "design, implement, and analyze LLM evaluation pipelines"; "summarize your insights". Scored (`format-analysis.md` §1.4): it runs end to end; the statistics are right (intervals, n, grader reliability); the judgment is good (what to measure, what to cut); there is a finding; you can defend every line of AI-written code. Every brief is the same loop: load, look, call, grade, count, present (§1.3). The skill is the loop.

How to read a card: **Read** is the only reading. **Do** is the whole task, in order. **Drive home** is what must be automatic afterwards. **Bot** names the thread to open (Tutor and Examiner are in the plan §1; 8.x are in `format-analysis.md` §8). **Test** is how mastery is checked; **Done when** is the pass bar. Then one ledger line.

---

### P1a. Keys and tools on the machine you have · dev · 45 min · Fri 18

**Do.**
1. Inference keys, funded, for OpenAI, Anthropic, Google, OpenRouter. Put them in a `.env` that is in `.gitignore`. Any provider is fine on the day (Emily, 09-18); OpenRouter alone reaches all four families if a native endpoint fights you.
2. Cursor installed and signed in. Claude Code installed in the terminal and signed in.
3. One successful chat call per provider from a five-line Python script.
**Done when.** Four successful calls; `.env` never committed.

### P1b. Travel laptop set-up · travel laptop · 45 min · Tue 22 12:30

**Do.** Clone the toolkit (P3). `pip install -r requirements.txt`. Keys into `.env`. Run the README's smoke command on a phone hotspot, twice: the second run must cost $0 (cache hit). Sign in to Cursor and Claude Code and run one Claude Code edit on the hotspot.
**Done when.** Smoke passes on the hotspot; second run $0; both tools work off hotel-grade Wi-Fi.

### P2. Mercor's grading code, once · screen · 45 min · Fri 18 or Sat 19

**Read.** `research/mercor-output-2026.md` §2 (what an APEX task row looks like; the open harness judge prompt, verbatim) and §3 (their own words on judges, rubrics, agreement, contamination, Pass@k, variance).
**Do.**
1. Log in to Hugging Face; open `mercor/apex-agents-v1.1` and `mercor/apex-agents`; accept the terms (auto-approved).
2. Download one task directory; read its `tests/grade.py` and `grading_config.json`.
3. Close everything. Say aloud: what their judge sees, what it returns, what it forbids, how the score is computed.
**Drive home.** One criterion per judge call. Output `{"result": 0 or 1, "reason": "..."}`. Score = fraction of criteria met, then mean over tasks and runs (Pass@1 = all met; mean criteria met = fraction). The judge never sees the trajectory (self-preference). A hedge or a scattergun of answers scores 0. Your `grade.py` copies this shape.
**Test.** The aloud summary in step 3, no notes, under 90 s.
**Done when.** Summary clean; one task dir on disk.

### P3. Toolkit v1 · dev · P3a 2 h, P3b 2.5 h, P3c 1.5 h · Fri 18 to Sat 19

**Read.** `toolkit-spec.md` (all of it, 2 minutes). `format-analysis.md` §1.3 (the five brief shapes the toolkit must run without redesign) and §1.5 (what an expert does; the toolkit exists to make those moves cost nothing).
**Do.** Public GitHub repo, generic, no Mercor data or prompts, no PII. Write it with Claude Code; read every line before it runs.
- **P3a** `run_inference.py`: async OpenAI-compatible client with one interface for the four providers; concurrency limit, timeout, retries with backoff; disk cache keyed by model + prompt + params + sample index; append-only `raw.jsonl` with latency and error per call; cost and time estimate printed before the run. Test on 20 prompts from any public dataset with a real key. Run twice; the second run costs $0.
- **P3b** `grade.py`: exact match with normalization (whitespace, case, numbers) and numeric tolerance; per-criterion rubric judge in Mercor's shape, every raw judge output saved; scattergun check (more than one committed final answer scores 0). `metrics.py`: Pass@1 as a mean over tasks with a task-level bootstrap CI; unbiased Pass@k, 1 − C(n−c, k)/C(n, k), refused when n < k; Pass^k; mean criteria met; paired comparison of two models with a bootstrap on the differences; judge vs labels: accuracy, precision and recall on Met, Cohen's kappa. Unit tests on a toy set with answers you computed by hand (three tasks × four samples; one 2×2 agreement table).
- **P3c** `failures.py`: stratified failure sample to markdown; taxonomy counts (model error by type; grader error; harness or format error; ambiguous item); LLM classifier over failures validated on a hand-labelled slice, accuracy reported. `report.md` template (headline; numbers with CIs; taxonomy with two verbatim examples; what is wrong with this eval; next steps; what was cut). README with the exact commands. Then time it: `git clone` to first result.
**Drive home.** On the day you adapt, not write. The second run costs $0, so re-running after a bug is free. The report template forces finding-first. You can say what every function is for and why it exists.
**Test.** Record yourself explaining each function in one sentence, no file open. Any function you cannot explain gets rewritten by you, not the agent.
**Done when.** Clean clone to first result under 5 min, timed; unit tests pass; second run $0; every function explained on the recording.

### P4. The run-sheet · screen · 30 min · Sat 19 09:30

**Read.** `run-sheet.md`, all of it.
**Do.** With the agent, section by section: change any timing or slide order that does not fit you; keep the if-then rules unless you can say why one is wrong. Print it. It sits on the desk in every rehearsal and on the day.
**Drive home.** The minute marks (10 plan · 25 smoke set launched · 60 metrics · 75 report and slides · 85 email). The if-then rules, especially: behind at 60, cut analysis, never the presentation; minute 70, stop building; unexplainable code gets rewritten or cut. Slides are finding-first.
**Test.** Recite the minute marks and the if-then rules cold.
**Done when.** Printed; recited cold; used in every rehearsal.

### P5. Rehearsal 1, Sun 20 · dev · 08:15 to 11:30

**Read.** `mock-1-brief.md`, at 08:30 and not before. Data downloaded the night before per its "Getting the data" section.
**Do.**
1. 08:15 pre-flight from the run-sheet: keys, clean clone, smoke test, timer, run-sheet printed, phone recorder ready.
2. 08:30 kickoff: read the brief; write the kickoff questions you would ask (P10) and answer them yourself as "your call"; restate the task in one sentence.
3. 08:45 to 10:15 the 90 minutes. Run-sheet on the desk. Timer visible.
4. 10:15 email the repo link or zip and the slides to yourself. Late is a fail.
5. 10:15 to 10:30 present aloud to the recorder as if to Austin: 8 minutes, finding first, then take your own three hardest questions.
6. 10:45 debrief: open `mock-1-grader-key.md`; score each rubric line 0 to 2; write the fix list split into toolkit fixes (P6) and process fixes (run-sheet); write the question-bank lines; give the tracking session the score and the fix list; re-cut Sun to Tue.
**Drive home.** Finding first. An interval and an n on every number. The grader is a suspect until you read its outputs. Where the 90 went, said unprompted.
**Done when.** Score on the key (14+ ready; 10 to 13 repeat the weak rows; under 10 rebuild); fix list written; ledger updated.

### P6. Toolkit v2 · dev · 1 h after each rehearsal

**Do.** Work the fix list from the latest debrief. Re-run the unit tests. Re-time the clean clone. Push. Final fixes Thu 24 night after rehearsal 2's list.
**Done when.** Clean clone under 5 min again; tests pass; fix list empty.

### P7. Presentation Q&A thread · screen · 45 min after each rehearsal

**Bot.** Fresh thread, `format-analysis.md` §8.3, with your slides, results and code from the rehearsal pasted.
**Do.** Answer aloud by dictation. Take the code walk one function at a time. At the end ask for the ranked gap list; copy it into `question-bank.md`; code gaps go to the P6 fix list.
**Drive home.** The seven questions a skeptical evaluator asks: why this metric; the interval and where it comes from; how you know the grader is right; two failures verbatim; what you cut and why; one more day; what surprised you.
**Test.** The thread is the test. Pass: no Wrong on the seven; no function you could not explain.
**Done when.** Three threads by Sat 26 (after rehearsals 1, 2, 3), each passed.

### P8. Rehearsal 2, Wed 23 · travel laptop · 07:15 to 10:45

**Read.** `mock-2-brief.md` at 07:30. Download the attachments the night before per its "Getting the data" section.
**Do.** Same six steps as P5, camera on for the whole 90 and the presentation: the recording is graded (you, not only the slides). Key: `mock-2-grader-key.md`. Debrief 10:00; fix list; re-cut Wed to Fri.
**Done when.** Emailed by minute 90; 12+ of 16 on the key; ledger updated.

### P9. Rehearsal 3, Sat 26 PT, with Salman · travel laptop · 08:45 to 11:45

**Read.** `mock-3-brief.md` at 09:00. Download per its "Getting the data" section the night before, including the offline smoke line.
**Do.** Same six steps. The brief ships a judge script that "has been used before": read it line by line before you run anything; that is the point of this rehearsal. Present to Salman as Austin; he holds `mock-3-grader-key.md` and asks its debrief questions; you do not open the key until after. Debrief 11:15; fix list; re-cut Sat to Mon.
**Done when.** The planted bug found before any model call; 14+ of 16; ledger updated.

### P10. Kickoff script from memory · paper · 20 min on three days

**Read.** `format-analysis.md` §1.9 (the six kickoff questions); `run-sheet.md` kickoff section.
**Do.** Write from memory: the six questions (deliverable format; which metric they report on this data; judge prompt provided or expected; their endpoint or your key; rate limits; may I subsample), the one-sentence restatement, and the toolkit ask: "I have a small open-source eval harness of my own. Fine to use it?" Say it to a recorder.
**Done when.** Under 60 s, no notes, on three different days.

### P11. Day-before check, Sun 27 · travel laptop · 1 h

**Do.** Run-sheet pre-flight list end to end. Presentation dry run twice from the mock 3 slides, 8 minutes each, timed. Email flow test to yourself. Clean clone timed. Keys in `.env`. Cursor and Claude Code signed in. Battery full. Printouts: run-sheet, pattern sheet, the L1 card. Close the laptop; nothing new after.
**Done when.** All green; laptop closed.

### P12. Brief-triage drills · screen · 10 min each, two per thread

**Read.** `format-analysis.md` §1.5 once (the eight expert moves; the plan you write is those moves in order).
**Bot.** Fresh thread, `format-analysis.md` §8.4.
**Do.** Get the brief. In 10 minutes, write: the one question you will answer; the one metric and why the data supports it; the cut list; the smoke set (5 items); the ten rows you read by hand first; the risks. Paste. Get graded. Next brief.
**Drive home.** One question, one metric. Subsample early. Read ten rows by eye before code. Treat the grader as a suspect. An interval on every number. Say what you cut.
**Done when.** Five briefs by Sat 26; the last two Strong on every item.

---

Track done: P9 at 14+; P6 clean clone under 5 min; P7 three threads passed; the presentation lands the finding first in 8 minutes.
