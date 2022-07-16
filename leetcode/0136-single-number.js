/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 利用异或运算
  // let ret = undefined;
  // nums.forEach((num) => (ret ^= num));
  // return ret;

  return nums.reduce((a, b) => a ^ b);
};

console.log(singleNumber([2, 2, 1]));
