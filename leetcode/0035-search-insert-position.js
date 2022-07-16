/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // let i = 0;
  // for (; i < nums.length; i++) {
  //   if (nums[i] >= target) break;
  // }

  // return i;

  // using binary search
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return Math.min(left, nums.length);
};

console.log(searchInsert([1, 3, 5, 6], 2));
