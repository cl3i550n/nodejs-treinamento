const calculadora = require('./01-Exercicio/calculadora');

console.log(calculadora);

console.log("Somar");
console.log(calculadora.somar(2, 3));
console.log(calculadora.somarArray(2, 3, 5, 8));
console.log("Subtrair");
console.log(calculadora.subtrair(2, 3));
console.log(calculadora.subtrairArray(5, 8, 20, 85));
console.log("Multiplicar");
console.log(calculadora.multiplicar(9, 9));
console.log(calculadora.multiplicarArray(80, 60, 20, 85));
console.log("Dividir");
console.log(calculadora.dividir(16, 2));
console.log(calculadora.dividirArray(8, 6, 15, 5));


