#!/usr/bin/env node

/**
 * learn.mjs — corpus of (draft -> final) pairs for the edit-learning system.
 *
 * Sole writer of data/corpus.jsonl. Append-only: a record is superseded by
 * appending a newer one with the same id, never edited in place. Same reasoning
 * as the delta ledger -- wholesale rewrites of an accumulated context are the
 * documented "context collapse" failure mode (ACE, arXiv 2510.04618).
 *
 * Survival is the metric CIPHER (arXiv 2404.15269) evaluates on: how much of the
 * draft survived into what the user actually shipped.
 *
 * Usage:
 *   node data/learn.mjs draft --file rec.json      {id,type,context,text}
 *   node data/learn.mjs final --id <id> --file f   {final,spans:[{was,now,kind}]}
 *   node data/learn.mjs audit                      fail if an artifact went unlogged
 *   node data/learn.mjs stats [--json]             survival curve per artifact type
 *   node data/learn.mjs --self-test
 *
 * Deliberately NOT registered in test-all.mjs: system layer, would be reverted.
 */

import { readFileSync, appendFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { lint } from './lint.mjs';
import { survival, styleSurvival, lengthWords, describeTrend } from './survival.mjs';
import { today, daysBetween } from './delta.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));

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

/**
 * Phase 1 records carry exactly one candidate. The array shape is present from
 * day one so Phase 2's N-candidate loop can add entries without a migration.
 */
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

function bar(v) {
  const filled = Math.round(Math.max(0, Math.min(1, v)) * 10);
  return '#'.repeat(filled) + '.'.repeat(10 - filled);
}

function cmdStats(argv) {
  const series = buildSeries(readCorpus());
  if (argv.includes('--json')) {
    const obj = {};
    for (const [type, arr] of series) {
      obj[type] = {
        points: arr,
        trend: describeTrend(arr.map((p) => ({ survival: p.styleSurvival, draftLen: p.draftLen }))),
      };
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
      console.log(`  ${p.ts}  ${bar(p.styleSurvival)}  style ${p.styleSurvival.toFixed(2)}  `
        + `raw ${p.survival.toFixed(2)}  ${p.draftLen}w  ${p.id}`);
    }
    console.log(`  trend: ${trend.direction} — ${trend.note}`);
    if (trend.goodhart) {
      console.log('  WARNING: survival is rising while drafts shorten. Treat as a regression,');
      console.log('           not progress. Shorter drafts are edited less by construction.');
    }
  }
}

function main() {
  const [cmd] = process.argv.slice(2);
  switch (cmd) {
    case 'draft': return cmdDraft(process.argv);
    case 'final': return cmdFinal(process.argv);
    case 'audit': return cmdAudit();
    case 'stats': return cmdStats(process.argv);
    default:
      console.error('Usage: node data/learn.mjs <draft|final|audit|stats> [args]');
      console.error('  draft --file rec.json     {id,type,context,text}');
      console.error('  final --id <id> --file f  {final,spans:[{was,now,kind}]}');
      console.error('  audit                     fail if any artifact went unlogged');
      console.error('  stats [--json]            survival curve per artifact type');
      process.exit(1);
  }
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

  const stale = {
    id: 'old', ts: '2026-07-01', state: 'drafted', final: null,
    candidates: [{ cid: 'A', text: 'x' }], spans: [],
  };
  eq('stale draft is a problem',
    auditCorpus([stale], '2026-07-30').problems.map((p) => p.problem), ['unfinalized-draft']);

  const sameDay = {
    id: 'new', ts: '2026-07-30', state: 'drafted', final: null,
    candidates: [{ cid: 'A', text: 'x' }], spans: [],
  };
  eq('same-day draft is fine', auditCorpus([sameDay], '2026-07-30').problems.length, 0);

  const untagged = {
    id: 'u', ts: '2026-07-30', state: 'shipped', final: 'different text',
    candidates: [{ cid: 'A', text: 'original text' }], spans: [],
  };
  eq('edited but untagged is a problem',
    auditCorpus([untagged], '2026-07-30').problems.map((p) => p.problem), ['untagged-spans']);

  const untouched = {
    id: 'k', ts: '2026-07-30', state: 'shipped', final: 'same text',
    candidates: [{ cid: 'A', text: 'same text' }], spans: [],
  };
  eq('shipped untouched needs no spans', auditCorpus([untouched], '2026-07-30').problems.length, 0);

  const empty = {
    id: 'e', ts: '2026-07-30', state: 'shipped', final: '',
    candidates: [{ cid: 'A', text: 'x' }], spans: [],
  };
  eq('shipped with empty final is a problem',
    auditCorpus([empty], '2026-07-30').problems.map((p) => p.problem), ['missing-final']);

  eq('later record supersedes earlier',
    auditCorpus([stale, { ...stale, state: 'shipped', final: 'x', spans: [] }], '2026-07-30').problems.length, 0);

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

  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

const isEntryPoint = process.argv[1]
  && pathToFileURL(process.argv[1]).href === import.meta.url;

if (isEntryPoint) {
  if (process.argv.includes('--self-test')) runSelfTest();
  else main();
}
