import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const featuredProjects = [
  { title: 'Umnini Community Trust', category: 'Organisation website', description: 'An informational website for a community organisation.', image: '/images/umnini-preview.png', width: 1920, height: 1080, alt: 'Screenshot of the Umnini Community Trust website', anchor: 'umnini-community-trust' },
  { title: 'Campus Marketplace', category: 'Student marketplace platform', description: 'A peer-to-peer marketplace connecting university students.', image: '/images/campus-market.png', width: 1351, height: 682, alt: 'Screenshot of Campus Marketplace showing student listings', anchor: 'campus-marketplace' },
  { title: 'MJP Security', category: 'Security services website', description: 'A website for an armed response and security services company.', image: '/images/mjp-security-hero.jpg', width: 1366, height: 681, alt: 'Screenshot of the MJP Security website with its branded vehicle', anchor: 'mjp-security' },
];

type Phase = 'idle' | 'exit' | 'enter';
export function FeaturedProjectPreview({ titleId }: { titleId: string }) {
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const pending = useRef(0);
  const project = featuredProjects[active];
  const stopped = hovered || focused || !visible || !pageVisible || reducedMotion || phase !== 'idle';

  const selectProject = useCallback((index: number) => {
    if (phase !== 'idle' || index === active) return;
    pending.current = (index + featuredProjects.length) % featuredProjects.length;
    if (reducedMotion) setActive(pending.current);
    else setPhase('exit');
  }, [active, phase, reducedMotion]);

  const finishAnimation = useCallback(() => {
    if (phase === 'exit') { setActive(pending.current); setPhase('enter'); }
    else if (phase === 'enter') setPhase('idle');
  }, [phase]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update(); media.addEventListener('change', update);
    const visibility = () => setPageVisible(!document.hidden);
    visibility(); document.addEventListener('visibilitychange', visibility);
    return () => { media.removeEventListener('change', update); document.removeEventListener('visibilitychange', visibility); };
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    if (!('IntersectionObserver' in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(entries => setVisible(entries.some(entry => entry.isIntersecting)), { threshold: 0.1 });
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (stopped) return;
    const timer = window.setTimeout(() => selectProject(active + 1), 5000);
    return () => window.clearTimeout(timer);
  }, [active, stopped, selectProject]);

  useEffect(() => {
    if (phase === 'idle') return;
    // Fallback also finishes transitions if browser animation-end events are suppressed.
    if (reducedMotion) { setActive(pending.current); setPhase('idle'); return; }
    const timer = window.setTimeout(finishAnimation, 600);
    return () => window.clearTimeout(timer);
  }, [phase, reducedMotion, finishAnimation]);

  return <div ref={rootRef} className="project-orbit" role="region" aria-label="Featured projects" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <article aria-labelledby={titleId} data-phase={phase} className="project-orbit-card featured-project rounded-2xl border border-border bg-background/95 shadow-xl overflow-hidden" onAnimationEnd={event => { if (event.target === event.currentTarget) finishAnimation(); }}>
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/60"><span className="size-2 rounded-full bg-foreground/25" aria-hidden="true" /><span className="size-2 rounded-full bg-foreground/25" aria-hidden="true" /><span className="size-2 rounded-full bg-foreground/25" aria-hidden="true" /><p className="ml-2 text-xs text-muted-foreground">Digital systems in practice</p></div>
      <div className="project-preview-image bg-white"><img key={project.image} src={project.image} width={project.width} height={project.height} alt={project.alt} loading="lazy" decoding="async" className="w-full h-full object-contain" /></div>
      <div className="project-preview-copy p-5" aria-live={focused ? 'polite' : 'off'} aria-atomic="true"><p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{project.category}</p><h2 id={titleId} className="font-serif text-2xl">{project.title}</h2><p className="text-sm text-muted-foreground leading-relaxed mt-2">{project.description}</p><a href={`/portfolio#${project.anchor}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold mt-3 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">View project <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a></div>
    </article>
  </div>;
}
