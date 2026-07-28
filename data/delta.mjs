#!/usr/bin/env node

/**
 * delta.mjs — edit-delta ledger for career-ops.
 *
 * Sole writer of data/deltas.md and data/deltas-archive.md. Logs corrections
 * the user makes to generated artifacts, with an automatically computed error
 * metric, so improvement over time is measurable rather than felt.
 *
 * Never hand-edit the ledger files. Wholesale LLM rewrites of an accumulated
 * context are the documented "context collapse" failure mode (ACE, arXiv
 * 2510.04618): 18,282 tokens collapsed to 122, accuracy dropped below the
 * no-memory baseline. Merges here are deterministic and additive.
 *
 * Usage:
 *   node data/delta.mjs add --file payload.json
 *   node data/delta.mjs stats
 *   node data/delta.mjs prune
 *   node data/delta.mjs promote D014
 *   node data/delta.mjs --self-test
 */

let passed = 0;
let failed = 0;

function eq(label, actual, expected) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    passed++;
  } else {
    failed++;
    console.log(`  FAIL: ${label}`);
    console.log(`    expected: ${e}`);
    console.log(`    actual:   ${a}`);
  }
}

/** Split text into lowercase word tokens for edit-distance comparison. */
export function tokenize(s) {
  return String(s).trim().toLowerCase().match(/[\p{L}\p{N}']+/gu) || [];
}

/** Classic two-row Levenshtein over token arrays. O(n*m) time, O(m) space. */
export function levenshtein(a, b) {
  const n = a.length;
  const m = b.length;
  if (n === 0) return m;
  if (m === 0) return n;
  let prev = Array.from({ length: m + 1 }, (_, j) => j);
  for (let i = 1; i <= n; i++) {
    const cur = new Array(m + 1);
    cur[0] = i;
    for (let j = 1; j <= m; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    prev = cur;
  }
  return prev[m];
}

/**
 * Normalized word-level edit distance in [0,1].
 * 0 = the user shipped the draft untouched. 1 = total rewrite.
 * This is the metric CIPHER (arXiv 2404.15269) evaluates on.
 */
export function editCost(was, now) {
  const a = tokenize(was);
  const b = tokenize(now);
  const denom = Math.max(a.length, b.length);
  if (denom === 0) return 0;
  return levenshtein(a, b) / denom;
}

/** Character trigram set, used to detect a rule we have already logged. */
export function trigrams(s) {
  const t = String(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const set = new Set();
  if (t.length < 3) {
    if (t) set.add(t);
    return set;
  }
  for (let i = 0; i <= t.length - 3; i++) set.add(t.slice(i, i + 3));
  return set;
}

/** Jaccard similarity of two sets. Both empty counts as identical. */
export function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 1;
  let inter = 0;
  for (const g of a) if (b.has(g)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

function runSelfTest() {
  eq('tokenize splits on non-word chars', tokenize("I'm excited, truly!"), ["i'm", 'excited', 'truly']);
  eq('tokenize empty string', tokenize(''), []);

  eq('levenshtein identical', levenshtein(['a', 'b'], ['a', 'b']), 0);
  eq('levenshtein one substitution', levenshtein(['a', 'b'], ['a', 'c']), 1);
  eq('levenshtein one insertion', levenshtein(['a'], ['a', 'b']), 1);
  eq('levenshtein empty vs three', levenshtein([], ['a', 'b', 'c']), 3);

  // 4 tokens vs 4 tokens, 1 substitution -> 1/4
  eq('editCost single word change', editCost('the cat sat down', 'the dog sat down'), 0.25);
  eq('editCost untouched is zero', editCost('same text here', 'same text here'), 0);
  eq('editCost case-insensitive', editCost('Same Text', 'same text'), 0);
  eq('editCost both empty', editCost('', ''), 0);
  eq('editCost total rewrite', editCost('alpha beta', 'gamma delta'), 1);

  eq('trigrams short string', [...trigrams('ab')], ['ab']);
  eq('trigrams basic', [...trigrams('abcd')], ['abc', 'bcd']);
  eq('jaccard identical', jaccard(trigrams('lead with their problem'), trigrams('lead with their problem')), 1);
  eq('jaccard disjoint', jaccard(new Set(['abc']), new Set(['xyz'])), 0);

  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

if (process.argv.includes('--self-test')) runSelfTest();
