// Exercício 1

let a = 185

let b = 90.9

console.log('soma', a + b)

console.log('subtração', a - b)

console.log('multiplicação', a * b)

console.log('divisão', a / b)

console.log('módulo', a % b)

// Exercício 2

let c = 50

let d = 80

if (c > d) {
  console.log(`${c} é maior`)
} else {
  console.log(`${d} é maior`)
}

// Exercício 3

let e = 50

let f = 60

let g = 80

if (e > f && e > g) {
  console.log(`${e} é maior`)
}
else if (f > e && f > g) {
  console.log(`${f} é maior`)
}
else if (g > e && g > f) {
  console.log(`${g} é maior`)
}

// Exercício 4

let h = -20

if (h > 0) {
  console.log('positive')
}
else if (h < 0) {
  console.log('negative')
}
else {
  console.log('zero')
}

// Exercício 5

let i = 80

let j = 70

let k = 30

if (i < 1 || j < 1 || k < 1) {
  console.log('ângulo inválido')
}
else if ((i + j + k) === 180) {
  console.log(true)
}
else {
  console.log(false)
}

// Exercicio 6

let peca = 'Bispo'

switch (peca.toLowerCase()) {
  case 'bispo':
    console.log('O Bispo pode se mover em linha diagonal, em qualquer direção, através de qualquer número de casas desocupadas.')
    break

  case 'rei':
    console.log('O Rei pode se mover para qualquer casa adjacente (vertical, horizontal ou diagonal), desde que não esteja colocando-se em xeque ou movendo-se para uma casa que esteja sob ameaça de captura pelo adversário.')
    break

  case 'rainha':
    console.log('A Rainha é a peça mais poderosa do jogo, ela pode se mover em linha reta ou diagonal, em qualquer direção, através de qualquer número de casas desocupadas.')
    break

  case 'cavalo':
    console.log('O Cavalo se move em um padrão em forma de L, duas casas em uma direção e, em seguida, uma casa perpendicular a essa direção. Ele pode pular sobre outras peças no tabuleiro.')
    break

  case 'torre':
    console.log('A Torre se move em linha reta, horizontalmente ou verticalmente, através de qualquer número de casas desocupadas.')
    break

  case 'peão':
    console.log('O Peão se move para frente uma casa, exceto no seu primeiro movimento, onde pode mover-se até duas casas à frente. Os peões capturam as peças adversárias movendo-se diagonalmente para uma casa ocupada pelo adversário.')
    break

  default:
    console.log('Peça inválida, tente novamente')
}

// Exercício 7

let nota = 87

if (nota >= 90) {
  console.log('Nota A')
}
else if (nota >= 80) {
  console.log('Nota B')
}
else if (nota >= 70) {
  console.log('Nota C')
}
else if (nota >= 60) {
  console.log('nota D')
}
else if (nota >= 50) {
  console.log('Nota E')
}
else {
  console.log('Nota F')
}

// Exercício 8 e 9

let numero1 = 3
let numero2 = 4
let numero5 = 5

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
  console.log(true)
}
else {
  console.log(false)
}

if (numero1 % 2 !== 0 ||numero2 % 2 !== 0 || numero3 % 2 !== 0) {
  console.log(true)
}
else {
  console.log(false)
}

// Exercício 10

let custoDoProduto = 50
let valorDeVendaDoProduto = 100

if (custoDoProduto > 0 && valorDeVendaDoProduto > 0) {
  const imposto = valorDeVendaDoProduto * 20 / 100
  const lucro = (valorDeVendaDoProduto - custoDoProduto - imposto) * 1000
  console.log('lucro da venda', lucro)
}
else {
  console.log('Os valores devem ser maiores que zero')
}

// Exercício 11

let salarioBruto = 2500
let aliquotaINSS
let aliquotaIR
let salarioLiquido

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 8 / 100
}
else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 9 / 100
}
else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 11 / 100
}
else {
  aliquotaINSS = 570,88
}

console.log('aliquota do INSS', aliquotaINSS)

const salarioBase = salarioBruto - aliquotaINSS

console.log('salário base', salarioBase)

if (salarioBase > 4664.68) {
  salarioLiquido = salarioBase - (salarioBase * 27.5 / 100) + 869.36
}
else if (salarioBase >= 3751.06) {
  salarioLiquido = salarioBase - (salarioBase * 22.5 / 100) + 636.13
}
else if (salarioBase >= 2826.66) {
  salarioLiquido = salarioBase - (salarioBase * 15 / 100) + 384.8
}
else if (salarioBase >= 1903.99) {
  salarioLiquido = salarioBase - (salarioBase * 7.5 / 100) + 142.8
}
else {
  salarioLiquido = salarioBase
}

console.log('Salário Líquido', salarioLiquido)