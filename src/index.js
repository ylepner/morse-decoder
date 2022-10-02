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
  const words = expr.split('**********')
  let morse = ''
  let letters = []
  words.forEach((word) => {
    morse += ' '
    letters = []
    for (let i = 0; i < word.length; i += 10) {
      letters.push(Number(word.slice(i, i + 10)))
    }
    letters.forEach((letter) => {
      const letterStr = String(letter)
      let morseChar = ''
      for (let i = 0; i < letterStr.length; i += 2) {
        const charCode = letterStr.slice(i, i + 2)
        morseChar += getMorseChar(charCode)
      }
      morse += MORSE_TABLE[morseChar]
    })
  });
  return morse.slice(1)
}

function getMorseChar(charNumber) {
  if (charNumber === '10') {
    return '.'
  } else {
    return '-'
  }
}


module.exports = {
  decode
}