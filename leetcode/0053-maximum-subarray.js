/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let [fn, max] = [nums[0], nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    fn = Math.max(fn + num, num);
    max = Math.max(max, fn);
    console.log(fn, max);
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
