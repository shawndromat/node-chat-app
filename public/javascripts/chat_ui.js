(function (root) {
  var ChatApp = root.ChatApp = (root.ChatApp || {});
  var ChatUI = ChatApp.ChatUI = function () {
    this.socket = socket;
  }

  ChatUI.prototype.chatHandler = function(chatObject){
    $('#form-chat').submit(function (event) {
      event.preventDefault();
      var text = $(this).find('#chat-text').val();
      chatObject.sendMessage(text);
    });

    $('#form-username').submit(function (event){
      event.preventDefault();
      var username = $(this).find('#username').val();
      chatObject.setUsername(username);
    })
  };

})(this);