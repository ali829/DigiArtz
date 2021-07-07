//node modules
const express = require('express');

//local modules
const routes = require('./routes/index')
const database = require('./config/database');
const bodyParser = require('./middlewares/body-parser')
const  session = require('./middlewares/session');
const flashMessages = require('./middlewares/flash-messages')
// const validator = require('express-validator');

//init application
const app = express();

//connection database 
database.db;

/////////////////////////routing///////////////////////
//setup router
routes.setupRouter(app);

//listen on a port
routes.listenPort(app);

//setup template engine 
routes.setTemplateEngine(app);

//setup static folder
routes.useStatic(app,express)

//////////////////////middleware//////////////////
//body-parser
bodyParser.parseBody(app);
//session 
session.useSession(app);
//messages
flashMessages.customMessagesSetup(app);