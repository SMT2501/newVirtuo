import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Campus Marketplace",
      category: "Web App / Platform",
      desc: "A secure, peer-to-peer marketplace connecting university students for buying and selling goods. Designed to solve a real campus need with seamless UX.",
      tech: "React, Node.js, MongoDB",
      img: "/images/virtuo-work-1.png",
    },
    {
      title: "Umnini Community Trust",
      category: "Web Design / Non-Profit",
      desc: "A beautifully crafted informational website for a community organization. Built with a focus on accessibility, clear communication, and strong SEO fundamentals.",
      tech: "Bootstrap, HTML/CSS/JS, Custom UI",
      img: "/images/virtuo-work-2.png",
    },
    {
      title: "Luxury Commerce Experience",
      category: "E-Commerce",
      desc: "A high-end retail experience prioritizing visual merchandising, frictionless checkout, and elegant typography to match the brand's premium positioning.",
      tech: "Next.js, Tailwind, Stripe",
      img: "/images/virtuo-work-3.webp",
    },
    {
      title: "Bespoke Portfolio",
      category: "Brand Identity & Web",
      desc: "A highly interactive, visually arresting portfolio site for a creative professional, featuring custom animations and tailored CMS integration.",
      tech: "React, Framer Motion, Sanity",
      img: "/images/virtuo-work-4.webp",
    },
    {
      title: "Enterprise Dashboard",
      category: "UI/UX & Systems",
      desc: "A complex internal portal designed to consolidate data streams, manage operations, and provide clear strategic overviews for management teams.",
      tech: "Vue.js, REST APIs, Tailwind",
      img: "/images/virtuo-work-5.webp",
    }
  ];

  return (
    <Layout>
      <Seo
        title="Portfolio — Selected Work & Case Studies"
        description="Explore Virtuo Designs' portfolio: marketplaces, non-profit websites, luxury e-commerce, bespoke portfolios, and enterprise dashboards."
        path="/portfolio"
      />
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
            <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20 group`}>
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
                <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">{work.category}</span>
                <h3 className="text-4xl md:text-5xl font-serif mb-6 group-hover:text-accent transition-colors">{work.title}</h3>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">{work.desc}</p>
                <div className="mb-8 border-l-2 border-accent pl-4">
                  <span className="text-xs uppercase tracking-widest font-semibold text-foreground block mb-1">Tech Stack</span>
                  <span className="text-sm text-muted-foreground">{work.tech}</span>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-foreground hover:text-accent transition-colors w-fit">
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
