var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var route = require('./router');
var chatServer = require('./lib/chat_server');

var app = http.createServer(function (request, response) {
  console.log(request.url);
  route.route(request.url, response);
  // response.end('Hello World\n');
}).listen(8080);

chatServer.createChat(app);

console.log('Server running at http://127.0.0.1:8080/');