const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage')
// body parser middleware
router.use(express.urlencoded({ extended: false }));

console.log(addPage)
router.get('/', async(req, res, next) => {
    try {
        res.send('WIKI1');
    } catch (error) {
        next(error);
    }
});
router.post('/', async(req, res, next) => {
    try {
        // console.log(req.body)
        res.json(req.body)
    } catch (error) {
        next(error);
    }
});
router.get('/add', async(req, res, next) => {
    try {
        res.send(addPage());
    } catch (error) {
        next(error);
    }
});


module.exports = router;
