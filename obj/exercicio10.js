const readline = require("readline-sync");

const livros = [
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, emprestado: false },
    { id: 2, titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890, emprestado: false },
    { id: 3, titulo: "Iracema", autor: "José de Alencar", ano: 1865, emprestado: false }
];

const usuarios = [
    { id: 1, nome: "João", email: "joao@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" }
];

for (let i = 0; i < livros.length; i++) {
    if (livros[i].emprestado === false) {
        console.log("Disponível: " + livros[i].titulo);
    }
}

let livroId = 1;
let usuarioId = 1;

for (let i = 0; i < livros.length; i++) {
    if (livros[i].id === livroId) {
        livros[i].emprestado = true;
    }
}

console.log("Usuário que pegou o livro:", usuarios[usuarioId - 1].nome);

for (let i = 0; i < livros.length; i++) {
    if (livros[i].emprestado === true) {
        console.log("Emprestado: " + livros[i].titulo);
    }
}

livroId = 1;

for (let i = 0; i < livros.length; i++) {
    if (livros[i].id === livroId) {
        livros[i].emprestado = false;
    }
}

for (let i = 0; i < livros.length; i++) {
    if (livros[i].autor === "Machado de Assis") {
        console.log("Livro do autor: " + livros[i].titulo);
    }
}