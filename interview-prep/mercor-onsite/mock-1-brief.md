# Mock 1 brief: Terminal-Bench traces, before and after RL

Read this at "kickoff" (Sat 19, 10:00). Then 90 minutes on the clock. Then a 15-minute presentation, recorded. Do not open `mock-1-grader-key.md` until the debrief.

## The brief, as an interviewer would give it

Mercor post-trained two open models with RL on APEX-Agents tasks and then evaluated them on Terminal-Bench 2.1 (89 tasks, 3 rollouts per task) before and after training. The traces are public on Hugging Face: `mercor/ApexAgentsRecipe-TBench2_1-EvalTraces`. Four sets: `Qwen3p5-397B_untrained_traces`, `Qwen3p5-397B_trained_traces`, `Qwen3p6-35B_untrained_traces`, `Qwen3p6-35B_trained_traces`. Each set has `trajectories_index.json` (one row per trajectory: task, `final_score`, token statistics, status, timing) and `tasks/<task>/traj_<id>.json` (the full model and terminal exchange, the benchmark result, command history). `final_score` is binary; trajectories with `trajectory_status: "error"` have a null score.

You have your own API keys for any model you want to call.

In 90 minutes, answer:

1. **Did post-training improve the 397B model on Terminal-Bench?** Give the number you would put in a blog post, with its uncertainty, and a paired analysis across the 89 tasks. Say whether you believe the improvement is real.
2. **What changed in behaviour** between the untrained and trained 397B? Turns, tokens, time, timeouts, errors, anything you can measure from the index and a sample of trajectories.
3. **Why does the trained 397B still fail?** Build a failure taxonomy over its failed rollouts. Use an LLM to classify at scale, validate the classifier against 20 trajectories you labelled by hand, and report category prevalence together with the classifier's measured accuracy.
4. **Is the scoring trustworthy?** What would you flag before publishing these numbers?

Deliverable: a repo (code, `results.jsonl`, `metrics.json`, one plot) and a 5-slide presentation. Email both to yourself by minute 90. The presentation is 8 minutes talking, then questions.

## Ground rules for the rehearsal

- Cursor or Claude Code allowed. You read every line before you run it and can say what each function is for.
- No peeking at the README's results table on Hugging Face until you have your own numbers (it exists; the point is to compute them and then compare).
- Timer visible. Run-sheet on the desk. If you are behind at minute 60, cut analysis, never the presentation.
- Record the presentation (phone audio is fine). Present to the recorder as if to Austin.

## Getting the data (do this before the clock starts, it is not part of the 90 minutes)

```bash
pip install -U huggingface_hub
hf download mercor/ApexAgentsRecipe-TBench2_1-EvalTraces --repo-type dataset --local-dir tbench-traces
```

About 1,000 JSON files, roughly 100 KB each. If the download is slow, the four `trajectories_index.json` files alone are enough for questions 1, 2 and 4; you need the per-trajectory files only for the failure sample in question 3.
