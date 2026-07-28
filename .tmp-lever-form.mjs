const url = process.argv[2];
const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
let html = await res.text();
html = html.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '');
// isolate the application form
const formStart = html.indexOf('application-form');
const form = formStart > -1 ? html.slice(formStart) : html;
// walk labels + inputs in order
const re = /<(label|input|textarea|select|option|h4|div)\b([^>]*)>([^<]*)/gi;
let m; const out = [];
const attr = (s, n) => (s.match(new RegExp(n + '="([^"]*)"')) || [])[1];
while ((m = re.exec(form))) {
  const [ , tag, attrs, text ] = m;
  const cls = attr(attrs, 'class') || '';
  if (tag === 'div' && /application-label/.test(cls) && text.trim()) out.push('\nQ: ' + text.trim());
  if (tag === 'label' && text.trim() && !/hidden/.test(cls)) out.push('  opt/label: ' + text.trim());
  if (tag === 'input') {
    const type = attr(attrs, 'type') || 'text';
    if (['hidden','submit'].includes(type)) continue;
    out.push(`  [${type}] name=${attr(attrs, 'name') || '?'} ${attr(attrs, 'required') !== undefined ? 'REQUIRED' : ''} value=${attr(attrs, 'value') || ''}`);
  }
  if (tag === 'textarea') out.push(`  [textarea] name=${attr(attrs, 'name') || '?'}`);
  if (tag === 'select') out.push(`  [select] name=${attr(attrs, 'name') || '?'}`);
  if (tag === 'option' && text.trim()) out.push('    option: ' + text.trim());
  if (tag === 'h4' && text.trim()) out.push('\n== ' + text.trim() + ' ==');
}
console.log(out.join('\n'));
