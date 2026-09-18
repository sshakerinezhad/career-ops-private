# Mock 3 grader key. Do not open before the debrief.

Computed 2026-09-18 from `data/dev.jsonl` (repo revision bf5e8c9, last modified 2026-07-31), the dataset card, and the repo tree API. Every number from the 09-17 handoff re-verified and matched. "Stub" numbers come from `JUDGE_FAKE=1` runs of the shipped script; they test plumbing and say nothing about a real judge. No real judge was run (no API key on the build machine).

## Dataset facts as verified

| Fact | Value | Source |
|---|---|---|
| Tasks, worlds | 10, 1 (World 9, Sterling, Marsh & Associates LLP) | dev.jsonl, card |
| Criteria | 89; 2 to 24 per task; mean 8.9, median 5.5 | dev.jsonl (card agrees) |
| Criterion types | 73 Reasoning (numerical), 16 Reasoning (qualitative); Task 14 holds 9 of the 16 | dev.jsonl |
| Tolerance statements | 72 of 89 carry "(acceptable value ...)" or "(acceptable range X to Y)"; all 72 numerical; the one numerical criterion without one is Task 23 "no more than five" | dev.jsonl |
| gold_output, prompt length | 254 to 2,854 chars; 266 to 899 chars | dev.jsonl |
| context_files | 56 entries, 38 unique; bare file names, no paths or URLs; xlsx 33, csv 12, pdf 7, txt 3, docx 1; Task 30 two xlsx only; Task 23 includes `Management Memo.docx` (465 chars) | dev.jsonl |
| File contents | All obtainable: 106 repo files (90 `world/`, 16 `task_files/`), 4.0 MB; every name resolves to one file | tree API, card |
| Context as text | Tasks 30/23/7/17: 14k/40k/52k/131k chars. Other six: 858k to 1.77M chars (GL detail 869k, JE register 831k, time entries CSV 1.72M) | my extraction |
| Estimated hours | 0.75 to 4.0, sum 23.75; Reconciliation 4, Schedules & Accruals 3, Variance Analysis 2, Data Entry 1 | metadata |
| Card on the judge | DeepSeek-v4-Flash at temperature 0.1, GEPA template not released, one criterion at a time, sees prompt + criterion + final output, "never the trajectory log", returns Met / Not Met plus a short explanation | card |
| Paper on the judge | 97.1% accuracy, 96.6% precision, 97.4% recall on Met; three experts, majority vote, raw agreement 92.8%, Fleiss kappa 0.857; APEX-Agents judge graded all 480 golds correctly | interviewers.md 1c, mercor-output-2026.md 3 |
| Card on dev vs held-out | Claude-Fable-5 67.9% dev vs 56.4% held-out; Muse-Spark-1.1 52.4 vs 52.6; Qwen3.5-397B 27.6 vs 24.4; "the easiest of the 11 qualifying worlds"; "should not be reported as APEX-Accounting scores" | card |

## The planted bug

`mock-3-judge.py`, function `gold_outputs`, line 168: `"output": golds[i - 1]`. Task i's rubric is graded with the gold answer of task i-1; the first task gets the last task's gold through Python's negative index, which is the wrap. Equivalently, every gold answer is graded against the next task's rubric (Task 4's gold against Task 5's rubric, Task 30's against Task 4's). Nothing else is wrong: `--outputs` pairs by `task_id` in `build_jobs`, and number formatting is handled in the prompt (rule 3) and in the stub's normalizer. A candidate who reports a tolerance-parsing bug has not found it.

How a strong candidate finds it: runs `--gold` before any model call, expects near 100% because Mercor reports 97.1% judge accuracy and every APEX-Agents gold graded correctly, sees a number near zero, opens `results.jsonl` and finds Task 5's payroll rubric graded against a Whitfield journal entry (Task 4's gold), then reads `gold_outputs` and sees `i - 1`. Reading the 12-line function before running anything also works. Fix: `golds[i]`, or drop the list and use `task["gold_output"]`. Rerun gold; residual failures are now the judge's own errors and worth reading one by one.

## Gold score with and without the bug (stub, JUDGE_FAKE=1)

| Run | Mean Criteria@1 (task mean) | Criteria met |
|---|---|---|
| Bug present, shipped file | 7.29% (bootstrap CI 0.0 to 18.96) | 6 of 89 (6.74%) |
| Bug fixed locally (`golds[i]`) | 100.0% | 89 of 89 |

The 6 passes under the bug are the 6 qualitative criteria with no digits (Task 4, four in Task 14, Task 23), which the stub passes by construction. With a real judge, expect the fixed run near 100% and the buggy run near zero with a few accidental passes on qualitative criteria.

## What a strong answer finds

1. **Tolerance lives in the rubric text, not in the judge.** 72 of 89 criteria carry the acceptable value or range in the description, so the judge must read "$210,899.93 to $210,901.93" and compare. $29,700, 29,700, 29700 and $29,700.00 must be one number. Strong: check the judge prompt says so, then test it with perturbed golds, one value 1 cent inside the range and one outside.
2. **Numerical versus qualitative.** 73 versus 16. The qualitative ones ("identifies no more than one journal entry", "explains the $125.00 as a subledger error rather than a real discrepancy") are where two judges disagree; report kappa separately for them, and read every disagreement.
3. **Tasks the model cannot really be given.** Every file is downloadable, but six tasks are 245k to 505k tokens as text, and no run here has the QuickBooks tool layer the leaderboard agent has. Strong: run Tasks 7, 17, 23, 30 (32 criteria) in full, state what happened to the other six (not run, or run with a filtered ledger), never average silently across the two conditions, and say these are not APEX-Accounting scores, which the card says of the dev set already.
4. **n = 10 cannot rank models.** Per-task SD of 15 to 25 points gives SE 5 to 8 and a 95% half-width of 9 to 15 points. Illustrative bootstrap on synthetic per-task scores (10,000 resamples): model A 68.2 (58.9 to 78.2), model B 55.2 (44.6 to 68.0), unpaired difference CI -2.2 to +27.9, paired difference 12.9 (7.6 to 17.8). Only the paired claim survives; about 61 tasks would be needed for a 5-point half-width at SD 20. One world means zero world variance by construction, and the card's own dev-versus-held-out gaps (+11.5 for Fable-5, -0.2 for Muse-Spark) show the world moves scores as much as the model does.
5. **Why gold validates a judge that never sees gold.** The judge grades (prompt, criterion, output); gold is an output that should meet every criterion, so it gives 89 labelled positives for free and measures the false-negative rate only. For false positives you need labelled negatives: perturbed golds (wrong number, out of range, missing line, two hedged answers) cost nothing. Report precision and recall on Met, the paper's own framing.
6. **Kappa between two judges is the number to report**, with raw agreement and n beside it. On the 89 gold criteria the labels are nearly all 1 and kappa collapses; compute it on model outputs where labels are mixed. Disagreements are the reading list: hand-label them and say which judge you trust.
7. **Taxonomy.** The paper: reasoning failures dominate every profile (79%, 75%, 59%) and "not a single annotated failure involves tool use". A chat-model run cannot fail at tool use either, so Tool use in the output is a classifier bug. Graded: 20 hand-labelled failed criteria, classifier agreement as a number, two verbatim examples with task and criterion ids.

## Presentation rubric (score each 0 to 2)

- Found the planted bug before running any model; said what it was and what changed.
- Headline first: one sentence on whether the judge can be trusted, with the gold number.
- Mean Criteria@3 with a task-level CI, paired if two models, n stated.
- Kappa between judges with raw agreement and n, and which judge is trusted.
- Taxonomy with counts, classifier accuracy stated, two verbatim examples.
- One slide on what is wrong with this eval (n = 10, one world, no tool layer, context too large, easiest world, self-preference if the judge is also the model).
- What was cut and what comes next.
- Emailed before minute 90; repo runs from a clean clone; every line can be explained.

14 to 16: ready. 10 to 13: one more rehearsal on the weak rows. Under 10: rebuild.

## Debrief questions to ask him

When did he first run `--gold`, and what number did he expect? Did he read `gold_outputs` before or after that run? What did he make of the criteria that still passed under the bug? Which tasks did he run and why those? What did he do when the two judges disagreed? What would he cut next time?
