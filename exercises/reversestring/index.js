// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
<<<<<<< HEAD
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

=======
  return str.split('').reverse().join('');
}
>>>>>>> e96f756fa2ff9b2b82acdbe231f7331587a8e97e

module.exports = reverse;
