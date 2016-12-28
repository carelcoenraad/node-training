'use strict';
const express = require('express');
const expressWs = require('express-ws')(express);
const usersRouter = express.Router(); // eslint-disable-line new-cap
const db = require('./../database');


const usersController = require('./users-controller.js');

usersRouter.route('/')
  .get(usersController.getUsers)
  .post(usersController.createUser);



usersRouter.ws('/', function(ws, req) {

  var userOutput = '';

  function getUsersRecursive() {
    db.getUsers()
      .then(function(data) {
        if (userOutput != JSON.stringify(data)) {
          userOutput = JSON.stringify(data);
          ws.send(userOutput);
        } else {
          console.log('no data changed');
        }
        // console.log(data, arguments);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setInterval(getUsersRecursive, 1000);
  console.log('hi websockets');
});




usersRouter.route('/:userId')
  .get(usersController.getUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = usersRouter;
