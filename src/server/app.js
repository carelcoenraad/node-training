'use strict';

require('./common/env');
const logger = require('./common/logger');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const helloWorldController = require('./hello-world-controller');
const users = require('./users');
const middleware = require('./middleware');

// Configure the server
const port = process.env.PORT || 3000;

// Create a new express server
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use('/login', express.static('src/client'));

// Session
require('./session').session(app);

// Send a response to the index
app.get('/', helloWorldController.helloWorld);

// API routes
app.use('/users', users);

// Add custom middleware
app.use(middleware.errorHandler);

// Start server on the specified port and binding host
app.listen(port, () => {
  logger.debug(`Node Version: ${process.version}`);
  logger.info(`Server starting on http://localhost:${port}`);
});

module.exports = app;
