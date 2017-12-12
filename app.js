var express = require('express'),
    exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser')
var config = require('./config');
var auth = require('./lib/authority');
var _db = require('./lib/_db');

var app = express();
app.use(cookieParser("likui"));
app.use(function (req, res, next) {
    res.cookie('name', { name: "123", age: 18 }, { signed: true });
    next();
});

app.engine('html', exphbs.create({ defaultLayout: 'main', extname: '.html' }).engine);
app.set('view engine', 'html');


app.get('/', function (req, res) {
  
});
app.use('/class', auth.isAuthenticated, require('./routes/Class'));
app.use('/content', auth.isAuthenticated, require('./routes/Content'));
app.use('/file', auth.isAuthenticated, require('./routes/Files'));
app.use('/news', auth.isAuthenticated, require('./routes/News'));

app.listen(process.env.PORT || 3000);