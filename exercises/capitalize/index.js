// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const arr = str.split(' ');
  const cappedArr = [];
  for (let word of arr) {
    let cappedStr = '';
    cappedStr += word[0].toUpperCase();
    cappedStr += word.slice(1);
    cappedArr.push(cappedStr);
  }
  return cappedArr.join(' ');
}

module.exports = capitalize;
