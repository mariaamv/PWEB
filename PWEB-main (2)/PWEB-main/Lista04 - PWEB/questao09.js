const prompt = require('prompt-sync')();

let cliente = prompt("Você é estudante, aposentado ou regular? ");

switch(cliente) {
    case "Estudante":
        console.log("Desconto 50% ");
        break;
    case "Aposentado":
        console.log("Desconto 30% ");
        break;
    case "Regular":
        console.log("Você não tem desconto!");
        break;
}