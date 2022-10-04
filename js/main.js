// eslint-disable-next-line no-unused-vars
function randomInteger(min, max) {
  if (min && max >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
