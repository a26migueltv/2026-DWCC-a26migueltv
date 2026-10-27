'use strict';
// O número de ligazóns da páxina

const refs = document.querySelectorAll('a');
let x = 0;
for (const ref of refs) {
  x = x + 1;
}
console.log(x);
// Ou de unha forma máis fácil:
console.log(refs.length);

// A dirección da penúltima ligazón

const indicePenultimo = refs.length - 2;
console.log(refs[indicePenultimo].href);

// O número de ligazóns que apuntan a http:proba
const proba = document.querySelectorAll('a[href="http://proba"]');
console.log(proba.length);

// P número de ligazóns do terceiro parágrafo

const TerceiroP = document.getElementsByTagName('p')[2];
const ligTercP = TerceiroP.querySelectorAll('a');
console.log(ligTercP.length);

// Modifica os estilos das ligazóns a naranxa

for (const ref of refs) {
  ref.style.backgroundColor = 'orange';
}
