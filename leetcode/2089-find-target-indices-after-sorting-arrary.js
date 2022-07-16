/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  // 方法一：先排序，再遍历，这里自己写下冒泡
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 1; j < nums.length - i; j++) {
  //     if (nums[j] < nums[j - 1]) {
  //       const temp = nums[j];
  //       nums[j] = nums[j - 1];
  //       nums[j - 1] = temp;
  //     }
  //   }
  // }
  // const res = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === target) {
  //     res.push(i);
  //   }
  //   if (nums[i] > target) {
  //     break;
  //   }
  // }
  // return res;

  // 方法二：O(n)，小于 target 的都在排序后的左边，所以遍历一次，小于 target 的个数就是 target 的起点
  let lessCount = 0;
  let targetCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      lessCount++;
    }
    if (nums[i] === target) {
      targetCount++;
    }
  }

  const res = [];
  for (let i = 0; i < targetCount; i++) {
    res.push(lessCount + i);
  }

  return res;
};

console.log(targetIndices([1, 2, 5, 2, 3], 3));
