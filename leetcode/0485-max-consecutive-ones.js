/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // let start = -1;
  // let ans = 0;

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === 1) {
  //     if (start === -1) start = i;
  //     ans = Math.max(i - start + 1, ans);
  //   } else start = -1;
  // }

  // return ans;

  // 更优雅的方式
  let ans = 0;
  let count = 0;

  for (const num of nums) {
    if (num === 1) count++;
    else {
      ans = Math.max(ans, count);
      count = 0;
    }
  }

  ans = Math.max(ans, count);
  return ans;
};
