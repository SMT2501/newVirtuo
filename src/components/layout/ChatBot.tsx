import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowUpRight } from "lucide-react";
import { useLocation } from "wouter";

// ─── Conversation tree ────────────────────────────────────────────────────────

interface Option {
  label: string;
  next: string;
  /** Optional: open a URL instead of advancing the tree */
  href?: string;
  /** If true, open href in the same tab (navigate) */
  navigate?: boolean;
}

interface Step {
  id: string;
  messages: string[];
  options?: Option[];
}

const STEPS: Record<string, Step> = {
  start: {
    id: "start",
    messages: ["Hi there 👋 I'm Virtuo's assistant.", "What can I help you with today?"],
    options: [
      { label: "🛠 What services do you offer?", next: "services" },
      { label: "💰 How much does a project cost?", next: "pricing" },
      { label: "🎨 See our past work", next: "portfolio" },
      { label: "🚀 Start a project", next: "start_project" },
      { label: "📞 Contact the team", next: "contact" },
    ],
  },
  services: {
    id: "services",
    messages: [
      "We build digital products end-to-end. Our core services are:",
      "• Bespoke websites & landing pages\n• Web apps & marketplaces\n• E-commerce stores\n• AI & automation solutions\n• Brand identity & design\n• Enterprise consulting",
    ],
    options: [
      { label: "💰 Pricing & budgets", next: "pricing" },
      { label: "🎨 See examples", next: "portfolio" },
      { label: "🚀 Start a project", next: "start_project" },
      { label: "↩ Back", next: "start" },
    ],
  },
  pricing: {
    id: "pricing",
    messages: [
      "Every project is scoped individually, but here's a rough guide:",
      "• Informational site — from R5,000\n• Service / booking site — from R12,000\n• Web app or platform — from R25,000\n• Enterprise / custom — let's talk",
      "We'll give you a detailed quote after a free 30-min consultation.",
    ],
    options: [
      { label: "📅 Book a free consultation", next: "book" },
      { label: "💬 WhatsApp us now", next: "whatsapp" },
      { label: "↩ Back", next: "start" },
    ],
  },
  portfolio: {
    id: "portfolio",
    messages: [
      "Here's a taste of what we've built:",
      "• MJP Security — armed response brand & website\n• Campus Marketplace — student P2P platform\n• Umnini Community Trust — non-profit site\n• Pro Cleaning & Hygiene — service booking site\n• Siphulathuthu Engineering — corporate tech site",
      "Check the full portfolio for case studies and live links.",
    ],
    options: [
      { label: "🔗 View full portfolio", next: "go_portfolio", navigate: true, href: "/portfolio" },
      { label: "🚀 Start your project", next: "start_project" },
      { label: "↩ Back", next: "start" },
    ],
  },
  go_portfolio: {
    id: "go_portfolio",
    messages: ["Opening the portfolio for you now ✨"],
    options: [{ label: "🚀 Start a project", next: "start_project" }],
  },
  start_project: {
    id: "start_project",
    messages: [
      "Great — let's build something.",
      "The best first step is a free 30-minute consultation where we scope your idea and give you a ballpark cost.",
    ],
    options: [
      { label: "📅 Book a consultation", next: "book" },
      { label: "💬 Chat on WhatsApp", next: "whatsapp" },
      { label: "✉️ Send an email", next: "email" },
      { label: "↩ Back", next: "start" },
    ],
  },
  contact: {
    id: "contact",
    messages: ["You can reach us a few ways — pick what works best for you:"],
    options: [
      { label: "💬 WhatsApp us", next: "whatsapp" },
      { label: "📅 Book a consultation", next: "book" },
      { label: "✉️ Email us", next: "email" },
      { label: "↩ Back", next: "start" },
    ],
  },
  book: {
    id: "book",
    messages: ["Book a free 30-min strategy call — no commitment, just a conversation."],
    options: [
      {
        label: "📅 Book on Calendly",
        next: "booked",
        href: "https://calendly.com/samkelemthuli51/30min",
      },
      { label: "💬 WhatsApp instead", next: "whatsapp" },
      { label: "↩ Back", next: "start" },
    ],
  },
  booked: {
    id: "booked",
    messages: ["Taking you there now 🎉 Looking forward to connecting!"],
    options: [{ label: "↩ Back to start", next: "start" }],
  },
  whatsapp: {
    id: "whatsapp",
    messages: ["We're usually online during business hours — send us a message and we'll get back to you quickly 💬"],
    options: [
      {
        label: "💬 Open WhatsApp",
        next: "whatsapp_sent",
        href: "https://wa.me/27697714283?text=Hi%20Virtuo%20Designs%2C%20I%27d%20like%20to%20discuss%20a%20project.",
      },
      { label: "↩ Back", next: "start" },
    ],
  },
  whatsapp_sent: {
    id: "whatsapp_sent",
    messages: ["Opening WhatsApp now ✅ Chat soon!"],
    options: [{ label: "↩ Back to start", next: "start" }],
  },
  email: {
    id: "email",
    messages: ["Drop us a line at hello@virtuodesigns.co.za — we aim to reply within one business day."],
    options: [
      {
        label: "✉️ Open email",
        next: "email_sent",
        href: "mailto:hello@virtuodesigns.co.za",
      },
      { label: "↩ Back", next: "start" },
    ],
  },
  email_sent: {
    id: "email_sent",
    messages: ["Opening your mail app now 📧"],
    options: [{ label: "↩ Back to start", next: "start" }],
  },
};

// ─── Message bubble ───────────────────────────────────────────────────────────

function BotBubble({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay }}
      className="flex gap-2 items-end"
    >
      <div className="w-6 h-6 rounded-full bg-primary shrink-0 flex items-center justify-center mb-0.5">
        <span className="text-[9px] text-primary-foreground font-bold">V</span>
      </div>
      <div className="bg-secondary text-foreground text-sm rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[85%] leading-relaxed whitespace-pre-line">
        {text}
      </div>
    </motion.div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex justify-end"
    >
      <div className="bg-primary text-primary-foreground text-sm rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[85%] leading-relaxed">
        {text}
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface Message {
  type: "bot" | "user";
  text: string;
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>(STEPS.start);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showOptions, setShowOptions] = useState(false);
  const [, navigate] = useLocation();
  const bottomRef = useRef<HTMLDivElement>(null);
  const hasOpened = useRef(false);

  // Initialise messages when first opened
  useEffect(() => {
    if (open && !hasOpened.current) {
      hasOpened.current = true;
      playStep(STEPS.start);
    }
  }, [open]);

  // Auto-scroll on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showOptions]);

  function playStep(step: Step) {
    setShowOptions(false);
    setCurrentStep(step);

    // Drip bot messages in with slight delays
    step.messages.forEach((text, i) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "bot", text }]);
        if (i === step.messages.length - 1) {
          setTimeout(() => setShowOptions(true), 200);
        }
      }, i * 400);
    });
  }

  function handleOption(option: Option) {
    // Add user's choice as a bubble
    setMessages((prev) => [...prev, { type: "user", text: option.label }]);
    setShowOptions(false);

    // Handle external links
    if (option.href && !option.navigate) {
      setTimeout(() => {
        window.open(option.href, "_blank", "noopener,noreferrer");
        playStep(STEPS[option.next]);
      }, 200);
      return;
    }

    // Handle in-app navigation
    if (option.href && option.navigate) {
      setTimeout(() => {
        playStep(STEPS[option.next]);
        setTimeout(() => {
          navigate(option.href!);
          setOpen(false);
        }, 900);
      }, 200);
      return;
    }

    setTimeout(() => playStep(STEPS[option.next]), 200);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-[5.5rem] right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ maxHeight: "min(520px, calc(100dvh - 8rem))" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 bg-primary text-primary-foreground shrink-0">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-none">Virtuo Assistant</p>
                <p className="text-[11px] text-primary-foreground/70 mt-0.5">Typically replies instantly</p>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close chat"
                className="w-7 h-7 rounded-full hover:bg-primary-foreground/15 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
              {messages.map((msg, i) =>
                msg.type === "bot" ? (
                  <BotBubble key={i} text={msg.text} />
                ) : (
                  <UserBubble key={i} text={msg.text} />
                )
              )}

              {/* Option buttons */}
              <AnimatePresence>
                {showOptions && currentStep.options && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-2 pt-1"
                  >
                    {currentStep.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOption(opt)}
                        className="text-left text-sm px-4 py-2.5 rounded-xl border border-border bg-background hover:bg-secondary hover:border-accent/40 transition-all duration-150 font-medium text-foreground flex items-center justify-between gap-2 group"
                      >
                        <span>{opt.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-border shrink-0">
              <p className="text-[11px] text-muted-foreground text-center">
                Powered by{" "}
                <span className="font-semibold text-foreground">Virtuo Designs</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={open ? handleClose : handleOpen}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-primary opacity-20 animate-ping [animation-delay:0.6s]" />
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-110 transition-transform duration-200"
        >
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.span>
        {!open && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat with us
          </span>
        )}
      </button>
    </>
  );
}
