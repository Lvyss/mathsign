"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

// ==========================================
// DATA DUMMY SISWA
// ==========================================
const dataSiswa = {
  "Aditya Nur Santosa": {
    totalLevel: "1 / 3",
    progressWidth: "w-1/3",
    totalSoal: "10",
    jawabanBenar: "10",
    jawabanSalah: "0",
    belumDikerjakan: "11",
    levels: [
      { level: 1, title: "Soal Tipe Konkret", benar: "7", salah: "0", progress: "w-full", persen: "100%" },
      { level: 2, title: "Soal Tipe Konkret Menuju Abstrak", benar: "3", salah: "4", progress: "w-[43%]", persen: "43%" },
      { level: 3, title: "Soal Tipe Abstrak", benar: "0", salah: "0", progress: "w-0", persen: "0%" }
    ],
    materi: [
      { nama: "Materi mengenal pecahan sederhana", nilai: "66,7%", status: "Perlu latihan", color: "bg-orange-50 text-orange-600" },
      { nama: "Materi jenis pecahan biasa", nilai: "66,7%", status: "Perlu latihan", color: "bg-orange-50 text-orange-600" },
      { nama: "Materi jenis pecahan campuran", nilai: "66,7%", status: "Perlu latihan", color: "bg-orange-50 text-orange-600" },
      { nama: "Materi jenis pecahan desimal", nilai: "33,3%", status: "Perlu latihan", color: "bg-orange-50 text-orange-600" },
      { nama: "Materi jenis pecahan persen", nilai: "33,3%", status: "Perlu latihan", color: "bg-orange-50 text-orange-600" },
      { nama: "Materi hasil penjumlahan dua pecahan", nilai: "33,3%", status: "Perlu latihan", color: "bg-orange-50 text-orange-600" },
      { nama: "Materi hasil pengurangan dua pecahan", nilai: "33,3%", status: "Perlu latihan", color: "bg-orange-50 text-orange-600" }
    ],
    skorTotal: "47,6%",
    predikat: "Kurang",
    warnaSkor: "#F59E0B",
    teksSkor: "text-[#F59E0B]",
    dashOffset: "190"
  },
  "Nabila Putri Yasmine": {
    totalLevel: "2 / 3",
    progressWidth: "w-2/3",
    totalSoal: "18",
    jawabanBenar: "18",
    jawabanSalah: "0",
    belumDikerjakan: "3",
    levels: [
      { level: 1, title: "Soal Tipe Konkret", benar: "7", salah: "0", progress: "w-full", persen: "100%" },
      { level: 2, title: "Soal Tipe Konkret Menuju Abstrak", benar: "7", salah: "0", progress: "w-full", persen: "100%" },
      { level: 3, title: "Soal Tipe Abstrak", benar: "4", salah: "3", progress: "w-[57%]", persen: "57%" }
    ],
    materi: Array(7).fill({ nilai: "85,7%", status: "Dikuasai", color: "bg-[#E6F9F0] text-[#10B981]" }).map((m, i) => ({
      ...m,
      nama: ["Materi mengenal pecahan sederhana", "Materi jenis pecahan biasa", "Materi jenis pecahan campuran", "Materi jenis pecahan desimal", "Materi jenis pecahan persen", "Materi hasil penjumlahan dua pecahan", "Materi hasil pengurangan dua pecahan"][i]
    })),
    skorTotal: "85,7%",
    predikat: "Baik",
    warnaSkor: "#10B981",
    teksSkor: "text-[#10B981]",
    dashOffset: "52"
  },
  "Nihayatul Hafidzni": {
    totalLevel: "3 / 3",
    progressWidth: "w-full",
    totalSoal: "21",
    jawabanBenar: "21",
    jawabanSalah: "0",
    belumDikerjakan: "0",
    levels: [
      { level: 1, title: "Soal Tipe Konkret", benar: "7", salah: "0", progress: "w-full", persen: "100%" },
      { level: 2, title: "Soal Tipe Konkret Menuju Abstrak", benar: "7", salah: "0", progress: "w-full", persen: "100%" },
      { level: 3, title: "Soal Tipe Abstrak", benar: "7", salah: "0", progress: "w-full", persen: "100%" }
    ],
    materi: Array(7).fill({ nilai: "100%", status: "Dikuasai", color: "bg-[#E6F9F0] text-[#10B981]" }).map((m, i) => ({
      ...m,
      nama: ["Materi mengenal pecahan sederhana", "Materi jenis pecahan biasa", "Materi jenis pecahan campuran", "Materi jenis pecahan desimal", "Materi jenis pecahan persen", "Materi hasil penjumlahan dua pecahan", "Materi hasil pengurangan dua pecahan"][i]
    })),
    skorTotal: "100%",
    predikat: "Baik",
    warnaSkor: "#10B981",
    teksSkor: "text-[#10B981]",
    dashOffset: "0"
  },
  "Shofiyyah Awwalur Rohmah": {
    totalLevel: "2 / 3",
    progressWidth: "w-2/3",
    totalSoal: "14",
    jawabanBenar: "14",
    jawabanSalah: "0",
    belumDikerjakan: "7",
    levels: [
      { level: 1, title: "Soal Tipe Konkret", benar: "7", salah: "0", progress: "w-full", persen: "100%" },
      { level: 2, title: "Soal Tipe Konkret Menuju Abstrak", benar: "7", salah: "0", progress: "w-full", persen: "100%" },
      { level: 3, title: "Soal Tipe Abstrak", benar: "0", salah: "0", progress: "w-0", persen: "0%" }
    ],
    materi: Array(7).fill({ nilai: "66,7%", status: "Perlu latihan", color: "bg-orange-50 text-orange-600" }).map((m, i) => ({
      ...m,
      nama: ["Materi mengenal pecahan sederhana", "Materi jenis pecahan biasa", "Materi jenis pecahan campuran", "Materi jenis pecahan desimal", "Materi jenis pecahan persen", "Materi hasil penjumlahan dua pecahan", "Materi hasil pengurangan dua pecahan"][i]
    })),
    skorTotal: "66,7%",
    predikat: "Cukup",
    warnaSkor: "#10B981",
    teksSkor: "text-[#10B981]",
    dashOffset: "121"
  }
};

export default function BerandaSekolah() {
  const [showReport, setShowReport] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  
  // State untuk nama user
  const [userName, setUserName] = useState("Aisyah");

  // Baca cookie user_name
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const savedName = getCookie("user_name");
    if (savedName) {
      setUserName(decodeURIComponent(savedName));
    }
  }, []);

  // ==========================================
  // TAMPILAN 3: LAPORAN INDIVIDU SISWA
  // ==========================================
  if (showReport && selectedStudent) {
    const data = dataSiswa[selectedStudent as keyof typeof dataSiswa];

    return (
      <div className="mx-auto max-w-6xl font-sans">
        <div className=" flex items-center relative">
          <button onClick={() => setSelectedStudent(null)} className="inline-flex items-center gap-2 text-[14px] font-bold text-slate-700 hover:text-primary transition-colors z-10">
            <ArrowLeft size={18} /> Laporan Hasil
          </button>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-[22px] font-bold text-slate-800 w-full text-center truncate px-32">
            Laporan Hasil {selectedStudent}
          </h1>
        </div>

        <div className="flex gap-2 mb-5">
          <span className="rounded-md bg-[#EBF3FF] px-2.5 py-1 text-[11px] font-bold text-[#2563EB]">Paket 3 · Sekolah</span>
          <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">Diperbarui hari ini</span>
        </div>

        <div className="mb-4">
          <h2 className="text-[15px] font-bold text-slate-800 mb-0.5">Progress latihan interaktif</h2>
          <p className="text-[12px] text-slate-500 mb-3">Rekap hasil belajar dan perkembangan hasil belajar siswa.</p>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-[13px] font-bold text-slate-800 mb-1">Sudah menyelesaikan semua Level</h3>
            <p className="text-[26px] font-extrabold text-[#10B981] mb-4">{data.totalLevel} level selesai</p>
            <div className="w-full bg-slate-100 rounded-full h-[6px] mb-2">
              <div className={`bg-[#10B981] h-[6px] rounded-full ${data.progressWidth}`}></div>
            </div>
            <p className="text-[10px] text-slate-400">Progress ditampilkan dari hasil yang sudah dikerjakan.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {[
            { label: "Total Soal", val: data.totalSoal, sub: "Soal selesai dikerjakan", color: "text-blue-600", bg: "bg-blue-50", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
            { label: "Jawaban Benar", val: data.jawabanBenar, sub: "Soal dijawab benar", color: "text-[#10B981]", bg: "bg-[#ECFDF5]", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { label: "Jawaban Salah", val: data.jawabanSalah, sub: "Soal dijawab salah", color: "text-[#EF4444]", bg: "bg-[#FEF2F2]", icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { label: "Belum Dikerjakan", val: data.belumDikerjakan, sub: "Soal belum dijawab", color: "text-[#F59E0B]", bg: "bg-[#FFFBEB]", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-start gap-3">
               <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.bg} ${item.color}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon}/></svg>
               </div>
               <div>
                  <p className={`text-[10px] font-bold ${item.color}`}>{item.label}</p>
                  <p className="text-[20px] font-extrabold text-slate-800 leading-tight">{item.val}</p>
                  <p className="text-[9px] text-slate-500 leading-tight mt-0.5">{item.sub}</p>
               </div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h2 className="text-[15px] font-bold text-slate-800 mb-0.5">Hasil setup level</h2>
          <p className="text-[12px] text-slate-500 mb-3">Setup level terdiri dari 7 soal pilihan ganda.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {data.levels.map((item) => (
              <div key={item.level} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-[11px] font-bold text-slate-800 mb-2">Level {item.level} · {item.title}</p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-medium text-[#10B981]">{item.benar} soal benar</span>
                  <span className="text-[11px] font-medium text-[#EF4444]">{item.salah} soal salah</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-[5px] mb-1.5">
                  <div className={`bg-[#10B981] h-[5px] rounded-full ${item.progress}`}></div>
                </div>
                <p className="text-[10px] text-right text-slate-400 font-medium">{item.persen}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-[15px] font-bold text-slate-800 mb-0.5">Rekap pemahaman materi</h2>
          <p className="text-[12px] text-slate-500 mb-3">Hasil pemahaman materi berdasarkan pengajaran latihan interaktif.</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11.5px]">
                  <thead className="text-slate-400">
                    <tr>
                      <th className="pb-3 font-semibold uppercase tracking-wider text-[10px]">Materi</th>
                      <th className="pb-3 font-semibold uppercase tracking-wider text-[10px] text-center w-24">Nilai</th>
                      <th className="pb-3 font-semibold uppercase tracking-wider text-[10px] text-center w-28">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {data.materi.map((item, i) => (
                      <tr key={i}>
                        <td className="py-2.5">{item.nama}</td>
                        <td className="py-2.5 text-center font-bold text-slate-800">{item.nilai}</td>
                        <td className="py-2.5 text-center">
                          <span className={`inline-block rounded px-2 py-1 text-[10px] font-bold ${item.color}`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col items-center justify-center text-center">
              <h2 className="text-[16px] font-bold text-[#1E293B] mb-2">Skor Total</h2>
              <p className="text-[10px] text-slate-400 mb-6 leading-relaxed max-w-[200px]">Skor total progres latihan dan perkembangan belajar</p>
              <div className="relative w-[130px] h-[130px] flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="65" cy="65" r="58" stroke="#E2E8F0" strokeWidth="8" fill="transparent" />
                  <circle cx="65" cy="65" r="58" stroke={data.warnaSkor} strokeWidth="8" fill="transparent" strokeDasharray="364.4" strokeDashoffset={data.dashOffset} />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <p className="text-[28px] font-extrabold text-[#1E293B] leading-none">{data.skorTotal}</p>
                  <p className={`text-[12px] font-bold mt-1 ${data.teksSkor}`}>{data.predikat}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // TAMPILAN 2: DASHBOARD LAPORAN SEKOLAH
  // ==========================================
  if (showReport) {
    return (
      <div className="mx-auto max-w-6xl font-sans">
        <div className=" flex items-center relative">
          <button onClick={() => setShowReport(false)} className="inline-flex items-center gap-2 text-[14px] font-bold text-slate-700 hover:text-primary transition-colors z-10">
            <ArrowLeft size={18} /> Beranda
          </button>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-[22px] font-bold text-slate-800">Laporan Hasil</h1>
        </div>

        <div className="mb-4">
          <h2 className="text-[15px] font-bold text-slate-800 mb-0.5">Dashboard laporan sekolah</h2>
          <p className="text-[12px] text-slate-500">Pilih siswa untuk melihat rincian hasil latihan per level.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[12px] font-bold text-slate-800 mb-1">Total Siswa</p>
            <p className="text-[24px] font-extrabold text-[#2563EB] leading-none mb-1">4</p>
            <p className="text-[10px] text-slate-500">Siswa</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[12px] font-bold text-slate-800 mb-1">Tuntas mengerjakan</p>
            <p className="text-[24px] font-extrabold text-[#10B981] leading-none mb-1">1</p>
            <p className="text-[10px] text-slate-500">Siswa</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-[12px] font-bold text-slate-800 mb-1">Belum tuntas mengerjakan</p>
            <p className="text-[24px] font-extrabold text-[#EF4444] leading-none mb-1">3</p>
            <p className="text-[10px] text-slate-500">Siswa</p>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-[15px] font-bold text-slate-800 mb-0.5">Daftar siswa</h2>
          <p className="text-[12px] text-slate-500 mb-4">Kelas VII · 4 siswa terdaftar</p>
          
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead className="bg-white text-slate-500 border-b border-slate-100">
                  <tr>
                    <th className="py-3 px-6 font-semibold text-[10px] tracking-wider text-slate-400 uppercase">Nama Siswa</th>
                    <th className="py-3 px-6 font-semibold text-[10px] tracking-wider text-slate-400 uppercase text-center w-32">Nilai</th>
                    <th className="py-3 px-6 font-semibold text-[10px] tracking-wider text-slate-400 uppercase text-center w-40">Hasil</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {[
                    { name: "Aditya Nur Santosa", score: "47,6%" },
                    { name: "Nabila Putri Yasmine", score: "85,7%" },
                    { name: "Nihayatul Hafidzni", score: "100%" },
                    { name: "Shofiyyah Awwalur Rohmah", score: "66,7%" },
                  ].map((siswa, i) => (
                    <tr key={i} className="border-b border-slate-50 last:border-0">
                      <td className="py-2.5 px-6">{siswa.name}</td>
                      <td className="py-2.5 px-6 text-center font-bold text-slate-800">{siswa.score}</td>
                      <td className="py-2.5 px-6 text-center">
                        <button onClick={() => setSelectedStudent(siswa.name)} className="rounded-md px-3 py-1.5 text-[11px] font-medium text-[#2563EB] transition-all duration-200 hover:bg-[#E8F0FE] hover:font-bold">
                          Lihat laporan
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // TAMPILAN 1: BERANDA (Default)
  // ==========================================
  return (
    <>
      {/* Banner */}
      <section className="relative mt-16 flex items-center justify-between rounded-2xl bg-primary px-8 py-4 text-white">
        <div>
          {/* Nama user dinamis di sini */}
          <h1 className="text-3xl font-extrabold">Hai, {userName}! 👋</h1>
          <p className="mt-1.5 text-xl text-blue-100">Siap belajar hari ini?</p>
        </div>

        <div className=" flex items-center gap-5 pr-47">
          <div className="space-y-4 text-[11px] font-bold text-slate-800">
            <span className="ml-7 block w-fit rounded-full bg-white px-3 py-1.5 shadow">➕ Matematika</span>
            <span className="block w-fit rounded-full bg-white px-3 py-1.5 shadow">🤟 Bahasa Isyarat</span>
            <span className="ml-3.5 block w-fit rounded-full bg-white px-3 py-1.5 shadow">½ Materi Pecahan</span>
          </div>
        </div>

        <Image
          src="/images/maskot.png"
          alt="Maskot MathSign"
          width={180}
          height={240}
          className="pointer-events-none absolute -top-19.5 right-12 z-10 h-auto w-[165px]"
        />
      </section>

      {/* Hero text */}
      <section className="mt-6">
        <h2 className="max-w-3xl text-[40px] font-extrabold leading-tight">
          Belajar Materi Pecahan dengan Lebih Visual, Interaktif, dan Inklusif.
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-500">
          MathSign merupakan platform website media pembelajaran yang memadukan visualisasi,
          simbol matematika, dan bahasa isyarat untuk mendukung pembelajaran siswa tunarungu.
        </p>
        <Link href="/materi-pecahan" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700">
          Mulai Belajar <ArrowRight size={14} />
        </Link>
      </section>

      {/* Kotak Laporan Hasil Sekolah */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F0FE] text-[#2563EB]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-slate-800">Laporan Hasil</h3>
            <p className="text-[11px] font-bold text-[#2563EB] mb-2.5 mt-0.5">
              Paket 3 : Untuk Sekolah <span className="mx-1">·</span> Admin {userName}
            </p>
            <p className="text-[12px] text-slate-500 mb-3.5 leading-relaxed">
              Fitur laporan hasil (rekap hasil latihan interaktif dan perkembangan hasil belajar seluruh siswa yang terdaftar).
            </p>
            <button onClick={() => setShowReport(true)} className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#2563EB] hover:underline">
              Lihat laporan seluruh siswa <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}