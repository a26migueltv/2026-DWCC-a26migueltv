'use strict';

const texto = document.getElementById('clicka');
const lista = document.getElementById('lista');

const claseUl = lista.classList;
claseUl.add('oculto');
let titleEle, = texto.querySelector('.title');

titleEle.addEventListener('click', function (){
    claseUl.toggle('oculto');
});