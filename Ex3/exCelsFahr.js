const prompt = require("prompt-sync")();

let c = parseFloat(prompt('Digite a temperatura em graus Celsius para o cálculo em Fahrenheit: '));

let f = (c*9/5)+32;

console.log("A temperatura em Fahrenheit é "+f);