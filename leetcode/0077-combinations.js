/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const path = [];
  const ans = [];

  const backTrack = (layer, startIndex) => {
    if (layer > k) {
      ans.push([...path]);
      return;
    }

    for (let i = startIndex; i <= n; i++) {
      path.push(i);
      backTrack(layer + 1, i + 1);
      path.pop();
    }
  };

  backTrack(1, 1);
  return ans;
};
