const { llegeixNumero } = require('./teclat.js');

let suma = 0;
let comptador = 0;

let num = llegeixNumero('Número (0 per acabar): ');

while (num !== 0) {
  suma = suma + num;
  comptador = comptador + 1;
  num = llegeixNumero('Número (0 per acabar): ');
}

if (comptador === 0) {
  console.log('No has escrit cap número.');
} else {
  const mitjana = suma / comptador;
  console.log(`Suma: ${suma}`);
  console.log(`Números: ${comptador}`);
  console.log(`Mitjana: ${mitjana}`);
}
