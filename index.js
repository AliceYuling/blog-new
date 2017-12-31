var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var config = require('config-lite')(__dirname);
var ejs = require('ejs');
var path = require('path');
var mongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var routes = require('./routers/index');
require('./schemas/article');
var app = express();

var conn = mongoose.connect(config.mongodb, {
  useMongoClient: true
});

app.use(bodyParser());
routes(app);
//静态文件托管
app.use('/public', express.static(path.join(__dirname, '/public')));

app.use(cookieParser);

//session中间件设置
app.use(session({
  secret: config.session.secret,
  saveUninitialized: false,
  cookie: {
  	maxAge: config.session.maxAge
  },
  resave: false,
  store: new mongoStore({
    url: 'mongodb://localhost:27017/' + config.db,
    collection: 'session'
  })
}));

//模板引擎设置
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


app.listen(config.port);