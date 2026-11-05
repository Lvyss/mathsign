export const IMG_PATH = "/images/latihan/level-1";
export const TOTAL_SOAL = 7;

export type Soal = {
  id: number;
  text: string;
  hint: string;
  image: string;
  legend: { color: string; label: string }[];
  caption: string;
  options: { label: string; num: number; den: number }[];
  correct: number;
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
        desc: "Jadi, bagian pizza yang dimakan Andi adalah tiga per delapan.",
      },
    ],
  },
  {
    id: 2,
    text: "Siti memiliki kue yang dipotong menjadi 6 bagian sama besar. Ia memberikan 2 bagian kepada adiknya. Pecahan yang menunjukkan bagian kue yang diberikan Siti adalah ...",
    hint: "Hitung total potongan kue dan potongan yang diberikan.",
    image: `${IMG_PATH}/soal-2-pizza.png`,
    legend: [
      { color: "bg-red-400", label: "2 bagian diberikan" },
      { color: "bg-yellow-300", label: "4 bagian tersisa" },
    ],
    caption: "2 diberikan + 4 tersisa = 6 seluruhnya",
    options: [
      { label: "A", num: 2, den: 4 },
      { label: "B", num: 2, den: 6 },
      { label: "C", num: 2, den: 8 },
      { label: "D", num: 4, den: 6 },
    ],
    correct: 1,
    explanation: [
      {
        title: "Hitung seluruh bagian → penyebut 6",
        desc: "Kue dipotong menjadi 6 bagian sama besar.",
      },
      {
        title: "Hitung bagian yang diberikan → pembilang 2",
        desc: "Siti memberikan 2 bagian kepada adiknya.",
      },
      {
        title: "Tuliskan pembilang / penyebut → 2/6",
        desc: "Jadi, bagian kue yang diberikan adalah dua per enam.",
      },
    ],
  },
  {
    id: 3,
    text: "Budi memakan 4 bagian dari pizza yang dipotong menjadi 8 bagian sama besar. Pecahan yang menunjukkan bagian pizza yang dimakan Budi adalah ...",
    hint: "Bagi jumlah yang dimakan dengan total seluruh bagian.",
    image: `${IMG_PATH}/soal-3-pizza.png`,
    legend: [
      { color: "bg-red-400", label: "4 bagian dimakan" },
      { color: "bg-yellow-300", label: "4 bagian tersisa" },
    ],
    caption: "4 dimakan + 4 tersisa = 8 seluruhnya",
    options: [
      { label: "A", num: 4, den: 6 },
      { label: "B", num: 4, den: 7 },
      { label: "C", num: 4, den: 8 },
      { label: "D", num: 4, den: 9 },
    ],
    correct: 2,
    explanation: [
      {
        title: "Hitung seluruh bagian → penyebut 8",
        desc: "Pizza dibagi menjadi 8 bagian sama besar.",
      },
      {
        title: "Hitung bagian yang dimakan → pembilang 4",
        desc: "Budi memakan 4 bagian.",
      },
      {
        title: "Tuliskan pembilang / penyebut → 4/8",
        desc: "Jadi, bagian pizza yang dimakan Budi adalah empat per delapan.",
      },
    ],
  },
  {
    id: 4,
    text: "Rina membeli roti yang dipotong menjadi 5 bagian. Ia memakan 1 bagian roti tersebut. Pecahan yang menunjukkan bagian roti yang dimakan Rina adalah ...",
    hint: "Perhatikan angka 1 sebagai pembilang dan total potongan sebagai penyebut.",
    image: `${IMG_PATH}/soal-4-pizza.png`,
    legend: [
      { color: "bg-red-400", label: "1 bagian dimakan" },
      { color: "bg-yellow-300", label: "4 bagian tersisa" },
    ],
    caption: "1 dimakan + 4 tersisa = 5 seluruhnya",
    options: [
      { label: "A", num: 1, den: 4 },
      { label: "B", num: 1, den: 5 },
      { label: "C", num: 1, den: 6 },
      { label: "D", num: 1, den: 7 },
    ],
    correct: 1,
    explanation: [
      {
        title: "Hitung seluruh bagian → penyebut 5",
        desc: "Roti dipotong menjadi 5 bagian sama besar.",
      },
      {
        title: "Hitung bagian yang dimakan → pembilang 1",
        desc: "Rina memakan 1 bagian roti.",
      },
      {
        title: "Tuliskan pembilang / penyebut → 1/5",
        desc: "Jadi, bagian roti yang dimakan Rina adalah satu per lima.",
      },
    ],
  },
  {
    id: 5,
    text: "Sebuah martabak dipotong menjadi 10 bagian sama besar. Dodi memakan 7 bagian martabak tersebut. Pecahan yang menunjukkan bagian martabak yang dimakan Dodi adalah ...",
    hint: "Angka 10 adalah total bagian, angka 7 adalah yang dimakan.",
    image: `${IMG_PATH}/soal-5-pizza.png`,
    legend: [
      { color: "bg-red-400", label: "7 bagian dimakan" },
      { color: "bg-yellow-300", label: "3 bagian tersisa" },
    ],
    caption: "7 dimakan + 3 tersisa = 10 seluruhnya",
    options: [
      { label: "A", num: 7, den: 8 },
      { label: "B", num: 7, den: 9 },
      { label: "C", num: 7, den: 10 },
      { label: "D", num: 7, den: 11 },
    ],
    correct: 2,
    explanation: [
      {
        title: "Hitung seluruh bagian → penyebut 10",
        desc: "Martabak dipotong menjadi 10 bagian sama besar.",
      },
      {
        title: "Hitung bagian yang dimakan → pembilang 7",
        desc: "Dodi memakan 7 bagian martabak.",
      },
      {
        title: "Tuliskan pembilang / penyebut → 7/10",
        desc: "Jadi, bagian martabak yang dimakan Dodi adalah tujuh per sepuluh.",
      },
    ],
  },
  {
    id: 6,
    text: "Ibu membuat bolu dan memotongnya menjadi 12 bagian sama besar. Ayah memakan 5 bagian bolu. Pecahan yang menunjukkan bagian bolu yang dimakan Ayah adalah ...",
    hint: "Hitung total potongan bolu dan potongan yang dimakan.",
    image: `${IMG_PATH}/soal-6-pizza.png`,
    legend: [
      { color: "bg-red-400", label: "5 bagian dimakan" },
      { color: "bg-yellow-300", label: "7 bagian tersisa" },
    ],
    caption: "5 dimakan + 7 tersisa = 12 seluruhnya",
    options: [
      { label: "A", num: 5, den: 10 },
      { label: "B", num: 5, den: 11 },
      { label: "C", num: 5, den: 12 },
      { label: "D", num: 5, den: 13 },
    ],
    correct: 2,
    explanation: [
      {
        title: "Hitung seluruh bagian → penyebut 12",
        desc: "Bolu dipotong menjadi 12 bagian sama besar.",
      },
      {
        title: "Hitung bagian yang dimakan → pembilang 5",
        desc: "Ayah memakan 5 bagian bolu.",
      },
      {
        title: "Tuliskan pembilang / penyebut → 5/12",
        desc: "Jadi, bagian bolu yang dimakan Ayah adalah lima per dua belas.",
      },
    ],
  },
  {
    id: 7,
    text: "Sebuah semangka dipotong menjadi 4 bagian sama besar. Ani memakan 1 bagian semangka tersebut. Pecahan yang menunjukkan bagian semangka yang dimakan Ani adalah ...",
    hint: "Perhatikan bahwa 1 bagian dimakan dari total 4 bagian.",
    image: `${IMG_PATH}/soal-7-pizza.png`,
    legend: [
      { color: "bg-red-400", label: "1 bagian dimakan" },
      { color: "bg-yellow-300", label: "3 bagian tersisa" },
    ],
    caption: "1 dimakan + 3 tersisa = 4 seluruhnya",
    options: [
      { label: "A", num: 1, den: 2 },
      { label: "B", num: 1, den: 3 },
      { label: "C", num: 1, den: 4 },
      { label: "D", num: 1, den: 5 },
    ],
    correct: 2,
    explanation: [
      {
        title: "Hitung seluruh bagian → penyebut 4",
        desc: "Semangka dipotong menjadi 4 bagian sama besar.",
      },
      {
        title: "Hitung bagian yang dimakan → pembilang 1",
        desc: "Ani memakan 1 bagian semangka.",
      },
      {
        title: "Tuliskan pembilang / penyebut → 1/4",
        desc: "Jadi, bagian semangka yang dimakan Ani adalah satu per empat.",
      },
    ],
  },
];