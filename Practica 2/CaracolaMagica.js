/*----------------------------------------------------------
             * Práctica 2: Servidor bola ocho
             * Fecha: 24-Marzo-2020
             * Autores:
             *           A01378916 Rafael Moreno Cañas
             *           A01379896 Erick Bautista Pérez
             *----------------------------------------------------------*/
const net = require("net");

net.createServer((socket) => {
    
    socket.name = socket.remoteAddress+":"+socket.remotePort;
    socket.write("Soy la caracola mágica. Hazme una pregunta de si y no.\n");
   
    socket.on("data", (data)=> {
        const answ = ["Prueba intentando de nuevo", "Es correcto", "Si", "No", 
    "Es falso", "Tal vez algún día", "Nada", "No lo se", "Nada", "Quizas"];
    
    const random = answ[Math.floor(Math.random() * answ.length)];
        
        socket.write(random + "\n");
        
    });
    
    socket.on("end", ()=> {
        console.log(socket.name+" se desconecto");
    });
}).listen(8080);
console.log("Servido ICP corriendo corriendo en el puerto 8080");
