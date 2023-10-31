// Crie um código que exiba o valor dos n primeiros elementos da sequência de Fibonacci.
const readlineSync = require('readline-sync');

const fibonacci = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const main = () => {
  const n = readline.questionInt('Enter \'n\' value: ');

  if (n <= 0) {
    console.log('Enter a number greater then \'0\'!');
    return;
  }

  for (let i = 1; i <= n; i += 1) {
    console.log(fibonacci(i));
  }
}

main();