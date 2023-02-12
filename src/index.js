const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {

        let currentSymbolInBinary = expr.slice(i, i + 10);
        let currentSymbolInMorse = '';

        for (let k = 0; k < currentSymbolInBinary.length; k += 2) {
            currentSymbolInMorse += currentSymbolInBinary.slice(k, k + 2) === '10' ? '.' 
                : currentSymbolInBinary.slice(k, k + 2) === '11' ? '-'
                : '';
        }
        result += MORSE_TABLE[currentSymbolInMorse] || ' ';
    }
    return result;
}

module.exports = {
    decode
}