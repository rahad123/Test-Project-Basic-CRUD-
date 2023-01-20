const { ApolloError } = require('apollo-server-express');
const constants = require('./constants');

module.exports = {
  INTERNAL_SERVER_ERROR: {
    message: constants.HTTP_CODE_500_MESSAGE,
    code: constants.HTTP_CODE_500_CODE,
  },
  FORBIDDEN: {
    message: constants.HTTP_CODE_403_MESSAGE,
    code: constants.HTTP_CODE_403_CODE,
  },
  NOT_FOUND: {
    message: constants.HTTP_CODE_404_MESSAGE,
    code: constants.HTTP_CODE_404_CODE,
  },
  NOT_ACCEPTABLE: {
    message: constants.HTTP_CODE_406_MESSAGE,
    code: constants.HTTP_CODE_406_CODE,
  },
  UNPROCESSABLE_ENTITY: {
    message: constants.HTTP_CODE_422_MESSAGE,
    code: constants.HTTP_CODE_422_CODE,
  },

  withApolloError: (ERROR, customMessage = null) => {
    return new ApolloError(ERROR.message, ERROR.code, {
      error: true,
      message: customMessage ?? ERROR.message,
    });
  },
};
