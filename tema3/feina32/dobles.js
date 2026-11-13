
const doble = (n) => n * 2;

function dobleDeTots(llista) {
    const resultat = [];

    for (const x of llista) {
        resultat.push(doble(x));
    }

    return resultat;
}

console.log(doble(21));
console.log(dobleDeTots([1, 2, 3]));
console.log(dobleDeTots([]));
