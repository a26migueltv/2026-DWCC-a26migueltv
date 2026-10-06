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
// Ej 1a:
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
const [players1, players2] = players;
console.log(players1);
console.log(players2);
//EJ 1b
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//EJ 1c
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//EJ 1d
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(playersFinal);
//EJ 2
const variables = [
  'underscore_case',
  'first_name',
  'Some_Variable',
  'calculate_AGE',
  'delayed_departure',
];
for (const variable of variables) {
  const [first, second] = variable.toLowerCase().trim().split('_');
  const output = `${first}${second.replace(
    second[0],
    second[0].toUpperCase(),
  )}`;
  console.log(`${output}`);
}
//EJ 3
// const flightsInfo =
// "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio09433847
// 22;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_
// Departure; scq93766109; svq2323639855; 12: 30";

// function getCode(str) {
//   return satisfies.slice(0, 3).toUpperCase();

// }
// for (const flight of flightsInfo.split('+')) {
//   const [type, from, to, time] = flight.split(';')
//   const output = `${type.replaceAll("_", " ").trim() ${ getCode(from)
// } ${ getCode(to) } (${time.replace(':', 'h')})}} ESTA SIN ACABAR

//EJ OBJETOS
//EJ 2
const game = {
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1);
console.log(draw);
//EJ 3
const games = {
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};
// for (const [index, player] of game.scored.entries())
//   console.log(`Gol${index + 1}: ${player}`);
const scorers = {};
for (const xogador of games.scored) {
  console.log(scorers[xogador]);
  if (scorers[xogador]) {
    scorers[xogador]++;
  } else {
    scorers[xogador] = 1;
  }
}
//Copiado pero nn me sale igual
//
//
//EJ Maps-Set
//EJ 1
const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);
//a
// const set1 = new Set();
// for (const [key, value] of gameEvents) {
//   set1.add(value);
// }
// const eventos = [...set1]
// console.log(eventos);
// No siguiente fai o mismo pero en 1 paso (profesora)
const events = [...new Set(gameEvents.values())];
console.log(events);
//b
for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[PRIMEIRA PARTE]${key}-->${value}`);
  } else {
    console.log(`[SEGUNDA PARTE]${key}-->${value}`);
  }
}
//Outra forma de facelo, pola profe
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'PRIMEIRA' : 'SEGUNDA';
  console.log(`[${half} PARTE] ${min}: ${event}`);
}
