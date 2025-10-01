let Num1 = 15;
let Num2 = 4;
let Num3 = 10;

let maior = Num1;
let menor = Num2;

if (Num2 > maior) {
    maior = Num2;
}

if (Num3 > maior) {
    maior = Num3
}

if (Num2 < menor) {
    menor = Num2;
}

if(Num3 < menor) {
    menor = Num3;
}

console.log("O maior número é:" , maior);
console.log("O menor número é:" , menor);