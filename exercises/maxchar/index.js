// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  for (char of str) {
    chars[char] = chars[char] + 1 || 1
  }
  const allVals = Object.values(chars);
  const maxOccurrence = Math.max(...allVals)
  for (char in chars) {
    if (chars[char] === maxOccurrence) {
      return char;
    }
  }
}


module.exports = maxChar;
