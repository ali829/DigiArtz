const mongoose = require('mongoose');
const Category = require('../models/category');

//get all the categories
exports.findAll = (req , res) => {
    Category.find((err, data) => {
        if (err) console.log(err);
        res.setHeader('Content-type', 'application/json')
        res.json(data);
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
exports.update = (req , res) => {
    let id = mongoose.Types.ObjectId(req.params.id)
    Category.findByIdAndUpdate( id, {name: req.body.name , slug: req.body.slug} ,{new: true})
    .then((category) => {
        res.setHeader('Content-type', 'application/json')
        if(!category){
            return res.status(404).send({message: 'category not found'})
        }else{
            res.json(category)
        }
    })
    .catch(err => {
        return res.status(500).send(err);
    })
}


//selete a category 
exports.delete = (req , res) => {
    let id = mongoose.Types.ObjectId(req.params.id);
    Category.findByIdAndDelete(id)
    .then(category => {
        if(!category){
            res.send({message:'Category is not exist'})
        }
        res.json(category);
    })
    .catch(err => {
        return res.status(500).send(err);
    })
}