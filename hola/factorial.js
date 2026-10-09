let total = Number(process.argv[2]);
for (let i = total-1; i >= 1; i-- ) {
    total = total * i;
}
console.log(total);