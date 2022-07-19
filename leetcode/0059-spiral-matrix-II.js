/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let row = 0;
  let col = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let index = 0;
  let curNum = 1;
  const maxNum = n * n;
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (curNum <= maxNum) {
    matrix[row][col] = curNum;
    curNum++;

    const nextRow = row + directions[index][0];
    const nextCol = col + directions[index][1];
    const needChangeDirection =
      nextRow >= n ||
      nextRow < 0 ||
      nextCol >= n ||
      nextCol < 0 ||
      matrix[nextRow][nextCol] !== 0;
    if (needChangeDirection) index = (index + 1) % 4;

    row += directions[index][0];
    col += directions[index][1];
  }

  return matrix;
};
