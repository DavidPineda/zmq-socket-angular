var express = require('express');
var http = require('http');
var zmq = require('zmq');
var sock = zmq.socket('pull');
var app = http.createServer(express());
var io = require('socket.io').listen(app);

sock.connect('tcp://127.0.0.1:1331');

io.sockets.on('connection', function (socket) {
  sock.on('message', function(msg) {
    socket.emit('message-name', msg.toString());
    console.log('work: %s', msg.toString());
  });
});

app.listen(9191, function() {
  console.log('Servidor corriendo en el puerto 9191');
});
