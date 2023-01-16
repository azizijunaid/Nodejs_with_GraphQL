const types = `
  type Todo {
    id: Int
    name: String
  }

  input TodoInput {
    name: String
  }

  type Query {
    getTodoList: [Todo!]!
    getTodoById(id: Int!): Todo!
  }

  type Mutation {
    addTodo(todo: TodoInput!): Todo!
    deleteTodoById(id:Int!): String!
  }
`;

module.exports = types;
