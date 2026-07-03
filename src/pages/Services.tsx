import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <Layout>
      <Seo
        title="Services — Web Development & Enterprise Consulting"
        description="Custom web & mobile development, e-commerce, UI/UX design, and Virtuo Consulting — enterprise-grade CRM, CDP, and digital transformation strategy."
        path="/services"
      />
      <section className="pt-40 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-6 block">Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight text-balance mb-8">
            Digital Execution.<br />Strategic Clarity.
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            We provide a comprehensive suite of digital services. We build exceptional platforms, and we consult on the systems and strategies that make those platforms successful.
          </p>
        </div>

        {/* Development & Design Services */}
        <div className="mb-32">
          <h2 className="text-3xl font-serif mb-12 border-b border-border pb-4">Design & Development</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="text-2xl font-serif mb-4">Web Development</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Fast, responsive, and SEO-optimized websites built with modern frameworks like React and Next.js. We don't use generic templates; every site is crafted for your brand.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">Mobile App Development</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Native-feeling cross-platform mobile applications that put your business in the pockets of your customers with seamless performance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">E-commerce Solutions</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Robust, secure, and high-converting digital storefronts complete with payment gateway integrations, inventory management, and tailored shopping experiences.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">UI/UX Design</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Frictionless, beautiful interfaces backed by thoughtful user research. We design experiences that users love and trust.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif mb-4">Custom Systems</h3>
              <p className="text-muted-foreground font-light leading-relaxed max-w-3xl">
                Need something specific? We architect and build complex bespoke systems including booking engines, admin dashboards, internal portals, and API integrations tailored exactly to your operational needs.
              </p>
            </div>
          </div>
        </div>

        {/* Consulting Offering */}
        <div className="bg-secondary/40 border border-accent/20 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 inline-block">Enterprise Strategy</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Virtuo Consulting</h2>
            <p className="text-xl font-light text-muted-foreground mb-10 max-w-2xl">
              "Enterprise Thinking, Applied to Your Business."
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="text-muted-foreground font-light leading-relaxed">
                <p className="mb-4">
                  Not every problem is a build problem. Sometimes what's needed first is clarity on process, systems, and where the operational friction actually lies.
                </p>
                <p>
                  Led by Thabo Mithi's 9+ years of experience delivering multi-market transformation programs for retail, telecom, healthcare, and manufacturing giants across Europe and Africa.
                </p>
              </div>
              
              <div>
                <h4 className="font-serif text-lg mb-4 text-foreground">We help with:</h4>
                <ul className="space-y-3 text-muted-foreground font-light text-sm">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Requirements Elicitation & Business Process Analysis</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" /> CRM & Customer Data Platform (CDP) Strategy</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Customer Journey Mapping</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Stakeholder Workshops & Solution Design</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" /> UAT Planning & Change Management</li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Business Case Development</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-border">
              <Link href="/contact" className="bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-accent/90 transition-colors">
                Book a Consultation
              </Link>
              <span className="text-sm text-muted-foreground">Engagements scoped as day-rate or custom retainer.</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
