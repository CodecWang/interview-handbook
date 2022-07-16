/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & 1) === 0) {
      if (i !== p) {
        const temp = nums[p];
        nums[p] = nums[i];
        nums[i] = temp;
      }
      p++;
    }
  }

  return nums;
};
