//F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

const fs = require('fs').promises;

const main = async () => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(data);

  const newSimpsons = simpsons.map((simpson) => {
    if (simpson.id === '8') return { id: '8', name: 'Maggie Simpson' };
    return simpson;
  });

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsons));
}

main();