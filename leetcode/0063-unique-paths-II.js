/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // const m = obstacleGrid.length;
  // const n = obstacleGrid[0].length;
  // const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // dp[0][0] = 1 - obstacleGrid[0][0];

  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (i === 0 && j === 0) continue;
  //     if (obstacleGrid[i][j] === 1) dp[i][j] = 0;
  //     else {
  //       const part1 =
  //         i - 1 < 0 || obstacleGrid[i - 1][j] === 1 ? 0 : dp[i - 1][j];
  //       const part2 =
  //         j - 1 < 0 || obstacleGrid[i][j - 1] === 1 ? 0 : dp[i][j - 1];
  //       dp[i][j] = part1 + part2;
  //     }
  //   }
  // }

  // return dp[m - 1][n - 1];

  // 换种更优雅的写法
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1;
  }

  for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
