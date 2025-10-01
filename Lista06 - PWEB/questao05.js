let produto1 = {
    nome: "Creme",
    preco: 30,
    quantidadeEstoque: 50
}

let produto2 = {
    nome: "Esmalte",
    preco: 8,
    quantidadeEstoque: 100
}

let produto3 = {
    nome: "Cadeira",
    preco: 70,
    quantidadeEstoque: 200
}

let maisCaro = produto3;

if (produto1.preco > maisCaro.preco) {
  maisCaro = produto1;
}
if (produto2.preco > maisCaro.preco) {
  maisCaro = produto2;
}

let menorEstoque = produto1;

if (produto2.quantidadeEstoque < menorEstoque.quantidadeEstoque) {
  menorEstoque = produto2;
}
if (produto3.quantidadeEstoque < menorEstoque.quantidadeEstoque) {
  menorEstoque = produto3;
}

console.log("O produto mais caro é:", maisCaro.nome);
console.log("O produto de menor estoque é:", menorEstoque.nome);