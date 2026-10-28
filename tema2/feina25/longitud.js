const { llegeixText } = require('./teclat.js');
const frase = llegeixText('Frase acabada en punt: ');

let i = 0;
while (frase[i] !== '.') {
    i++;
}

console.log(`Abans del punt hi ha ${i} caràcters`);
