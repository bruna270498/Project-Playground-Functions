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
function highestCount(array) {
  let max = Math.max(...array)
  let quantidade = 0;
  for( let index = 0; index< array.length;index+=1){
      if(array[index]=== max){
        quantidade += 1
      }
  }
 return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let poscat1 = Math.abs(mouse - cat1);
  let poscat2 = Math.abs(mouse - cat2);
  if (poscat1 < poscat2) {
    return 'cat1';
  } else if (poscat1 > poscat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let compactador= [];
  for( let index of array){
    if(index%3===0 && index%5===0){
      compactador.push('fizzBuzz');
    }else if(index % 3===0){
      compactador.push('fizz');
    }else if(index %5===0){
      compactador.push('buzz');
    }else{compactador.push('bug!');}
  }
  return compactador;
}


// Desafio 9
function encode(string) {
  // seu código aqui


}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(array, string) {
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
