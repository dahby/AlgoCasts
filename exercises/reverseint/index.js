// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// MY SOLUTION

function reverseInt(n) {
  let strNum = (n * Math.sign(n)).toString();
  strNum = strNum.split('').reverse().join('');
  return parseInt(strNum) * Math.sign(n);
}

// INSTRUCTOR SOLUTION

// function reverseInt(n) {
//   const reversed = n.toString().split('').reverse().join('');

//   return parseInt(reversed) * Math.sign(n);
// }


module.exports = reverseInt;
