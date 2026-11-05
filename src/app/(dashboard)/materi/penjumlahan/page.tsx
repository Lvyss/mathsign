import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Info, CheckCircle2 } from "lucide-react";

export default function OperasiPenjumlahanPage() {
  return (
    <div className="mx-auto max-w-6xl pb-20 font-sans">
      
      {/* Tombol Kembali & Breadcrumb */}
      <div className="">
        <Link 
          href="/materi-pecahan" 
          className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-600 hover:text-primary transition-colors mb-3"
        >
          <ArrowLeft size={16} /> Operasi Penjumlahan
        </Link>
        <div>
          <span className="inline-block rounded-full bg-[#2563EB] px-4 py-1.5 text-[11px] font-bold text-white">
            Materi Prasyarat
          </span>
        </div>
      </div>

      {/* Judul Utama */}
      <h1 className="text-center text-[22px] font-extrabold text-slate-800 mb-6">Operasi Penjumlahan</h1>

      {/* Bagian Pengantar */}
      <div className="text-[13px] text-slate-700 leading-relaxed mb-6 space-y-1">
        <p>
          Penjumlahan adalah cara mencari jumlah dua bilangan atau lebih. Penjumlahan menggunakan simbol tambah (+).
          Perhatikan contoh berikut!
        </p>
      </div>

      {/* Gambar Apel */}
      <div className="mb-4 w-full">
        <Image 
          src="/images/materi/penjumlahan/apel-penjumlahan.png" 
          alt="Ilustrasi Penjumlahan Apel" 
          width={800} 
          height={300} 
          className="object-contain" // Hapus mx-auto agar menempel ke kiri
        />
      </div>
      
      <p className="text-[13px] text-slate-700 mb-8">
        Jadi, jumlah apel semuanya adalah 18 apel.
      </p>

      {/* Sub-judul 1: Cara Melakukan Penjumlahan */}
      {/* Sub-judul 1: Cara Melakukan Penjumlahan */}
      <div className="mb-4 flex items-center gap-3 rounded-lg bg-[#EBF3FF] p-3.5 text-[14px] font-extrabold text-[#2563EB]">
        {/* Ikon Lingkaran Biru dengan Huruf A */}
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[12px] font-bold text-white">
          A
        </span>
        Cara Melakukan Penjumlahan
      </div>
      <p className="text-[13px] text-slate-700 mb-6">
        Cara melakukan penjumlahan ada dua cara, yaitu susun panjang dan susun pendek.
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
        <p className="text-[13px] font-bold text-slate-800 mb-3">1.) 23 + 14 =</p>
        <div className="bg-white rounded-xl p-4 mb-4 inline-block">
          <Image 
            src="/images/materi/penjumlahan/susun-panjang-1.png" 
            alt="Susun Panjang 23 + 14" 
            width={350} 
            height={200} 
            className="object-contain"
          />
        </div>
        <div className="text-[12px] text-slate-600 mb-8 space-y-0.5">
          <p>Jumlah : 30 + 7 = 37</p>
          <p>Jadi, 23 + 14 = 37</p>
        </div>

        {/* Soal 1.2 */}
        <p className="text-[13px] font-bold text-slate-800 mb-3">2.) 132 + 214 =</p>
        <div className="bg-white rounded-xl p-4 mb-4 inline-block">
          <Image 
            src="/images/materi/penjumlahan/susun-panjang-2.png" 
            alt="Susun Panjang 132 + 214" 
            width={400} 
            height={200} 
            className="object-contain"
          />
        </div>
        <div className="text-[12px] text-slate-600 space-y-0.5 mb-10">
          <p>Jumlah : 300 + 40 + 6 = 346</p>
          <p>Jadi, 132 + 214 = 346</p>
        </div>

        {/* --- CARA 2: SUSUN PENDEK (Masih di dalam card yang sama) --- */}
        <h3 className="text-[14px] font-bold text-[#C2410C] mb-4">Cara 2: Susun Pendek</h3>
        
        <div className="text-[12px] text-slate-700 mb-6 space-y-1">
          <p>Ratusan: Satu kotak biru = 100</p>
          <p>Puluhan: Satu batang hijau = 10</p>
          <p>Satuan: Satu titik orange = 1</p>
        </div>

        {/* Soal 2.1 */}
        <p className="text-[13px] font-bold text-slate-800 mb-3">1.) 23 + 14 =</p>
        <div className="bg-white rounded-xl p-4 mb-4 inline-block">
          <Image 
            src="/images/materi/penjumlahan/susun-pendek-1.png" 
            alt="Susun Pendek 23 + 14" 
            width={300} 
            height={200} 
            className="object-contain"
          />
        </div>
        <div className="text-[12px] text-slate-600 mb-8">
          <p>Jadi, 23 + 14 = 37</p>
        </div>

        {/* Soal 2.2 */}
        <p className="text-[13px] font-bold text-slate-800 mb-3">2.) 132 + 214 =</p>
        <div className="bg-white rounded-xl p-4 mb-4 inline-block">
          <Image 
            src="/images/materi/penjumlahan/susun-pendek-2.png" 
            alt="Susun Pendek 132 + 214" 
            width={350} 
            height={200} 
            className="object-contain"
          />
        </div>
        <div className="text-[12px] text-slate-600">
          <p>Jadi, 132 + 214 = 346</p>
        </div>

      </div>

      {/* Sub-judul 2: Penjumlahan dengan Menyimpan */}
      {/* Sub-judul 2: Penjumlahan dengan Menyimpan */}
      <div className="mb-4 flex items-center gap-3 rounded-lg bg-[#EBF3FF] p-3.5 text-[14px] font-extrabold text-[#2563EB]">
        {/* Ikon Lingkaran Biru dengan Huruf B */}
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[12px] font-bold text-white">
          B
        </span>
        Cara Melakukan Penjumlahan dengan Menyimpan
      </div>
      <p className="text-[13px] text-slate-700 mb-6">
        Jika jumlahnya 10 atau lebih, simpan ke tempat berikutnya.
      </p>

      <div className="rounded-2xl bg-[#FFF8ED] p-6 border border-[#FFEDD5]">
        <h3 className="text-[14px] font-bold text-[#C2410C] mb-4">Cara 1: Susun Panjang dengan Menyimpan</h3>
        
        <div className="text-[12px] text-slate-700 mb-4 space-y-1">
          <p>Ratusan: Satu kotak biru = 100</p>
          <p>Puluhan: Satu batang hijau = 10</p>
          <p>Satuan: Satu titik orange = 1</p>
        </div>

        {/* Kotak Ingat */}
        <div className="mb-6 rounded-xl border border-[#FDBA74] bg-white p-4">
          <p className="text-[11px] font-bold text-[#C2410C] mb-1">INGAT</p>
          <p className="text-[12px] text-slate-700">10 titik orange = 1 batang hijau</p>
          <p className="text-[12px] text-slate-700">10 batang hijau = 1 kotak biru</p>
        </div>

        <p className="text-[13px] font-bold text-slate-800 mb-3">1.) 27 + 15 =</p>
        <div className="bg-white rounded-xl p-4 mb-4 inline-block">
          <Image 
            src="/images/materi/penjumlahan/susun-panjang-simpan.png" 
            alt="Susun Panjang dengan Menyimpan 27 + 15" 
            width={400} 
            height={250} 
            className="object-contain"
          />
        </div>
        <div className="text-[12px] text-slate-600 mb-8 space-y-0.5">
          <p>Jumlah : 40 + 2 = 42</p>
          <p>Jadi, 27 + 15 = 42</p>
        </div>

        {/* CARA 2 SIMPAN */}
        <h3 className="text-[14px] font-bold text-[#C2410C] mb-4">Cara 2: Susun Pendek dengan Menyimpan</h3>
        
        <div className="text-[12px] text-slate-700 mb-4 space-y-1">
          <p>Ratusan: Satu Kotak Biru = 100</p>
          <p>Puluhan: Satu Batang Hijau = 10</p>
          <p>Satuan: Satu Titik Orange = 1</p>
        </div>

        <div className="mb-6 rounded-xl border border-[#FDBA74] bg-white p-4">
          <p className="text-[11px] font-bold text-[#C2410C] mb-1">INGAT</p>
          <p className="text-[12px] text-slate-700">10 titik orange = 1 batang hijau</p>
          <p className="text-[12px] text-slate-700">10 batang hijau = 1 kotak biru</p>
        </div>

        <p className="text-[13px] font-bold text-slate-800 mb-3">1.) 27 + 15 =</p>
        <div className="bg-white rounded-xl p-4 mb-4 inline-block">
          <Image 
            src="/images/materi/penjumlahan/susun-pendek-simpan.png" 
            alt="Susun Pendek dengan Menyimpan 27 + 15" 
            width={300} 
            height={250} 
            className="object-contain"
          />
        </div>
        <div className="text-[12px] text-slate-600">
          <p>Jadi, 27 + 15 = 42</p>
        </div>

      </div>

      {/* KESIMPULAN */}
      <div className="mt-8 rounded-xl border border-[#FDBA74] bg-[#FFF8ED] p-4 text-center">
        <p className="text-[12px] text-[#C2410C] font-extrabold mb-1">KESIMPULAN</p>
        <p className="text-[12px] text-slate-700 leading-relaxed">
          Ada 2 cara untuk melakukan operasi penjumlahan: penjumlahan biasa dan penjumlahan dengan menyimpan. Masing-masing cara ada yang menggunakan susun panjang atau susun pendek. Jika jumlah satuan mencapai 10, kita dapat mengelompokkan 10 satuan menjadi 1 puluhan.
        </p>
      </div>

    </div>
  );
}