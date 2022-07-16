/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  let ans = 0;
  const n = costs.length;

  for (let i = 0; i < n; i++) {
    let min = Infinity;
    for (let j = 0; j < 3; j++) {
      if (costs[i][j] < min) {
        min = costs[i][j];
      }
    }
    ans += min;
  }

  return ans;
};
