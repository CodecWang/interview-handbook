/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = [];

  const backTracking = (paths, start) => {
    if (paths.length === k) {
      return ans.push([...paths]);
    }

    for (let i = start; i <= n; i++) {
      paths.push(i);
      backTracking(paths, i + 1);
      paths.pop(i);
    }
  };

  backTracking([], 1);
  return ans;
};
