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
  let codString ='';
  for(let frase of string){
    codString = string.replace(/a/gi, 1).replace(/e/gi, 2).replace(/i/gi, 3).replace(/o/gi, 4).replace(/u/gi, 5)
  }
  return codString;
}
function decode(string) {
  // seu código aqui
  
  let decString = string.replace(/1/gi, 'a').replace(/2/gi, 'e').replace(/3/gi, 'i').replace(/4/gi,'o').replace(/5/gi,'u')
  // return decString;
  return decString
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  array.sort()
  let arrayObj=[];
  if(array.length === 0){
    return 'Vazio!'
  }
  for(let objArray of array){
    let objeto = {
      tech: objArray,
      name: name
    }
    arrayObj.push(objeto)
  }
 return arrayObj;
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

