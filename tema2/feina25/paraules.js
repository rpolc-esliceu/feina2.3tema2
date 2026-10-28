const { llegeixText } = require('./teclat.js');
const frase = llegeixText('Frase acabada en punt: ');

let paraules = 0;
let i = 0;
let anterior = ' '; 

while (frase[i] !== '.') {
    const actual = frase[i];
    
    if (anterior === ' ' && actual !== ' ') {
        paraules++;
    }
    
    anterior = actual;
    i++;
}

console.log(`Paraules: ${paraules}`);
