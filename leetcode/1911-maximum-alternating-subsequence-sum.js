/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  // 偶数结尾最大值
  let n1 = nums[0];
  // 奇数结尾最大值
  let n2 = 0;

  for (let i = 1; i < nums.length; i++) {
    // 当前为偶数
    n1 = Math.max(n2 + nums[i], n1);
    // 当前为奇数
    n2 = Math.max(n1 - nums[i], n2);
  }

  return n1;
};
