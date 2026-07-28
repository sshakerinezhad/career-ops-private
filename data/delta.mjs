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

/**
 * Character-trigram Jaccard above this counts as "the same rule again".
 * Deliberately conservative: a false merge silently loses a distinct lesson,
 * while a missed merge only costs one extra row that `prune` will handle.
 * The caller can always pass an explicit `merge` id, which wins outright.
 */
export const MERGE_THRESHOLD = 0.6;

export function findMergeTarget(entries, type, rule, explicitId) {
  if (explicitId) {
    return entries.find((e) => e.id === explicitId) || null;
  }
  const g = trigrams(rule);
  let best = null;
  let bestScore = 0;
  for (const e of entries) {
    if (e.type !== type) continue;
    const score = jaccard(g, trigrams(e.rule));
    if (score > bestScore) {
      bestScore = score;
      best = e;
    }
  }
  return bestScore >= MERGE_THRESHOLD ? best : null;
}

/**
 * Fold one correction into the ledger. Pure: returns a new array, writes nothing.
 *
 * Text types score normalized word-level edit distance (0 = shipped untouched).
 * `score` scores signed error (now - was), so systematic over-scoring shows as
 * a persistent negative mean.
 */
export function applyDelta(entries, payload) {
  const { type, rule, was, now, merge } = payload;
  const isText = TEXT_TYPES.includes(type);
  const isNumeric = NUMERIC_TYPES.includes(type);
  if (!isText && !isNumeric) {
    throw new Error(
      `Unknown type "${type}". Text: ${TEXT_TYPES.join('|')}. Numeric: ${NUMERIC_TYPES.join('|')}. ` +
        'Process/workflow corrections have no automatic error signal — put those in modes/_custom.md.',
    );
  }
  if (!rule || !String(rule).trim()) throw new Error('rule is required');

  const value = isText ? editCost(was, now) : Number(now) - Number(was);
  if (Number.isNaN(value)) throw new Error(`type "${type}" needs numeric was/now`);

  const target = findMergeTarget(entries, type, rule, merge);
  const out = entries.map((e) => ({ ...e }));

  if (target) {
    const t = out.find((e) => e.id === target.id);
    t.value = (t.value * t.recur + value) / (t.recur + 1);
    t.recur += 1;
    return { entries: out, entry: t, merged: true };
  }

  const entry = {
    id: nextId(out),
    type,
    date: today(),
    metric: isText ? 'cost' : 'err',
    value,
    recur: 1,
    rule: String(rule),
    was: String(was),
    now: String(now),
  };
  out.push(entry);
  return { entries: out, entry, merged: false };
}

function readLedger() {
  if (!existsSync(LEDGER)) return [];
  return parseLedger(readFileSync(LEDGER, 'utf-8'));
}

function writeLedger(entries) {
  writeFileSync(LEDGER, serializeLedger(entries, LEDGER_HEADER), 'utf-8');
}

/** Read the JSON payload from --file <path>, --json <string>, or stdin. */
function readPayload(argv) {
  const fileIdx = argv.indexOf('--file');
  if (fileIdx !== -1 && argv[fileIdx + 1]) {
    return JSON.parse(readFileSync(argv[fileIdx + 1], 'utf-8'));
  }
  const jsonIdx = argv.indexOf('--json');
  if (jsonIdx !== -1 && argv[jsonIdx + 1]) {
    return JSON.parse(argv[jsonIdx + 1]);
  }
  return JSON.parse(readFileSync(0, 'utf-8'));
}

export function cmdAdd(argv) {
  const payload = readPayload(argv);
  const { entries, entry, merged } = applyDelta(readLedger(), payload);
  writeLedger(entries);
  const label = entry.metric === 'cost' ? 'cost' : 'err';
  console.log(
    `${merged ? 'merged' : 'logged'} ${entry.id} ${entry.type} ${label} ${entry.value.toFixed(2)} recur ${entry.recur}`,
  );
}

/** Live-entry count above which `prune` should be run. */
export const PRUNE_THRESHOLD = 40;
/** recur count at which an entry has earned promotion to a hard rule. */
export const PROMOTE_AT = 3;

function mean(nums) {
  return nums.length === 0 ? 0 : nums.reduce((a, b) => a + b, 0) / nums.length;
}

export function computeStats(entries) {
  const types = [...new Set(entries.map((e) => e.type))].sort();
  const byType = types.map((type) => {
    const rows = entries
      .filter((e) => e.type === type)
      .sort((a, b) => a.id.localeCompare(b.id));
    // Absolute value for signed metrics so over- and under-shoot don't cancel.
    const vals = rows.map((e) => (e.metric === 'err' ? Math.abs(e.value) : e.value));
    const w = Math.max(1, Math.min(3, Math.floor(vals.length / 2)));
    const firstMean = mean(vals.slice(0, w));
    const lastMean = mean(vals.slice(-w));
    return { type, n: rows.length, firstMean, lastMean, trend: lastMean - firstMean };
  });
  return {
    byType,
    promote: entries.filter((e) => e.recur >= PROMOTE_AT),
    pruneDue: entries.length > PRUNE_THRESHOLD,
    total: entries.length,
  };
}

export function cmdStats() {
  const entries = readLedger();
  const s = computeStats(entries);
  if (s.total === 0) {
    console.log('Ledger empty. Nothing learned yet.');
    return;
  }
  console.log(`${s.total} live entries\n`);
  console.log('type      n   first   last   trend');
  for (const t of s.byType) {
    console.log(
      `${t.type.padEnd(9)} ${String(t.n).padStart(2)}   ` +
        `${t.firstMean.toFixed(2)}    ${t.lastMean.toFixed(2)}   ` +
        `${t.trend >= 0 ? '+' : ''}${t.trend.toFixed(2)}`,
    );
  }
  if (s.promote.length) {
    console.log(`\nPROMOTE (recur >= ${PROMOTE_AT}) — graduate to voice-dna.md, then \`promote <id>\`:`);
    for (const e of s.promote) console.log(`  ${e.id} (recur ${e.recur}) ${e.rule}`);
  }
  if (s.pruneDue) console.log(`\nPRUNE DUE — ${s.total} live entries. Run \`node data/delta.mjs prune\`.`);
}

/** A recur-1 entry older than this never recurred; it was noise, not a rule. */
export const STALE_DAYS = 30;
/** Hard bound on live entries per type, so context cost cannot grow forever. */
export const TYPE_CAP = 12;

export function daysBetween(a, b) {
  return Math.round((Date.parse(b) - Date.parse(a)) / 86400000);
}

/**
 * Split entries into what stays live and what gets archived.
 * Pure and deterministic — no model call, no embedding, no rewrite.
 */
export function partitionPrune(entries, todayStr) {
  const keep = [];
  const archive = [];

  for (const e of entries) {
    const stale = e.recur === 1 && daysBetween(e.date, todayStr) > STALE_DAYS;
    if (stale) archive.push(e);
    else keep.push(e);
  }

  const byType = new Map();
  for (const e of keep) {
    if (!byType.has(e.type)) byType.set(e.type, []);
    byType.get(e.type).push(e);
  }

  const survivors = [];
  for (const rows of byType.values()) {
    if (rows.length <= TYPE_CAP) {
      survivors.push(...rows);
      continue;
    }
    // Rank by recur desc, then by id asc (older first) as a stable tiebreak.
    const ranked = [...rows].sort(
      (a, b) => b.recur - a.recur || a.id.localeCompare(b.id),
    );
    survivors.push(...ranked.slice(0, TYPE_CAP));
    archive.push(...ranked.slice(TYPE_CAP));
  }

  survivors.sort((a, b) => a.id.localeCompare(b.id));
  archive.sort((a, b) => a.id.localeCompare(b.id));
  return { keep: survivors, archive };
}

function appendArchive(entries, reason) {
  if (entries.length === 0) return;
  const header = existsSync(ARCHIVE)
    ? readFileSync(ARCHIVE, 'utf-8')
    : '# Edit Deltas — Archive\n\nPruned and promoted entries, retained verbatim. Never deleted.\n';
  const block = `\n<!-- ${today()} · ${reason} -->\n\n${entries.map(formatEntry).join('\n')}`;
  writeFileSync(ARCHIVE, `${header.replace(/\s+$/, '')}\n${block}`, 'utf-8');
}

export function cmdPrune() {
  const entries = readLedger();
  const { keep, archive } = partitionPrune(entries, today());
  if (archive.length === 0) {
    console.log(`Nothing to prune. ${entries.length} live entries.`);
  } else {
    appendArchive(archive, 'pruned');
    writeLedger(keep);
    console.log(`Archived ${archive.length}: ${archive.map((e) => e.id).join(', ')}`);
    console.log(`${keep.length} live entries remain.`);
  }
  const promote = keep.filter((e) => e.recur >= PROMOTE_AT);
  if (promote.length) {
    console.log(`\nPROMOTE these to hard rules in voice-dna.md, then run \`promote <id>\`:`);
    for (const e of promote) console.log(`  ${e.id} (recur ${e.recur}) ${e.rule}`);
  }
}

export function cmdPromote(id) {
  if (!id) {
    console.error('Usage: node data/delta.mjs promote D014');
    process.exit(1);
  }
  const entries = readLedger();
  const target = entries.find((e) => e.id === id);
  if (!target) {
    console.error(`No live entry ${id}.`);
    process.exit(1);
  }
  appendArchive([target], 'promoted to voice-dna.md');
  writeLedger(entries.filter((e) => e.id !== id));
  console.log(`Promoted ${id}. Confirm it now reads as a hard rule in voice-dna.md.`);
}

function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  switch (cmd) {
    case 'add': return cmdAdd(process.argv);
    case 'stats': return cmdStats();
    case 'prune': return cmdPrune();
    case 'promote': return cmdPromote(rest[0]);
    default:
      console.error('Usage: node data/delta.mjs <add|stats|prune|promote> [args]');
      console.error('  add --file p.json | --json \'{...}\'   {type,rule,was,now,merge?}');
      console.error('  stats                                  per-type trend + flags');
      console.error('  prune                                  archive stale/overflow entries');
      console.error('  promote D014                           archive after graduating to voice-dna.md');
      process.exit(1);
  }
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

  // A fresh delta appends.
  const r1 = applyDelta([], {
    type: 'cover',
    rule: 'Lead with their problem, not my enthusiasm.',
    was: 'the cat sat down',
    now: 'the dog sat down',
  });
  eq('applyDelta appends first entry', r1.entries.length, 1);
  eq('applyDelta not a merge', r1.merged, false);
  eq('applyDelta assigns first id', r1.entries[0].id, 'D001');
  eq('applyDelta computes cost', r1.entries[0].value, 0.25);
  eq('applyDelta recur starts at 1', r1.entries[0].recur, 1);
  eq('applyDelta picks cost metric for text', r1.entries[0].metric, 'cost');

  // Same rule again merges instead of appending, and averages the metric.
  const r2 = applyDelta(r1.entries, {
    type: 'cover',
    rule: 'Lead with their problem, not my enthusiasm.',
    was: 'alpha beta gamma delta',
    now: 'one two three four',
  });
  eq('applyDelta merges duplicate rule', r2.entries.length, 1);
  eq('applyDelta flags merge', r2.merged, true);
  eq('applyDelta increments recur', r2.entries[0].recur, 2);
  eq('applyDelta averages metric', Number(r2.entries[0].value.toFixed(3)), 0.625);

  // A different rule in the same type appends.
  const r3 = applyDelta(r2.entries, {
    type: 'cover',
    rule: 'Never mention salary in the opening paragraph.',
    was: 'x y', now: 'x z',
  });
  eq('applyDelta appends distinct rule', r3.entries.length, 2);
  eq('applyDelta assigns next id', r3.entries[1].id, 'D002');

  // Same rule text under a different type must NOT merge.
  const r4 = applyDelta(r3.entries, {
    type: 'email',
    rule: 'Lead with their problem, not my enthusiasm.',
    was: 'x y', now: 'x z',
  });
  eq('applyDelta does not merge across types', r4.entries.length, 3);

  // Explicit merge target wins over similarity.
  const r5 = applyDelta(r4.entries, {
    type: 'cover',
    rule: 'A totally unrelated sentence about pineapples.',
    was: 'x y', now: 'x z',
    merge: 'D002',
  });
  eq('explicit merge respects id', r5.entries.length, 3);
  eq('explicit merge increments target', r5.entries[1].recur, 2);

  // Numeric type uses signed error, not edit distance.
  const r6 = applyDelta([], {
    type: 'score', rule: 'Cap fintech infra at 3.5.', was: '4.2', now: '3.1',
  });
  eq('score uses err metric', r6.entries[0].metric, 'err');
  eq('score computes signed error', Number(r6.entries[0].value.toFixed(2)), -1.1);

  // Unknown type is rejected.
  let threw = false;
  try {
    applyDelta([], { type: 'process', rule: 'r', was: 'a', now: 'b' });
  } catch { threw = true; }
  eq('unknown type rejected', threw, true);

  const statEntries = [
    { id: 'D001', type: 'cover', date: '2026-01-01', metric: 'cost', value: 0.8, recur: 1, rule: 'a', was: '', now: '' },
    { id: 'D002', type: 'cover', date: '2026-01-02', metric: 'cost', value: 0.6, recur: 4, rule: 'b', was: '', now: '' },
    { id: 'D003', type: 'cover', date: '2026-01-03', metric: 'cost', value: 0.2, recur: 1, rule: 'c', was: '', now: '' },
    { id: 'D004', type: 'cover', date: '2026-01-04', metric: 'cost', value: 0.2, recur: 1, rule: 'd', was: '', now: '' },
    { id: 'D005', type: 'score', date: '2026-01-05', metric: 'err', value: -1.1, recur: 1, rule: 'e', was: '', now: '' },
  ];
  const st = computeStats(statEntries);
  eq('stats total', st.total, 5);
  eq('stats groups by type', st.byType.length, 2);
  const cover = st.byType.find((t) => t.type === 'cover');
  eq('stats counts per type', cover.n, 4);
  // Window is min(3, floor(n/2)) = 2 for n=4: first two vs last two.
  eq('stats first-window mean', Number(cover.firstMean.toFixed(2)), 0.7);
  eq('stats last-window mean', Number(cover.lastMean.toFixed(2)), 0.2);
  eq('stats trend is last minus first', Number(cover.trend.toFixed(2)), -0.5);
  const score = st.byType.find((t) => t.type === 'score');
  eq('score stats use absolute error', Number(score.lastMean.toFixed(2)), 1.1);
  eq('stats promote list flags recur>=3', st.promote.map((e) => e.id), ['D002']);
  eq('stats prune not due below threshold', st.pruneDue, false);

  const many = Array.from({ length: 41 }, (_, i) => ({
    id: `D${String(i + 1).padStart(3, '0')}`, type: 'chat', date: '2026-01-01',
    metric: 'cost', value: 0.1, recur: 1, rule: `r${i}`, was: '', now: '',
  }));
  eq('stats prune due above threshold', computeStats(many).pruneDue, true);

  const mk = (id, type, date, recur) => ({
    id, type, date, metric: 'cost', value: 0.3, recur, rule: `rule ${id}`, was: 'a', now: 'b',
  });

  eq('daysBetween counts days', daysBetween('2026-01-01', '2026-01-31'), 30);

  const p1 = partitionPrune(
    [
      mk('D001', 'cover', '2026-01-01', 1), // stale, recur 1 -> archive
      mk('D002', 'cover', '2026-01-01', 3), // stale but recur 3 -> keep
      mk('D003', 'cover', '2026-07-20', 1), // recent -> keep
    ],
    '2026-07-27',
  );
  eq('prune archives stale singletons', p1.archive.map((e) => e.id), ['D001']);
  eq('prune keeps high-recur entries', p1.keep.map((e) => e.id), ['D002', 'D003']);

  // Overflow: 14 recent entries in one type, cap is 12 -> 2 lowest-recur archived.
  const overflow = Array.from({ length: 14 }, (_, i) =>
    mk(`D${String(i + 1).padStart(3, '0')}`, 'chat', '2026-07-26', i < 2 ? 1 : 5));
  const p2 = partitionPrune(overflow, '2026-07-27');
  eq('prune enforces per-type cap', p2.keep.length, 12);
  eq('prune archives lowest recur first', p2.archive.map((e) => e.id), ['D001', 'D002']);

  // Below cap and all recent: nothing moves.
  const p3 = partitionPrune([mk('D001', 'cv', '2026-07-26', 1)], '2026-07-27');
  eq('prune is a no-op when healthy', p3.archive.length, 0);

  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

if (process.argv.includes('--self-test')) runSelfTest();
else main();
