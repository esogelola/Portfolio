import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import seo from "../../data/seo.json";

const SITE_URL = "https://esogelola.com";
const DEFAULT_IMAGE_WIDTH = "1200";
const DEFAULT_IMAGE_HEIGHT = "630";

type SeoEntry = {
  path: string;
  title: string;
  description: string;
  type: string;
  image: string;
  imageAlt: string;
  published?: string;
  modified?: string;
};

const entries = Object.values(seo) as SeoEntry[];

function personSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Emmanuel Sogelola",
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/images/emmanuel-sogelola.jpg`,
    jobTitle: "Security Engineer and Founder",
    homeLocation: {
      "@type": "Place",
      name: "Brooklyn, New York",
    },
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

function structuredData(entry: SeoEntry) {
  const person = personSchema();

  if (entry.path === "/writing/machines-that-wait") {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Machines That Wait: Why Intelligence Should Stop Before It Acts",
      description: entry.description,
      image: `${SITE_URL}${entry.image}`,
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

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
}

export default function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const entry = entries.find((item) => item.path === pathname);
    const canonical = entry ? `${SITE_URL}${entry.path}` : `${SITE_URL}${pathname}`;
    const title = entry?.title ?? "Page not found | Emmanuel Sogelola";
    const description = entry?.description ?? "The requested page could not be found.";
    const image = `${SITE_URL}${entry?.image ?? seo.home.image}`;
    const imageAlt = entry?.imageAlt ?? seo.home.imageAlt;

    document.title = title;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: entry ? "index, follow, max-image-preview:large" : "noindex, follow",
    });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: entry?.type ?? "website",
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: imageAlt,
    });
    upsertMeta('meta[property="og:image:width"]', {
      property: "og:image:width",
      content: DEFAULT_IMAGE_WIDTH,
    });
    upsertMeta('meta[property="og:image:height"]', {
      property: "og:image:height",
      content: DEFAULT_IMAGE_HEIGHT,
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: "twitter:image:alt",
      content: imageAlt,
    });

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    let schema = document.head.querySelector<HTMLScriptElement>("#route-structured-data");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "route-structured-data";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(structuredData(entry ?? (seo.home as SeoEntry)));
  }, [pathname]);

  return null;
}
