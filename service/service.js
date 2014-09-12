var http = require('http');
var io = require('socket.io');

//var members = require('roomembers');
var room = require('room');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end();
});

server.listen(8002);

var server_io = io.listen(server);
server_io.sockets.on('connection', function(socket){
  //socket.on('join'),

  socket.on('message', function(message){
    room.onNewMessage(socket, message);
    //socket.emit('deliver', message);
  });
});
