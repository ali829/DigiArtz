const routes = require('./routes/index')
const database = require('./config/database');
const bodyParserMiddleware = require('./middlewares/body-parser');
const sessionMiddleware = require('./middlewares/session');
const flashMessagesMiddleware = require('./middlewares/flash-messages');
// const validator = require('express-validator');


//connection database 
database.db;

/////////////////////////express-session/////////////////////////
bodyParserMiddleware.app;


/////////////////////////express-session/////////////////////////
sessionMiddleware.app;


/////////////////express-messages//////////////////////////////
flashMessagesMiddleware.customMessagesSetup();

//routing
routes.app;