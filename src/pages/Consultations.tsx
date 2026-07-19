import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { ArrowUpRight, Bot, Database, Megaphone, CheckCircle2, Zap, BarChart3, Users, Target } from "lucide-react";

const services = [
  {
    icon: Bot,
    label: "AI Integration",
    title: "AI Integration Consulting",
    tagline: "Transform your business with intelligent automation.",
    description:
      "We audit your existing workflows and architect AI solutions that actually deliver ROI — not just hype. From large language model integrations to intelligent document processing, computer vision pipelines, and custom AI agents, we embed intelligence where it matters most.",
    outcomes: [
      "AI readiness audit & opportunity mapping",
      "LLM & GPT integration into existing products",
      "Intelligent automation of repetitive workflows",
      "Custom AI agents & chatbots for customer ops",
      "AI-powered data analysis & reporting",
      "Staff training & AI adoption frameworks",
    ],
    accent: "from-violet-500/10 to-indigo-500/5",
    border: "border-violet-500/20",
    iconColor: "text-violet-500",
  },
  {
    icon: Database,
    label: "CRM Consulting",
    title: "CRM Strategy & Implementation",
    tagline: "Your customer data is your most valuable asset. We unlock it.",
    description:
      "A CRM done right turns scattered customer touchpoints into a unified growth engine. We advise on platform selection, architect your data model, lead implementation, and ensure your team actually uses the system — turning your CRM into a competitive advantage.",
    outcomes: [
      "CRM platform selection (HubSpot, Salesforce, Zoho & more)",
      "Customer data architecture & migration",
      "Sales pipeline design & automation",
      "Customer journey mapping & segmentation",
      "CRM-to-marketing stack integration",
      "Team onboarding & change management",
    ],
    accent: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-500",
  },
  {
    icon: Megaphone,
    label: "Marketing with AI",
    title: "AI-Powered Marketing",
    tagline: "Outrank, outperform, and out-convert — with AI as your edge.",
    description:
      "We build AI-driven marketing systems that generate leads while you sleep. From SEO strategies that make search engines and AI assistants recommend you first, to personalised content engines, predictive audience targeting, and conversion-rate optimisation — we turn marketing into a measurable growth machine.",
    outcomes: [
      "AI-first SEO strategy (Google + AI search engines)",
      "Automated content generation & personalisation",
      "Predictive audience segmentation & targeting",
      "AI-driven ad creative testing & optimisation",
      "Email & WhatsApp marketing automation",
      "Analytics dashboards & attribution modelling",
    ],
    accent: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-500/20",
    iconColor: "text-orange-500",
  },
];

const stats = [
  { value: "3×", label: "Average ROI on AI integrations" },
  { value: "60%", label: "Reduction in manual workflows" },
  { value: "9+ Yrs", label: "Enterprise consulting experience" },
  { value: "Global", label: "Clients across 4 continents" },
];

const process = [
  { step: "01", title: "Discovery", desc: "We deep-dive into your business, goals, and existing technology to map your transformation opportunity." },
  { step: "02", title: "Strategy", desc: "We design a precise roadmap — prioritised by impact, scoped by your budget, and grounded in what's buildable." },
  { step: "03", title: "Implementation", desc: "We execute alongside your team, delivering working solutions — not just slide decks." },
  { step: "04", title: "Measure & Scale", desc: "We track outcomes against KPIs, refine, and scale what's working so gains compound over time." },
];

export default function Consultations() {
  return (
    <Layout>
      <Seo
        title="AI & Business Consulting — AI Integration, CRM Strategy, Marketing with AI"
        description="Virtuo Designs offers world-class AI integration consulting, CRM strategy, and AI-powered marketing. Transform your business with intelligent automation. Available globally from Cape Town, South Africa."
        path="/consultations"
        keywords="AI integration consulting, CRM consulting, AI marketing strategy, business AI transformation, HubSpot CRM consultant, AI automation, digital transformation consulting South Africa"
      />

      {/* Hero */}
      <section className="pt-44 pb-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-6">Virtuo Consulting</span>
          <h1 className="text-5xl md:text-7xl font-serif leading-tight text-balance mb-8">
            Intelligence-Led<br />Business Transformation.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mb-12">
            We help ambitious businesses integrate AI, optimise their customer data, and build marketing systems that generate leads around the clock — globally.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform inline-flex items-center gap-2">
              Book a Strategy Session <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/pricing" className="border border-border px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-secondary transition-colors">
              View Consulting Rates
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-12 border-y border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">{s.value}</div>
              <div className="text-sm text-muted-foreground font-light">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-28 px-4 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Our Consulting Services</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Three disciplines. One outcome: a business that outperforms its competitors through intelligent technology.
          </p>
        </div>

        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <div key={i} className={`rounded-3xl border ${svc.border} bg-gradient-to-br ${svc.accent} p-8 md:p-14`}>
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-[45%]">
                  <div className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-6 ${svc.iconColor}`}>
                    <Icon className="w-5 h-5" />
                    {svc.label}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-4">{svc.title}</h3>
                  <p className="text-accent font-medium mb-6 italic">{svc.tagline}</p>
                  <p className="text-muted-foreground font-light leading-relaxed text-lg">
                    {svc.description}
                  </p>
                </div>
                <div className="md:w-[55%]">
                  <h4 className="text-xs font-bold tracking-widest uppercase text-foreground mb-6">What You Get</h4>
                  <ul className="space-y-4">
                    {svc.outcomes.map((o, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${svc.iconColor}`} />
                        <span className="text-muted-foreground font-light">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Why AI Now */}
      <section className="py-24 px-4 md:px-12 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Why AI. Why Now.</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              AI is no longer a future consideration — it is the present competitive divide. Businesses that integrate AI today will dominate their markets in 36 months. Those that don't will find themselves irrelevant.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Speed to Market", desc: "AI-assisted development and automation compress months of work into weeks. Your competitors are already moving — you need to move faster." },
              { icon: BarChart3, title: "Data-Driven Decisions", desc: "Replace gut-feel with predictive intelligence. AI turns your customer data into a strategic asset that guides every decision." },
              { icon: Target, title: "Hyper-Personalisation", desc: "Customers expect personalised experiences at scale. AI makes this possible without a proportional increase in cost or headcount." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8 rounded-2xl border border-border bg-background">
                  <Icon className="w-8 h-8 text-accent mb-6" />
                  <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-6">How We Work</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            A rigorous, no-fluff engagement model — built for businesses that want results, not reports.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((p, i) => (
            <div key={i} className="relative">
              {i < process.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-y-1/2 z-0" />
              )}
              <div className="relative z-10">
                <div className="text-5xl font-serif text-muted-foreground/30 font-bold mb-4">{p.step}</div>
                <h3 className="text-xl font-serif mb-3">{p.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="bg-primary text-primary-foreground p-10 md:p-20 rounded-3xl text-center">
          <Users className="w-12 h-12 mx-auto mb-8 opacity-60" />
          <h2 className="text-4xl md:text-6xl font-serif mb-6 max-w-3xl mx-auto">
            Ready to Build an AI-Powered Business?
          </h2>
          <p className="text-lg opacity-80 font-light max-w-2xl mx-auto mb-10">
            Book a free 30-minute discovery call with Thabo Mithi, our Head of Consulting. We'll identify your three biggest AI opportunities — no commitment required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://calendly.com/samkelemthuli51/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background text-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              Book Free Discovery Call <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link href="/pricing" className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-colors">
              View Consulting Rates
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
