import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BerandaPage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Banner */}
      <section className="relative mt-16 flex items-center justify-between rounded-2xl bg-primary px-8 py-4 text-white">
        <div>
          <h1 className="text-3xl font-extrabold">Hai, Aisyah! 👋</h1>
          <p className="mt-1.5 text-xl text-blue-100">Siap belajar hari ini?</p>
        </div>

        <div className=" flex items-center gap-5 pr-47">
          <div className="space-y-4 text-[11px] font-bold text-slate-800">
            <span className="ml-7 block w-fit rounded-full bg-white px-3 py-1.5 shadow">➕ Matematika</span>
            <span className="block w-fit rounded-full bg-white px-3 py-1.5 shadow">🤟 Bahasa Isyarat</span>
            <span className="ml-3.5 block w-fit rounded-full bg-white px-3 py-1.5 shadow">½ Materi Pecahan</span>
          </div>
        </div>

        {/* Maskot absolute — keluar dari flow, tidak mempengaruhi tinggi banner */}
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
        <Link
          href="/materi-pecahan"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"
        >
          Mulai Belajar <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}