const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// User Input Data
console.log("PROGRAM PEMERIKSA ZODIAK");

rl.question("Masukkan Nama Anda: ", (nama) => {
    rl.question("Masukkan Tanggal Lahir (1-31): ", (tglInput) => {
        rl.question("Masukkan Bulan Lahir (Contoh: Januari): ", (bulanInput) => {
            
            const tanggal = parseInt(tglInput);
            const bulan = bulanInput.toLowerCase();
            let zodiak = "";

            // Algoritma Penentuan Zodiak Menggunakan If-Else
            if ((bulan === "maret" && tanggal >= 21) || (bulan === "april" && tanggal <= 19)) {
                zodiak = "Aries";
            } else if ((bulan === "april" && tanggal >= 20) || (bulan === "mei" && tanggal <= 20)) {
                zodiak = "Taurus";
            } else if ((bulan === "mei" && tanggal >= 21) || (bulan === "juni" && tanggal <= 20)) {
                zodiak = "Gemini";
            } else if ((bulan === "juni" && tanggal >= 21) || (bulan === "juli" && tanggal <= 22)) {
                zodiak = "Cancer";
            } else if ((bulan === "juli" && tanggal >= 23) || (bulan === "agustus" && tanggal <= 22)) {
                zodiak = "Leo";
            } else if ((bulan === "agustus" && tanggal >= 23) || (bulan === "september" && tanggal <= 22)) {
                zodiak = "Virgo";
            } else if ((bulan === "september" && tanggal >= 23) || (bulan === "oktober" && tanggal <= 22)) {
                zodiak = "Libra";
            } else if ((bulan === "oktober" && tanggal >= 23) || (bulan === "november" && tanggal <= 21)) {
                zodiak = "Scorpio";
            } else if ((bulan === "november" && tanggal >= 22) || (bulan === "desember" && tanggal <= 21)) {
                zodiak = "Sagittarius";
            } else if ((bulan === "desember" && tanggal >= 22) || (bulan === "januari" && tanggal <= 19)) {
                zodiak = "Capricorn";
            } else if ((bulan === "januari" && tanggal >= 20) || (bulan === "februari" && tanggal <= 18)) {
                zodiak = "Aquarius";
            } else if ((bulan === "februari" && tanggal >= 19) || (bulan === "maret" && tanggal <= 20)) {
                zodiak = "Pisces";
            } else {
                zodiak = "Tidak Diketahui (Cek kembali input Anda)";
            }

            // Output Akhir menggunakan Template Literals
            console.log("\n-----------------------");
            console.log(`Halo ${nama}!`);
            console.log(`Lahir pada: ${tanggal} ${bulanInput}`);
            console.log(`Zodiak Anda: ${zodiak}`);
            console.log("-----------------------");

            // Menutup interface readline
            rl.close();
        });
    });
});