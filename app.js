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
    // _db.count("Class", {}, function (err, res) {
    //     console.log(res);
    // })
    _db.getPage("Class", { index: 1, size: 2 }, { ParentID: "7e146391-25d8-4ea2-94a7-bb0061cf9797" }, {}, function (err, data) {
        // caonsole.log("over");
        console.log(data);
        res.send("ok");
    })

});
app.use('/class', auth.isAuthenticated, require('./routes/Class'));
app.use('/content', auth.isAuthenticated, require('./routes/Content'));
app.use('/file', auth.isAuthenticated, require('./routes/Files'));
app.use('/news', auth.isAuthenticated, require('./routes/News'));

app.listen(process.env.PORT || 3000);