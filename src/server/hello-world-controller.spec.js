'use strict';

const chai = require('chai');
const sinon = require('sinon');
const helloWorldController = require('./hello-world-controller');

// Setup Chai
const { expect } = chai;

/**
 * Describe helloWorld
 */
describe('helloWorld', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {};

    res = {
      send: sinon.spy()
    };
  });

  /**
   * helloWorld method
   */
  describe('helloWorld method', () => {
    it('should respond by sending a hello world message', () => {
      helloWorldController.helloWorld(req, res);
      expect(res.send.calledWith('Hello world')).to.equal(true);
    });
  });
});
