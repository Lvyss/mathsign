import { ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-8 py-3">
      <h2 className="text-base font-bold">MathSign: Belajar Tanpa Batas</h2>

      <button className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-extrabold text-white">
          SA
        </span>
        <span className="text-xs font-bold">Siti Aisyah</span>
        <ChevronDown size={14} />
      </button>
    </header>
  );
}