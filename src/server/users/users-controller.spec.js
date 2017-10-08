'use strict';

const chai = require('chai');
const sinon = require('sinon');
const usersController = require('./users-controller');
const usersData = require('./users-data.js');

// Setup chai
const { expect } = chai;

/**
 * Describe usersController
 */
describe('usersController', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      params: {}
    };

    res = {
      json: sinon.spy(),
      send: sinon.spy(),
      status: sinon.spy()
    };
  });

  /**
   * getUsers
   */
  describe('getUsers method', () => {
    beforeEach(() => {
      usersController.getUsers(req, res);
    });

    it('should respond with a status of 200', () => {
      expect(res.status.calledWith(200)).to.equal(true);
    });

    it('should respond with a JSON object of the users', () => {
      expect(res.json.calledWith(usersData)).to.equal(true);
    });
  });

  /**
   * getUser
   */
  describe('getUser method', () => {
    /**
     * userId exists
     */
    describe('userId exists', () => {
      beforeEach(() => {
        req.params.userId = '1';
        usersController.getUser(req, res);
      });

      it('should respond with a status of 200', () => {
        expect(res.status.calledWith(200)).to.equal(true);
      });

      it('should respond with a JSON object of the user', () => {
        const user = usersData.users.find(element => element.id === req.params.userId);
        expect(res.json.calledWith(user)).to.equal(true);
      });
    });

    /**
     * userId does not exist
     */
    describe('userId does not exist', () => {
      beforeEach(() => {
        req.params.userId = 'mockId';
        usersController.getUser(req, res);
      });

      it('should respond with a status of 404', () => {
        expect(res.status.calledWith(404)).to.equal(true);
      });

      it('should respond by sending a error message', () => {
        expect(res.send.calledWith(`Could not find user with id ${req.params.userId}`)).to.equal(true);
      });
    });
  });
});
