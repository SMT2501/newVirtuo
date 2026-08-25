import "./_group.css";
import { CloudUpload, Link2, Lock } from "lucide-react";

function Status() {
  return (
    <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-orange-700">
      In progress
    </span>
  );
}

export function Current() {
  return (
    <main className="min-h-screen bg-[#f6f5f1] p-6 sm:p-10">
      <article className="mx-auto max-w-[680px] rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <Status />
          <span className="text-xs font-bold text-stone-400">68%</span>
        </div>
        <h1 className="mt-6 font-serif text-2xl font-bold">Lumen Studio website</h1>
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
        <p className="mt-4 text-xs font-semibold text-stone-500">3 linked file(s)</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-stone-200 px-3 py-2 text-xs font-bold text-stone-700">Edit project</button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-stone-200 px-3 py-2 text-xs font-bold text-stone-700"><CloudUpload size={14} />Add document</button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-stone-200 px-3 py-2 text-xs font-bold text-stone-700"><Link2 size={14} />Rotate PIN</button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-stone-200 px-3 py-2 text-xs font-bold text-red-700"><Lock size={14} />Disable</button>
        </div>
      </article>
    </main>
  );
}