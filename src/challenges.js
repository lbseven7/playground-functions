// Desafio 1 Caique mostrou na apresentação
function compareTrue(v1, v2) {
  if (v1 && v2 === true) {
    return true;
  }
  return false;
}

// Desafio 2 sem ajuda
function calcArea(base, height) {
  let triangule = 0;
  triangule = (base * height) / 2;
  return triangule;
}

// Desafio 3 pesquisa no MDN split();
function splitSentence(stringPhrase) {
  stringPhrase = stringPhrase.split(' ');

  return stringPhrase;
}

// Desafio 4
/* Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
retorno:  'Paolillo, Lucas'  */
function concatName(array) {
  let names = array.length - 1;
  let lastName = array[names];
  let firstName = array[0];

  let resultado = lastName + ', ' + firstName;

  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = 0;
  result = (wins * 3) + (ties * 1);
  return result;
}
console.log(footballPoints(0, 0));

// Desafio 6 Consulta no MDN sobre Sintaxe de Espalhamento ...spread
function highestCount(array) {
  let result = 0;
  let maxValue = Math.max(...array);
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maxValue) {
      result += 1;
    }
  }
  return result;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

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
