const { llegeixNumero } = require('./teclat.js');

// Repte aconseguit: El número secret canvia a cada partida i és aleatori de l'1 al 100
const secret = Math.floor(Math.random() * 100) + 1;

let intents = 1;
let intent = llegeixNumero('Endevina el número (1-100): ');

while (intent !== secret) {
  if (intent < secret) {
    console.log('Més gran');
  } else {
    console.log('Més petit');
  }
  
  intent = llegeixNumero('Torna-hi: ');
  intents = intents + 1;
}

console.log(`Encertat en ${intents} intents!`);
