const express = require("express");
const app = express();
const path = require("path");
app.use(express.static('Views'));
app.use(express.json())



app.get('/doom', (req, res)=>{
    res.sendFile(path.join(__dirname, '/Views', 'doominfo.html'))
});


app.get('/about', (req, res)=>{
    const index = Math.floor(Math.random() * (10 - 1) + 1);
    res.send("<h3>Rafael Moreno Cañas</h3> <h3>A01378916</h3> <h3>" +index+ "</h3>")
 
});

app.post('/esnumeroprimo', (req, res)=>{
    let number = req.body.numero;
    let prime = true;

    for (let i = 2; i <= number - 1; i++) {
        if (number % i == 0) {
            prime = false;
            break;
        }
    }

    if(prime == true){
        res.send("Primo");
    }
    else{
        res.send("No Primo");
    }
});

app.listen(8080, ()=>{
    console.log("Servidor en linea");
});
