// Exercício 10 - Invertendo a ordem

const readline = require("readline-sync");

let normal = [1, 2, 3, 4, 5];
let invertido = [];

for (let i = 0; i < normal.length; i++) {
  invertido[i] = normal[normal.length - 1 - i];
}

console.log("Normal:", normal);
console.log("Invertido:", invertido);