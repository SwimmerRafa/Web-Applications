const express=require('express');
const router=express.Router();
const nadadorControlador=require('../controllers/nadador_controller');

router.get('/lista-nadadores',nadadorControlador.getNadadores);
router.post('/agregarNadador',nadadorControlador.postAgregarNadador);
router.get('/alta-nadador', nadadorControlador.getAgregarNadador);
router.post('/editar-nadador', nadadorControlador.postEditarNadador);
router.post('/eliminar-nadador', nadadorControlador.postEliminarNadador);


module.exports=router;
