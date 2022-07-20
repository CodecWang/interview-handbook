/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  const col = k % n;
  const row = parseInt(k / n) % m;

  const ans = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[(i + parseInt((j + col) / n)) % m][(j + col) % n] = grid[i][j];
      console.log((i + row) % m, (j + col) % n);
    }
  }

  return ans;
};
