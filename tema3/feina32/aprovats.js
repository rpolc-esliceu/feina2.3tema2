
function aprovats(notes) {
    const bones = [];

    for (const x of notes) {
        if (x >= 5) {
            bones.push(x);
        }
    }

    return bones;
}

const notes = [7, 3.5, 9, 4, 5];

console.log(aprovats(notes));
console.log(notes);
console.log(aprovats([1, 2]));
