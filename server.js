var http = require('http');

var server = http.createServer();
var msg;

server.on('request', function(req, res) {
    switch (req.url) {
        case '/taro':
            msg = '僕の名前は田中太郎';
            break;
        case '/hanako':
            msg = '私の名前は山田花子';
            break;
        default:
            msg = '名前はまだない';
            break;
    }
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    res.write(msg);
    res.end();
});
server.listen(8080);
console.log("server listening ...");
