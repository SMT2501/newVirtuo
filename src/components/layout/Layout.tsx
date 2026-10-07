import { DigitalCheckupProvider, CheckupTrigger } from "@/components/DigitalCheckup";
import { lazy, Suspense, useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const WhatsAppFloat = lazy(() => import("./WhatsAppFloat").then((module) => ({ default: module.WhatsAppFloat })));
const ChatBot = lazy(() => import("./ChatBot").then((module) => ({ default: module.ChatBot })));

export function Layout({ children }: { children: React.ReactNode }) {
  const [interactive, setInteractive] = useState(false);
  useEffect(() => setInteractive(true), []);
  return (
    <DigitalCheckupProvider>
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      <div className="px-4 py-6 text-center border-t border-border"><CheckupTrigger className="min-h-11 px-5 py-3 text-sm font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-accent">Find your digital solution</CheckupTrigger></div>
      <Footer />
      {interactive && <Suspense fallback={null}>
        <WhatsAppFloat />
        <ChatBot />
      </Suspense>}
    </div>
    </DigitalCheckupProvider>
  );
}
