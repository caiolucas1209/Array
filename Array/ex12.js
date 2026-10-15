// Exercício 12 - remover um valor

const readline = require("readline-sync");
console.log("Exercicio 12 alterando valores");

let numeroParaRemocao= [5, 2, 3, 1, 0];

let posicaoRemocao = 0;

let numeroSemValor=[];

let destino = 0;

for (let i = 0; i < numeroParaRemocao.length; i++) {
    if(i!==posicaoRemocao){
        numeroSemValor[destino] = numeroParaRemocao [i];
        destino++;
    }
}

console.log ("Array Original =>" , numeroParaRemocao)
console.log ("Array com remoção =>" , numeroSemValor)