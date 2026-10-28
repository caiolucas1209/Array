const readline = require("readline-sync");
const produto = {

 nome: "banana",
 preco: 6,
 categoria: "frutas",
 estoque: "4 caixas",
 disponivel: true,
};
const existepreco = "preco" in produto;
const naoexistedesconto = "desconto" in produto;

console.log (produto)
console.log ("existe preço: " , existepreco)
console.log ("existe desconto: ", naoexistedesconto)