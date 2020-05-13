const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.engine('html', require('ejs').renderFile);
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const config ={
    host: "localhost",
    user: "root",
    password: "root",
    database: "clase2"
}

const pool = mysql.createPool(config);
const db = pool.promise();

app.get("/consulta", (req, res)=>{
    db.execute('select * from usuario')
    .then(([rows, fields])=>{
        console.log(rows);
        res.render('usuario.html', {usuario: rows});
    })
    .catch((err)=>{
        console.log(err);
        res.send("Error");
    });
});

app.post("/alta", (req, res) => {
    console.log(req.body);
    db.execute("insert into usuario (nombre, password) values (?, ?)", [req.body.nombre, req.body.password])
    .then((result)=>{
        console.log("Registro exitoso");
        res.send("Registro dado de alta");
    })
    .catch((err)=>{
        console.log(err);
        res.send("Error");
    });
    res.end();
});

app.post("/login", (req, res) => {
    console.log(req.body);
    let nombre = req.body.nombre;
    let password = req.body.password;
    db.execute("select * from usuario where nombre = ? and password = ?", [nombre, password])
    .then(([rows, field])=>{
        if(rows.length > 0){
            res.redirect("/consulta");   
        }else{
            res.send("Usuario o Password incorrectos");
        }
        res.end();
    })
    .catch((err)=>{
        console.log(err);
        res.send("Error");
    });
});

app.get("/login", (req, res) => {
        res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.listen(8080, ()=>{
    console.log("Running...");
});