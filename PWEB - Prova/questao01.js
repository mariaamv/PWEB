function CalcularDelta (a, b, c) {
    let delta = (b * b) - 4 * a * c;
    return delta;
}

let a = 1;
let b = -5;
let c = 6;

let delta = CalcularDelta(a, b, c);
console.log(`O valor de delta é: ${delta}`);