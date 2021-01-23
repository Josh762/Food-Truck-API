// config.js
require('dotenv').config()

const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
  app: {
    port: process.env.PORT || 5000
  },
  db: {
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    databaseName: process.env.MONGO_DB_NAME,
    connectionString: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-kds2y.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
  }
};

const test = {
  app: {
    port: process.env.PORT || 5000
  },
  db: {
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    databaseName: process.env.MONGO_DB_NAME,
    connectionString: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-kds2y.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
  }
};

const config = {
  dev,
  test
};

module.exports = config[env];