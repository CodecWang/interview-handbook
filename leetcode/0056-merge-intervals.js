/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);

  let ans = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    const left = ans[ans.length - 1];
    const right = intervals[i];

    if (right[0] <= left[1]) {
      ans[ans.length - 1] = [left[0], Math.max(left[1], right[1])];
    } else {
      ans.push(intervals[i]);
    }
  }

  return ans;
};
