// O número de ligazóns da páxina

const refs = document.querySelectorAll('a');
let x = 0;
for (const ref of refs) {
  x = x + 1;
}
console.log(x);
// O de una forma más fácil:
console.log(refs.length);

// A dirección da penúltima ligazón
