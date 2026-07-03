import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "R12,500",
      desc: "A powerful, professional digital presence built to convert — for businesses entering the digital arena.",
      features: [
        "Up to 5 Pages",
        "Mobile Responsive Design",
        "Contact Form Integration",
        "On-Page SEO Optimisation",
        "Performance & Core Web Vitals",
        "2-Week Delivery Timeline",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "R28,500",
      desc: "Our flagship tier — custom-crafted design, advanced capabilities, and the digital edge that serious businesses demand.",
      features: [
        "Up to 12 Pages",
        "Fully Custom UI/UX (Zero Templates)",
        "Advanced Technical SEO",
        "WhatsApp & Live Chat Integration",
        "CMS Setup (Content Management)",
        "AI Chatbot Integration",
        "Analytics Dashboard",
        "3-Week Delivery Timeline",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "R65,000+",
      desc: "End-to-end web applications, platforms, and e-commerce ecosystems built to operate at global scale.",
      features: [
        "Unlimited Pages & Screens",
        "Full E-Commerce / Web Application",
        "Payment Gateway (Multi-Currency)",
        "User Authentication & Roles",
        "Custom Admin Dashboard",
        "API Integrations & Microservices",
        "AI/ML Feature Integration",
        "4–8 Week Delivery Timeline",
      ],
      popular: false,
    },
  ];

  const consultingTiers = [
    { name: "Strategy Day", price: "R4,500", unit: "/ day", desc: "Focused workshops on AI integration, CRM strategy, or digital transformation roadmapping." },
    { name: "Sprint Retainer", price: "R18,000", unit: "/ month", desc: "Ongoing advisory — ideal for businesses in active transformation or growth phases." },
    { name: "Embedded Partner", price: "Custom", unit: "", desc: "Full-cycle strategic partnership. Scoped per engagement for long-term transformation mandates." },
  ];

  return (
    <Layout>
      <Seo
        title="Pricing — Premium Web Development & AI Consulting Plans"
        description="World-class web development and AI consulting at transparent price points. Starter from R12,500, Professional from R28,500, Enterprise from R65,000. No hidden fees — just exceptional results."
        path="/pricing"
        keywords="web development pricing South Africa, website cost Cape Town, AI consulting rates, enterprise web development pricing, CRM consulting South Africa"
      />
      <section className="pt-40 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-serif leading-tight text-balance mb-8">
            Invest in Excellence.
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Premium-tier digital products at transparent, honest price points. No hidden fees, no vendor lock-in — just exceptional results that compound in value over time.
          </p>
        </div>

        {/* Web Development Plans */}
        <div className="mb-8">
          <h2 className="text-center text-sm font-bold tracking-widest uppercase text-muted-foreground mb-12">Web Design & Development</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {plans.map((plan, i) => (
              <div key={i} className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-accent bg-secondary/50' : 'border-border bg-background'} flex flex-col`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm font-light h-14 mb-6">{plan.desc}</p>
                <div className="text-4xl font-serif font-bold mb-8 text-foreground">{plan.price}</div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm font-light text-muted-foreground">
                      <Check className="w-5 h-5 text-accent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className={`w-full text-center py-4 rounded-full text-sm font-semibold tracking-wide transition-colors ${
                  plan.popular
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                    : 'border border-border hover:bg-secondary text-foreground'
                }`}>
                  Select Plan
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Consulting Pricing */}
        <div className="mb-8">
          <h2 className="text-center text-sm font-bold tracking-widest uppercase text-muted-foreground mb-12">AI & Business Consulting</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {consultingTiers.map((tier, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border bg-background flex flex-col">
                <h3 className="text-xl font-serif mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm font-light mb-6 flex-1">{tier.desc}</p>
                <div className="text-3xl font-serif font-bold text-foreground mb-6">
                  {tier.price}<span className="text-base font-sans font-light text-muted-foreground">{tier.unit}</span>
                </div>
                <Link href="/contact" className="w-full text-center py-4 rounded-full text-sm font-semibold tracking-wide border border-border hover:bg-secondary text-foreground transition-colors">
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto bg-primary text-primary-foreground p-10 md:p-16 rounded-3xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-serif mb-4">Not sure which plan fits?</h3>
            <p className="opacity-90 font-light leading-relaxed mb-4">
              Every great project starts with an honest conversation. Tell us your goals, your budget, and your timeline — we'll propose the right solution with no obligation.
            </p>
            <p className="text-sm opacity-70 font-light">Custom scoping available for all projects above R65,000.</p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/contact" className="block w-full md:w-auto text-center bg-background text-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform">
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
