const readline = require("readline-sync");

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, categoria: "Eletrônicos", tags: ["trabalho", "estudo"] },
    { id: 2, nome: "Mouse", preco: 50, categoria: "Eletrônicos", tags: ["computador"] },
    { id: 3, nome: "Teclado", preco: 150, categoria: "Eletrônicos", tags: ["jogos"] },
    { id: 4, nome: "Camiseta", preco: 80, categoria: "Roupas", tags: ["moda"] },
    { id: 5, nome: "Celular", preco: 1800, categoria: "Eletrônicos", tags: ["comunicação"] }
];

let soma = 0;

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].categoria === "Eletrônicos") {
        console.log(produtos[i].nome);
    }

    if (produtos[i].preco <= 2000) {
        console.log("Até R$ 2000: " + produtos[i].nome);
    }

    soma = soma + produtos[i].preco;
}

for (let i = 0; i < produtos[0].tags.length; i++) {
    console.log(produtos[0].tags[i]);
}

console.log("Soma dos preços: R$ " + soma);