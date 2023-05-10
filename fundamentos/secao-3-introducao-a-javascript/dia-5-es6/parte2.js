// 1 – Crie uma função que ligue e desligue o motor de um carro

const ligaOuDesliga = estadoDoMotorDoCarro => estadoDoMotorDoCarro === 'ligado' ? 'desligado' : 'ligado'

// 2 – Crie uma função que calcule a área de um círculo

const calculaAreaDoCirculo = raio => 3.14159 * (raio ** 2)

console.log(calculaAreaDoCirculo(5));

// 3 – Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase

const longestWord = string => string.split(' ').sort(
    (a, b) => a.length < b.length ? 1 : -1
  )[0]

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'