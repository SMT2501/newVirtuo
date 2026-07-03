import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { ArrowUpRight, X, ExternalLink, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

interface Project {
  title: string;
  category: string;
  desc: string;
  tech: string;
  img: string;
  liveUrl?: string;
  challenge: string;
  solution: string;
  results: string[];
  features: string[];
  client?: string;
}

const projects: Project[] = [
  {
    title: "Campus Marketplace",
    category: "Web App / Platform",
    desc: "A secure, peer-to-peer marketplace connecting university students for buying and selling goods. Designed to solve a real campus need with seamless UX.",
    tech: "React, Node.js, MongoDB",
    img: "/images/virtuo-work-1.png",
    liveUrl: "https://mycampusmarketplace.com/",
    client: "My Campus Marketplace",
    challenge:
      "Students lacked a safe, trusted platform to trade goods on campus — generic marketplaces offered no student verification, making scams rampant.",
    solution:
      "We built a purpose-built peer-to-peer marketplace with student account verification, category browsing, in-app messaging, and a smooth listing flow — mobile-first and optimised for campus networks.",
    features: [
      "Student identity verification",
      "Category & campus-filtered listings",
      "In-app messaging between buyers & sellers",
      "Secure checkout & payment integration",
      "Listing management dashboard",
      "Mobile-first responsive design",
    ],
    results: [
      "Live and actively used across multiple South African campuses",
      "Reduced student-to-student fraud with verified accounts",
      "Intuitive UX driving high listing conversion rates",
    ],
  },
  {
    title: "Umnini Community Trust",
    category: "Web Design / Non-Profit",
    desc: "A beautifully crafted informational website for a community organisation. Built with a focus on accessibility, clear communication, and strong SEO fundamentals.",
    tech: "Bootstrap, HTML/CSS/JS, Custom UI",
    img: "/images/virtuo-work-2.png",
    liveUrl: "https://umninitrust.org.za/",
    client: "Umnini Community Trust",
    challenge:
      "The organisation needed a credible, accessible online presence to communicate its socio-economic development programmes and build trust with stakeholders, donors, and community members.",
    solution:
      "We designed and developed a clean, accessible informational site showcasing the Trust's mission, leadership, programmes, and community impact — with strong SEO foundations to maximise organic reach.",
    features: [
      "Organisation overview & mission pages",
      "Leadership & board directory",
      "Community programmes showcase",
      "News & updates section",
      "Contact & stakeholder enquiry form",
      "Accessibility-first design (WCAG-aligned)",
    ],
    results: [
      "Fully live at umninitrust.org.za",
      "Improved stakeholder communication and credibility",
      "Strong organic search visibility across relevant community terms",
    ],
  },
  {
    title: "Luxury Commerce Experience",
    category: "E-Commerce",
    desc: "A high-end retail experience prioritising visual merchandising, frictionless checkout, and elegant typography to match the brand's premium positioning.",
    tech: "Next.js, Tailwind, Stripe",
    img: "/images/virtuo-work-3.webp",
    challenge:
      "A premium retail brand needed an e-commerce presence that matched its luxury positioning — generic platforms like Shopify felt off-brand and constrained the visual story they needed to tell.",
    solution:
      "We built a fully bespoke Next.js storefront with custom product pages, editorial-style layouts, Stripe payment integration, and micro-animations that elevated the brand experience at every touchpoint.",
    features: [
      "Bespoke product page layouts",
      "Editorial hero & lookbook sections",
      "Stripe checkout integration",
      "Animated transitions & hover states",
      "Inventory & order management",
      "SEO-optimised product metadata",
    ],
    results: [
      "Conversion rate significantly above industry average for luxury segment",
      "Average session duration increased vs. prior platform",
      "Brand perception elevated — qualitative client feedback confirmed",
    ],
  },
  {
    title: "Bespoke Portfolio",
    category: "Brand Identity & Web",
    desc: "A highly interactive, visually arresting portfolio site for a creative professional, featuring custom animations and tailored CMS integration.",
    tech: "React, Framer Motion, Sanity",
    img: "/images/virtuo-work-4.webp",
    challenge:
      "A senior creative professional needed a portfolio that functioned as its own creative statement — something that stood out to agencies and clients the moment they landed on it.",
    solution:
      "We crafted a bespoke React portfolio with Framer Motion-powered animations, a custom Sanity CMS for self-managed content, and an opinionated visual identity aligned with their personal brand.",
    features: [
      "Custom Framer Motion page transitions",
      "Sanity CMS for self-managed case studies",
      "Interactive project gallery with filters",
      "Bespoke typography & colour system",
      "Contact & availability status widget",
      "Fully responsive across all devices",
    ],
    results: [
      "Client secured two new agency contracts within 3 months of launch",
      "Portfolio cited by prospective clients as a key differentiator",
      "CMS enables independent content updates without developer involvement",
    ],
  },
  {
    title: "Enterprise Dashboard",
    category: "UI/UX & Systems",
    desc: "A complex internal portal designed to consolidate data streams, manage operations, and provide clear strategic overviews for management teams.",
    tech: "Vue.js, REST APIs, Tailwind",
    img: "/images/virtuo-work-5.webp",
    challenge:
      "A multi-department organisation was drowning in disconnected spreadsheets and siloed data systems — management had no unified view of operations or KPIs in real time.",
    solution:
      "We designed and built a Vue.js internal dashboard that consolidated multiple REST API data streams into a single interface, with role-based access, filterable tables, and real-time KPI widgets.",
    features: [
      "Role-based access control (RBAC)",
      "Real-time KPI widgets & charts",
      "Multi-source REST API integration",
      "Filterable data tables with export",
      "Department-level drill-down views",
      "Audit log & activity tracking",
    ],
    results: [
      "Reduced management reporting time by ~60%",
      "Single source of truth adopted across all departments",
      "Ongoing retainer secured for feature iteration",
    ],
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = `modal-title-${project.title.replace(/\s+/g, "-").toLowerCase()}`;

  // Lock body scroll and focus close button on mount; restore on unmount
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Close on Escape and trap focus within the modal
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),input,textarea,select,[tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    },
    [onClose]
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="aspect-[16/7] w-full overflow-hidden rounded-t-2xl bg-secondary">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Close */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center border border-border hover:bg-secondary transition-colors"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">
            {project.category}
          </span>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
            <h2 id={titleId} className="text-3xl md:text-4xl font-serif">{project.title}</h2>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 shrink-0 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors"
              >
                Visit Live Site <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Tech stack */}
          <div className="mb-8 border-l-2 border-accent pl-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-foreground block mb-1">
              Tech Stack
            </span>
            <span className="text-sm text-muted-foreground">{project.tech}</span>
          </div>

          {/* Challenge / Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-3 text-foreground">
                The Challenge
              </h4>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                {project.challenge}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-3 text-foreground">
                Our Approach
              </h4>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground font-light">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="bg-secondary/40 border border-border rounded-xl p-6">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground">
              Outcomes
            </h4>
            <ul className="space-y-2">
              {project.results.map((r, i) => (
                <li key={i} className="text-sm text-muted-foreground font-light leading-relaxed flex items-start gap-3">
                  <span className="text-accent font-bold mt-0.5">→</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <Layout>
      <Seo
        title="Portfolio — Selected Work & Case Studies"
        description="Explore Virtuo Designs' portfolio: marketplaces, non-profit websites, luxury e-commerce, bespoke portfolios, and enterprise dashboards."
        path="/portfolio"
      />

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      <section className="pt-40 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-serif leading-tight text-balance mb-8">
            Selected Work.
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            We partner with ambitious startups, established businesses, and community organizations to build platforms that perform.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((work, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20 group`}
            >
              <div className="w-full md:w-[55%] overflow-hidden rounded-xl bg-secondary border border-border">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={work.img}
                    alt={work.title}
                    width={1200}
                    height={840}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>
              </div>
              <div className="w-full md:w-[45%] flex flex-col justify-center">
                <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
                  {work.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-serif mb-6 group-hover:text-accent transition-colors">
                  {work.title}
                </h3>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                  {work.desc}
                </p>
                <div className="mb-8 border-l-2 border-accent pl-4">
                  <span className="text-xs uppercase tracking-widest font-semibold text-foreground block mb-1">
                    Tech Stack
                  </span>
                  <span className="text-sm text-muted-foreground">{work.tech}</span>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setActiveProject(work)}
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-foreground hover:text-accent transition-colors"
                  >
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </button>
                  {work.liveUrl && (
                    <a
                      href={work.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-accent transition-colors"
                    >
                      Live Site <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
