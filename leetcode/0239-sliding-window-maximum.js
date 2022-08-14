/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 维护一个单调队列
  const ans = [];
  const stack = [];
  let i = 0;
  for (i; i < k; i++) {
    while (nums[i] > stack[stack.length - 1]) {
      stack.pop();
    }
    stack.push(nums[i]);
  }

  ans.push(stack[0]);
  for (i; i < nums.length; i++) {
    if (nums[i - k] === stack[0]) stack.shift();

    while (nums[i] > stack[stack.length - 1]) {
      stack.pop();
    }
    stack.push(nums[i]);

    ans.push(stack[0]);
  }

  return ans;
};
