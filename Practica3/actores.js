/*----------------------------------------------------------
 * Práctica 3: Utilizando XML y métodos HTTP con Express
 * Fecha: 01-Abril-2020
 * Autores:
 *           A01379896 Erick Bautista Pérez
 *           A01378916 Rafael Moreno Cañas
 *----------------------------------------------------------*/

const xml2js = require('xml2js');
const fs = require('fs');
const peliculasXml = fs.readFileSync('movies.xml', 'utf-8');
var actoresArray = [];

xml2js.parseString(peliculasXml, { attrkey: 'ATR' }, (err, result) => {
    var arrayActores = null;
    var pelicula = null;
    result.movies.film.forEach(element => {
        pelicula = element["ATR"].name;
        
        if(element.cast != undefined ) {
            arrayActores = element.cast;
            actoresArray.push(`${pelicula}`);
            console.log(`${pelicula}`);
            arrayActores.forEach(actor => {
                if(actor != undefined) {
                    actoresArray.push(` ${String(actor).trim()}`);
                    console.log(` ${String(actor).trim()}`);
                } else {
                    actoresArray.push("");
                    console.log("");
                }
            });
            actoresArray.push("\n");
            console.log("\n");
        } else {
            actoresArray.push(`${pelicula}`);
            actoresArray.push("\n");
            console.log(`${pelicula}`);
            console.log("\n");
        }

    });
});

exports.getActores = function() {
    let convertToHtml = ""
    for (let eachActor = 0; eachActor < actoresArray.length; eachActor++) {
        convertToHtml += (`<p><span>${actoresArray[eachActor]}</span></p>`);
    }
    return convertToHtml;
}