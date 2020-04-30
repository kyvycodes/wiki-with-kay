const express = require('express');
const router = express.Router();

router.use(express.urlencoded ({ extended: false }));

router.get('/', async(req, res, next) => {
    try {
        res.send('USER');
    } catch (error) {
        next(error);
    }
});
module.exports = router;
