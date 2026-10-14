"use client";

import { useState } from "react";
import { CheckSquare } from "lucide-react";

const packages = [
  {
    no: "Paket 1",
    badge: "Untuk umum",
    name: "MathSign Gratis",
    desc: "Untuk siapa saja",
    price: "Rp0,00",
    unit: "",
    note: "Tanpa biaya berlangganan",
    features: [
      "Fitur materi pecahan (materi prasyarat).",
      "Fitur materi bahasa isyarat (gambar, isyarat angka dan istilah matematika).",
      "Fitur latihan interaktif (level 1).",
      "Fitur cara penggunaan.",
    ],
    button: "Pilih paket Gratis",
  },
  {
    no: "Paket 2",
    badge: "Untuk individu",
    name: "MathSign Individu",
    desc: "Akses lengkap individu",
    price: "Rp15.000,00",
    unit: "/Bulan",
    note: "Rp180.000,00/Tahun",
    features: [
      "Fitur materi pecahan (materi prasyarat dan materi pecahan).",
      "Fitur materi bahasa isyarat (gambar dan video isyarat angka dan istilah matematika).",
      "Fitur latihan interaktif (level 1-3).",
      "Fitur cara penggunaan.",
      "Fitur laporan hasil (rekap hasil latihan interaktif dan perkembangan hasil belajar individu).",
    ],
    button: "Kelola paket Individu",
  },
  {
    no: "Paket 3",
    badge: "Untuk sekolah",
    name: "MathSign Sekolah",
    desc: "Maksimal 50 akun siswa",
    price: "Rp900.000,00",
    unit: "/Tahun",
    note: "Untuk seluruh akun siswa terdaftar",
    features: [
      "Fitur materi pecahan (materi prasyarat dan materi pecahan).",
      "Fitur materi bahasa isyarat (gambar dan video isyarat angka dan istilah matematika).",
      "Fitur latihan interaktif (level 1-3).",
      "Fitur cara penggunaan.",
      "Fitur laporan hasil (rekap hasil latihan interaktif dan perkembangan hasil belajar seluruh siswa yang terdaftar).",
    ],
    button: "Pilih paket Sekolah",
  },
];

export default function PilihanPaketPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col">
      {/* Header */}
      <div className="shrink-0 text-center">
        <h1 className="text-2xl font-extrabold">Pilihan Paket MathSign</h1>
        <p className="mt-2 text-xs text-slate-500">
          Pilih akses yang sesuai kebutuhanmu, dari langkah pertama hingga belajar bersama di sekolah.
        </p>
      </div>

      {/* Grid paket */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {packages.map((p) => {
          const isActive = selected === p.no;
          return (
            <div
              key={p.no}
              onClick={() => setSelected(p.no)}
              className={`flex cursor-pointer flex-col rounded-2xl bg-white p-4 transition-all duration-200 ${
                isActive
                  ? "border-2 border-primary shadow-lg"
                  : "border border-slate-200 shadow-sm hover:border-primary/40 hover:shadow-md"
              }`}
            >
              <div className="flex shrink-0 items-center justify-between text-[10px]">
                <span className="text-slate-400">{p.no}</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 font-semibold">
                  {p.badge}
                </span>
              </div>

              <h3 className="mt-3 shrink-0 text-center text-base font-extrabold">{p.name}</h3>
              <p className="shrink-0 text-center text-[11px] text-slate-500">{p.desc}</p>

              <p className="mt-2 shrink-0 text-xl font-extrabold">
                {p.price}
                <span className="text-[10px] font-medium text-slate-400">{p.unit}</span>
              </p>
              <p className="shrink-0 text-[10px] text-slate-400">{p.note}</p>

              <p className="mt-3 shrink-0 text-[11px] font-extrabold">Akses:</p>
              <ul className="mt-1.5 flex-1 space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-1.5 text-[10px] leading-snug text-slate-600">
                    <CheckSquare size={12} className="mt-0.5 shrink-0 text-green-600" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(p.no);
                }}
                className={`mt-4 w-full shrink-0 rounded-lg py-2 text-[11px] font-bold transition ${
                  isActive
                    ? "bg-primary text-white hover:bg-blue-700"
                    : "border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {p.button}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}