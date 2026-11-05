import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function OperasiPenguranganPage() {
  return (
    <div className="mx-auto max-w-6xl pb-20 font-sans">
      
      {/* Tombol Kembali & Breadcrumb */}
      <div className="">
        <Link 
          href="/materi-pecahan" 
          className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-600 hover:text-primary transition-colors mb-3"
        >
          <ArrowLeft size={16} /> Operasi Pengurangan
        </Link>
        <div>
          <span className="inline-block rounded-full bg-[#2563EB] px-4 py-1.5 text-[11px] font-bold text-white">
            Materi Prasyarat
          </span>
        </div>
      </div>

      {/* Judul Utama */}
      <h1 className="text-center text-[22px] font-extrabold text-slate-800 mb-6 mt-4">Operasi Pengurangan</h1>

      {/* Bagian Pengantar */}
      <div className="text-[13px] text-slate-700 leading-relaxed mb-6 space-y-1">
        <p>
          Pengurangan adalah cara mencari selisih dua bilangan. Pengurangan menggunakan simbol tambah (-).
          Perhatikan contoh berikut!
        </p>
      </div>

      {/* Gambar Apel */}
      <div className="mb-4 w-full">
        <Image 
          src="/images/materi/pengurangan/apel-pengurangan.png" 
          alt="Ilustrasi Pengurangan Apel" 
          width={800} 
          height={300} 
          className="object-contain"
        />
      </div>
      
      <p className="text-[13px] text-slate-700 mb-8">
        Jadi, apel yang tersisa adalah 5 apel.
      </p>

      {/* Sub-judul: Cara Melakukan Pengurangan */}
      <div className="mb-4 flex items-center gap-3 rounded-lg bg-[#EBF3FF] p-3.5 text-[14px] font-extrabold text-[#2563EB]">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[12px] font-bold text-white">
          A
        </span>
        Cara Melakukan Pengurangan
      </div>
      <p className="text-[13px] text-slate-700 mb-6">
        Cara melakukan pengurangan ada dua cara, yaitu susun panjang dan susun pendek.
      </p>

      {/* ==========================================
          CARD GABUNGAN: CARA 1 & CARA 2
          ========================================== */}
      <div className="rounded-2xl bg-[#FFF8ED] p-6 border border-[#FFEDD5] mb-8">
        
        {/* --- CARA 1: SUSUN PANJANG --- */}
        <h3 className="text-[14px] font-bold text-[#C2410C] mb-4">Cara 1: Susun Panjang</h3>
        
        <div className="text-[12px] text-slate-700 mb-6 space-y-1">
          <p>Ratusan: Satu kotak biru = 100</p>
          <p>Puluhan: Satu batang hijau = 10</p>
          <p>Satuan: Satu titik orange = 1</p>
        </div>

        {/* Soal 1.1 */}
        <p className="text-[13px] font-bold text-slate-800 mb-3">1.) 58 - 23 =</p>
        <div className="bg-white rounded-xl p-4 mb-4 inline-block">
          <Image 
            src="/images/materi/pengurangan/susun-panjang-pengurangan-1.png" 
            alt="Susun Panjang 58 - 23" 
            width={350} 
            height={200} 
            className="object-contain"
          />
        </div>
        <div className="text-[12px] text-slate-600 mb-8 space-y-0.5">
          <p>Sisa : 30 + 5 = 35</p>
          <p>Jadi, 58 - 23 = 35</p>
        </div>

        {/* Soal 1.2 */}
        <p className="text-[13px] font-bold text-slate-800 mb-3">2.) 357 - 132 =</p>
        <div className="bg-white rounded-xl p-4 mb-4 inline-block">
          <Image 
            src="/images/materi/pengurangan/susun-panjang-pengurangan-2.png" 
            alt="Susun Panjang 357 - 132" 
            width={400} 
            height={200} 
            className="object-contain"
          />
        </div>
        <div className="text-[12px] text-slate-600 space-y-0.5 mb-10">
          <p>Sisa : 200 + 20 + 5 = 225</p>
          <p>Jadi, 357 - 132 = 225</p>
        </div>

        {/* --- CARA 2: SUSUN PENDEK --- */}
        <h3 className="text-[14px] font-bold text-[#C2410C] mb-4">Cara 2: Susun Pendek</h3>
        
        <div className="text-[12px] text-slate-700 mb-6 space-y-1">
          <p>Ratusan: Satu Kotak Biru = 100</p>
          <p>Puluhan: Satu Batang Hijau = 10</p>
          <p>Satuan: Satu Titik Orange = 1</p>
        </div>

        {/* Soal 2.1 */}
        <p className="text-[13px] font-bold text-slate-800 mb-3">1.) 58 - 23 =</p>
        <div className="bg-white rounded-xl p-4 mb-4 inline-block">
          <Image 
            src="/images/materi/pengurangan/susun-pendek-pengurangan-1.png" 
            alt="Susun Pendek 58 - 23" 
            width={300} 
            height={200} 
            className="object-contain"
          />
        </div>
        <div className="text-[12px] text-slate-600 mb-8">
          <p>Jadi, 58 - 23 = 35</p>
        </div>

        {/* Soal 2.2 */}
        <p className="text-[13px] font-bold text-slate-800 mb-3">2.) 357 - 132 =</p>
        <div className="bg-white rounded-xl p-4 mb-4 inline-block">
          <Image 
            src="/images/materi/pengurangan/susun-pendek-pengurangan-2.png" 
            alt="Susun Pendek 357 - 132" 
            width={350} 
            height={200} 
            className="object-contain"
          />
        </div>
        <div className="text-[12px] text-slate-600">
          <p>Jadi, 357 - 132 = 225</p>
        </div>

      </div>

      {/* KESIMPULAN (Desain digabung dalam satu baris) */}
      <div className="mt-8 rounded-xl border border-[#FDBA74] bg-[#FFF8ED] p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <p className="text-[12px] text-[#C2410C] font-extrabold whitespace-nowrap">KESIMPULAN</p>
        <p className="text-[12px] text-slate-700 leading-relaxed">
          Ada dua cara untuk melakukan operasi pengurangan: susun panjang dan susun pendek.
        </p>
      </div>

    </div>
  );
}