const getBooks = async (req, res) => {
    res.send('getBooks from service');
}

const addBook = async (req, res) => {
    res.send('add book from service');
}

const getbookById = async (req, res) => {
    res.send('getbook by id from service');
}

const updateBook = async (req, res) => {
    res.send('updateBook from service');
}

const deleteBookById = async (req, res) => {
    res.send('deleteBookById from controller');
}

module.exports = {
    getBooks,
    addBook,
    getbookById,
    updateBook,
    deleteBookById
}