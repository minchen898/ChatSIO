exports.onMemberJoin = function(socket, name) {

};

exports.onNewMessage = function(socket, message) {
  socket.emit('deliver', socket.id + ': ' + message);
};
