/* eslint-disable max-params */
const { Book } = require('../models');

const getByAuthor = async (author) => {
  const book = await Book.findAll({ 
    where: { author },
    order: [
      ['title', 'ASC'],
    ],
  });

  return book;
};

const getAll = async (author) => {
  if (author) return getByAuthor(author);
  const books = await Book.findAll({
    order: [
      ['title', 'ASC'],
    ],
  });

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const create = async (title, author, pageQuantity, publisher) => {
  const book = await Book.create({ title, author, pageQuantity, publisher });

  return book;
};

const update = async (id, title, author, pageQuantity, publisher) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } },
  );

  return updatedBook;
};

const remove = async (id) => {
  const book = Book.destroy({ where: { id } });

  return book;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};