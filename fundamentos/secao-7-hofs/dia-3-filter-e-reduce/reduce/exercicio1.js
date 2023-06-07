// 1 - Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenNumbersSum = () => numbers.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    return acc + curr
  }
  return acc
})

console.log(evenNumbersSum());