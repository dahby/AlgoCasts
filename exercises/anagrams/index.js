// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const formattedStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const formattedStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
  if (formattedStringA.length !== formattedStringB.length) {
    return false;
  }
  const hashA = {};
  const hashB = {};
  for (let i = 0; i < formattedStringA.length; i++) {
    hashA[formattedStringA[i]] = hashA[formattedStringA[i]] + 1 || 1
    hashB[formattedStringB[i]] = hashB[formattedStringB[i]] + 1 || 1
  }
  for (let key in hashA) {
    if (hashA[key] !== hashB[key]) {
      return false;
    }
  }
  return true;
}

anagrams('rail safety', 'fairy tales')

module.exports = anagrams;
