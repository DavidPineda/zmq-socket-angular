'use strict';

const zmq = require('zmq');
const sock = zmq.socket('push');
const uuid = require('uuid');

// Se conecta a la cola de mensajes
sock.bindSync('tcp://127.0.0.1:1331');

setInterval(() => {
  let message = `message con id ${uuid.v4()}`;
  sock.send(JSON.stringify(message));
}, 2000);
