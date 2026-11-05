"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, CheckCircle2, Info, Loader2, QrCode, Check, School } from "lucide-react";
import Image from "next/image";

export default function SekolahPaketPage() {
  // Step: 0 = Input Kode, 1 = Ringkasan, 2 = QRIS, 3 = Klaim, 4 = Aktif
  const [step, setStep] = useState(0); 
  const [kodeSekolah, setKodeSekolah] = useState("");
  const [namaSekolah, setNamaSekolah] = useState("");
  const [timeLeft, setTimeLeft] = useState(900); 
  const [isChecking, setIsChecking] = useState(false);

  // State untuk status aktif & mode "Lanjutkan Langganan"
  const [isAlreadyActive, setIsAlreadyActive] = useState(false);
  const [isRenewing, setIsRenewing] = useState(false);

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };
    const savedPkg = getCookie("user_package");
    if (savedPkg?.includes("Sekolah")) {
      setIsAlreadyActive(true);
    }
  }, []);

  // Timer QRIS
  useEffect(() => {
    if (step === 2 && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [step, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // Logic Masuk dengan Kode (Siswa)
  const handleMasukKode = () => {
    if (!kodeSekolah) return alert("Masukkan kode sekolah terlebih dahulu!");
    if (kodeSekolah === "MATH-7K2P") {
      // SISWA MASUK: Dapat akses Paket Individu
      document.cookie = "user_package=Paket 2 · Individu aktif; path=/; max-age=31536000";
      alert("Kode Valid! Paket individu berhasil diaktifkan.");
      window.location.href = "/beranda";
    } else {
      alert("Kode sekolah tidak valid atau kuota penuh.");
    }
  };

  // Logic Cek Pembayaran QRIS
  const handleCekPembayaran = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      setStep(3); // Lanjut ke Klaim
    }, 1500);
  };

  // ==========================================
  // KOMPONEN STEPPER
  // ==========================================
  const renderStepper = (currentStep: number) => (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full">
      {[
        { num: 1, label: "Ringkasan Pesanan" },
        { num: 2, label: "Pembayaran QRIS" },
        { num: 3, label: "Klaim Paket" },
        { num: 4, label: "Paket Aktif" },
      ].map((s) => {
        const isActive = s.num === currentStep;
        const isDone = s.num < currentStep;
        return (
          <div
            key={s.num}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 border ${
              isActive ? "bg-blue-50 border-blue-100" : "bg-white border-slate-200"
            }`}
          >
            {isDone ? (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                <Check size={12} strokeWidth={3} />
              </span>
            ) : (
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {s.num}
              </span>
            )}
            <span
              className={`text-[12px] ${
                isActive ? "font-bold text-blue-700" : isDone ? "font-semibold text-blue-600" : "font-medium text-slate-500"
              }`}
            >
              {s.label}
            </span>
          </div>
        );
      })}
    </div>
  );

  // ==========================================
  // TAMPILAN JIKA SUDAH AKTIF & TIDAK SEDANG RENEW
  // ==========================================
  if (isAlreadyActive && !isRenewing) {
    return (
      <div className="flex min-h-screen max-w-6xl w-full flex-col font-sans bg-[#FAFAFA] p-4 md:p-8">
        <div className="flex w-full flex-col items-center justify-center py-20 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800 mb-2">Paket Sekolah Anda Sudah Aktif</h1>
          <p className="text-sm text-slate-500 mb-8 max-w-md mx-auto">
            Akun sekolah Anda sudah terdaftar dengan akses MathSign Sekolah. Bagikan Kode Sekolah ke siswa Anda untuk mulai belajar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => { setStep(0); setIsRenewing(false); setIsAlreadyActive(false); }} 
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Ke Input Kode Sekolah
            </button>
            <button 
              onClick={() => setIsRenewing(true)} 
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
            >
              Lanjutkan Langganan
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen max-w-6xl w-full flex-col font-sans bg-[#FAFAFA]">
      <div className="mx-auto w-full flex flex-col p-4 md:p-8">
        
        {/* Header & Tombol Kembali */}
        <div className="mb-6">
          <button 
            onClick={() => step > 0 ? setStep(step - 1) : window.location.href = "/pilihan-paket"}
            className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Pilihan Paket
          </button>
          
          <h1 className="text-xl font-bold text-slate-800 text-center">
            {step === 0 && "Pilihan Paket"}
            {step === 1 && "Ringkasan Pesanan"}
            {step === 2 && "Pembayaran QRIS"}
            {step === 3 && "Klaim Paket"}
            {step === 4 && "Paket Aktif"}
          </h1>
          <p className="mt-1 text-xs text-slate-500 text-center">
            {step === 0 && "Masukan KODE SEKOLAH jika merupakan siswa sekolah, jika merupakan admin sekolah lanjut ke ringkasan pesanan."}
            {step === 1 && "Periksa paket, periode, dan akun penerima sebelum membayar."}
            {step === 2 && "Selesaikan pembayaran untuk melanjutkan ke Klaim Paket."}
            {step === 3 && "Pembayaran sudah lunas. Paket belum aktif sampai klaim berhasil."}
            {step === 4 && "Pembayaran sudah lunas. Paket aktif sampai klaim berhasil."}
          </p>
        </div>

        {/* Render Stepper (Hanya muncul jika step > 0) */}
        {step > 0 && renderStepper(step)}

        {/* ========================================================
            TAMPILAN JIKA PAKET SUDAH AKTIF (Hanya muncul jika step > 0)
            ======================================================== */}
        {isAlreadyActive && step > 0 ? (
          <div className="flex w-full flex-col items-center justify-center bg-[#FAFAFA] py-20 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 size={40} className="text-green-600" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-800 mb-2">Paket Sekolah Anda Sudah Aktif</h1>
            <p className="text-sm text-slate-500 mb-8 max-w-md mx-auto">
              Akun sekolah Anda sudah terdaftar dengan akses MathSign Sekolah. Bagikan Kode Sekolah ke siswa Anda untuk mulai belajar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setStep(0)} // Balik ke input kode
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Kembali ke Input Kode
              </button>
              <button 
                onClick={() => setIsAlreadyActive(false)} // Buka form untuk perpanjang
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
              >
                Lanjutkan Langganan
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* ========================================================
                STEP 0: INPUT KODE SEKOLAH
                ======================================================== */}
            {step === 0 && (
              <div className="max-w-3xl w-full mx-auto mt-4">
                <label className="text-[13px] font-bold text-slate-800 mb-2 block">Kode Sekolah</label>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2.5 mb-6">
                  <School size={16} className="text-slate-400" />
                  <input
                    type="text"
                    placeholder="Masukkan kode sekolah"
                    value={kodeSekolah}
                    onChange={(e) => setKodeSekolah(e.target.value)}
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button 
                    onClick={handleMasukKode}
                    className="w-full sm:w-auto rounded-lg bg-white border border-slate-200 px-6 py-2.5 text-[13px] font-bold text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    Masuk
                  </button>
                  
                  <button 
                    onClick={() => setStep(1)}
                    className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-2.5 text-[13px] font-bold text-white hover:bg-blue-700 transition-colors"
                  >
                    Lanjutkan Ringkasan pesanan
                  </button>
                </div>
              </div>
            )}

            {/* ========================================================
                STEP 1: RINGKASAN PESANAN SEKOLAH
                ======================================================== */}
            {step === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                {/* Kolom Kiri */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                      Paket yang Dipilih
                    </div>
                    
                    <div className="mb-1 text-[11px] font-bold text-blue-600">Paket 3 : untuk sekolah</div>
                    <h3 className="text-[26px] font-extrabold text-slate-900 mt-1">Rp900.000,00</h3>
                    <p className="text-[13px] font-medium text-slate-500 mb-5">Per tahun · Maksimal 50 akun siswa</p>

                    <ul className="space-y-2.5 mb-6">
                      {[
                        "Fitur materi pecahan (materi prasyarat dan materi pecahan).",
                        "Fitur materi bahasa isyarat (gambar dan video isyarat angka dan istilah matematika).",
                        "Fitur latihan interaktif (level 1-3).",
                        "Fitur cara penggunaan.",
                        "Fitur laporan hasil (rekap hasil latihan interaktif dan perkembangan hasil belajar seluruh siswa yang terdaftar)."
                      ].map((fitur, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[12px] text-slate-600">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-blue-500" />
                          <span className="leading-snug">{fitur}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-[13px] font-bold text-slate-800 mb-3">Periode berlangganan</h4>
                    <div className="rounded-xl border-2 border-blue-600 bg-blue-50/20 p-3.5 mb-6 w-full max-w-xs">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="flex h-[14px] w-[14px] items-center justify-center rounded-full border-[4px] border-blue-600"></div>
                        <span className="text-[13px] font-bold text-slate-900">Tahunan</span>
                      </div>
                      <p className="text-[11px] text-slate-500 pl-6">Rp900.000,00 / tahun</p>
                    </div>

                    <h4 className="text-[13px] font-bold text-slate-800 mb-2">Nama sekolah</h4>
                    <input
                      type="text"
                      placeholder="Masukkan nama sekolah"
                      value={namaSekolah}
                      onChange={(e) => setNamaSekolah(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none mb-6 focus:border-blue-500"
                    />

                    <h4 className="text-[13px] font-bold text-slate-800 mb-3">Akun penerima paket</h4>
                    <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e8f0fe] text-sm font-bold text-blue-600">SA</span>
                      <div>
                        <p className="text-[13px] font-bold text-slate-800">Siti Aisyah</p>
                        <p className="text-[11px] text-slate-500">Admin sekolah · SLB Harapan Jaya</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kolom Kanan */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                      Ringkasan Pembayaran
                    </div>
                    
                    <div className="space-y-3 text-[12px]">
                      <div className="flex justify-between text-slate-500">
                        <span>Paket</span>
                        <span className="font-bold text-slate-800">Paket 3 · untuk sekolah</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Periode</span>
                        <span className="font-bold text-slate-800">1 tahun</span>
                      </div>
                      
                      <div className="pt-3 border-t border-slate-100">
                        <p className="text-[12px] text-slate-500 mb-1">Total pembayaran</p>
                        <p className="text-[22px] font-extrabold text-slate-900">Rp900.000,00</p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="rounded-xl border border-blue-600 bg-white p-3 flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-[#e8f0fe] font-bold text-blue-600">
                          <QrCode size={18} />
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-slate-800">QRIS</p>
                          <p className="text-[10px] text-slate-500">Satu-satunya metode pembayaran</p>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setStep(2)}
                      className="mt-5 w-full rounded-lg bg-blue-600 py-2.5 text-[13px] font-bold text-white hover:bg-blue-700 transition-colors"
                    >
                      Lanjut ke Pembayaran QRIS
                    </button>

                    <p className="mt-3 text-[10px] text-center text-slate-400 leading-relaxed">
                      Paket belum aktif. Selesaikan pembayaran, lalu klaim ke akun Anda.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f4f7fb] p-4 flex gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white border border-blue-100 text-blue-600">
                      <Info size={12} strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-blue-800 mb-1">Masa aktif dimulai setelah klaim</p>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Pembayaran tidak langsung mengaktifkan paket. Akun penerima akan ditampilkan kembali sebelum klaim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================
                STEP 2: PEMBAYARAN QRIS
                ======================================================== */}
            {step === 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                {/* KOLOM KIRI */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col items-center">
                    <div className="w-full flex justify-between items-center mb-6">
                      <h3 className="text-[15px] font-bold text-slate-800">Scan QRIS</h3>
                      <span className="text-[11px] font-semibold text-[#F28B24] bg-[#FFF4E5] px-2.5 py-1 rounded-md">
                        Menunggu pembayaran
                      </span>
                    </div>

                    <p className="text-[14px] font-bold text-slate-800 mb-5">MathSign</p>
                    
                    <div className="p-3 border border-slate-200 rounded-xl bg-white mb-6">
                      {timeLeft > 0 ? (
                        <Image 
                          src="/images/qris.png" 
                          alt="QR Code Pembayaran"
                          width={190}
                          height={190}
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-[190px] h-[190px] bg-slate-100 flex items-center justify-center text-slate-400 text-sm text-center p-4">
                          QR Code Kedaluwarsa
                        </div>
                      )}
                    </div>

                    <p className="text-[24px] font-extrabold text-slate-900 mb-2">Rp900.000,00</p>
                    <div className="bg-[#FFF0F0] px-3 py-1.5 rounded-md">
                      <p className="text-[13px] font-bold text-[#EF4444]">Sisa waktu {formatTime(timeLeft)}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="space-y-4 text-[12px]">
                      <div className="flex justify-between text-slate-500">
                        <span>Paket</span>
                        <span className="font-bold text-slate-800">Paket 3 : untuk sekolah</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Periode</span>
                        <span className="font-bold text-slate-800">1 tahun</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <div className="rounded-xl bg-[#F8FAFC] p-3 flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E8F0FE] text-[11px] font-bold text-blue-600">SA</span>
                        <div>
                          <p className="text-[12px] font-bold text-slate-800">Siti Aisyah</p>
                          <p className="text-[10px] text-slate-500">Admin sekolah · SLB Harapan Jaya</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KOLOM KANAN */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-[15px] font-bold text-slate-800 mb-6">Cara membayar dengan QRIS</h3>
                    
                    <ol className="space-y-4 mb-8">
                      {[
                        "Buka e-wallet atau mobile banking yang mendukung QRIS.",
                        "Pilih Scan QRIS, lalu arahkan kamera ke kode QR.",
                        "Periksa nominal dan nama MathSign, lalu bayar.",
                        "Tunggu konfirmasi pembayaran otomatis di halaman ini."
                      ].map((text, i) => (
                        <li key={i} className="flex gap-3 text-[13px] text-slate-600">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#E8F0FE] text-[10px] font-bold text-blue-600">
                            {i + 1}
                          </span>
                          <span className="leading-snug pt-0.5">{text}</span>
                        </li>
                      ))}
                    </ol>

                    <div className="space-y-3">
                      <button 
                        onClick={handleCekPembayaran}
                        disabled={isChecking || timeLeft === 0}
                        className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] py-3 text-[14px] font-bold text-white hover:bg-blue-700 transition-colors disabled:opacity-70"
                      >
                        {isChecking ? <><Loader2 size={18} className="animate-spin" /> Mengecek...</> : "Cek status pembayaran"}
                      </button>

                      <button 
                        onClick={() => setStep(1)}
                        className="w-full rounded-lg border border-slate-200 bg-white py-3 text-[14px] font-bold text-[#2563EB] hover:bg-slate-50 transition-colors"
                      >
                        Kembali ke ringkasan
                      </button>
                    </div>

                    <p className="mt-5 text-[10px] text-slate-400 leading-relaxed">
                      Cek status hanya memeriksa pembayaran. Menekan tombol ini bukan bukti pembayaran berhasil.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F4F7FB] p-4 flex gap-3 border border-blue-50">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white border border-blue-200 text-blue-600">
                      <Info size={12} strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-[#1E3A8A] mb-1">Masa aktif dimulai setelah klaim</p>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Setelah pembayaran dikonfirmasi lunas, lanjutkan klaim paket ke akun penerima. Jangan tutup halaman sebelum status diperbarui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================
                STEP 3: KLAIM PAKET (SEKOLAH)
                ======================================================== */}
            {step === 3 && (
              <div className="flex flex-col gap-5">
                {/* Banner Notifikasi */}
                <div className="rounded-xl border border-[#D1F2DF] bg-[#F0FDF4] p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#10B981] bg-transparent">
                      <CheckCircle2 size={18} className="text-[#10B981]" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[14px] font-bold text-[#166534]">Pembayaran berhasil diterima</p>
                      <p className="text-[12px] text-[#15803D]">
                        Pembayaran lunas <span className="mx-1.5 text-[#15803D]">·</span> QRIS <span className="mx-1.5 text-[#15803D]">·</span> Rp900.000,00
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-block rounded-md bg-[#FFF7ED] px-2.5 py-1 text-[11px] font-bold text-[#EA580C]">
                      Paket belum diklaim
                    </span>
                  </div>
                </div>

                {/* Grid 2 Kolom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Kiri: Detail Paket */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                      Paket yang Dipilih
                    </div>
                    
                    <div className="mb-1 text-[11px] font-bold text-blue-600">Paket 3 : untuk sekolah</div>
                    <h3 className="text-[26px] font-extrabold text-slate-900 mt-1">Rp900.000,00</h3>
                    <p className="text-[13px] font-medium text-slate-500 mb-6">Per tahun · Maksimal 50 akun siswa</p>

                    <ul className="space-y-3">
                      {[
                        "Fitur materi pecahan (materi prasyarat dan materi pecahan).",
                        "Fitur materi bahasa isyarat (gambar dan video isyarat angka dan istilah matematika).",
                        "Fitur latihan interaktif (level 1-3).",
                        "Fitur cara penggunaan.",
                        "Fitur laporan hasil (rekap hasil latihan interaktif dan perkembangan hasil belajar seluruh siswa yang terdaftar)."
                      ].map((fitur, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[12px] text-slate-600">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-blue-500" />
                          <span className="leading-snug">{fitur}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Kanan: Pasang Paket */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col">
                    <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                      Pasang Paket ke Akun
                    </div>
                    
                    <p className="text-[12px] text-slate-500 mb-5 leading-relaxed">
                      Pastikan tujuan sudah sesuai sebelum mengklaim paket.
                    </p>

                    <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 flex items-center gap-3 mb-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#E8F0FE] text-[13px] font-bold text-blue-600">SA</span>
                      <div>
                        <p className="text-[13px] font-bold text-slate-800">Siti Aisyah</p>
                        <p className="text-[11px] text-slate-500">Admin sekolah · SLB Harapan Jaya</p>
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#F0F7FF] p-4 flex gap-3 mb-6">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-blue-600">
                        <Info size={16} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-blue-800 mb-1">Aktif setelah klaim berhasil</p>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          Masa aktif 1 tahun dimulai setelah klaim berhasil, bukan sejak Anda membuka halaman pembayaran.
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <button 
                        onClick={() => {
                          // SIMPAN COOKIE: Masuk sebagai Admin Sekolah (Paket Sekolah)
                          document.cookie = "user_package=Paket 3 · Sekolah aktif; path=/; max-age=31536000";
                          setStep(4);
                        }}
                        className="w-full rounded-lg bg-[#2563EB] py-3 text-[14px] font-bold text-white hover:bg-blue-700 transition-colors mb-3"
                      >
                        Klaim ke Akun Saya
                      </button>
                      
                      <p className="text-[10px] text-center text-slate-400 leading-relaxed">
                        Paket akan terpasang pada akun Siti Aisyah yang sedang masuk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================
                STEP 4: PAKET AKTIF (SEKOLAH)
                ======================================================== */}
            {step === 4 && (
              <div className="flex flex-col gap-5">
                {/* Banner Notifikasi */}
                <div className="rounded-xl border border-[#D1F2DF] bg-[#F4FBF7] p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center text-[#2563EB]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                        <path d="M12 2l2.4 2.4 3.3-.6 1.2 3.1 3.4 1.2-.6 3.3L23 12l-2.4 2.4.6 3.3-3.4 1.2-1.2 3.1-3.3-.6L12 23l-2.4-2.4-3.3.6-1.2-3.1-3.4-1.2.6-3.3L1 12l2.4-2.4-.6-3.3 3.4-1.2 1.2-3.1 3.3.6z" />
                        <path d="M9 12l2 2 4-4" strokeWidth="2" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[15px] font-bold text-[#2563EB]">Paket berhasil diklaim!</p>
                      <p className="text-[13px] text-slate-500">MathSign Sekolah kini aktif pada akun Siti Aisyah.</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="text-[12px] font-bold text-[#166534]">Paket aktif</span>
                  </div>
                </div>

                {/* Grid 2 Kolom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                  {/* Kiri: Paket pada Akun */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                      Paket pada Akun Anda
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-3 flex items-center gap-3 mb-6">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F0FE] text-[13px] font-bold text-blue-600">SA</span>
                      <div>
                        <p className="text-[13px] font-bold text-slate-800">Siti Aisyah</p>
                        <p className="text-[11px] text-slate-500">Admin sekolah · SLB Harapan Jaya</p>
                      </div>
                    </div>

                    <div className="space-y-3 text-[12px] border-b border-slate-100 pb-5 mb-5">
                      <div className="flex justify-between text-slate-500">
                        <span>Paket terpasang</span>
                        <span className="font-bold text-slate-800 text-right">Paket 3 · untuk sekolah</span>
                      </div>
                      <div className="flex justify-between text-slate-500 items-center">
                        <span>Status</span>
                        <span className="font-bold text-[#166534]">Aktif</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Masa aktif</span>
                        <span className="font-bold text-slate-800">1 tahun sejak klaim</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Sekolah</span>
                        <span className="font-bold text-slate-800">SLB Harapan Jaya</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Kuota siswa terpakai</span>
                        <span className="font-bold text-slate-800">0/50</span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#EFF6FF] p-4 flex gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[#2563EB]">
                        <Info size={16} strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-[#1E3A8A] mb-1">Siap melayani belajar</p>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          Belum ada siswa terdaftar. Gunakan KODE SEKOLAH untuk akses siswa maksimal 50 akun.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Kanan: Akses Sudah Terbuka */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col h-full">
                    <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                      Akses Sudah Terbuka
                    </div>

                    <ul className="space-y-3 mb-6 flex-1">
                      {[
                        "Fitur materi pecahan (materi prasyarat dan materi pecahan).",
                        "Fitur materi bahasa isyarat (gambar dan video isyarat angka dan istilah matematika).",
                        "Fitur latihan interaktif (level 1-3).",
                        "Fitur cara penggunaan.",
                        "Fitur laporan hasil (rekap hasil latihan interaktif dan perkembangan hasil belajar seluruh siswa yang terdaftar)."
                      ].map((fitur, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[12px] text-slate-600">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#10B981]" />
                          <span className="leading-snug">{fitur}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4">
                      <p className="text-[11px] font-bold text-slate-800 mb-1">KODE SEKOLAH: MATH-7K2P</p>
                    </div>

                    <div className="space-y-3 mt-auto">
                      <button 
                        onClick={() => window.location.href = "/beranda"}
                        className="w-full rounded-lg bg-[#2563EB] py-2.5 text-[13px] font-bold text-white hover:bg-blue-700 transition-colors"
                      >
                        Mulai Belajar
                      </button>
                      <button 
                        onClick={() => window.location.href = "/beranda"}
                        className="w-full rounded-lg border border-slate-200 bg-white py-2.5 text-[13px] font-bold text-[#2563EB] hover:bg-slate-50 transition-colors"
                      >
                        Ke Beranda
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}