# Mock 3 brief: APEX-Accounting, calibrate the judge before you trust it

Read this at "kickoff" (Sat 26, 09:00 PT). Then 90 minutes on the clock. Then a 15-minute presentation, recorded. Do not open `mock-3-grader-key.md` until the debrief.

## The brief, as an interviewer would give it

Mercor's public APEX-Accounting dev set is on Hugging Face: `mercor/apex-accounting`, file `data/dev.jsonl`. One world (World 9, Sterling, Marsh & Associates LLP, a Philadelphia law firm at its December 2024 close), 10 tasks. Each row: `prompt`, `context_files` (the author's input-file manifest; the agent never sees it), `rubric` (binary criteria with `id`, `criterion_type`, and a `description` stating the acceptable value or range), `gold_output` (the expert's answer, scores 100% against the rubric), `metadata`. The world's 90 source files and 16 task-specific files ship in `world/` and `task_files/`. Headline metric: Mean Criteria@3, percent of criteria met, averaged over 3 runs per task, then over tasks. Our judge grades one criterion at a time and sees the task prompt, the criterion and the final output only, never the trajectory or the gold.

A judge script is provided: `mock-3-judge.py`. It has been used before. `--gold` grades the gold outputs; `--outputs` grades a jsonl of model outputs (`{"task_id", "run", "output"}`); one call per criterion; writes `results.jsonl` and `metrics.json`; reads `OPENAI_BASE_URL`, `OPENAI_API_KEY`, `JUDGE_MODEL`.

You have your own API keys for any model you want to call.

In 90 minutes, answer:

1. **Calibrate.** Grade the gold outputs with the provided judge. Decide whether the judge can be trusted. Say what you found and what you changed.
2. **Run one or two models, three times each**, on the tasks whose context you can actually give them. Mean Criteria@3 with task-level bootstrap CIs, paired if two models.
3. **Agreement between two judge models** on the same criteria: Cohen's kappa. Which judge do you believe, and why?
4. **Failure taxonomy** over the failed criteria, against the paper's L1 categories (Information-gathering; Instruction-following; Reasoning; Tool use; Planning/reflection; Communication; Other). Hand-label a slice, classify the rest with an LLM, report prevalence with the classifier's measured accuracy.
5. **What is wrong with this eval at n = 10?** What would you flag before anyone quotes a number from it?

Deliverable: a repo (code, `results.jsonl`, `metrics.json`, one plot) and a 5-slide presentation. Email both to yourself by minute 90. The presentation is 8 minutes talking, then questions. Present to Salman.

## Ground rules for the rehearsal

- Cursor or Claude Code allowed. You read every line before you run it, the provided script included, and can say what each function is for.
- No peeking at the dataset card's dev-set results table until you have your own numbers.
- Timer visible. Run-sheet on the desk. Behind at minute 60: cut analysis, never the presentation.
- Record the presentation (phone audio is fine).

## Getting the data (before the clock starts, not part of the 90 minutes)

```bash
mkdir apex-accounting && cd apex-accounting
curl -sSL -o dev.jsonl https://huggingface.co/datasets/mercor/apex-accounting/resolve/main/data/dev.jsonl
pip install -U huggingface_hub openai openpyxl pypdf python-docx
hf download mercor/apex-accounting --repo-type dataset --local-dir .
cp ../mock-3-judge.py . && JUDGE_FAKE=1 python mock-3-judge.py --data dev.jsonl --gold --out smoke/
```

`dev.jsonl` is 43 KB; the full download is 106 files, 4.0 MB (90 under `world/`, 16 under `task_files/`), and every `context_files` name resolves to exactly one of them. The last line is an offline smoke test: `JUDGE_FAKE=1` swaps the model for a number-matching stub. Its numbers are not judge numbers.

Context as text (openpyxl, pypdf, python-docx): Tasks 30, 23, 7, 17 are 14k, 40k, 52k, 131k characters, about 4k to 37k tokens. The other six each pull in the general-ledger detail (869k chars), the journal-entry register (831k) or the time-entries CSV (1.72M): 858k to 1.77M chars, roughly 245k to 505k tokens each. Decide before the clock starts which tasks you run, and whether the big ones get a 1M-context model, a filtered ledger, or nothing. Say which in the deliverable.

## Cost and time estimate (do the arithmetic before you launch)

- Model calls: tasks × runs × models × (context + prompt + answer tokens). The four small tasks are about 68k input tokens per run, so 3 runs × 2 models is about 0.4M tokens.
- Judge calls: criteria × runs × models × judges, 1k to 2k tokens each. The four small tasks carry 32 criteria: 32 × 3 × 2 × 2 = 384 calls, plus 89 gold calls per judge.
- Wall time: model runs at concurrency 3, minutes; 384 judge calls at concurrency 8, 3 to 5 minutes; reading failed criteria by hand, 15 to 20 minutes. The rest is slides.
