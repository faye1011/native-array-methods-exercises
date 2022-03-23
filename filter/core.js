function onlyEven(array) {
  const newArr = array.filter(function (num) {
    return num % 2 === 0;
  });
  return newArr;
}

function onlyOneWord(array) {
  const newArr = array.filter(function (str) {
    return str;
  });

  return newArr;
}

function positiveRowsOnly(array) {
  const newArr = array.filter(function (el) {
    return el.every(function (x) {
      return x >= 0;
    });
  });
  return newArr;
}

function allSameVowels(array) {
  // your code here
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels,
};
