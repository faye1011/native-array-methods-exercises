// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10(input) {
  const isBiggerThan10 = input.some(function (num) {
    return num > 10;
  });
  return isBiggerThan10;
}

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord(input) {
  const longerThan10Characters = input.some(function (word) {
    return word.length > 10;
  });
  return longerThan10Characters;
}

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities(input) {
  const flatArr = input.flat();
  const isTrue = flatArr.some(function (possibilities) {
    return possibilities === true;
  });
  return isTrue;
}

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa(input) {
  const isLostCarcosa = input.some(function (x) {
    return x.includes("Lost");
  });
  return isLostCarcosa;
}

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa,
};
