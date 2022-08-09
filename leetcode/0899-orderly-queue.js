/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
  if (k > 1) return Array.from(s).sort().join("");

  let ans = s;
  let sTemp = s;
  for (let i = 0; i < s.length - 1; i++) {
    sTemp = sTemp.substring(1) + sTemp[0];
    if (sTemp < ans) ans = sTemp;
  }
  return ans;
};
