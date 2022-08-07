/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (i, j) => {
    grid[i][j] = 0;
    for (const [x, y] of directions) {
      const nx = i + x;
      const ny = j + y;
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === "1")
        dfs(nx, ny);
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};
