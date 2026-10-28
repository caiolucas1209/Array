const readline = require("readline-sync");

const carrinho = [
    { produto: "Mouse", quantidade: 2, precoUnitario: 50 },
    { produto: "Teclado", quantidade: 1, precoUnitario: 150 },
    { produto: "Fone", quantidade: 2, precoUnitario: 80 }
];

let total = 0;

for (let i = 0; i < carrinho.length; i++) {
    let subtotal = carrinho[i].quantidade * carrinho[i].precoUnitario;
    console.log("Produto: " + carrinho[i].produto + " | Qtd: " + carrinho[i].quantidade + " | Preço unit: R$ " + carrinho[i].precoUnitario + " | Subtotal: R$ " + subtotal);
    total = total + subtotal;
}

console.log("Total: R$ " + total);
console.log("Com desconto: R$ " + (total * 0.9));

const novoCarrinho = [];

for (let i = 0; i < carrinho.length; i++) {
    if (i !== 1) {
        novoCarrinho[novoCarrinho.length] = carrinho[i];
    }
}

let novoTotal = 0;

for (let i = 0; i < novoCarrinho.length; i++) {
    novoTotal = novoTotal + novoCarrinho[i].quantidade * novoCarrinho[i].precoUnitario;
}

console.log("Carrinho atualizado:", novoCarrinho);

console.log("Novo total: R$ " + novoTotal);