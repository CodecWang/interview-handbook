/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  const n = s.length;
  const sArr = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    sArr[i][i] = true;
  }

  let max = 1;
  let start = 0;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < n; j++) {
      const right = i + j - 1;
      if (right >= n) break;

      if (s[j] !== s[right]) sArr[j][right] = false;
      else {
        if (right - j <= 2) sArr[j][right] = true;
        else sArr[j][right] = sArr[j + 1][right - 1];
      }
      if (sArr[j][right] && right - j + 1 > max) {
        max = right - j + 1;
        start = j;
      }
    }
  }

  return s.substr(start, max);
};
