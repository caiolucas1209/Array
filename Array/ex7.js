// Exercício 7 - Procurando um nome

const readline = require("readline-sync");

let nomes = ["Lucas", "Giovanna", "Thalita", "Tawanny", "Giulia"];
let procurado = "Giulia";
let encontrado = false;

for (let i = 0; i < nomes.length; i++) {

  if (nomes[i] === procurado) {
    encontrado = true;
  }
}

if (encontrado) {
  console.log(procurado + " está no array.");
} else {
  console.log(procurado + " não está no array.");
}