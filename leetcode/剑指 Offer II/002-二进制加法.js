/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const n = Math.max(a.length, b.length);
  let ans = new Array(a.length).fill(0);
  let carry = 0;

  for (let i = 0; i < n; i++) {
    carry += i < a.length ? a[a.length - i - 1] - "0" : 0;
    carry += i < b.length ? b[b.length - i - 1] - "0" : 0;
    ans[n - i - 1] = carry % 2;
    carry = parseInt(carry / 2);
  }

  if (carry) ans.unshift(1);
  return ans.join("");
};
