/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  const sortedArr = arr.sort((n1, n2) => n1 - n2);
  const n = arr.length;
  let sum = 0;
  for (let i = n / 20; i < (n * 19) / 20; i++) {
    sum += sortedArr[i];
  }

  return sum / (n * 0.9);
};
