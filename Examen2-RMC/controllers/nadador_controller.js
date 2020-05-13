const path = require("path");
const Nadador=require('../models/nadador_model');

exports.getAgregarNadador=(req,res)=>{
    res.sendFile(path.join(__dirname, '../views', 'alta_nadador.html')); 
};

exports.postAgregarNadador=(req,res)=>{
    console.log(req.body);
    let data = req.body;
    let nadador = new Nadador(null, data.nombre, data.edad, data.pais, data.estilo);
    nadador.save()
    .then(()=>{
        console.log('Nadador registrado exitosamente');
        res.redirect('/');    
    })
    .catch(err=>{
        console.log(err);
        res.send('Error');
    });
    
};

exports.getNadadores=(req,res)=>{
    Nadador.findAll()
    .then(([rows,fields])=>{
        res.render("lista_nadadores.html", {
                nadadores: rows,
            });
    })
    .catch(err=>console.log(err));
};

exports.postEliminarNadador = (req, res) => {
  const prodId = req.body.id_nadador;
 
   Nadador.deleteById(prodId)
   .then(()=>{
     console.log("Nadador eliminado");
     res.redirect("/");
   })
   .catch(err=>console.log(err));
};

exports.postEditarNadador = (req, res) => {
    const prodId = req.body.id_nadador;
    const nnombre=req.body.nombre;
    const nedad=req.body.edad;
    const npais=req.body.pais;
    const nestilo=req.body.estilo;
    
    const nadador = new Nadador(nnombre, nedad, npais, nestilo,  prodId);
    nadador
    .save()
    .then(result=>{
        console.log("Nadador Editado");
        res.redirect("/")
    })
    .catch(err=>console.log(err));
};
