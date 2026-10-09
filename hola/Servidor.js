const http = require('node:http');
const fs = require('node:fs');

const fitxers = {
  '/': ['index.html', 'text/html; charset=utf-8'],
  '/app.js': ['App.js', 'text/javascript; charset=utf-8']
};

const servidor = http.createServer((peticio, resposta) => {
  console.log('Petició rebuda: ', peticio.url);
  const fitxer = fitxers[peticio.url];
  if (!fitxer) {
    resposta.writeHead(404);
    resposta.end('No trobat');
    return;
  }
  resposta.writeHead(200, { 'Content-Type': fitxer[1] });
  resposta.end(fs.readFileSync(__dirname + '/' + fitxer[0]));
});

servidor.listen(3000, () => {
  console.log('Servidor escoltant al port 3000');
});
