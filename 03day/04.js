var express = require('express');

var app = express();

app.use('/', function (req, res) {
    console.log(req.query)
    res.end();
});

app.listen(3000);