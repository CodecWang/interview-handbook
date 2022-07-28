/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let count = 0;
  const visited = Array.from(new Array(m), () => new Array(n).fill(false));

  const dfs = (row, col) => {
    if (row >= m || col >= n || row < 0 || col < 0 || visited[row][col]) return;
    const sum = digitsSum(row) + digitsSum(col);
    if (sum > k) return;

    visited[row][col] = true;
    count++;

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  dfs(0, 0);
  return count;
};

function digitsSum(n) {
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = parseInt(n / 10);
  }
  return sum;
}
