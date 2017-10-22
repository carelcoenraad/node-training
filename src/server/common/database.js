'use strict';

const pgp = require('pg-promise')();

// Setup database
const db = pgp(process.env.DATABASE_CONNECTION_URI);

module.exports = db;
