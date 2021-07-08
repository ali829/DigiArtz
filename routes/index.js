const path = require('path');

const pagesRouting = require('./routing-modules/pages');
const adminCategories = require('./routing-modules/admin_categories');


let listenPort = (app) => {
    //listening on a port 
    const port = 3000;

    app.listen(port, () => {
        console.log(`Your app is Running in port ${port}`);
    })
}

let setupRouter = (app) => {
    app.use('/admin/categories/', adminCategories);
    app.use('/', pagesRouting);
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