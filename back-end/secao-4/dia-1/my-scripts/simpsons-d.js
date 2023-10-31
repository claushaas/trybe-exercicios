//D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

const fs = require('fs').promises;

const main = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);

  const newSimpsons = simpsons.filter(({ id }) => id >= '1' && id <= '4');

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsons));
}

main();