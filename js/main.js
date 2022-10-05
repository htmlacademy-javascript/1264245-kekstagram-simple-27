function getRandomInteger(min, max) {
  if (min >= 0 && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
}
//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range


function checkStringLength(string, length) {
  if (string.length === length) {
    return true;
  }
  return false;
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
