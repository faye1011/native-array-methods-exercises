function multiplyBy10(array) {
  const map = array.map((num) => num * 10);
  return map;
}

function shiftRight(array) {
  const lastEl = array.pop(); // last element
  array.unshift(lastEl);
  const map = array.map(function (num) {
    return num;
  });
  return map;
}

function onlyVowels(array) {
  const map = array.map(function (vowel) {
    return vowel;
  });
  return map;
}

function doubleMatrix(array) {
  const map = array.map(function (num) {
    return num.map(function (el) {
      return el * 2;
    });
  });
  return map;
}

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
};
