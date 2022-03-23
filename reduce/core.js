function sum(array) {
  const sum = array.reduce(function (prevVal, currVal) {
    return prevVal + currVal;
  });
  return sum;
}

function productAll(array) {
  const newArr = array.flat();
  const sum = newArr.reduce(function (prevVal, currVal) {
    return prevVal * currVal;
  });
  return sum;
}

function objectify(array) {
  // your code here
}

function luckyNumbers(array) {
  // your code here
}

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers,
};
