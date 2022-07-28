/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  // const sorted = nums.sort((a, b) => a - b);
  // const n = sorted.length;
  // return Math.max(
  //   nums[n - 1] * nums[n - 2] * nums[n - 3],
  //   nums[0] * nums[1] * nums[2],
  //   nums[0] * nums[1] * nums[n - 1]
  // );

  // 最大的三个数和最小的两个数
  let max1 = -Infinity; // 最大
  let max2 = -Infinity; // 次大
  let max3 = -Infinity; // 三大

  let min2 = Infinity; // 次小
  let min1 = Infinity; // 最小

  for (const num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};
