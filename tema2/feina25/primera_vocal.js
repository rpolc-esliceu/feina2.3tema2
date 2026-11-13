
const { llegeixText } = require('./teclat.js');

const frase = llegeixText('Frase acabada en punt: ');

let i = 0;
let trobat = false;

while (frase[i] !== '.' && trobat === false) {
    const c = frase[i];

    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        trobat = true;
    } else {
        i++;
    }
}

if (trobat) {
    console.log(`La primera vocal és la ${frase[i]}, a la posició ${i}`);
} else {
    console.log('No hi ha cap vocal');
}
