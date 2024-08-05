    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'app_db'),
          user: env('DATABASE_USERNAME', 'admin'),
          password: env('DATABASE_PASSWORD', 'password'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl: false,
        },
        debug: false,
      },
    });


    // const path = require('path');

    // module.exports = ({ env }) => ({
    //   connection: {
    //     client: 'sqlite',
    //     connection: {
    //       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    //     },
    //     useNullAsDefault: true,
    //   },
    // });