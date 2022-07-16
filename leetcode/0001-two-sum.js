/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[target - num] !== undefined) return [hash[target - num], i];
    hash[num] = i;
  }
};

console.log(twoSum([2, 3, 4, 11], 5));
