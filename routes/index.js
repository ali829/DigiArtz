const express = require('express');
const path = require('path');
var flash = require('connect-flash');
//init application
const app = express();

const pagesRouting = require('./routing-modules/pages');
const adminRouting = require('./routing-modules/admin');


app.use('/admin' , adminRouting);
app.use('/' , pagesRouting);

//listening on a port 
const port = 3000;

app.listen(port , () => {
    console.log(`Your app is Running in port ${port}`);
} )

//set template engine
//?
app.set('../views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');

//use static folder
app.use(express.static(path.join(__dirname , 'public')));

//use flash middleware
app.use(flash());

module.exports = app;