# Mock 1 grader key. Do not open before the debrief.

Computed 2026-09-16 from the four `trajectories_index.json` files (267 rows each, 89 tasks × 3 rollouts). Null scores counted as failures, as the dataset card instructs. Bootstrap CIs are task-level, 2,000 resamples.

## Numbers

| Set | Pass@1 | 95% CI | Pass@3 | Pass^3 | null scores | error status |
|---|---|---|---|---|---|---|
| 397B untrained | 50.6 | 41.2 to 59.9 | 64.0 | 39.3 | 2 | 1 |
| 397B trained | 55.4 | 45.7 to 64.4 | 67.4 | 41.6 | 1 | 1 |
| 35B untrained | 44.6 | 34.8 to 53.2 | 57.3 | 29.2 | 3 | 3 |
| 35B trained | 50.9 | 42.3 to 59.6 | 66.3 | 33.7 | 18 | 18 |

Paired, per task, trained minus untrained:

| Model | Mean diff | 95% CI on the diff | tasks up / down / unchanged | never solved by either | always solved by both |
|---|---|---|---|---|---|
| 397B | +4.9 pts | +0.4 to +9.7 | 16 / 7 / 66 | 27 | 30 |
| 35B | +6.4 pts | +0.7 to +12.0 | 24 / 11 / 54 | 27 | 19 |

Behaviour (index fields): 397B median total tokens 252k → 262k, median time 577 s → 654 s. 35B median total tokens 260k → 457k, median time 1,616 s → 1,939 s. `trajectory_statistics_tool_calls` is 0 in every row of every set.

The dataset card's own table: 397B 50.6 → 55.4 (std ± 2.66 / 2.83), 35B 44.6 → 50.9, standard error over the 89 tasks about ± 4.6 on each Pass@1.

## What a strong answer finds

1. **The claim survives only as a paired claim.** The unpaired CIs overlap almost entirely (41–60 vs 46–64). The paired difference across the same 89 tasks is +4.9 with a CI that just excludes zero. A strong candidate reports the paired number, says the unpaired comparison is inconclusive, and says the sample of 89 tasks is the binding limit, not the 3 rollouts.
2. **Pass^3 barely moved** (39 → 42): training added tasks it can sometimes solve, not tasks it reliably solves. 27 tasks are never solved by either model; that is the frontier, and a strong candidate names two of them.
3. **The 35B trained set has 18 errored rollouts (6.7%) against 3 untrained.** Errors count as failures, so either the trained model's gain is understated, or training changed behaviour (longer rollouts: median tokens up 76%, median time up 20%) in a way that hits infrastructure limits. Either way it is a "non-model error" question in Mercor's own vocabulary and must be flagged before publishing. Fourteen of the 18 carry `grading_statuses: ["failed"]`, so the grader itself failed on them, not just the agent.
4. **`tool_calls` is zero everywhere.** The Terminus harness sends JSON commands inside assistant messages, so the field is a harness artefact, not a behaviour signal. A strong candidate notices this in the first five minutes of looking at the data and does not report "no tool use" as a finding.
5. **Taxonomy with counts and a validated classifier.** Any reasonable categories (wrong approach; right approach, execution bug; gave up or declared done early; timeout or step-limit; environment or build failure; misread the task) are fine. What is graded: a hand-labelled slice of 20, the classifier's agreement with it (report it as a number), prevalence with that caveat, two verbatim examples with trajectory IDs.

## Presentation rubric (score each 0 to 2)

- Headline first, one sentence, before any method.
- Pass@1 stated with a task-level CI, and the paired analysis shown.
- Errored rollouts handled explicitly and disclosed.
- Taxonomy with counts, classifier accuracy stated, two verbatim examples.
- One slide on what is wrong with this eval (89 tasks, 3 rollouts, binary scores, the tool_calls field, the grading failures).
- What was cut and what comes next.
- Emailed before minute 90; repo runs from a clean clone.
- Every line of code can be explained when asked.

14 to 16: ready. 10 to 13: one more rehearsal on the weak rows. Under 10: the toolkit or the run-sheet needs rebuilding before Wednesday.

## Debrief questions to ask him

Where did the first 15 minutes go? Which numbers did he compute first, and why? When did he first read a trajectory by hand? What did Cursor write that he could not explain? What would he cut next time?
