import { readFile } from 'node:fs/promises';

const files = ['index.html', 'concept-one.html', 'concept-two.html', 'styles.css', 'script.js', 'vercel.json'];
for (const file of files) {
  const value = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
  if (!value.trim()) throw new Error(`${file} is empty`);
}

const pages = await Promise.all(files.slice(0, 3).map((file) => readFile(new URL(`../${file}`, import.meta.url), 'utf8')));
for (const [index, html] of pages.entries()) {
  if (!html.includes('viewport')) throw new Error(`${files[index]} is missing viewport metadata`);
}

for (const file of files.slice(1, 3)) {
  const html = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
  if (!html.includes('wa.me/2349031609410')) throw new Error(`${file} is missing WhatsApp links`);
}

JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
console.log(`Validated ${files.length} files and WhatsApp journeys.`);
