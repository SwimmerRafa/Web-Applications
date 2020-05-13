const express=require('express');
const router =express.Router();
const principalController = require('../controllers/principal')

router.get('/',principalController.getPrincipal);

module.exports=router;