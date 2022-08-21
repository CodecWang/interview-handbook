/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  let p = 2;
  let q = 2;
  while (q < nums.length) {
    if (nums[q] !== nums[p - 2]) {
      nums[p++] = nums[q];
    }
    q++;
  }

  return p;

  // let p = 0;
  // let q = 1;
  // let count = 1;

  // while (q <= nums.length) {
  //   if (nums[q] === nums[p]) count++;
  //   else {
  //     if (count >= 2) nums[p + 1] = nums[p++];
  //     if (q < nums.length) nums[++p] = nums[q];
  //     count = 1;
  //   }
  //   q++;
  // }

  // return p + 1;
};
