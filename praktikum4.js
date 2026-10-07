const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukkan umur anda: ", function(umur) {
    umur = parseInt(umur);

    console.log("umur anda:", umur);
    console.log("tahun depan umur anda:", umur + 1);

    rl.close();
});