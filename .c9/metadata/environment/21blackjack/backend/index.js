{"filter":false,"title":"index.js","tooltip":"/21blackjack/backend/index.js","undoManager":{"mark":4,"position":4,"stack":[[{"start":{"row":3,"column":0},"end":{"row":4,"column":25},"action":"remove","lines":["const Carta = require(\"./models/carta.js\")","const carta = Carta.carta"],"id":429},{"start":{"row":2,"column":35},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":5,"column":0},"end":{"row":19,"column":5},"action":"remove","lines":["function createJson(){","    let mazo = [\"Corazones\", \"Treboles\", \"Espadas\", \"Diamantes\"]","    let nombre = [\"As\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\", \"J\", \"Q\", \"K\"]","    let baraja = []","    ","    for(let i = 0; i < mazo.length; i++){","        for(let j = 0; j < nombre.length; j++){","            let valor = j + 1","            if (valor > 10){","                valor = 10","            }","            let newCard = new carta(\"\", nombre[j], valor, mazo[i] )","            baraja.push(newCard)","        }","    }"],"id":430}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":1},"action":"remove","lines":["}"],"id":431},{"start":{"row":11,"column":4},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":7,"column":4},"end":{"row":10,"column":23},"action":"remove","lines":["const randomValue = parseInt(Math.random() * baraja.length)","    console.log(baraja[randomValue])","    baraja.splice(randomValue, 1)","    console.log(baraja)"],"id":432},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"remove","lines":["    "]},{"start":{"row":6,"column":4},"end":{"row":7,"column":0},"action":"remove","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "]},{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":10,"column":4},"end":{"row":10,"column":16},"action":"remove","lines":["createJson()"],"id":433},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"remove","lines":["    "]},{"start":{"row":9,"column":15},"end":{"row":10,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":15},"end":{"row":9,"column":15},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1590285295419,"hash":"d8886493fd397b177c724131695a78c9919058fe"}