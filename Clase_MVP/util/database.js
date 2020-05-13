//Configuración de la conexión a la base datos
const mysql=require('mysql2');

const config={
    host:'localhost',
    user:'root',
    password:'root',
    database:'clase2'
};

const pool=mysql.createPool(config);
module.exports= pool.promise();