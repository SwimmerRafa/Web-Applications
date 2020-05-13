const express=require('express');
const router =express.Router();
const usuarioController = require('../controllers/usuario');

router.get('/agregar-usuario',usuarioController.getAgregarUsuario);
router.post('/agregar-usuario',usuarioController.postAgregarUsuario);
router.get('/ver',usuarioController.getUsuarios);
router.get("/ver-usuario/:usuarioid", usuarioController.getUsuario);
router.post("/eliminar-usuario", usuarioController.postBorrarUsuario);
router.post("/editar-usuario", usuarioController.postEditarUsuario);

module.exports=router;
