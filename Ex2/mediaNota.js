const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt('Digite a primeira nota para o cálculo da média: '));
let num2 = parseFloat(prompt('Digite o segunda nota para o cálculo da média: '));
let num3 = parseFloat(prompt('Digite o terceira nota para o cálculo da média: '));

function media(nu1, nu2, nu3){
    let s = nu1 + nu2 + nu3;
    return s / 3;
}
nota = media(num1, num2, num3);

console.log("A média das notas é "+nota);

if(nota >=6){
    console.log(`Aprovado!`)
}else if(nota >=4){
    console.log(`Recuperação!`)
}else{
    console.log(`Reprovado!`)
}