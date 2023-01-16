const { ERROR_CODES } = require("./error-codes");

// const {
//   ApolloServerPluginUsageReporting,
// } = require("@apollo/server/plugin/usageReporting");

const Severity = {
  /** Fatal denotes app was killed  */
  Fatal: "FATAL",
  /** Critical denotes app has stopped functioning properly */
  Critical: "CRITICAL",
  /** Error default */
  Error: "ERROR",
  /** Info denotes non-breaking errors */
  Info: "INFO",
};

// const httpErrorPlugin = {
//   async requestDidStart() {
//     return {
//       async willSendResponse(response) {
//         console.log(
//           "httpErrorPlugin",
//           response,
//           response.code === ERROR_CODES.NOT_FOUND
//         );
//         if (response.code === ERROR_CODES.NOT_FOUND) {
//           response.http.status = 404;
//         }
//       },
//     };
//   },
// };

// const httpErrorPlugin = ApolloServerPluginUsageReporting({
//   sendErrors: {
//     transform: (err) => {
//       console.log("err", err);
//       // Make sure that a specific pattern is removed from all error messages.
//       err.message = err.message.replace(/x-api-key:[A-Z0-9-]+/, "REDACTED");
//       return err;
//     },
//   },
// });

module.exports = {
  // httpErrorPlugin,
  Severity,
};
