import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";

const sections = [
  {
    title: "1. Who We Are",
    content: `Virtuo Designs (Pty) Ltd ("Virtuo", "we", "us", "our") is a web development and digital consulting studio based in Cape Town, South Africa. Our website is https://virtuodesigns.co.za.

For any privacy-related queries, contact us at: hello@virtuodesigns.co.za`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect the following personal information only when you voluntarily provide it:

• Name and surname
• Email address
• Phone number / WhatsApp number
• Company name
• Project description and budget range (submitted via our contact form)

We do not collect sensitive personal information as defined under POPIA. We do not use tracking cookies beyond standard analytics.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your personal information solely to:

• Respond to your enquiry or project request
• Send you a project proposal or quotation
• Communicate with you about an active project
• Improve our services

We do not use your information for unsolicited marketing without your consent, and we never sell, rent, or trade your personal data to any third party.`,
  },
  {
    title: "4. Legal Basis for Processing (POPIA)",
    content: `We process your personal information under the following lawful grounds as set out in the Protection of Personal Information Act 4 of 2013 (POPIA):

• Consent: You have given us consent by voluntarily submitting our contact form.
• Legitimate interest: We have a legitimate interest in responding to business enquiries.
• Contractual necessity: Where we have an active client relationship.`,
  },
  {
    title: "5. Data Storage & Security",
    content: `Your enquiry data is transmitted securely via Formspree (formspree.io), an industry-standard form submission service. We take reasonable technical and organisational steps to protect your personal information from unauthorised access, loss, or disclosure.

We retain your contact information only for as long as necessary to fulfil the purpose for which it was collected, or as required by law.`,
  },
  {
    title: "6. Third-Party Services",
    content: `We use the following third-party services that may process your data:

• Formspree — for contact form submission processing
• Google Fonts — for typography (no personal data collected)
• Vercel / hosting provider — for website serving

Each of these providers has their own privacy policies. We encourage you to review them.`,
  },
  {
    title: "7. Your Rights Under POPIA",
    content: `Under the Protection of Personal Information Act (POPIA), you have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate personal information
• Request deletion of your personal information
• Object to the processing of your personal information
• Lodge a complaint with the Information Regulator of South Africa

To exercise any of these rights, contact us at hello@virtuodesigns.co.za. We will respond within 30 days.`,
  },
  {
    title: "8. Cookies",
    content: `Our website does not use advertising or tracking cookies. We may use essential cookies for basic website functionality. No personal data is stored in cookies on this site.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our services are not directed at children under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted personal information to us, please contact us immediately.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page will reflect any changes. We encourage you to review this policy periodically.`,
  },
  {
    title: "11. Contact Us",
    content: `For any questions, concerns, or requests relating to this Privacy Policy or your personal information:

Email: hello@virtuodesigns.co.za
WhatsApp: +27 69 771 4283
Address: Cape Town, Western Cape, South Africa

Information Regulator of South Africa (for complaints):
Website: www.inforegulator.org.za
Email: inforeg@justice.gov.za`,
  },
];

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Seo
        title="Privacy Policy — POPIA Compliant"
        description="Virtuo Designs privacy policy. Learn how we collect, use, and protect your personal information in compliance with South Africa's Protection of Personal Information Act (POPIA)."
        path="/privacy-policy"
      />
      <section className="pt-40 pb-24 px-4 md:px-12 max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-6 block">Legal</span>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground font-light">
            Last updated: <strong className="text-foreground">2 July 2026</strong>
          </p>
          <p className="text-muted-foreground font-light mt-3 leading-relaxed">
            This Privacy Policy explains how Virtuo Designs collects, uses, and protects your personal information in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA) and applicable data protection laws.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="border-t border-border pt-8">
              <h2 className="text-xl font-serif mb-4">{s.title}</h2>
              <div className="text-muted-foreground font-light leading-relaxed text-sm whitespace-pre-line">
                {s.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
