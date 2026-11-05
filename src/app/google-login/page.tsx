"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";

const dummyAccounts = [
  {
    id: 1,
    name: "Siti Aisyah",
    email: "sitiaisyah@gmail.com",
    initials: "SA",
    avatarBg: "bg-[#e8f0fe]", 
    avatarText: "text-[#1a73e8]", 
  },
  {
    id: 2,
    name: "Nihayatul Hafidzni",
    email: "nihayatulhafidzni@gmail.com",
    initials: "NA",
    avatarBg: "bg-[#ede7f6]", 
    avatarText: "text-[#4c2889]", 
  },
];

export default function GoogleLoginPage() {
  const router = useRouter();

  // Fungsi untuk menyimpan data ke cookie dan redirect
  const handleSelectAccount = (account: typeof dummyAccounts[0]) => {
    // Simpan nama dan inisial ke cookie (berlaku 1 hari)
    document.cookie = `user_name=${encodeURIComponent(account.name)}; path=/; max-age=86400`;
    document.cookie = `user_initials=${account.initials}; path=/; max-age=86400`;
    
    // Arahkan ke beranda
    router.push("/beranda");
  };

  return (
    <main className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-[#FAFAFA] px-4 sm:px-6 font-sans">
      
      {/* Logo MathSign di atas */}
      <div className="mb-6 flex flex-col items-center justify-center">
        <Image
          src="/images/logo.png" 
          alt="MathSign Logo"
          width={110}
          height={70}
          className="object-contain"
          priority
        />
      </div>

      {/* Kartu Utama */}
      <div className="w-full max-w-[850px] rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
        
        {/* Header Google */}
        <div className="flex items-center gap-2.5 px-6 py-4 border-b border-gray-200">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-[13px] text-[#3c4043]">Masuk dengan Google</span>
        </div>

        {/* Konten Utama (Grid 2 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 py-6 gap-8 md:gap-12">
          
          {/* Kolom Kiri */}
          <div className="flex flex-col pt-1">
            <h1 className="text-[26px] font-bold text-[#202124] leading-tight">Pilih akun</h1>
            
            <p className="mt-1.5 text-[13px] text-[#5f6368]">
              untuk melanjutkan ke <span className="font-semibold text-[#1a73e8]">MathSign</span>
            </p>

            {/* Badge MathSign dengan Ikon Gedung */}
            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#e8f0fe] px-3 py-1.5 w-fit">
              <Building2 size={14} className="text-[#1a73e8]" />
              <span className="text-[12px] font-medium text-[#1a73e8]">MathSign</span>
            </div>

            <p className="mt-5 text-[13px] leading-relaxed text-[#5f6368]">
              Gunakan akun Google-mu untuk mulai belajar bersama MathSign.
            </p>
          </div>

          {/* Kolom Kanan */}
          <div className="flex flex-col">
            {/* List Akun */}
            <div className="flex flex-col">
              {dummyAccounts.map((account, index) => (
                <div key={account.id}>
                  <button 
                    onClick={() => handleSelectAccount(account)}
                    className="group flex w-full items-center gap-3 py-2.5 text-left transition-colors hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-lg px-2 -mx-2"
                  >
                    {/* Avatar */}
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[14px] font-medium ${account.avatarBg} ${account.avatarText}`}>
                      {account.initials}
                    </div>
                    {/* Info */}
                    <div className="flex-1 truncate">
                      <p className="text-[13px] font-medium text-[#202124]">{account.name}</p>
                      <p className="text-[12px] text-[#5f6368] truncate mt-0.5">{account.email}</p>
                    </div>
                    {/* Ikon Panah */}
                    <ChevronRight size={18} className="text-[#5f6368]" />
                  </button>
                  {/* Garis Pemisah */}
                  {index !== dummyAccounts.length - 1 && (
                    <hr className="border-gray-100 my-0.5" />
                  )}
                </div>
              ))}
            </div>

            {/* Teks Kebijakan */}
            <div className="mt-5 text-[12px] leading-relaxed text-[#5f6368]">
              <p>
                Google akan membagikan nama, alamat email, dan foto profilmu kepada MathSign.
              </p>
              <p className="mt-2">
                Sebelum melanjutkan, tinjau{" "}
                <Link href="#" className="font-medium text-[#1a73e8] hover:underline">
                  Kebijakan Privasi
                </Link>{" "}
                dan{" "}
                <Link href="#" className="font-medium text-[#1a73e8] hover:underline">
                  Syarat dan Ketentuan
                </Link>{" "}
                MathSign.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex w-full max-w-[850px] flex-col items-center justify-between gap-4 px-2 text-[12px] text-[#5f6368] sm:flex-row">
        <Link
          href="/login" 
          className="flex items-center gap-1.5 text-[#1a73e8] font-medium hover:underline"
        >
          <ArrowLeft size={14} />
          Kembali ke pendaftaran
        </Link>

        <div className="flex gap-5 items-center">
          <button className="flex items-center gap-1 hover:text-gray-900">
            Indonesia
            <svg className="h-2.5 w-2.5 text-[#5f6368]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <Link href="#" className="hover:text-gray-900">Bantuan</Link>
          <Link href="#" className="hover:text-gray-900">Privasi</Link>
          <Link href="#" className="hover:text-gray-900">Persyaratan</Link>
        </div>
      </div>

      {/* Copyright di kiri bawah (absolute) */}
      <div className="absolute bottom-5 left-6 text-[11px] text-[#5f6368]">
        © 2026 MathSign
      </div>

    </main>
  );
}