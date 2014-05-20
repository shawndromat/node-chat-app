var io = require('socket.io');

var createChat = function (server) {
  io = io.listen(server);
  io.sockets.on('connection', function (socket) {
    socket.emit('blargh', { hello: 'san francisco' });
    socket.on('message', function(data){
      console.log(data);
      socket.emit('broadcast', data);
      socket.broadcast.emit('broadcast', data);
    })
  });

};

exports.createChat = createChat;