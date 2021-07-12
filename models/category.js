const mongoose = require('mongoose');

let categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type:String
    },
    products:[{
        type: mongoose.Types.ObjectId,
        ref:'Product'
    }],
    image:  {
        type:String,
        required:true
    }
},{
    timestamps: true
});

let Category = module.exports = mongoose.model('Category', categorySchema);