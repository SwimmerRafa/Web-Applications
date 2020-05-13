/*----------------------------------------------------------
             * Práctica 2: Servidor Chat
             * Fecha: 24-Marzo-2020
             * Autores:
             *           A01378916 Rafael Moreno Cañas
             *           A01379896 Erick Bautista Pérez
             *----------------------------------------------------------*/

const net = require("net");
var sockets = [];

net.createServer((socket) => {
  socket.name = socket.remoteAddress + ":" + socket.remotePort;
  sockets.push(socket);
  console.log(socket.name + " se unió");
  socket.write("Bienvenido! \n");
  console.log(sockets.length);
  for (var i = 0; i < sockets.length; i++) {
    sockets[i].user = i;
  }
  socket.on("data", data => {
    if (String(data).trim() == "quit") {
      socket.end();
    }

    for (var i = 0; i < sockets.length; i++) {
      if (socket.user == sockets[i].user) {
        continue;
      }
      sockets[i].write(socket.user + ": " + String(data));
    }
  });
  socket.on("end", () => {
    console.log(socket.name + " se desconecto");
    for (var i = 0; i < sockets.length; i++) {
      if (socket.remotePort == sockets[i].remotePort) {

        sockets.splice(i, 1);

      }
    }

    for (var j = 0; j < sockets.length; j++) {
      console.log(sockets[j].name);
    }
  });

}).listen(8080);
console.log("Servido ICP corriendo corriendo en el puerto 8080");