// src/app.js
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const readFile = require('./utils/readFile');

const moviesPath = path.resolve(__dirname, './movies.json');

const app = express();

app.use(express.json());

app.get('/movies/search', async (req, res) => {
  const { q } = req.query;
  const movies = await readFile();
  const filteredMovies = movies.filter((movie) => movie.movie.includes(q));

  res.status(200).json(filteredMovies);
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readFile();
  const movie = movies.find((mov) => mov.id === Number(id));

  if (!movie) return res.status(404).json({ message: 'Movie not found' });

  res.status(200).json(movie);
});

app.get('/movies', async (_req, res) => {
  const movies = await readFile();

  res.status(200).json(movies);
});

app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  const movies = await readFile();
  const id = movies.length + 1;
  const newMovie = { id, movie, price };

  movies.push(newMovie);

  await fs.writeFile(moviesPath, JSON.stringify(movies));

  res.status(201).json(newMovie);
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const movies = await readFile();
  const movieIndex = movies.findIndex((mov) => mov.id === Number(id));

  if (movieIndex === -1) return res.status(404).json({ message: 'Movie not found' });

  const updatedMovie = { id: Number(id), movie, price };

  movies[movieIndex] = updatedMovie;

  await fs.writeFile(moviesPath, JSON.stringify(movies));

  res.status(200).json(updatedMovie);
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readFile();
  const movieIndex = movies.findIndex((mov) => mov.id === Number(id));

  if (movieIndex === -1) return res.status(404).json({ message: 'Movie not found' });

  movies.splice(movieIndex, 1);

  await fs.writeFile(moviesPath, JSON.stringify(movies));

  res.status(204).end();
});

module.exports = app;