/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const ans = [];
  nums = nums.sort((a, b) => a - b);
  const n = nums.length;
  const used = new Array(n).fill(0);

  const backTracking = (path, start) => {
    ans.push([...path]);

    for (let i = start; i < n; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      backTracking(path, i + 1);
      path.pop();
      used[i] = false;
    }
  };

  backTracking([], 0);
  return ans;
};
