'use strict';

//1
// O innerHTML, innerText e textContent da etiqueta "Escolle sexo"
const etiquetaSexo = document.getElementsByTagName('form')[0].children[3];
console.log(etiquetaSexo.innerHTML);
console.log(etiquetaSexo.innerText);
console.log(etiquetaSexo.textContent);

// O valor do primeiro input de sexo
console.log(document.getElementsByName('sexo')[0].value);

//valor del sexo seleccionado
console.log(document.querySelector('input[name="sexo"]:checked').value);

// Texto de cada <li>
const lis = document.querySelectorAll('li');
for (const li of lis) {
  console.log(li.innerText);
}

// Cantos elemmentos li hai
const liss = document.querySelectorAll('li');
let x = 0;
for (const lii of liss) {
  x = x + 1;
}
console.log(x);
// O mejorado:
console.log(lis.length);

// Valor do atributo data-widget-name
const widget = document.querySelector('[data-widget-name]');
console.log(widget.dataset.widgetName);
