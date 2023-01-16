const { ERROR_CODES } = require("./errors/error-codes");

/**
 * Error handler for apollo server.
 * All errors will be routed through this.
 * @param error The graphql error
 */
const errorHandler = (error) => {
  if (error) {
    if (error.isOperational) {
      return error;
    }
    console.info(error.message, {
      name: error.name,
      ...error.extensions,
    });
  } else {
    console.info(error.message, { name: error.name });
  }

  if (error.extensions.code === ERROR_CODES.NOT_FOUND) {
    return { ...error, statusCode: 404 };
  }

  return error;
};

module.exports = errorHandler;
