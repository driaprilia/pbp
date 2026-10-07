let siswa = [
    { nama: "Fahmy", nilai: 80 },
    { nama: "Indri", nilai: 65 },
    { nama: "April", nilai: 90 },
    { nama: "Anzel", nilai: 75 },
    { nama: "Sahrul", nilai: 60 }
];

let total = 0;
let nilaiTerbesar = siswa[0].nilai;
let namaTerbesar = siswa[0].nama;

console.log("=== DAFTAR SISWA ===");

for (let i = 0; i < siswa.length; i++) {
    console.log(siswa[i].nama + " : " + siswa[i].nilai);

    // Menghitung total nilai
    total += siswa[i].nilai;

    // Menentukan yang lulus
    if (siswa[i].nilai > 70) {
        console.log(siswa[i].nama + " : LULUS");
    }

    // Menentukan nilai terbesar
    if (siswa[i].nilai > nilaiTerbesar) {
        nilaiTerbesar = siswa[i].nilai;
        namaTerbesar = siswa[i].nama;
    }
}

// Nilai rata-rata
let rataRata = total / siswa.length;

console.log("\n=== HASIL ===");
console.log("Nilai rata-rata:", rataRata);
console.log("Nilai terbesar:", nilaiTerbesar);
console.log("Siswa dengan nilai terbesar:", namaTerbesar);