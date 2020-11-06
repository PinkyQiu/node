var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        'news': ['我是新闻啊', '我也是啊'],
    });
});

app.listen(3000);