SalarioPessoa = 5000;
Aliquota = 22.5;

if(SalarioPessoa == 2000);
console.log("Iseento");

if(SalarioPessoa >= 2001 && SalarioPessoa == 3500);
console.log("7.5% de imposto");

if(SalarioPessoa >= 3501 && SalarioPessoa == 5000 );
console.log("15% de imposto");

if(SalarioPessoa >= 5000);
console.log("22.5% de imposto");

let imposto = SalarioPessoa * Aliquota;

console.log(` Salario: ${SalarioPessoa} é o salario da pesssoa.`);
console.log(` Aliquota: ${Aliquota}%.`);
console.log(` Imposto: R$${imposto} a ser pago.`);
