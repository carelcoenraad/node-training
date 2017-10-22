'use strict';

const usersRouter = require('express').Router();
const usersController = require('./users-controller.js');
const { authentication } = require('./../session');

usersRouter.all('*', authentication.requireAuthentication);

usersRouter.route('/')
  .get(usersController.getUsers)
  .post(usersController.createUser);

usersRouter.route('/:userId')
  .get(usersController.getUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = usersRouter;
