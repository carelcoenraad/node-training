'use strict';

// Load .env for local development
if (process.env.NODE_ENV === 'local') {
  require('dotenv').config(); // eslint-disable-line global-require
}
