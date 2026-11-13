function preuAmbIva(preu) {
    return preu * 1.21;
}

const total = preuAmbIva(100);
console.log(total);