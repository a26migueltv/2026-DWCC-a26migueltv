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
// keydown;

// KeyboardEvent.key;
// KeyboardEvent.code;

function handler4(event) {
  tecla = event.keyboardEvent.key;
  let añadir = document.createElement('p');
  añadir.textContent = tecla;
  div.appendChild(añadir);
}
areatexto.addEventListener('keydown', handler4);
// function handler() {
//   texto = campoTexto.value;
//   const li = document.createElement('li');
//   li.textContent = texto;
//   list.appendChild(li);
// }
// const textarea = document.getElementById('test-target');
// const consoleLog = document.getElementById('console-log');
// const btnReset = document.getElementById('btn-reset');

// function logMessage(message) {
//   consoleLog.innerText += `${message}\n`;
// }

// textarea.addEventListener('keydown', (e) => {
//   if (!e.repeat) {
//     logMessage(`Key "${e.key}" pressed [event: keydown]`);
//   } else {
//     logMessage(`Key "${e.key}" repeating [event: keydown]`);
//   }
// });

// textarea.addEventListener('beforeinput', (e) => {
//   logMessage(`Key "${e.data}" about to be input [event: beforeinput]`);
// });

// textarea.addEventListener('input', (e) => {
//   logMessage(`Key "${e.data}" input [event: input]`);
// });

// textarea.addEventListener('keyup', (e) => {
//   logMessage(`Key "${e.key}" released [event: keyup]`);
// });

// btnReset.addEventListener('click', (e) => {
//   let child = consoleLog.firstChild;
//   while (child) {
//     consoleLog.removeChild(child);
//     child = consoleLog.firstChild;
//   }
//   textarea.value = '';
// });
