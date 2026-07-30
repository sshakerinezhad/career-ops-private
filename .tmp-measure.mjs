import { chromium } from 'playwright';
import { pathToFileURL } from 'url';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.emulateMedia({ media: 'print' });
await page.setViewportSize({ width: 701, height: 2000 });
await page.goto(pathToFileURL(process.argv[2]).href);

const h = await page.evaluate(() => document.querySelector('.page').getBoundingClientRect().height);
const budget = (11 - 1.2) * 96;
const overBudget = h > budget;
console.log('content height px:', Math.round(h), '| budget:', budget, overBudget ? '| OVER' : '');

// Contact row must occupy EXACTLY one line (_profile.md rule 11b). A wrapped row
// only costs ~15px, so it slips under the height budget unchecked -- this is the
// enforcement, not the rule text.
const contact = await page.evaluate(() => {
  const row = document.querySelector('.contact-row');
  if (!row) return null;
  const tops = [...row.children]
    .filter((el) => !el.classList.contains('separator'))
    .map((el) => ({ top: Math.round(el.getBoundingClientRect().top), text: el.textContent.trim() }));
  const lines = [...new Set(tops.map((t) => t.top))].sort((a, b) => a - b);
  return {
    lineCount: lines.length,
    rowWidth: Math.round(row.getBoundingClientRect().width),
    lines: lines.map((top) => tops.filter((t) => t.top === top).map((t) => t.text)),
  };
});

let failed = overBudget;
if (contact === null) {
  console.log('contact row: none found (not a CV layout)');
} else if (contact.lineCount === 1) {
  console.log('contact row: 1 line, OK  |', contact.lines[0].join(' | '));
} else {
  failed = true;
  console.log(`contact row: ${contact.lineCount} LINES -- RULE 11b VIOLATION (must be exactly 1)`);
  contact.lines.forEach((items, i) => console.log(`  line ${i + 1}: ${items.join(' | ')}`));
  console.log('  fix: drop items (portfolio/lab URL first) until this reports 1 line');
}

await browser.close();
process.exit(failed ? 1 : 0);
