'use strict';
// Exercicio 1

console.log('Ex 1');

let dia = 'lunes';
if (dia == 'sabado' || dia == 'domingo') {
  console.log(`${dia} non é laborable`);
} else {
  console.log(`${dia} é laborable`);
}
// Exemplo profe:
let diaSemana = 'luns';
let resultado;
diaSemana = diaSemana.toLowerCase();
switch (diaSemana) {
  case 'sábado':
  case 'domingo':
    resultado = `O ${diaSemana} non é laborable`;
    break;
  case 'luns':
  case 'martes':
  case 'mércores':
  case 'xoves':
  case 'venres':
    resultado = 'O ${diaSemana} é laborable';
  //   break;
  // case default = 'Valor introducido incorrecto'; Non me dou tempo a copialo
}

// Exercicio 2

console.log('Ex 2');
let n1 = 10;
let n2 = 7;
let n3 = 5;
let mayor = n1;
if (n2 > mayor) {
  mayor = n2;
}
if (n3 > mayor) {
  mayor = n3;
}

console.log(`El mayor es: ${mayor}`);

// Exercicio 3

console.log('Ex 3');

for (let i = 0; i <= 30; i += 2) {
  console.log(i);
}
// Exercicio 4
console.log('Ex 4');
for (let i4 = 0; i4 <= 20; i4++) {
  console.log(`2 elevado a ${i4} = ${2 ** i4}`);
}
//Exericicio 5
console.log('Ex 5');
const n = 0;
let factorial = 1;
for (let i5 = n; i5 > 1; i5--) {
  factorial *= i5;
}
console.log(`${n}! = ${factorial}`);

//Exericicio 6
console.log('Ex 6');
const peso1 = 80,
  altura1 = 1.78;
const peso2 = 65,
  altura2 = 1.7;

const imc1 = peso1 / altura1 ** 2;
const imc2 = peso2 / altura2 ** 2;

if (imc1 > imc2) {
  console.log(
    `O IMC (${imc1.toFixed(1)}) da primeira persoa é maior que o da segunda persoa (${imc2.toFixed(1)})!`,
  );
} else if (imc2 > imc1) {
  console.log(
    `O IMC (${imc2.toFixed(1)}) da segunda persoa é maior que o da primeira persoa (${imc1.toFixed(1)})!`,
  );
} else {
  console.log('Os dous IMC son iguais');
}
// Exercicio aparte da funcion:
function calculateDiscount(price, discountPercentage) {
  return price - (price * discountPercentage) / 100;
}
let originalPrice = 90;
let discount = 10;

let discountPrice = calculateDiscount(originalPrice, discount);
console.log(
  `prezo orixinal: ${originalPrice}€, Desconto: ${discount}%, Prezo con desconto: ${discountPrice}`,
);
