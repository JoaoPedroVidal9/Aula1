const prompt = require("prompt-sync")();

let tam = parseFloat(prompt('Digite o tamanho da lista: '));

let lista = [];
if(tam >= 0 && !isNaN(tam)){
    for(let i=0; i<tam; i++){
        lista.push(parseFloat(prompt('Digite um integrante da lista: ')));
    }
    
    console.log("Sua lista: " +lista+".");
}else{
    console.log("Digite um número válido.");
}
