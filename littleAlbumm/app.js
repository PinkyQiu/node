var express = require('express');

var app = express();

var router = require('./controller/router');

var file = require('./modules/file');

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', router.showIndex);

app.get('/:albumname', router.showAlbum);



app.listen(3000);