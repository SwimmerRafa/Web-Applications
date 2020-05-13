const express=require('express');
const router=express.Router();
const pacienteControlador=require('../controllers/paciente_controller');

router.get('/lista-pacientes',pacienteControlador.getPacientes);
router.post('/agregarPaciente',pacienteControlador.postAgregarPaciente);
router.get('/alta-paciente', pacienteControlador.getAgregarPaciente);
router.get('/confirmacion', pacienteControlador.getConfirmacion);

module.exports=router;
