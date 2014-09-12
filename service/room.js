var members = require('./roomembers');

exports.onMemberJoin = function(socket, name) {
  members.join(socket.id, name);
};

exports.onMemberLeave = function(socket) {
  members.leave(socket.id);
};

exports.onNewMessage = function(socket, message) {
  socket.emit('deliver', members.getName(socket.id) + ' : ' + message);
};
