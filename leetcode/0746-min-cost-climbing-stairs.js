/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // dp[i] 表示 爬到 i 层的最低花费
  // const dp = [0, 0];
  // const n = cost.length;
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  // }
  // return dp[n];

  // dynamic programming optimized
  let p = 0;
  let q = 0;
  const n = cost.length;
  for (let i = 2; i <= n; i++) {
    const temp = Math.min(q + cost[i - 1], p + cost[i - 2]);
    p = q;
    q = temp;
  }

  return q;
};
