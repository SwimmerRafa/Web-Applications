function lookAndSay(digits) {
    var result = '',
        characters = (digits + ' ').split(''),
        lastCharacter = characters[0],
        times = 0;
 
    characters.forEach( (nextChar) => {
        if (nextChar === lastCharacter) {
            times++;
        }
        else {
            result += (times + '') + lastCharacter;
            lastCharacter = nextChar;
            times = 1;
        }
    });
 
    return result;
}
 
exports.output = (seed, iterations) => {
    let result = [];
    for (var i = 0; i < iterations; i++) {
        result.push(`${i+1}. ${seed}`);
        // console.log(`${i+1}. ${seed}`);
        seed = lookAndSay(seed);
    }
    return result;
}

exports.getConway = (iterations)  => {
    let convertToHtml = ""
    for (let number = 0; number < iterations.length; number++) {
        convertToHtml += (`<p><span>${iterations[number]}</span></p>`);
    }
    return convertToHtml;
}

// getConway("1", 10);