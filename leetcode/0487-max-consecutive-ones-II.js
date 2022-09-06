/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // const oneCounts = [-1];
  // let zeroIndex = -1;
  // let ans = 0;

  // for (let i = 0; i <= nums.length; i++) {
  //   if (i === nums.length || nums[i] === 0) {
  //     const ones = i - zeroIndex - 1;
  //     ans = Math.max(ans, ones + (oneCounts[oneCounts.length - 1] || 0) + 1);
  //     oneCounts.push(ones);
  //     zeroIndex = i;
  //   }
  // }

  // return ans;

  // 优化版本：O(1) 空间
  let oneCount = -1;
  let zeroIndex = -1;
  let ans = 0;

  for (let i = 0; i <= nums.length; i++) {
    if (i === nums.length || nums[i] === 0) {
      const ones = i - zeroIndex - 1;
      ans = Math.max(ans, ones + oneCount + 1);
      oneCount = ones;
      zeroIndex = i;
    }
  }

  return ans;
};
