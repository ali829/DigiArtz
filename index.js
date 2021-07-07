const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const database = require('./config/database');

//////////////////////////////////database setup//////////////////////////////////
//connection database 
mongoose.connect(database.url , {useNewUrlParser: true, useUnifiedTopology: true})
//get notified if we connect succefully or connect error
const db = mongoose.connection;
db.on('error' , console.error.bind(console , 'connection error'))
db.once('open' , () => {
    console.log('mongoose is connecting...');
});
////////////////////////////////////////////////////////////////////////////////

//init application
const app = express();

/////////////////////////////Routing///////////////////////////////////////////
//setup routes
const pagesRouting = require('./routes/pages');
const adminRouting = require('./routes/admin');


app.use('/admin' , adminRouting);
app.use('/' , pagesRouting);

//listening on a port 
const port = 3000;

app.listen(port , () => {
    console.log(`Your app is Running in port ${port}`);
} )
/////////////////////////////////////////////////////////////////////////////


//set template engine
//?
app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');

//use static folder
app.use(express.static(path.join(__dirname , 'public')));
