var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./resource/key.pem'),
  cert: fs.readFileSync('./resource/cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);