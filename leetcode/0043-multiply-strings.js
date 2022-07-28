/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  // 我的方法：数值超出 js 的最大值
  // const len1 = num1.length;
  // let n1 = 0;
  // let base = 1;
  // for (let i = len1 - 1; i >= 0; i--) {
  //   n1 += (num1[i].charCodeAt() - 48) * base;
  //   base *= 10;
  // }

  // let ans = 0;
  // let len2 = num2.length;
  // base = 1;
  // while (len2) {
  //   ans += n1 * base * (num2[len2 - 1].charCodeAt() - 48);
  //   len2--;
  //   base *= 10;
  // }

  // return ans.toString();

  // 改用数据进行拼接
  if (num1 === "0" || num2 === "0") return "0";

  const m = num1.length;
  const n = num2.length;
  const ans = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = num1[i] * num2[j];
      const p = i + j + 1;
      const sum = mul + ans[p];
      ans[p] = sum % 10;
      ans[p - 1] += parseInt(sum / 10);
    }
  }

  if (ans[0] === 0) ans.shift();

  return ans.join("");
};
