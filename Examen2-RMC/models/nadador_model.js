const db=require('../util/database');

module.exports = class Nadador{
    constructor(id,nombre,edad, pais, estilo){
        this.id=id;
        this.nombre=nombre;
        this.edad = edad;
        this.pais = pais;
        this.estilo = estilo;
        
    }
    
    save(){
        return db.execute('INSERT INTO nadadores(nombre , edad ,pais , estilo )  VALUES (?, ?, ?, ?)',
        [this.nombre, this.edad, this.pais, this.estilo]);
    }
    
    
    static findAll(){
        return db.execute('SELECT * FROM nadadores');
    }
    
    static deleteById(id){
        return db.execute('DELETE FROM nadadores WHERE id=?', [id])
    }
    
    static updateById(id){
        return db.execute('UPDATE nadadores SET nombre = ? , edad = ? ,pais =?, estilo =? WHERE id = ?',
        [this.nombre, this.edad, this.pais, this.estilo, id]);
    }
    
};