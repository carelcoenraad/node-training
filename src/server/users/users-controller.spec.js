'use strict';

require('./../common/env');
const sinon = require('sinon');
const usersController = require('./users-controller');

/**
 * Describe usersController
 */
xdescribe('usersController', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      params: {},
      body: {}
    };

    res = {
      json: sinon.spy(),
      send: sinon.spy(),
      status: sinon.spy()
    };
  });

  /**
   * getUsers method
   */
  describe('getUsers method', () => {
    beforeEach(() => {
      usersController.getUsers(req, res);
    });

    /**
     * db.getUsers() resolves
     */
    describe('db.getUsers() resolves', () => {
      it('should respond with a status of 200', () => {
        // add test
      });

      it('should respond with a JSON object of the users', () => {
        // add test
      });
    });

    /**
     * db.getUsers() rejects
     */
    describe('db.getUsers() rejects', () => {
      it('should respond with a status of 500', () => {
        // add test
      });

      it('should respond with the error', () => {
        // add test
      });
    });
  });

  /**
   * createUser method
   */
  xdescribe('createUser method', () => {
    beforeEach(() => {
      usersController.createUser(req, res);
    });

    /**
     * db.createUser() resolves
     */
    describe('db.createUser() resolves', () => {
      it('should respond with the location of the new user', () => {
        // add test
      });

      it('should respond with a status of 201', () => {
        // add test
      });
    });

    /**
     * db.createUser() rejects
     */
    describe('db.createUser() rejects', () => {
      it('should respond with a status of 500', () => {
        // add test
      });

      it('should respond with the error', () => {
        // add test
      });
    });
  });

  /**
   * getUser method
   */
  xdescribe('getUser method', () => {
    beforeEach(() => {
      usersController.getUser(req, res);
    });

    /**
     * db.getUser(userId) resolves
     */
    describe('db.getUser(userId) resolves', () => {
      /**
       * userId exists
       */
      describe('userId exists', () => {
        beforeEach(() => {
          // add test
        });

        it('should respond with a status of 200', () => {
          // add test
        });

        it('should respond with a JSON object of the user', () => {
          // add test
        });
      });

      /**
       * userId does not exist
       */
      describe('userId does not exist', () => {
        beforeEach(() => {
          // add test
        });

        it('should respond with a status of 404', () => {
          // add test
        });

        it('should respond by sending a error message', () => {
          // add test
        });
      });
    });

    /**
     * db.getUser(userId) rejects
     */
    describe('db.getUser(userId) resolves', () => {
      it('should respond with a status of 500', () => {
        // add test
      });

      it('should respond with the error', () => {
        // add test
      });
    });
  });

  /**
   * updateUser method
   */
  xdescribe('updateUser method', () => {
    beforeEach(() => {
      usersController.updateUser(req, res);
    });

    /**
     * db.updateUser(userId, firstName, lastName) resolves
     */
    describe('db.updateUser(userId, firstName, lastName) resolves', () => {
      /**
       * rowCount > 0
       */
      describe('rowCount > 0', () => {
        it('should respond with a status of 200', () => {
          // add test
        });
      });

      /**
       * rowCount === 0
       */
      describe('rowCount === 0', () => {
        it('should respond with a status of 404', () => {
          // add test
        });

        it('should respond by sending a error message', () => {
          // add test
        });
      });
    });

    /**
     * db.updateUser(userId, firstName, lastName) rejects
     */
    describe('db.updateUser(userId, firstName, lastName) rejects', () => {
      it('should respond with a status of 500', () => {
        // add test
      });

      it('should respond with the error', () => {
        // add test
      });
    });
  });

  /**
   * deleteUser method
   */
  xdescribe('deleteUser method', () => {
    beforeEach(() => {
      usersController.deleteUser(req, res);
    });

    /**
     * db.deleteUser(userId) resolves
     */
    describe('db.deleteUser(userId) resolves', () => {
      /**
       * rowCount > 0
       */
      describe('rowCount > 0', () => {
        it('should respond with a status of 204', () => {
          // add test
        });
      });

      /**
       * rowCount === 0
       */
      describe('rowCount === 0', () => {
        it('should respond with a status of 410', () => {
          // add test
        });
      });
    });

    /**
     * db.deleteUser(userId) rejects
     */
    describe('db.deleteUser(userId) rejects', () => {
      it('should respond with a status of 500', () => {
        // add test
      });

      it('should respond with the error', () => {
        // add test
      });
    });
  });
});
