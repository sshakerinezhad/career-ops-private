# Run-sheet: the 90-minute practical (plan P4)

Printed. On the desk in every rehearsal and on the day. Sources: plan §2, `format-analysis.md` §1.5 to §1.9, `evidence.md` (implementation intentions, backward planning, message-first structure, pre-performance routine).

## Before the clock (set-up, 11:30)

1. Laptop on power. Wi-Fi joined; phone hotspot ready as backup.
2. Terminal in the toolkit repo; latest pull; environment active.
3. Keys pasted into `.env`; one smoke call per provider you might use.
4. Cursor open on the repo; Claude Code in the terminal.
5. Empty `results/` folder; today's folder or branch.
6. Timer visible, not in a browser tab.
7. Email draft to apex@mercor.com open, addressed, subject filled.
8. Slide template open, 5 blank slides.
9. This sheet, the pattern sheet, water on the desk.
10. Ask Maggie: what goes in the email (repo link, zip, slides)?

## Kickoff (11:45, 15 minutes)

- Write the brief down as Austin says it. Restate it in one sentence; get a nod.
- Ask, in order: deliverable format; which metric they report on this data; judge prompt given or mine; their endpoint or my key; rate limits; may I subsample.
- The toolkit ask: "I have a small open-source eval harness of my own. Fine to use it?"
- 60 seconds before the clock: one slow breath; the rubric in four words (runs, defensible number, a finding, code I can explain); the first move (read ten rows). The pressure is the format working as intended.

## The 90 minutes (12:00 to 13:30)

| Minute | Do | Output |
|---|---|---|
| 0 to 10 | Read the brief twice. Read ten raw rows by eye. On paper: the one question, the one metric, the cut list, the smoke set. | Three lines on paper. |
| 10 to 25 | Point the toolkit at the data: loader, inference, grader on a 20-item smoke set. Eyeball raw outputs and raw judge outputs. Launch the full run in the background. | Smoke results read by eye; full run started. |
| 25 to 60 | While it runs: read 20 to 30 failures by hand; build the taxonomy; count; two verbatim examples with IDs. Hand-label the judge-validation slice (20 to 40 items). | Taxonomy with counts; hand labels. |
| 60 to 75 | Metrics: the number with its task-level CI and n; paired if two models; judge agreement (accuracy, precision and recall on Met, kappa). One table, one plot at most. | `metrics.json`, one figure. |
| 75 to 85 | `report.md` from the template; the 5 slides; commit; send the email. | Email sent. |
| 85 to 90 | Buffer. Re-read slide 1. | |

## If-then rules

- If inference has not returned by minute 25: subsample, state n, note it on slide 4.
- If the full run is not done by minute 55: report on what has finished, state n, never wait.
- If the API rate-limits or errors: lower concurrency, retries with backoff, keep the cached rows; count failures as harness errors, not model errors.
- If the judge disagrees with your hand labels on more than 20% of the slice: report the judge's accuracy; do not present its number as the model's number; say which criterion types fail.
- If the dataset has fewer than 50 items: say the interval width before anyone asks.
- If the data has something wrong (duplicates, missing references, format quirks): that is the finding; count it; keep going.
- At minute 70: stop building, write.
- Behind at 60: cut analysis, never the presentation.
- If Cursor or Claude Code wrote something you cannot explain: rewrite it or delete it; you will be asked.
- If something is broken and unfixable: report it as a non-model error and say what you did instead.

## The 5 slides (finding first)

1. Finding: one sentence, the headline number with its interval and n.
2. Numbers: the table; the paired difference if two models; the judge validation numbers.
3. Failures: taxonomy with counts; two verbatim examples with IDs.
4. What is wrong with this eval: grader, data, my shortcuts (n, subsampling, one run).
5. Next steps, and what was cut.

## Presentation (13:30, 15 minutes)

- 7 to 8 minutes talking, slide 1 first. Then questions: answer with the log line, not the memory. "I don't know; here is what I'd check" when true.
- Code walk: what each function is for and why it exists.

## Email (sent by 13:20)

Subject: your name, "LLM Evaluation practical, results". Body: the finding in one sentence; the number with its CI and n; the repo link; attached `results.jsonl`, `metrics.json`, the slides. It must stand alone for someone who was not in the room.
