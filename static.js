var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function (req, res) {

    var pathname = url.parse(req.url).pathname;
    if (pathname === '/') {
        pathname = 'index.html'
    }
    fs.readFile('./static' + pathname, function (err, data) {
        if (err) {
            fs.readFile('./static/404.html', function (err, data) {
                res.writeHead(200, {
                    'Content-type': 'text/html;charset=UTF8',
                });
                res.end()
            })
            return
        };
        res.end(data)
    });
});

server.listen(3000, '127.0.0.1')