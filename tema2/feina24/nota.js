const { llegeixNumero } = require('./teclat.js');

const nota = llegeixNumero('Introdueix la nota: ');

if (nota < 0 || nota > 10) {
  console.log('Nota no vàlida');
} else if (nota < 5) {
  console.log('Insuficient');
} else if (nota < 6) {
  console.log('Suficient');
} else if (nota < 7) {
  console.log('Bé');
} else if (nota < 9) {
  console.log('Notable');
} else {
  console.log('Excel·lent');
}
