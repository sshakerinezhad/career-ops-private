// Read-only application-form field extractor. NEVER fills or submits.
// Usage (from repo root): node .tmp-read-form.mjs <url>
// API-based (no browser): supports Ashby (GraphQL) and Greenhouse (boards API).
// Lever/Workday/own-site forms: no public form API — read manually in browser.

const url = process.argv[2];
if (!url) { console.error('usage: node .tmp-read-form.mjs <url>'); process.exit(1); }
const u = new URL(url);

function printField(f) {
  const req = f.required ? 'REQUIRED' : 'optional';
  const opts = f.options?.length ? ` | options: ${f.options.join(' / ')}` : '';
  console.log(`- [${req}] (${f.type}) ${f.label}${opts}`);
  if (f.desc) console.log(`    desc: ${f.desc.replace(/<[^>]+>/g, '').trim().slice(0, 200)}`);
}

if (u.hostname === 'jobs.ashbyhq.com') {
  const [org, jobId] = u.pathname.split('/').filter(Boolean);
  const query = `query ApiJobPosting($organizationHostedJobsPageName: String!, $jobPostingId: String!) {
    jobPosting(organizationHostedJobsPageName: $organizationHostedJobsPageName, jobPostingId: $jobPostingId) {
      id title applicationForm { sections { title descriptionHtml fieldEntries { isRequired descriptionHtml field } } }
    } }`;
  const res = await fetch('https://jobs.ashbyhq.com/api/non-user-graphql', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      operationName: 'ApiJobPosting',
      variables: { organizationHostedJobsPageName: org, jobPostingId: jobId },
      query,
    }),
  });
  const json = await res.json();
  const posting = json?.data?.jobPosting;
  if (!posting) { console.error('No posting found (expired or bad URL):', JSON.stringify(json).slice(0, 300)); process.exit(2); }
  console.log(`# ${posting.title} (Ashby)`);
  for (const s of posting.applicationForm.sections) {
    console.log(`\n== SECTION: ${s.title || '(untitled)'} ==`);
    for (const e of s.fieldEntries) {
      const f = e.field;
      printField({
        required: e.isRequired,
        type: f.type,
        label: f.title,
        options: (f.selectableValues || []).map(v => v.label ?? String(v)),
        desc: e.descriptionHtml,
      });
    }
  }
} else if (/greenhouse\.io$/.test(u.hostname)) {
  // job-boards.greenhouse.io/{org}/jobs/{id} or boards.greenhouse.io/{org}/jobs/{id}
  const parts = u.pathname.split('/').filter(Boolean);
  const org = parts[0];
  const id = parts[parts.indexOf('jobs') + 1];
  const res = await fetch(`https://boards-api.greenhouse.io/v1/boards/${org}/jobs/${id}?questions=true`);
  if (!res.ok) { console.error(`Greenhouse API ${res.status} (expired or bad URL)`); process.exit(2); }
  const job = await res.json();
  console.log(`# ${job.title} (Greenhouse)`);
  for (const q of job.questions || []) {
    for (const f of q.fields || []) {
      printField({
        required: q.required,
        type: f.type,
        label: q.label,
        options: (f.values || []).map(v => v.label),
        desc: q.description,
      });
    }
  }
  for (const cq of job.compliance || []) {
    console.log(`\n== COMPLIANCE: ${(cq.description || '').replace(/<[^>]+>/g, '').slice(0, 120)} ==`);
    for (const q of cq.questions || []) {
      for (const f of q.fields || []) {
        printField({ required: q.required, type: f.type, label: q.label, options: (f.values || []).map(v => v.label) });
      }
    }
  }
} else {
  console.error(`No API extractor for ${u.hostname} — Lever/Workday/own-site forms must be read in a live browser. (Headless Chromium is blocked by this environment's egress proxy.)`);
  process.exit(3);
}
