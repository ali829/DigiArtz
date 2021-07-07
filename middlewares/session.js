const session = require('express-session');


let useSession = (app) => {
  app.set('trust proxy', 1) // trust first proxy
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
}

module.exports = {useSession : useSession};