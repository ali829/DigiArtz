const express = require('express');

const router = express.Router();


//first page
router.get('/' , (req , res) => {
    res.send('this admin area...');
})

module.exports = router;