const express = require("express");
const bodyparser = require('body-parser');
const usuarioRoutes = require("./routes/usuario");
const principalRoutes = require("./routes/principal");
const errorControlador = require("./controllers/error");
const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.use('/usuario',usuarioRoutes);
app.use(principalRoutes);
app.use(errorControlador.getError);

app.listen(8080, () => console.log('Running...'));

