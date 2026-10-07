const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukkan waktu lari (menit): ", function(lari) {
    rl.question("masukkan waktu push-up (menit): ", function(pushup) {
        rl.question("masukkan waktu plank (menit): ", function(plank) {

            if (isNaN(lari) || isNaN(pushup) || isNaN(plank)) {
                console.log("input harus berupa angka!");
            } else {
                lari = Number(lari);
                pushup = Number(pushup);
                plank = Number(plank);

                let kaloriLari = (lari / 5) * 60;
                let kaloriPushup = (pushup / 30) * 200;
                let kaloriPlank = plank * 5;

                let totalKalori = kaloriLari + kaloriPushup + kaloriPlank;

                console.log("Kalori lari: " + kaloriLari + " kalori");
                console.log("Kalori push-up: " + kaloriPushup + " kalori");
                console.log("Kalori plank: " + kaloriPlank + " kalori");
                console.log("Total kalori yang terbakar: " + totalKalori + " kalori");
            }

            rl.close();
        });
    });
});