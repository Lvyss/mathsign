"use client";

import { useState, useEffect } from "react";
import { CheckSquare, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

const packages = [
  {
    id: "gratis",
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
    id: "individu",
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
    id: "sekolah",
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
  const [activePackage, setActivePackage] = useState<string>("gratis");
  const router = useRouter();

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };
    const savedPkg = getCookie("user_package");
    if (savedPkg?.includes("Individu")) setActivePackage("individu");
    else if (savedPkg?.includes("Sekolah")) setActivePackage("sekolah");
  }, []);

  const handleButtonClick = (e: React.MouseEvent, pkg: typeof packages[0]) => {
    e.stopPropagation();
    
    // Cek jika paket terkunci
    const isLocked = activePackage !== "gratis" && activePackage !== pkg.id && pkg.id !== "gratis";
    if (isLocked) {
      alert("Anda sudah memiliki paket aktif. Selesaikan atau tunggu masa aktif berakhir untuk membeli paket lain.");
      return;
    }

    setSelected(pkg.no);
    if (pkg.id === "individu") router.push("/pilihan-paket/individu");
    else if (pkg.id === "sekolah") router.push("/pilihan-paket/sekolah");
    else router.push("/beranda");
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col p-4 md:p-8">
      <div className="shrink-0 text-center">
        <h1 className="text-2xl font-extrabold text-slate-800">Pilihan Paket MathSign</h1>
        <p className="mt-2 text-xs text-slate-500">
          Pilih akses yang sesuai kebutuhanmu, dari langkah pertama hingga belajar bersama di sekolah.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {packages.map((p) => {
          const isActive = selected === p.no;
          const isCurrentPlan = activePackage === p.id;
          const isLocked = activePackage !== "gratis" && activePackage !== p.id && p.id !== "gratis";
          
          return (
            <div
              key={p.no}
              onClick={() => {
                if (isLocked) return;
                setSelected(p.no);
              }}
              className={`relative flex flex-col rounded-2xl bg-white p-5 border transition-all ${
                isLocked 
                  ? "border-slate-200 opacity-60 bg-slate-50 cursor-not-allowed" // Gaya terkunci
                  : isActive
                    ? "border-2 border-primary shadow-lg cursor-pointer"
                    : isCurrentPlan
                      ? "border-2 border-green-500 shadow-md cursor-pointer"
                      : "border border-slate-200 shadow-sm hover:border-primary/40 hover:shadow-md cursor-pointer"
              }`}
            >
              {isCurrentPlan && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-[10px] font-bold text-white shadow-sm">
                  Paket Aktif Anda
                </div>
              )}

              <div className="flex shrink-0 items-center justify-between text-[10px] mt-1">
                <span className="text-slate-400">{p.no}</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 font-semibold">
                  {p.badge}
                </span>
              </div>

              <h3 className="mt-3 shrink-0 text-center text-lg font-extrabold text-slate-800">{p.name}</h3>
              <p className="shrink-0 text-center text-xs text-slate-500">{p.desc}</p>

              <p className="mt-4 shrink-0 text-2xl font-extrabold text-slate-800">
                {p.price}
                <span className="text-[10px] font-medium text-slate-400">{p.unit}</span>
              </p>
              <p className="shrink-0 text-[10px] text-slate-400">{p.note}</p>

              <p className="mt-4 shrink-0 text-xs font-extrabold text-slate-800">Akses:</p>
              <ul className="mt-2 flex-1 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-[11px] leading-snug text-slate-600">
                    <CheckSquare size={14} className="mt-0.5 shrink-0 text-green-600" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={(e) => handleButtonClick(e, p)}
                disabled={isLocked}
                className={`mt-6 w-full shrink-0 rounded-lg py-2.5 text-xs font-bold transition flex items-center justify-center gap-2 ${
                  isLocked 
                    ? "bg-slate-200 text-slate-500 cursor-not-allowed" 
                    : isCurrentPlan 
                      ? "bg-green-600 text-white hover:bg-green-700" 
                      : isActive
                        ? "bg-primary text-white hover:bg-blue-700"
                        : "border border-slate-200 hover:bg-slate-50 text-slate-700"
                }`}
              >
                {isLocked ? <><Lock size={14} /> Terkunci</> : isCurrentPlan ? "Lanjutkan Langganan" : p.button}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}