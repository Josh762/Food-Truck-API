// config.js
require('dotenv').config()

const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
  app: {
    port: 3000 | process.env.PORT
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'db'
  }
};

const test = {
  app: {
    port: 3000 | process.env.PORT
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'test'
  }
};

const config = {
  dev,
  test
};
console.log('@@@ ', env);
module.exports = config[env];