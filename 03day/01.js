var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('ninhao');
})

app.get('/haha', function (req, res) {
    res.send('哈哈页面');
})

app.get(/^\/student\/([\d]{10})$/, function (req, res) {
    res.send('学生学号' + req.params[0]);
})

app.get('/teacher/:gonghao', function (req, res) {
    res.send('老师学号' + req.params.gonghao)
})

app.listen(3000)