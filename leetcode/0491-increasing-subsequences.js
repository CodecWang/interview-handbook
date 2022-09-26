/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const ans = [];
  const n = nums.length;

  const backTracking = (path, start) => {
    if (path.length >= 2) ans.push([...path]);

    const set = new Set();
    for (let i = start; i < n; i++) {
      if (set.has(nums[i])) continue;
      if (path.length > 0 && nums[i] < path[path.length - 1]) continue;

      path.push(nums[i]);
      set.add(nums[i]);
      backTracking(path, i + 1);
      path.pop();
    }
  };

  backTracking([], 0);
  return ans;
};
