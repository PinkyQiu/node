var file = require('../modules/file');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
var sd = require('silly-datetime');

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
        uploadDir: __dirname + '/../tempup/',
    });

    form.parse(req, (err, fields, files, next) => {
        console.log(fields, files);
        if (err) {
            next();
            return;
        }
        var size = parseInt(files.tupian.size);
        if (size > 20000) {
            res.send('图片尺寸应该小于1M');
            fs.unlink(files.tupian.size, function () {});
            return;
        }
        var ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');
        var ran = parseInt(Math.random() * 89999 + 10000);
        var extname = path.extname(files.tupian.name);

        var wenjianjia = fields.wenjianjia;
        var oldPath = files.tupian.path;
        var newPath = path.normalize(__dirname + '/../uploads/' + wenjianjia + '/' + ttt + ran + extname);
        fs.rename(oldPath, newPath, function (err) {
            if (err) {
                res.send('改名失败')
            }
            res.send('成功')
        });
    });
    return;
};