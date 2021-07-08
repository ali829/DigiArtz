const express = require('express');
const Category = require('../../models/category');

const router = express.Router();


//first page
router.get('/' , (req , res) => {
    res.send('here will show all categories');
})

//POST add-category
router.post('/add' , (req , res) => {
    let name = req.body.name;
    let slug = req.body.slug;
    const category = new Category({name:name , slug:slug});
    console.log(category);
})
//GET add-category
router.get('/add' , (req , res) => {
    res.send('here to add new category')
})

module.exports = router;