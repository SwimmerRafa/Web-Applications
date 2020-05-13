const express = require("express");
const bodyparser = require('body-parser');
const homeRoute = require("./routes/home");
const nadadorRoutes = require("./routes/nadador_routes");
const errorControlador = require("./controllers/error");
const app = express();
app.engine("html", require("ejs").renderFile);

app.use(bodyparser.urlencoded({extended: false}));

app.use(homeRoute);
app.use(nadadorRoutes);
app.use(errorControlador.getError);

app.listen(8080, () => console.log('Running...'));