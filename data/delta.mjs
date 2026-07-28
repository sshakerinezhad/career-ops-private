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

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
export const LEDGER = join(HERE, 'deltas.md');
export const ARCHIVE = join(HERE, 'deltas-archive.md');

export const TEXT_TYPES = ['cv', 'cover', 'email', 'form', 'report', 'chat'];
export const NUMERIC_TYPES = ['score'];

export const LEDGER_HEADER = [
  '# Edit Deltas',
  '',
  'Append-only ledger of corrections. Written ONLY by `node data/delta.mjs`.',
  'Never hand-edit. `voice-dna.md` is the statute; this file is the case law.',
  '',
].join('\n');

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

const HEADER_RE =
  /^(D\d{3}) · (\S+) · (\d{4}-\d{2}-\d{2}) · (cost|err) (-?[\d.]+) · recur (\d+)$/;

/** Read one `- **field:** value` line out of an entry body. */
function field(body, name) {
  const re = new RegExp(`^- \\*\\*${name}:\\*\\* ?(.*)$`, 'm');
  const m = body.match(re);
  return m ? m[1].trim() : '';
}

/** Parse a ledger file into entries. Blocks that do not match are skipped. */
export function parseLedger(raw) {
  const blocks = String(raw).split(/^### /m).slice(1);
  const entries = [];
  for (const block of blocks) {
    const nl = block.indexOf('\n');
    const headerLine = (nl === -1 ? block : block.slice(0, nl)).trim();
    const m = headerLine.match(HEADER_RE);
    if (!m) continue;
    const body = nl === -1 ? '' : block.slice(nl + 1);
    entries.push({
      id: m[1],
      type: m[2],
      date: m[3],
      metric: m[4],
      value: Number(m[5]),
      recur: Number(m[6]),
      rule: field(body, 'rule'),
      was: field(body, 'was'),
      now: field(body, 'now'),
    });
  }
  return entries;
}

/** Collapse to a single line so the header/field grammar stays regex-parseable. */
function oneLine(s) {
  return String(s).replace(/\s+/g, ' ').trim();
}

export function formatEntry(e) {
  return [
    `### ${e.id} · ${e.type} · ${e.date} · ${e.metric} ${e.value.toFixed(2)} · recur ${e.recur}`,
    `- **rule:** ${oneLine(e.rule)}`,
    `- **was:** ${oneLine(e.was)}`,
    `- **now:** ${oneLine(e.now)}`,
    '',
  ].join('\n');
}

export function serializeLedger(entries, header) {
  return `${header}\n${entries.map(formatEntry).join('\n')}`;
}

export function nextId(entries) {
  const max = entries.reduce((acc, e) => Math.max(acc, Number(e.id.slice(1))), 0);
  return `D${String(max + 1).padStart(3, '0')}`;
}

export function today() {
  return new Date().toISOString().slice(0, 10);
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

  const sample = [
    '# Edit Deltas',
    '',
    '### D001 · cover · 2026-07-27 · cost 0.31 · recur 1',
    '- **rule:** Lead with their problem.',
    '- **was:** I am excited to apply.',
    '- **now:** Your evals team ships fast.',
    '',
    '### D002 · score · 2026-07-28 · err 1.10 · recur 2',
    '- **rule:** Cap fintech infra at 3.5.',
    '- **was:** 4.2',
    '- **now:** 3.1',
    '',
  ].join('\n');

  const parsed = parseLedger(sample);
  eq('parseLedger finds both entries', parsed.length, 2);
  eq('parseLedger id', parsed[0].id, 'D001');
  eq('parseLedger type', parsed[0].type, 'cover');
  eq('parseLedger metric name', parsed[0].metric, 'cost');
  eq('parseLedger value', parsed[0].value, 0.31);
  eq('parseLedger recur', parsed[1].recur, 2);
  eq('parseLedger rule text', parsed[0].rule, 'Lead with their problem.');
  eq('parseLedger was text', parsed[1].was, '4.2');
  eq('parseLedger ignores prose header', parseLedger('# Edit Deltas\n\nsome prose\n').length, 0);

  eq('nextId from existing', nextId(parsed), 'D003');
  eq('nextId from empty', nextId([]), 'D001');

  // Round-trip: serialize then reparse must be lossless.
  const round = parseLedger(serializeLedger(parsed, '# Edit Deltas\n'));
  eq('round-trip preserves count', round.length, 2);
  eq('round-trip preserves value', round[0].value, 0.31);
  eq('round-trip preserves rule', round[1].rule, 'Cap fintech infra at 3.5.');

  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

if (process.argv.includes('--self-test')) runSelfTest();
