const readlineSync = require('readline-sync');

const weight = readlineSync.questionInt('Qual é o seu peso? (em kg) ');
const height = readlineSync.questionFloat('Qual é a sua altura? (em m) ');
const bmi = (weight / height ** 2).toFixed(1);

const situacao = () => {
  console.log(typeof(bmi))
  const bmiToNumber = 31.4
  console.log(typeof(bmiToNumber))
  console.log(bmiToNumber >= 18.5)
  if(bmiToNumber < 18.5) {
      return 'Abaixo do peso (magreza)'
  }
  if (bmiToNumber >= 18.5 && bmiToNumber < 24.9) {
      return 'Peso normal'
  }
  if (bmiToNumber >= 25 && bmiToNumber < 29.9) {
      return 'Acima do peso (sobrepeso)'
  }
  if (bmiToNumber >= 30 && bmiToNumber < 34.9) {
      return 'Obesidade grau I'
  }
  if (bmiToNumber >= 35 && bmiToNumber < 39.9) {
      return 'Obesidade grau II'
  }
  if (bmiToNumber >= 40) {
      return 'Obesidade graus III e IV'
  }
  return 'Valor inválido'
}

console.log(`Seu IMC é ${bmi} - ${situacao()}`) // 31.353579175066313