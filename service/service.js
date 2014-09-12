var http = require('http');
var io = require('socket.io');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end();
});

server.listen(8002);

var server_io = io.listen(server);
server_io.sockets.on('connection', function(socket){
  sockets.on('message', function(message){
    socket.emit('broadcast', message);
  });
});
