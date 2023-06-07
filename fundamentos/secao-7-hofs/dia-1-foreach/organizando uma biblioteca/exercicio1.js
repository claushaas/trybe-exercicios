const books = require('./data')

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947).author.name
}

console.log(authorBornIn1947());