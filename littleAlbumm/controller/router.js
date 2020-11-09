var file = require('../modules/file');
var formidable = require('formidable');
var path = require('path');

exports.showIndex = function (req, res, next) {
    file.getAllAlbums(function (err, allAlbum) {
        if (err) {
            next();
            return;
        }
        res.render('index', {
            albums: allAlbum,
        });
    });
};

exports.showAlbum = function (req, res, next) {
    var albumname = req.params.albumname;
    file.getAllImagesByAlbumname(albumname, function (err, imagesArray) {
        if (err) {
            next();
            return;
        }
        res.render('album', {
            albumname: albumname,
            images: imagesArray,
        });
    });
};

exports.showUp = function (req, res, next) {
    file.getAllAlbums(function (err, allAlbum) {
        if (err) {
            next();
            return;
        }
        res.render('up', {
            albums: allAlbum,
        });
    });
};

exports.doPost = function (req, res, next) {
    var form = formidable({
        multiples: true,
        uploadDir: '/upload/'
    });

    form.parse(req, (err, fields, files) => {
        res.writeHead(200, {
            'content-type': 'application/json'
        });
        res.end(JSON.stringify({
            fields,
            files
        }, null, 2));
    });

};