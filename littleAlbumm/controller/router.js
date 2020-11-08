var file = require('../modules/file');

exports.showIndex = function(req, res, next) {
    file.getAllAlbums(function(err, allAlbum) {
        if (err) {
            next();
            return;
        }
        res.render('index', {
            'albums': allAlbum
        });
    })
};

exports.showAlbum = function(req, res, next) {
    var albumname = req.params.albumname;
    file.getAllImagesByAlbumname(albumname, function(err, imagesArray) {
        if (err) {
            next();
            return;
        }
        res.render('album', {
            'albumname': albumname,
            'images': imagesArray
        })
    })
};