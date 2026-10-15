// Exercício 5 - Maior valor

const readline = require("readline-sync");

let num = [14, 3, 100, 288, 536, 85];
let maior = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > maior) {
    maior = num[i];
  }
}

console.log("Maior valor: " + maior);