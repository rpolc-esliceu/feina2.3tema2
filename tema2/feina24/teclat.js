// teclat.js · Llegir del teclat amb Node, sense async ni npm.
// Introducció a la programació · 2n SMX
//
// Copia aquest fitxer a la carpeta del teu programa i, a dalt de tot del programa:
//   const { llegeixText, llegeixNumero } = require('./teclat.js');
//
//   const nom = llegeixText('Com et dius? ');      // torna un text
//   const edat = llegeixNumero('Quants anys tens? ');  // torna un número
//
// No cal que entenguis com funciona per dins: fes-lo servir com fas servir console.log.

const fs = require('node:fs');

// Llegeix una línia sencera, fins a l'Enter, i la torna sense l'Enter.
// Si ja no queda res per llegir (Ctrl+D), atura el programa.
function llegeixLinia() {
  const bytes = [];
  const un = Buffer.alloc(1);
  while (true) {
    let llegits;
    try {
      llegits = fs.readSync(0, un, 0, 1, null);
    } catch (e) {
      if (e.code === 'EAGAIN') continue;
      if (e.code !== 'EOF') throw e;
      llegits = 0;
    }
    if (llegits === 0) {                // ja no hi ha res més per llegir
      if (bytes.length === 0) {
        console.log("\n(No hi ha res més per llegir: el programa s'atura.)");
        process.exit(1);
      }
      break;
    }
    if (un[0] === 10) break;            // Enter
    if (un[0] !== 13) bytes.push(un[0]);
  }
  return Buffer.from(bytes).toString('utf8');
}

// Escriu la pregunta i torna el que escriu l'usuari, com a text.
function llegeixText(pregunta = '') {
  fs.writeSync(1, pregunta);
  return llegeixLinia();
}

// Escriu la pregunta i torna un número. Si no és un número, la torna a fer.
function llegeixNumero(pregunta = '') {
  while (true) {
    const text = llegeixText(pregunta).trim();
    const n = Number(text);
    if (text !== '' && !Number.isNaN(n)) {
      return n;
    }
    console.log('Això no és un número. Torna-ho a provar.');
  }
}

module.exports = { llegeixText, llegeixNumero };
