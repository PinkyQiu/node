var http = require('http')
http.createServer(function (req, res) {
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
            console.log(alldata.toString())
            var dataobj = querystring.parse(datastring, null, null, {
                decodeURIComponent: gbkDecodeURIComponent
            })
            console.log(dataobj.name)
            console.log(dataobj.sex)
            res.end('success')
        })
    }

}).listen(80, '127.0.0.1');