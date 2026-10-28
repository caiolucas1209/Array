const readline = require("readline-sync");

const tarefas = [
    { id: 1, descricao: "Estudar", concluida: true, prioridade: "alta" },
    { id: 2, descricao: "Limpar", concluida: false, prioridade: "baixa" },
    { id: 3, descricao: "Trabalhar", concluida: true, prioridade: "alta" },
    { id: 4, descricao: "Ler", concluida: false, prioridade: "media" },
    { id: 5, descricao: "Treinar", concluida: false, prioridade: "alta" }
];

let pendentes = 0;

for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].concluida === true) {
        console.log("Concluída: " + tarefas[i].descricao);
    }

    if (tarefas[i].prioridade === "alta") {
        console.log("Prioridade alta: " + tarefas[i].descricao);
    }

    if (tarefas[i].concluida === false) {
        pendentes++;
    }
}

console.log("Tarefas pendentes: " + pendentes);