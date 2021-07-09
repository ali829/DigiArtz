const mongoose = require('mongoose');
const Category = require('../models/category');
mongoose.set('useFindAndModify', false);

//get all the categories
exports.findAll = (req , res) => {
    Category.find((err, data) => {
        if (err) console.log(err);
        res.setHeader('Content-type', 'application/json')
        res.json(data);
    })
}
//get one category

exports.findOne = (req , res) => {
    Category.findById(req.params.idCat)
    .then(category => {
        if (!category) {
            res.status(404).send({message:'category not found'})
        }
        res.send(category)
    })
    .catch(err => {
        return res.status(500).send(err)
    })
}

//create a category doc
exports.create = (req, res) => {
    Category.findOne({slug: req.body.slug}, (err, categoryWithSlug) => {
        if (!categoryWithSlug) {
            let category = new Category({
                name: req.body.name,
                slug: req.body.slug
            })
            category.save()
                .then((data) => {
                    res.setHeader('Content-type', 'application/json')
                    res.json(data)
                })
                .catch(err => {
                    console.log(err);
                })
        }else{
            return res.send({message: 'this category is already exist'})
        }
    })
}

//update a category 
exports.update =  (req , res) => {
    Category.findByIdAndUpdate(req.params.idCat , {name:req.body.name , slug:req.body.slug})
    .then(category => {
        if (!category) {
            return res.status(404).send({message: 'category not found'})
        }else{
            res.send(category)
        }
    })
    .catch(err => {
        return res.status(500).send(err);
    })
}


//delete a category 
exports.delete = (req , res) => {
    Category.findByIdAndDelete(req.params.idCat)
    .then(category => {
        if (!category) {
            return res.status(404).send({message: 'category not found'})
        }else{
            res.send(category)
        }
    })
    .catch(err => {
        return res.status(500).send(err)
    })
}