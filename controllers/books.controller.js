const bookService = require('../services/book.service');

const getBooks = (req, res) => bookService.getBooks(req, res);


const addBook = (req, res) => bookService.addBook(req, res);

const getbookById = (req, res) => bookService.getbookById(req, res);

const updateBook = (req, res) => bookService.updateBook(req, res);

const deleteBookById = (req, res) => bookService.deleteBookById(req, res)



module.exports = {
    getBooks,
    addBook,
    getbookById,
    updateBook,
    deleteBookById
}