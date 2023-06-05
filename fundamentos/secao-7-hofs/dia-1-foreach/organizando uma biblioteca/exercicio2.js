const books = require('./data')

const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  
  nameBook = books.sort((a, b) => {
    return b.name.length > a.name.length ? -1 : 1
  })[0].name

  return nameBook;
}

console.log((smallerName(books)));