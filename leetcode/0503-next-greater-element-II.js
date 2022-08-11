/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  // 我的方法：用双指针
  // const stack = [];
  // const ans = new Array(nums.length).fill(-1);

  // let p = 0;
  // let q = nums.length - 1;
  // while (p < nums.length && q >= 0) {
  //   while (nums[p] > nums[q]) {
  //     ans[q] = nums[p];
  //     q--;
  //   }

  //   while (stack.length && nums[p] > nums[stack[stack.length - 1]]) {
  //     const index = stack.pop();
  //     ans[index] = nums[p];
  //   }

  //   stack.push(p);
  //   p++;
  // }

  // return ans;

  // 上面的方法太麻烦了，其实两个拼接一下就好了
  const n = nums.length;
  const stack = [];
  const ans = new Array(nums.length).fill(-1);

  for (let i = 0; i < n * 2; i++) {
    while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      ans[index] = nums[i % n];
    }
    stack.push(i % n);
  }

  return ans;
};
