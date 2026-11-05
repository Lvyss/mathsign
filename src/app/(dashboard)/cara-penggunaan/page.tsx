import Link from "next/link";
import { ArrowLeft, BookOpen, Image as ImageIcon, PenTool } from "lucide-react";

const panduan = [
  {
    step: 1,
    title: "Akses Materi Pecahan",
    desc: "Klik menu Materi Pecahan untuk belajar materi prasyarat dan materi pecahan.",
    href: "/cara-penggunaan/materi-pecahan", // <-- GANTI BAGIAN INI
    icon: BookOpen,
    badgeColor: "bg-[#F59E0B]",
  },
  {
    step: 2,
    title: "Akses Materi Bahasa Isyarat",
    desc: "Pelajari materi dengan video bahasa isyarat yang mudah dipahami.",
    href: "/cara-penggunaan/materi-isyarat", // <-- GANTI BAGIAN INI
    icon: ImageIcon,
    badgeColor: "bg-[#10B981]",
  },
  {
    step: 3,
    title: "Akses Latihan Interaktif",
    desc: "Klik menu Latihan Interaktif untuk menguji pemahamanmu melalui soal yang menarik.",
    href: "/cara-penggunaan/latihan", // <-- GANTI BAGIAN INI
    icon: PenTool,
    badgeColor: "bg-[#2563EB]",
  },
];

export default function CaraPenggunaanPage() {
  return (
    <div className="mx-auto max-w-6xl py-8 font-sans">
      

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-[24px] font-extrabold text-slate-800 mb-2">Cara Penggunaan Fitur MathSign</h1>
        <p className="text-[13px] text-slate-500">
          Cermati langkah-langkah berikut agar dapat menggunakan fitur-fitur pada MathSign dengan benar.
        </p>
      </div>

      {/* Grid Kartu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {panduan.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="relative rounded-2xl bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col min-h-[280px]"
            >
              {/* Badge Angka */}
              <div className={`absolute left-6 top-6 flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-bold text-white shadow-sm ${item.badgeColor}`}>
                {item.step}
              </div>

              {/* Ikon Tengah */}
              <div className="flex justify-center mt-4 mb-6">
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#F0F7FF] text-[#3B82F6]">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
              </div>

              {/* Teks Konten (Rata Kiri) */}
              <div className="flex-1 mb-6">
                <h3 className="text-[15px] font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-[12px] leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>

              {/* Tombol Aksi */}
              <Link
                href={item.href}
                className="flex w-full items-center justify-center rounded-lg bg-[#2563EB] py-2.5 text-[12px] font-bold text-white transition hover:bg-blue-700 mt-auto"
              >
                Buka
              </Link>
            </div>
          );
        })}
      </div>

    </div>
  );
}