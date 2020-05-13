const mongoose = require("mongoose");
const Autor = require("./models/autor");
const Libro = require("./models/libro");

mongoose.connect("mongodb://localhost/ejemploBiblioteca", { useNewUrlParser: true , useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error"));

db.once("open", ()=>{
    console.log("Conexión exitosa");
    
    const autor1 = new Autor({
        _id: new mongoose.Types.ObjectId(),
        nombre: {
            nombres: "Marisol Helena" ,
            apellidos: "Torres Bautista" 
        }
    });
    
    autor1.save(err=>{
        if(err) throw err;
        console.log("Autor registrado exitosamente");
        const libro1 = new Libro({
            _id: new mongoose.Types.ObjectId(),
            titulo: "Node JS: Avanzados",
            autor: autor1.id
        });
        
        libro1.save(err=>{
            if(err) throw err;
            console.log("Libro registrado exitosamente");
            db.close();
        });
    });
});

