/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const table = new Array(1000).fill(0);

  for (const num of target) {
    table[num - 1]++;
  }

  for (const num of arr) {
    table[num - 1]--;
    if (table[num - 1] < 0) {
      return false;
    }
  }

  return true;
};
