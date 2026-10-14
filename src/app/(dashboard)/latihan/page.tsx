import Link from "next/link";
import { Info, LockOpen, Lock } from "lucide-react";

const levels = [
  {
    title: "Level 1 (Menentukan Bentuk Pecahan)",
    desc: "Mudah",
    href: "/latihan/level-1",
    locked: false,
  },
  {
    title: "Level 2 (Penjumlahan dan Pengurangan)",
    desc: "Sedang",
    href: "/latihan/level-2",
    locked: true,
  },
  {
    title: "Level 3 (Perkalian dan Pembagian)",
    desc: "Sulit",
    href: "/latihan/level-3",
    locked: true,
  },
];

const steps = [
  {
    title: "Baca soal",
    desc: "Temukan informasi penting dalam soal cerita.",
  },
  {
    title: "Lihat visualisasi",
    desc: "Amati visualisasi dari soal cerita yang diberikan.",
  },
  {
    title: "Pilih dan periksa opsi jawaban",
    desc: "Pilih dan periksa opsi jawaban dari soal cerita yang tepat.",
  },
  {
    title: "Pilih opsi jawaban bahasa isyarat",
    desc: "Pilih opsi jawaban dalam bentuk bahasa isyarat dari soal cerita yang benar.",
  },
  {
    title: "Konfirmasi jawaban",
    desc: "Setelah selesai memilih opsi jawaban bahasa isyarat, sistem MathSign otomatis memberikan konfirmasi apakah jawaban siswa benar atau salah.",
  },
];

export default function LatihanInteraktifPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-center text-2xl font-extrabold">Latihan Interaktif</h1>
      <p className="mt-3 text-sm text-slate-500">
        Belajar pecahan langkah demi langkah, dari cerita hingga bahasa isyarat.
      </p>

      {/* Kartu level */}
      <div className="mt-4 space-y-3">
        {levels.map(({ title, desc, href, locked }) => {
          const Icon = locked ? Lock : LockOpen;

          const content = (
            <>
              <Icon
                size={16}
                className={locked ? "text-slate-500" : "text-white"}
              />
              <div>
                <p className="text-xs font-extrabold">{title}</p>
                <p
                  className={`mt-0.5 text-[10px] ${
                    locked ? "text-slate-400" : "text-blue-100"
                  }`}
                >
                  {desc}
                </p>
              </div>
            </>
          );

          const base = "flex items-center gap-4 rounded-xl px-5 py-4";

          return locked ? (
            <div
              key={title}
              className={`${base} cursor-not-allowed border border-slate-200 bg-white/60 text-slate-700`}
            >
              {content}
            </div>
          ) : (
            <Link
              key={title}
              href={href}
              className={`${base} bg-primary text-white shadow-md transition hover:bg-blue-700`}
            >
              {content}
            </Link>
          );
        })}
      </div>

      {/* Info paket */}
      <p className="mt-4 flex items-center gap-2 text-[11px] text-slate-600">
        <Info size={13} className="shrink-0 text-slate-500" />
        Level 2 dan level 3 tersedia dipaket berbayar. Pilih paket berbayar 2 atau 3 untuk
        mengakses level tersebut.
      </p>

      {/* Cara mengerjakan */}
      <h2 className="mt-5 text-base font-extrabold">Cara mengerjakan</h2>
      <ol className="mt-3 space-y-3">
        {steps.map(({ title, desc }, i) => (
          <li key={title} className="flex items-start gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">
              {i + 1}
            </span>
            <div>
              <p className="text-xs font-extrabold">{title}</p>
              <p className="mt-0.5 text-[10px] text-slate-500">{desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}