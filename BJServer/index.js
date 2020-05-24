const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET", "POST")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    next()
})

app.get("/cartas", (req, res) =>{
    res.status(200).json({
            "cartas": [
                {
                    "mazo" : "corazones", 
                    "numero" : "1",
                     "valor" : "1"
                },
                {
                      "mazo" : "corazones", 
                      "numero" : "K",
                      "valor" : "10"
                }
            ]
    })
})

app.post("/carta", (req, res) =>{
    console.log(req.body)
    res.status(201).json({
        mensaje: "POST realizado con éxito"
    })
})

app.listen(8081, ()=> console.log("Running..."))