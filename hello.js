var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, resp) {
    fs.readFile('./test.html', function (res, data) {
        // resp.writeHead(200, { 'Content-type': 'text/html' });
        resp.end(data);
    });
});

server.listen(3000, '127.0.0.1');
console.log(11)