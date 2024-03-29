const config = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOSTNAME,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};