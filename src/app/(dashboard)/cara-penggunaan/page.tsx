import Link from "next/link";
import { BookOpen, Images, SquarePen } from "lucide-react";

const steps = [
  {
    no: 1,
    badge: "bg-yellow-400",
    title: "Akses Materi Pecahan",
    desc: "Klik menu Materi Pecahan untuk belajar materi prasyarat dan materi pecahan.",
    href: "/materi-pecahan",
    icon: BookOpen,
  },
  {
    no: 2,
    badge: "bg-emerald-500",
    title: "Akses Materi Bahasa Isyarat",
    desc: "Pelajari materi dengan gambar dan video bahasa isyarat yang mudah dipahami.",
    href: "/materi-isyarat",
    icon: Images,
  },
  {
    no: 3,
    badge: "bg-blue-600",
    title: "Akses Latihan Interaktif",
    desc: "Klik menu Latihan Interaktif untuk menguji pemahamanmu melalui soal yang menarik.",
    href: "/latihan",
    icon: SquarePen,
  },
];

export default function CaraPenggunaanPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-center text-2xl font-extrabold">Cara Penggunaan Fitur MathSign</h1>
      <p className="mt-3 text-sm text-slate-500">
        Cermati langkah-langkah berikut agar dapat menggunakan fitur-fitur pada MathSign dengan
        benar.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {steps.map(({ no, badge, title, desc, href, icon: Icon }) => (
          <div
            key={no}
            className="relative flex flex-col rounded-2xl bg-white p-5 shadow-[0_0_6px_rgba(0,0,0,0.12)]"
          >
            {/* Badge angka */}
            <span
              className={`absolute left-4 top-4 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white ${badge}`}
            >
              {no}
            </span>

            {/* Ikon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Icon size={24} />
            </div>

            <h3 className="mt-4 text-base font-extrabold">{title}</h3>
            <p className="mt-3 flex-1 text-[10px] leading-relaxed text-slate-500">{desc}</p>

            <Link
              href={href}
              className="mt-6 flex w-full items-center justify-center rounded-lg bg-primary py-2.5 text-[11px] font-bold text-white transition hover:bg-blue-700"
            >
              Buka
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}