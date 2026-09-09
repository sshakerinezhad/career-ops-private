#!/usr/bin/env node
/**
 * scan-x.mjs — zero-key X/Twitter hiring-post scanner for career-ops.
 *
 * User-layer tool (lives in data/ so update-system.mjs never touches it).
 *
 * X's own search is behind a login wall and the generic WebSearch tool has no
 * recency control, so this uses the one route that was verified to work from
 * a headless box on 2026-09-02: DuckDuckGo's HTML endpoint with the past-month
 * filter, read through the r.jina.ai text mirror (returns per-result ISO dates),
 * then the same mirror on each x.com status URL for the full post text and the
 * expanded t.co links. No API key, no cookies, no browser.
 *
 * Known limits (measured, not assumed): it only sees posts DDG has indexed, so
 * coverage is partial and reply-level "join us" chatter is mostly invisible.
 * Evals / post-training / RL-environment teams recruit natively on X and show
 * up well; robot-learning labs mostly do not.
 *
 * Usage:
 *   node data/scan-x.mjs                  # run all queries, append new leads
 *   node data/scan-x.mjs --dry-run        # print leads, write nothing
 *   node data/scan-x.mjs --days 14        # tighten the recency window (default 30)
 *   node data/scan-x.mjs --query '"hiring" evals'   # one ad-hoc query (still site:x.com)
 *   node data/scan-x.mjs --self-test
 *
 * Writes (append-only): data/pipeline.md (Pending section, tagged `x-websearch`)
 * and data/scan-history.tsv (portal = x-websearch). Dedups by status URL and by
 * any ATS/apply URL found in the post. Never touches the tracker.
 */

import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const PIPELINE = join(HERE, 'pipeline.md');
const HISTORY = join(HERE, 'scan-history.tsv');

const MIRROR = 'https://r.jina.ai/';
const TWITTER_EPOCH = 1288834974657n;

/** Queries that produced in-window hits on 2026-09-02. Edit freely. */
export const DEFAULT_QUERIES = [
  'site:x.com "hiring" "post-training"',
  'site:x.com hiring evals engineer',
  'site:x.com "hiring" "research engineer" evals',
  'site:x.com "hiring" "applied researcher"',
  'site:x.com hiring "member of technical staff" AI',
  'site:x.com hiring benchmarks LLM researcher',
  'site:x.com "hiring" "RL environments"',
  'site:x.com "hiring" "reinforcement learning" engineer',
  'site:x.com "we\'re hiring" robotics engineer',
  'site:x.com hiring "robot learning"',
  'site:x.com hiring VLA robotics',
  'site:x.com hiring "red teaming" OR "red-teaming" researcher',
];

/** Title-ish words that mark a post as a hiring post rather than commentary. */
const HIRING_RE = /\b(hiring|we'?re hiring|join (us|our team|the team)|open role|apply here|we are hiring|looking for .{0,40}(engineer|researcher|scientist))\b/i;
const NOISE_RE = /\b(intern(ship)?|director|vp\b|head of|manager|sales|marketing|recruiter|account executive)\b/i;
const EXCLUDE_COMPANY_RE = /\banthropic\b/i;

/** Snowflake id → Date. Works offline, so it dates a URL before any fetch. */
export function dateFromStatusId(id) {
  const ms = (BigInt(id) >> 22n) + TWITTER_EPOCH;
  return new Date(Number(ms));
}

export function statusIdFromUrl(url) {
  const m = String(url).match(/(?:x|twitter)\.com\/[^/]+\/status\/(\d{15,20})/);
  return m ? m[1] : null;
}

/** Canonical x.com status URL, stripping tracking and mobile hosts. */
export function canonicalStatusUrl(url) {
  const m = String(url).match(/(?:x|twitter|mobile\.twitter)\.com\/([^/?#]+)\/status\/(\d{15,20})/);
  return m ? `https://x.com/${m[1]}/status/${m[2]}` : null;
}

/** Pull x.com status URLs out of a DuckDuckGo-HTML-via-mirror page. */
export function extractStatusUrls(text) {
  const out = new Set();
  const re = /https?:\/\/(?:mobile\.)?(?:x|twitter)\.com\/[A-Za-z0-9_]+\/status\/\d{15,20}/g;
  for (const m of String(text).matchAll(re)) {
    const c = canonicalStatusUrl(m[0]);
    if (c) out.add(c);
  }
  // DDG wraps result links as /l/?uddg=<encoded>
  const wrapped = /uddg=([^&"\s)]+)/g;
  for (const m of String(text).matchAll(wrapped)) {
    try {
      const c = canonicalStatusUrl(decodeURIComponent(m[1]));
      if (c) out.add(c);
    } catch { /* ignore bad escapes */ }
  }
  return [...out];
}

/** Extract apply-ish links (ATS boards, careers pages) from post text. */
export function extractApplyLinks(text) {
  const re = /https?:\/\/[^\s)"'<>\]]+/g;
  const hits = [];
  for (const m of String(text).matchAll(re)) {
    const u = m[0].replace(/[.,;:!?]+$/, '');
    if (/x\.com|twitter\.com|t\.co\//.test(u)) continue;
    if (/ashbyhq|greenhouse|lever\.co|workday|myworkdayjobs|jobs\.|careers?|\/apply|\/hiring|join/i.test(u)) hits.push(u);
  }
  return [...new Set(hits)];
}

/** Parse the mirror's rendering of a post into {handle, name, text, date, links}. */
export function parseMirroredPost(markdown, url) {
  const md = String(markdown);
  const handle = (url.match(/x\.com\/([^/]+)\/status/) || [])[1] || null;
  const pub = md.match(/Published Time:\s*(\S+)/);
  const date = pub ? new Date(pub[1]) : (statusIdFromUrl(url) ? dateFromStatusId(statusIdFromUrl(url)) : null);
  // Title line looks like: # Name on X: "post text"
  const title = md.match(/^#\s+(.+?) on X:\s*"([\s\S]*?)"\s*$/m);
  const name = title ? title[1].trim() : handle;
  let text = title ? title[2].trim() : '';
  if (!text) {
    // Fallback: first non-boilerplate paragraph after "## Post"
    const after = md.split(/## Post/).pop() || '';
    text = after.replace(/\[[^\]]*\]\([^)]*\)/g, '').split('\n').map(s => s.trim()).filter(s => s.length > 40)[0] || '';
  }
  return { handle, name, text, date, links: extractApplyLinks(md) };
}

async function fetchText(url, timeoutMs = 25000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const r = await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': 'Mozilla/5.0 career-ops scan-x' } });
    if (!r.ok) return null;
    return await r.text();
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

async function searchDdg(query) {
  const ddg = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}&df=m`;
  const page = await fetchText(MIRROR + ddg);
  return page ? extractStatusUrls(page) : [];
}

function knownUrls() {
  const known = new Set();
  const add = (s) => { for (const m of String(s).matchAll(/https?:\/\/[^\s|)\]>"']+/g)) known.add(m[0].toLowerCase().replace(/\/+$/, '')); };
  if (existsSync(PIPELINE)) add(readFileSync(PIPELINE, 'utf8'));
  if (existsSync(HISTORY)) add(readFileSync(HISTORY, 'utf8'));
  return known;
}

function guessCompany(post) {
  // Prefer an ATS slug from an apply link (ATS links first), else the poster's display name.
  const ordered = [...post.links].sort((a, b) => (/ashbyhq|greenhouse|lever\.co/.test(b) ? 1 : 0) - (/ashbyhq|greenhouse|lever\.co/.test(a) ? 1 : 0));
  for (const l of ordered) {
    const m = l.match(/ashbyhq\.com\/([^/?#]+)|greenhouse\.io\/(?:v1\/boards\/)?([^/?#]+)|lever\.co\/([^/?#]+)|https?:\/\/(?:www\.)?([^/?#.]+)\./);
    const slug = m && (m[1] || m[2] || m[3] || m[4]);
    if (slug && !/^(jobs|job-boards|boards|www)$/i.test(slug)) return slug;
  }
  return post.name || post.handle || '?';
}

function guessRole(text) {
  const m = String(text).match(/\b((?:senior |staff |applied |research |ml |ai |software |founding )?(?:research (?:engineer|scientist)|researcher|engineer|scientist|member of technical staff|mts)(?:[,:]? [A-Za-z&\/\- ]{3,40})?)/i);
  return m ? m[1].replace(/\s+/g, ' ').trim() : 'hiring post (role in text)';
}

function appendLead(lead, dryRun) {
  const loc = lead.location || 'unstated';
  const line = `- [ ] ${lead.url} | ${lead.company} | ${lead.role} | ${loc} (unverified) | x-websearch ${lead.seen} | x-post ${lead.post} (${lead.name}${lead.date ? ', ' + lead.date.toISOString().slice(0, 10) : ''}): ${lead.text.slice(0, 160).replace(/\s+/g, ' ')}`;
  const hist = `${lead.url}\t${lead.seen}\tx-websearch\t${lead.role}\t${lead.company}\tadded\t${loc}\n`;
  if (dryRun) { console.log(line); return; }
  const md = readFileSync(PIPELINE, 'utf8');
  const idx = md.indexOf('\n## Deprioritized');
  const next = idx >= 0 ? md.slice(0, idx).replace(/\n*$/, '\n') + line + '\n' + md.slice(idx) : md.replace(/\n*$/, '\n') + line + '\n';
  writeFileSync(PIPELINE, next);
  appendFileSync(HISTORY, hist);
  console.log('+ ' + line.slice(0, 140));
}

export async function run({ queries = DEFAULT_QUERIES, days = 30, dryRun = false } = {}) {
  const cutoff = Date.now() - days * 86400000;
  const known = knownUrls();
  const seen = new Date().toISOString().slice(0, 10);
  const candidates = new Set();
  for (const q of queries) {
    const urls = await searchDdg(q);
    let fresh = 0;
    for (const u of urls) {
      const id = statusIdFromUrl(u);
      if (id && dateFromStatusId(id).getTime() < cutoff) continue;
      candidates.add(u); fresh++;
    }
    console.error(`  ${q} → ${urls.length} status urls, ${fresh} in window`);
  }
  let added = 0, skipped = 0;
  for (const post of candidates) {
    if (known.has(post.toLowerCase())) { skipped++; continue; }
    const md = await fetchText(MIRROR + post);
    if (!md) { skipped++; continue; }
    const p = parseMirroredPost(md, post);
    if (!HIRING_RE.test(p.text) || NOISE_RE.test(p.text) || EXCLUDE_COMPANY_RE.test(p.text)) { skipped++; continue; }
    const apply = p.links.find(l => !known.has(l.toLowerCase().replace(/\/+$/, '')));
    if (p.links.length && !apply) { skipped++; continue; } // apply link already tracked
    appendLead({
      url: apply || post, post, company: guessCompany(p), role: guessRole(p.text),
      location: /\bremote\b/i.test(p.text) ? 'Remote' : null, seen, name: p.name, date: p.date, text: p.text,
    }, dryRun);
    added++;
  }
  console.error(`\nscan-x: ${candidates.size} candidate posts, ${added} added, ${skipped} skipped (dup / not hiring / unreachable)`);
  return { candidates: candidates.size, added, skipped };
}

function selfTest() {
  let pass = 0, fail = 0;
  const eq = (label, a, b) => { if (JSON.stringify(a) === JSON.stringify(b)) pass++; else { fail++; console.log(`FAIL ${label}\n  got ${JSON.stringify(a)}\n  want ${JSON.stringify(b)}`); } };
  eq('snowflake date', dateFromStatusId('2094924315703844892').toISOString().slice(0, 10), '2026-09-01');
  eq('status id', statusIdFromUrl('https://x.com/calvinchen/status/2094924315703844892?s=20'), '2094924315703844892');
  eq('canonical', canonicalStatusUrl('https://mobile.twitter.com/a_b/status/2094924315703844892?x=1'), 'https://x.com/a_b/status/2094924315703844892');
  eq('extract urls', extractStatusUrls('foo https://x.com/a/status/2094924315703844892 bar /l/?uddg=https%3A%2F%2Ftwitter.com%2Fb%2Fstatus%2F2085717384816697576&rut=1'),
    ['https://x.com/a/status/2094924315703844892', 'https://x.com/b/status/2085717384816697576']);
  eq('apply links', extractApplyLinks('apply: https://jobs.ashbyhq.com/foo/123. also https://x.com/x/status/1 and https://t.co/abc'), ['https://jobs.ashbyhq.com/foo/123']);
  const p = parseMirroredPost('Title: A\n\nPublished Time: 2026-09-01T23:04:13.000Z\n\n# Calvin Chen on X: "we\'re hiring for an Applied Researcher role. reach out"\n', 'https://x.com/calvinchen/status/2094924315703844892');
  eq('parse handle', p.handle, 'calvinchen');
  eq('parse name', p.name, 'Calvin Chen');
  eq('parse text', p.text.startsWith("we're hiring for an Applied Researcher"), true);
  eq('parse date', p.date.toISOString().slice(0, 10), '2026-09-01');
  eq('hiring re', HIRING_RE.test("we're hiring for an Applied Researcher role"), true);
  eq('noise re', NOISE_RE.test('hiring a Senior Director, AI'), true);
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const argv = process.argv.slice(2);
  if (argv.includes('--self-test')) selfTest();
  else {
    const days = argv.includes('--days') ? Number(argv[argv.indexOf('--days') + 1]) : 30;
    const q = argv.includes('--query') ? [argv[argv.indexOf('--query') + 1]] : DEFAULT_QUERIES;
    const queries = q.map(s => /site:x\.com/.test(s) ? s : `site:x.com ${s}`);
    run({ queries, days, dryRun: argv.includes('--dry-run') }).catch(e => { console.error(e); process.exit(1); });
  }
}
