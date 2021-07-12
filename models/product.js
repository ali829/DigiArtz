const mongoose = require('mongoose');

const Float = require('mongoose-float').loadType(mongoose , 2)

let productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
    },
    qty:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:'Category'
    },
    Price:{
        type:Float,
        required:true
    }
})

const Product = mongoose.model('Product' , productSchema);