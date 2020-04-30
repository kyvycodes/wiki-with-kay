const express = require('express');
const router = express.Router();
// body parser middleware
router.use(express.urlencoded({ extended: false }));

router.get('/', async(req, res, next) => {
    try {
        res.send('WIKI');
    } catch (error) {
        next(error);
    }
});
module.exports = router;