// Ordene o array numbers em ordem crescente e imprima seus valores.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

// Ordene o array numbers em ordem decrescente e imprima seus valores.

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers2.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers2[secondIndex] < numbers2[index]) {
      let position = numbers2[index];
      numbers2[index] = numbers2[secondIndex];
      numbers2[secondIndex] = position;
    }
  }
}

console.log(numbers2);

// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplicados = [];

for (let index = 0; index < numbers3.length; index += 1) {
  let numeroMultiplicado =
    numbers3[index] * (numbers3[index + 1] ? numbers3[index + 1] : 2);
  numbersMultiplicados.push(numeroMultiplicado);
}

console.log(numbersMultiplicados);
