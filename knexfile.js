// Update with your config settings.
require('dotenv').config({path: './.env'});

module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: process.env.DB_TEST_HOST,
      user: process.env.DB_TEST_USER,
      password: process.env.DB_TEST_PASS,
      database: process.env.DB_TEST_NAME,
      charset: process.env.DB_TEST_CHARSET
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      charset: process.env.DB_CHARSET
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }

};
