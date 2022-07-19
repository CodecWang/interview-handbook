/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const ans = [0];

  let last = 1;
  for (let i = 1; i <= n; i++) {
    if (last * 2 === i) {
      ans[i] = 1;
      last = i;
    } else ans[i] = ans[i - last] + 1;
  }

  return ans;

  // 官方：利用位运算：i & (i - 1) === 0，则 i 是 2 的整数次幂
};
