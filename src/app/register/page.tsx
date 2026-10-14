"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Info, Lock, Mail, User } from "lucide-react";

function PasswordField({ label, placeholder }: { label: string; placeholder: string }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="mb-1 block text-[11px] font-bold">{label}</label>
      <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2">
        <Lock size={14} className="text-slate-400" />
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="w-full bg-transparent text-[13px] outline-none placeholder:text-slate-400"
        />
        <button type="button" onClick={() => setShow(!show)} className="text-slate-400">
          {show ? <Eye size={14} /> : <EyeOff size={14} />}
        </button>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-white px-5 lg:px-13">
      <Image src="/images/logo.png" alt="MathSign" width={90} height={59} />

      <div className="mt-3 w-full max-w-[1080px] rounded-2xl bg-white px-9 py-5 shadow-[0_0_5px_rgba(0,0,0,0.12)] sm:px-11">
        <h1 className="text-center text-[18px] font-extrabold">Mulai Belajar Bersama MathSign</h1>
        <p className="mt-1 text-center text-[9px] text-slate-500">
          Buat akun pertamamu untuk belajar pecahan secara visual, interaktif, dan inklusif.
        </p>

        {/* Banner info */}
        <div className="mt-3 rounded-lg bg-blue-50 px-4 py-2 text-[10px] text-slate-700">
          <span className="font-bold">Mulai dengan MathSign Gratis - Rp0,00.</span> Tidak perlu
          membeli paket saat mendaftar. Kamu bisa meningkatkan paket nanti.
        </div>

        <form className="mt-4 space-y-3">
          {/* Baris 1: nama + email */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-[11px] font-bold">Nama lengkap</label>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2">
                <User size={14} className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  className="w-full bg-transparent text-[13px] outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-bold">Email</label>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2">
                <Mail size={14} className="text-slate-400" />
                <input
                  type="email"
                  placeholder="Masukkan alamat email"
                  className="w-full bg-transparent text-[13px] outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Baris 2: kata sandi + konfirmasi */}
          <div className="grid gap-4 md:grid-cols-2">
            <PasswordField label="Kata sandi" placeholder="Buat kata sandi" />
            <PasswordField label="Konfirmasi kata sandi" placeholder="Ulangi kata sandi" />
          </div>

          {/* Hint password */}
          <p className="flex items-center gap-2 text-[9px] text-slate-500">
            <Info size={11} className="shrink-0 text-slate-400" />
            Gunakan minimal 8 karakter, dengan huruf besar, huruf kecil, dan angka. Jangan gunakan
            nama atau email sebagai kata sandi.
          </p>

          {/* Syarat & ketentuan */}
          <label className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-[10px] text-slate-600">
            <input type="checkbox" className="h-3 w-3 rounded border-slate-300" />
            <span>
              Saya menyetujui{" "}
              <Link href="#" className="font-bold text-primary">Syarat dan Ketentuan</Link> serta{" "}
              <Link href="#" className="font-bold text-primary">Kebijakan Privasi</Link> MathSign.
            </span>
          </label>

          {/* Tanpa backend: tombol cuma pindah ke Beranda */}
          <Link
            href="/beranda"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2 text-[11px] font-bold text-white transition hover:bg-blue-700"
          >
            Buat akun gratis <ArrowRight size={14} />
          </Link>

          <div className="flex items-center justify-center text-[9px] text-slate-400">atau</div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 py-1.5 text-[11px] font-bold transition hover:bg-slate-50"
          >
            <span className="text-[14px] font-extrabold text-blue-600">G</span>
            Daftar dengan Google
          </button>
        </form>

        <p className="mt-3 text-center text-[11px] text-slate-500">
          Sudah punya akun? <Link href="/login" className="font-bold text-primary">Masuk</Link>
        </p>
      </div>

      <p className="absolute bottom-3 left-5 text-[9px] text-slate-400">© 2026 MathSign</p>
    </main>
  );
}