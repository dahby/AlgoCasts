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
  let reversedString = '';
  const int = n.toString();
  for (let i = int.length - 1; i >= 0; i--) {
    if (int[i] === '-') {
      reversedString = int[i] + reversedString;
    } else {
      reversedString += int[i];
    }
  }
  return parseInt(reversedString);
}

module.exports = reverseInt;
