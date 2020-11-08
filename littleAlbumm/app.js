var express = require('express');

var app = express();

var router = require('./controller/router');

var file = require('./modules/file');

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(express.static('./uploads'));

app.get('/', router.showIndex);

app.get('/:albumname', router.showAlbum);

app.use(function(req, res) {
    res.render('err')
})



app.listen(3000);