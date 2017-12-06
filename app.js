var express = require('express'),
    exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser')
var config = require('./config');
var auth = require('./lib/authority');

var app = express();
app.use(cookieParser("likui"));
app.use(function (req, res, next) {
    res.cookie('name', { name: "123", age: 18 }, { signed: true });
    next();
});

app.engine('html', exphbs.create({ defaultLayout: 'main', extname: '.html' }).engine);
app.set('view engine', 'html');


app.get('/', function (req, res) {
    res.send("ok");
});
app.use('/class', auth.isAuthenticated, require('./routes/Class'));

app.listen(process.env.PORT || 3000);