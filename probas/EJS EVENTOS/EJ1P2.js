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

// Apartado 3, cando se escribe: a info da tecla sale no div e tamén o código da tecla pulsada. Ademáis si o div estaba oculto debe mostrarse.
let tecla = '';
let codTecla = '';
let areatexto = document.getElementById('textoExercicio1');
let div = document.getElementById('div');

areatexto.addEventListener('keyup', (evento) => {
  div.classList.remove('oculto');

  div.innerText = `Tecla pulsada: ${evento.key}. Código: ${evento.code}`;
});
// Falta algo, nn está ben de todo
