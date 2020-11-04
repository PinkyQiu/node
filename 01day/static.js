var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var server = http.createServer(function (req, res) {

    var pathname = url
        .parse(req.url)
        .pathname;
    var extmime = path.extname(pathname);
    if (pathname === '/') {
        pathname = 'index.html'
    }

    fs
        .readFile('./static/' + pathname, function (err, data) {
            if (err) {
                fs
                    .readFile('./static/404.html', function (err, data) {
                        res.writeHead(404, {'Content-type': 'text/html;charset=UTF8'});
                        res.end(data)
                    })
                return
            };
            var mime = getMime(extmime);
            res.writeHead(200, {'Content-type': mime});
            res.end(data)
        });
});

function getMime(extmime) {
    switch (extmime) {
        case
            '.html':
            return 'text/html'
            break;
        case
            '.jpg':
            return 'image/jpg'
            break
    }
}

server.listen(3000, '127.0.0.1')