# Edit-Learning System, Phase 1 (Measurement) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make draft quality measurable — a deterministic voice linter, an append-only corpus of (draft → final) pairs, a survival metric that separates style edits from content edits, and an audit gate that fails when logging is skipped.

**Architecture:** Three files. `data/lint.mjs` and `data/survival.mjs` are pure (text in, numbers out, no I/O, no network) so they are trivially testable. `data/learn.mjs` is the only writer: it owns the CLI, JSONL append, and the audit/stats readouts. Everything reuses `editCost`/`tokenize` from `data/delta.mjs` rather than reimplementing edit distance.

**Tech Stack:** Node.js ESM (`.mjs`), zero dependencies, no network. Self-tests follow the existing `--self-test` + `eq()` pattern in `data/delta.mjs`.

> Plan lives in `data/plans/` (user layer), not `docs/superpowers/plans/`, because
> `update-system.mjs` includes `docs/` in its overwrite path (line 251) and would
> clobber it on a system update. Same reason the spec lives in `data/specs/`.

## Global Constraints

- Node ESM `.mjs` only. **No new dependencies.** No network access in any code path.
- Everything lands in `data/` — user layer, survives `update-system.mjs`.
- **Do NOT register self-tests in `test-all.mjs`.** That file is system layer; an update reverts the registration. Each module self-tests via `node data/<file>.mjs --self-test`, matching `delta.mjs`.
- `data/learn.mjs` is the **sole writer** of `data/corpus.jsonl` and `data/playbooks/`. Never hand-edit either. Append-only; never rewrite prior records.
- Reuse `editCost`, `tokenize`, `trigrams`, `jaccard` from `data/delta.mjs`. Do not reimplement.
- Windows host: use `path.join` / `pathToFileURL`, never hardcoded separators. Git is configured to convert LF→CRLF; write files with `\n` and let git handle it.
- `MIN_N = 10`. Below that sample size, `stats` must refuse to characterize a trend direction.
- Survival is defined as `1 - editCost(draft, final)`. Higher is better. Never invert this.

## File Structure

| File | Responsibility | Purity |
|------|---------------|--------|
| `data/lint.mjs` | Deterministic voice-dna violations. `lint(text, opts) -> {violations, score}` | Pure, no I/O |
| `data/survival.mjs` | Survival math, Goodhart guard, trend gating | Pure, no I/O |
| `data/learn.mjs` | CLI (`draft`/`final`/`audit`/`stats`), JSONL append, readouts | I/O, sole writer |
| `data/corpus.jsonl` | Append-only artifact records | Data |

---

### Task 1: Deterministic voice linter

**Files:**
- Create: `data/lint.mjs`
- Reads (test only): `voice-dna.md`

**Interfaces:**
- Consumes: nothing (pure module, no imports from the project)
- Produces:
  - `export const BANNED_WORDS: string[]`
  - `export const BANNED_PHRASES: string[]`
  - `export const DEAD_TRANSITIONS: string[]`
  - `export const PARALLELISM_PATTERNS: RegExp[]`
  - `export const WEIGHTS: {word: 0.10, phrase: 0.15, transition: 0.15, emdash: 0.25, parallelism: 0.25, pronoun: 0.25}`
  - `export function lint(text: string, opts?: {type?: string}): {violations: Array<{rule: string, kind: string, match: string, index: number}>, score: number}`
  - Score is `Math.max(0, 1 - Σ weights)`, rounded to 3 decimals. Clean text scores `1`.
  - When `opts.type === 'cv'`, first-person pronouns are a violation (kind `pronoun`), per `_profile.md` CV rule 7.

- [ ] **Step 1: Write the failing test**

Create `data/lint.mjs` containing ONLY the self-test block for now, so it fails on missing exports:

```js
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));

let passed = 0;
let failed = 0;

function eq(label, actual, expected) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) passed++;
  else {
    failed++;
    console.log(`  FAIL: ${label}`);
    console.log(`    expected: ${e}`);
    console.log(`    actual:   ${a}`);
  }
}

function runSelfTest() {
  eq('clean text scores 1', lint('I built an eval suite that caught a real bug.').score, 1);
  eq('clean text has no violations', lint('I built an eval suite.').violations.length, 0);

  const w = lint('We leverage a robust and scalable paradigm.');
  eq('banned words detected', w.violations.filter((v) => v.kind === 'word').map((v) => v.match).sort(),
    ['leverage', 'paradigm', 'robust', 'scalable']);
  eq('banned words lower the score', w.score, 0.6);

  eq('em dash detected', lint('I build evals — mostly for agents.').violations.map((v) => v.kind), ['emdash']);

  const p = lint("This isn't a demo. This is a product.");
  eq('negative parallelism detected', p.violations.map((v) => v.kind), ['parallelism']);

  eq('dead transition detected',
    lint('Furthermore, the eval caught it.').violations.map((v) => v.kind), ['transition']);

  eq('banned phrase detected',
    lint("It's important to note that evals matter.").violations.map((v) => v.kind), ['phrase']);

  eq('cv pronouns flagged only for cv',
    lint('I built the pipeline.', { type: 'cv' }).violations.map((v) => v.kind), ['pronoun']);
  eq('cv pronouns ignored for cover',
    lint('I built the pipeline.', { type: 'cover' }).violations.length, 0);

  eq('score floors at zero',
    lint("This isn't X. This is Y — furthermore, we leverage a robust scalable paradigm.").score, 0);

  eq('word match is case-insensitive', lint('Leverage it.').violations.length, 1);
  eq('word match respects boundaries', lint('Robustness is fine.').violations.length, 0);

  // Drift guard: every word in voice-dna.md section 3A must be in BANNED_WORDS.
  const voice = readFileSync(join(HERE, '..', 'voice-dna.md'), 'utf8');
  const block = voice.split('### 3A.')[1].split('###')[0];
  const listLine = block.split('\n').find((l) => l.includes('delve,'));
  const fromStatute = listLine.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
  const missing = fromStatute.filter((word) => !BANNED_WORDS.includes(word));
  eq('linter covers every voice-dna 3A word', missing, []);

  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

if (process.argv.includes('--self-test')) runSelfTest();
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node data/lint.mjs --self-test`
Expected: FAIL — `ReferenceError: lint is not defined`

- [ ] **Step 3: Write minimal implementation**

Insert above the self-test block (after the imports):

```js
export const BANNED_WORDS = [
  'delve', 'realm', 'harness', 'unlock', 'tapestry', 'paradigm', 'cutting-edge',
  'revolutionize', 'intricate', 'intricacies', 'showcasing', 'crucial', 'pivotal',
  'surpass', 'meticulously', 'vibrant', 'unparalleled', 'leverage', 'synergy',
  'innovative', 'game-changer', 'testament', 'commendable', 'meticulous', 'boast',
  'groundbreaking', 'foster', 'showcase', 'enhance', 'holistic', 'garner',
  'accentuate', 'pioneering', 'trailblazing', 'unleash', 'versatile',
  'transformative', 'redefine', 'seamless', 'optimize', 'scalable', 'robust',
  'breakthrough', 'empower', 'streamline', 'frictionless', 'elevate', 'adaptive',
  'effortless', 'data-driven', 'insightful', 'proactive', 'mission-critical',
  'visionary', 'disruptive', 'reimagine', 'unprecedented', 'intuitive',
  'leading-edge', 'synergize', 'democratize', 'accelerate', 'state-of-the-art',
  'dynamic', 'immersive', 'predictive', 'transparent', 'proprietary', 'integrated',
  'plug-and-play', 'turnkey', 'future-proof', 'paradigm-shifting', 'supercharge',
  'enduring', 'interplay', 'valuable', 'captivate',
];

export const BANNED_PHRASES = [
  "it's important to note that", "it's worth noting", 'in order to',
  "i'd be happy to help", 'straightforward', "let's dive in", "let's explore",
  "let's unpack", 'at the end of the day', 'moving forward', 'in other words',
  'it goes without saying', 'let that sink in', 'read that again',
  'this changes everything', 'to put this in perspective',
];

export const DEAD_TRANSITIONS = [
  'furthermore', 'additionally', 'moreover', 'that said', 'that being said',
  'with that in mind', 'it is also worth mentioning', 'on top of that',
];

export const PARALLELISM_PATTERNS = [
  /\b(?:this|it|that)\s+(?:isn't|is not|ain't)\b[^.!?]*[.!?]\s*(?:this|it|that)\s+is\b/i,
  /\bnot\s+(?:just|only)\s+about\b[^.!?]*,\s*it's\s+about\b/i,
  /\bless\s+\w+\s*,\s*more\s+\w+/i,
  /\bthe\s+question\s+isn't\b[^.!?]*\.\s*the\s+question\s+is\b/i,
  /\byou\s+don't\s+need\b[^.!?]*\.\s*you\s+need\b/i,
];

export const WEIGHTS = {
  word: 0.10, phrase: 0.15, transition: 0.15,
  emdash: 0.25, parallelism: 0.25, pronoun: 0.25,
};

const CV_PRONOUNS = /\b(?:i|i'm|i've|my|me|we|our|us)\b/i;

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function findAll(text, needle, kind) {
  const out = [];
  const re = new RegExp(`(?<![\\p{L}\\p{N}-])${escapeRe(needle)}(?![\\p{L}\\p{N}-])`, 'giu');
  let m;
  while ((m = re.exec(text)) !== null) {
    out.push({ rule: needle, kind, match: m[0].toLowerCase(), index: m.index });
  }
  return out;
}

/**
 * Deterministic voice-dna violations. Pure: no I/O, no model, no network.
 * score = max(0, 1 - sum of weights), 3 decimals. Clean text scores 1.
 */
export function lint(text, opts = {}) {
  const s = String(text);
  const violations = [];

  for (const word of BANNED_WORDS) violations.push(...findAll(s, word, 'word'));
  for (const phrase of BANNED_PHRASES) violations.push(...findAll(s, phrase, 'phrase'));
  for (const t of DEAD_TRANSITIONS) violations.push(...findAll(s, t, 'transition'));

  const dash = /[—–]|(?<!-)--(?!-)/g;
  let d;
  while ((d = dash.exec(s)) !== null) {
    violations.push({ rule: 'em-dash', kind: 'emdash', match: d[0], index: d.index });
  }

  for (const re of PARALLELISM_PATTERNS) {
    const m = s.match(re);
    if (m) {
      violations.push({
        rule: 'negative-parallelism', kind: 'parallelism',
        match: m[0].slice(0, 60), index: s.indexOf(m[0]),
      });
    }
  }

  if (opts.type === 'cv') {
    const m = s.match(CV_PRONOUNS);
    if (m) {
      violations.push({
        rule: 'cv-zero-pronoun', kind: 'pronoun',
        match: m[0].toLowerCase(), index: m.index,
      });
    }
  }

  violations.sort((a, b) => a.index - b.index);
  const penalty = violations.reduce((sum, v) => sum + (WEIGHTS[v.kind] ?? 0.1), 0);
  const score = Math.max(0, Math.round((1 - penalty) * 1000) / 1000);
  return { violations, score };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node data/lint.mjs --self-test`
Expected: PASS, `14 passed, 0 failed`

If the drift guard fails, the fix is to add the missing words to `BANNED_WORDS` — never to weaken the test. `harness` is deliberately on the banned list even though the project uses it as a noun of art; the linter reports it and a human decides.

- [ ] **Step 5: Commit**

```bash
git add data/lint.mjs
```

```bash
git commit -m "feat: deterministic voice-dna linter with statute drift guard"
```

---

### Task 2: Survival math and Goodhart guard

**Files:**
- Create: `data/survival.mjs`

**Interfaces:**
- Consumes: `editCost`, `tokenize` from `./delta.mjs`
- Produces:
  - `export const MIN_N = 10`
  - `export function survival(draft: string, final: string): number` — `1 - editCost`, 3 decimals
  - `export function styleSurvival(draft: string, spans: Array<{was, now, kind}>): number` — style-tagged spans only, weighted by their share of the draft
  - `export function lengthWords(text: string): number`
  - `export function slope(values: number[]): number` — least-squares slope over index
  - `export function goodhart(series: Array<{survival: number, draftLen: number}>): boolean` — true when survival rises while draft length falls
  - `export function describeTrend(series: Array<{survival: number, draftLen: number}>): {n, direction, goodhart, note}` — `direction` is `'insufficient-data'` below `MIN_N`

- [ ] **Step 1: Write the failing test**

Create `data/survival.mjs` with imports and the self-test block only:

```js
import { editCost, tokenize } from './delta.mjs';

let passed = 0;
let failed = 0;

function eq(label, actual, expected) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) passed++;
  else {
    failed++;
    console.log(`  FAIL: ${label}`);
    console.log(`    expected: ${e}`);
    console.log(`    actual:   ${a}`);
  }
}

function runSelfTest() {
  eq('untouched draft survives fully', survival('the cat sat down', 'the cat sat down'), 1);
  eq('one word changed of four', survival('the cat sat down', 'the dog sat down'), 0.75);
  eq('total rewrite survives nothing', survival('alpha beta', 'gamma delta'), 0);
  eq('empty pair is fully survived', survival('', ''), 1);

  const draft = 'one two three four five six seven eight nine ten';
  eq('no spans means nothing changed', styleSurvival(draft, []), 1);
  eq('content spans do not count against style',
    styleSurvival(draft, [{ was: 'one two', now: 'ONE TWO', kind: 'content' }]), 1);
  // style span is 2 of 10 draft tokens, fully rewritten -> cost 1 * 0.2
  eq('style span costs its share',
    styleSurvival(draft, [{ was: 'one two', now: 'alpha beta', kind: 'style' }]), 0.8);
  eq('style survival floors at zero',
    styleSurvival('a b', [{ was: 'a b', now: 'x y', kind: 'style' }, { was: 'a b', now: 'q r', kind: 'style' }]), 0);

  eq('lengthWords counts tokens', lengthWords('one two three'), 3);
  eq('lengthWords of empty', lengthWords(''), 0);

  eq('slope rising', slope([1, 2, 3]) > 0, true);
  eq('slope falling', slope([3, 2, 1]) < 0, true);
  eq('slope flat', slope([2, 2, 2]), 0);
  eq('slope of single point', slope([5]), 0);

  const trap = [
    { survival: 0.4, draftLen: 300 },
    { survival: 0.6, draftLen: 250 },
    { survival: 0.8, draftLen: 200 },
  ];
  eq('goodhart fires when survival rises as length falls', goodhart(trap), true);

  const healthy = [
    { survival: 0.4, draftLen: 300 },
    { survival: 0.6, draftLen: 305 },
    { survival: 0.8, draftLen: 310 },
  ];
  eq('goodhart quiet when length holds', goodhart(healthy), false);

  eq('trend refuses to call direction below MIN_N', describeTrend(trap).direction, 'insufficient-data');
  eq('trend reports n', describeTrend(trap).n, 3);
  eq('trend surfaces goodhart even below MIN_N', describeTrend(trap).goodhart, true);

  const ten = Array.from({ length: 10 }, (_, i) => ({ survival: 0.4 + i * 0.02, draftLen: 300 }));
  eq('trend names direction at MIN_N', describeTrend(ten).direction, 'improving');

  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

if (process.argv.includes('--self-test')) runSelfTest();
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node data/survival.mjs --self-test`
Expected: FAIL — `ReferenceError: survival is not defined`

- [ ] **Step 3: Write minimal implementation**

Insert between the imports and the self-test block:

```js
/** Below this many finalized records, we refuse to name a trend direction. */
export const MIN_N = 10;

function r3(n) {
  return Math.round(n * 1000) / 1000;
}

/** Fraction of the draft that survived into what the user shipped. 1 = untouched. */
export function survival(draft, final) {
  return r3(1 - editCost(draft, final));
}

export function lengthWords(text) {
  return tokenize(text).length;
}

/**
 * Survival counting ONLY style-tagged spans. Content and factual edits are the
 * user supplying information the system could not have known; charging the system
 * for those would teach it to write vaguer drafts that are harder to correct.
 *
 * Each style span costs editCost(was, now) weighted by the span's share of the draft.
 */
export function styleSurvival(draft, spans) {
  const total = tokenize(draft).length;
  if (total === 0) return 1;
  let cost = 0;
  for (const span of spans) {
    if (span.kind !== 'style') continue;
    const share = tokenize(span.was).length / total;
    cost += editCost(span.was, span.now) * share;
  }
  return r3(1 - Math.min(1, cost));
}

/** Least-squares slope of values against their index. 0 for fewer than 2 points. */
export function slope(values) {
  const n = values.length;
  if (n < 2) return 0;
  const meanX = (n - 1) / 2;
  const meanY = values.reduce((a, b) => a + b, 0) / n;
  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i++) {
    num += (i - meanX) * (values[i] - meanY);
    den += (i - meanX) ** 2;
  }
  return den === 0 ? 0 : r3(num / den);
}

/**
 * The brevity trap (ACE calls it brevity bias): survival can always be raised by
 * writing less. Rising survival paired with falling draft length is a regression,
 * not a win.
 */
export function goodhart(series) {
  if (series.length < 2) return false;
  return slope(series.map((s) => s.survival)) > 0
    && slope(series.map((s) => s.draftLen)) < 0;
}

export function describeTrend(series) {
  const n = series.length;
  const flagged = goodhart(series);
  if (n < MIN_N) {
    return {
      n,
      direction: 'insufficient-data',
      goodhart: flagged,
      note: `n=${n}, need ${MIN_N} before calling a direction`,
    };
  }
  const s = slope(series.map((x) => x.survival));
  const direction = s > 0.005 ? 'improving' : s < -0.005 ? 'regressing' : 'flat';
  return {
    n,
    direction,
    goodhart: flagged,
    note: flagged ? 'survival rising while drafts shorten — treat as regression' : `slope ${s}`,
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node data/survival.mjs --self-test`
Expected: PASS, `20 passed, 0 failed`

- [ ] **Step 5: Commit**

```bash
git add data/survival.mjs
```

```bash
git commit -m "feat: survival metric with style/content split and brevity-trap guard"
```

---

### Task 3: Corpus records — `draft` and `final`

**Files:**
- Create: `data/learn.mjs`
- Creates at runtime: `data/corpus.jsonl`

**Interfaces:**
- Consumes: `lint` from `./lint.mjs`; `survival`, `styleSurvival`, `lengthWords` from `./survival.mjs`; `today` from `./delta.mjs`
- Produces:
  - `export const CORPUS: string` — absolute path to `data/corpus.jsonl`
  - `export function readCorpus(): object[]` — parses JSONL, skips malformed lines
  - `export function appendRecord(rec: object): void`
  - `export function makeDraft({id, type, context, text}): object` — returns a record with `state: 'drafted'`, one candidate `{cid:'A', strategy:'single', text, lint}`, and `lengthWords.draft`
  - `export function finalizeRecord(rec, {final, spans}): object` — returns a NEW record with `state: 'shipped'`, `final`, `spans`, `survival`, `styleSurvival`, `lengthWords.final`
  - CLI: `node data/learn.mjs draft --file <json>` and `node data/learn.mjs final --id <id> --file <json>`
- Note: Phase 1 records carry exactly one candidate. The `candidates` array shape is present from day one so Phase 2 can add entries without a migration.

- [ ] **Step 1: Write the failing test**

Create `data/learn.mjs` with imports plus this self-test block:

```js
import { readFileSync, writeFileSync, appendFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { lint } from './lint.mjs';
import { survival, styleSurvival, lengthWords, describeTrend } from './survival.mjs';
import { today } from './delta.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));

let passed = 0;
let failed = 0;

function eq(label, actual, expected) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) passed++;
  else {
    failed++;
    console.log(`  FAIL: ${label}`);
    console.log(`    expected: ${e}`);
    console.log(`    actual:   ${a}`);
  }
}

function runSelfTest() {
  const rec = makeDraft({
    id: '2026-07-30-haize-cover',
    type: 'cover',
    context: { company: 'Haize Labs', role: 'Applied Researcher' },
    text: 'I build evals that catch real failures.',
  });
  eq('draft starts unshipped', rec.state, 'drafted');
  eq('draft has one candidate', rec.candidates.length, 1);
  eq('candidate is A', rec.candidates[0].cid, 'A');
  eq('draft is linted', rec.candidates[0].lint.score, 1);
  eq('draft length recorded', rec.lengthWords.draft, 7);
  eq('no final yet', rec.final, null);

  const shipped = finalizeRecord(rec, {
    final: 'I build evals that catch real bugs.',
    spans: [{ was: 'failures', now: 'bugs', kind: 'style' }],
  });
  eq('finalize marks shipped', shipped.state, 'shipped');
  eq('finalize records survival', shipped.survival.A, 0.857);
  eq('finalize records style survival', shipped.styleSurvival.A, 0.857);
  eq('finalize records final length', shipped.lengthWords.final, 7);
  eq('finalize does not mutate the draft', rec.state, 'drafted');

  const contentOnly = finalizeRecord(rec, {
    final: 'I build evals for agents at BMO.',
    spans: [{ was: 'that catch real failures', now: 'for agents at BMO', kind: 'content' }],
  });
  eq('content edits do not reduce style survival', contentOnly.styleSurvival.A, 1);
  eq('content edits still reduce raw survival', contentOnly.survival.A < 1, true);

  const parsed = parseLines(['{"id":"a"}', 'not json', '', '{"id":"b"}']);
  eq('malformed lines are skipped', parsed.map((r) => r.id), ['a', 'b']);

  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

if (process.argv.includes('--self-test')) runSelfTest();
else main();
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node data/learn.mjs --self-test`
Expected: FAIL — `ReferenceError: makeDraft is not defined`

- [ ] **Step 3: Write minimal implementation**

Insert between the `HERE` constant and the self-test block:

```js
export const CORPUS = join(HERE, 'corpus.jsonl');

export function parseLines(lines) {
  const out = [];
  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;
    try {
      out.push(JSON.parse(t));
    } catch {
      // A malformed line is skipped, never repaired in place: this file is append-only.
    }
  }
  return out;
}

export function readCorpus() {
  if (!existsSync(CORPUS)) return [];
  return parseLines(readFileSync(CORPUS, 'utf8').split('\n'));
}

export function appendRecord(rec) {
  appendFileSync(CORPUS, `${JSON.stringify(rec)}\n`, 'utf8');
}

export function makeDraft({ id, type, context, text }) {
  if (!id || !type || typeof text !== 'string') {
    throw new Error('makeDraft requires {id, type, text}');
  }
  return {
    id,
    ts: today(),
    type,
    context: context || {},
    candidates: [{ cid: 'A', strategy: 'single', text, lint: lint(text, { type }) }],
    shown: 'A',
    final: null,
    survival: {},
    styleSurvival: {},
    lengthWords: { draft: lengthWords(text), final: null },
    spans: [],
    state: 'drafted',
  };
}

export function finalizeRecord(rec, { final, spans }) {
  const tagged = spans || [];
  const surv = {};
  const style = {};
  for (const c of rec.candidates) {
    surv[c.cid] = survival(c.text, final);
    style[c.cid] = styleSurvival(c.text, tagged);
  }
  return {
    ...rec,
    final,
    spans: tagged,
    survival: surv,
    styleSurvival: style,
    lengthWords: { ...rec.lengthWords, final: lengthWords(final) },
    state: 'shipped',
  };
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function cmdDraft(argv) {
  const file = argv[argv.indexOf('--file') + 1];
  const rec = makeDraft(readJson(file));
  appendRecord(rec);
  console.log(JSON.stringify({ ok: true, id: rec.id, lint: rec.candidates[0].lint }, null, 2));
}

function cmdFinal(argv) {
  const id = argv[argv.indexOf('--id') + 1];
  const file = argv[argv.indexOf('--file') + 1];
  const rec = readCorpus().filter((r) => r.id === id).pop();
  if (!rec) {
    console.error(`No corpus record with id ${id}`);
    process.exit(1);
  }
  const done = finalizeRecord(rec, readJson(file));
  appendRecord(done);
  console.log(JSON.stringify({
    ok: true, id, survival: done.survival, styleSurvival: done.styleSurvival,
  }, null, 2));
}

function main() {
  const [cmd] = process.argv.slice(2);
  switch (cmd) {
    case 'draft': return cmdDraft(process.argv);
    case 'final': return cmdFinal(process.argv);
    default:
      console.error('Usage: node data/learn.mjs <draft|final|audit|stats> [args]');
      console.error('  draft --file rec.json     {id,type,context,text}');
      console.error('  final --id <id> --file f  {final,spans:[{was,now,kind}]}');
      process.exit(1);
  }
}
```

Records are superseded by appending, never edited in place. `readCorpus` uses the **last** record for an id, so a finalized record shadows its draft.

- [ ] **Step 4: Run test to verify it passes**

Run: `node data/learn.mjs --self-test`
Expected: PASS, `14 passed, 0 failed`

- [ ] **Step 5: Commit**

```bash
git add data/learn.mjs
```

```bash
git commit -m "feat: corpus records with draft and final subcommands"
```

---

### Task 4: Audit gate

**Files:**
- Modify: `data/learn.mjs` (add `auditCorpus` + `cmdAudit`, extend `main` switch and usage text)

**Interfaces:**
- Consumes: `readCorpus` from Task 3
- Produces:
  - `export function auditCorpus(records: object[], todayStr: string): {problems: Array<{id, problem}>}`
  - CLI: `node data/learn.mjs audit` — exits `1` when problems exist, `0` when clean

Three problems are detected: a record still `drafted` after more than 1 day; a `shipped` record whose `final` differs from the draft but carries no spans; a `shipped` record with a null or empty `final`.

- [ ] **Step 1: Write the failing test**

Add to `runSelfTest()` in `data/learn.mjs`, before the final `console.log`:

```js
  const stale = { id: 'old', ts: '2026-07-01', state: 'drafted', final: null,
    candidates: [{ cid: 'A', text: 'x' }], spans: [] };
  eq('stale draft is a problem',
    auditCorpus([stale], '2026-07-30').problems.map((p) => p.problem), ['unfinalized-draft']);

  const sameDay = { id: 'new', ts: '2026-07-30', state: 'drafted', final: null,
    candidates: [{ cid: 'A', text: 'x' }], spans: [] };
  eq('same-day draft is fine', auditCorpus([sameDay], '2026-07-30').problems.length, 0);

  const untagged = { id: 'u', ts: '2026-07-30', state: 'shipped', final: 'different text',
    candidates: [{ cid: 'A', text: 'original text' }], spans: [] };
  eq('edited but untagged is a problem',
    auditCorpus([untagged], '2026-07-30').problems.map((p) => p.problem), ['untagged-spans']);

  const untouched = { id: 'k', ts: '2026-07-30', state: 'shipped', final: 'same text',
    candidates: [{ cid: 'A', text: 'same text' }], spans: [] };
  eq('shipped untouched needs no spans', auditCorpus([untouched], '2026-07-30').problems.length, 0);

  const empty = { id: 'e', ts: '2026-07-30', state: 'shipped', final: '',
    candidates: [{ cid: 'A', text: 'x' }], spans: [] };
  eq('shipped with empty final is a problem',
    auditCorpus([empty], '2026-07-30').problems.map((p) => p.problem), ['missing-final']);

  eq('later record supersedes earlier',
    auditCorpus([stale, { ...stale, state: 'shipped', final: 'x', spans: [] }], '2026-07-30').problems.length, 0);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node data/learn.mjs --self-test`
Expected: FAIL — `ReferenceError: auditCorpus is not defined`

- [ ] **Step 3: Write minimal implementation**

Add to `data/learn.mjs` above `main()`:

```js
import { daysBetween } from './delta.mjs';

/** Last record per id wins: the corpus is append-only, so later entries supersede. */
function latestById(records) {
  const byId = new Map();
  for (const r of records) byId.set(r.id, r);
  return [...byId.values()];
}

export function auditCorpus(records, todayStr) {
  const problems = [];
  for (const r of latestById(records)) {
    if (r.state === 'drafted') {
      if (daysBetween(r.ts, todayStr) > 1) problems.push({ id: r.id, problem: 'unfinalized-draft' });
      continue;
    }
    if (!r.final) {
      problems.push({ id: r.id, problem: 'missing-final' });
      continue;
    }
    const shown = r.candidates.find((c) => c.cid === (r.shown || 'A')) || r.candidates[0];
    const changed = shown && shown.text.trim() !== String(r.final).trim();
    if (changed && (!r.spans || r.spans.length === 0)) {
      problems.push({ id: r.id, problem: 'untagged-spans' });
    }
  }
  return { problems };
}

function cmdAudit() {
  const { problems } = auditCorpus(readCorpus(), today());
  if (problems.length === 0) {
    console.log('corpus audit: clean');
    process.exit(0);
  }
  console.log(`corpus audit: ${problems.length} problem(s)`);
  for (const p of problems) console.log(`  ${p.id}: ${p.problem}`);
  console.log('\nfix: node data/learn.mjs final --id <id> --file <answers.json>');
  process.exit(1);
}
```

Add `case 'audit': return cmdAudit();` to the `main()` switch and `  audit                     fail if any artifact went unlogged` to the usage text.

Note: `daysBetween` is already exported from `delta.mjs` (line 342). Move this import up beside the other `./delta.mjs` import rather than leaving a second import statement mid-file.

- [ ] **Step 4: Run test to verify it passes**

Run: `node data/learn.mjs --self-test`
Expected: PASS, `20 passed, 0 failed`

Then verify the exit code, which is the whole point of this task:

Run: `node data/learn.mjs audit; echo "exit=$?"`
Expected: `corpus audit: clean` and `exit=0` on an empty corpus.

- [ ] **Step 5: Commit**

```bash
git add data/learn.mjs
```

```bash
git commit -m "feat: audit gate exits non-zero on unlogged or untagged artifacts"
```

---

### Task 5: Stats readout

**Files:**
- Modify: `data/learn.mjs` (add `buildSeries` + `cmdStats`, extend `main` switch and usage text)

**Interfaces:**
- Consumes: `readCorpus`, `latestById` (Task 4), `describeTrend` from `./survival.mjs`
- Produces:
  - `export function buildSeries(records: object[]): Map<string, Array<{id, ts, survival, styleSurvival, draftLen}>>` — keyed by artifact type, ordered by `ts` ascending, shipped records only
  - CLI: `node data/learn.mjs stats` (human readout) and `--json`

- [ ] **Step 1: Write the failing test**

Add to `runSelfTest()` before the final `console.log`:

```js
  const recs = [
    { id: 'c1', ts: '2026-07-10', type: 'cover', state: 'shipped', shown: 'A',
      survival: { A: 0.5 }, styleSurvival: { A: 0.6 }, lengthWords: { draft: 300 } },
    { id: 'v1', ts: '2026-07-12', type: 'cv', state: 'shipped', shown: 'A',
      survival: { A: 0.9 }, styleSurvival: { A: 0.9 }, lengthWords: { draft: 400 } },
    { id: 'c2', ts: '2026-07-05', type: 'cover', state: 'shipped', shown: 'A',
      survival: { A: 0.3 }, styleSurvival: { A: 0.4 }, lengthWords: { draft: 320 } },
    { id: 'd1', ts: '2026-07-30', type: 'cover', state: 'drafted',
      survival: {}, styleSurvival: {}, lengthWords: { draft: 100 } },
  ];
  const series = buildSeries(recs);
  eq('series split by type', [...series.keys()].sort(), ['cover', 'cv']);
  eq('series sorted by date', series.get('cover').map((p) => p.id), ['c2', 'c1']);
  eq('drafted records excluded', series.get('cover').length, 2);
  eq('series carries style survival', series.get('cover')[1].styleSurvival, 0.6);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node data/learn.mjs --self-test`
Expected: FAIL — `ReferenceError: buildSeries is not defined`

- [ ] **Step 3: Write minimal implementation**

Add to `data/learn.mjs` above `main()`:

```js
export function buildSeries(records) {
  const out = new Map();
  for (const r of latestById(records)) {
    if (r.state !== 'shipped') continue;
    const cid = r.shown || 'A';
    if (typeof r.survival?.[cid] !== 'number') continue;
    if (!out.has(r.type)) out.set(r.type, []);
    out.get(r.type).push({
      id: r.id,
      ts: r.ts,
      survival: r.survival[cid],
      styleSurvival: r.styleSurvival?.[cid] ?? r.survival[cid],
      draftLen: r.lengthWords?.draft ?? 0,
    });
  }
  for (const arr of out.values()) arr.sort((a, b) => a.ts.localeCompare(b.ts));
  return out;
}

function bar(v) {
  const filled = Math.round(Math.max(0, Math.min(1, v)) * 10);
  return '#'.repeat(filled) + '.'.repeat(10 - filled);
}

function cmdStats(argv) {
  const series = buildSeries(readCorpus());
  if (argv.includes('--json')) {
    const obj = {};
    for (const [type, arr] of series) {
      obj[type] = { points: arr, trend: describeTrend(arr.map(
        (p) => ({ survival: p.styleSurvival, draftLen: p.draftLen }))) };
    }
    console.log(JSON.stringify(obj, null, 2));
    return;
  }
  if (series.size === 0) {
    console.log('No shipped records yet. Log one with: node data/learn.mjs draft --file rec.json');
    return;
  }
  for (const [type, arr] of series) {
    const trend = describeTrend(arr.map((p) => ({ survival: p.styleSurvival, draftLen: p.draftLen })));
    console.log(`\n${type}  (n=${trend.n})`);
    for (const p of arr) {
      console.log(`  ${p.ts}  ${bar(p.styleSurvival)}  style ${p.styleSurvival.toFixed(2)}  ` +
        `raw ${p.survival.toFixed(2)}  ${p.draftLen}w  ${p.id}`);
    }
    console.log(`  trend: ${trend.direction} — ${trend.note}`);
    if (trend.goodhart) {
      console.log('  WARNING: survival is rising while drafts shorten. Treat as a regression,');
      console.log('           not progress. Shorter drafts are edited less by construction.');
    }
  }
}
```

Add `case 'stats': return cmdStats(process.argv);` to the `main()` switch and `  stats [--json]            survival curve per artifact type` to the usage text.

- [ ] **Step 4: Run test to verify it passes**

Run: `node data/learn.mjs --self-test`
Expected: PASS, `24 passed, 0 failed`

Run: `node data/learn.mjs stats`
Expected: `No shipped records yet. ...` on an empty corpus.

- [ ] **Step 5: Commit**

```bash
git add data/learn.mjs
```

```bash
git commit -m "feat: survival stats readout with n-gating and brevity warning"
```

---

### Task 6: Seed the corpus and wire in the house rule

**Files:**
- Create: `data/seed/haize-cover.json`, `data/seed/haize-cover-final.json`
- Modify: `modes/_custom.md`

**Interfaces:**
- Consumes: the `draft` and `final` CLI from Tasks 3-4
- Produces: at least one real shipped record in `data/corpus.jsonl`, plus the standing rule that makes logging non-optional

- [ ] **Step 1: Write the seed draft file**

Create `data/seed/haize-cover.json`. `text` is the cover letter **as originally drafted** on 2026-07-30, before Shayan rewrote it. This is the pre-rewrite version, verbatim — using the shipped text here would score a perfect 1.0 and poison the baseline:

```json
{
  "id": "2026-07-30-haize-cover",
  "type": "cover",
  "context": {
    "company": "Haize Labs",
    "role": "Applied Researcher",
    "archetype": "Alignment / Evals Research Engineer",
    "report": "022"
  },
  "text": "I work on evals for LLM agents: finding where deployed systems fail, then building the harness that makes the failure reproducible.\n\nAt BMO's AI Centre of Excellence I found a GenAI tool serving over $200B in AUM was systematically downplaying investment risk. I built a deterministic eval pipeline over a few hundred synthesized inputs to catch that at scale instead of anecdotally, and I'm now designing evals for agents that retrieve and reason over commercial banking and insurance policy.\n\nThe reward-function half of your posting is what I do at Merlyn Labs, the 3-person research collective I co-founded. We build VLM judges that turn rollouts into dense, context-dependent RL rewards, and most of the effort goes into making them hard to game rather than accurate. A judge you can satisfy without doing the task is worse than no judge. I also open-sourced a flow-matching VLA integration for RLinf so the BEHAVIOR-1K suite can be used for RL training in OmniGibson. Same category as Prime-RL or Verl, different repo, and I'd ramp fast on whichever you're using.\n\nOn the side I've been toying with agent evals in negotiation games, using Settlers of Catan and Twilight Imperium as test beds. The variable I care about is what happens to honesty and performance as the action space grows.\n\nI'm a Canadian citizen and TN-eligible, so I don't need sponsorship. Ready to be in NYC or SF.\n\nShayan"
}
```

- [ ] **Step 2: Run draft to create the record**

Run: `node data/learn.mjs draft --file data/seed/haize-cover.json`
Expected: JSON with `ok: true` and a `lint` block. If `lint.score` is below 1, note which violations my own draft contained — that number is the baseline.

- [ ] **Step 3: Write the final file with tagged spans**

Create `data/seed/haize-cover-final.json`. `final` is Shayan's shipped text. Each span is one changed passage tagged `style`, `content`, or `factual`:

```json
{
  "final": "I am an engineer. Most recently I've been working on evals for LLM agents; finding how (and why) deployed systems fail.\n\nAt BMO's AI Centre of Excellence I built evaluation harnesses and test setups that caught an agentic tool (serving over $200B in AUM) subtly downplaying investment risk. Behaviour that was invisible until I scaled up to hundreds of test cases to identify systematic misalignment. Now I'm designing evals for agents that retrieve and reason over commercial banking and insurance policy, and developing RL environments to train specialized agents for our wealth management division.\n\nOn the side I do research at Merlyn Labs, the 3-person research collective I co-founded. We built VLM judges that turn rollouts into dense, hard-to-game reward metrics, and placed 8th in the Stanford BEHAVIOR-1K challenge fine-tuning VLAs to accomplish household tasks in sim. I also worked on a flow-matching VLA integration for the RLinf framework so the BEHAVIOR-1K suite can be used for RL training in OmniGibson. Same category as Prime-RL or Verl.\n\nI'm also training agents to play Settlers of Catan and Twilight Imperium. The interesting bit is taking a large action space and introducing multi-agent negotiation. Then seeing whether an agent can hold a long-term strategy across a whole game, and when it reaches for deception, blackmail, or betrayal to get there.\n\nI'm a Canadian citizen and TN-eligible. Can relocate to NYC or SF within 4 weeks of an offer.\n\nShayan",
  "spans": [
    { "was": "I work on evals for LLM agents: finding where deployed systems fail, then building the harness that makes the failure reproducible.",
      "now": "I am an engineer. Most recently I've been working on evals for LLM agents; finding how (and why) deployed systems fail.",
      "kind": "style", "deltaId": "D008" },
    { "was": "I found a GenAI tool serving over $200B in AUM was systematically downplaying investment risk. I built a deterministic eval pipeline over a few hundred synthesized inputs to catch that at scale instead of anecdotally",
      "now": "I built evaluation harnesses and test setups that caught an agentic tool (serving over $200B in AUM) subtly downplaying investment risk. Behaviour that was invisible until I scaled up to hundreds of test cases to identify systematic misalignment",
      "kind": "style", "deltaId": "D011" },
    { "was": "The reward-function half of your posting is what I do at Merlyn Labs, the 3-person research collective I co-founded.",
      "now": "On the side I do research at Merlyn Labs, the 3-person research collective I co-founded.",
      "kind": "style", "deltaId": "D012" },
    { "was": "and most of the effort goes into making them hard to game rather than accurate. A judge you can satisfy without doing the task is worse than no judge.",
      "now": "and placed 8th in the Stanford BEHAVIOR-1K challenge fine-tuning VLAs to accomplish household tasks in sim.",
      "kind": "style", "deltaId": "D009" },
    { "was": "I also open-sourced a flow-matching VLA integration for RLinf",
      "now": "I also worked on a flow-matching VLA integration for the RLinf framework",
      "kind": "style", "deltaId": "D006" },
    { "was": "On the side I've been toying with agent evals in negotiation games, using Settlers of Catan and Twilight Imperium as test beds. The variable I care about is what happens to honesty and performance as the action space grows.",
      "now": "I'm also training agents to play Settlers of Catan and Twilight Imperium. The interesting bit is taking a large action space and introducing multi-agent negotiation. Then seeing whether an agent can hold a long-term strategy across a whole game, and when it reaches for deception, blackmail, or betrayal to get there.",
      "kind": "style", "deltaId": "D010" },
    { "was": "I'm a Canadian citizen and TN-eligible, so I don't need sponsorship. Ready to be in NYC or SF.",
      "now": "I'm a Canadian citizen and TN-eligible. Can relocate to NYC or SF within 4 weeks of an offer.",
      "kind": "style", "deltaId": "D005" },
    { "was": "",
      "now": "and developing RL environments to train specialized agents for our wealth management division",
      "kind": "content" }
  ]
}
```

The last span is deliberately tagged `content`: the RL-environments line is work only Shayan knew about, and no amount of learning would have produced it. Charging the system for missing it would teach it to hedge. Every other span is `style` and every one maps to a delta already in the ledger — which is the point. If `styleSurvival` on this record does not come out noticeably below 1.0, the span tagging is wrong, because this letter was heavily rewritten.

- [ ] **Step 4: Finalize and read the first real number**

Run: `node data/learn.mjs final --id 2026-07-30-haize-cover --file data/seed/haize-cover-final.json`
Expected: JSON with `survival.A` and `styleSurvival.A`. `styleSurvival` should exceed `survival`, since the content span is excluded.

Run: `node data/learn.mjs audit; echo "exit=$?"`
Expected: `corpus audit: clean`, `exit=0`.

Run: `node data/learn.mjs stats`
Expected: one `cover` row, and `trend: insufficient-data — n=1, need 10`.

- [ ] **Step 5: Add the house rule**

In `modes/_custom.md`, directly after the Edit-delta loop bullet, add:

```markdown
- **Corpus logging is not optional (added 2026-07-30).** Every user-facing artifact
  (cover letter, CV, form free-text, outreach, application email) gets a corpus record
  at draft time and a finalized record with tagged spans once Shayan ships or rewrites
  it. `node data/learn.mjs draft --file <rec.json>` then
  `node data/learn.mjs final --id <id> --file <final.json>`. Span `kind` is `style`
  (I phrased it wrong), `content` (he added information I could not have known), or
  `factual` (I got a fact wrong). Only `style` counts against the system.
  **Run `node data/learn.mjs audit` at session end, alongside the git ritual — it exits
  non-zero if an artifact went unlogged.** This exists because on 2026-07-30 two of
  seven corrections went unlogged and were caught only because Shayan asked.
  Documented rules decay; exit codes do not.
```

- [ ] **Step 6: Commit**

```bash
git add data/seed data/corpus.jsonl modes/_custom.md
```

```bash
git commit -m "feat: seed corpus with Haize letter and make logging enforceable"
```

---

## Verification

After all six tasks:

```bash
node data/lint.mjs --self-test
```
```bash
node data/survival.mjs --self-test
```
```bash
node data/learn.mjs --self-test
```
```bash
node data/learn.mjs audit; echo "exit=$?"
```

All three self-tests report `0 failed`; audit prints `clean` and exits 0.

Do **not** add these to `test-all.mjs` — it is system layer and `update-system.mjs` would revert the registration. Add them to `modes/_custom.md` next to the existing `delta.mjs --self-test` note instead.

## Out of scope for Phase 1

N-candidate generation, the model critic, selector rank correlation, playbook curation, and the replay harness. Phase 2 is deliberately gated on Phase 1's result: if style survival climbs from retrieval alone, the candidate loop is 5x tokens for nothing.
