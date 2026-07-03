import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Link } from "wouter";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "Working With Us",
    questions: [
      {
        q: "How do we get started?",
        a: "Simply fill in our contact form or WhatsApp us directly. We'll schedule a free 30-minute discovery call to understand your goals, budget, and timeline. From there we put together a tailored proposal — usually within 48 hours.",
      },
      {
        q: "Do you work with clients outside South Africa?",
        a: "Absolutely. We work with clients globally. All our processes are remote-friendly — we use video calls, shared workspaces, and async communication tools. Time zones have never been a barrier.",
      },
      {
        q: "What information do you need to give me a quote?",
        a: "The more context, the better — but at minimum we need to know: what kind of site or app you need, any design preferences or references, your target launch date, and an approximate budget range. You can share all of this in our contact form.",
      },
      {
        q: "How long does a project take?",
        a: "Timelines vary by scope. A Starter website typically takes 2 weeks. A Professional site with custom UI and integrations takes 3 weeks. Enterprise web applications and e-commerce platforms range from 4–8 weeks. We'll always give you a fixed timeline in the proposal.",
      },
      {
        q: "Do you only build websites, or do you do apps too?",
        a: "Both. We build marketing websites, web applications, e-commerce platforms, internal dashboards, and mobile-first apps. If it runs in a browser or on a phone, we can build it.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        q: "What does a website cost?",
        a: "Our Starter plan begins at R12,500 for a polished 5-page website. Professional sites with custom UI, CMS, and integrations start at R28,500. Enterprise web applications start at R65,000. Full details are on our Pricing page.",
      },
      {
        q: "How do payments work?",
        a: "We typically work on a 50% deposit upfront, with the remaining 50% due on final delivery. For longer enterprise projects, we structure milestone-based payments. We accept EFT and all major payment methods.",
      },
      {
        q: "Are there ongoing costs after the site is launched?",
        a: "The project cost covers design, development, and launch. Ongoing costs you'd handle separately include domain registration (usually ~R200/year), hosting (varies), and any third-party services you choose to use. We can recommend cost-effective options for your scale.",
      },
      {
        q: "Do you offer payment plans?",
        a: "For projects above R28,500, we can structure milestone-based payments to spread the cost across the project timeline. Reach out to discuss what works for you.",
      },
    ],
  },
  {
    category: "After Launch",
    questions: [
      {
        q: "What happens after the site goes live?",
        a: "We do a thorough QA pass and hand over all assets, credentials, and documentation. We offer a 14-day post-launch support window for any bugs or adjustments at no extra charge. Beyond that, we offer ongoing maintenance retainers if you'd like us to manage updates.",
      },
      {
        q: "Can I update my website myself after it's built?",
        a: "Yes — for any site where we set up a CMS (like Sanity or a headless CMS), you'll be able to update content, add blog posts, and manage pages without touching code. We include a training session as part of delivery.",
      },
      {
        q: "Do you offer hosting?",
        a: "We don't resell hosting directly, but we advise on and set up hosting on platforms suited to your project — such as Vercel, Netlify, or cloud providers. We make sure you own and control your own infrastructure.",
      },
    ],
  },
  {
    category: "AI & Consulting",
    questions: [
      {
        q: "What does AI integration consulting actually involve?",
        a: "We start with an AI readiness audit of your business — identifying where AI can save time, reduce cost, or unlock revenue. Then we design and implement the right solutions: this could be a custom AI chatbot, an LLM integrated into your product, intelligent automation of workflows, or AI-powered analytics. We deliver working implementations, not just reports.",
      },
      {
        q: "We already have a CRM — can you still help?",
        a: "Definitely. Whether you're on HubSpot, Salesforce, Zoho, or a custom system, we can audit how it's configured, identify gaps, improve your pipeline, and connect it to the rest of your marketing and sales stack. A CRM audit often reveals significant untapped value.",
      },
      {
        q: "How does consulting pricing work?",
        a: "Consulting is available as a day-rate engagement (R4,500/day), a monthly sprint retainer (R18,000/month), or a fully custom scoped engagement for complex transformation programmes. We scope each engagement honestly — you'll never pay for time you don't need.",
      },
      {
        q: "Is the consulting only for big companies?",
        a: "Not at all. While Thabo's enterprise background includes work with Shoprite, Sasol, and MTN, the consulting is deliberately packaged for growing businesses — startups, SMEs, and scale-ups that want enterprise-thinking applied to their size and budget.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-medium leading-snug group-hover:text-accent transition-colors">{q}</span>
        <span className="shrink-0 mt-0.5 text-muted-foreground">
          {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      {open && (
        <p className="pb-6 text-muted-foreground font-light leading-relaxed text-sm pr-8">
          {a}
        </p>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <Layout>
      <Seo
        title="FAQ — Frequently Asked Questions"
        description="Answers to common questions about working with Virtuo Designs — pricing, timelines, payment, post-launch support, AI consulting, and CRM services."
        path="/faq"
        keywords="web development FAQ South Africa, website cost questions, how to hire web developer, AI consulting questions, CRM consultant FAQ"
      />
      <section className="pt-40 pb-24 px-4 md:px-12 max-w-4xl mx-auto">
        <div className="mb-20">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-6 block">FAQ</span>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
            Questions, Answered.
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Everything you need to know before reaching out. Can't find your answer?{" "}
            <Link href="/contact" className="text-accent hover:underline underline-offset-4">
              Ask us directly.
            </Link>
          </p>
        </div>

        <div className="space-y-16">
          {faqs.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-2xl font-serif mb-6 pb-4 border-b border-border">{cat.category}</h2>
              <div>
                {cat.questions.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 p-10 md:p-14 bg-primary text-primary-foreground rounded-3xl text-center">
          <h2 className="text-3xl font-serif mb-4">Still have questions?</h2>
          <p className="opacity-80 font-light mb-8 max-w-lg mx-auto">
            We're happy to chat. Send us a message or jump straight onto a free discovery call.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-background text-foreground px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform">
              Send a Message
            </Link>
            <a
              href="https://calendly.com/virtuodesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
