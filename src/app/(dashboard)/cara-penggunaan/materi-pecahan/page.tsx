import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TutorialMateriPecahanPage() {
  return (
    <div className="mx-auto max-w-5xl  font-sans">
      
      {/* Tombol Kembali & Breadcrumb */}
      <div className="mb-6">
        <Link 
          href="/cara-penggunaan" 
          className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-600 hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} /> Cara Penggunaan
        </Link>
      </div>

      {/* Judul Utama */}
      <h1 className="text-center text-[22px] font-extrabold text-slate-800 mb-8">
        Akses Materi Pecahan
      </h1>

      {/* Gambar Tutorial */}
      <div className="w-full max-w-3xl mb-10">
        <Image 
          src="/images/cara-penggunaan/tutorial-pecahan.png" 
          alt="Tutorial Akses Materi Pecahan" 
          width={1200} 
          height={750} 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Teks Langkah-langkah */}
      <div className=" ">
        <ol className="space-y-2 text-[13px] text-slate-700 leading-relaxed list-decimal list-inside">
          <li>Klik Materi Pecahan di menu kiri.</li>
          <li>
            Pilih topik yang ingin dipelajari:
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-slate-600">
              <li>Operasi Penjumlahan</li>
              <li>Operasi Pengurangan</li>
              <li>Operasi Perkalian</li>
              <li>Operasi Pembagian</li>
            </ul>
          </li>
          <li>Klik Buka pada topik informasi. Topik membahas operasi dasar dan operasi bentuk pecahan.</li>
          <li>Gunakan kolom Cari materi... jika ingin mencari topik tertentu.</li>
        </ol>
        
        <p className="mt-4 text-[13px] text-slate-500 italic">
          Semua materi dilengkapi visualisasi, bahasa isyarat, dan latihan interaktif.
        </p>
      </div>

    </div>
  );
}