/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ans = [];
  const m = matrix.length;
  const n = matrix[0].length;
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

  let count = 1;
  let row = 0;
  let col = 0;
  let index = 0;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (count++ <= m * n) {
    ans.push(matrix[row][col]);
    visited[row][col] = true;

    const nextRow = row + directions[index][0];
    const nextCol = col + directions[index][1];
    const needChangeDirection =
      nextRow < 0 ||
      nextRow >= m ||
      nextCol < 0 ||
      nextCol >= n ||
      visited[nextRow][nextCol];
    if (needChangeDirection) index = (index + 1) % 4;

    row += directions[index][0];
    col += directions[index][1];
  }

  return ans;
};
