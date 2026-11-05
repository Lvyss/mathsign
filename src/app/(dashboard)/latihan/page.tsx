"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Info, LockOpen, Lock } from "lucide-react";

const steps = [
  {
    title: "Baca soal",
    desc: "Temukan informasi penting dalam soal cerita.",
  },
  {
    title: "Pilih dan periksa opsi jawaban",
    desc: "Pilih dan periksa opsi jawaban dari soal cerita yang tepat.",
  },
  {
    title: "Pilih opsi jawaban bahasa isyarat",
    desc: "Pilih opsi jawaban dalam bentuk bahasa isyarat dari soal cerita yang benar.",
  },
  {
    title: "Konfirmasi jawaban",
    desc: "Setelah selesai memilih opsi jawaban bahasa isyarat, sistem MathSign otomatis memberikan konfirmasi apakah jawaban siswa benar atau salah.",
  },
];

export default function LatihanInteraktifPage() {
  // State default: gratis (terkunci)
  const [isPremium, setIsPremium] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Cek cookie saat halaman dimuat
  useEffect(() => {
    setIsMounted(true);
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const savedPkg = getCookie("user_package");
    // Jika paket mengandung "Individu" atau "Sekolah", berarti premium
    if (savedPkg?.includes("Individu") || savedPkg?.includes("Sekolah")) {
      setIsPremium(true);
    }
  }, []);

  // Data levels dipindah ke dalam komponen agar bisa mengecek state isPremium
  const levels = [
    {
      title: "Level 1 (Soal Pecahan Bentuk Konkret)",
      desc: "Mudah",
      href: "/latihan/level-1",
      locked: false, // Level 1 selalu terbuka
    },
    {
      title: "Level 2 (Soal Pecahan Bentuk Konkret Menuju Abstrak)",
      desc: "Sedang",
      href: "/latihan/level-2",
      locked: !isPremium, // Terkunci jika gratis
    },
    {
      title: "Level 3 (Soal Pecahan Bentuk Abstrak)",
      desc: "Sulit",
      href: "/latihan/level-3",
      locked: !isPremium, // Terkunci jika gratis
    },
  ];

  return (
    <div className=" max-w-5xl  font-sans">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[24px] font-extrabold text-slate-800">Latihan Interaktif</h1>
        <p className="mt-2 text-[13px] text-slate-500">
          Belajar pecahan langkah demi langkah, dari cerita hingga bahasa isyarat.
        </p>
      </div>

      {/* Kartu level */}
      <div className="space-y-3 mb-6">
        {levels.map(({ title, desc, href, locked }) => {
          const Icon = locked ? Lock : LockOpen;
          
          const content = (
            <>
              <Icon size={20} className={locked ? "text-slate-400" : "text-white"} strokeWidth={locked ? 2 : 2.5} />
              <div className="ml-1">
                <p className={`text-[13px] font-bold ${locked ? "text-slate-700" : "text-white"}`}>{title}</p>
                <p className={`text-[11px] mt-0.5 ${locked ? "text-slate-400" : "text-blue-100"}`}>{desc}</p>
              </div>
            </>
          );

          const baseClass = "flex items-center gap-3 rounded-xl px-5 py-4 transition-all";

          return locked ? (
            <div
              key={title}
              className={`${baseClass} cursor-not-allowed border border-slate-200 bg-[#F8FAFC]`}
            >
              {content}
            </div>
          ) : (
            <Link
              key={title}
              href={href}
              className={`${baseClass} bg-[#2563EB] text-white shadow-md hover:bg-blue-700`}
            >
              {content}
            </Link>
          );
        })}
      </div>

      {/* Info paket (Hanya muncul jika masih gratis) */}
      {isMounted && !isPremium && (
        <div className="flex items-center gap-2 mb-8">
          <Info size={16} className="text-slate-500 shrink-0" />
          <p className="text-[12px] text-slate-600">
            Level 2 dan level 3 tersedia dipaket berbayar. Pilih paket berbayar 2 atau 3 untuk mengakses level tersebut.
          </p>
        </div>
      )}

      {/* Cara mengerjakan */}
      <h2 className="text-[16px] font-bold text-slate-800 mb-4">Cara mengerjakan</h2>
      <ol className="space-y-4">
        {steps.map(({ title, desc }, i) => (
          <li key={title} className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8F0FE] text-[11px] font-bold text-[#2563EB] mt-0.5">
              {i + 1}
            </span>
            <div>
              <p className="text-[13px] font-bold text-slate-800">{title}</p>
              <p className="text-[11.5px] text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
            </div>
          </li>
        ))}
      </ol>

    </div>
  );
}