'use strict';

const pgp = require('pg-promise')();
const connection = require('./connection.js');

// FIXME: There's an issue when the database is instantiated and the watcher restarts the server
const db = pgp(connection);

const Database = {
  getUsers() {
    return new Promise((resolve, reject) => {
      db.manyOrNone('SELECT * FROM users ORDER BY user_id')
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  },

  createUser(firstName, lastName) {
    return db.one('INSERT INTO users(user_id, first_name, last_name) VALUES(nextval(\'users_sequence\'), $1, $2) returning user_id', [firstName, lastName]);
  },

  getUser(userId) {
    return new Promise((resolve, reject) => {
      db.oneOrNone('SELECT * FROM users WHERE user_id=$1', userId)
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  },

  updateUser(userId, firstName, lastName) {
    return new Promise((resolve, reject) => {
      db.result('UPDATE users SET first_name=$1, last_name=$2 WHERE user_id=$3', [firstName, lastName, userId])
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  },

  deleteUser(userId) {
    return new Promise((resolve, reject) => {
      db.result('DELETE FROM users WHERE user_id=$1', userId)
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
};

module.exports = Database;
