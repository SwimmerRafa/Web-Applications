const EventEmitter = require("events");

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

myEmitter.on("event1", () => {
    console.log("Se ha ejecutado el event1");
}); 

myEmitter.on("event2", (a, b) => {
    console.log(a, b);
}); 

myEmitter.on("saludo", (name, year) => {
    console.log('Hola', name, ' en el año', year);
}); 

myEmitter.emit("event1");
myEmitter.emit("event2", "Desarrollo", "Web");