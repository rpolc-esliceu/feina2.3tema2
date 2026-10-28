const { llegeixText } = require('./teclat.js');
const frase = llegeixText('Frase acabada en punt: ');

let i = 0;
let trobat = false;
let vocalTrobada = '';
let posicioTrobada = -1;

while (frase[i] !== '.' && !trobat) {
    const c = frase[i];
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        trobat = true;
        vocalTrobada = c;
        posicioTrobada = i;
    }
    i++;
}

if (trobat) {
    console.log(`La primera vocal és la ${vocalTrobada}, a la posició ${posicioTrobada}`);
} else {
    console.log("No hi ha cap vocal");
}
