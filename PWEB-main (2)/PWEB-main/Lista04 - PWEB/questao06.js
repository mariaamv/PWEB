const prompt = require('prompt-sync')();

const nome = "Dexter Morgan"
const senha = "2006"

let nome_usuario = prompt("Digite o seu nome de usuário: ");
let senha_usuario = prompt("Digite a sua senha: ");

if (nome == nome_usuario && senha == senha_usuario) {
    console.log("Acesso permitido!")
}
 else {
    console.log("Acesso negado!")
}