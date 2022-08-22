/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let ans = Infinity;
  let start = 0;
  let end = 0;
  let sum = 0;

  while (end < nums.length) {
    sum += nums[end++];
    while (sum >= target) {
      ans = Math.min(ans, end - start);
      sum -= nums[start++];
    }
  }

  return ans === Infinity ? 0 : ans;
};
