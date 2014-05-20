var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var route = require('./router');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  console.log(request.url);
  route.route(request.url, response);
  // response.end('Hello World\n');
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');