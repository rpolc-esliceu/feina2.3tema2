const { llegeixText } = require('./teclat.js');
const frase = llegeixText('Frase acabada en punt: ');

let vocals = 0;
let i = 0;

while (frase[i] !== '.') {
    const c = frase[i];
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        vocals++;
    }
    i++;
}

console.log(`Vocals: ${vocals}`);
