/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let fn2 = 0;
  let fn1 = 0;

  for (let i = 0; i < cost.length; i++) {
    const sum = Math.min(fn1, fn2) + cost[i];
    fn2 = fn1;
    fn1 = sum;
  }

  return Math.min(fn1, fn2);
};
