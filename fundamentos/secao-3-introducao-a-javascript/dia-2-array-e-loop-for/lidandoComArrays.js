let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Percorra o array imprimindo todos os valores contidos nele com a função console.log()

for (let number of numbers) {
  console.log(number)
}

// 2. Some todos os valores contidos no array e imprima o resultado.

let soma = 0

for (let number of numbers) {
  soma = soma + number
}

console.log(soma)

// 3. Calcule e imprima a média aritmética dos valores contidos no array.

let mediaAritmetica = soma / numbers.length

console.log(mediaAritmetica);

// 4. Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

if (mediaAritmetica > 20) {
  console.log('O valor da média aritmética é maior que 20');
} else {
  console.log('O valor da média aritmética é menor ou igual a 20');
}

// 5. Utilizando for, descubra o maior valor contido no array e imprima-o.

let maiorNumero = numbers[0]

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index]
  }
}

console.log(maiorNumero)

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let quantidadeDeNumerosImpares = 0

for (let number of numbers) {
  if (number % 2 !== 0) {
    quantidadeDeNumerosImpares += 1
  }
}

if (quantidadeDeNumerosImpares === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(quantidadeDeNumerosImpares);
}

// 7. Utilizando for, descubra o menor valor contido no array e imprima-o

let menorNumero = numbers[0]

for (let number of numbers) {
  if (number < menorNumero) {
    menorNumero = number
  }
}

console.log(menorNumero);

// 8. Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let array1A25 = []

for (let index = 1; index <= 25; index += 1) {
  array1A25.push(index)
}

console.log(array1A25);

// 9. Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let number of array1A25) {
  console.log(number / 2);
}