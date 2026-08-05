import { lazy, Suspense } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const WhatsAppFloat = lazy(() => import("./WhatsAppFloat").then((module) => ({ default: module.WhatsAppFloat })));
const ChatBot = lazy(() => import("./ChatBot").then((module) => ({ default: module.ChatBot })));

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppFloat />
        <ChatBot />
      </Suspense>
    </div>
  );
}
