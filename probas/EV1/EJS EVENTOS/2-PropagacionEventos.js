'use strict';
// Ao pulsar X elimínase a mensaxe correspondente

const container = document.getElementById('container');

function handler1(event) {
  if (event.target.classList.contains('remove-button')) {
    event.target.closest('.pane').remove();
    //tamén valería event.target.parentElement.remove() (porque o botón é fillo do .pane)
  }
}

container.addEventListener('click', handler1);
