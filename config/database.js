const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/DigiArtz';

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true})
//get notified if we connect succefully or connect error
const db = mongoose.connection;
db.on('error' , console.error.bind(console , 'connection error'))
db.once('open' , () => {
    console.log('mongoose is connecting...');
});

module.exports = db;