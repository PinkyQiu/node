var http = require('http');
var server = http.createServer(function (req, res) {
    var url = req.url;
    res.writeHead(200, {
        'Content-type': 'text/html;charset=UTF8'
    });
    if (url.substr(0, 9) === '/student/') {
        var studentId = url.substr(9);
        if (/\d{10}/.test(studentId)) {
            res.end('你要查询的学生的学号是' + studentId);
        } else {
            res.end('查询的学生学号不正确，请核实');
        }
    } else if (url.substr(0, 9) === '/teacher/') {
        var teacherId = url.substr(9);
        if (/\d{6}/.test(teacherId)) {
            res.end('你要查询的老师的学号是' + teacherId);
        } else {
            res.end('查询的老师学号不正确，请核实');
        }
    } else {
        res.end('请检查url');
    }
});

server.listen(3000, '127.0.0.1');