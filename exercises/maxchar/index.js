// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let highestNum = 0;
  let highestChar = null;
  for (char of str) {
    !charMap[char] ? charMap[char] = 1 : charMap[char]++;
    if (charMap[char] > highestNum) {
      highestNum = charMap[char];
      highestChar = char
    }
  }
  return highestChar;
}


module.exports = maxChar;
