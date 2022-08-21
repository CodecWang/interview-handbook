/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let p = 0;
  for (let q = 0; q < nums.length; q++) {
    if (nums[q] !== val) {
      // 这种写法等于 val 的元素都会放在后面，参考题 283
      // [nums[p], nums[q]] = [nums[q], nums[p]];
      // p++;
      nums[p++] = nums[q];
    }
  }
  return p;
};

const nums = [];
const ret = removeElement(nums, 2);
console.log(nums, ret);
