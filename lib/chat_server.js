var io = require('socket.io');
var _ = require('./underscore');

var createChat = function (server) {
  io = io.listen(server);
  // io.sockets.manager.rooms = { "lobby": [] };
  io.sockets.on('connection', function (socket) {

    console.log(io.sockets.manager.rooms[""]);

    var usernames = _.map(io.sockets.manager.rooms[""], function (socketId) {
      return allUsers[socketId];
    }); // list of usernames in room is not quite there....
    console.log(usernames);
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
    });
    socket.on('disconnect', function () {
      delete allUsers[socket.id]
    })
  });

};

var allUsers = {};

exports.createChat = createChat;