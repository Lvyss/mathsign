export const IMG_PATH = "/images/latihan/level-1";
export const TOTAL_SOAL = 5;

export type Soal = {
  id: number;
  text: string;
  hint: string;
  image: string;
  legend: { color: string; label: string }[];
  caption: string;
  options: { label: string; num: number; den: number }[];
  correct: number; // index di array options (0 = opsi 1)
  explanation: { title: string; desc: string }[];
};

export const soalList: Soal[] = [
  {
    id: 1,
    text: "Andi membeli sebuah pizza yang dipotong menjadi 8 bagian sama besar. Andi memakan 3 bagian pizza tersebut. Pecahan yang menunjukkan bagian pizza yang dimakan Andi adalah ...",
    hint: "Perhatikan jumlah seluruh bagian pizza dan jumlah bagian yang dimakan Andi.",
    image: `${IMG_PATH}/soal-1-pizza.png`,
    legend: [
      { color: "bg-red-400", label: "3 bagian dimakan" },
      { color: "bg-yellow-300", label: "5 bagian tersisa" },
    ],
    caption: "3 dimakan + 5 tersisa = 8 seluruhnya",
    options: [
      { label: "A", num: 3, den: 5 },
      { label: "B", num: 3, den: 6 },
      { label: "C", num: 3, den: 7 },
      { label: "D", num: 3, den: 8 },
    ],
    correct: 3,
    explanation: [
      {
        title: "Hitung seluruh bagian → penyebut 8",
        desc: "Pizza dibagi menjadi 8 bagian sama besar. Semua bagian tetap dihitung, termasuk yang sudah dimakan.",
      },
      {
        title: "Hitung bagian yang dimakan → pembilang 3",
        desc: "Andi memakan 3 bagian. Angka 3 ditulis di atas garis pecahan.",
      },
      {
        title: "Tuliskan pembilang / penyebut → 3/8",
        desc: "Jadi, bagian pizza yang dimakan Andi adalah tiga per delapan, bukan tiga per enam.",
      },
    ],
  },
  // Soal 2-5: copy objek di atas, lalu ganti isinya
];