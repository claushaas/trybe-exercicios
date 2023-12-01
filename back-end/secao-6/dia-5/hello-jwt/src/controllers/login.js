/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
  return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' }); 
}

  if (username.length < 5) {
  return res.status(401).json({ message: 'O campo "username" deve ter pelo menos 5 caracteres' });
  }

  if (password.length < 5) {
  return res.status(401).json({ message: 'O campo "password" deve ter pelo menos 5 caracteres' });
  }

  const payload = {
    username,
    admin: false,
  };

  if (username === 'admin' && password === 's3nh4S3gur4???') {
    payload.admin = true;
  }

  const token = jwt.sign(payload, secret, jwtConfig);

  res.status(200).json({ token });
};