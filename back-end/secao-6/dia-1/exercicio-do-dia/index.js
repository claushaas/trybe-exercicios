const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const { BooksController } = require('./src/controllers');

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.get('/books', BooksController.getAll);

app.get('/books/:id', BooksController.getById);

app.post('/books', BooksController.create);

app.put('/books/:id', BooksController.update);

app.delete('/bokos/:id', BooksController.remove);

app.use((error, _req, res, _next) => res.status(500).json({ error: error.message }));