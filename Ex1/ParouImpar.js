const prompt = require("prompt-sync")();

let numero1 = parseFloat(prompt('Digite o número desejado para a análise: '));

if(numero1 % 2 ===0){
    console.log("O número é par!");
}else{
    console.log("O número é ímpar!");
}
