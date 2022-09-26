/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const n = nums.length;
  const used = new Array(n).fill(false);

  const ans = [];
  const backTracking = (path) => {
    if (path.length === n) return ans.push([...path]);

    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      if (i >= 1 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      path.push(nums[i]);
      used[i] = true;
      backTracking(path, i);
      used[i] = false;
      path.pop();
    }
  };

  backTracking([], -1);
  return ans;
};
