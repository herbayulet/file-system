const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   prompt: 'tulis kalimatmu disini > '
});

rl.prompt();

rl.on('line', (yangditulis) => {
   function stringManipulation(word) {
      if (word[0] === 'a' ||
         word[0] === 'i' ||   
         word[0] === 'u' ||
         word[0] === 'e' ||
         word[0] === 'o' ||
         word[0] === 'a') {
         return word;
      } else {
         a = word.substr(0, 1)
         // console.log(a);
         b = word.substr(1)
         //console.log(b);
         //console.log(`${b}${a}nyo`)
         var hasil = (b.concat(a[0]) + 'nyo')
         //hasil = hasil.join(' ')
         // console.log(hasil);
         return hasil
      }

   }

   function sentenceManipulation(sentence) {
      var a = sentence.split(" ")
      var b = []
      // console.log(a);
      for (let i = 0; i < a.length; i++) {
         //console.log(i);

         b.push(stringManipulation(a[i]))
      } return b.join(' ');

   }


   // sentenceManipulation(yangditulis.trim())
   console.log(`hasil konversi: ${sentenceManipulation(yangditulis.trim())}`);
   rl.prompt();
}).on('close', () => {
   console.log('Good bye!');
   process.exit(0);
});