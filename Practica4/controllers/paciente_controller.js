const path = require("path");
const Paciente=require('../models/paciente_model');

exports.getAgregarPaciente=(req,res)=>{
    res.sendFile(path.join(__dirname, '../views', 'alta.html')); 
};


exports.postAgregarPaciente=(req,res)=>{
    console.log(req.body);
    let data = req.body;
    let paciente = new Paciente(null, data.nombre, data.edad, data.genero, data.seguridad_social, data.dolor_de_garganta, data.tos_seca, data.fiebre, data.dificultad_para_respirar, data.diabetes, data.hipertension, data.sobrepeso);
    paciente.save()
    .then(()=>{
        console.log('Paciente registrado exitosamente');
        res.redirect('/confirmacion');    
    })
    .catch(err=>{
        console.log(err);
        res.send('Error');
    });
    
};

exports.getPacientes=(req,res)=>{
    Paciente.findAll()
    .then(([rows,fields])=>{
        res.render("listaPacientes.html", {
                pacientes: rows,
            });
    })
    .catch(err=>console.log(err));
};

exports.getConfirmacion=(req,res)=>{
  res.sendFile(path.join(__dirname, '../views', 'confirmacion.html')); 
};