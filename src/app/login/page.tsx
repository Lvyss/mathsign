import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 lg:px-14">
      <Image className="" src="/images/logo.png" alt="MathSign" width={100} height={65} />

      <div className="mt-3 w-full max-w-[1200px] rounded-2xl bg-white px-10 py-6 shadow-[0_0_5px_rgba(0,0,0,0.12)] sm:px-12">
        <h1 className="text-center text-xl font-extrabold">Selamat Datang di MathSign</h1>
        <p className="mt-1 text-center text-[10px] text-slate-500">
          Masuk untuk melanjutkan perjalanan belajarmu.
        </p>

        <form className=" mt-4 space-y-3">
          <div>
            <label className=" mb-1 block text-xs font-bold">Email</label>
            <div className=" flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5">
              <Mail size={16} className="text-slate-400" />
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold">Kata Sandi</label>
            <div className=" flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5">
              <Lock size={16} className="text-slate-400" />
              <input
                type="password"
                placeholder="Masukkan kata sandi"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <label className="flex items-center gap-2 text-slate-500">
              <input type="checkbox" className="h-3.5 w-3.5 rounded border-slate-300" />
              Ingatkan saya
            </label>
            <Link href="#" className="font-bold text-primary">Lupa kata sandi?</Link>
          </div>

          <Link
            href="/beranda"
            className="text-[12px] flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Masuk <ArrowRight size={16} />
          </Link>

          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="h-px flex-1 bg-slate-200" />
            Atau
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <button
            type="button"
            className="text-[12px] flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 py-1.5 text-sm font-bold transition hover:bg-slate-50"
          >
            <span className="text-base font-extrabold text-blue-600">G</span>
            Masuk dengan Google
          </button>
        </form>

        <p className="mt-3 text-center text-xs text-slate-500">
          Belum punya akun? <Link href="/register" className="font-bold text-primary">Daftar sekarang</Link>
        </p>
      </div>

      <p className="absolute bottom-3 left-6 text-[10px] text-slate-400">© 2026 MathSign</p>
    </main>
  );
}