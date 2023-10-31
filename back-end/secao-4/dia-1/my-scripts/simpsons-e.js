// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const fs = require('fs').promises;

const main = async () => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(data);

  const newSimpsons = [...simpsons, { id: '8', name: 'Nelson Muntz' }];

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsons));
}

main();