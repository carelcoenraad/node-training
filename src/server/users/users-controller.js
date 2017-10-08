'use strict';

const usersData = require('./users-data');

const usersController = {
  /**
   * GET /users
   */
  getUsers(req, res) {
    res.status(200);
    res.json(usersData);
  },

  /**
   * GET /users/:userId
   */
  getUser(req, res) {
    const { userId } = req.params;
    const { users } = usersData;

    // Search for the user in the usersData
    const user = users.find(element => element.id === userId);

    if (user) {
      res.status(200);
      res.json(user);
    } else {
      res.status(404);
      res.send(`Could not find user with id ${userId}`);
    }
  }
};

module.exports = usersController;
