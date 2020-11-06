var file = require('../modules/file');

exports.showIndex = function (req, res) {
    file.getAllAlbums(function (allAlbum) {
        res.render('index', {
            'albums': allAlbum
        });
    })
};

exports.showAlbum = function (req, res) {
    res.send('相册' + req.params.albumname);
};