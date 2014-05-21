(function (root) {
  var ChatApp = root.ChatApp = (root.ChatApp || {});
  var Chat = ChatApp.Chat = function (socket) {
    this.socket = socket;
    this.username = "mystery guest";
  }

  Chat.prototype.sendMessage = function (message) {
    var fullMessage = { username : this.username,
                          message : message }
    this.socket.emit('message', fullMessage);
  }

  Chat.prototype.setUsername = function (username) {
    this.username = username;
    this.socket.emit('username', username);
  }

})(this);