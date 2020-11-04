var http = require('http')
var querystring = require('querystring')
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html;charset=UTF8'
    })
    if (req.url === '/dopost' && req.method.toLowerCase() === 'post') {
        var alldata = '';
        req.addListener('data', (chunk) => {
            alldata += chunk;
        })
        req.addListener('end', (chunk) => {
            var datastring = alldata.toString();
            var dataobj = querystring.parse(datastring)
            console.log(dataobj)
            console.log(dataobj.sex)
            res.end('success')
        })
    }

}).listen(3000, '127.0.0.1');