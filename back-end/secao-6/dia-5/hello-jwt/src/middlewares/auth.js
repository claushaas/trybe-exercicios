/* eslint-disable max-lines-per-function */
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const extractToken = (authorization) => authorization.split(' ')[1];

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      error: {
        message: 'Token not found',
      },
    });
  }

  const token = extractToken(authorization);

  try {
    const payload = jwt.verify(token, secret);
    const { username, admin } = payload;
    req.user = { username, admin };
    next();
  } catch (error) {
    return res.status(401).json({
      error: {
        message: error.message,
      },
    });
  }
};