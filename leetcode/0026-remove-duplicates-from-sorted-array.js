/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;

  let [p, q] = [0, 1];
  while (q < nums.length) {
    if (nums[q] === nums[p]) q++;
    else nums[p++ + 1] = nums[q];
  }
  return p + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2];
const ret = removeDuplicates(nums);
console.log('nums: ', nums, ret);
