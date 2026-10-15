import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const IMG = "/images/materi/penjumlahan";

/* ---------- Komponen kecil ---------- */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-extrabold text-white">
      {children}
    </span>
  );
}

function SectionTitle({ letter, children }: { letter: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-blue-100 px-3 py-1.5 text-[12px] font-extrabold text-blue-700">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
        {letter}
      </span>
      {children}
    </div>
  );
}

function Cara({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md border border-orange-400 bg-orange-50 px-2.5 py-1 text-[11px] font-bold text-orange-500">
      {children}
    </span>
  );
}

// w = lebar maksimal gambar (px). Ubah angkanya kalau gambar kekecilan/kebesaran.
function Figure({
  src,
  caption,
  w = 360,
}: {
  src: string;
  caption: string;
  w?: number;
}) {
  return (
    <figure className="mt-3">
      <Image
        src={`${IMG}/${src}`}
        alt={caption}
        width={w}
        height={w}
        style={{ width: "100%", maxWidth: w, height: "auto" }}
      />
      <figcaption className="mt-1 text-[10px] text-slate-500">{caption}</figcaption>
    </figure>
  );
}

function Box({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-3 flex gap-4 rounded-lg border border-orange-300 bg-orange-50 px-4 py-2.5 text-[11px] text-slate-700">
      <span className="shrink-0 self-center font-extrabold text-orange-500">{label}</span>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}

const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-2 text-[11px] leading-relaxed text-slate-600">{children}</p>
);

const Biru = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-blue-600">{children}</span>
);
const Merah = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-red-500">{children}</span>
);

/* ---------- Halaman ---------- */

export default function PenjumlahanPage() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Judul */}
      <div className="flex items-center gap-2">
        <Link href="/materi-pecahan" className="text-slate-600 hover:text-primary">
          <ArrowLeft size={16} />
        </Link>
        <h1 className="text-lg font-extrabold">Operasi Penjumlahan</h1>
      </div>

      {/* ================= MATERI PRASYARAT ================= */}
      <div className="mt-3">
        <Pill>Materi Prasyarat</Pill>
      </div>

      {/* A */}
      <div className="mt-2">
        <SectionTitle letter="A">Berbagai Cara Melakukan Penjumlahan</SectionTitle>
        <Text>
          Tika memetik 12 buah jambu air. Kira memetik 6 lebih banyak dari jambu air milik Tika.
          Berapa banyak jambu air yang dipetik Kira? Untuk menemukan jawabannya, kita
          menjumlahkan 12 dan 6.
        </Text>
        <Figure src="gambar-1-tika-kira.png" caption="Gambar 1. Tika dan Kira Memetik Jambu Air" w={260} />

        {/* Kotak cara 1-3 */}
        <div className="mt-4 rounded-2xl bg-orange-100/70 p-4 ">
          <Cara>Cara 1: Menghitung Maju</Cara>
          <Text>Mulai dari bilangan 12, lalu melompat 6 langkah ke depan: 13, 14, 15, 16, 17, 18.</Text>
          <Figure src="gambar-2-menghitung-maju.png" caption="Gambar 2. Menghitung Maju: 12 + 6 = 18" w={400} />

          <div className="mt-4">
            <Cara>Cara 2: Penjumlahan Bersusun</Cara>
          </div>
          <Text>
            Bilangan 12 terdiri dari 1 puluhan dan 2 satuan. Bilangan 6 terdiri dari 6 satuan. Kita
            tuliskan dalam tabel nilai tempat.
          </Text>
          <Figure src="gambar-3-puluhan-satuan.png" caption="Gambar 3. Representasi Puluhan dan Satuan" w={270} />
          <Figure src="gambar-4-nilai-tempat.png" caption="Gambar 4. Penjumlahan Bersusun Berdasarkan Nilai Tempat" w={400} />

          <div className="mt-4">
            <Cara>Cara 3: Pasangan Bilangan</Cara>
          </div>
          <Text>Pisahkan 12 menjadi 10 dan 2. Jumlahkan 2 + 6 = 8, lalu 10 + 8 = 18.</Text>
          <Figure src="gambar-5-pasangan-bilangan.png" caption="Gambar 5. Pasangan Bilangan" w={340} />
        </div>
      </div>

      {/* B */}
      <div className="mt-3">
        <SectionTitle letter="B">Penjumlahan yang Satuannya Mencapai 10</SectionTitle>
        <Text>
          Kira mempunyai 18 jambu air, lalu memetik 2 lagi. Berapa jambu air Kira sekarang? 8 satuan
          + 2 satuan = 10 satuan.
        </Text>
        <Box label="INGAT">
          10 satuan = 1 puluhan, jadi 10 satuan dipindahkan ke kolom puluhan. Puluhan menjadi 1 + 1
          = 2 dan satuan menjadi 0.
        </Box>
        <Figure src="gambar-6-satuan-mencapai-10.png" caption="Gambar 6. Menukar 10 Satuan Menjadi 1 Puluhan" w={400} />
        <Box label="KESIMPULAN">
          Ada tiga cara untuk melakukan operasi penjumlahan: menghitung maju, bersusun, dan
          pasangan bilangan. Jika jumlah satuan mencapai 10, kita dapat mengelompokkan 10 satuan
          menjadi 1 puluhan.
        </Box>
      </div>

      {/* ================= MATERI PECAHAN ================= */}
      <div className="mt-5">
        <Pill>Materi Pecahan</Pill>
      </div>

      {/* A */}
      <div className="mt-2">
        <SectionTitle letter="A">Mengenal Pembilang dan Penyebut</SectionTitle>
        <Text>
          <Biru>Pembilang (biru)</Biru> ada di atas garis. Pembilang menghitung potongan yang
          diwarnai biru.
          <br />
          <Merah>Penyebut (merah)</Merah> ada di bawah garis. Penyebut menghitung semua potongan.
        </Text>
        <Figure src="gambar-7-pembilang-penyebut.png" caption="Gambar 7. Ilustrasi Pembilang dan Penyebut" w={370} />
      </div>

      {/* B */}
      <div className="mt-3">
        <SectionTitle letter="B">Penjumlahan Pecahan Berpenyebut Sama</SectionTitle>
        <Box label="INGAT">
          <Merah>Penyebut</Merah> sama. Maka, <Biru>pembilang</Biru> dijumlahkan.
        </Box>
        <Figure src="gambar-8-penyebut-sama.png" caption="Gambar 8. Ilustrasi Penjumlahan Pecahan Berpenyebut Sama" w={380} />
      </div>

      {/* C */}
      <div className="mt-3">
        <SectionTitle letter="C">Penjumlahan Pecahan Berpenyebut Berbeda</SectionTitle>
        <Box label="INGAT">
          <Merah>Penyebut</Merah> beda. Maka, <Merah>penyebut</Merah> disamakan terlebih dahulu.
        </Box>
        <Text>
          1/4 dan 1/2 punya potongan berbeda ukuran. Kita tidak bisa langsung menggabungkannya.
          Jadi, potong setiap bagian 1/2 menjadi 2. Sekarang, 1/2 menjadi 2/4.
        </Text>
        <Figure src="gambar-9-penyebut-beda.png" caption="Gambar 9. Ilustrasi Penjumlahan Pecahan Berpenyebut Berbeda" w={390} />

        <div className="mt-3 flex gap-4 rounded-lg border border-orange-300 bg-orange-50 px-4 py-2.5 text-[11px] text-slate-700">
          <span className="shrink-0 self-center font-extrabold text-orange-500">INGAT</span>
          <div>
            <p className="font-bold">
              Penyelesaian pecahan untuk penyebut beda, ikuti langkah-langkah berikut:
            </p>
            <ol className="mt-1 list-decimal space-y-0.5 pl-4">
              <li>Lihat penyebutnya. Sama atau beda?</li>
              <li>Kalau beda, cari penyebut yang sama. Pakai kelipatan.</li>
              <li>Ubah pecahan menjadi pecahan senilai.</li>
              <li>Jumlahkan atau kurangkan pembilangnya. Penyebut tetap.</li>
              <li>Sederhanakan hasilnya.</li>
            </ol>
          </div>
        </div>

        <div className="mt-3 text-[11px] text-slate-700">
          <p className="font-bold">Contoh: 1/3 + 1/2</p>
          <ol className="mt-1 list-decimal space-y-0.5 pl-4">
            <li>Penyebut 3 dan 2: beda.</li>
            <li>Kelipatan 3: 3, 6, 9. Kelipatan 2: 2, 4, 6. Penyebut samanya adalah 6.</li>
            <li>1/3 = 2/6 dan 1/2 = 3/6.</li>
            <li>2/6 + 3/6 = 5/6.</li>
            <li>5/6 sudah paling sederhana.</li>
          </ol>
        </div>

        <Figure
          src="gambar-10-langkah-penyebut-beda.png"
          caption="Gambar 10. Ilustrasi Langkah-Langkah Penjumlahan Pecahan Berpenyebut Berbeda"
          w={390}
        />
      </div>
    </div>
  );
}