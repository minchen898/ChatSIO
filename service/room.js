var members = require('./roomembers');

exports.onMemberJoin = function(socket, name) {
  members.join(socket.id, name);
  socket.emit('deliver', 'Welcome ' + name);
  socket.broadcast.emit('member_join', name);
};

exports.onMemberLeave = function(socket) {
  members.leave(socket.id);
  socket.broadcast.emit('member_leave', members.getName(socket.id));
};

exports.onNewMessage = function(socket, message) {
  socket.emit('deliver', members.getName(socket.id) + ' : ' + message);
  socket.broadcast.emit('deliver', members.getName(socket.id) + ' : ' + message);
};
