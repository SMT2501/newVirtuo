import { useState } from "react";
import "./_group.css";
import { CloudUpload, FileText, Link2, Lock, MoreHorizontal, Pencil } from "lucide-react";

function Status() {
  return (
    <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-orange-700">
      In progress
    </span>
  );
}

export function Refined() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f6f5f1] p-6 sm:p-10">
      <article className="mx-auto max-w-[680px] rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <Status />
          <span className="rounded-full bg-stone-50 px-2 py-1 text-xs font-bold text-stone-500">68% complete</span>
        </div>
        <h1 className="mt-6 font-serif text-2xl font-bold tracking-[-.02em]">Lumen Studio website</h1>
        <p className="mt-1 text-sm text-stone-500">Website · Lumen Studio</p>
        <div className="mt-7 h-2 overflow-hidden rounded-full bg-stone-100">
          <div className="h-full w-[68%] rounded-full bg-orange-500" />
        </div>
        <div className="mt-4 flex justify-between text-xs text-stone-500">
          <span>Target date</span>
          <strong className="text-stone-800">30 Sep 2026</strong>
        </div>
        <div className="mt-4 border-t border-stone-100 pt-3">
          <div className="text-[10px] font-bold uppercase tracking-wide text-stone-400">Milestones</div>
          <div className="mt-2 text-xs text-stone-600">• Homepage direction · 02 Sep 2026</div>
          <div className="mt-2 text-xs text-stone-600">• Content handoff · 12 Sep 2026</div>
        </div>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-stone-100 pt-4">
          <span className="inline-flex min-w-0 items-center gap-1.5 text-xs font-semibold text-stone-500">
            <FileText size={14} className="shrink-0 text-stone-400" />
            3 linked file(s)
          </span>
          <div className="flex shrink-0 items-center gap-1.5">
            <button className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-orange-600 px-3 py-2 text-xs font-bold text-white shadow-sm shadow-orange-600/20 transition hover:bg-orange-700">
              <CloudUpload size={14} />
              <span className="hidden sm:inline">Add document</span>
              <span className="sm:hidden">Add</span>
            </button>
            <button className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-2.5 py-2 text-xs font-bold text-stone-700 transition hover:border-stone-300 hover:bg-stone-50" aria-label="Edit Lumen Studio website">
              <Pencil size={14} />
              <span className="hidden sm:inline">Edit</span>
            </button>
            <div className="relative">
              <button onClick={() => setMenuOpen((open) => !open)} className={`inline-flex size-9 items-center justify-center rounded-lg border bg-white transition ${menuOpen ? "border-stone-400 text-stone-900 shadow-sm" : "border-stone-200 text-stone-500 hover:border-stone-300 hover:bg-stone-50 hover:text-stone-900"}`} aria-label="More project actions" aria-expanded={menuOpen} aria-haspopup="menu">
                <MoreHorizontal size={17} />
              </button>
              {menuOpen && <div className="absolute bottom-11 right-0 z-10 w-44 overflow-hidden rounded-xl border border-stone-200 bg-white p-1.5 shadow-xl shadow-stone-900/10" role="menu">
                <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-bold text-stone-700 transition hover:bg-stone-50" role="menuitem"><Link2 size={14} className="text-orange-600" />Rotate PIN</button>
                <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-xs font-bold text-red-700 transition hover:bg-red-50" role="menuitem"><Lock size={14} />Disable sharing</button>
              </div>}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}