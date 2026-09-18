# Mock 2 grader key. Do not open before the debrief.

Computed 2026-09-18 from `data/train.csv` (revision e0db951) and the repo's `documents/` listing; harness facts from `Mercor-Intelligence/apex-evals`, `apex-evals-v1-extended/`, main branch the same day. Model numbers could not be precomputed: no API keys exist on the machine that wrote this. The bootstrap figures in finding 1 are illustrations on simulated scores.

## Dataset facts, verified

| Fact | Value |
|---|---|
| Rows | 100; Legal, Medicine, Consulting, Finance, 25 each; IDs 13 to 2333, unique; no duplicate prompts; prompt median 1,264 chars (197 to 5,239) |
| Criteria | 1,140; per task mean 11.4, median 10, 5 to 25; Medicine mean 16.8, the other three 9.3 to 9.9 |
| `criterion_type` (a list) | Reasoning only 460; Extraction (recall) only 112; both 561; Style 7. Flattened: Reasoning 1,021, Extraction 673, Style 7 |
| `weight` | Primary objective(s) 788; Not primary objective 352; Finance is the only domain where Not primary dominates (152 of 232) |
| `human_rating` | True on 4 of 1,140, all in task 1359 (Medicine) |
| `dependent_criteria` | non-empty on 541 (47%) in 93 tasks; 356 name one prerequisite, 185 name two to 11; indices point at other criteria of the same rubric |
| `sources`, tolerance | sources empty 443, "Prompt" 89, names an attachment 591; 380 criteria state an "acceptable" value or range |
| Attachments | every task has 1 to 9 (mean 1.76); 176 files: 132 PDF, 42 CSV, 1 docx (task 1407), 1 xlsx (1588); all present in `documents/`, 37.1 MB, CSVs 1.67 MB |
| CSV-only tasks | 37: Consulting 24, Finance 13. The handoff said 31 and 6; the total matches, the split does not (only 25 Consulting tasks exist). No .txt or .md files exist |
| The 30 chosen | 287 criteria (mean 9.57, 5 to 16); both types 222, Reasoning only 65, Style 0; Primary 177, Not primary 110; 209 with a tolerance; 144 with prerequisites; 225 whose sources name the CSV; 16 ask for a recommendation |

## The judge Mercor used

Card: "A single Judge LM (Gemini 2.5 Pro, Thinking=On) grades each criterion independently. The overall score for each response is the mean percentage of criteria met. Each model is evaluated 8 times per task." Changes from v1.0 include "passing the prompt and source documents to the judge alongside the rubric".

Open harness prompt (research file §2, verbatim): "You are evaluating a model-generated response against a specific criterion... Criterion to evaluate: {criterion_description} Response to evaluate: {solution}... Determine if the response fully satisfies the criterion (result = 1) or not (result = 0)... {"result": <1 or 0>, "reason": "<concise explanation>"}". Defaults `gemini-2.5-flash`, temperature 0.01, one run, retries with backoff. Score = criteria with result 1 / criteria in the rubric; `weight` and `dependent_criteria` are copied to the output and never used.

## What a strong answer finds

1. **The paired comparison is the only claim that survives.** Illustration (simulated per-task scores on the 30 tasks' criteria counts, seed 20260918, 10,000 resamples): one model's task-level 95% CI at n = 30 is 16 to 21 points wide when per-task scores have sd 23 to 29. Paired with a true 12-point gap, three draws gave +15.6 [+6.6, +24.2], +5.9 [-2.4, +14.0], +8.1 [+0.1, +16.0]: two of three excluded zero. Report the paired diff with its CI and tasks up / down / unchanged; the unpaired CIs will overlap. Pooling the 287 criteria gives an SE near 3 points: wrong unit, criteria within a task are not independent.
2. **Half the criteria have prerequisites and the grading ignores them.** 541 of 1,140 (144 of 287 in the 30); the judge grades each in isolation. Task 283 criterion 10 ("revenue increase... $24.9M") depends on criterion 1 (the 22% share): credit downstream with a failed input, or one wrong input failing every link of a chain. Report the score raw (what the leaderboard does) and with dependents zeroed when a prerequisite fails; show one chain from the outputs.
3. **The type cut is thin; the useful cut is tolerance.** `criterion_type` is multi-label; the 30 tasks hold two combos and no Style (7 in the set, 0.6%; the 4 in the CSV pool sit in excluded 804, 1122, 1150, 1169). Split judge errors by tolerance vs none (209 vs 78): numeric criteria are where the judge must find a value in a memo and compare it to a range (rounding, $M vs $, percent vs share). No human labels exist for the 30, so the 40 hand labels are the only ground truth, 14% of 287; kappa comes with its n.
4. **The open judge sees neither the prompt nor the CSV.** Criterion and response only; the card says the leaderboard judge also gets prompt and documents. 225 of the 287 criteria cite the CSV: the judge cannot check a number against the file, only against the value written in the criterion. Defaults differ too (`gemini-2.5-flash` vs Gemini 2.5 Pro thinking; 1 run vs 8). Say which judge ran and why these are not leaderboard numbers.
5. **Scattergunning has a natural test set.** 209 criteria want one value, 16 want one recommendation (283 criterion 13: "Recommends a focus on the Medium size category"). Count responses giving two candidates where one was asked and what the judge returned. The apex-evals prompt has no hedging rule; Mercor's Archipelago judge fails a hedge "even if the correct answer appears among the alternatives". Report the rate with its denominator, even 0 of N.
6. **What is wrong with this eval**, any four: 1 run and 30 tasks, so within-task variance is unmeasured (the card uses 8); unweighted mean although 352 criteria are Not primary; dependents ignored; the judge is a Gemini and a candidate model may be too (self-preference, Mercor's own concern); the dev set is public and only "forbidden" for training, not protected; the harness parses attachments with Reducto by default, so the leaderboard's CSV input may differ from the raw text he inlines.

## Presentation rubric (score each 0 to 2)

- Headline first, one sentence, before any method.
- Mean % criteria met per model with task-level CIs, and the paired diff with its CI and up / down / unchanged counts.
- Judge validation: 40 hand labels, accuracy, precision and recall on Met, kappa with n, the failure cut, two verbatim examples with Task ID and criterion number.
- Scattergun rate with its denominator, and the judge's verdict on those cases.
- One slide on what is wrong with this eval (dependents, judge blind to prompt and file, 1 run vs 8, unweighted, self-preference).
- What was cut and what comes next.
- Emailed before minute 90; repo runs from a clean clone; `results.jsonl` has one row per task, model and criterion with the judge's reason.
- Every line of code can be explained when asked.

14 to 16: ready. 10 to 13: one more rehearsal on the weak rows. Under 10: the toolkit or the run-sheet needs rebuilding before mock 3 on Saturday.

## Debrief questions to ask him

Where did the first 15 minutes go? When did the smoke test launch, and the full run? How did he pick the 40 criteria (random, stratified by tolerance, or the interesting ones)? Did he open one CSV and check one number by hand? What did the judge get wrong that he did not predict? Is the judge related to either model? What did Claude Code write that he could not explain? What would he cut next time?
