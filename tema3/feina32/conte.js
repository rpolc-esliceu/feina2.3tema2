
function conte(llista, valor) {
    for (const x of llista) {
        if (x === valor) {
            return true;
        }
    }

    return false;
}

const compra = ['pa', 'llet', 'ous'];

console.log(conte(compra, 'llet'));
console.log(conte(compra, 'cafè'));
console.log(conte([], 'pa'));
