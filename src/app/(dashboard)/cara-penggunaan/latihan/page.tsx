import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TutorialLatihanInteraktifPage() {
  return (
    <div className=" max-w-5xl font-sans">
      
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
      <h1 className="text-center text-[22px] font-extrabold text-slate-800 mb-2">
        Akses Latihan Interaktif
      </h1>
      <p className="text-center text-[13px] text-slate-500 mb-8">
        Ikuti kotak dan instruksi merah untuk membuka serta mempelajari materi.
      </p>

      {/* GAMBAR TUTORIAL */}
      <div className="w-full max-w-3xl mb-10">
        <Image 
          src="/images/cara-penggunaan/tutorial-latihan.png" 
          alt="Tutorial Akses Latihan Interaktif" 
          width={1200} 
          height={500} 
          className="w-full object-contain"
        />
      </div>

      {/* Teks Langkah-langkah */}
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* List Latihan Tersedia */}
        <div>
          <h2 className="text-[14px] font-bold text-slate-800 mb-2">Latihan terdiri menjadi 2 bagian:</h2>
          <p className="text-[13px] text-slate-700">Level 2 dan 3 hanya tersedia di paket berbayar (Paket 2 atau 3).</p>
        </div>

        {/* Cara Mengerjakan */}
        <div>
          <h2 className="text-[14px] font-bold text-slate-800 mb-2">Cara mengerjakan:</h2>
          <ol className="list-decimal list-inside space-y-2 text-[13px] text-slate-700 leading-relaxed">
            <li>Baca soal dan tentukan informasi penting dalam soal cerita.</li>
            <li>
              Isi visualisasi dari soal cerita yang diberikan:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1 text-slate-600">
                <li>Pilih dua pecahan pada langkah yang tepat.</li>
                <li>Pilih operasi pecahan yang sesuai.</li>
              </ul>
            </li>
            <li>
              Pilih operasi pecahan yang sesuai dengan jawabanmu.
            </li>
            <li>Isi pilihan jawaban berupa isyarat yang sesuai dengan jawaban.</li>
            <li>Konfirmasi jawaban: sistem otomatis memberi tahu apakah jawabanmu benar atau salah.</li>
          </ol>
        </div>

      </div>

    </div>
  );
}