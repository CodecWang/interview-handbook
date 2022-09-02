/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let ans = [...prices];
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
      const index = stack.pop();
      ans[index] -= prices[i];
    }
    stack.push(i);
  }

  return ans;
};
