var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).href;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8000);
  console.log("Server has started.");
}

function route(pathname) {
  console.log("About to route a request for " + pathname);
}

start(route);