
function suma(llista) {
    let total = 0;

    for (const x of llista) {
        total = total + x;
    }

    return total;
}

function mitjana(llista) {
    if (llista.length === 0) {
        return 0;
    }

    return suma(llista) / llista.length;
}

console.log(mitjana([7, 4.5, 9, 6]));
console.log(mitjana([10]));
console.log(mitjana([]));
