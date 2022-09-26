/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [];
  const n = nums.length;

  const backTracking = (path, start) => {
    ans.push([...path]);
    for (let i = start; i < n; i++) {
      path.push(nums[i]);
      backTracking(path, i + 1);
      path.pop();
    }
  };

  backTracking([], 0);
  return ans;
};
