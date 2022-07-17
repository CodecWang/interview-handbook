/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length;
  const sortedNums = nums.sort((a, b) => a - b);

  let ans = [];
  for (let first = 0; first < n; first++) {
    if (nums[first] > 0) break;
    if (first > 0 && sortedNums[first] === sortedNums[first - 1]) continue;

    let second = first + 1;
    let third = n - 1;
    while (second < third) {
      const sum = sortedNums[first] + sortedNums[second] + sortedNums[third];
      if (sum === 0) {
        ans.push([nums[first], nums[second], nums[third]]);
        while (second < third && nums[second] === nums[second + 1]) second++;
        while (second < third && nums[third] === nums[third - 1]) third--;
        second++;
        third--;
      } else if (sum < 0) second++;
      else third--;
    }
  }

  return ans;
};
