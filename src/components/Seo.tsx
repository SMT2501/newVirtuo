import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
}

const SITE_NAME = "Virtuo Designs";
const SITE_URL = "https://virtuodesigns.co.za";
const DEFAULT_IMAGE = "https://virtuodesigns.co.za/opengraph.jpg";
const DEFAULT_KEYWORDS =
  "web development Cape Town, web design South Africa, custom website development, e-commerce development, React developer South Africa, web app development, UI UX design, digital transformation consulting, AI integration, CRM consulting, best web developer South Africa, top web agency Africa, bespoke website design, enterprise web development, Virtuo Designs";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string, extra?: Record<string, string>) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  if (extra) {
    Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
  }
}

function setJsonLd(id: string, data: object) {
  let el = document.querySelector<HTMLScriptElement>(`script[data-ld="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-ld", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function Seo({ title, description, path, keywords, image }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;
    const ogImage = image ?? DEFAULT_IMAGE;
    const allKeywords = keywords ? `${keywords}, ${DEFAULT_KEYWORDS}` : DEFAULT_KEYWORDS;

    document.title = fullTitle;

    // Core meta
    setMeta("name", "description", description);
    setMeta("name", "keywords", allKeywords);
    setMeta("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta("name", "author", "Virtuo Designs");
    setMeta("name", "theme-color", "#f7f6f4");

    // Geo targeting
    setMeta("name", "geo.region", "ZA-WC");
    setMeta("name", "geo.placename", "Cape Town");
    setMeta("name", "geo.position", "-33.9249;18.4241");
    setMeta("name", "ICBM", "-33.9249, 18.4241");

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:image:alt", `${SITE_NAME} — ${title}`);
    setMeta("property", "og:locale", "en_ZA");

    // Twitter / X
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
    setMeta("name", "twitter:site", "@virtuodesigns");

    // Canonical
    setLink("canonical", url);

    // Structured data — Organisation
    setJsonLd("org", {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Virtuo Designs",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.webp`,
      image: ogImage,
      description:
        "Virtuo Designs builds world-class websites, web applications, and e-commerce platforms, backed by AI integration consulting, CRM strategy, and AI-powered marketing. Based in Cape Town, serving clients globally.",
      telephone: "+27697714283",
      email: "hello@virtuodesigns.co.za",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cape Town",
        addressRegion: "Western Cape",
        addressCountry: "ZA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.9249,
        longitude: 18.4241,
      },
      areaServed: ["ZA", "GB", "US", "AU", "CA", "Global"],
      priceRange: "R12,500 – R65,000+",
      openingHours: "Mo-Fr 08:00-18:00",
      sameAs: [
        "https://wa.me/27697714283",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Virtuo Designs Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Website Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration Consulting" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM Strategy & Implementation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Marketing" } },
        ],
      },
      founder: [
        { "@type": "Person", name: "Samkele Mthuli", jobTitle: "Co-Founder & Lead Developer" },
        { "@type": "Person", name: "Thabo Mithi", jobTitle: "Co-Founder & Head of Consulting" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "47",
        bestRating: "5",
      },
    });

    // Structured data — WebSite (enables Sitelinks search box)
    setJsonLd("website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    });

    // Structured data — BreadcrumbList
    setJsonLd("breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        ...(path !== "/"
          ? [{ "@type": "ListItem", position: 2, name: title.split(" —")[0], item: url }]
          : []),
      ],
    });
  }, [title, description, path, keywords, image]);

  return null;
}
