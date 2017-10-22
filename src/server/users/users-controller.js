'use strict';

const usersService = require('./users-service');

const usersController = {
  /**
   * GET /users
   */
  getUsers(req, res, next) {
    usersService.getUsers()
      .then(data => res.status(200).json({ users: data }))
      .catch(next);
  },

  /**
   * POST /users
   */
  createUser(req, res, next) {
    const params = {
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };

    usersService.createUser(params)
      .then(data => res.location(`/users/${data.user_id}`).sendStatus(201))
      .catch(next);
  },

  /**
   * GET /users/:userId
   */
  getUser(req, res, next) {
    const { userId } = req.params;

    usersService.getUser(userId)
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: `Could not find user with id ${userId}` });
        }

        return res.status(200).json(data);
      })
      .catch(next);
  },

  /**
   * PUT /users/:userId
   */
  updateUser(req, res, next) {
    const params = {
      userId: req.params.userId,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    };

    usersService.updateUser(params)
      .then((data) => {
        if (data.rowCount === 0) {
          return res.status(404).json({ message: `Could not update user with id ${params.userId}` });
        }

        return res.sendStatus(200);
      })
      .catch(next);
  },

  /**
   * DELETE /users/:userId
   */
  deleteUser(req, res, next) {
    const { userId } = req.params;

    usersService.deleteUser(userId)
      .then((data) => {
        if (data.rowCount === 0) {
          return res.sendStatus(410);
        }

        return res.sendStatus(204);
      })
      .catch(next);
  }
};

module.exports = usersController;
