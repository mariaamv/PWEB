let aluno ={
    nome: "Maria",
    idade: 17,
    curso: "informatica",
    NotaFinal: 8
}; 

console.log("Nome:", aluno.nome);
console.log("Idade:", aluno.idade);
console.log("Curso:", aluno.curso);
console.log("Nota final:", aluno.NotaFinal);

if (aluno.NotaFinal >= 7){
    console.log ("Aluno Aprovado");
}
else {
    console.log("Aluno Reprovado");
}

