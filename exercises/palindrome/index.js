// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// MY SOLUTION 

function palindrome(str) {
  const reversedString = str.split('').reverse().join('');
  return reversedString === str ? true : false;
}

// ALTERNATE SOLUTIONS

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// USING EVERY

// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

module.exports = palindrome;
