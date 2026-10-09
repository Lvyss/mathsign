import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 px-4 py-8">
      <Image src="/images/logo.png" alt="MathSign" width={110} height={80} />

      <div className="mt-6 w-full max-w-3xl rounded-3xl bg-white p-8 shadow-lg sm:p-12">
        <h1 className="text-center text-3xl font-extrabold">Selamat Datang di MathSign</h1>
        <p className="mt-2 text-center text-sm text-slate-500">
          Masuk untuk melanjutkan perjalanan belajarmu.
        </p>

        {/* Tanpa backend: tombol Masuk cuma pindah ke Beranda */}
        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-bold">Email</label>
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
              <Mail size={16} className="text-slate-400" />
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold">Kata Sandi</label>
            <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
              <Lock size={16} className="text-slate-400" />
              <input
                type="password"
                placeholder="Masukkan kata sandi"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-slate-500">
              <input type="checkbox" className="h-3.5 w-3.5 rounded border-slate-300" />
              Ingatkan saya
            </label>
            <Link href="#" className="font-bold text-primary">Lupa kata sandi?</Link>
          </div>

          <Link
            href="/beranda"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Masuk <ArrowRight size={16} />
          </Link>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="h-px flex-1 bg-slate-200" />
            Atau
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 py-3 text-sm font-bold transition hover:bg-slate-50"
          >
            <span className="text-base font-extrabold text-blue-600">G</span>
            Masuk dengan Google
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          Belum punya akun? <Link href="#" className="font-bold text-primary">Daftar sekarang</Link>
        </p>
      </div>

      <p className="mt-6 self-start text-[10px] text-slate-400">© 2026 MathSign</p>
    </main>
  );
}