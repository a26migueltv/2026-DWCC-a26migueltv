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
console.log('EJERCICIO 8');
//EJ 9
console.log('EJERCICIO 9');
function buscarPatron2(texto, patron) {
  let indiceTexto;
  // Contador de cantos encontramos
  let encontrados = 0;
  let textoMaiusculas = texto.toUpperCase();
  let patronMaiusculas = patron.toUpperCase();

  for (indiceTexto = 0; indiceTexto < textoMaiusculas.length; indiceTexto++) {
    let numeroCoincidencias = 0;
    for (let indicePatron = 0; indicePatron < patron.length; indicePatron++) {
      if (texto[indiceTexto + indicePatron] == patron[indicePatron])
        numeroCoincidencias++;
    }
    if (numeroCoincidencias === patron.length) {
      // Encontrada coincidencia
      enconctados++;
    }
  }
  return encontrados;
}
console.log(`“000111101000ABCHA”, “00”`);
// //EJ 10
// console.log('EJERCICIO 10');
// const inicioXornada = '7:30';
// const finalXornada = '17:45';

// function axendarReunion(horaInicioReunionString, duracionEnMinutos) {
//   let [horaInicioReunion, minutoInicioReunion] =
//     horaInicioReunionString.split(':');
//   let [horaInicioXornada, minutoInicioXornada] = inicioXornada.split(':');
//   let [horaFinXornada, minutoFinXornada] = finalXornada.split(':');

//   let inicioXornadaEnMinutos =
//     Number(horaInicioXornada) * 60 + Number(minutoInicioXornada);
//   let finXornadaEnMinutos =
//     Number(horaFinXornada) * 60 + Number(minutoFinXornada);
//   let finReunionEnMinutos = inicioReunionEnMinutos + duracionEnMinutos;

//   if (inicioReunionEnMinutos < inicioXornadaEnMinutos) return false;
//   else if (finXornadaEnMinutos < finReunionEnMinutos) return false;
//   else return true;
// }

// console.assert(
//   axendarReunion('7:00', 15) == false,
//   'Fallo comprobando axendarReunion ("7:00", 15) == false ',
// );
// console.assert(
//   axendarReunion('7:00', 30) == false,
//   'Fallo comprobando axendarReunion ("7:00", 15) == false ',
// );
// // EJ 11
// console.log('EJERCICIO 11');
// tableiro = [
//   [-1, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, -1, 0, 0],
//   [0, 0, 0, 0],
// ];
// function calcularMinasAdxacentes(tableiro, x, y) {
//   let minasEncontradas = 0;
//   //Norte
//   if (x > 0) {
//     if (tableiro[x - 1][y] === -1) {
//       minasEncontradas++;
//     }
//   }

//   //Sur
//   if (x < tableiro.length - 1) {
//     if (tableiro[x + 1][y] === -1) {
//       minasEncontradas++;
//     }
//   }

//   //Este
//   if (y < tableiro[x].length - 1) {
//   } // Falta acabar a funcion
//   function buscaminas(tableiro) {
//     minas = [];
//     minas2 = [];

//     for (i = 0; i < tableiro.length; i++) {
//       mins[i] = [];
//       mina2[i] = [];

//       for (j = 0; i < tableiro[i].length; j++) {
//         if (tableiro[i][j] === -1) {
//           minas[i][j] = -1;
//           minas2[i][j] = -1;
//         } else {
//           minas[i][j] = calcularMinasAdxacentes(tableiro, i, j);
//           minas[i][j] = calcularMinasAdxacentes2(tableiro, i, j);
//         }
//       }
//     }

//     console.log(minas);
//     console.log(minas2);
//     return minas;
//   }
//   buscainas(tableiro);
// }
// // SOLUCION 2
// function calcularMinasAdxacentes2(tableiro, x, y) {
//   let minasEncontradas = 0;
//   for (let i = -1; i <= 1; i++) {
//     for (let j = -1; j <= 1; j++) {
//       if (tableiro[x + 1]?.[y + j] === -1) minasEncontradas++;
//     }
//   }
//   return minasEncontradas;
// }
// Ejercicios de outros métodos interativos
// EJ 1
console.log('Ejercicio 1');
const persoas = [
  { nome: 'aaron', idade: 65, id: 1 },
  { nome: 'beth', idade: 2, id: 2 },
  { nome: 'ánxeles', idade: 13, id: 3 },
  { nome: 'daniel', idade: 3, id: 4 },
  { nome: 'ada', idade: 25, id: 5 },
  { nome: 'erea', idade: 1, id: 6 },
  { nome: 'navia', idade: 43, id: 7 },
];

//A
console.log('Apartado A');
const persoasMaioresDeIdade = persoas.filter(function (edad) {
  return edad.idade > 18;
});
console.log(persoasMaioresDeIdade);
// B
console.log('Apartado B');
const nomes = persoas.map(function (persoa) {
  return persoa.nome;
  //Ca función flecha mellor
});
console.log(nomes);
// C
console.log('Apartado C');

const nomesMaioresMaiusculas = persoasMaioresDeIdade.map(function (persoa) {
  return persoa.nome.toUpperCase();
});
console.log(nomesMaioresMaiusculas);
// D
console.log('Apartado D');
const idENome = persoas.map(function (persoa) {
  return { id: personalbar.id, nome: persoa.nome };
});
console.log(idENome);

// EJ 2
console.log('Ejercicio 2');
const dias = [
  'luns',
  'martes',
  'mercores',
  'xoves',
  'venres',
  'sábado',
  'domingo',
];
// A
console.log('Apartado A');
const diasConM = dias.filter(function (dia) {
  return dia.startsWith('m');
});
console.log(diasConM);
// B
console.log('Apartado B');
const algunConS = dias.some(function (dia) {
  return dia.startsWith('s');
});
if (algunConS) {
  console.log('algún día comeza por s');
} else {
  console.log('Ningúm día comeza por s');
}
// C
console.log('Apartado C');
const acabanConS = dias.every(function (dia) {
  return dia.endsWith('s');
});
if (acabanConS) {
  console.log('Todos os días acaban por S');
} else {
  console.log('Ningúm día acaba por s');
}
// D
console.log('Apartado D');
const comezaPorM = dias.find(function (dia) {
  return dia.toLowerCase().startsWith('m');
});
console.log(comezaPorM);
// E
console.log('Apartado E');
const indiceComezaPorM = dias.findIndex(function (dia) {
  return dia.toLowerCase().startsWith('m');
});
console.log(indiceComezaPorM);
// F
console.log('Apartado F');
const todoMaiusculas = dias.map(function (dia) {
  return dia.toUpperCase();
});
console.log(todoMaiusculas);
// EJS REDUCE
console.log('Ejs REDUCE');
//ejercicio 1
console.log('EJERCICIO 1');
const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];
const sumaPrecios = objects.reduce(function (acumulador, obxecto) {
  return acumulador + obxecto.price;
}, 0);
console.log(sumaPrecios);

// Ejercicio 2
// const numeros = [7, 3, 12, -4, 9, 0];
// const minimo = numeros.reduce(function (minimo, numero) {
//   if (numero < minimo) {
//     return numero;
//   }
//   return minimoM;
// });
// console.log(minimo);
// EJS PROGRAMACIÓN FUNCIONAL
//EJERCICIO 1
console.log('EJERCICIO 1');
const array = [4, 8, 3, 10, 5];
function compareNumbers(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}
const arrayOrdenado = array.sort(compareNumbers);
console.log(arrayOrdenado);
//Solucion profe

function ordenarArray(notas) {
  return notas.sort((a, b) => a - b);
}
const notas = [4, 8, 3, 10, 5];
console.log(`Notas ordenadas = [${ordenarArray(notas).join(', ')}]`);
// EJERCICIO 2
console.log('EJERCICIO 2');
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
// está mal creo

//EJERCICIO 3
console.log('EJERCICIO 3');
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

// A - século XVI (1501-1600)
const seculoXVI = inventors.filter(function (inventor) {
  return inventor.year >= 1501 && inventor.year <= 1600;
});
console.log(seculoXVI);

// B
const nomesCompletos = inventors.map(function (inventor) {
  return inventor.first + ' ' + inventor.last;
});
console.log(nomesCompletos);

// C - split(' ') separa "Albert Einstein" en ['Albert', 'Einstein']
nomesCompletos.sort(function (a, b) {
  const apelidoA = a.split(' ')[1];
  const apelidoB = b.split(' ')[1];
  return apelidoA.localeCompare(apelidoB); // compara textos alfabeticamente
});
console.log(nomesCompletos);
// No examen caen exercicios destes
// D
inventors.sort(function (a, b) {
  return a.last.localeCompare(b.last);
});
console.log(inventors);

// E
inventors.sort(function (a, b) {
  return a.year - b.year;
});
console.log(inventors);

// F
const sumaAnos = inventors.reduce(function (total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(sumaAnos); // 861

// G - b menos a para que vaia de maior a menor
inventors.sort(function (a, b) {
  const anosA = a.passed - a.year;
  const anosB = b.passed - b.year;
  return anosB - anosA;
});
console.log(inventors);

//EJERCICIO 4
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'pogostick',
];

// O acumulador empeza sendo un obxecto baleiro {}
const transportes = data.reduce(function (contador, transporte) {
  if (contador[transporte]) {
    contador[transporte]++; // xa existía: sumamos 1
  } else {
    contador[transporte] = 1; // primeira vez que aparece
  }
  return contador;
}, {});
console.log(transportes);
//O DA PROFE:
// const transportes = data.reduce((contador, transporte) => {
//   contador[transporte] ? cotador[transporte]++ : (contador[transporte] = 1);
//   return contador;
// }, {});
// console.log(transportes);
// { car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1 }
