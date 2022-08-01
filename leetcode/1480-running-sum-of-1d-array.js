/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // const ans = [];
  // let sum = 0;
  // for (const num of nums) {
  //   sum += num;
  //   ans.push(sum);
  // }
  // return ans;

  // 原地修改法
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};
