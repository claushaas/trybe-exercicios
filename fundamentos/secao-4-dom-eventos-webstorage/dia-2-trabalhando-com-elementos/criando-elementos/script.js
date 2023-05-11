// Crie um irmão para elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
const paiDoElementoOndeVoceEsta = elementoOndeVoceEsta.parentElement
const irmaoDoElementoOndeVoceEsta = document.createElement('section')
paiDoElementoOndeVoceEsta.appendChild(irmaoDoElementoOndeVoceEsta)

// Crie um filho para elementoOndeVoceEsta.

const filhoDoElementoOndeVoceEsta = document.createElement('section')
elementoOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta)

// Crie um filho para primeiroFilhoDoFilho.

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')

const filhoDoPrimeiroFilhoDoFilho = document.createElement('div')
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho)

// A partir desse filho criado, acesse terceiroFilho.

const terceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling