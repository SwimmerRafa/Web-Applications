const db=require('../util/database');

module.exports = class Usuario{
    constructor(id,nombre,password){
        this.id=id;
        this.nombre=nombre;
        this.password=password;
    }
    
    save(){
        return db.execute('INSERT INTO usuario(nombre,password)  VALUES (?,?)',
        [this.nombre,this.password]);
    }
    
    static deleteById(id){
        return db.execute('DELETE FROM usuario WHERE id=?',[id]);
    }
    
    static findAll(){
        return db.execute('SELECT * FROM usuario');
    }
    
    static findById(id){
        return db.execute('SELECT * FROM usuario WHERE id=?',[id]);
    }
    
    static updateById(id,data){
        
    }
    
}