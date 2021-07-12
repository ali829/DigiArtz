const path = require('path');

const productsApi = require('./api/products-api');
const categoriesApi = require('./api/categories-api');


let listenPort = (app) => {
    //listening on a port 
    const port = 3000;

    app.listen(port, () => {
        console.log(`Your app is Running in port ${port}`);
    })
}

let setupRouter = (app) => {
    app.use('/api/categories/', categoriesApi);
    app.use('/api/products/', productsApi);
}

let setTemplateEngine = (app) => {
    //set template engine
    //?
    app.set('../views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
}

let useStatic = (app,express) => {
    //use static folder
    app.use(express.static(path.join(__dirname, 'public')));
}


module.exports = {
    listenPort: listenPort ,
    setupRouter: setupRouter,
    setTemplateEngine: setTemplateEngine,
    useStatic: useStatic
};