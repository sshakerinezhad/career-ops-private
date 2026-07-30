/**
 * Survival math for the edit-learning corpus.
 *
 * Pure: numbers in, numbers out. No I/O. Reuses editCost from delta.mjs rather
 * than reimplementing edit distance -- that function is the metric CIPHER
 * (arXiv 2404.15269) evaluates on and is already self-tested there.
 *
 *   node data/survival.mjs --self-test
 *
 * Deliberately NOT registered in test-all.mjs: system layer, would be reverted.
 */
import { editCost, tokenize } from './delta.mjs';

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
