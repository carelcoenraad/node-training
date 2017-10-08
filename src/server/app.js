'use strict';

require('./common/env');
const logger = require('./common/logger');
const express = require('express');
const helloWorldController = require('./hello-world-controller');

// Configure the server
const port = process.env.PORT || 3000;

// Create a new express server
const app = express();

// Send a response to the index
app.get('/', helloWorldController.helloWorld);

// Start server on the specified port and binding host
app.listen(port, () => {
  logger.debug(`Node Version: ${process.version}`);
  logger.info(`Server starting on http://localhost:${port}`);
});

module.exports = app;
