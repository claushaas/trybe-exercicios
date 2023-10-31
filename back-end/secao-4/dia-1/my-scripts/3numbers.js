//Crie uma função que recebe três parâmetros e retorna uma Promise.

// - Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// - Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
// - Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// - Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const readlineSync = require('readline-sync');

const sumAndMultiply = () => {
  const a = readlineSync.questionInt('Enter \'a\' value: ');
  const b = readlineSync.questionInt('Enter \'b\' value: ');
  const c = readlineSync.questionInt('Enter \'c\' value: ');

  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas números'));
    }

    const result = (a + b) * c;

    if (result < 50) {
      reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  });
}

const main = async () => {
  try {
    const result = await sumAndMultiply();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

main();