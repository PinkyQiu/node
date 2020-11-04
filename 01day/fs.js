var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    var userid = parseInt(Math.random() * 89999 + 10000);
    console.log('欢迎' + userid);
    res.writeHead(200, {
        'Content-type': 'text/html;charset=UTF8',
    });
    fs.readFile('./text.txt', function (err, data) {
        if (err) {
            throw err
        };
        console.log(userid + '读取文件完毕');
        res.end(data);
    });
});

server.listen(3000, '127.0.0.1')