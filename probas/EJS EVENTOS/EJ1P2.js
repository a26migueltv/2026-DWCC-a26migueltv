'use strict';
let boton = document.getElementById('ocultar');

// Apartado 1, o de mostrar mensaxe ao entrar e ao saír do botón co ratón.
function handler2() {
  console.log('Saíches do botón');
}
function handler1() {
  console.log('Entraches no botón');
}

boton.addEventListener('mouseenter', handler1);
boton.addEventListener('mouseleave', handler2);

// Apartado 2, o botón fai desaparecer o div co id=texto
let divt = document.getElementById('texto');

function handler3() {
  divt.classList.toggle('oculto');
}

boton.addEventListener('click', handler3);
