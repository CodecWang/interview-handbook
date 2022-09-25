/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // dp[i] 表示 i 个台阶的方式数
  // dp[i] = dp[i - 1] + dp[i - 2]
  // const dp = [1, 1];
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  // }
  // return dp[n];

  // 动态规划优化
  let p = 1;
  let q = 1;

  for (let i = 2; i <= n; i++) {
    const sum = p + q;
    p = q;
    q = sum;
  }

  return q;
};
