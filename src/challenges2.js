// Desafio 11

function generatePhoneNumber(arr) {
  // seu código aqui
  if(arr.lenght !== 11){
    return 'Array com tamanho incorreto.'
   }
  f
  function criacao(arr){
    for(let i of arr.lenght){
      if(i < 0 || i > 9){
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
  }
  function criacao(arr){
   let repetido = 0;
   let num = arr.slice(0)
    for( let i=0; i< arr.lenght;i+=1){
     if(arr(i)=== num){
      repetido = repetido + 1
    }
   }
    if( repetido >= 3){
    return 'não é possível gerar um número de telefone com esses valores'
   }
  }
  criacao();
}
 
 

// Desafio 12
function triangleCheck() {
  // seu código aqui

}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
