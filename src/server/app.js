'use strict';

require('./common/env');
const logger = require('./common/logger');
const express = require('express');
const helmet = require('helmet');
const helloWorldController = require('./hello-world-controller');
const users = require('./users');

// Configure the server
const port = process.env.PORT || 3000;

// Create a new express server
const app = express();
app.use(helmet());

// Send a response to the index
app.get('/', helloWorldController.helloWorld);

// API routes
app.use('/users', users);

// Start server on the specified port and binding host
app.listen(port, () => {
  logger.debug(`Node Version: ${process.version}`);
  logger.info(`Server starting on http://localhost:${port}`);
});

module.exports = app;
