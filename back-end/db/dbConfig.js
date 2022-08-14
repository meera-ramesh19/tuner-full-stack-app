// need to install pg-promise

// need to install pg-promise

const pgp = require('pg-promise')();
require('dotenv').config();

//connection object to the particular database
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

const db = pgp(cn);
module.exports = db;
