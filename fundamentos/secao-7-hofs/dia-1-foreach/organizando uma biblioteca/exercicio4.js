const books = require('./data')

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear > 1900)
}

console.log(everyoneWasBornOnSecXX(books));