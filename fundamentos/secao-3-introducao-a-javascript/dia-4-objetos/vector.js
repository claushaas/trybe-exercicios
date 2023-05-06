// Crie uma função chamada arrayOfNumbers, que receberá a variável vector como parâmetro.
// Por meio de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado pela função no fim.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
  const evenNumbers = []

  for (let subArray = 0; subArray < vector.length; subArray += 1) {
    for (let number of vector[subArray]) {
      if (number % 2 === 0) {
        evenNumbers.push(number)
      }
    }
  }
  return evenNumbers
}

console.log(arrayOfNumbers(vector));