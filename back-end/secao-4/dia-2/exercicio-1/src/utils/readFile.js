const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, '../movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    // console.log(JSON.parse(data));
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

// console.log(readFile());

module.exports = readFile;