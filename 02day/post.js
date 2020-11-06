var http = require('http');
var querystring = require('querystring');
var formidable = require('formidable');
var sd = require('silly-datetime');
var url = require('url');
var path = require('path');
var fs = require('fs');

http.createServer(function (req, res) {
    // res.writeHead(200, {
    //     'Content-type': 'text/html;charset=UTF8'
    // })
    // if (req.url === '/dopost' && req.method.toLowerCase() === 'post') {
    //     var alldata = '';
    //     req.addListener('data', (chunk) => {
    //         alldata += chunk;
    //     })
    //     req.addListener('end', (chunk) => {
    //         var datastring = alldata.toString();
    //         var dataobj = querystring.parse(datastring)
    //         console.log(dataobj)
    //         console.log(dataobj.sex)
    //         res.end('success')
    //     })
    // }

    if (req.url === '/api/upload' && req.method.toLowerCase() === 'post') {

        // parse a file upload
        const form = formidable({
            multiples: true
        });

        form.parse(req, (err, fields, files) => {
            var date = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
            var random = parseInt(Math.random() * 89999 + 10000);
            var extname = path.extname(files.tupian.name);
            var oldPath = files.tupian.path;
            var newPath = __dirname + '/upload' + date + random + extname;
            fs.rename(oldPath, newPath, function () {
                res.writeHead(200, {
                    'content-type': 'application/json'
                });
                console.log(oldPath, newPath)
                res.end(JSON.stringify({
                    fields,
                    files
                }, null, 2));
                // })
            });

            return;
        })
    }

}).listen(3000, '127.0.0.1');