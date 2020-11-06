// var ejs = require('ejs');

// var str = '今天我买了个iphone<%= a %>s';

// var data = {
//     a: 6
// }

// var html = ejs.render(str, data);

// console.log(html)

var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    })
    fs.readFile('./views/index.ejs', function (err, data) {
        var template = data.toString();
        var diractory = {
            a: 6
        };
        var html = ejs.render(template, diractory);
        res.end(html)
    })


}).listen(3000, '127.0.0.1');