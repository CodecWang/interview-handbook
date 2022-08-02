/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // const n = temperatures.length;
  // const ans = new Array(n).fill(0);
  // const stack = [[temperatures[0], 0]];

  // for (let i = 1; i < n; i++) {
  //   let temp = stack[stack.length - 1];
  //   while (temp && temperatures[i] > temp[0]) {
  //     const index = temp[1];
  //     ans[index] = i - index;
  //     stack.pop();
  //     temp = stack[stack.length - 1];
  //   }
  //   stack.push([temperatures[i], i]);
  // }
  // return ans;

  // 更简单的方式，直接存储索引
  const n = temperatures.length;
  const ans = new Array(n).fill(0);
  const stack = [0];

  for (let i = 1; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const preIndex = stack.pop();
      ans[preIndex] = i - preIndex;
    }
    stack.push(i);
  }
  return ans;
};
