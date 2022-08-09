/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // 总体原则：较小数尽量靠右，较大数尽可能小
  // let i = nums.length - 2;
  // for (i; i >= 0; i--) {
  //   if (nums[i] < nums[i + 1]) break;
  // }

  // if (i >= 0) {
  //   let j = nums.length - 1;
  //   for (j; j > i; j--) {
  //     if (nums[j] > nums[i]) {
  //       [nums[i], nums[j]] = [nums[j], nums[i]];
  //       break;
  //     }
  //   }
  // }

  // 官方更简单的方式：
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let p = i + 1;
  let q = nums.length - 1;
  while (p < q) {
    [nums[p], nums[q]] = [nums[q], nums[p]];
    p++;
    q--;
  }
};
