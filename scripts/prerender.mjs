import { build } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const output = resolve("dist/public");
const serverOutput = resolve("dist/prerender");
await build({ publicDir: false, build: { ssr: "src/entry-server.tsx", outDir: serverOutput } });
const { render } = await import(pathToFileURL(resolve(serverOutput, "entry-server.js")).href);
const template = await readFile(resolve(output, "index.html"), "utf8");
// Keep dynamic portal routes separate from the prerendered homepage.
await writeFile(resolve(output, "app.html"), template);
// Use the sitemap as the public route list.
const sitemap = await readFile(resolve(output, "sitemap.xml"), "utf8");
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

for (const path of paths) {
  if (path !== "/" && !/^\/[a-z0-9-]+$/.test(path)) throw new Error("Unsupported public path: " + path);
  const { html, seo } = await render(path);
  const title = seo.title + " | Virtuo Designs";
  const url = "https://virtuodesigns.co.za" + path;
  let page = template.replace('<div id="root"></div>', () => '<div id="root" data-prerendered="true">' + html + '</div>');
  page = page.replace(/<title>.*?<\/title>/, () => "<title>" + escape(title) + "</title>");
  const tags = { description: seo.description, "og:title": title, "og:description": seo.description, "og:url": url,
    "twitter:title": title, "twitter:description": seo.description, "og:image:alt": "Virtuo Designs — " + seo.title };
  if (seo.keywords) tags.keywords = seo.keywords;
  if (seo.image) { tags["og:image"] = seo.image; tags["twitter:image"] = seo.image; }
  for (const [key, value] of Object.entries(tags)) {
    const pattern = new RegExp('(<meta (?:name|property)="' + key + '" content=")[^"]*("\\s*/?>)');
    page = page.replace(pattern, (_match, start, end) => start + escape(value) + end);
  }
  page = page.replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, (_match, start, end) => start + url + end);
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://virtuodesigns.co.za/" },
    ...(path === "/" ? [] : [{ "@type": "ListItem", position: 2, name: seo.title.split(" —")[0], item: url }]),
  ] };
  page = page.replace("</head>", () => '<script type="application/ld+json" data-ld="breadcrumb">' + JSON.stringify(breadcrumb).replaceAll("<", "\\u003c") + '</script>\n</head>');
  const directory = path === "/" ? output : resolve(output, path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, "index.html"), page);
  console.log("Prerendered " + path);
}
