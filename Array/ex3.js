// Exercício 3 - Contando os números maiores que 10

const readline = require("readline-sync");

let numeros = [4, 12, 25, 8, 10, 15];
let maioresQue10 = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    maioresQue10++;  }
  }
  console.log ("existem " +  maioresQue10 + "Números que são maior que dez no array");