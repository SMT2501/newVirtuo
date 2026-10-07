import { FeaturedProjectPreview } from "@/components/FeaturedProjectPreview";
import { CheckupTrigger } from "@/components/DigitalCheckup";
import { PartnersStrip } from "@/components/PartnersStrip";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <Seo
        title="World-Class Web Development & AI Consulting | Cape Town"
        description="Virtuo Designs builds bespoke websites, apps, and e-commerce platforms, backed by AI integration, CRM strategy, and digital transformation consulting. Cape Town — clients globally."
        path="/"
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img src="/images/virtuo-hero.webp" alt="" width={1600} height={873} loading="eager" decoding="async" className="w-full h-full object-cover object-center opacity-40 scale-105" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
        </div>
      <section className="home-hero relative flex items-center px-4 md:px-12">
        <div className="home-hero-grid relative z-10 max-w-6xl mx-auto w-full">
          <div className="home-hero-content">
          <h1 className="home-hero-heading font-serif tracking-[-0.03em] text-foreground">
            <span>Websites and Digital </span> 
            <span> Systems </span>
            <span>That Move Organisations </span>  
            <span> Forward.</span>
          </h1>
          <p className="home-hero-description max-w-2xl text-foreground/85">
            We build websites, application portals, e-commerce platforms and workflow automation for businesses and institutions.
          </p>
          <p className="home-hero-experience text-foreground/80">Experience working with PASA, WITS and DUT.</p>
          <div className="home-hero-actions">
            <CheckupTrigger className="bg-primary text-primary-foreground px-3 sm:px-6 min-h-11 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">
              Find My Solution <ArrowRight aria-hidden="true" className="w-4 h-4 hidden sm:block" />
            </CheckupTrigger>
            <Link href="/contact" className="border border-border bg-background/60 px-3 sm:px-6 min-h-11 py-3 rounded-full text-sm font-semibold hover:bg-secondary inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">Start Your Project</Link>
          </div>
          </div>
          <div className="hero-project-desktop"><FeaturedProjectPreview titleId="featured-project-desktop-title" /></div>
        </div>
      </section>
      <section aria-label="Featured project" className="hero-project-mobile relative z-10 px-4 py-8"><div className="max-w-xl mx-auto"><FeaturedProjectPreview titleId="featured-project-mobile-title" /></div></section>
      </div>
      <section aria-label="Studio experience" className="border-y border-border bg-secondary/30 px-4 md:px-12 py-7">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div><p className="text-2xl font-serif">50+</p><p className="text-xs text-muted-foreground uppercase tracking-wide">Projects Delivered</p></div>
          <div><p className="text-2xl font-serif">98%</p><p className="text-xs text-muted-foreground uppercase tracking-wide">Client Satisfaction</p></div>
          <div><p className="text-2xl font-serif">9+ Yrs</p><p className="text-xs text-muted-foreground uppercase tracking-wide">Enterprise Experience</p></div>
          <div><p className="text-2xl font-serif">Global</p><p className="text-xs text-muted-foreground uppercase tracking-wide">Clients Worldwide</p></div>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-32 px-4 md:px-12 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
            We believe technology should help organisations do more for the people they serve.
          </h2>
          <p className="text-lg text-foreground/75 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Your website, people and processes should work together. We start with your goals and requirements, then scope a digital solution that fits the way your organisation operates.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors">
            Our Story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <PartnersStrip />

      {/* Selected Work */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-4">Selected Work</h2>
            <p className="text-muted-foreground text-lg font-light max-w-md">A showcase of our bespoke platforms and strategic engagements.</p>
          </div>
          <Link href="/portfolio" className="shrink-0 border border-border px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-secondary transition-colors">
            View All Work
          </Link>
        </div>

        <div className="space-y-32">
          {/* Work Item 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 group">
            <div className="w-full md:w-3/5 overflow-hidden rounded-lg">
              <div className="aspect-4/3 w-full overflow-hidden bg-muted">
                <img
                  src="/images/virtuo-work-1.webp"
                  alt="Campus Marketplace"
                  width={1200}
                  height={840}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-center">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Web App / Marketplace</span>
              <h3 className="text-4xl font-serif mb-6 group-hover:text-accent transition-colors">Campus Marketplace</h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                A peer-to-peer marketplace connecting university students for buying and selling goods securely on campus. Built with React, Node.js, and MongoDB.
              </p>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-foreground">
                View Details <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Work Item 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20 group">
            <div className="w-full md:w-3/5 overflow-hidden rounded-lg">
              <div className="aspect-4/3 w-full overflow-hidden bg-muted">
                <img
                  src="/images/virtuo-work-2.webp"
                  alt="Umnini Community Trust"
                  width={1200}
                  height={840}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-center">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">Web Design / Non-Profit</span>
              <h3 className="text-4xl font-serif mb-6 group-hover:text-accent transition-colors">Umnini Community Trust</h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                An informational website for a community organization, designed for clarity, accessibility, and strong SEO presence.
              </p>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-foreground">
                View Details <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-32 px-4 md:px-12 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-serif mb-8">Our Expertise</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12">
                We provide end-to-end digital solutions, from crafting beautiful user interfaces to architecting complex business systems and AI integrations.
              </p>
              <Link href="/services" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors inline-block">
                Explore All Services
              </Link>
            </div>
            <div className="flex flex-col gap-8">
              <div className="border-b border-border pb-6">
                <h3 className="text-2xl font-serif mb-3">Custom Web & App Development</h3>
                <p className="text-muted-foreground font-light">Bespoke websites, mobile applications, and comprehensive web platforms — zero templates.</p>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="text-2xl font-serif mb-3">E-Commerce Solutions</h3>
                <p className="text-muted-foreground font-light">Scalable, high-conversion online stores tailored to your business operations.</p>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="text-2xl font-serif mb-3">AI Integration & Consulting</h3>
                <p className="text-muted-foreground font-light">Enterprise-grade AI integration, CRM strategy, and digital transformation led by 9+ years of hands-on experience with Africa's largest organisations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-serif mb-6">How We Work</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            A clear, collaborative process — so you always know what's happening and what comes next.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          {[
            { step: "01", title: "Discovery Call", desc: "Free 30-minute call to understand your goals, audience, and success metrics. No commitment." },
            { step: "02", title: "Proposal & Scope", desc: "We send a clear proposal within 48 hours — fixed price, fixed timeline, zero surprises." },
            { step: "03", title: "Design & Build", desc: "Collaborative execution with regular check-ins and milestone previews throughout the project." },
            { step: "04", title: "Launch & Handover", desc: "We launch, test, and hand over full ownership — with documentation and a training session." },
          ].map((item, i, arr) => (
            <div key={i} className="relative">
              {i < arr.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-border z-0" />
              )}
              <div className="relative z-10">
                <div className="text-5xl font-serif text-muted-foreground/35 font-bold mb-5">{item.step}</div>
                <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-4 md:px-12 text-center max-w-4xl mx-auto">
        <svg className="w-12 h-12 mx-auto text-accent mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <h2 className="text-3xl md:text-4xl font-serif leading-snug mb-10 text-balance">
          "Virtuo Designs transformed our vision into a stunning, functional platform. Their attention to detail and commitment to quality is unmatched."
        </h2>
        <div className="uppercase tracking-widest text-sm font-semibold text-foreground">Sarah M.</div>
        <div className="text-muted-foreground text-sm mt-1">Founder, StartupHub</div>
      </section>
    </Layout>
  );
}
