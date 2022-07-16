/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  let min = Infinity;
  let ans = [];
  for (let i = 1; i < sortedArr.length; i++) {
    const sub = sortedArr[i] - sortedArr[i - 1];
    if (sub === min) {
      ans.push([sortedArr[i - 1], sortedArr[i]]);
    }
    if (sub < min) {
      min = sub;
      ans = [[sortedArr[i - 1], sortedArr[i]]];
    }
  }

  return ans;
};
