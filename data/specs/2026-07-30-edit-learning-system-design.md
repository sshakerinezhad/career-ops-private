# Edit-Learning System — Design

**Date:** 2026-07-30
**Status:** Approved design, not yet implemented
**Supersedes:** nothing. Extends the existing `data/delta.mjs` ledger.

> Spec lives in `data/specs/` (user layer), not `docs/superpowers/specs/`, because
> `update-system.mjs` includes `docs/` in its overwrite path and would clobber it on
> a system update.

## Problem

The current system (`data/deltas.md`, 12 entries) captures span-level corrections and
merges similar ones, but cannot answer the question "is this actually getting better?"
Four concrete gaps, each confirmed against the literature:

1. **No per-document metric.** Cost is tracked per correction. A draft that shipped
   nearly untouched and one rewritten wholesale both produce "some entries."
2. **No context conditioning.** Every rule applies globally. CIPHER's central mechanism
   is inferring preference *per context* and retrieving from the k-closest past contexts.
3. **No reflect/curate split.** ACE separates a Reflector (diagnoses why the output
   failed) from a Curator (merges non-redundant lessons). We have trigram merge only.
   Consequence observed: the structural lessons (D011, D012) took three letters to
   surface and appeared only when the user interrogated the system directly.
4. **No enforcement.** Logging depends on the agent remembering. On 2026-07-30, 2 of 7
   corrections went unlogged until the user asked.

## Prior art

| Work | What we take |
|------|--------------|
| [CIPHER / PRELUDE](https://arxiv.org/abs/2404.15269) (NeurIPS 2024) | Infer preference per context; retrieve from k-closest contexts at generation; cumulative edit distance as the success metric. Avoids fine-tuning by design. |
| [ACE](https://arxiv.org/abs/2510.04618) (2025) | Playbook as evolving structure; incremental delta updates to prevent **context collapse**; explicit Reflector role. Named risk: **brevity bias**. |
| [GEPA](https://arxiv.org/abs/2507.19457) (ICLR 2026 Oral) | Natural-language reflection beats scalar reward; gains come from scoring candidates against a metric and selecting, not from reflecting alone. |
| [SEA-Eval](https://arxiv.org/abs/2604.08988) (2026) | Success rate alone is a "capability illusion"; the discriminator between genuine and pseudo-evolution is **cost convergence over a sequential stream**. |
| [Style-personalization evaluation](https://arxiv.org/html/2508.06374), [APM](https://arxiv.org/html/2605.21063v1), [authorship gap](https://arxiv.org/pdf/2604.26460) | Reference-free LLM-judge protocols carry known bias. Prefer reference-based scoring where ground truth exists. |

## Design decisions (user-ratified 2026-07-30)

- **Metric:** draft survival rate. Reference-based, no judge in the headline number.
- **Scope:** all written artifacts (cover, cv, form, email, outreach, chat-when-corrected).
- **Draft-time loop:** N structurally-distinct candidates, scored, best shown.

## Architecture

### Tier 1 — Statute

`voice-dna.md`. Hard rules. Always loaded in full, never retrieved, never auto-edited.
Entries graduate here from the playbooks at recurrence 3 (mechanism exists, has never
fired — see Open Questions).

### Tier 2 — Playbooks

`data/playbooks/{type}.md`, one per artifact type. Curated lessons with recurrence
counts. **Incremental updates only** — never rewritten wholesale. This is ACE's
anti-collapse rule and matches the existing prohibition on hand-editing `deltas.md`.

### Tier 3 — Cases

The k-nearest `(draft span, final span)` pairs, retrieved from the corpus by context
similarity, injected as raw before/after text.

Rationale: the rule "lead with what you built" (D011) is a lossy compression of the
actual BMO paragraph rewrite. Abstracted rules lose exactly what ACE calls brevity
bias. Raw examples do not.

Similarity is deterministic (trigram Jaccard over context fields plus exact type
match), reusing `trigrams()` from `delta.mjs`. No embedding model, no network.

### Corpus

`data/corpus.jsonl`, append-only. One record per artifact instance:

```json
{
  "id": "2026-07-30-haize-cover",
  "ts": "2026-07-30",
  "type": "cover",
  "context": { "company": "Haize Labs", "role": "Applied Researcher",
               "archetype": "Alignment / Evals RE", "report": "022" },
  "candidates": [
    { "cid": "A", "strategy": "build-first",   "text": "...", "predicted": 0.71,
      "lint": { "violations": [], "score": 1.0 } },
    { "cid": "B", "strategy": "finding-first", "text": "...", "predicted": 0.64,
      "lint": { "violations": ["em-dash"], "score": 0.9 } }
  ],
  "shown": "A",
  "final": "...",
  "survival": { "A": 0.52, "B": 0.61 },
  "styleSurvival": { "A": 0.68, "B": 0.74 },
  "lengthWords": { "draft": 268, "final": 291 },
  "spans": [ { "was": "...", "now": "...", "kind": "style", "deltaId": "D011" } ],
  "state": "shipped"
}
```

`final` is filled when the user pastes a rewrite or confirms shipping unchanged.
A record with `state: "drafted"` and no `final` is incomplete and the audit flags it.

### Metric

```
survival      = 1 - editCost(draft, final)          // normalized word-level, [0,1]
styleSurvival = 1 - editCost(draft, final) computed over style-tagged spans only
```

`editCost` already exists in `delta.mjs` and is the metric CIPHER evaluates on.
0 = total rewrite, 1 = shipped untouched.

**Style vs content tagging.** Every changed span is tagged `style`, `content`, or
`factual`. Only `style` counts as system failure. `content` and `factual` edits are the
user supplying information only he has; counting them as failures would train the
system toward vaguer drafts that are harder to correct.

### Candidate loop

1. Retrieve statute + playbook for type + k=3 nearest cases.
2. Generate N=3 candidates with **declared, structurally different strategies**
   (e.g. build-first / finding-first / project-first). Strategies are recorded, so
   over time we learn which openings survive best per artifact type.
3. Score each:
   - **Deterministic linter** over everything in `voice-dna.md` that is mechanically
     checkable: banned vocabulary (§3A), banned phrases (§3B), dead transitions (§3C),
     em dashes, negative parallelisms (§3F), zero-pronoun rule for CVs, rule-of-three.
     Pure code. No model, no bias, no cost.
   - **Model critic** for structural fit against the retrieved cases. Used ONLY for
     ranking candidates, never as a measure of whether the system works.
4. Show the winner plus a one-line rationale. Log every candidate.

### Selector calibration

When `final` arrives, score **all** candidates retroactively, not only the shown one.
Track Spearman rank correlation between `predicted` and realized `styleSurvival`.

- ρ near 1: the selector picks well; N-candidate generation is earning its tokens.
- ρ near 0 or negative: the selector is worthless and candidate generation is waste.

This is the loop that makes the system falsifiable. Cost is near zero because the
candidates already exist.

### Replay harness

`learn.mjs replay` regenerates a draft for each corpus record that has a `final`,
under the current rule set, and scores it against that known final. Converts history
into a test set instead of waiting months for new applications.

**Leave-one-out is mandatory.** Each replay must exclude any playbook entry or delta
derived from that same record. Rules fitted on the answer will reproduce the answer;
without this guard, replay is guaranteed to look excellent and means nothing.

### Enforcement

`learn.mjs audit` exits non-zero when:
- an artifact exists in `output/` or a tracker row changed state, with no corpus record
- a corpus record sits in `state: "drafted"` older than one session
- a `final` was recorded with no span tagging

Wired into the session-end ritual in `modes/_custom.md`, next to the git rules.

Rationale: the contact-row bug was fixed the same way. A documented rule decayed; an
exit code did not. Nothing can force a model to be conscientious, but a failing check
at session end is a mechanism rather than a reminder.

### Readout

`learn.mjs stats`:
- survival and styleSurvival curves per artifact type, ordered by time
- draft length trend alongside survival (Goodhart guard, see below)
- selector rank correlation with n
- explicit refusal to name a trend below n=10, with sample size printed beside
  every number

## Failure modes and guards

| Risk | Guard |
|------|-------|
| **Goodhart via brevity.** Shorter drafts get edited less, so survival rewards saying less. This is ACE's brevity bias and is the most likely way this system fails quietly. | Track `lengthWords` per draft. Flag any rise in survival paired with falling draft length. Treat that pattern as a regression, not a win. |
| **Context collapse.** Wholesale playbook rewrites erode detail. | Incremental updates only. `learn.mjs` is the sole writer, same rule that governs `deltas.md`. |
| **Replay leakage.** Rules derived from a record trivially reproduce it. | Leave-one-out rule construction, enforced in the replay path. |
| **Style/content conflation.** Content edits counted as failures teach vagueness. | Per-span tagging, two separate curves, style is the optimization target. |
| **False confidence at low n.** 3 letters is not a trend. | Readout refuses to characterize direction below n=10 and always prints n. |
| **Judge bias creeping into the headline metric.** | The model critic ranks candidates only. Survival is reference-based against the user's actual shipped text. |

## Component boundaries

| File | Responsibility | Depends on |
|------|---------------|------------|
| `data/learn.mjs` | Sole writer for corpus and playbooks. Subcommands: `draft`, `final`, `score`, `audit`, `stats`, `replay`. | `delta.mjs` (editCost, trigrams) |
| `data/lint.mjs` | Deterministic voice-dna linter. Pure function, text in, violations out. No I/O. | none |
| `data/corpus.jsonl` | Append-only artifact records. | — |
| `data/playbooks/*.md` | Curated per-type lessons. | written only by `learn.mjs` |
| `data/deltas.md` + `delta.mjs` | Unchanged. Remains the span-level ledger; corpus spans reference delta IDs. | — |

`lint.mjs` is separable and independently testable: given text, it returns violations.
It is useful on its own even if the rest of the system is never built.

## Testing

- `lint.mjs`: unit tests per rule class, with a known-violating and known-clean sample
  drawn from real deltas (D003 opener, D005 TN rider, em-dash cases).
- `editCost` / survival: property tests — identical text scores 1.0, disjoint text
  scores near 0, and the metric is symmetric-free (order matters).
- Replay: an integration test asserting that leave-one-out actually removes the record's
  own deltas, since silent leakage would invalidate every downstream number.
- `audit`: fixture with a drafted-but-unfinalized record must exit non-zero.

## Implementation phasing

Three phases, each independently useful. Ship and live with each before starting the
next — the measurement half does not depend on the generation half, and Phase 1 alone
answers the question that motivated this work.

**Phase 1 — Measurement (build first).**
`lint.mjs`, `data/corpus.jsonl`, survival + styleSurvival computation, span tagging,
`learn.mjs draft|final|audit|stats`. No candidates, no critic, no replay. Output: a real
curve, an enforcement gate, and a deterministic linter that catches voice-dna violations
before the user has to. If nothing else ever gets built, this is the piece that made the
original question answerable.

**Phase 2 — Generation (only if Phase 1 shows flat style survival).**
N-candidate loop, model critic, selector calibration, rank correlation in `stats`.
Gated deliberately: if Phase 1 shows style survival already climbing from retrieval
alone, the candidate loop is 5x tokens for nothing, and the honest move is to skip it.

**Phase 3 — Replay.**
Leave-one-out replay harness. Last because it needs a corpus with enough finalized
records to be worth running, and it is the only component whose value is purely
diagnostic.

## Open questions

1. **Promotion has never fired.** No entry has reached recurrence 3, and
   `data/deltas-archive.md` does not exist. The statute-graduation path is untested.
   Deferred: watch it, do not redesign it. D005 and D006 sit at 2.
2. **N=3 candidates for chat prose is almost certainly waste.** Start with candidates
   for cover/cv/form only; log chat corrections as single-draft records.
3. **Cold start.** Backfilling historical records requires reconstructing drafts from
   conversation history, which exists only for the two most recent letters. Accept a
   small seed corpus rather than fabricating pairs.

## Success criteria

The system is working if, over the next 10 artifacts:
- `styleSurvival` trends upward per artifact type, and
- selector rank correlation is meaningfully positive, and
- draft length does **not** fall while survival rises.

If styleSurvival is flat at n=10 with positive selector correlation, the retrieval is
working and the generation is not. If selector correlation is near zero, cut the
candidate loop and keep the measurement.

The system is failing, and should be said to be failing, if survival rises while draft
length falls.
