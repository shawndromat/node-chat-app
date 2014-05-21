var io = require('socket.io');
var _ = require('./underscore');

var createChat = function (server) {
  io = io.listen(server);
  io.sockets.on('connection', function (socket) {
    socket.emit('blargh', { hello: 'san francisco' });
    socket.on('message', function(data){
      console.log(socket.id);
      socket.emit('broadcast', data);
      socket.broadcast.emit('broadcast', data);
    })
    socket.on('username', function(username){
      if ( _.values(allUsers).indexOf(username) >= 0 ) {
        socket.emit('invalidUsername', "Sorry that username is taken");
      } else {
        allUsers[socket.id] = username;
        socket.emit('validUsername', "You are logged in as " + username);
      }
    })
  });

};

var allUsers = {};

exports.createChat = createChat;