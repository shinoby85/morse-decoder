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
    // write your solution here
    return expr.split('**********').reduce((prev, item) => {
        let mas = item.match(/\d{10}/g);
        let secondStepResult = mas.reduce((word, sItem) => {
            let finishResult = sItem
                .match(/\d{2}/g)
                .reduce((finish, fItem) => {
                    if (fItem === '10') {
                        return finish + '.';
                    }
                    if (fItem === '11') {
                        return finish + '-';
                    }
                    return finish;
                }, '')
            return word + MORSE_TABLE[finishResult];
        }, '')
        return prev + secondStepResult + ' ';
    }, '').trim()
}

module.exports = {
    decode
}