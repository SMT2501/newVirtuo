import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 text-center">
      {/* Large 404 */}
      <div className="text-[clamp(8rem,20vw,16rem)] font-serif leading-none text-foreground/5 select-none mb-0 -mb-8 md:-mb-12">
        404
      </div>

      <div className="relative z-10 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
          The page you're looking for doesn't exist or may have moved. Let's get you somewhere useful.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border border-border px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-secondary transition-colors flex items-center gap-2"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {[
            { href: "/services", label: "Services" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/consultations", label: "Consulting" },
            { href: "/pricing", label: "Pricing" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
