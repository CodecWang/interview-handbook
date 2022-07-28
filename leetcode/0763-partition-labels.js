/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const lastIndex = new Map();

  for (let i = 0; i < s.length; i++) {
    lastIndex.set(s[i], i);
  }

  let ans = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    // 取连续字符串出现的最大 end 值
    end = Math.max(end, lastIndex.get(s[i]));
    if (i === end) {
      ans.push(end - start + 1);
      start = end + 1;
    }
  }

  return ans;
};
