// Desafio 1
function compareTrue(animal1, animal2) {
  let result;

  if (animal1 === 'girafa' && animal2 === 'elefante') {
    result = true;
  } else if (animal1 === 'elefante' && animal2 === 'girafa') {
    result = true;
  } else if(animal1 === 'girafa' && animal2 === 'girafa'){

  }
  else {
    result = false;
  }
  return result;
}

console.log(compareTrue('elefante', 'elefante'));

// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
