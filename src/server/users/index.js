'use strict';

const usersRouter = require('express').Router();
const usersController = require('./users-controller.js');

usersRouter.route('/')
  .get(usersController.getUsers);

usersRouter.route('/:userId')
  .get(usersController.getUser);

module.exports = usersRouter;
