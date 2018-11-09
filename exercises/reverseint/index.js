// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const stringedN = n.stringify();
  let reversed = '';
  for (let i = stringedN.length - 1; i >= 0; i--) {
    if (stringedN[i] === '-') {
      reversed = stringedN[i] + reversed;
    } else {
      reversed += stringedN;
    }
  }
  return parseInt(stringedN);
}

module.exports = reverseInt;
