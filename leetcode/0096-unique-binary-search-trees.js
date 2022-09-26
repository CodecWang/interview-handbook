/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // dp[i] 表示 i 个节点种数
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    let ans = 0;
    for (let j = 0; j < i; j++) {
      ans += dp[i - j - 1] * dp[j];
    }
    dp[i] = ans;
  }

  return dp[n];
};
