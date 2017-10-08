'use strict';

const logger = require('./../common/logger');

/**
 * Error handler middleware.
 * Checks if there is an error in which case it logs the error and sends a relevant response.
 * @param err Error
 * @param req Request
 * @param res Response
 * @param next Next
 * @returns {*}
 */
const errorHandler = (err, req, res, next) => {
  // Check if there is an error
  if (err) {
    // Log the error
    logger.error(err);

    // Check for a message
    const message = err.message || 'Unknown error';

    // Send internal server error
    return res.status(500).json({ message });
  }

  // If there is no error, send it to the next handler
  return next(err);
};

module.exports = errorHandler;
