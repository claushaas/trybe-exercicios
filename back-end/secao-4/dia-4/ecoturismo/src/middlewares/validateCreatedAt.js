const validateCreatedAt = (req, res, next) => {
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  const { createdAt } = req.body.description;
  if (!isFormatDate.test(createdAt)) {
    return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
  }
  next();
};

module.exports = validateCreatedAt;