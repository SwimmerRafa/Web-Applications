/*----------------------------------------------------------
             * Práctica 2: Servidor Knock knock
             * Fecha: 24-Marzo-2020
             * Autores:
             *           A01378916 Rafael Moreno Cañas
             *           A01379896 Erick Bautista Pérez
             *----------------------------------------------------------*/
const net = require("net");
net.createServer((socket) => {
    
    socket.name = socket.remoteAddress+":"+socket.remotePort;
    socket.write("Toco toc. (Escribe: Quien es? )\n");
    const toc = ["Andrés", "Lola", "Talandas", "El Big", "Abraham", 
    "Debora", "Saco", "Sobo", "Veo", "Elvis" ];
    const toc2 = ["El que viene cada mes.\n", "¡Lo'ladrones! ¡¡Abre o tumbamos la puerta!!\n", 
    "Yo muy bien, ¿y tú?\n", "El BigtHub\n", "Abraham la puerta\n",
    "Esta\n", "Esta\n", "Esta\n", "Esta\n", "El bisteck\n"];
    const index = Math.floor(Math.random() * (9 - 0) + 0);
    
   
    socket.on("data", (data)=> {
        if( String(data).trim() == 'Quien es?'){
            socket.write( toc[index] + "\n")
        }
        
        else if(String(data).trim() == '¿Que '+ toc[index] + '?'){
            socket.write(toc2[index]);
            socket.end();
            
        }else{
            socket.write("Toco toc. (Escribe: Quien es? )\n");
        };
        
    });
    
    socket.on("end", ()=> {
        console.log(socket.nombre+" se desconecto");
    });
    
    
}).listen(8080);
console.log("Servido ICP corriendo corriendo en el puerto 8080");

