var fs = require('fs');

exports.getAllAlbums = function (callback) {
    fs.readdir('./uploads/', function (err, files) {
        var allAlbum = [];
        (function iterator(i) {
            console.log(files)
            if (i === files.length) {
                console.log(allAlbum)
                callback(allAlbum);
                return;
            }
            fs.stat('./uploads/' + files[i], function (err, stats) {
                if (stats.isDirectory()) {
                    allAlbum.push(files[i]);
                }
                iterator(i + 1)
            })
        })(0);

    })

    return ['小猫', '小狗'];
}