/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];

  const backTracking = (sum, paths, start) => {
    if (sum > target) return;
    if (sum === target) return ans.push([...paths]);

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) continue;
      paths.push(candidates[i]);
      backTracking(sum + candidates[i], paths, i);
      paths.pop(candidates[i]);
    }
  };

  backTracking(0, [], 0);
  return ans;
};
