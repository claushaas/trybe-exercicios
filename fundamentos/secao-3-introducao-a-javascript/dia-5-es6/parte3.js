// Crie duas funções JavaScript com as seguintes especificações:

// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
// O nome da função deverá ser substituaX.
// A função deverá receber um nome por parâmetro.
// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!'.
// A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
// Parâmetro: ‘Bebeto’
// Retorno: ‘Tryber Bebeto aqui!’

const substituaX = nome => {
  const frase = 'Tryber x aqui!'
  const arrayDaFrase = frase.split(' ')

  arrayDaFrase[arrayDaFrase.indexOf('x')] = nome
  return arrayDaFrase.join(' ')
}

console.log(substituaX('Bebeto'));

// Função 2: Escreva uma função que receberá o retorno da Função 1 por parâmetro e retornará uma nova string.
// O nome da função deverá ser minhasSkills.
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro.
// Declare dentro da função uma variável com o nome skills e do tipo const.
// A variável skills deverá ser um array que contenha três strings com tecnologias que você já estudou.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

const minhasSkills = string => {
  const skills = ['HTML', 'CSS', 'Javascript']

  return `${string}
Minhas 3 principais habilidades são:
 - ${skills[0]}
 - ${skills[1]}
 - ${skills[2]}`
}

console.log(minhasSkills(substituaX('Claus')));