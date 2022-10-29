// Desafio 1
function compareTrue(animal1, animal2) {
  let result;
  if (animal1 === true && animal2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  const fraseSeparada = frase.split(' ');
  return fraseSeparada;
}

// Desafio 4
function concatName(array) {
  const primeiroNome = array[0];
  const ultimoNome = array[array.length - 1];

  let result = `${ultimoNome}, ${primeiroNome}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let totalPoints = winsPoints + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let countNumber = 0;

  for (let index in array) {
    if (highestNumber < array[index]) {
      highestNumber = array[index];
    }
  }
  for (let index2 in array) {
    if (highestNumber === array[index2]) {
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position = '';

  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    position = 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    position = 'cat2';
  } else {
    position = 'os gatos trombam e o rato foge';
  }
  return position;
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
}