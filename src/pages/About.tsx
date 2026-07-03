import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { ArrowUpRight, Linkedin } from "lucide-react";

const founders = [
  {
    name: "Samkele Mthuli",
    title: "Co-Founder & Lead Developer",
    initials: "SM",
    bio: "Computer Science student, web developer, and tech entrepreneur based in Cape Town. Virtuo grew out of Samkele's experience building Campus Marketplace — a real platform solving a real student need at the University of the Western Cape. He leads all technical architecture and product development.",
    expertise: ["React / Next.js", "Node.js & APIs", "UI/UX Design", "Web Applications"],
    linkedin: "https://www.linkedin.com/in/samkele-mthuli", // update with real URL
    // photo: "/images/samkele.webp", // uncomment and add photo to public/images/
  },
  {
    name: "Thabo Mithi",
    title: "Co-Founder & Head of Consulting",
    initials: "TM",
    bio: "9+ years of enterprise CRM, CDP, and digital transformation experience across Europe and Africa. Thabo has delivered multi-market transformation programmes for Shoprite, Sasol, Mediclinic, and MTN. He leads all strategic consulting engagements at Virtuo.",
    expertise: ["CRM & CDP Strategy", "Digital Transformation", "AI Integration", "Business Analysis"],
    linkedin: "https://www.linkedin.com/in/thabo-mithi", // update with real URL
    // photo: "/images/thabo.webp", // uncomment and add photo to public/images/
  },
];

const brands = ["Shoprite", "Sasol", "Mediclinic", "MTN"];

export default function About() {
  return (
    <Layout>
      <Seo
        title="About Us — Our Story & Founders"
        description="Meet Samkele Mthuli and Thabo Mithi, the founders of Virtuo Designs — combining scrappy builder hustle with 9+ years of enterprise digital transformation experience at Shoprite, Sasol, MTN and Mediclinic."
        path="/about"
        keywords="Virtuo Designs founders, Samkele Mthuli, Thabo Mithi, web development team Cape Town, digital transformation consultants South Africa"
      />
      <section className="pt-40 pb-20 px-4 md:px-12 max-w-7xl mx-auto">

        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-6 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight text-balance mb-8">
            Mission-Focused.<br />Innovation First.
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Virtuo Designs was born from a passion for building digital solutions that solve real-world problems. Today, we bridge the gap between scrappy builder hustle and enterprise-grade strategy.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="mb-32">
          <h2 className="text-3xl font-serif mb-12">The Founders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((f) => (
              <div key={f.name} className="p-8 md:p-10 rounded-2xl border border-border bg-secondary/30 flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  {/* Photo placeholder — replace src below with real photo when ready */}
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-serif font-bold shrink-0 border-2 border-border">
                    {f.initials}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif">{f.name}</h3>
                    <p className="text-accent text-sm font-semibold tracking-wide">{f.title}</p>
                  </div>
                </div>

                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  {f.bio}
                </p>

                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-3">Areas of Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {f.expertise.map((tag) => (
                      <span key={tag} className="text-xs bg-secondary border border-border px-3 py-1 rounded-full text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors w-fit border border-border px-4 py-2 rounded-full hover:border-accent"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Trust */}
        <div className="mb-32 py-16 border-y border-border">
          <p className="text-center text-xs font-bold tracking-widest uppercase text-muted-foreground mb-10">
            Our team has delivered transformation for
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6">
            {brands.map((brand) => (
              <span key={brand} className="text-2xl md:text-3xl font-serif font-semibold text-foreground/20 hover:text-foreground/50 transition-colors tracking-wide">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { title: "Mission-Focused", desc: "We build with purpose, aligning every technical decision with business objectives." },
              { title: "Innovation First", desc: "Leveraging modern tech stacks to deliver fast, scalable, and future-proof platforms." },
              { title: "Client-Centric", desc: "Transparent communication and a true partnership approach to every engagement." },
              { title: "Proven Track Record", desc: "Delivering excellence consistently across both SMB and enterprise landscapes." },
            ].map((v) => (
              <div key={v.title} className="p-8 bg-secondary/50 rounded-xl border border-border">
                <h3 className="text-xl font-serif mb-4">{v.title}</h3>
                <p className="text-muted-foreground text-sm font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-20 bg-primary text-primary-foreground rounded-2xl px-6">
          <h2 className="text-4xl font-serif mb-6">Ready to partner with us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Whether you need a bespoke platform built from scratch, or strategic clarity on your digital transformation roadmap.
          </p>
          <Link href="/contact" className="bg-background text-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform inline-block">
            Get in Touch
          </Link>
        </div>

      </section>
    </Layout>
  );
}
