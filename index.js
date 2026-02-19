// PROGRAM PENENTU ZODIAK

const rl = require("readline-sync");

// --- Input Tahun untuk cek kabisat
let tahun = parseInt(rl.question("Masukkan tahun lahir: "));

// --- Fungsi cek kabisat
let kabisat = (tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0);

// --- Data bulan + jumlah hari
const bulanHari = {
  januari: 31,
  februari: kabisat ? 29 : 28,
  maret: 31,
  april: 30,
  mei: 31,
  juni: 30,
  juli: 31,
  agustus: 31,
  september: 30,
  oktober: 31,
  november: 30,
  desember: 31
};
let bulan, tanggal;

// --- Input bulan 
while (true) {
  bulan = rl.question("Masukkan bulan lahir: ").toLowerCase();
  if (bulanHari[bulan]) break;
  console.log("Bulan tidak valid! Harus 12 bulan yang ada.");
}

// --- Input tanggal 
while (true) {
  tanggal = parseInt(rl.question("Masukkan tanggal lahir: "));
  if (tanggal >= 1 && tanggal <= bulanHari[bulan]) break;
  console.log(`Tanggal tidak valid! Bulan ${bulan} hanya sampai ${bulanHari[bulan]}.`);
}

// --- Menentukan zodiak
let zodiak = "";
if ((bulan === "maret" && tanggal >= 21) || (bulan === "april" && tanggal <= 19)) zodiak = "Aries";
else if ((bulan === "april" && tanggal >= 20) || (bulan === "mei" && tanggal <= 20)) zodiak = "Taurus";
else if ((bulan === "mei" && tanggal >= 21) || (bulan === "juni" && tanggal <= 20)) zodiak = "Gemini";
else if ((bulan === "juni" && tanggal >= 21) || (bulan === "juli" && tanggal <= 22)) zodiak = "Cancer";
else if ((bulan === "juli" && tanggal >= 23) || (bulan === "agustus" && tanggal <= 22)) zodiak = "Leo";
else if ((bulan === "agustus" && tanggal >= 23) || (bulan === "september" && tanggal <= 22)) zodiak = "Virgo";
else if ((bulan === "september" && tanggal >= 23) || (bulan === "oktober" && tanggal <= 22)) zodiak = "Libra";
else if ((bulan === "oktober" && tanggal >= 23) || (bulan === "november" && tanggal <= 21)) zodiak = "Scorpio";
else if ((bulan === "november" && tanggal >= 22) || (bulan === "desember" && tanggal <= 21)) zodiak = "Sagittarius";
else if ((bulan === "desember" && tanggal >= 22) || (bulan === "januari" && tanggal <= 19)) zodiak = "Capricorn";
else if ((bulan === "januari" && tanggal >= 20) || (bulan === "februari" && tanggal <= 18)) zodiak = "Aquarius";
else if ((bulan === "februari" && tanggal >= 19) || (bulan === "maret" && tanggal <= 20)) zodiak = "Pisces";

// --- Output 
console.log(
  `\nHi, karena kamu lahir pada tanggal ${tanggal} dan bulan ${bulan},\n` +
  `maka zodiak kamu adalah ${zodiak}.\n`
);
