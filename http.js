var http = require('http');
var fs = require('fs');
var url = require('url');

// http.createServer(function (request, response) {
//   //   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   //   response.write("Hello World");
//   //   response.end();

//   // 或者
//   fs.createReadStream(`${__dirname}/resource/index.html`).pipe(response);
// }).listen(8080, '127.0.0.1');
// console.log('Server running on port 8080.');


var destinationFile, fileSize, uploadedBytes;

http.createServer(function (request, response) {
  response.writeHead(200);
  destinationFile = fs.createWriteStream("destination.md");
  request.pipe(destinationFile);
  fileSize = request.headers['content-length'];
  uploadedBytes = 0;

  request.on('data', function (d) {
    uploadedBytes += d.length;
    var p = (uploadedBytes / fileSize) * 100;
    response.write("Uploading " + parseInt(p, 0) + " %\n");
  });

  request.on('end', function () {
    response.end("File Upload Complete");
  });
}).listen(3030, function () {
  console.log("server started");
});