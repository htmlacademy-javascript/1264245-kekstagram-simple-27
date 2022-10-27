function checkStringLength(string, length) {
  if (typeof string === "string" && typeof length === "number") {
    if (string.length <= length) {
      return true;
    }
    return false;
  }
  console.log('Please type correct number or string');
}

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRandomPositiveInteger};
