/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // const m = matrix.length;
  // const n = matrix[0].length;

  // for (let i = 0; i < m; i++) {
  //   if (target > matrix[i][n - 1]) continue;

  //   let left = 0;
  //   let right = n - 1;

  //   while (left <= right) {
  //     const mid = left + parseInt((right - left) / 2);
  //     if (matrix[i][mid] === target) return true;
  //     if (matrix[i][mid] > target) right = mid - 1;
  //     else left = mid + 1;
  //   }
  // }

  // return false;

  // 一次二分查找（利用二维数组展平）
  const m = matrix.length;
  const n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    const mid = left + parseInt((right - left) / 2);
    const temp = matrix[parseInt(mid / n)][mid % n];
    if (temp === target) return true;
    if (temp > target) right = mid - 1;
    else left = mid + 1;
  }

  return false;
};
