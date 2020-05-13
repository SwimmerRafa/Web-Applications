const express= require('express');
const bodyParser = require('body-parser');
const app = express();
app.engine('html',require('ejs').renderFile);
const errorController = require('./controllers/error');
const usuarioRoutes = require('./routes/usuario');
const principalRoutes = require('./routes/principal');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use('/usuario',usuarioRoutes);
app.use(principalRoutes);

app.use(errorController.get404);

const sequelize = require("./util/database");
const Usuario= require("./models/usuario");

sequelize.sync()
    .then(result => {
        console.log(result);
        app.listen(8080,()=>{console.log('Servidor en línea')});
    })
    .catch(err=>console.log(err));
