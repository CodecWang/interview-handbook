/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);

  const ans = [];
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i - 1]) continue;
    if (sortedNums[i] > 0) break;

    let left = i + 1;
    let right = sortedNums.length - 1;
    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      if (sum === 0) {
        ans.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }

  return ans;
};
