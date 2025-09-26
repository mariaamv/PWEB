const prompt = require('prompt-sync')();
const nota = prompt("Digite a sua nota: ");

const status = nota >= 7 ? "Aprovado": "Reprovado"; 
console.log(status);