/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let k = nums[i];
    if (k < 0) k += n;
    if (nums[k] < 0) return k;
    nums[k] -= n;
  }

  return -1;
};
