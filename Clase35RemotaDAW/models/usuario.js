const Sequelize = require("sequelize");
const sequelize = require('../util/database');
const Usuario = sequelize.define("usuario", {
   id:{
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true
   },
   nombre:{
       type: Sequelize.STRING,
       allowNull: true
   },
   password:{
       type: Sequelize.STRING,
       allowNull: true
   }
   
});

module.exports = Usuario