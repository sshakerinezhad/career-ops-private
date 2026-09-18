# Mock 2 brief: APEX-v1-extended, two models, a judge to validate

Read this at "kickoff" (Wed 23, 07:30). Then 90 minutes on the clock. Then a 15-minute presentation, recorded. Do not open `mock-2-grader-key.md` until the debrief.

## The brief, as an interviewer would give it

APEX-v1-extended is Mercor's benchmark of expert-written tasks for four jobs: investment banking associate, management consultant, big law associate, primary care physician. The open dev set is `mercor/APEX-v1-extended` on Hugging Face, `data/train.csv`: 100 tasks, 25 per domain; columns `Task ID`, `Domain`, `Prompt`, `Rubric JSON`, `File Attachments`. The rubric is a dict, `criterion 1` to `criterion N`, each with `description`, `criterion_type`, `weight`, `dependent_criteria`, `sources`, `justification`, `human_rating`; criteria are binary, Met or Not met. Attachments are paths under `documents/<Task ID>/` in the same repo (PDF, CSV, one docx, one xlsx). The leaderboard score is the mean percentage of criteria met, one Judge LM (Gemini 2.5 Pro, thinking on) grading each criterion independently, 8 runs per task.

Use these 30 tasks, the CSV-only tasks with the smallest attachments, so every prompt plus file fits a 128k context with room and the cost is flat (20 Consulting, 10 Finance, 287 criteria, largest file 82 KB): 145, 283, 352, 772, 828, 1080, 1091, 1149, 1166, 1170, 1171, 1172, 1188, 1192, 1242, 1259, 1265, 1269, 1288, 1384, 2107, 2157, 2192, 2205, 2228, 2230, 2232, 2294, 2302, 2308. Reserve, the other 7 CSV-only tasks: 804, 1122, 1150, 1169, 2121, 2266, 2315.

Two models, your choice, one cheap and one strong, your own keys, one run each. In 90 minutes, answer:

1. **How do the two models compare on mean percent of criteria met?** Task-level bootstrap CI on each and a paired analysis across the 30 tasks. Is the difference real?
2. **Validate the per-criterion judge** against 40 criteria you label by hand from the models' outputs: accuracy, precision and recall on Met, Cohen's kappa, and the criterion types where it fails.
3. **Scattergunning.** How often does a model hedge with more than one answer where the criterion asks for one, and does the judge let it through?
4. **What is wrong with this eval?** What would you flag before publishing these numbers?

Deliverable: a repo (code, `results.jsonl`, `metrics.json`, one plot) and a 5-slide presentation. Email both to yourself by minute 90. The presentation is 8 minutes talking, then questions.

## Ground rules for the rehearsal

- Camera on. Cursor or Claude Code allowed. You read every line before you run it and can say what each function is for.
- Timer visible. Run-sheet on the desk. If you are behind at minute 60, cut analysis, never the presentation.
- Record the presentation (phone audio is fine). Present to the recorder as if to Austin.

## Getting the data (before the clock starts, not part of the 90 minutes)

```bash
mkdir -p apex-v1/data && curl -sSL -o apex-v1/data/train.csv https://huggingface.co/datasets/mercor/APEX-v1-extended/resolve/main/data/train.csv
```

1.3 MB. Then the 31 CSV attachments of the 30 tasks, 0.8 MB (names have spaces and parentheses, so quote them):

```python
import csv, json, os, urllib.parse, urllib.request
csv.field_size_limit(10**9)
rows = {r["Task ID"]: r for r in csv.DictReader(open("apex-v1/data/train.csv", encoding="utf-8"))}
BASE = "https://huggingface.co/datasets/mercor/APEX-v1-extended/resolve/main/"
for t in TASKS:  # the 30 IDs above
    rubric = json.loads(rows[str(t)]["Rubric JSON"])  # {"criterion 1": {...}, ...}
    for rel in rows[str(t)]["File Attachments"].split("\n"):
        os.makedirs(os.path.dirname(f"apex-v1/{rel}"), exist_ok=True)
        urllib.request.urlretrieve(BASE + urllib.parse.quote(rel), f"apex-v1/{rel}")
```

Attachment content is obtainable: every path in the column exists in the repo's `documents/` folder. Mercor's harness (`Mercor-Intelligence/apex-evals`) appends each parsed file to the prompt as a `=== <filename> ===` block under `==== Attached files content: ====` and forbids follow-up questions; read each CSV as text and do the same. Its judge prompt takes criterion and response only and returns `{"result": 0 or 1, "reason": "..."}`. The card forbids crawling and scraping; a one-time download for evaluation is its intended use.

## Cost and time, before you launch

Calls: generation 30 tasks × 2 models × 1 run = 60; judge 30 × 2 × 9.57 mean criteria = 574. Input per generation call is about (prompt + template chars) / 4 plus attachment bytes / 3.5; the 30 attachments total 779 KB, about 240k input tokens per model; output is 60 × your response budget (2,000 to 4,000 tokens for a memo with numbers). Judge: 574 × (response tokens + 50) in, about 100 out. Multiply by the day's prices. Time is calls / concurrency × latency measured on a 5-task smoke test; if the full run needs more than 15 minutes, cut tasks, not models.
