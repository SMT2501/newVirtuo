import { useMemo, useState } from "react";
import { Check, ChevronDown, CircleHelp, Clock3, Edit3, Image, Instagram, LockKeyhole, MoreHorizontal, Plus, Send, Sparkles, UserRound } from "lucide-react";
import "./_group.css";

type ContentItem = {
  day: string;
  date: string;
  theme: string;
  themeClass: string;
  hook: string;
  format: string;
  angle: string;
  media: string;
  time: string;
  notes: string;
};

const initialItems: ContentItem[] = [
  { day: "Mon", date: "01", theme: "Business", themeClass: "business", hook: "A better website starts with a clearer question.", format: "Carousel", angle: "A practical look at the first three questions Samkele asks before opening Figma for a Virtuo Designs project.", media: "3–5 slides + desk detail", time: "08:15", notes: "Keep the examples grounded in small local businesses." },
  { day: "Tue", date: "02", theme: "Build in public", themeClass: "build", hook: "What I am learning while building Virtuo.", format: "Reel", angle: "A quiet screen-and-voice-note update on one frontend idea being tested this week, including what is still unclear.", media: "Screen recording + founder voice", time: "18:30", notes: "No client work on screen. Use a clean demo file." },
  { day: "Wed", date: "03", theme: "Campus / life", themeClass: "campus", hook: "Computer science student, founder, still figuring out the rhythm.", format: "Single portrait", angle: "An honest UWC study-day portrait with a short caption about protecting deep work while learning in public.", media: "Founder photo supplied by Samkele", time: "12:30", notes: "Natural light; keep the setting recognisably campus without making it a location shoot." },
  { day: "Thu", date: "04", theme: "Founder lesson", themeClass: "lesson", hook: "The useful part of a first draft is seeing what to remove.", format: "Carousel", angle: "Three notes from revising a web concept: start with the user, write less, and leave room for the next version.", media: "4 slides + handwritten notes", time: "08:15", notes: "Reflective, not instructional theatre." },
  { day: "Fri", date: "05", theme: "Community", themeClass: "community", hook: "Good things grow in conversation.", format: "Story", angle: "A gratitude frame for the people, peers, and campus community who make the founder journey feel less solitary.", media: "Founder photo + text frames", time: "17:45", notes: "Name only people Samkele is comfortable tagging." },
  { day: "Sat", date: "06", theme: "Offer", themeClass: "offer", hook: "A small-business website should earn its place.", format: "Reel", angle: "A useful 30-second website check: can someone understand what you do, trust you, and take the next step?", media: "Talking-head + screen cutaways", time: "10:00", notes: "End with a soft invitation to start a conversation with Virtuo Designs." },
  { day: "Sun", date: "07", theme: "Weekly recap", themeClass: "recap", hook: "Seven days of building, learning, and paying attention.", format: "Carousel", angle: "A simple week-one recap: one build, one lesson, one person to thank, and one intention for next week.", media: "5 slides + founder photo", time: "16:00", notes: "Leave the final slide spacious and forward-looking." },
];

const themeColors: Record<string, string> = {
  business: "#d76c51", build: "#6f8f88", campus: "#d1a143", lesson: "#8e6c87",
  community: "#7894a0", offer: "#c87549", recap: "#526d66",
};

function FormatIcon({ format }: { format: string }) {
  return format === "Story" ? <Clock3 size={14} /> : format === "Reel" ? <Instagram size={14} /> : <Image size={14} />;
}

export function WeekOneBoard() {
  const [items, setItems] = useState(initialItems);
  const [selected, setSelected] = useState("All");
  const [complete, setComplete] = useState<string[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const filters = useMemo(() => ["All", "Business", "Build in public", "Campus / life", "Founder lesson", "Community", "Offer", "Weekly recap"], []);
  const filtered = selected === "All" ? items : items.filter((item) => item.theme === selected);
  const completedCount = complete.length;

  function toggleDone(day: string) {
    setComplete((current) => current.includes(day) ? current.filter((item) => item !== day) : [...current, day]);
  }
  function startEdit(item: ContentItem) {
    setEditing(item.day);
    setDraft(item.hook);
  }
  function saveEdit(day: string) {
    setItems((current) => current.map((item) => item.day === day ? { ...item, hook: draft || item.hook } : item));
    setEditing(null);
  }

  return (
    <main className="week-one-board min-h-screen overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 lg:px-12 lg:py-10">
        <header className="relative border-b border-[var(--line)] pb-8">
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--sun)] shadow-[5px_5px_0_var(--coral)]">
                <span className="display text-lg">V</span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[var(--ink-soft)]">Virtuo Designs / studio notebook</p>
                <p className="mt-1 text-sm font-semibold">Samkele Mthuli <span className="mx-1 text-[var(--coral)]">·</span> Week one</p>
              </div>
            </div>
            <button type="button" className="hidden items-center gap-2 rounded-full border border-[var(--line)] bg-[#f9f5ee]/70 px-4 py-2 text-xs font-bold text-[var(--ink-soft)] transition hover:bg-[var(--ink)] hover:text-[var(--paper)] sm:flex">
              <Send size={14} /> Share board
            </button>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] text-[var(--coral)]">
                <span className="h-px w-8 bg-[var(--coral)]" /> 07 days / one useful rhythm
              </div>
              <h1 className="display max-w-3xl text-5xl leading-[.98] tracking-[-.03em] sm:text-7xl">Build the work.<br /><em className="text-[var(--coral)]">Tell the truth.</em></h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--ink-soft)] sm:text-base">A sustainable first week for a founder-led Instagram: show the work, share the learning, make room for campus life, and offer something genuinely helpful.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-[var(--ink)] p-4 text-[var(--paper)] sm:col-span-2"><p className="text-[10px] uppercase tracking-[.18em] text-[var(--sun)]">This week's north star</p><p className="mt-5 text-lg font-semibold leading-snug">Useful over loud.<br />Specific over polished.</p></div>
              <div className="rounded-2xl border border-[var(--line)] bg-[#fbf7f0]/65 p-4"><p className="text-[10px] uppercase tracking-[.18em] text-[var(--ink-soft)]">Ready</p><p className="mt-5 text-3xl font-semibold">{completedCount}<span className="text-base text-[var(--ink-soft)]"> / 7</span></p><p className="mt-1 text-[11px] text-[var(--ink-soft)]">marked ready</p></div>
            </div>
          </div>
        </header>

        <section className="flex flex-col gap-5 border-b border-[var(--line)] py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="mr-2 shrink-0 font-bold text-[var(--ink-soft)]">Filter</span>
            {filters.map((filter) => <button type="button" key={filter} onClick={() => setSelected(filter)} className={`shrink-0 rounded-full border px-3 py-1.5 font-semibold transition ${selected === filter ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]" : "border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--ink)]"}`}>{filter}</button>)}
          </div>
          <div className="flex items-center gap-2 text-[11px] text-[var(--ink-soft)]"><LockKeyhole size={13} /><span>Private planning view</span><span className="mx-1 h-1 w-1 rounded-full bg-[var(--coral)]" /><span>Updated just now</span></div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {filtered.map((item) => {
            const done = complete.includes(item.day);
            return <article key={item.day} className={`day-card group relative overflow-hidden rounded-[22px] border border-[var(--line)] bg-[#fbf7f0]/75 p-5 ${done ? "opacity-70" : ""} ${item.day === "Sun" ? "xl:col-span-2" : ""}`}>
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[70px] opacity-20" style={{ backgroundColor: themeColors[item.themeClass] }} />
              <div className="relative flex items-start justify-between">
                <div className="flex items-baseline gap-2"><span className="display text-4xl leading-none">{item.date}</span><span className="text-xs font-bold uppercase tracking-[.16em] text-[var(--ink-soft)]">{item.day}</span></div>
                <button type="button" aria-label={`Mark ${item.day} ready`} onClick={() => toggleDone(item.day)} className={`flex h-8 w-8 items-center justify-center rounded-full border transition ${done ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--sun)]" : "border-[var(--line)] text-transparent hover:border-[var(--ink)] hover:text-[var(--ink-soft)]"}`}><Check size={16} /></button>
              </div>
              <div className="relative mt-5 flex items-center justify-between"><span className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.13em]" style={{ backgroundColor: `${themeColors[item.themeClass]}22`, color: themeColors[item.themeClass] }}>{item.theme}</span><span className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--ink-soft)]"><FormatIcon format={item.format} /> {item.format}</span></div>
              {editing === item.day ? <div className="relative mt-5"><input autoFocus value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => event.key === "Enter" && saveEdit(item.day)} className="w-full rounded-lg border border-[var(--coral)] bg-[#fffaf3] px-2 py-1.5 text-base font-semibold leading-snug text-[var(--ink)]" /><button type="button" onClick={() => saveEdit(item.day)} className="mt-2 text-[11px] font-bold text-[var(--coral)]">Save hook</button></div> : <div className="relative mt-5 flex items-start gap-2"><h2 className={`text-base font-semibold leading-snug ${done ? "strike" : ""}`}>{item.hook}</h2><button type="button" aria-label={`Edit ${item.day} hook`} onClick={() => startEdit(item)} className="mt-0.5 shrink-0 text-[var(--ink-soft)] opacity-0 transition group-hover:opacity-100 hover:text-[var(--coral)]"><Edit3 size={14} /></button></div>}
              <p className="mt-3 text-xs leading-5 text-[var(--ink-soft)]">{item.angle}</p>
              <div className="mt-5 border-t border-[var(--line)] pt-4"><div className="flex items-start gap-2 text-[11px] font-semibold"><Image size={14} className="mt-0.5 shrink-0 text-[var(--coral)]" /><span>{item.media}</span></div><p className="mt-3 text-[11px] leading-5 text-[var(--ink-soft)]"><span className="font-bold text-[var(--ink)]">Note:</span> {item.notes}</p></div>
              <div className="mt-5 flex items-center justify-between text-[10px] font-bold uppercase tracking-[.15em] text-[var(--ink-soft)]"><span>Suggested time</span><span className="flex items-center gap-1 text-[var(--ink)]"><Clock3 size={12} /> {item.time}</span></div>
            </article>;
          })}
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-[22px] bg-[var(--sun)] p-6 sm:p-7"><div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--ink-soft)]">Before the week starts</p><h2 className="display mt-3 text-3xl leading-tight">The media list</h2></div><Sparkles size={22} className="text-[var(--coral)]" /></div><div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="rounded-xl bg-[#f8e0a5]/65 p-3"><UserRound size={15} /><p className="mt-3 text-xs font-semibold leading-5">2–3 founder photos</p></div><div className="rounded-xl bg-[#f8e0a5]/65 p-3"><Image size={15} /><p className="mt-3 text-xs font-semibold leading-5">Screen recordings + desk details</p></div><div className="rounded-xl bg-[#f8e0a5]/65 p-3"><MoreHorizontal size={15} /><p className="mt-3 text-xs font-semibold leading-5">Handwritten notes or clean type slides</p></div></div></div>
          <div className="rounded-[22px] border border-[var(--line)] bg-[#fbf7f0]/70 p-6 sm:p-7"><div className="flex items-center gap-2 text-[var(--coral)]"><CircleHelp size={17} /><p className="text-[10px] font-bold uppercase tracking-[.2em]">Important</p></div><h2 className="display mt-3 text-2xl leading-tight">Founder photos come from Samkele.</h2><p className="mt-3 text-xs leading-6 text-[var(--ink-soft)]">Please supply current, comfortable-to-share photos rather than sourcing images from the web. The account works because the journey is real.</p><button type="button" onClick={() => setItems((current) => [...current])} className="mt-5 flex items-center gap-2 text-xs font-bold text-[var(--coral)] transition hover:gap-3">Add a media note <Plus size={14} /></button></div>
        </section>

        <footer className="flex flex-col gap-3 py-8 text-[11px] text-[var(--ink-soft)] sm:flex-row sm:items-center sm:justify-between"><p><span className="font-bold text-[var(--ink)]">Samkele Mthuli</span> / Founder-led content plan / Cape Town</p><p className="flex items-center gap-1.5"><ChevronDown size={13} /> Drag-ready structure for a calm, consistent week</p></footer>
      </div>
    </main>
  );
}