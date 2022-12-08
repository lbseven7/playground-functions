// Desafio 11
function generatePhoneNumber(array) {
  let counter = 0;
  //console.log(array.length);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.'
  }

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    for (let index = 0; index < array.length; index += 1) {
      if (array[i] == array[index]) {
        counter += 1;
        if (counter > 2) {
          return 'não é possível gerar um número de telefone com esses valores'
        }
      }
    }
  }
  return "(" + array[0] + array[1] + ")" + " " + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];

  // Arlisson
  // function generatePhoneNumber(array) {
  //   if (array.length !== 11) {
  //     return 'Array com tamanho incorreto.';
  //   }
  //   for (let index = 0; index < array.length; index += 1) {
  //     if (array[index] < 0 || array[index] > 9 || verify(array) === true) {

  //     }
  //   }
  // const verify = (contador) => {
  //   for (const index1 in contador) {
  //     acc = contador[index1];
  //     count = 0

  //     for (const index2 in contador) {
  //       if (acc === contador[index2]) {
  //         count++
  //       }
  //     }
  //     if (count >= 3) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  // }
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
