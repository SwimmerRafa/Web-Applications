const Sequelize = require('sequelize');

//database user password
const sequelize = new Sequelize('clase2', 'root', 'root', {
  dialect : 'mysql',
  host: 'localhost',
  define:{
    timestamps:false,
    freezeTableName: true
  }

});

module.exports = sequelize;
