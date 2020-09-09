if (process.argv[2] == undefined) {
    console.log('Tolong sertakan nama file sebagai inputan soalnya\nMisalnya "node solution.js atau data.JSON"');
    process.argv[2]
    process.exit
} 
let namaFile = process.argv[2]
const fs = require('fs')
const manggil = fs.readFileSync(namaFile)
const data = JSON.parse(manggil)
let i = 0
const readline = require('readline');
console.log('Selamat datang di permainan tebak-tebakan, kamu akan diberikan pertanyaan dari file ini "data.JSON".\nUntuk bermain, jawablah dengan jawaban yang sesuai. \nGunakan "skip" untuk menangguhkan pertanyaanya, dan diakhir pertanyaan\n');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban: '
});
console.log('Pertanyaan:' + data[i].Pertanyaan);
//rl.setPrompt('Tebakan:')
rl.prompt();
rl.on('line', (yangdiketik) => {
    if (yangdiketik == data[i].Jawaban) {
        i++
        console.log('Selamat anda benar!');
        if (i == data.length) {
            rl.close()
        } console.log('Pertanyaan:' + data[i].Pertanyaan)

    }
    else if (yangdiketik == 'skip') {
        data.push(data[i])
        i++
        console.log('Pertanyaan:' + data[i].Pertanyaan)
         if (i = 0)
         console.log('Pertanyaan:' + data[i].Pertanyaan)

        //rl.resume()
    }

    else {
        i++
        console.log('anda kurang beruntung! anda telah salah # kali, silahkan coba lagi'.replace('#', [i]));
        rl.resume()
    }
    rl.prompt();
}).on('close', () => {
    console.log('Hore anda menang!');
    process.exit(0);
});