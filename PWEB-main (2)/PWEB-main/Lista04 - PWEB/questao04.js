const prompt = require('prompt-sync')();

let num1 = Number(prompt("Escolha um número "));
let num2 = Number(prompt("Escolha outro número "));
console.log("Escolha um dos operadores")
let operadores = prompt("(+, -, *, /, % ");
let resultado;

switch(operadores) {
    case "+":
        resultado = num1 + num2;
        console.log("A soma dos números é " + resultado);
        break;
    case "-":
        resultado = num1 - num2;
        console.log("A subtração dos números é " + resultado);
        break;
    case "*":
        resultado = num1 * num2;
        console.log("A multiplicação dos números é " + resultado);
        break;
    case "/":
        resultado = num1 / num2;
        console.log("A divisão dos números é " + resultado);
        break;
    case 5:
        operadores === "%"
        resultado = num1 % num2;
        console.log("O resto da divisão dos números é " + resultado);
        break;
    default:
        console.log("Operador inválido.")
        break;
}