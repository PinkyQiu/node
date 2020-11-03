var http = require('http')
var fs = require('fs')
var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'content-type': 'text/html;charset=UTF8'
    });

    // 判断是否有这个文件
    // fs.stat('./album/a', (err, stats) => {
    //     console.log(stats.isFile())
    // });

    // 读取文件
    fs.readdir('./album', (err, files) => {
        // 存放文件夹的数组
        var wenjianjia = [];

        (function iterator(i) {
            if (i === files.length) {
                console.log(wenjianjia)
                return
            }
            fs.stat('./album/' + files[i], function (err, stats) {
                // 如果是文件夹，则放进数组里
                if (stats.isDirectory()) {
                    wenjianjia.push(files[i])
                }
                iterator(i + 1)
            })
        })(0)
    })
    res.end()
})
server.listen(3000, '127.0.0.1')