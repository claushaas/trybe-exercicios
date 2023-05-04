// 1. O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10

let resultadoFatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  resultadoFatorial *= index;
}

console.log(resultadoFatorial);

// 2. Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "tryber";
let wordInvertida = "";

for (let index = word.length - 1; index >= 0; index -= 1) {
  wordInvertida = wordInvertida + word[index];
}

console.log(wordInvertida);

// 3. Considere o array de strings abaixo:

let array = ["java", "javascript", "python", "html", "css"];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let palavra of array) {
  if (palavra.length > maiorPalavra.length) {
    maiorPalavra = palavra;
  }
}

for (let palavra of array) {
  if (palavra.length < menorPalavra.length) {
    menorPalavra = palavra;
  }
}

console.log(maiorPalavra);
console.log(menorPalavra);

// 4. Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let maiorPrimo = 0;

for (let index = 2; index <= 50; ++index) {
  let ePrimo = true;
  for (let divisor = 2; divisor < index; ++divisor) {
    if (index % divisor === 0) {
      ePrimo = false;
    }
    if (ePrimo === true) {
      maiorPrimo = index;
    }
  }
}

console.log(maiorPrimo);
