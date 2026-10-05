'use strict';
//Exercicios de Strings:
// Exercicio 1
const cadea = 'desenvolvemento web';
const novaCadeas = cadea.at(0).toUpperCase() + cadea.substring(1);
let novaCadea = cadea.slice(9, 1).toUpperCase() + cadea.slice(1); // O exemplo da profe
console.log(novaCadea);

//Exercicio 2

function reverseString(cadea) {
  return cadea.split('').reverse().join('');
}
console.log(reverseString('I am a String'));

//Exercicio 3

function enmascarar(numeros) {
  const ultimas4 = numeros.slice(-4);
  return ultimas4.padStart(numeros.length, '*');
}

console.log(enmascarar('1234123412347777'));

// const enmascararr = function (number) {
//   const str = number + '';
//   const mask = str.slice(-4);
//   return mask.padStart(str.length, '*');
// };
// console.log(enmascarar(1234123412347777)); // Exemplo da profe
// Math
// EJ previo
let numero = 535;
let numeroCifras = numero.toString().length;
console.log(`o número de cifras de ${numero} é ${numeroCifras}`);

//EJ 1
// a) Entero entre 0 y 3 (incluidos)
console.log(Math.floor(Math.random() * 4));

// b) Entero entre 1 y 3 (incluidos)
console.log(Math.floor(Math.random() * 3) + 1);

// c) Entero entre min y max (incluidos)
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numeroAleatorio(5, 10));
// EJ 2
function minutosAHoras(minutos) {
  const horas = Math.floor(minutos / 60);
  const resto = minutos % 60;
  return `${horas} horas e ${resto} minutos`;
}
console.log(minutosAHoras(135)); // 2 horas e 15 minutos
// EJ 3
function area(radio) {
  return Math.PI * Math.pow(radio, 2);
}

function perimetro(radio) {
  return 2 * Math.PI * radio;
}

console.log(area(5).toFixed(2)); // 78.54
console.log(perimetro(5).toFixed(2)); // 31.42
//DATE

// EJ 1
const dias = [
  'domingo',
  'luns',
  'martes',
  'mércores',
  'xoves',
  'venres',
  'sábado',
];
const data = new Date(new Date().getFullYear(), 6, 25); // xullo = 6
console.log(dias[data.getDay()]);
// EJ 2
function diasMes(mes, ano) {
  const fecha = Temporal.PlainYearMonth.from({ year: ano, month: mes });
  return fecha.daysInMonth;
}

console.log(diasMes(7, 2021));
// EJ 3
function esFinde(fecha) {
  const dia = Temporal.PlainDate.from(fecha).dayOfWeek;
  return dia === 6 || dia === 7;
}

console.log(esFinde('2021-07-03')); // true (sábado)

// EJ 4
function diasDesdeInicioAno(fecha) {
  return Temporal.PlainDate.from(fecha).dayOfYear - 1;
}

console.log(diasDesdeInicioAno('2021-07-25')); // 205

//EJS arrays
// EJ 1
const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];

function indices(elemento, arrayElementos) {
  const resultado = [];
  for (let i = 0; i < arrayElementos.length; i++) {
    if (arrayElementos[i] === elemento) {
      resultado.push(i);
    }
  }
  return resultado;
}

console.log(indices(1, numeros));
// EJ 2
const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas'];
console.log(froitas.join(', '));

froitas.splice(froitas.indexOf('mazás'), 1);
console.log(froitas.join(', '));

froitas.splice(froitas.indexOf('plátanos') + 1, 0, 'laranxas', 'sandía');
console.log(froitas.join(', '));

froitas.splice(froitas.indexOf('kiwis'), 1, 'cereixas', 'nésperas');
console.log(froitas.join(', '));
// EJ 3
function capitalizar(frase) {
  const palabras = frase.split(' ');
  for (let i = 0; i < palabras.length; i++) {
    const p = palabras[i];
    palabras[i] = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
  }
  return palabras.join(' ');
}

console.log(capitalizar('hOLA que TAL estás'));

// Otros Ejercicios (desestructuración de arrays)
// Ej 1:
const players = [
  [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
  ],
  [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
  ],
];
let [players1, players2] = players;
