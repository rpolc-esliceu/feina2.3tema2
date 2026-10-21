const { llegeixText } = require('./teclat');

const contraseya="smx2026";

let intents=3;
let correcta=false;

while (intents > 0 && !correcta ){

    let contraseyaIntroduida=llegeixText("Introdueix contraseya: ");
    if(contraseya===contrasenyaIntroduida){
        correcta=true;
    }
    intents--;

}

if(correcta){
    console.log("la contraseya es correcta");
}else{
    console.log("has acabat els intens!!")
}