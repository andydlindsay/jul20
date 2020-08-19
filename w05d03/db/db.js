const pg = require('pg');
const Client = pg.Client;

const options = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
};

const client = new Client(options);

client.connect(() => {
  console.log('connected to the db');
});

module.exports = client;
