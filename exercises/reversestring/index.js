// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// turn 'str' into an array
// call reverse method on the array
// turn the array back into a string

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Alternative solutions

// Create an empty string called 'reversed'
// for each character in the provided string
//  take the character and add it to the start of 'reversed'
// return reversed

// function reverse(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// Same solution, but with alternative for loop

function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

module.exports = reverse;
