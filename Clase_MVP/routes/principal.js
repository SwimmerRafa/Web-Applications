const express=require('express');
const router=express.Router();
const principalControlador=require('../controllers/principal');

router.get('/',principalControlador.getPrincipal);

module.exports=router;