const { llegeixNumero } = require('./teclat.js');

const minutsTotals = llegeixNumero('Minuts: ');

const hores = Math.floor(minutsTotals / 60);
const minutsSobrants = minutsTotals % 60;

console.log(`${minutsTotals} minuts són ${hores} h i ${minutsSobrants} min`);
