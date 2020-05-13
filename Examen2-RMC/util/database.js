//Configuración de la conexión a la base datos
const mysql=require('mysql2');

const config={
    host:'localhost',
    user:'root',
    password:'root',
    database:'bdexamen'
};

const pool=mysql.createPool(config);
module.exports= pool.promise();