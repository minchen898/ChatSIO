var room = {

  function onMemberJoin(socket, name) {

  };

  function onNewMessage(socket, message) {
    socket.emit('deliver', socket.id + ': ' + message);
  };
}

module.exports = room;
