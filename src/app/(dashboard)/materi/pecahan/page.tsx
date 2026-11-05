import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DetailMateriPecahanPage() {
  return (
    <div className="mx-auto max-w-6xl pb-20 font-sans">
      
      {/* Tombol Kembali & Breadcrumb */}
      <div className="mb-6">
        <Link 
          href="/materi-pecahan" 
          className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-600 hover:text-primary transition-colors mb-3"
        >
          <ArrowLeft size={16} /> Materi Pecahan
        </Link>
        <div>
          <span className="inline-block rounded-full bg-[#2563EB] px-4 py-1.5 text-[11px] font-bold text-white">
            Materi Prasyarat
          </span>
        </div>
      </div>

      {/* Judul Utama */}
      <h1 className="text-center text-[22px] font-extrabold text-slate-800 mb-6">Materi Pecahan</h1>

         {/* Sub-judul A */}
      <div className="mb-2 flex items-center gap-3 rounded-lg bg-[#EBF3FF] p-3.5 text-[14px] font-extrabold text-[#2563EB]">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[12px] font-bold text-white">
          A
        </span>
        Mengenal Pecahan Sederhana
      </div>

      <p className="text-[13px] text-slate-700 leading-relaxed mb-4">
        Pecahan adalah bagian dari benda utuh yang dibagi sama besar.
      </p>

      {/* Bagian Atas: Ilustrasi Pizza & Lingkaran 1/2 */}
      <div className="mb-4">
        {/* Gunakan relative tanpa memaksa tinggi (h-auto), cukup atur lebarnya */}
        <div className="relative w-[330px] h-auto">
          <Image 
            src="/images/materi/pecahan/pizza-1-2.png" 
            alt="Pizza 1/2" 
            width={280}
            height={150} // Angka ini tidak akan dipakai jika menggunakan w-auto, tapi wajib diisi
            className="object-contain w-full h-auto" 
          />
        </div>
      </div>

      <p className="text-[13px] text-slate-700 mb-10">
        1 pizza dipotong jadi 2 bagian sama besar. Satu bagian ditulis 1/2.<br/>
        Jadi, 1/2 artinya 1 dibagi 2.
      </p>

      {/* Card Oranye Besar (Mengenal Bentuk Pecahan Lewat Gambar) */}
      <div className="rounded-2xl bg-[#FFF8ED] p-6 border border-[#FFEDD5] mb-8">
              <div className="mb-6 inline-block rounded-md border border-[#FDBA74] bg-transparent px-4 py-1.5 text-[13px] font-bold text-[#C2410C]">
        Mengenal Bentuk Pecahan Lewat Gambar
      </div>
        
        <div className="space-y-8 flex flex-col items-center md:items-start">
          {/* Pizza 1/3 */}
          <div>
            <div className="relative w-[250px] h-[250px] mb-2">
              <Image src="/images/materi/pecahan/pizza-1-3.png" alt="Pizza 1/3" fill className="object-contain" />
            </div>
            <p className="text-[12px] text-slate-700">1 pizza dipotong jadi 3 bagian sama besar.<br/>Jadi, dibaca 1/3, artinya 1 bagian dibagi 3 bagian sama besar.</p>
          </div>

          {/* Pizza 1/4 */}
          <div>
            <div className="relative w-[250px] h-[250px] mb-2">
              <Image src="/images/materi/pecahan/pizza-1-4.png" alt="Pizza 1/4" fill className="object-contain" />
            </div>
            <p className="text-[12px] text-slate-700">1 kue dipotong jadi 4 bagian sama besar.<br/>Jadi, dibaca 1/4, artinya 1 bagian dibagi 4 bagian sama besar.</p>
          </div>

          {/* Semangka 1/5 */}
          <div>
            <div className="relative w-[250px] h-[250px] mb-2">
              <Image src="/images/materi/pecahan/semangka-1-5.png" alt="Semangka 1/5" fill className="object-contain" />
            </div>
            <p className="text-[12px] text-slate-700">1 semangka dipotong jadi 5 bagian sama besar.<br/>Jadi, dibaca 1/5, artinya 1 bagian dibagi 5 bagian sama besar.</p>
          </div>
        </div>

        {/* Pembilang & Penyebut */}
        <div className="mt-10 border-t border-[#FFEDD5] pt-6">
          <div className="mb-4 inline-block rounded-md border border-[#FDBA74] bg-transparent px-3 py-1.5 text-[12px] font-bold text-[#C2410C]">
            Mengenal Pembilang dan Penyebut
          </div>

          <div className=" w-full flex mb-4">
            <Image src="/images/materi/pecahan/pembilang-penyebut.png" alt="Ilustrasi Pembilang dan Penyebut" width={500} height={250} className="object-contain" />
          </div>

          <div className="text-[12px] text-slate-700 mb-4 space-y-1">
            <p><span className="font-bold text-[#C2410C]">Pembilang:</span> Diambil 1 bagian.</p>
            <p><span className="font-bold text-[#C2410C]">Penyebut:</span> Semangka dipotong jadi 2 bagian sama besar.</p>
            <p>Maka, bentuk pecahannya:</p>
          </div>

          <div className="mb-6 w-full max-w-sm">
            <Image src="/images/materi/pecahan/gambar-6.png" alt="Penjelasan Pembilang dan Penyebut" width={300} height={150} className="object-contain" />
          </div>

          <p className="text-[12px] text-slate-700">1 adalah pembilang dan 2 adalah penyebut.</p>
          <p className="text-[12px] text-slate-700">Jadi, ditulis 1/2 dan dibaca satu per dua.</p>
        </div>
      </div>

      {/* Sub-judul B */}
      <div className="mb-6 flex items-center gap-3 rounded-lg bg-[#EBF3FF] p-3.5 text-[14px] font-extrabold text-[#2563EB]">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[12px] font-bold text-white">
          B
        </span>
        Jenis-Jenis Pecahan Sederhana
      </div>

      {/* 1. Pecahan Biasa */}
      <div className="mb-8">
        <h4 className="text-[13px] font-bold text-slate-800 mb-2">1.) Pecahan Biasa</h4>
        <p className="text-[12px] text-slate-700 mb-3">Pecahan ditulis terdiri dari pembilang (atas) dan penyebut (bawah).</p>
        <div className="relative w-[150px] h-[150px] mb-2">
           <Image src="/images/materi/pecahan/pizza-biasa.png" alt="Pecahan Biasa" fill className="object-contain" />
        </div>
        <p className="text-[12px] text-slate-700">4 bagian dari 10 bagian pizza ditulis 4/10.</p>
      </div>

      {/* 2. Pecahan Campuran */}
      <div className="mb-8">
        <h4 className="text-[13px] font-bold text-slate-800 mb-2">2.) Pecahan Campuran</h4>
        <p className="text-[12px] text-slate-700 mb-3">Pecahan campuran terdiri dari gabungan bilangan bulat (utuh) dan pecahan biasa.</p>
        <div className="flex gap-4 mb-2">
          <div className="relative w-[150px] h-[100px]">
             <Image src="/images/materi/pecahan/pizza-campuran-utuh.png" alt="Pizza Utuh" fill className="object-contain" />
          </div>
          <div className="relative w-[150px] h-[100px]">
             <Image src="/images/materi/pecahan/pizza-biasa.png" alt="Pizza 4/10" fill className="object-contain" />
          </div>
        </div>
        <p className="text-[12px] text-slate-700">Gabungan 1 pizza utuh dan 4 bagian dari 10 bagian pizza ditulis 1 4/10.</p>
      </div>

      {/* 3. Pecahan Desimal */}
      <div className="mb-8">
        <h4 className="text-[13px] font-bold text-slate-800 mb-2">3.) Pecahan desimal biasanya ditandai dengan tanda koma (,)</h4>
        <div className="text-[12px] text-slate-700 mb-3 space-y-1">
          <p>1 angka di belakang koma penyebutnya 10 (1/10).</p>
          <p>2 angka di belakang koma penyebutnya 100 (1/100).</p>
          <p>3 angka di belakang koma penyebutnya 1000 (1/1000).</p>
        </div>
        
        {/* Gambar Kotak Desimal */}
        <div className="relative w-[400px] h-[350px] mb-4">
           <Image src="/images/materi/pecahan/kotak-desimal.png" alt="Pecahan Desimal" fill className="object-contain" />
        </div>

        {/* Pakai Gambar Pizza 4/10 yang sama */}
        <div className="relative w-[180px] h-[180px] mb-2">
           <Image src="/images/materi/pecahan/pizza-biasa.png" alt="Pecahan Desimal" fill className="object-contain" />
        </div>
        <p className="text-[12px] text-slate-700">4 bagian dari 10 bagian pizza dalam bentuk pecahan desimal ditulis 0,4.</p>
      </div>

      {/* 4. Pecahan Persen */}
      <div className="mb-8">
        <h4 className="text-[13px] font-bold text-slate-800 mb-2">4.) Pecahan persen selalu ditandai dengan angka 100.</h4>
        <div className="text-[12px] text-slate-700 mb-4 space-y-1">
          <p>15% artinya 1 bagian dari total 100 bagian (1/100).</p>
          <p>25% artinya 3 bagian dari total 100 bagian (25/100).</p>
          <p>100% artinya seluruh bagian atau total 100 dari 100 bagian.</p>
        </div>

        {/* Gambar Kotak Persen */}
        <div className="relative w-[400px] h-[200px] mb-4">
           <Image src="/images/materi/pecahan/kotak-persen.png" alt="Visual Persen" fill className="object-contain" />
        </div>
        
        {/* Pakai Gambar Pizza 4/10 yang sama */}
        <div className="relative w-[180px] h-[180px] mb-2">
           <Image src="/images/materi/pecahan/pizza-biasa.png" alt="Pecahan Persen" fill className="object-contain" />
        </div>
        <p className="text-[12px] text-slate-700">4 bagian dari 10 bagian pizza dalam bentuk pecahan persen ditulis 40%.</p>
      </div>

      {/* Sub-judul C: Penjumlahan */}
      <div className="mb-4 flex items-center gap-3 rounded-lg bg-[#EBF3FF] p-3.5 text-[14px] font-extrabold text-[#2563EB]">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[12px] font-bold text-white">
          C
        </span>
        Materi Penjumlahan (Penyebut sama)
      </div>
      
      <div className="text-[12px] text-slate-700 mb-6 space-y-1">
        <p>Aturan:</p>
        <p>Penjumlahan dilakukan (+)</p>
        <p>Penyebut sama + Penyebut tetap</p>
      </div>

      {/* Card Oranye Penjumlahan */}
      <div className="rounded-2xl bg-[#FFF8ED] p-6 border border-[#FFEDD5] mb-8">
        <h3 className="text-[13px] font-bold text-[#C2410C] mb-4">Contoh 1</h3>
        <p className="text-[12px] text-slate-700 mb-4">Pizza dibagi 8 bagian sama besar.<br/>Andi mengambil 1/8. Lisa mengambil 2/8.</p>
        
        <div className=" mb-4">
          <Image src="/images/materi/pecahan/penjumlahan-pizza.png" alt="Penjumlahan Pizza" width={600} height={250} className="object-contain" />
        </div>
        
        <div className="text-[12px] text-slate-700 leading-relaxed">
          Jadi, total pizza yang diambil: 1/8 + 2/8 = 3/8.
        </div>

        {/* Contoh 2 (Pita) */}
              <div className="mt-8 mb-4 inline-block rounded-md border border-[#FDBA74] bg-transparent px-3 py-1 text-[13px] font-bold text-[#C2410C]">
        Contoh 2
      </div>
        <p className="text-[12px] text-slate-700 mb-4">Pita merah panjangnya 2 1/5 meter.<br/>Pita hijau panjangnya 3 1/5 meter.<br/>Berapa panjang kedua pita itu dijumlahkan?</p>
        
        {/* 1. Gambar Visual Pita */}
        <div className=" mb-4 w-full">
          <Image 
            src="/images/materi/pecahan/gambar-pita.png" 
            alt="Visual Pita Merah dan Hijau" 
            width={600} 
            height={250} 
            className="object-contain" 
          />
        </div>

        {/* 2. Gambar Tabel Cara 1 & 2 */}
        <div className=" mb-4 w-full">
          <Image 
            src="/images/materi/pecahan/tabel-pita.png" 
            alt="Tabel Perhitungan Cara 1 dan Cara 2" 
            width={600} 
            height={350} 
            className="object-contain" 
          />
        </div>

        <p className="text-[12px] text-slate-700">Jadi, panjang kedua pita dijumlahkan adalah 5 2/5.</p>
      </div>

      {/* Sub-judul C (Atau lanjutan): Pengurangan */}
      <div className="mb-4 flex items-center gap-3 rounded-lg bg-[#EBF3FF] p-3.5 text-[14px] font-extrabold text-[#2563EB]">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[12px] font-bold text-white">
          C
        </span>
        Materi Hasil Pengurangan Dua Pecahan (Penyebut sama)
      </div>
      
      <div className="text-[12px] text-slate-700 mb-6 space-y-1">
        <p>Aturan:</p>
        <p>Pengurangan dilakukan (-)</p>
        <p>Penyebut sama + Penyebut tetap</p>
      </div>

      {/* Card Oranye Pengurangan */}
      <div className="rounded-2xl bg-[#FFF8ED] p-6 border border-[#FFEDD5] mb-8">
              <div className="mb-4 inline-block rounded-md border border-[#FDBA74] bg-transparent px-3 py-1 text-[13px] font-bold text-[#C2410C]">
        Contoh 1
      </div>
        <p className="text-[12px] text-slate-700 mb-4">Arga harus melukis 2/3 bagian kertas.<br/>Arga sudah melukis 1/3 bagian kertas.<br/>Berapa bagian kertas yang belum dilukis?</p>
        
        {/* Gambar Kertas Pengurangan */}
        <div className=" mb-4">
          <Image src="/images/materi/pecahan/kertas-pengurangan.png" alt="Pengurangan Kertas" width={600} height={200} className="object-contain " />
        </div>

        <p className="text-[12px] text-slate-700">Jadi, sisa kertas yang belum dilukis adalah 1/3 bagian.</p>

        {/* Contoh 2 (Apel) */}
        <div className="mt-8 mb-4 inline-block rounded-md border border-[#FDBA74] bg-transparent px-3 py-1 text-[13px] font-bold text-[#C2410C]">
          Contoh 2
        </div>
        <p className="text-[12px] text-slate-700 mb-4">Asep membeli 8 apel. Ia memberikan 6 apel kepada Budi.<br/>Berapa bagian apel Asep yang masih dimiliki Budi?</p>
        
        {/* Gambar Apel Pengurangan */}
        <div className=" mb-4">
          <Image src="/images/materi/pecahan/apel-pengurangan.png" alt="Pengurangan Apel" width={600} height={200} className="object-contain " />
        </div>
        
        <p className="text-[12px] text-slate-700 mt-4">Jadi, sisa apel Asep yang masih dimiliki Budi adalah 4/8 bagian.</p>
      </div>

    </div>
  );
}