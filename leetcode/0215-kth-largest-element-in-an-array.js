/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  for (let i = nums.length; i > nums.length - k - 1; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) {
        [nums[j], nums[i]] = [nums[i], nums[j]];
      }
    }
  }
  return nums[nums.length - k];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
