const readline = require("readline-sync");

const endereco = {
    rua: "Rua das Flores",
    numero: 100,
    cidade: "São Paulo",
    cep: "00000-000"
};

const pessoa = {
    nome: "João",
    idade: 20,
    endereco: endereco
};

console.log("A pessoa mora na rua " + pessoa.endereco.rua + ", número " + pessoa.endereco.numero + ", cidade " + pessoa.endereco.cidade);