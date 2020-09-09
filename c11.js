const fs = require('fs')
const manggil = fs.readFileSync('data.JSON', 'utf8')
const data = JSON.parse(manggil)
let i = 0
console.log(data);
const readline = require('readline');
console.log('Selamat datang di permainan tebak kata, silahkan isi dengan jawaban yang benar ya!');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: '
    // console.log('Selamat datang di permainan tebak kata, silahkan isi dengan jawaban yang benar ya!');
});
//console.log('Pertanyaan:' + data[i].Pertanyaan);
// //rl.setPrompt('Tebakan:')
// rl.prompt();
// rl.on('line', (yangdiketik) => {
//     if (yangdiketik == data[i].Jawaban) {
//         i++
//         console.log('Selamat anda benar!');
//         if (i == data.length) {
//             rl.close()
//         } console.log('Pertanyaan:' + data[i].Pertanyaan)

//     } else {
//         console.log('wkwkwk anda kurang beruntung!');
//     }
//     rl.prompt();
// }).on('close', () => {
//     console.log('Hore anda menang!');
//     process.exit(0);
// });
// //console.log(data);
// const readline = require('readline');
// console.log('Selamat datang di permainan tebak kata, silahkan isi dengan jawaban yang benar ya!');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: 'Pertanyaan: '
//     // console.log('Selamat datang di permainan tebak kata, silahkan isi dengan jawaban yang benar ya!');
// });
// rl.prompt();
// rl.on('line', (yangdiketik) => {
//     switch (yangdiketik.trim()) {
//         case data:
//             console.log(`Tebakan: ${(data.value)}`);
//             // rl.setPrompt('Tebakan:')
//             break;

//         default:
//             console.log('wkwkwk, anda kurang beruntung');
//             break;
//     }
//     // if (key == value) {
//     //     console.log(obj.value);
//     //     //  break;
//     //     //  default:
//     //     else {
//     //         console.log('wkwkwk, anda kurang beruntung');
//     //     }

//     //     //break;
//     // }
//     // console.log(`Tebakan: ${obj.value(yangdiketik.trim())}`);
//     rl.prompt();
// }).on('close', () => {
//     console.log('Hore anda menang!');
//     process.exit(0);
// });