export const websitePackages = [
  { name: 'Starter', price: 'R12,500', desc: 'A professional website for a focused business presence.', features: ['Up to 5 Pages', 'Mobile Responsive Design', 'Contact Form Integration', 'On-Page SEO Optimisation', 'Performance & Core Web Vitals', '2-Week Delivery Timeline'], popular: false },
  { name: 'Professional', price: 'R28,500', desc: 'Custom design and more room for a growing business.', features: ['Up to 12 Pages', 'Fully Custom UI/UX (Zero Templates)', 'Advanced Technical SEO', 'WhatsApp & Live Chat Integration', 'CMS Setup (Content Management)', 'AI Chatbot Integration', 'Analytics Dashboard', '3-Week Delivery Timeline'], popular: true },
  { name: 'Enterprise', price: 'R65,000+', desc: 'Custom applications and online stores, scoped around your requirements.', features: ['Unlimited Pages & Screens', 'Full E-Commerce / Web Application', 'Payment Gateway (Multi-Currency)', 'User Authentication & Roles', 'Custom Admin Dashboard', 'API Integrations & Microservices', 'AI/ML Feature Integration', '4–8 Week Delivery Timeline'], popular: false },
] as const;
export function enquiryHref(brief: string, plan = '') { return `/contact?${new URLSearchParams({ brief, plan })}`; }
export function whatsappHref(brief: string) { return `https://wa.me/27697714283?text=${encodeURIComponent(brief)}`; }
