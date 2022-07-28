/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let ans = 0;
  const set = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (set.has(n - 1)) continue;

    let count = 1;
    while (set.has(n + 1)) {
      n++;
      count++;
    }
    ans = Math.max(ans, count);
  }

  return ans;
};
