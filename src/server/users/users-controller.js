'use strict';

const db = require('./../database');

const usersController = {
  /**
   * GET /users
   */
  getUsers(req, res) {
    db.getUsers()
      .then((data) => {
        res.status(200);
        res.json({
          users: data
        });
      })
      .catch((error) => {
        res.status(500);
        res.send(error);
      });
  },

  /**
   * POST /users
   */
  createUser(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    db.createUser(firstName, lastName)
      .then((data) => {
        res.location(`/users/${data.user_id}`);
        res.sendStatus(201);
      })
      .catch((error) => {
        res.status(500);
        res.json(error);
      });
  },

  /**
   * GET /users/:userId
   */
  getUser(req, res) {
    const userId = req.params.userId;

    db.getUser(userId)
      .then((data) => {
        if (!data) {
          res.status(404);
          res.json({error : `Could not find user with id ${userId}`});
        }

        res.status(200);
        res.json(data);
      })
      .catch((error) => {
        res.status(500);
        res.json(error);
      });
  },

  /**
   * PUT /users/:userId
   */
  updateUser(req, res) {
    const userId = req.params.userId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    db.updateUser(userId, firstName, lastName)
      .then((data) => {
        if (data.rowCount === 0) {
          res.status(404);
          res.send(`Could not update user with id ${userId}`);
        }

        res.sendStatus(200);
      })
      .catch((error) => {
        res.status(500);
        res.json(error);
      });
  },

  /**
   * DELETE /users/:userId
   */
  deleteUser(req, res) {
    const userId = req.params.userId;

    db.deleteUser(userId)
      .then((data) => {
        if (data.rowCount === 0) {
          res.sendStatus(410);
        }

        res.sendStatus(204);
      })
      .catch((error) => {
        res.status(500);
        res.json(error);
      });
  }
};

module.exports = usersController;
