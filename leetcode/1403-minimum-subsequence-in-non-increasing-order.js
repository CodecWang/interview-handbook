/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  const sorted = nums.sort((a, b) => a - b);
  const sum = nums.reduce((a, c) => a + c);

  const ans = [];
  let pre = 0;
  for (let i = sorted.length - 1; i >= 0; i--) {
    pre += sorted[i];
    ans.push(sorted[i]);
    if (sum - pre < pre) break;
  }

  return ans;
};
