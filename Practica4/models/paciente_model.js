const db=require('../util/database');

module.exports = class Paciente{
    constructor(id,nombre,edad, genero, ssn, dolGar, tosS, fiebre, difRes, diabetes, hiper, sobrepeso){
        this.id=id;
        this.nombre=nombre;
        this.edad = edad;
        this.genero = genero;
        this.ssn = ssn;
        this.dolGar = dolGar;
        this.tosS = tosS;
        this.fiebre = fiebre;
        this.difRes = difRes;
        this.diabetes = diabetes;
        this.hiper = hiper;
        this.sobrepeso = sobrepeso
    }
    
    save(){
        return db.execute('INSERT INTO paciente(nombre , edad ,genero , seguridad_social , dolor_de_garganta , tos_seca , fiebre, dificultad_para_respirar, diabetes ,hipertension ,sobrepeso )  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [this.nombre, this.edad, this.genero, this.ssn, this.dolGar, this.tosS, this.fiebre, this.difRes, this.diabetes, this.hiper, this.sobrepeso]);
    }
    
    
    static findAll(){
        return db.execute('SELECT * FROM paciente');
    }
    
    
}