import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// ==========================================
// DATA MATERI BAHASA ISYARAT
// ==========================================
const materiIsyarat = [
  {
    title: "Pengenalan Angka",
    desc: "Pelajari pengenalan angka 1-10 dalam bahasa isyarat melalui video.",
    href: "/materi-isyarat/angka",
    iconType: "number",
  },
  {
    title: "Istilah Matematika",
    desc: "Pelajari isyarat istilah matematika: penjumlahan, pengurangan, perkalian, pembagian, desimal, persen, pecahan, serta garis bilangan.",
    href: "/materi-isyarat/istilah",
    iconType: "math",
  },
  {
    title: "Pecahan Sederhana",
    desc: "Pelajari pecahan sederhana (bentuk a/b) melalui video.",
    href: "/materi-isyarat/sederhana",
    iconType: "fraction-ab",
  },
  {
    title: "Pecahan Biasa",
    desc: "Pelajari pecahan biasa dalam bahasa isyarat melalui video.",
    href: "/materi-isyarat/biasa",
    iconType: "fraction-ab",
  },
  {
    title: "Pecahan Campuran",
    desc: "Pelajari pecahan campuran dalam bahasa isyarat melalui video.",
    href: "/materi-isyarat/campuran",
    iconType: "fraction-mixed",
  },
  {
    title: "Pecahan Desimal",
    desc: "Pelajari pecahan desimal dalam bahasa isyarat melalui video.",
    href: "/materi-isyarat/desimal",
    iconType: "fraction-desimal",
  },
  {
    title: "Pecahan Persen",
    desc: "Pelajari pecahan persen dalam bahasa isyarat melalui video.",
    href: "/materi-isyarat/persen",
    iconType: "fraction-persen",
  },
  {
    title: "Hasil Penjumlahan Dua Pecahan",
    desc: "Pelajari penjumlahan dua pecahan dalam bahasa isyarat melalui video.",
    href: "/materi-isyarat/penjumlahan",
    iconType: "fraction-add",
  },
  {
    title: "Hasil Pengurangan Dua Pecahan",
    desc: "Pelajari pengurangan dua pecahan dalam bahasa isyarat melalui video.",
    href: "/materi-isyarat/pengurangan",
    iconType: "fraction-sub",
  },
];

// Komponen pembuat ikon kustom
const CardIcon = ({ type }: { type: string }) => {
  const baseClass = "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#E8F0FE] text-[#2563EB] font-bold text-lg";
  
  if (type === "number") return <div className={baseClass}>123</div>;
  if (type === "math") return <div className={`${baseClass} text-sm`}>+-×÷</div>;
  if (type === "fraction-ab") return (
    <div className={baseClass}>
      <div className="flex flex-col items-center text-[13px] leading-none">
        <span>a</span>
        <span className="w-4 h-[1.5px] bg-[#2563EB] my-[2px]"></span>
        <span>b</span>
      </div>
    </div>
  );
  if (type === "fraction-mixed") return (
    <div className={baseClass}>
      <div className="flex items-center gap-1 text-[13px] leading-none">
        <span>a</span>
        <div className="flex flex-col items-center">
          <span>1</span>
          <span className="w-3 h-[1.5px] bg-[#2563EB] my-[2px]"></span>
          <span>b</span>
        </div>
      </div>
    </div>
  );
  if (type === "fraction-desimal") return <div className={baseClass}>0,1</div>;
  if (type === "fraction-persen") return <div className={baseClass}>%</div>;
  if (type === "fraction-add") return (
    <div className={baseClass}>
      <div className="flex items-center gap-1 text-[13px] leading-none">
        <div className="flex flex-col items-center">
          <span>a</span>
          <span className="w-3 h-[1.5px] bg-[#2563EB] my-[2px]"></span>
          <span>b</span>
        </div>
        <span className="text-[11px]">+</span>
        <div className="flex flex-col items-center">
          <span>a</span>
          <span className="w-3 h-[1.5px] bg-[#2563EB] my-[2px]"></span>
          <span>b</span>
        </div>
      </div>
    </div>
  );
  if (type === "fraction-sub") return (
    <div className={baseClass}>
      <div className="flex items-center gap-1 text-[13px] leading-none">
        <div className="flex flex-col items-center">
          <span>a</span>
          <span className="w-3 h-[1.5px] bg-[#2563EB] my-[2px]"></span>
          <span>b</span>
        </div>
        <span className="text-[11px]">-</span>
        <div className="flex flex-col items-center">
          <span>a</span>
          <span className="w-3 h-[1.5px] bg-[#2563EB] my-[2px]"></span>
          <span>b</span>
        </div>
      </div>
    </div>
  );

  return null;
};

export default function MateriBahasaIsyaratPage() {
  return (
    <div className=" max-w-5xl  font-sans">
      

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[22px] font-extrabold text-slate-800 mb-2">Materi Bahasa Isyarat</h1>
        <p className="text-[12px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Pilih akses yang sesuai kebutuhanmu, dari langkah pertama hingga belajar materi pecahan.
        </p>
      </div>

      {/* Grid Kartu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {materiIsyarat.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl bg-white p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col"
          >
            <div className="flex items-start gap-4 mb-4">
              <CardIcon type={item.iconType} />
              <div className="pt-1">
                <h3 className="text-[14px] font-bold text-slate-800 mb-1">{item.title}</h3>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Tombol Aksi */}
            <Link
              href={item.href}
              className="flex w-full items-center justify-center rounded-lg bg-[#2563EB] py-2.5 text-[12px] font-bold text-white transition hover:bg-blue-700 mt-auto"
            >
              Buka
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}