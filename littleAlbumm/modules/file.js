var fs = require('fs');

exports.getAllAlbums = function (callback) {
    fs.readdir('./uploads/', function (err, files) {
        if (err) {
            callback('找不到文件', null);
        }
        var allAlbum = [];
        (function iterator(i) {
            if (i === files.length) {
                callback(null, allAlbum);
                return;
            }
            fs.stat('./uploads/' + files[i], function (err, stats) {
                if (err) {
                    callback('找不到' + files[i], null)
                }
                if (stats.isDirectory()) {
                    allAlbum.push(files[i]);
                }
                iterator(i + 1)
            })
        })(0);

    })
};

exports.getAllImagesByAlbumname = function (albumname, callback) {
    fs.readdir('./uploads/' + albumname, function (err, files) {
        if (err) {
            callback('找不到文件', null);
            return;
        }
        var allImages = [];
        (function iterator(i) {
            if (i === files.length) {
                callback(null, allImages);
                return;
            }
            fs.stat('./uploads/' + albumname + '/' + files[i], function (err, stats) {
                if (err) {
                    callback('找不到' + files[i], null);
                    return;
                }
                if (stats.isFile()) {
                    allImages.push(files[i]);
                }
                iterator(i + 1)
            })
        })(0);

    })
}