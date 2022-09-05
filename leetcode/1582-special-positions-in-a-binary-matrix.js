/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const rowSums = new Array(rows).fill(0);
  const colSums = new Array(cols).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      rowSums[i] += mat[i][j];
      colSums[j] += mat[i][j];
    }
  }

  let ans = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 1 && rowSums[i] === 1 && colSums[j] === 1) ans++;
    }
  }

  return ans;
};
