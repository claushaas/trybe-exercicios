// Acesse o elemento where-are-you.

const whereAreYou = document.getElementById("where-are-you");

// Acesse parent a partir de where-are-you e adicione uma color a ele.

whereAreYou.parentElement.style.color = "blue";

// Acesse o first-child-of-child e adicione um texto a ele.

document.getElementById('first-child-of-child').innerText = "Um texto aqui";

// Acesse o first-child a partir de parent.

const parent = document.getElementById('parent')

const firstChild = parent.firstChild

// Acesse o first-child a partir de where-are-you.

whereAreYou.parentNode

// Acesse o texto Attention! a partir de where-are-you.

whereAreYou.nextSibling

// Acesse o third-child a partir de where-are-you.

whereAreYou.nextElementSibling

// Acesse o third-child a partir de parent.

parent.lastElementChild.previousElementSibling
