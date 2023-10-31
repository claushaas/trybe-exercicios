// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

const fs = require('fs').promises;

const main = async (id) => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);

  const simpson = simpsons.find((simpson) => simpson.id === id);

  if (!simpson) {
    throw new Error('id não encontrado');
  }

  console.log(simpson);
}

main('1');