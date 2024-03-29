/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let n = x ^ y;
  let count = 0;
  while (n) {
    n &= n - 1;
    count++;
  }
  return count;
};
