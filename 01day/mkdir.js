var http = require('http')
var fs = require('fs')
var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'content-type': 'text/html;charset=UTF8'
    })
    fs.mkdir('./album/b', {
        recursive: true
    }, (err) => {
        if (err) throw err;
    });
    res.end()
})
server.listen(3000, '127.0.0.1')