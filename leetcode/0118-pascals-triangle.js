/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ans = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) ans[i] = [1];

    ans[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) ans[i][j] = 1;
      else ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
  }

  return ans;
};
