/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let maxVal = 0;
  // let minIndex = 0;

  // for (let i = 1; i < prices.length; i++) {
  //   if (prices[i] < prices[minIndex]) {
  //     minIndex = i;
  //   }
  //   maxVal = Math.max(prices[i] - prices[minIndex], maxVal);
  // }

  // return maxVal;

  // 自己写的方式二：
  let max = -Infinity;
  let min = Infinity;

  for (const price of prices) {
    min = Math.min(min, price);
    max = Math.max(price - min, max);
  }

  return max;
};

console.log(maxProfit([10, 7, 4, 6, 5, 1, 2]));
