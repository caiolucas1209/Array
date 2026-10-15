// Exercício 11 - Alterando valores (dobro)

const readline = require("readline-sync");

let num = [1, 2, 3, 4, 5];

for (let i = 0; i < num.length; i++) {
  num[i] = num[i] * 2;
}

console.log("Array atualizado:", num);