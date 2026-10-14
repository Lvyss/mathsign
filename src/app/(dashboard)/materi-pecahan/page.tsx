import Link from "next/link";
import { Divide, Minus, Plus, Search, X } from "lucide-react";

const materi = [
  {
    title: "Operasi Penjumlahan",
    desc: "Pelajari operasi penjumlahan dasar dan operasi penjumlahan bentuk pecahan.",
    href: "/materi-pecahan/penjumlahan",
    icon: Plus,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Operasi Pengurangan",
    desc: "Pelajari operasi pengurangan dasar dan operasi pengurangan bentuk pecahan.",
    href: "/materi-pecahan/pengurangan",
    icon: Minus,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    title: "Operasi Perkalian",
    desc: "Pelajari operasi perkalian dasar dan operasi perkalian bentuk pecahan.",
    href: "/materi-pecahan/perkalian",
    icon: X,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "Operasi Pembagian",
    desc: "Pelajari operasi pembagian dasar dan operasi pembagian bentuk pecahan.",
    href: "/materi-pecahan/pembagian",
    icon: Divide,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export default function MateriPecahanPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-center text-2xl font-extrabold">Materi Pecahan</h1>
      <p className="mt-3 text-sm text-slate-500">
        Pilih topik materi yang ingin dipelajari mulai dari pemahaman dasar hingga ke materi
        pecahan. Semua materi dilengkapi visualisasi, bahasa isyarat, dan latihan interaktif.
      </p>

      {/* Filter + Search */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <button className="rounded-full bg-primary px-4 py-2 text-[11px] font-bold text-white">
          Materi Prasyarat dan Pecahan
        </button>

        <div className="flex w-56 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
          <Search size={14} className="text-slate-500" />
          <input
            type="text"
            placeholder="Cari materi..."
            className="w-full bg-transparent text-[11px] outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Grid kartu */}
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {materi.map(({ title, desc, href, icon: Icon, iconBg, iconColor }) => (
          <div
            key={title}
            className="rounded-2xl bg-white p-4 shadow-[0_0_6px_rgba(0,0,0,0.12)]"
          >
            <div className="flex items-start justify-between">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}
              >
                <Icon size={18} />
              </span>
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-bold text-green-700">
                Materi
              </span>
            </div>

            <h3 className="mt-4 text-base font-extrabold">{title}</h3>
            <p className="mt-1 text-[10px] leading-relaxed text-slate-500">{desc}</p>

            <Link
              href={href}
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary py-2 text-[11px] font-bold text-white transition hover:bg-blue-700"
            >
              Buka
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}