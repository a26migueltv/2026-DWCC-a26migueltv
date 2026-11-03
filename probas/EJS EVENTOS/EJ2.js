'use strict';

const boton = document.getElementById('boton');
let campoTexto = document.getElementById('example');
const list = document.querySelector('ul');
let texto = '';
function handler() {
  texto = campoTexto.value;
  const li = document.createElement('li');
  li.textContent = texto;
  list.appendChild(li);
  texto = '';
}

boton.addEventListener('click', handler);
