const preu = 10;
const quantitat = 3;
const iva = 21;

const base = preu * quantitat;
const totalIva = base * iva / 100;
const total = base + totalIva;

console.log(`${quantitat} entrades x ${preu} € = ${base} €`);
console.log(`Amb IVA: ${total} €`);