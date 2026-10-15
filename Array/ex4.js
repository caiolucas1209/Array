// Exercício 4 - Soma e média

const readline = require("readline-sync");

let notas = [5,8,8,7];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma = soma + notas[i];
}

let media = soma / notas.length;

console.log("Soma: " + soma);
console.log("Média: " + media);