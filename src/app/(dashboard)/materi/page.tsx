"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Minus, Search, Lock, BookOpen } from "lucide-react";

// Data Materi Dasar (Gratis)
const materiDasar = [
  {
    title: "Operasi Penjumlahan",
    desc: "Pelajari operasi penjumlahan dasar sebagai materi prasyarat.",
    href: "/materi-pecahan/penjumlahan",
    icon: Plus,
    iconBg: "bg-[#E8F0FE]",
    iconColor: "text-[#2563EB]",
    isLockedForFree: false,
  },
  {
    title: "Operasi Pengurangan",
    desc: "Pelajari operasi pengurangan dasar sebagai materi prasyarat.",
    href: "/materi-pecahan/pengurangan",
    icon: Minus,
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
    isLockedForFree: false,
  },
  {
    title: "Materi Pecahan",
    desc: "Pelajari materi pecahan secara detail.",
    href: "/materi-pecahan/pecahan",
    icon: BookOpen, // Menggunakan ikon buku
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#16A34A]",
    isLockedForFree: true, // Terkunci jika gratis
  }
];

export default function MateriPecahanPage() {
  const [userPackage, setUserPackage] = useState("gratis"); 
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };
    
    const savedPkg = getCookie("user_package");
    if (savedPkg?.includes("Individu")) setUserPackage("individu");
    else if (savedPkg?.includes("Sekolah")) setUserPackage("sekolah");
    else setUserPackage("gratis");
  }, []);

  const isPremium = userPackage === "individu" || userPackage === "sekolah";

  return (
    <div className="mx-auto max-w-5xl py-6 font-sans">
      
      {/* Header */}
      <div className="text-center">
        <h1 className="text-[26px] font-extrabold text-slate-800">Materi Pecahan</h1>
        <p className="mt-3 text-[13px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Pilih topik materi yang ingin dipelajari mulai dari pemahaman dasar hingga ke materi pecahan. Semua materi dilengkapi visualisasi untuk mempermudah pemahaman.
        </p>
      </div>

      {/* Filter + Search */}
      <div className="mt-8 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button className="rounded-full bg-[#2563EB] px-4 py-2 text-[11px] font-bold text-white shadow-sm">
          Materi Prasyarat dan Materi Pecahan
        </button>

        <div className="flex w-full sm:w-64 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
          <Search size={14} className="text-slate-400" />
          <input
            type="text"
            placeholder="Cari materi..."
            className="w-full bg-transparent text-[12px] outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Grid Kartu */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {materiDasar.map((item, index) => {
          const Icon = item.icon;
          // Cek apakah kartu ini harus terkunci
          const showLock = item.isLockedForFree && !isPremium;

          return (
            <div
              key={index}
              className="relative rounded-2xl bg-white p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col"
            >
              {/* Bagian Atas Kartu */}
              <div className="flex items-start justify-between mb-4">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}>
                  <Icon size={20} />
                </span>
                
                {/* Ikon Gembok di Tengah Atas (jika terkunci) */}
                {showLock ? (
                   <div className="absolute left-1/2 -translate-x-1/2 top-5 flex flex-col items-center justify-center text-slate-400">
                     <Lock size={18} />
                   </div>
                ) : null}

                <span className="rounded-full bg-[#DCFCE7] px-2.5 py-1 text-[10px] font-bold text-[#16A34A]">
                  Materi
                </span>
              </div>

              {/* Teks Konten */}
              <div className="flex-1">
                <h3 className="text-[15px] font-bold text-slate-800">{item.title}</h3>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-500 mb-5">
                  {item.desc}
                </p>
              </div>

              {/* Tombol Aksi */}
              <Link
                href={showLock ? "#" : item.href}
                onClick={(e) => {
                  if (showLock) {
                    e.preventDefault();
                    alert("Silakan beli Paket 2 atau Paket 3 untuk mengakses materi ini.");
                  }
                }}
                className={`flex w-full items-center justify-center rounded-lg py-2.5 text-[12px] font-bold transition ${
                  showLock 
                    ? "bg-[#2563EB] text-white hover:bg-blue-700" // Tetap biru meski terkunci, sesuai gambar
                    : "bg-[#2563EB] text-white hover:bg-blue-700"
                }`}
              >
                Buka
              </Link>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="mt-8 flex items-center justify-center sm:justify-start gap-2 text-[11px] text-slate-500">
        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-slate-400 text-[10px]">i</span>
        Materi pecahan tersedia dipakai berbayar. Pilih paket berbayar 2 atau 3 untuk mengakses level tersebut.
      </div>
    </div>
  );
}