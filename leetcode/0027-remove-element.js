/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let p = 0;
  for (let q = 0; q < nums.length; q++) {
    if (nums[q] !== val) {
      nums[p++] = nums[q];
    }
  }
  return p;
};

const nums = [];
const ret = removeElement(nums, 2);
console.log(nums, ret);
