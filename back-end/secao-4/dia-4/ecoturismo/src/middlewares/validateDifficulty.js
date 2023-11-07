const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  const possibleDifficulties = ['Fácil', 'Médio', 'Difícil'];

  if (!possibleDifficulties.includes(difficulty)) {
    return res.status(400)
      .json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }
  next();
};

module.exports = validateDifficulty;