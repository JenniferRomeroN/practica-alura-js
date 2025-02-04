let estatura = parseInt(prompt('Introduzca su estatura en CM'));
let peso = parseInt(prompt('Introduzca su peso en KG'));

function calcularIMC(estatura, peso){
    let imc = peso / (estatura * estatura);
    alert(imc);
}

calcularIMC(estatura, peso);
