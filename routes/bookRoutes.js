const express = require('express');
const router = express.Router();


router.route('/').get((req, res) => {
    res.send('GET All Book');
});

router.route('/').post((req, res) => {
    res.send('Post Book');
});

router.route('/getById').get((req, res) => {
    res.send('Get Book bY id');
})

router.route('/updateBook').put((req, res) => {
    res.send('update Book bY id');
})


router.route('/deleteBookbyId').delete((req, res) => {
    res.send('delete Book bY id');
})



module.exports = router;