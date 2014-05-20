var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')


io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});