'use strict';
// Ej 1
// el A: elemento.append(document.createTextNode(text)); y el C:elemento.textContent = text; porque el b:elemento.innerHTML = text; pone etiquetas html, para texto plan se usan las otras 2

// EJ 2 Eliminar todos <li> da lista

const lis = document.querySelectorAll('li');
for (const li of lis) {
  li.remove();
}

//EJ 3 Porqué aparece o "Texto" despois de borrar a táboa?
