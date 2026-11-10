'use strict';
// Engade un event listener ao botón con id "btnAccion" que mostre un alert ao facer click
const boton = document.getElementById('btnAccion');
function handler() {
  window.alert('Botón pulsado!!');
}

boton.addEventListener('click', handler);

// Cada vez que se fai click no botón "Alternar clase" fai que se engada/elimine a clase "resaltado" no div con id "mensaxe".

const botonAl = document.getElementById('btnAlternar');
const conten = document.getElementById('mensaxe');

function handler1() {
  conten.classList.toggle('resaltado');
}
botonAl.addEventListener('click', handler1);
// Mostra por consola o valor do input cando se pulse o botón "Enviar" do formulario. A continuación elimina o texto introducido no input

let caixaTexto = document.getElementById('entradaTexto');
const formulario = document.querySelector('form');
let btnEnviar = formulario.querySelector('button');
function handler2(event) {
  let texto = caixaTexto.value;
  event.preventDefault();

  console.log(texto);
  caixaTexto.value = '';
}
btnEnviar.addEventListener('click', handler2);
