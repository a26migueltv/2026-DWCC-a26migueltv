'use strict';
// Ejercicio 1:
//Acceder ao nodo <div>
const body = document.body;
const div = document.body.firstElementChild;
console.log(div);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]); //funciona co 1 porque é o segundo

//Acceder ao ul
const nodoUL = document.body.children[1];
const nodoUL2 = document.body.firstElementChild.nextElementSibling;
console.log(nodoUL, nodoUL2);

//Segundo li (diferentes formas de facelo)
console.log(document.body.children[1].lastElementchild);
console.log(document.body.childNodes[3].lastElementChild);
console.log(
  document.body.firstElementChild.nextElementSibling.lastElementChild,
);

// ejercicio 2
//(teoría)
