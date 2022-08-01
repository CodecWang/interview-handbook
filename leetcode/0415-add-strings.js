/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const m = num1.length;
  const n = num2.length;
  const len = Math.max(m, n);

  const ans = new Array(len + 1).fill(0);
  for (let i = len - 1; i >= 0; i--) {
    const n1 = num1[i - len + m] ? num1[i - len + m].charCodeAt() - 48 : 0;
    const n2 = num2[i - len + n] ? num2[i - len + n].charCodeAt() - 48 : 0;
    const sum = n1 + n2 + ans[i + 1];
    ans[i + 1] = sum % 10;
    ans[i] = parseInt(sum / 10);
  }

  if (ans[0] === 0) ans.shift();
  return ans.join("");
};
