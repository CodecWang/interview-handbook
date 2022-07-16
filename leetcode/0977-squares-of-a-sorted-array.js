/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let ret = [];
  let [p, q] = [0, nums.length - 1];
  while (p <= q) {
    let [pv, qv] = [nums[p] * nums[p], nums[q] * nums[q]];
    if (pv > qv) {
      p++;
      ret.unshift(pv);
    } else {
      q--;
      ret.unshift(qv);
    }
  }
  return ret;
};

const nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));
