var http = require('http');
var io = require('socket.io');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end();
});

server.listen(8002);

var server_io = io.listen(server);
server_io.sockets.on('connection', function(socket){
  socket.on('message', function(message){
    console.log('RECEIVE:' + message);
    console.log(socket.emit);
    console.log(socket);
    socket.emit('deliver', message);
  });
});
