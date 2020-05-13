const mysql = require('mysql2');
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'holammundodb'
});

const db=pool.promise();

//Crear una base de datos
/*db.execute('CREATE DATABASE holammundodb')
    .then((result)=>{
        console.log("Hecho!");
    })
    .catch((err)=>{
        console.log(err);
    });*/
    
db.execute('CREATE TABLE IF NOT EXISTS producto(id INT PRIMARY KEY,nombre VARCHAR(20), precio DECIMAL(8,2), status BOOLEAN)')
.then((result)=>{
        console.log("Hecho!");
    })
    .catch((err)=>{
        console.log(err);
    });
//DML
/*db.execute('INSERT INTO producto VALUES (?,?,?,?)',[2,'Nintendo Switch 1.1',7999,true])
.then((result)=>{
        console.log("Hecho!");
    })
    .catch((err)=>{
        console.log(err);
    });
    
db.execute('INSERT INTO producto VALUES (?,?,?,?)',[3,'Nintendo Switch 1.1 Animal Crossing',8999,true])
.then((result)=>{
        console.log("Hecho!");
    })
    .catch((err)=>{
        console.log(err);
    });
*/

/*db.execute('SELECT * FROM producto')
    .then(([data,columns])=>{
        console.log(data[1].nombre);
        console.log(columns);
    })
    .catch((err)=>{
        console.log(err);
    });*/
db.execute('SELECT * FROM producto')
    .then((result)=>{
        console.log(result);
        
    })
    .catch((err)=>{
        console.log(err);
    });