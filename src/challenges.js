// Desafio 1
function compareTrue(valor1,valor2) {
 if( valor1 && valor2 === true){
  return true
 } return false
}


// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}


// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}




// Desafio 4
function concatName( array ) {
 let ultimo = array.splice(-1)
 let primeiro = [...array].shift(0);
 return ultimo +', '+primeiro
 
}

// Desafio 5
function footballPoints(wins, ties) {
  wins= wins * 3
  ties= ties * 1
  let pontos = wins + ties
  return pontos
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
