const { todoResolver } = require("./components/todo");

const typeDefs = require("./schema/types");

const resolvers = [todoResolver];

module.exports = { typeDefs, resolvers };
