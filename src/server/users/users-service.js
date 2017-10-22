'use strict';

const db = require('./../common/database');

const UsersService = {
  getUsers() {
    const query = `
      SELECT *
      FROM users
      ORDER BY user_id
    `;

    return db.manyOrNone(query);
  },

  createUser(queryParams) {
    const query = `
      INSERT INTO users(user_id, first_name, last_name)
      VALUES (nextval('users_sequence'), $(firstName), $(lastName))
      RETURNING user_id
    `;

    return db.one(query, queryParams);
  },

  getUser(userId) {
    const query = `
      SELECT *
      FROM users
      WHERE user_id=$(userId)
    `;

    return db.oneOrNone(query, { userId });
  },

  updateUser(queryParams) {
    const query = `
      UPDATE users
      SET
        first_name=$(firstName),
        last_name=$(lastName)
      WHERE user_id=$(userId)
    `;

    return db.result(query, queryParams);
  },

  deleteUser(userId) {
    const query = `
      DELETE FROM users
      WHERE user_id=$(userId)
    `;

    return db.result(query, { userId });
  }
};

module.exports = UsersService;
