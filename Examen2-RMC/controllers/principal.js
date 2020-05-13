const path = require("path");

exports.getPrincipal=(req,res)=>{
  res.sendFile(path.join(__dirname, '../views', 'home.html')); 
};