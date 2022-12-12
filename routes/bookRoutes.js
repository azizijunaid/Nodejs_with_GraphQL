const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books.controller');

router.route('/').get((req, res) => bookController.getBooks(req, res));

router.route('/').post((req, res) => bookController.addBook(req, res));

router.route('/getbookById').get((req, res) => bookController.getbookById(req, res));

router.route('/updateBook').put(() => bookController.updateBook(req, res));

router
  .route('/deleteBookbyId')
  .delete((req, res) => bookController.deleteBookById(req, res));

module.exports = router;
