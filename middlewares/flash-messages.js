const express = require('express');
const app = express();

let customMessagesSetup = () => {
    app.use(require('connect-flash'));
    app.use(function (req, res, next) { 
        res.locals.messages = require('express-messages') (req , res); next(); 
    });
}

module.exports.customMessagesSetup = customMessagesSetup;