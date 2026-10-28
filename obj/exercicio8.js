const readline = require("readline-sync");

const alunos = [
    { nome: "Carlos", nota: 8, turma: "A" },
    { nome: "Maria", nota: 9, turma: "B" },
    { nome: "João", nota: 6, turma: "A" },
    { nome: "Ana", nota: 7, turma: "B" },
    { nome: "Pedro", nota: 5, turma: "A" },
    { nome: "Lucia", nota: 10, turma: "B" }
];

const turmaA = [];
const turmaB = [];
const aprovados = [];

let somaA = 0;
let somaB = 0;
let maiorNota = alunos[0];

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].turma === "A") {
        turmaA[turmaA.length] = alunos[i];
        somaA = somaA + alunos[i].nota;
    } else {
        turmaB[turmaB.length] = alunos[i];
        somaB = somaB + alunos[i].nota;
    }

    if (alunos[i].nota >= 7) {
        aprovados[aprovados.length] = alunos[i].nome;
    }

    if (alunos[i].nota > maiorNota.nota) {
        maiorNota = alunos[i];
    }
}

console.log("Turma A:", turmaA);
console.log("Turma B:", turmaB);
console.log("Média A:", somaA / turmaA.length);
console.log("Média B:", somaB / turmaB.length);
console.log("Aprovados:", aprovados);
console.log("Maior nota:", maiorNota.nome);