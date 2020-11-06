var express = require('express')

var app = express()

app.use('/admin', function (req, res) {
    res.write(req.originalUrl);
    res.write(req.baseUrl);
    res.write(req.path);
    res.end()
})
app.listen(3000)