const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let letters = [];
    for (let i = 0; i < expr.length; i = i + 10) {
        letters.push(expr.slice(i, i + 10));
    }

    let res = '';
    for (let i = 0; i < letters.length; i++) {
        let letterMorse = '';
        if (letters[i] === '**********') {
            res = res + ' ';
            continue;
        } else {
            letterMorse = '';
            for (let j = 0; j < 10; j = j + 2) {
                let symb = letters[i].slice(j, j + 2);
                switch (symb) {
                    case '10':
                        letterMorse = letterMorse + '.';
                        break;
                    case '11':
                        letterMorse = letterMorse + '-';
                        break;
                    default:
                        break;
                }
            }
        }
        res = res + MORSE_TABLE[letterMorse];
        //letters.push(expr[i]);

    }
    return res;
}

module.exports = {
    decode
}