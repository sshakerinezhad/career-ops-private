/**
 * Deterministic voice-dna linter.
 *
 * Pure: text in, violations out. No I/O, no model, no network. This exists so the
 * mechanically checkable half of voice-dna.md is enforced by code instead of by an
 * agent remembering, the same reasoning that put a contact-row check in
 * .tmp-measure.mjs after the rule had already been "fixed" once.
 *
 *   node data/lint.mjs --self-test
 *
 * Deliberately NOT registered in test-all.mjs: that file is system layer and
 * update-system.mjs would revert the registration.
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));

/** Banned with no legitimate sense in this user's writing. These cost score. */
export const SLOP_WORDS = [
  'delve', 'realm', 'unlock', 'tapestry', 'paradigm', 'cutting-edge',
  'revolutionize', 'intricate', 'intricacies', 'showcasing', 'crucial', 'pivotal',
  'surpass', 'meticulously', 'vibrant', 'unparalleled', 'leverage', 'synergy',
  'innovative', 'game-changer', 'testament', 'commendable', 'meticulous', 'boast',
  'groundbreaking', 'foster', 'showcase', 'enhance', 'holistic', 'garner',
  'accentuate', 'pioneering', 'trailblazing', 'unleash', 'versatile',
  'transformative', 'redefine', 'seamless', 'empower', 'streamline',
  'frictionless', 'elevate', 'effortless', 'data-driven', 'insightful',
  'proactive', 'mission-critical', 'visionary', 'disruptive', 'reimagine',
  'unprecedented', 'intuitive', 'leading-edge', 'synergize', 'democratize',
  'immersive', 'plug-and-play', 'turnkey', 'future-proof', 'paradigm-shifting',
  'supercharge', 'enduring', 'interplay', 'valuable', 'captivate', 'emphasize',
];

/**
 * On voice-dna's banned list, but each carries a real technical sense in ML and
 * engineering prose. Reported with surrounding context at ZERO weight: a
 * deterministic linter cannot tell a buzzword from a load-bearing term, so it
 * surfaces the call instead of making it.
 *
 * The decisive example: 'breakthrough' is banned by section 3A, and cv.md
 * correctly reads "FDA Breakthrough-designated device".
 */
export const CONTEXTUAL_WORDS = [
  'harness', 'robust', 'scalable', 'optimize', 'transparent', 'integrated',
  'dynamic', 'adaptive', 'predictive', 'proprietary', 'accelerate',
  'breakthrough', 'state-of-the-art',
  // Statute bans these only in a sense a linter cannot detect: 'landscape' when
  // abstract, 'underscore' and 'highlight' as verbs. 'align' is banned as filler
  // but is this user's actual field -- cv.md lists "Alignment Evaluation".
  'landscape', 'underscore', 'highlight', 'align',
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

/** voice-dna section 3F: the single most reliable tell. Fatal weight. */
export const PARALLELISM_PATTERNS = [
  /\b(?:this|it|that)\s+(?:isn't|is not|ain't)\b[^.!?]*[.!?]\s*(?:this|it|that)\s+is\b/i,
  /\bnot\s+(?:just|only)\s+about\b[^.!?]*,\s*it's\s+about\b/i,
  /\bless\s+\w+\s*,\s*more\s+\w+/i,
  /\bthe\s+question\s+isn't\b[^.!?]*\.\s*the\s+question\s+is\b/i,
  /\byou\s+don't\s+need\b[^.!?]*\.\s*you\s+need\b/i,
];

export const WEIGHTS = {
  word: 0.10, contextual: 0, phrase: 0.15, transition: 0.15,
  emdash: 0.25, parallelism: 0.25, pronoun: 0.25,
};

const CV_PRONOUNS = /\b(?:i|i'm|i've|my|me|we|our|us)\b/i;

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** ~40 characters either side, so a contextual hit can be judged in place. */
function around(text, index, len) {
  return text.slice(Math.max(0, index - 40), Math.min(text.length, index + len + 40)).trim();
}

/**
 * Matches the term plus common inflections (s/es/ed/ing/d) so "harnesses" is
 * caught by "harness". Deliberately does NOT match derivations that change
 * meaning: "robustness" is not a hit for "robust".
 */
function findAll(text, needle, kind) {
  const out = [];
  const re = new RegExp(
    `(?<![\\p{L}\\p{N}-])${escapeRe(needle)}(?:es|ed|ing|s|d)?(?![\\p{L}\\p{N}-])`, 'giu');
  let m;
  while ((m = re.exec(text)) !== null) {
    const hit = { rule: needle, kind, match: m[0].toLowerCase(), index: m.index };
    if (kind === 'contextual') hit.context = around(text, m.index, m[0].length);
    out.push(hit);
  }
  return out;
}

/**
 * Deterministic voice-dna violations.
 * score = max(0, 1 - sum of weights), 3 decimals. Clean text scores 1.
 * Contextual hits appear in `violations` but carry zero weight.
 */
export function lint(text, opts = {}) {
  const s = String(text);
  const violations = [];

  for (const word of SLOP_WORDS) violations.push(...findAll(s, word, 'word'));
  for (const word of CONTEXTUAL_WORDS) violations.push(...findAll(s, word, 'contextual'));
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
  eq('slop words scored', w.violations.filter((v) => v.kind === 'word').map((v) => v.match).sort(),
    ['leverage', 'paradigm']);
  eq('contextual words reported', w.violations.filter((v) => v.kind === 'contextual').map((v) => v.match).sort(),
    ['robust', 'scalable']);
  eq('only slop words lower the score', w.score, 0.8);
  eq('contextual hits carry surrounding text',
    lint('I built evaluation harnesses for agents.').violations[0].context,
    'I built evaluation harnesses for agents.');
  eq('his own shipped vocabulary still scores 1',
    lint('I built evaluation harnesses and test setups.').score, 1);

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
    lint("This isn't X. This is Y — furthermore, we delve into synergy to revolutionize the tapestry.").score, 0);

  eq('word match is case-insensitive', lint('Leverage it.').violations.length, 1);
  eq('word match respects boundaries', lint('Robustness is fine.').violations.length, 0);

  // Drift guard: every word in voice-dna.md section 3A must be triaged into exactly
  // one tier. A word in neither has silently fallen off the statute.
  const voice = readFileSync(join(HERE, '..', 'voice-dna.md'), 'utf8');
  const block = voice.split('### 3A.')[1].split('###')[0];
  const listLine = block.split('\n').find((l) => l.includes('delve,'));
  // Statute entries carry qualifiers ("landscape (abstract)", "underscore (verb)")
  // and slash pairs ("intricate/intricacies"). Normalize to bare words first.
  const fromStatute = listLine
    .split(',')
    .flatMap((s) => s.replace(/\([^)]*\)/g, '').split('/'))
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const known = new Set([...SLOP_WORDS, ...CONTEXTUAL_WORDS]);
  eq('linter triages every voice-dna 3A word', fromStatute.filter((w2) => !known.has(w2)), []);
  eq('no word is in both tiers', SLOP_WORDS.filter((w2) => CONTEXTUAL_WORDS.includes(w2)), []);

  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

// Only self-test when this file IS the entry point. Without the guard, importing
// it from another module that was itself launched with --self-test runs THESE
// tests and exits before the importer's ever execute.
const isEntryPoint = process.argv[1]
  && pathToFileURL(process.argv[1]).href === import.meta.url;

if (isEntryPoint && process.argv.includes('--self-test')) runSelfTest();
