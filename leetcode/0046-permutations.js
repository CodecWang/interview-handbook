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
  const path = [];
  const ans = [];

  const backTrack = (visited) => {
    if (path.length === nums.length) {
      ans.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      path.push(nums[i]);
      backTrack(visited);
      path.pop();
      visited[i] = false;
    }
  };

  const visited = new Array(nums.length);
  backTrack(visited);
  return ans;
};
