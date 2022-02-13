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

// Desafio 6 Consulta no MDN sobre Sintaxe de Espalhamento ...spread
function highestCount(array) {
  let result = 0;
  let maxValue = Math.max(...array); // pega o número maior
  console.log(maxValue);
  for (let index = 0; index < array.length; index += 1) { // quantas vezes se repete o maior numero
    if (array[index] === maxValue) { // compara
      result += 1; // salva os numeros
    }
  }
  return result;
}

// prefiro escrever em inglês pra treinar o odioma
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = Math.abs(mouse - cat1);
  let distanceMouseCat2 = Math.abs(mouse - cat2);
  if (distanceMouseCat1 === distanceMouseCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanceMouseCat1 < distanceMouseCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  const newArray = [];
  for (number in array) {
    if (array[number] % 3 === 0 && array[number] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[number] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[number] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9

function encode(string) {
  let encodeString = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    if (encodeString[index] === 'a') {
      encodeString[index] = '1';
    } else if (encodeString[index] === 'e') {
      encodeString[index] = '2';
    } else if (encodeString[index] === 'i') {
      encodeString[index] = '3';
    } else if (encodeString[index] === 'o') {
      encodeString[index] = '4';
    } else if (encodeString[index] === 'u') {
      encodeString[index] = '5';
    }
  }
  return encodeString.join('');
}

function decode(string) {
  let decodeString = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    if (decodeString[index] === '1') {
      decodeString[index] = 'a';
    } else if (decodeString[index] === '2') {
      decodeString[index] = 'e';
    } else if (decodeString[index] === '3') {
      decodeString[index] = 'i';
    } else if (decodeString[index] === '4') {
      decodeString[index] = 'o';
    } else if (decodeString[index] === '5') {
      decodeString[index] = 'u';
    }
  }
  return decodeString.join('');
}

// Desafio 10
function techList(array, name) {
  let arr = [];
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    arr.push({ tech: array[index], name });
  }
  if (array.length === 0) {
    return 'Vazio!';
  }
  return arr;
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
