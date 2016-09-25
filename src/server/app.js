'use strict';

const express = require('express');
const helmet = require('helmet');
const helloWorld = require('./hello-world');
const users = require('./users');

// Configure the server
const port = process.env.port || 3000;

// Create a new express server
const app = express();
app.use(helmet());

// Send a response to the index
app.get('/', helloWorld.helloWorld);

// API routes
app.use('/users', users);

// Start server on the specified port and binding host
app.listen(port, () => {
  console.log(`Node Version: ${process.version}`);
  console.log(`Server starting on http://localhost:${port}`);
});