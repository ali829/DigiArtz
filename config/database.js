const mongoose = require('mongoose');

const url = 'mongodb://localhost/DigiArtz';

let db = mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true ,  useCreateIndex: false })
.then(() => console.log('mongoose is connecting...'))
.catch(err => console.error(err))
//get notified if we connect succefully or connect error
// const db = mongoose.connection;
// db.on('error' , console.error.bind(console , 'connection error'))
// db.once('open' , () => {
//     console.log('mongoose is connecting...');
// });

module.exports = db;