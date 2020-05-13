const Usuario = require('../models/usuario');

exports.getAgregarUsuario=(req,res)=>{
    res.send(
        '<form action="/usuario/agregar-usuario" method="POST"><label for="nombre">Nombre:</label><input type="text" name="nombre" id="nombre"/><br><label for="password">Password:</label>  <input type="password" name="password" id="password"/><br><button type="submit">Enviar</button></form>'
        );
};

exports.postAgregarUsuario=(req,res)=>{
    console.log(req.body);
    const nombre = req.body.nombre;
    const password = req.body.password;
    Usuario.create({
        nombre:nombre,
        password:password
    })
    .then(result=>console.log("Usuario creado"))
    .catch(err=>console.log(err));
    res.redirect("/");
};

exports.getUsuarios=(req,res)=>{
    Usuario.findAll()
    .then(usuarios=>{
        res.render("usuario.html", {
            tituloPagina: "Usuarios",
            usuarios: usuarios
        });
    })
    .catch(err=>console.log(err));
};

exports.getUsuario=(req,res)=>{
    const usuarioid = req.params.usuarioid;
    Usuario.findAll({
        where:{
            id:usuarioid
        }
    })
    .then(usuario=>{
       res.render("usuario.html", {
            tituloPagina: "Usuarios",
            usuarios: usuario
        });
    })
    .catch(err=>console.log(err));
};

exports.postBorrarUsuario=(req,res)=>{
    const usuarioid = req.params.usuarioid;
    const id = req.body.id;
    Usuario.findByPk(id)//
    .then(usuario=>{
        return usuario && usuario.destroy();
    })
    .then(result=>{
        console.log("Usuario Eliminado Exitosamente");
        res.redirect("/");
    })
    .catch(err=>console.log(err));
};

exports.postEditarUsuario=(req,res)=>{
    const id = req.body.id;
    const nombre = req.params.nombre;
    const password = req.params.password;
    Usuario.findByPk(id)//
    .then(usuario=>{
        usuario.nombre = nombre;
        usuario.password = password;
        return usuario && usuario.save();
    })
    .then(result=>{
        console.log("Usuario Actualizado Exitosamente");
        res.redirect("/");
    })
    .catch(err=>console.log(err));
};