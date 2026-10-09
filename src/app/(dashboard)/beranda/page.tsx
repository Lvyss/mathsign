import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BerandaPage() {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Banner */}
      <section className="relative flex items-center justify-between overflow-visible rounded-2xl bg-primary px-10 py-10 text-white">
        <div>
          <h1 className="text-2xl font-extrabold">Hai, Aisyah! 👋</h1>
          <p className="mt-2 text-lg text-blue-100">Siap belajar hari ini?</p>
        </div>

        <div className="relative flex items-center gap-6">
          <div className="space-y-2 text-[11px] font-bold text-slate-800">
            <span className="ml-8 block w-fit rounded-full bg-white px-3 py-1.5 shadow">➕ Matematika</span>
            <span className="block w-fit rounded-full bg-white px-3 py-1.5 shadow">🤟 Bahasa Isyarat</span>
            <span className="ml-4 block w-fit rounded-full bg-white px-3 py-1.5 shadow">½ Materi Pecahan</span>
          </div>
          <Image
            src="/images/maskot.png"
            alt="Maskot MathSign"
            width={170}
            height={220}
            className="-mt-16 -mb-10"
          />
        </div>
      </section>

      {/* Hero text */}
      <section className="mt-8">
        <h2 className="max-w-2xl text-4xl font-extrabold leading-tight">
          Belajar Materi Pecahan dengan Lebih Visual, Interaktif, dan Inklusif.
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-500">
          MathSign merupakan platform website media pembelajaran yang memadukan visualisasi,
          simbol matematika, dan bahasa isyarat untuk mendukung pembelajaran siswa tunarungu.
        </p>
        <Link
          href="/materi-pecahan"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"
        >
          Mulai Belajar <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}