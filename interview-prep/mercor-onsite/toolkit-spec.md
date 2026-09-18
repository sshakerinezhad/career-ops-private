# Toolkit spec (plan task P3)

One public GitHub repo, generic: no Mercor data, no Mercor prompts verbatim, no PII. The point is that on the day you adapt, not write (`format-analysis.md` §1.6). It must run all five brief shapes without redesign (§1.3): prompts plus references or rubrics; pre-generated outputs to judge; two models to compare; a dataset with something wrong in it; trajectories.

Read Mercor's own grading code before building (plan P2): apex-evals prompt and `{result, reason}` output, the Archipelago judge prompt and scattergun guard, the APEX-Accounting judge rules. Facts in `research/mercor-output-2026.md` §2.

## Files

`run_inference.py`
- Async OpenAI-compatible client (OpenAI, Anthropic, Google, OpenRouter via one interface).
- Concurrency limit, timeout, retries with backoff.
- Disk cache keyed by model + prompt + params + sample index; a second run costs $0.
- Append-only `raw.jsonl`; latency and error recorded per call.
- Cost and time estimate printed before the run.

`grade.py`
- Exact match with normalization (whitespace, case, numbers) and numeric tolerance.
- Per-criterion rubric judge in Mercor's shape: criterion + response in, `{"result": 0 or 1, "reason": "..."}` out; every raw judge output saved.
- Scattergun check: more than one committed final answer scores 0.

`metrics.py`
- Pass@1 as a mean over tasks with a task-level bootstrap CI.
- Unbiased Pass@k from n samples (1 − C(n−c, k) / C(n, k), needs n ≥ k); Pass^k.
- Mean criteria met.
- Paired comparison of two models on the same items, bootstrap on the differences.
- Judge vs reference labels: accuracy, precision and recall on Met, Cohen's kappa.

`failures.py`
- Stratified failure sample to markdown for reading by hand.
- Taxonomy file with counts (model error by type; grader error; harness or format error; ambiguous item).
- LLM classifier over failures, validated on a hand-labelled slice; its accuracy reported.

`report.md` template: headline; numbers with CIs; taxonomy table with two verbatim examples; what is wrong with this eval; next steps; what was cut.

README with the exact commands.

## Build order

P3a `run_inference.py` against a real key on 20 prompts. P3b `grade.py` and `metrics.py`. P3c `failures.py`, `report.md`, README.

## Acceptance (plan P3, P6)

- Clean clone to first result under 5 minutes, timed.
- Unit tests pass on a toy set with known answers.
- A second run costs $0.
- You can say what every function is for and why it exists.
