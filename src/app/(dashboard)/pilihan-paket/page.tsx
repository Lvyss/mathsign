
import { CheckSquare } from "lucide-react";

const packages = [
  {
    no: "Paket 1",
    badge: "Untuk umum",
    name: "MathSign Gratis",
    desc: "Untuk siapa saja",
    price: "Rp0,00",
    unit: "",
    note: "Tanpa biaya berlangganan",
    features: [
      "Fitur materi pecahan (materi prasyarat).",
      "Fitur materi bahasa isyarat (gambar, isyarat angka dan istilah matematika).",
      "Fitur latihan interaktif (level 1).",
      "Fitur cara penggunaan.",
    ],
    button: "Pilih paket Gratis",
    highlight: false,
  },
  {
    no: "Paket 2",
    badge: "Untuk individu",
    name: "MathSign Individu",
    desc: "Akses lengkap individu",
    price: "Rp15.000,00",
    unit: "/Bulan",
    note: "Rp180.000,00/Tahun",
    features: [
      "Fitur materi pecahan (materi prasyarat dan materi pecahan).",
      "Fitur materi bahasa isyarat (gambar dan video isyarat angka dan istilah matematika).",
      "Fitur latihan interaktif (level 1-3).",
      "Fitur cara penggunaan.",
      "Fitur laporan hasil (rekap hasil latihan interaktif dan perkembangan hasil belajar individu).",
    ],
    button: "Kelola paket Individu",
    highlight: true,
  },
  {
    no: "Paket 3",
    badge: "Untuk sekolah",
    name: "MathSign Sekolah",
    desc: "Maksimal 50 akun siswa",
    price: "Rp900.000,00",
    unit: "/Tahun",
    note: "Untuk seluruh akun siswa terdaftar",
    features: [
      "Fitur materi pecahan (materi prasyarat dan materi pecahan).",
      "Fitur materi bahasa isyarat (gambar dan video isyarat angka dan istilah matematika).",
      "Fitur latihan interaktif (level 1-3).",
      "Fitur cara penggunaan.",
      "Fitur laporan hasil (rekap hasil latihan interaktif dan perkembangan hasil belajar seluruh siswa yang terdaftar).",
    ],
    button: "Pilih paket Sekolah",
    highlight: false,
  },
];

export default function PilihanPaketPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-center text-2xl font-extrabold">Pilihan Paket MathSign</h1>
      <p className="mt-3 text-sm text-slate-500">
        Pilih akses yang sesuai kebutuhanmu, dari langkah pertama hingga belajar bersama di sekolah.
      </p>

      <div className="mt-6 grid items-stretch gap-5 md:grid-cols-3">
        {packages.map((p) => (
          <div
            key={p.no}
            className={`flex flex-col rounded-2xl bg-white p-5 shadow-sm ${
              p.highlight ? "border-2 border-primary shadow-lg" : "border border-slate-200"
            }`}
          >
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-slate-400">{p.no}</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 font-semibold">
                {p.badge}
              </span>
            </div>

            <h3 className="mt-4 text-center text-lg font-extrabold">{p.name}</h3>
            <p className="text-center text-xs text-slate-500">{p.desc}</p>

            <p className="mt-3 text-2xl font-extrabold">
              {p.price}
              <span className="text-xs font-medium text-slate-400">{p.unit}</span>
            </p>
            <p className="text-[10px] text-slate-400">{p.note}</p>

            <p className="mt-5 text-xs font-extrabold">Akses:</p>
            <ul className="mt-2 flex-1 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-[11px] text-slate-600">
                  <CheckSquare size={14} className="mt-0.5 shrink-0 text-green-600" />
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 w-full rounded-lg py-2.5 text-xs font-bold transition ${
                p.highlight
                  ? "bg-primary text-white hover:bg-blue-700"
                  : "border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {p.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}