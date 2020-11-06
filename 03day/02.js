var express = require('express');
var app = express();

app.use(express.static("./public"));

app.get('/haha', function (req, res) {
    res.send('哈哈页面')
})
app.listen(3000);