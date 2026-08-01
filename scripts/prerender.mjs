import fs from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ReactMarkdown from "react-markdown";

const ROOT = process.cwd();
const SITE_URL = "https://esogelola.com";
const DIST = path.join(ROOT, "dist");

const readJson = async (relativePath) =>
  JSON.parse(await fs.readFile(path.join(ROOT, relativePath), "utf8"));

const [seo, posts, projects, experience] = await Promise.all([
  readJson("src/data/seo.json"),
  readJson("src/data/blogs.json"),
  readJson("src/data/projects.json"),
  readJson("src/data/experience.json"),
]);

const baseHtml = await fs.readFile(path.join(DIST, "index.html"), "utf8");
const articleMarkdown = await fs.readFile(
  path.join(ROOT, "src/content/blogs/machines-that-wait.md"),
  "utf8",
);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function absoluteUrl(value) {
  return value.startsWith("http") ? value : `${SITE_URL}${value}`;
}

function personSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Emmanuel Sogelola",
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/images/emmanuel-sogelola.jpg`,
    jobTitle: "Security Engineer and Founder",
    homeLocation: { "@type": "Place", name: "Brooklyn, New York" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "McMaster University" },
      { "@type": "CollegeOrUniversity", name: "George Brown College" },
    ],
    worksFor: { "@type": "Organization", name: "Twitch" },
    sameAs: [
      "https://linkedin.com/in/emmanuelsogelola",
      "https://github.com/esogelola",
      "https://x.com/esogelola",
      "https://substack.com/@esogelola",
    ],
    knowsAbout: [
      "Incident response",
      "Security engineering",
      "Artificial intelligence",
      "Financial technology",
      "Human-centered product design",
    ],
  };
}

function schemaFor(entry) {
  const person = personSchema();
  if (entry.path === "/writing/machines-that-wait") {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Machines That Wait: Why Intelligence Should Stop Before It Acts",
      description: entry.description,
      image: absoluteUrl(entry.image),
      datePublished: entry.published,
      dateModified: entry.modified,
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#person` },
      mainEntityOfPage: `${SITE_URL}${entry.path}`,
      about: ["AI safety", "Human authority", "Provenance", "Bounded agents"],
    };
  }
  if (entry.path === "/about") {
    return {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: entry.title,
      url: `${SITE_URL}${entry.path}`,
      mainEntity: person,
    };
  }
  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Emmanuel Sogelola",
        url: `${SITE_URL}/`,
        description: entry.description,
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };
}

function seoBlock(entry, { noindex = false } = {}) {
  const canonical = `${SITE_URL}${entry.path}`;
  const image = absoluteUrl(entry.image);
  return `<!-- SEO:START -->
    <meta name="description" content="${escapeHtml(entry.description)}" />
    <meta name="robots" content="${noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />
    <meta name="author" content="Emmanuel Sogelola" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${escapeHtml(entry.title)}" />
    <meta property="og:type" content="${entry.type}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="${escapeHtml(entry.imageAlt)}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:description" content="${escapeHtml(entry.description)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(entry.title)}" />
    <meta name="twitter:description" content="${escapeHtml(entry.description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${escapeHtml(entry.imageAlt)}" />
    <meta name="twitter:site" content="@esogelola" />
    <script id="route-structured-data" type="application/ld+json">${JSON.stringify(schemaFor(entry)).replaceAll("<", "\\u003c")}</script>
    <title>${escapeHtml(entry.title)}</title>
    <!-- SEO:END -->`;
}

function pageHtml(entry, fallback, options) {
  return baseHtml
    .replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, seoBlock(entry, options))
    .replace('<div id="root"></div>', `<div id="root">${fallback}</div>`);
}

const livePosts = posts.filter((post) => post.state === "live");
const homeFallback = `<main data-prerendered="true">
  <header>
    <h1>Emmanuel Sogelola</h1>
    <p>Security engineer, founder, and builder of intelligence that reasons, then waits.</p>
    <p>Based in Brooklyn, New York. Working at Twitch and building Munk.</p>
  </header>
  <section>
    <h2>I build at the edge of trust and autonomy.</h2>
    <p>My work spans incident response, financial systems, and AI products. Across each field, trust must be earned, decisions must be legible, and authority must remain human.</p>
  </section>
  <section>
    <h2>Selected writing</h2>
    ${livePosts
      .map((post) => {
        const url = post.local ? `/writing/${post.id}` : post.url;
        return `<article><h3><a href="${escapeHtml(url)}">${escapeHtml(post.title)}</a></h3><p>${escapeHtml(post.description)}</p></article>`;
      })
      .join("\n")}
  </section>
  <section>
    <h2>Experience</h2>
    <ul>${experience.map((role) => `<li>${escapeHtml(role.role)}, ${escapeHtml(role.company)}</li>`).join("")}</ul>
  </section>
  <section>
    <h2>Selected projects</h2>
    ${projects.map((project) => `<article><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p></article>`).join("\n")}
  </section>
</main>`;

const aboutFallback = `<main data-prerendered="true">
  <article>
    <h1>About Emmanuel Sogelola</h1>
    <img src="/images/emmanuel-sogelola-outdoors.jpg" width="1192" height="1588" alt="Emmanuel Sogelola outdoors" />
    <p>Emmanuel Sogelola is a Brooklyn-based security engineer, founder, builder, and thinker working across technology and finance.</p>
    <p>His work spans incident response at Twitch, financial planning and advisory systems, fiduciary design, machine learning, and human-centered AI. He builds with a bias toward clarity and calm, with particular interest in systems that explain themselves and agents that wait for human instruction.</p>
    <p>Outside work, his interests include snowboarding, video games, hiking, film, and writing.</p>
  </article>
</main>`;

function stripMarkdownMasthead(markdown) {
  const lines = markdown.split("\n");
  let index = 0;
  if (lines[index]?.startsWith("# ")) index += 1;
  while (lines[index]?.trim() === "") index += 1;
  if (lines[index]?.startsWith("### ")) index += 1;
  while (lines[index]?.trim() === "") index += 1;
  if (/^_Published on .+_$/.test(lines[index] ?? "")) index += 1;
  while (lines[index]?.trim() === "") index += 1;
  return lines.slice(index).join("\n");
}

const article = posts.find((post) => post.id === "machines-that-wait");
if (!article) throw new Error("Missing machines-that-wait post metadata");
const renderedArticle = renderToStaticMarkup(
  React.createElement(ReactMarkdown, null, stripMarkdownMasthead(articleMarkdown)),
);
const articleFallback = `<main data-prerendered="true"><article>
  <header><p>${escapeHtml(article.category)} · ${escapeHtml(article.type)}</p><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.date)} · ${escapeHtml(article.readTime)}</p></header>
  ${renderedArticle}
</article></main>`;

const notFoundEntry = {
  ...seo.home,
  path: "/404",
  title: "Page not found | Emmanuel Sogelola",
  description: "The requested page could not be found.",
};
const notFoundFallback = '<main data-prerendered="true"><h1>Page not found</h1><p>The requested page could not be found.</p><a href="/">Return to the portfolio</a></main>';

await fs.writeFile(path.join(DIST, "index.html"), pageHtml(seo.home, homeFallback));
await fs.writeFile(path.join(DIST, "about.html"), pageHtml(seo.about, aboutFallback));
await fs.mkdir(path.join(DIST, "writing"), { recursive: true });
await fs.writeFile(
  path.join(DIST, "writing", "machines-that-wait.html"),
  pageHtml(seo.machinesThatWait, articleFallback),
);
await fs.writeFile(
  path.join(DIST, "404.html"),
  pageHtml(notFoundEntry, notFoundFallback, { noindex: true }),
);

console.log("Prerendered /, /about, /writing/machines-that-wait, and /404.html");
