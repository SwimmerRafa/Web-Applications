const net = require("net");
net.createServer((socket) => {
    socket.name = socket.remoteAddress+":"+socket.remotePort;
    socket.write("Hola \n");
    socket.write("¿Cómo te llamas? \n")
    socket.on("data", (data)=> {
        socket.write("Mucho gusto "+ data);
        console.log(String(data));
    });
    socket.on("end", ()=> {
        console.log(socket.nombre+" se desconecto");
    });
}).listen(8080);
console.log("Servido ICP corriendo");

