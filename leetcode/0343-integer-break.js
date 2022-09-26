/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  // dp[i] 表示正整数 i 获取的最大值
  const dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    let max = 0;
    for (let j = 1; j < i; j++) {
      max = Math.max(max, j * (i - j), j * dp[i - j]);
    }
    dp[i] = max;
  }

  return dp[n];
};
