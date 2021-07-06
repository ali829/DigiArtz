const express = require('express');
const path = require('path');

//init application
const app = express();

//set template engine
//?
app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');

//get request 
app.get('/' , (req , res) => {
    res.send('is Working')
})

//use static folder
app.use(express.static(path.join(__dirname , 'public')));


//listening on a port 
const port = 3000;

app.listen(port , () => {
    console.log(`Your app is Running in port ${port}`);
} )

