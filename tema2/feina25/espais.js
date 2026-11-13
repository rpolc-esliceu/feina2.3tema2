
const { llegeixText } = require('./teclat.js');

const frase = llegeixText('Frase acabada en punt: ');

let espais = 0;
let i = 0;

while (frase[i] !== '.') {
    if (frase[i] === ' ') {
        espais++;
    }
    i++;
}

console.log(`Espais: ${espais}`);
