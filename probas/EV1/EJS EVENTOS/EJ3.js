'use strict';
const button = document.getElementById('bot');
button.addEventListener('click', () => console.log('1'));
button.removeEventListener('click', () => console.log('1'));
button.onclick = () => console.log(2);

//Execútanse o primeiro e o terceiro
