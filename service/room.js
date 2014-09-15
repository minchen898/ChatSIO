var members = require('./roomembers');

exports.onMemberJoin = function(socket, name) {
  members.join(socket.id, name);
  socket.emit('deliver', 'Welcome ' + name);
  socket.broadcast.emit('member_join', name);
  socket.emit('member_list', members.memberList());
  socket.broadcast.emit('member_list', members.memberList());
};

exports.onMemberLeave = function(socket) {
  var name = members.getName(socket.id);
  if(name) {
    members.leave(socket.id);
    socket.broadcast.emit('member_leave', name);
  }
  socket.broadcast.emit('member_list', members.memberList());
};

exports.onNewMessage = function(socket, message) {
  socket.emit('deliver', members.getName(socket.id) + ' : ' + message);
  socket.broadcast.emit('deliver', members.getName(socket.id) + ' : ' + message);
};
