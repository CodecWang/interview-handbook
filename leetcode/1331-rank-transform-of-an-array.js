/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const sorted = [...arr].sort((a, b) => a - b);

  const map = new Map();
  let i = 0;
  for (const e of sorted) {
    if (!map.get(e)) map.set(e, i++ + 1);
  }

  const ans = [];
  for (const e of arr) {
    ans.push(map.get(e));
  }

  return ans;
};
