/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  while (k > 0) {
    const count = nums.length;
    const temp = nums[count - 1];
    for (let i = count - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = temp;
    k--;
  }
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 2;
rotate(nums, k);
console.log(nums);
