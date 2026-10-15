// Exercício 8 - Pares e ímpares

const readline = require("readline-sync");

let inteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let pares = 0;
let impares = 0;

for (let i = 0; i < inteiros.length; i++) {
  if (inteiros[i] % 2 == 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("Pares: " + pares);
console.log("Ímpares: " + impares);