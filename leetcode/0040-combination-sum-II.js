/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const ans = [];
  candidates = candidates.sort((a, b) => a - b);
  const visited = new Array(candidates.length).fill(false);

  const backTracking = (paths, sum, start) => {
    if (sum > target) return;
    if (sum === target) return ans.push([...paths]);

    for (let i = start; i < candidates.length; i++) {
      if (i >= 1 && candidates[i] === candidates[i - 1] && !visited[i - 1])
        continue;
      paths.push(candidates[i]);
      visited[i] = true;
      backTracking(paths, sum + candidates[i], i + 1);
      paths.pop(candidates[i]);
      visited[i] = false;
    }
  };

  backTracking([], 0, 0);

  return ans;
};
