import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/maqglovl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(
          json?.errors?.[0]?.message ?? "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <Layout>
      <Seo
        title="Contact Us — Start Your Project"
        description="Get in touch with Virtuo Designs for web development, e-commerce, or enterprise consulting projects. Cape Town based, available for remote engagements globally."
        path="/contact"
        keywords="contact web developer Cape Town, hire web designer South Africa, web development quote, AI consulting enquiry"
      />
      <section className="pt-40 pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">

          {/* Left — info */}
          <div>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Let's Build.
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
              Have a project in mind? Looking for strategic guidance? We'd love to hear from you. We pride ourselves on strong communication and rapid response times — typically within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-border">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase mb-1">Email</h4>
                  <a href="mailto:hello@virtuodesigns.co.za" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                    hello@virtuodesigns.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-border">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+27697714283" className="text-lg text-muted-foreground hover:text-foreground transition-colors block">
                    +27 69 771 4283
                  </a>
                  <div className="mt-2">
                    <a
                      href="https://wa.me/27697714283?text=Hi%20Virtuo%20Designs%2C%20I%27d%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#25D366]/20 text-[#25D366] px-4 py-2 rounded text-sm font-medium hover:bg-[#25D366]/30 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-border">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-widest uppercase mb-1">Location</h4>
                  <p className="text-lg text-muted-foreground">Firlands Minor Rd,</p>
                  <p className="text-lg text-muted-foreground">Admirals Park, Cape Town, 7135</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Available for remote engagements globally.</p>
                </div>
              </div>
            </div>

            {/* Response time note */}
            <div className="mt-12 p-5 rounded-xl border border-border bg-secondary/30 text-sm text-muted-foreground font-light leading-relaxed">
              <span className="font-semibold text-foreground">Typical response time:</span> within 24 hours on business days.
              For urgent enquiries, WhatsApp is the fastest way to reach us.
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-secondary/30 p-8 md:p-12 rounded-2xl border border-border h-fit">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
                <CheckCircle className="w-16 h-16 text-accent" />
                <h3 className="text-3xl font-serif">Message Received!</h3>
                <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
                  Thank you for reaching out. We'll review your enquiry and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif mb-6">Send an Enquiry</h3>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="name">Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-foreground transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="company">Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-foreground transition-colors"
                        placeholder="Acme Inc"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-foreground transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="phone">Phone / WhatsApp</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-foreground transition-colors"
                        placeholder="+27 82 000 0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="service">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-foreground appearance-none cursor-pointer transition-colors"
                    >
                      <option>Custom Website Design &amp; Development</option>
                      <option>Web Application Development</option>
                      <option>E-Commerce Solution</option>
                      <option>AI Integration Consulting</option>
                      <option>CRM Strategy &amp; Implementation</option>
                      <option>AI-Powered Marketing</option>
                      <option>Digital Transformation Consulting</option>
                      <option>Other / General Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="budget">Estimated Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-foreground appearance-none cursor-pointer transition-colors"
                    >
                      <option>Under R12,500</option>
                      <option>R12,500 – R28,500</option>
                      <option>R28,500 – R65,000</option>
                      <option>R65,000+</option>
                      <option>To be discussed</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="message">Tell Us About Your Project *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-foreground resize-none transition-colors"
                      placeholder="Describe your project, goals, and any specific requirements..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground/60 text-center font-light">
                    By submitting this form you agree to our privacy policy. We never share your data.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </section>
    </Layout>
  );
}
