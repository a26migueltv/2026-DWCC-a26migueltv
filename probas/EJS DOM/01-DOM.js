'use strict';
// Á tabla co id = "age-table"

console.log(document.getElementById('age-table'));

// Todos os elementos label dentro da táboa (3)
const tabla = document.getElementById('age-table'); // Aquí declaro la tabla para cuando me pidan cosas de dentro de ella
const cells = tabla.getElementsByTagName('label');
console.log(cells);

// O primeiro td da tabla
const td = tabla.querySelector('td');
console.log(td);

// O formulario con name "search"

console.log(document.getElementsByName('search'));
// O da prfe:
const formulario = document.querySelector("form[name='search']");
console.log(formulario);

//Primeiro input do for anterior

let input = document.querySelector("form[name='search'] input");
console.log(input);

//Último input do apartado anterior

let inputs = formulario.getElementsByTagName('input');
console.log(inputs);
console.log(inputs[inputs.length - 1]);
