let alugel = 1000;
let mercado = 2400;
let transporte = 200;
const salario = 5000;

let despesas = alugel + mercado + transporte;
let saldo = salario - despesas;

console.log("Despesas:", aluguel + ", " + mercado + ", " + transporte);
console.log("Salário do usuário:", salario);

if (saldo >= 0) {
  console.log("Saldo positivo:", saldo);
} 
else {
  console.log("Saldo negativo:", saldo);
}