const express=require('express');
const router=express.Router();
const usuarioControlador=require('../controllers/usuario');

router.get('/agregar-usuario',usuarioControlador.getAgregarUsuario);
router.post('/agregar',usuarioControlador.postAgregarUsuario);
router.get('/ver',usuarioControlador.getUsuarios);

module.exports=router;
