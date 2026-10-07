import { Component, type ReactNode } from "react";

export function PageLoading() {
  return <main className="min-h-screen flex items-center justify-center bg-background text-foreground" role="status" aria-live="polite"><p>Loading your page…</p></main>;
}

export class PageErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (!this.state.failed) return this.props.children;
    return <main className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="max-w-md text-center space-y-5" role="alert">
        <h1 className="text-3xl font-serif">We couldn’t load this page.</h1>
        <p>Please reload to try again, or contact our team directly.</p>
        <button className="bg-primary text-primary-foreground rounded-full px-6 py-3" onClick={() => window.location.reload()}>Reload page</button>
        <p><a className="underline" href="mailto:hello@virtuodesigns.co.za">hello@virtuodesigns.co.za</a></p>
      </div>
    </main>;
  }
}
