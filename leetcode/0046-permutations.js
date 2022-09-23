/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // const dfs = (arr) => {
  //   if (arr.length === 1) return [[arr[0]]];

  //   let ans = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     const temp = [...arr];
  //     temp.splice(i, 1);
  //     const rets = dfs(temp);
  //     rets.forEach((ret) => ret.unshift(arr[i]));
  //     ans.push(...rets);
  //   }

  //   return ans;
  // };

  // return dfs(nums);

  // 使用回溯算法
  const ans = [];
  const n = nums.length;
  const visited = new Array(n).fill(false);

  const backTracking = (paths) => {
    if (paths.length === n) return ans.push([...paths]);

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;

      paths.push(nums[i]);
      visited[i] = true;
      backTracking(paths);
      paths.pop(nums[i]);
      visited[i] = false;
    }
  };
  backTracking([]);

  return ans;
};
