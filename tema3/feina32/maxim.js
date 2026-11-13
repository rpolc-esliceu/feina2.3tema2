
function maxim(llista) {
    let mes = llista[0];

    for (const x of llista) {
        if (x > mes) {
            mes = x;
        }
    }

    return mes;
}

console.log(maxim([3, 9, 2]));
console.log(maxim([-5, -2, -8]));
console.log(maxim([7]));
