const express = require('express');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();


//get list of categories
router.get('/', categoryController.findAll);


//add category
router.post('/add', categoryController.create);


//edit category
router.put(`/edit/:catId` , categoryController.update);


//delete category 
router.delete('/delete/:catId' , categoryController.delete);



module.exports = router;