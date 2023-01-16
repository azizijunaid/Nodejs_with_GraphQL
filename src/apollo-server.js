const { ApolloServer } = require("apollo-server-express");

const { todoService } = require("./components/todo");
const errorHandler = require("./error-handler");
const { resolvers, typeDefs } = require("./resolvers");

const serverConfig = {
  resolvers,
  typeDefs,
  formatError: errorHandler,
  context: ({ req }) => {
    return {
      todoService,
    };
  },
  plugins: [],
  // Enable playground in production.
  // TODO: Remove after testing
  introspection: true,
  playground: true,
};

const server = new ApolloServer(serverConfig);

module.exports = { server, serverConfig };
