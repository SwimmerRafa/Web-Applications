const Usuario=require('../models/usuario');

exports.getAgregarUsuario=(req,res)=>{
    res.send('<form action="/usuario/agregar" method="POST"><input type="text" name="nombre"/><input type="password" name="password"/><input type="Submit" value="Enviar"/></form>');
};

exports.postAgregarUsuario=(req,res)=>{
    console.log(req.body);
    let usuario=new Usuario(null, req.body.nombre,req.body.password);
    usuario.save()
    .then(()=>{
        console.log('Usuario registrado exitosamente');
        res.redirect('/');    
    })
    .catch(err=>{
        console.log(err);
        res.send('Error');
    });
    
};

exports.getUsuarios=(req,res)=>{
    Usuario.findAll()
    .then(([rows,fields])=>{
        res.send(rows);
    })
    .catch(err=>console.log(err));
};