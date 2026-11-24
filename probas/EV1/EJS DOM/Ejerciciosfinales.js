'use strict';
// Ej 1

// el A: elemento.append(document.createTextNode(text)); y el C:elemento.textContent = text; porque el b:elemento.innerHTML = text; pone etiquetas html, para texto plano  se usan las otras 2

// EJ 2 Eliminar todos <li> da lista

const lis = document.querySelectorAll('li');
for (const li of lis) {
  li.remove();
}
// Outra forma

let lista = document.getElementById('lista');
let listaArray = Array.from(lista.children); //pasalo a array para poder eliminar ao no ser unha lista viva.

for (const elemento of lista) {
  elemento.remove();
}

//EJ 3 Porqué aparece o "Texto" despois de borrar a táboa?

// Porque o texto da tabla é HTML incorrecto, o navegador corrígeo ao construír o DOM, e saca ese texto fora da tabla, antes dela. Entonces acaba sendo un nodo irmán, en non o seu fillo, por eso o taboa.remove() non o borra.

//EJ 4

const ul = document.getElementById('lista');
const textos = ['Un', 'Dous', 'Tres', 'Catro'];
const items = textos.map((t) => {
  const li = document.createElement('li');
  li.append(t);
  return li;
});

ul.append(...items);

//EJ 5

const one = document.getElementById('one');
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// EJ 6

let arbore = {
  Fish: { trout: {}, salmon: {} },
  Tree: {
    Huge: { sequoias: {}, oak: {} },
    Flowering: { 'apple tree': {}, magnolias: {} },
  },
};

function createTree(data) {
  const ul = document.createElement('ul');
  for (const [nombre, hijos] of Object.entries(data)) {
    const li = document.createElement('li');
    li.append(nombre);
    if (Object.keys(hijos).length > 0) {
      li.append(createTree(hijos));
    }
    ul.append('li');
  }
  return ul;
}
document.body.append(createTree(arbore));

// EJ 9
let table = document.getElementById('taboaOrdenar');
let sortedRows = Array.from(table.tBodies[0].rows).sort((rowA, rowB) =>
  rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML),
);

//Ahora insertar nodos en el orden correcto con .append (...sortedRows);
table.tbodies[0].append(...sortedRows);

// EJ 10
function engadirNumeroElementos(lista) {
  for (const elemento of lista.children) {
    let listaInterna = elemento.querySelector('ul');
    if (listaInterna != null) {
      let numeroFillos = listaInterna.children.length;

      elemento.firstChild.textContext += '[' + numeroFillos + ']';
      engadirNumeroElementos(listaInterna);
    }
  }
}
let listaAnimais = document.querySelector('#listaAnimais');
engadirNumeroElementos(listaAnimais);
