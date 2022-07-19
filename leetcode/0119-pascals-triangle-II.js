/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const ans = new Array(rowIndex + 1).fill(0);
  ans[0] = 1;

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j >= 0; j--) {
      ans[j] += ans[j - 1];
    }
  }

  return ans[rowIndex];
};
