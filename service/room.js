function room() {

  this.onMemberJoin = function(socket, name) {

  }

  this.onNewMessage = function(socket, message) {
    socket.emit('deliver', socket.id + ': ' + message);
  }
}

module.exports = room;
