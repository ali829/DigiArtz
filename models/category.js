const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

let categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type:String
    }
});

module.exports = mongoose.model('Category', categorySchema);