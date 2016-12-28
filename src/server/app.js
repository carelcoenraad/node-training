'use strict';

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const helloWorld = require('./hello-world');
const users = require('./users');

// Configure the server
const port = process.env.port || 3000;

// Create a new express server
const app = express();
var expressWs = require('express-ws')(app);

app.use(helmet());
app.use(bodyParser.json());

// Send a response to the index
app.get('/', helloWorld.helloWorld);

app.use('/ui', express.static('src/client'));


// API routes
app.use('/users', users);

// Start server on the specified port and binding host
app.listen(port, () => {
  console.log(`Node Version: ${process.version}`);
  console.log(`Server starting on http://localhost:${port}`);
});
