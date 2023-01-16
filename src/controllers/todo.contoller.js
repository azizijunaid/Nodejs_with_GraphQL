const todoService = require('../services/todo.service');


const login = (req, res) => todoService.login(req, res);

const getTodos = (req, res) => todoService.getTodos(req, res);

const addTodo = (req, res) => todoService.addTodo(req, res);

const getTodoById = (req, res) => todoService.getTodoById(req, res);

const updateTodo = (req, res) => todoService.updateTodo(req, res);

const deleteTodo = (req, res) => todoService.deleteTodo(req, res);

module.exports = {
  getTodos,
  addTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  login
};
