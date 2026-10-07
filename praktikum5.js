const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukkan angka anda: ", function(angka) {
    angka = parseInt(angka);

    if (angka % 2 === 0) {
        console.log("angka anda adalah genap");
    }
    else {
        console.log("angka anda adalah ganjil");
    }
    rl.close();
});