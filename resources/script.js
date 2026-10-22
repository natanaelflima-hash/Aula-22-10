// function soma(a,b ){
//     return a + b;
// }

// function subtrair(a, b){
//     return a - b
// }

// function multiplicar (a, b){
//     return a * b;
// }

// function dividir(a, b){
//     return a / b;
// }

// function validar(a,b){
//     if(isNaN(a) || isNaN(b)) {
//         alert("Erro! Digite apenas números válidos.");
//         return false;
//     }
//     return true;
// }



// let ask = Number(prompt("Digite um número para somar"))
// let ask2 = Number(prompt("Digite um número para somar"))

// if (validar(ask,ask2)) {
//     alert("Resultado da soma: " + soma(ask,ask2))
// }

// let ask3 = Number(prompt("Digite um número para subtrair"))
// let ask4 = Number(prompt("Digite um número para subtrair"))

// if (validar(ask3,ask4)) {
//     alert("Resultado da subtração: " + subtração(ask3,ask4))
// }

// let ask5 = Number(prompt("Digite um número para multiplicar"))
// let ask6 = Number(prompt("Digite um número para multiplicar"))

// if (validar(ask5,ask6)) {
//     alert("Resultado da multiplicação: " + multiplicação(ask5,ask6))
// }
// let ask7 = Number(prompt("Digite um número para dividir"))
// let ask8 = Number(prompt("Digite um número para dividir"))

function media(a,b,c){
    return(a+b+c) / 3
}
function passou(a,b,c){
    if(isNaN(nota)){
        alert("Erro! Digite notas válidas.");
       return;
    }
    if(nota >= 7){
        alert("aprovado!");
    } else if (nota >=5) {
        alert("recuperação")
    } else {
        alert("reprovado");
    }
}

function validacao(nota) {
    if (nota < 0 || nota > 10) { 
        alert("Erro! A nota deve estar entre 0 e 10.");
        return false;
    }

    return true;
}

let ask = Number(prompt("Digite sua primeira nota:"));
let ask2 = Number(prompt("Digite sua segunda nota:"));
let ask3 = Number(prompt("Digite sua terceira nota:"));

if ((isNaN(ask)) || isNaN(ask2) || isNaN(ask3)) {
    alert("Erro! Digite apenas números válidos.");
} else if(
    !validacao(ask) ||
    !validacao(ask2) ||
    !validacao(ask3)

){



} else {
    let resultado = media(ask,ask2,ask3);

    alert("Sua média é: " + resultado.toFixed(2));

    passou(resultado);
 }

    
    
