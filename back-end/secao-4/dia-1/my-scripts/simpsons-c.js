// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const fs = require('fs').promises;

const main = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);

  const newSimpsons = simpsons.filter(({ id }) => id !== '10' && id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

main();