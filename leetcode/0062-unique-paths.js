/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // dp[i, j] 表示到 [i, j] 的路径数
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = 1;

  // dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      const part1 = i - 1 < 0 ? 0 : dp[i - 1][j];
      const part2 = j - 1 < 0 ? 0 : dp[i][j - 1];
      dp[i][j] = part1 + part2;
    }
  }

  return dp[m - 1][n - 1];
};
