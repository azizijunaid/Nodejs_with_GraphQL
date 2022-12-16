const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo.contoller');

router.get('/', (req, res) => todoController.getTodos(req, res));
router.get('/:id', (req, res) => todoController.getTodoById(req, res));
router.post('/', (req, res) => todoController.addTodo(req, res));
router.put('/', (req, res) => todoController.getTodos(req, res));
router.delete('/:id', (req, res) => todoController.deleteTodo(req, res));

module.exports = router;