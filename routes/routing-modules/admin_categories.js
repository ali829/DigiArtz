const express = require('express');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();


//get list of categories
router.get('/', categoryController.findAll);

//get single category
router.get('/:idCat' , categoryController.findOne)

//add category
router.post('/add', categoryController.create);

//edit category
router.put(`/edit/:idCat` , categoryController.update);

//delete category 
router.delete('/delete/:idCat' , categoryController.delete);



module.exports = router;