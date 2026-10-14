"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleAlert,
  CircleCheck,
  Info,
  LockOpen,
  MapPin,
} from "lucide-react";
import { IMG_PATH, soalList, TOTAL_SOAL } from "./data";

const tabs = [
  "Soal",
  "Visualisasi",
  "Opsi Jawaban",
  "Opsi Jawaban Bahasa Isyarat",
  "Konfirmasi Jawaban",
];

const headings = [
  {
    title: "Baca dan pahami soal ceritanya",
    desc: "Mulai dari informasi-informasi pada soal sebelum lanjut ke tahap berikutnya.",
  },
  {
    title: "Amati bagian-bagian pizza",
    desc: "Pizza dibagi menjadi 8 bagian sama besar. Tiga bagian berwarna merah menunjukkan bagian yang dimakan Andi.",
  },
  {
    title: "Pilih pecahan yang sesuai",
    desc: "Pilih satu jawaban antara opsi 1-4 yang benar. Jawaban tidak langsung diperiksa, sehingga kamu masih bisa mengubah pilihanmu.",
  },
  {
    title: "Kenali jawaban melalui bahasa isyarat",
    desc: "Pilihan antara opsi 1-4 tetap sama. Gambar di atas garis mewakili pembilang, gambar di bawah garis mewakili penyebut.",
  },
  {
    title: "Lihat hasil dan pahami caranya",
    desc: "Jawabanmu sudah diperiksa. Gunakan pembahasan berikut untuk memahami pecahan dengan lebih baik.",
  },
];

function Fraction({ n, d, className = "" }: { n: number; d: number; className?: string }) {
  return (
    <div className={`flex flex-col items-center text-base font-extrabold leading-tight ${className}`}>
      <span>{n}</span>
      <span className="my-0.5 h-0.5 w-5 bg-current" />
      <span>{d}</span>
    </div>
  );
}

function Radio({ checked }: { checked: boolean }) {
  return (
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
        checked ? "border-primary" : "border-slate-300"
      }`}
    >
      {checked && <span className="h-2 w-2 rounded-full bg-primary" />}
    </span>
  );
}

export default function LatihanLevel1Page() {
  const [qIndex, setQIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const soal = soalList[qIndex];
  const hasNext = qIndex + 1 < soalList.length;
  const isCorrect = selected === soal.correct;
  const picked = selected !== null ? soal.options[selected] : null;
  const right = soal.options[soal.correct];

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const nextSoal = () => {
    setQIndex((i) => i + 1);
    setStep(0);
    setSelected(null);
  };

  const Footer = ({
    backLabel,
    nextLabel,
    onNext,
    disabled,
    boxed,
  }: {
    backLabel?: string;
    nextLabel: string;
    onNext: () => void;
    disabled?: boolean;
    boxed?: boolean;
  }) => (
    <div
      className={`flex items-center justify-between gap-3 ${
        boxed ? "mt-4 rounded-xl border border-slate-200 p-4" : "mt-4 border-t border-slate-200 pt-4"
      }`}
    >
      {backLabel ? (
        <button
          onClick={back}
          className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-[11px] font-bold text-primary transition hover:bg-slate-50"
        >
          <ArrowLeft size={14} /> {backLabel}
        </button>
      ) : (
        <span />
      )}
      <span className="text-[10px] text-slate-500">
        Soal {soal.id} dari {TOTAL_SOAL} · Level 1
      </span>
      <button
        onClick={onNext}
        disabled={disabled}
        className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-[11px] font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {nextLabel} <ArrowRight size={14} />
      </button>
    </div>
  );

  const PizzaImage = ({ className = "" }: { className?: string }) => (
    <Image
      src={soal.image}
      alt="Visualisasi soal"
      width={500}
      height={300}
      className={`h-auto w-full ${className}`}
    />
  );

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-center text-2xl font-extrabold">Latihan Interaktif</h1>

      {/* Banner level */}
      <div className="mt-3 flex items-center gap-4 rounded-xl bg-primary px-5 py-4 text-white">
        <LockOpen size={16} />
        <div>
          <p className="text-xs font-extrabold">Level 1 (Menentukan Bentuk Pecahan)</p>
          <p className="mt-0.5 text-[10px] text-blue-100">Mudah</p>
        </div>
      </div>

      {/* Stepper */}
      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-5">
        {tabs.map((label, i) => {
          const done = i < step;
          const active = i === step;
          return (
            <button
              key={label}
              disabled={!done}
              onClick={() => setStep(i)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-[10px] font-semibold ${
                active
                  ? "border-blue-200 bg-blue-100 text-primary"
                  : "border-slate-200 bg-white text-slate-600"
              } ${done ? "cursor-pointer" : "cursor-default"}`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                  done || active ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {done ? <Check size={11} /> : i + 1}
              </span>
              {label}
            </button>
          );
        })}
      </div>

      {/* Judul tahap */}
      <h2 className="mt-5 text-lg font-extrabold">{headings[step].title}</h2>
      <p className="mt-1 text-[11px] text-slate-500">{headings[step].desc}</p>

      {/* Kartu utama */}
      <section className="mt-4 rounded-2xl bg-white p-6 shadow-[0_0_6px_rgba(0,0,0,0.12)]">
        {/* Tahap 5 pakai judul sendiri, jadi soal disembunyikan */}
        {step < 4 && (
          <>
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-base font-extrabold text-primary">
              Soal {soal.id}
            </span>
            <p className="mt-3 text-[15px] font-extrabold leading-snug">{soal.text}</p>
          </>
        )}

        {/* ===== TAHAP 1: SOAL ===== */}
        {step === 0 && (
          <>
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[9px] text-slate-600">
              <MapPin size={10} className="text-primary" />
              {soal.hint}
            </p>
            <Footer nextLabel="Lihat visualisasi" onNext={next} />
          </>
        )}

        {/* ===== TAHAP 2: VISUALISASI ===== */}
        {step === 1 && (
          <>
            <div className="mt-4 rounded-xl border border-slate-200 p-5">
              <PizzaImage className="mx-auto max-w-xl" />
              <div className="mt-2 flex justify-center gap-6 text-[10px] font-semibold">
                {soal.legend.map((l) => (
                  <span key={l.label} className="flex items-center gap-1.5">
                    <span className={`h-2.5 w-2.5 rounded-sm ${l.color}`} />
                    {l.label}
                  </span>
                ))}
              </div>
            </div>
            <Footer backLabel="Kembali ke soal" nextLabel="Pilih opsi jawaban" onNext={next} />
          </>
        )}

        {/* ===== TAHAP 3: OPSI JAWABAN ===== */}
        {step === 2 && (
          <>
            <div className="mt-4 grid items-center gap-6 rounded-xl border border-slate-200 p-5 md:grid-cols-2">
              <div>
                <PizzaImage />
                <div className="mt-2 flex justify-center gap-6 text-[10px] font-semibold">
                  {soal.legend.map((l) => (
                    <span key={l.label} className="flex items-center gap-1.5">
                      <span className={`h-2.5 w-2.5 rounded-sm ${l.color}`} />
                      {l.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                {soal.options.map((o, i) => {
                  const active = selected === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setSelected(i)}
                      className={`flex w-full items-center gap-4 rounded-lg border px-4 py-2 transition ${
                        active
                          ? "border-blue-300 bg-blue-50"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <Radio checked={active} />
                      <Fraction n={o.num} d={o.den} className={active ? "text-primary" : ""} />
                    </button>
                  );
                })}
              </div>

              {picked && (
                <p className="flex items-center gap-2 text-[10px] text-slate-600 md:col-span-2">
                  <Info size={12} className="shrink-0 text-primary" />
                  Pilihanmu: opsi {selected! + 1} · {picked.num}/{picked.den}. Berikutnya, lihat dan
                  pilih yang sama pada opsi jawaban bahasa isyarat.
                </p>
              )}
            </div>
            <Footer
              backLabel="Kembali ke visualisasi"
              nextLabel="Pilih opsi jawaban bahasa isyarat"
              onNext={next}
              disabled={selected === null}
            />
          </>
        )}

        {/* ===== TAHAP 4: BAHASA ISYARAT ===== */}
        {step === 3 && (
          <>
            <div className="mt-4 rounded-xl border border-slate-200 p-5">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-extrabold">
                  Pecahan untuk bagian pizza yang dimakan Andi adalah ....
                </p>
                {picked && (
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[9px] font-bold text-primary">
                    Dipilih: {soal.options[selected!].label} · {picked.num}/{picked.den}
                  </span>
                )}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {soal.options.map((o, i) => {
                  const active = selected === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setSelected(i)}
                      className={`rounded-xl border p-3 text-left transition ${
                        active
                          ? "border-primary bg-blue-50"
                          : "border-slate-200 bg-white hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-extrabold ${active ? "text-primary" : ""}`}>
                          {o.label} · {o.num}/{o.den}
                        </span>
                        <Radio checked={active} />
                      </div>

                      {/* Pembilang */}
                      <div className="mt-3 flex items-center justify-center gap-4">
                        <Image
                          src={`${IMG_PATH}/isyarat-${o.num}.jpg`}
                          alt={`Isyarat angka ${o.num}`}
                          width={90}
                          height={70}
                          className="h-16 w-auto object-contain"
                        />
                        <div>
                          <p className="text-lg font-extrabold leading-none">{o.num}</p>
                          <p className="mt-1 text-[8px] text-slate-500">Pembilang</p>
                        </div>
                      </div>

                      <div className={`my-2 h-px ${active ? "bg-primary" : "bg-slate-300"}`} />

                      {/* Penyebut */}
                      <div className="flex items-center justify-center gap-4">
                        <Image
                          src={`${IMG_PATH}/isyarat-${o.den}.jpg`}
                          alt={`Isyarat angka ${o.den}`}
                          width={90}
                          height={70}
                          className="h-16 w-auto object-contain"
                        />
                        <div>
                          <p className="text-lg font-extrabold leading-none">{o.den}</p>
                          <p className="mt-1 text-[8px] text-slate-500">Penyebut</p>
                        </div>
                      </div>

                      <p
                        className={`mt-2 text-center text-[9px] ${
                          active ? "font-bold text-primary" : "text-slate-500"
                        }`}
                      >
                        {active ? "Pilihanmu · belum diperiksa" : `Opsi ${i + 1}`}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
            <Footer
              backLabel="Kembali ke opsi jawaban"
              nextLabel="Konfirmasi jawaban"
              onNext={next}
              disabled={selected === null}
            />
          </>
        )}

        {/* ===== TAHAP 5: KONFIRMASI ===== */}
        {step === 4 && picked && (
          <>
            {/* Banner hasil */}
            {isCorrect ? (
              <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-4">
                <CircleCheck size={22} className="text-green-600" />
                <div>
                  <p className="text-base font-extrabold text-green-700">Jawaban benar!</p>
                  <p className="text-[11px] text-slate-600">
                    Opsi {selected! + 1} · {picked.num}/{picked.den} tepat. 3 bagian dimakan dari 8
                    bagian sama besar. Bagus, kamu sudah memahami pembilang dan penyebut!
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 rounded-xl border border-orange-200 bg-orange-50 px-5 py-4">
                <CircleAlert size={22} className="text-orange-500" />
                <div>
                  <p className="text-base font-extrabold">Belum tepat, tidak apa-apa!</p>
                  <p className="text-[11px] text-slate-600">
                    Kamu memilih opsi {selected! + 1} · {picked.num}/{picked.den}. Yuk, hitung
                    kembali seluruh potongan pizza bersama-sama.
                  </p>
                </div>
              </div>
            )}

            {/* Jawabanmu vs benar */}
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div
                className={`flex items-center justify-between rounded-lg border px-4 py-2.5 text-[11px] ${
                  isCorrect ? "border-green-200 bg-green-50" : "border-slate-200 bg-slate-50"
                }`}
              >
                <span className="text-slate-500">Jawabanmu</span>
                <span className={`text-sm font-extrabold ${isCorrect ? "text-green-700" : "text-orange-600"}`}>
                  Opsi {selected! + 1} · {picked.num}/{picked.den}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 px-4 py-2.5 text-[11px]">
                <span className="text-slate-500">Jawaban yang benar</span>
                <span className="text-sm font-extrabold text-green-700">
                  Opsi {soal.correct + 1} · {right.num}/{right.den}
                </span>
              </div>
            </div>

            {/* Pembahasan */}
            <div className="mt-4 grid items-center gap-6 md:grid-cols-2">
              <div>
                <PizzaImage />
                <p className="mt-1 text-center text-[10px] font-bold">{soal.caption}</p>
              </div>
              <div>
                <h3 className="text-sm font-extrabold">Cara menentukan pecahannya</h3>
                <ol className="mt-3 space-y-3">
                  {soal.explanation.map((e, i) => (
                    <li key={e.title} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-primary">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-[11px] font-extrabold">{e.title}</p>
                        <p className="mt-0.5 text-[10px] text-slate-500">{e.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Tombol lanjut */}
            <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 p-4">
              <span />
              <span className="text-[10px] text-slate-500">
                Soal {soal.id} dari {TOTAL_SOAL} · Level 1
              </span>
              {hasNext ? (
                <button
                  onClick={nextSoal}
                  className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-[11px] font-bold text-white transition hover:bg-blue-700"
                >
                  Lanjut ke soal {soal.id + 1} <ArrowRight size={14} />
                </button>
              ) : (
                <Link
                  href="/latihan"
                  className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-[11px] font-bold text-white transition hover:bg-blue-700"
                >
                  Selesai <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </>
        )}
      </section>
    </div>
  );
}