const { convertProcessSignalToExitCode } = require('node:util');
const { llegeixText, llegeixNumero } = require('./teclat.js');

let x = llegeixNumero(">");
let suma=x;
let quants=0;
let maxim=x;
let minim=x;
while(x!==0){
    quants++;
    x=llegeixNumero(">");
    if(x>maxim){
        maxim=x
    }
     if(x<minim && x!==0){
        minim=x
    }
    suma=suma+x;
}
console.log(`la suma val ${suma}`)
console.log(`has introduit ${quants} números`)
console.log(`el màxim es ${maxim}`)
console.log(`el minim es ${minim}`)