# Program Penentu Zodiak – Node.js

Halo! Saya **Lovien Najla Dhafiyah**, mahasiswi Universitas Bengkulu Program Studi Informatika Angkatan 2024 dengan NPM **G1A024055**.
Program ini dibuat sebagai bagian dari latihan pemrograman dasar menggunakan JavaScript dan Node.js. Program ini merupakan aplikasi sederhana berbasis terminal yang berfungsi untuk menentukan zodiak berdasarkan tanggal dan bulan lahir yang diinput oleh user.

Program ini memuat:
* Input tahun lahir untuk mengecek kabisat
* Input bulan lahir (hanya 12 bulan valid)
* Input tanggal lahir sesuai jumlah hari pada bulan tersebut
* Menampilkan tanggal lahir user
* Menampilkan hasil zodiak berdasarkan kondisi `if else`

---

## Struktur Folder dan File
1. **File JavaScript**
   File `zodiak.js` merupakan file utama program yang berisi kode untuk input user, validasi tanggal dan bulan, serta penentuan zodiak menggunakan kondisi `if else`.
2. **File package.json**
   File ini berisi informasi dependensi Node.js yang digunakan dalam program, termasuk library `readline-sync`.
3. **Folder node_modules**
   Folder ini otomatis dibuat setelah instalasi package, dan berisi library yang dibutuhkan agar program bisa menerima input dari terminal.

---

## Kode yang Dihighlight
Berikut beberapa bagian kode penting yang digunakan dalam program ini:

### 1. Input User Menggunakan readline-sync
```js
const rl = require("readline-sync");
let tahun = parseInt(rl.question("Masukkan tahun lahir: "));
```
Kode ini digunakan untuk menerima input dari user melalui terminal Node.js.

### 2. Mengecek Tahun Kabisat
```js
let kabisat =
  (tahun % 4 === 0 && tahun % 100 !== 0) ||
  (tahun % 400 === 0);
```
Kode ini digunakan untuk menentukan apakah tahun yang dimasukkan termasuk tahun kabisat atau bukan.

### 3. Validasi Bulan (Hanya 12 Bulan)
```js
while (true) {
  bulan = rl.question("Masukkan bulan lahir: ").toLowerCase();
  if (bulanHari[bulan]) break;
  console.log("Bulan tidak valid! Harus 12 bulan yang ada.");
}
```
Kode ini memastikan user hanya bisa memasukkan nama bulan yang valid.

### 4. Validasi Tanggal Sesuai Bulan
```js
while (true) {
  tanggal = parseInt(rl.question("Masukkan tanggal lahir: "));
  if (tanggal >= 1 && tanggal <= bulanHari[bulan]) break;
  console.log(`Tanggal tidak valid! Bulan ${bulan} hanya sampai ${bulanHari[bulan]}.`);
}
```
Kode ini digunakan agar user tidak bisa memasukkan tanggal melebihi jumlah hari dalam bulan tersebut.

### 5. Menentukan Zodiak dengan If Else
```js
if ((bulan === "maret" && tanggal >= 21) || (bulan === "april" && tanggal <= 19))
  zodiak = "Aries";
else if ((bulan === "april" && tanggal >= 20) || (bulan === "mei" && tanggal <= 20))
  zodiak = "Taurus";
```
Kode ini menentukan zodiak berdasarkan tanggal dan bulan lahir user.

### 6. Output Program
```js
console.log(
  `\nHi, karena kamu lahir pada tanggal ${tanggal} dan bulan ${bulan},\n` +
  `maka zodiak kamu adalah ${zodiak}.\n`
);
```
Kode ini menampilkan hasil akhir berupa tanggal lahir dan zodiak user.

---

## Tujuan Pembuatan Program

Program penentu zodiak ini dibuat untuk melatih kemampuan dasar pemrograman JavaScript menggunakan Node.js, khususnya dalam:
* Mengambil input user melalui terminal
* Menggunakan struktur data object
* Validasi input tanggal dan bulan
* Penerapan kondisi `if else`
* Menampilkan output yang jelas dan rapi

---

## Lampiran

### 1. Input User Tahun Kabisat


### 2. Input User Tahun Non- Kabisat dan Kesalahan Input Tanggal


### 3. Input User Kesalahan Bulan Lahir


### 4. Input User Berhasil

Terima kasih telah membaca README ini!

