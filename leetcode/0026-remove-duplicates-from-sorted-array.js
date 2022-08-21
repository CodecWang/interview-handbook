/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let p = 0;
  let q = 1;

  while (q < nums.length) {
    if (nums[q] !== nums[p]) nums[++p] = nums[q];
    q++;
  }

  return p + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2];
const ret = removeDuplicates(nums);
console.log("nums: ", nums, ret);
