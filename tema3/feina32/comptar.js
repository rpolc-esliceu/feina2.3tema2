
function quantsMesGrans(llista, limit) {
    let comptador = 0;

    for (const x of llista) {
        if (x > limit) {
            comptador++;
        }
    }

    return comptador;
}

const numeros = [4, 8, 15, 16, 23, 42];

console.log(quantsMesGrans(numeros, 10));
console.log(quantsMesGrans(numeros, 50));
console.log(quantsMesGrans(numeros, 0));
