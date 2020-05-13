const express = require('express');
const app = express();

let peliculas = require('./peliculas');
let actores = require("./actores");
let conway = require("./conway");

app.get("/actores", (req, res) => {  
    res.send(actores.getActores());
});

app.get("/peliculas", (req, res) => {
    res.send(peliculas.getPeliculas());
});

app.get("/conway/:id", (req, res) => {
    // console.log(req.params.id); 
    var result = conway.output("1", req.params.id);
    res.send(conway.getConway(result));
});

app.listen(8080, ()=> {
    console.log("Servidor running un port 8080");
})