'use strict';

// Load .env for local development
if (process.env.NODE_ENV === 'local') {
  require('dotenv').config(); // eslint-disable-line global-require
}

// Set test environment variables
if (process.env.NODE_ENV === 'test') {
  process.env.DATABASE_CONNECTION_URI = 'postgres://username:password@host:5432/postgres';
}
