var http = require('http');
var io = require('socket.io');

var room = require('./room');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end();
});

server.listen(8002);

var server_io = io.listen(server);
server_io.sockets.on('connection', function(socket){
  socket.on('disconnect', function() {
    room.onMemberLeave(socket);
  });

  socket.on('join', function(name) {
    room.onMemberJoin(socket, name);
  });

  socket.on('message', function(message) {
    room.onNewMessage(socket, message);
  });
});
