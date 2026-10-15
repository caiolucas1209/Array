// Exercício 6 - Menor valor

const readline = require("readline-sync");

let num = [42, 17, 5, 31, 66, 9];
let menor = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] < menor) {
    menor = num[i];
  }
}

console.log("Menor valor: " + menor);