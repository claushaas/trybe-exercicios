const books = require('./data')

const expectedResult = false;

const authorUnique = () => {
  let unique = true
  books.forEach((book, index) => {
    const autorBirthDate = book.author.birthYear
    const previousAuthorBirthDate = books && books[index - 1] && books[index - 1].author.birthYear
    if (autorBirthDate === previousAuthorBirthDate) {
      unique = false
    }
  })
  return unique
}

console.log(authorUnique(books));
