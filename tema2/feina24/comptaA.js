const frase = llegeixText('Frase: ');
let numA = 0;
let i = 0;
while (frase[i] !== '.') {
if (frase[i] === 'a') {
numA++;
}
i++;
}
console.log(`f: ${numA}`);