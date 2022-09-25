/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const ans = [];

  const backTracking = (paths, sum, start) => {
    if (sum > n) return;
    if (paths.length === k && sum === n) return ans.push([...paths]);

    // 循环 i 的减支操作没怎么懂
    for (let i = start; i <= 9 - (k - paths.length) + 1; i++) {
      paths.push(i);
      backTracking(paths, sum + i, i + 1);
      paths.pop(i);
    }
  };

  backTracking([], 0, 1);

  return ans;
};
