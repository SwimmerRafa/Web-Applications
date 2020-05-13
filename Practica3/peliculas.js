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
let peliculasArray = [];

xml2js.parseString(peliculasXml, { attrkey: 'ATR', explicitArray: false }, (err, result) => {

    result.movies.film.forEach(element => {
        var title = element["ATR"].name;
        var year = element["ATR"].year;
        var director = element["director"];
        if (director == null) {
            peliculasArray.push(`${title} (${year})\n`);
            console.log(`${title} (${year})`);
        } else {
            peliculasArray.push(`${title} (${year}), director: ${String(director).trim()}\n`);
            console.log(`${title} (${year}), director: ${String(director).trim()}`);
        }
    });
});

exports.getPeliculas = function () {
    let convertToHtml = ""
    for (let eachPeli = 0; eachPeli < peliculasArray.length; eachPeli++) {
        convertToHtml += (`<p><span>${peliculasArray[eachPeli]}</span></p>`);
    }
    return convertToHtml;
};
