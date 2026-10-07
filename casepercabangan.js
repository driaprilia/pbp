const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukkan nilai: ", function(nilai) {

    if (isNaN(nilai)) {
        console.log("Input harus berupa angka!");
    } else {
        nilai = Number(nilai);

        if (nilai >= 85) {
            console.log("nilai A");
        } else if (nilai >= 70) {
            console.log("nilai B");
        } else if (nilai >= 55) {
            console.log("nilai C");
        } else if (nilai >= 40) {
            console.log("nilai D");
        } else {
            console.log("nilai E");
        }
    }

    rl.close();
});