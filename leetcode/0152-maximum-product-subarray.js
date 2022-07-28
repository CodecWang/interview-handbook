/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let mx = max;
    let mn = min;
    max = Math.max(mn * nums[i], mx * nums[i], nums[i]);
    min = Math.min(mn * nums[i], mx * nums[i], nums[i]);
    ans = Math.max(ans, max);
  }

  return ans;
};
