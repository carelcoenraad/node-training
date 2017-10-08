'use strict';

/**
 * This module tests the app.
 */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./../../src/server/app');

// Setup Chai
chai.should();
chai.use(chaiHttp);

/**
 * Describe app module.
 */
describe('app module', () => {
  /**
   * Describe / route.
   */
  describe('/ route', () => {
    /**
     * Describe GET request.
     */
    describe('GET request', () => {
      it('should respond with Hello World', (done) => {
        chai.request(app)
          .get('/')
          .end((err, res) => {
            res.status.should.equal(200);
            res.text.should.equal('Hello world');
            done();
          });
      });
    });
  });
});
