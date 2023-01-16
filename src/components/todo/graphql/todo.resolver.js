const todoResolver = {
  Query: {
    getTodoList: async (_, __, { todoService }) => {
      return await todoService.getAll();
    },
    getTodoById: async (_, { id }, { todoService }) => {
      return await todoService.getById(id);
    },
  },
  Mutation: {
    addTodo: async (_, { todo }, { todoService }) => {
      return await todoService.add(todo);
    },
    deleteTodoById: async (_, { id }, { todoService }) => {
      return await todoService.deleteById(id);
    },
  },
};

module.exports = todoResolver;
