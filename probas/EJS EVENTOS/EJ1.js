'use strict';
function mostrarTexto() {
  let textoAdicional = document.getElementById('adicional');
  textoAdicional.classList.remove('oculto');

  let ligazon = document.getElementById('ligazon');
  ligazon.classList.add('oculto');
}
document.getElementById('ligazon').addEventListener('click', mostrarTexto);
