/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];

  const sWindow = new Array(26).fill(0);
  const countArr = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    sWindow[s[i].charCodeAt() - 97]++;
    countArr[p[i].charCodeAt() - 97]++;
  }

  const ans = [];
  if (sWindow.toString() === countArr.toString()) ans.push(0);

  for (let i = 0; i < s.length - p.length; i++) {
    sWindow[s[i].charCodeAt() - 97]--;
    sWindow[s[i + p.length].charCodeAt() - 97]++;
    if (sWindow.toString() === countArr.toString()) ans.push(i + 1);
  }

  return ans;
};
