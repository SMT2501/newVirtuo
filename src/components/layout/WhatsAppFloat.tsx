import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, Mail, CalendarDays } from "lucide-react";

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Contact card */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop (click-away) */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed bottom-24 right-6 z-50 w-72 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <div>
                  <p className="font-semibold text-sm text-foreground">Get in touch</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Choose how you'd like to connect</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close contact card"
                  className="w-7 h-7 rounded-full hover:bg-secondary flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Options */}
              <div className="p-3 space-y-2">
                {/* Book a call */}
                <a
                  href="https://calendly.com/samkelemthuli51/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <CalendarDays className="w-5 h-5 text-accent" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Book a call</p>
                    <p className="text-[11px] text-muted-foreground">Free 30-min strategy session</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/27697714283?text=Hi%20Virtuo%20Designs%2C%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                    <p className="text-[11px] text-muted-foreground">Chat with us directly</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@virtuodesigns.co.za"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-foreground" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email us</p>
                    <p className="text-[11px] text-muted-foreground">hello@virtuodesigns.co.za</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact us"
        className="fixed bottom-24 right-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-accent opacity-20 animate-ping [animation-delay:0.8s]" />
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:scale-110 transition-transform duration-200"
        >
          {open ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
        </motion.span>
        {!open && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Contact us
          </span>
        )}
      </button>
    </>
  );
}
