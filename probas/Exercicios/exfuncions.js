'use strict';
//Ejemplos de explicacións de funcións
const square = function (number) {
  return number * number;
};
//si a función flecha solo ten unha instrucción e é un return, pódese simplificar así:
const square2 = (number) => number * number;
//Outro ejemplo:
function nomeFuncion() {
  return { propiedade: 1 };
}
const nomefuncion2 = () => ({
  propiedade: 1,
}); // Para este hai que meterlle os corchetes porque é un objeto.

//Función autoinvocada:
const result = (function () {
  const name = 'Barry';
  return name;
})();
console.log(result); // 'Barry'

function map(funcion, array) {
  const result = [];
  for (const item of array) {
    result.push(funcion(item));
  }
  return result;
}
const numbers = [0, 1, 2, 5, 10];
let cadrados = map(square, numbers);
console.log(cadrados);

console.log('EJERCICIOS');
//Ejercicios
console.log('EJERCICIO 1');
//EJ1
const cubo = (numero) => numero * numero * numero;
console.log(cubo(3));
//EJ 2
console.log('EJERCICIO 2');

//EJ3
console.log('EJERCICIO 3');
// function suma2(...nums) {
//   let total = 0;
//   for (const num of nums) {
//     total += num;
//   }
//   return total;
// }
const suma2 = (...nums) => {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
};

console.log(suma2(1, 2, 3, 4, 5));
//EJ4
console.log('EJERCICIO 4');
const calcMedia = (...nums) => {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  total = total / nums.length;
  return total;
};
console.log(calcMedia(100, 0, 100, 0));
// EJ5
console.log('EJERCICIO 5');

const minMax = (arraynumeros) => {
  const minimo = Math.min(...arraynumeros);
  const maximo = Math.max(...arraynumeros);
  return { min: minimo, max: maximo };
};
console.log(minMax([1, 2, 3, 4, 5]));

// EJ6
console.log('EJERCICIO 6');
((lonxitude, ancho) => {
  const area = lonxitude * ancho;
  console.log(`El área del rectángulo es ${area}`);
})(5, 3);
//EJ7
console.log('EJERCICIO 7');
const validardni = (dni) => {
  const numero = dni.slice(0, 8);
  const letras = dni.slice(8, 9).toUpperCase();
  const texto = 'TRWAGMYFPDXBNJZSQVHLCKE';
  let resto = numero % 23;
  if (letras === texto[resto]) return true;
  else return false;
};
console.log(validardni('35643779n'));
//EJ8?

//EJ 9
