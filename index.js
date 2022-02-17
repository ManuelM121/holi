'use strict';
let votonSi = window.document.getElementById('yes');
let votonNo = window.document.getElementById('no');

let partner = prompt('🥰 Pon tu nombre');
document.querySelector('.contenedor__titulo').innerHTML += partner + ' ❤';

const zomosNobios = () => {
  // alert('💞Now zomos ParTnEr ' + ${partner} + '💞');
  alert(`💞 SABÍA QUE DIRÍAS QUE SÍ, ${partner} 😱`);
  alert(' 💞💞💞 YO TE AMO MÁÁÁÁÁÁS 💞💞💞');
  location.href = "https://youtu.be/AcdNwY1R-Cc";
};

const ebitarKCRompaMyBobo = () => {
  votonNo.style.position = 'absolute';
  votonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  votonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

votonSi.addEventListener('click', zomosNobios);
votonNo.addEventListener('mouseover', ebitarKCRompaMyBobo);