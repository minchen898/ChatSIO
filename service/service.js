var http = require('http');
var io = require('socket.io');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World');
  res.end();
});

server.listen(8002);

var server_io = io.listen(server);
server_io.sockets.on('connection', function(socket){
  //setInterval(function() {
  //  socket.emit('date', {'date': new Date()});
  //}, 1000);
  console.log('Connect!');
  console.log(socket);
});
