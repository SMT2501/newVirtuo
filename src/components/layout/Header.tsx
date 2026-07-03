import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/consultations", label: "Consulting" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header className="fixed top-3 left-3 right-3 md:top-5 md:left-6 md:right-6 z-50">
      <div
        className={`relative mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-b from-background/60 via-background/45 to-background/30 backdrop-blur-lg border border-border/60 shadow-sm py-3"
            : "bg-gradient-to-b from-background/40 via-background/20 to-transparent backdrop-blur-sm border border-border/20 py-4"
        }`}
      >
        <div className="px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/images/logo.webp" alt="Virtuo Designs" width={32} height={32} className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="font-serif text-xl md:text-2xl tracking-tight uppercase font-semibold">Virtuo</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent ${
                  location === link.href ? "text-accent" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform duration-300"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-xl overflow-hidden">
            <nav className="flex flex-col py-4 px-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium tracking-wide uppercase p-2 ${
                    location === link.href ? "text-accent" : "text-foreground/80"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground text-center px-6 py-3 mt-2 rounded-full text-sm font-semibold tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Project
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
