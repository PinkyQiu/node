var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('form');
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/html;charset=UTF8');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body, null, 2));
});

app.listen(3000)