import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";

const output = resolve("dist/public");
const sitemap = await readFile(resolve(output, "sitemap.xml"), "utf8");
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
const titles = new Set();
for (const path of paths) {
  const html = await readFile(resolve(output, path === "/" ? "index.html" : path.slice(1) + "/index.html"), "utf8");
  assert.match(html, /data-prerendered="true"/, path);
  assert.match(html, /<h1[\s>]/, path + " has visible page content");
  assert.match(html, /<main[\s>]/, path + " has a main landmark");
  assert.ok(html.includes('rel="canonical" href="https://virtuodesigns.co.za' + path + '"'), path + " canonical");
  assert.ok(html.includes('property="og:url" content="https://virtuodesigns.co.za' + path + '"'), path + " social URL");
  assert.ok(!html.includes("Loading your page"), path + " finished rendering");
  assert.ok(!html.includes('<!--$!-->'), path + " has no aborted render");
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  assert.ok(!titles.has(title), path + " unique title");
  titles.add(title);
  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)) await access(resolve(output, match[1].slice(1)));
}
const shell = await readFile(resolve(output, "app.html"), "utf8");
assert.ok(!shell.includes("data-prerendered"), "Dynamic routes retain a blank app shell");
const faq = await readFile(resolve(output, "faq/index.html"), "utf8");
assert.match(faq, /<details/);
assert.ok(faq.includes("Absolutely. We work with clients globally."), "FAQ answers exist before JavaScript");
const contact = await readFile(resolve(output, "contact/index.html"), "utf8");
assert.match(contact, /action="https:\/\/formspree.io\/f\/maqglovl" method="POST"/, "Contact form works without JavaScript");
const hosting = JSON.parse(await readFile("firebase.json", "utf8")).hosting;
assert.equal(hosting.rewrites[0].destination, "/app.html");
assert.equal(hosting.trailingSlash, false);
console.log("Verified " + paths.length + " public pages: content, metadata, assets, FAQ, contact form and portal shell.");
