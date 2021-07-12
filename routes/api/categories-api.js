const express = require('express');
const categoryController = require('../../controllers/category.controller');
const upload = require('../../middlewares/upload');

const router = express.Router();


//get list of categories
router.get('/', categoryController.findAll);

//find products by categories
router.get('/products/:idCat' , categoryController.findProductsByCat);

//get single category
router.get('/:idCat' , categoryController.findOne);

//add category
router.post('/add', upload.single('image') , categoryController.create);

//edit category
router.put(`/edit/:idCat` ,upload.single('image'), categoryController.update);

//delete category 
router.delete('/delete/:idCat' , categoryController.delete);



module.exports = router;