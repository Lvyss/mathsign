import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TutorialMateriIsyaratPage() {
  return (
    <div className="max-w-5xl font-sans">
      
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
        Akses Materi Bahasa Isyarat
      </h1>
      <p className="text-center text-[13px] text-slate-500 mb-8">
        Ikuti kotak dan instruksi merah untuk membuka serta mempelajari materi.
      </p>


    </div>
  );
}