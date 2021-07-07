const express = require('express');
const router = express.Router();


//first page 
router.get('/', (req, res) => {
    res.render('pages/index.ejs', {
        title: 'home page',
    });
});

module.exports = router;