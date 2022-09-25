/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const n = nums.length;
  const visisted = new Array(n).fill(false);

  const ans = [];
  const backTracking = (path) => {
    if (path.length === n) return ans.push([...path]);

    for (let i = 0; i < n; i++) {
      if (visisted[i]) continue;
      if (i >= 1 && nums[i] === nums[i - 1] && !visisted[i - 1]) continue;

      path.push(nums[i]);
      visisted[i] = true;
      backTracking(path, i);
      visisted[i] = false;
      path.pop(nums[i]);
    }
  };

  backTracking([], -1);
  return ans;
};
