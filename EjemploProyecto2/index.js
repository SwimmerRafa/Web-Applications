const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.static('Views'));
app.engine('html', require("ejs").renderFile);

app.get('/perfil', (req, res)=>{
    res.send('<h1>Bienvenido a mi pagina</h1>');
});

app.get('/pagina', (req, res)=>{
    res.sendFile(path.join(__dirname, '/Views', 'presentacion.html'))
});

app.get('/plantilla', (req, res) =>{
    const data=[{nombre: "Maria"}, {nombre: "Rafael"}, {nombre: "Big"}]
    res.render('index.html', {personas: data})
})


app.get('/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.query.watch);
    res.send('<h1>Datos recibidos</h1>');
});



app.post('/ejemploPost', (req, res)=>{
    console.log(req.body.nombre)
    res.send("<h1>Datos recibidos</h1>")
});


app.post('/colors', (req, res)=>{
    const data = req.body.color
    res.render('index.html', {colors: data})
})

app.listen(8080, ()=>{
    console.log("Servidor en linea");
});

app.post('/login', (req, res) =>{
    let user = 'Mario';
    let password = 'mammamia';
    if (user == req.body.user && password  ==req.body.password){
        res.redirect('/2');
    }else{
        res.send('Error');
    }
});

