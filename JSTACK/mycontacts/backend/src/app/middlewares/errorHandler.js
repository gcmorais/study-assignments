/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
module.exports = (error, request, response, next) => {
  console.log('errorHandler', error);
  response.sendStatus(500);
};
