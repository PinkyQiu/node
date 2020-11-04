var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    // var path = url.parse(req.url).pathname;
    var query = url.parse(req.url, true).query;
    var name = query.name;
    var age = query.age;
    var sex = query.sex;
    console.log('姓名：' + name, '年龄：' + age, '性别：' + sex)
    res.write('姓名：' + name, '年龄：' + age, '性别：' + sex)
    res.end();
});

server.listen(3000, '127.0.0.1');