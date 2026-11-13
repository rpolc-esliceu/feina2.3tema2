
function suma(llista) {
    let total = 0;

    for (const x of llista) {
        total = total + x;
    }

    return total;
}

function mostra(text) {
    console.log(`>> ${text}`);
}

const a = suma([1, 2, 3]);
const b = suma([]);
const c = mostra('hola');

console.log(a, b, c);
console.log(suma([10, 20]) * 2);
